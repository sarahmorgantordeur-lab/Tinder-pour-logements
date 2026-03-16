import prisma from '../config/db.js';

const ALLOWED_TRANSITIONS = {
    draft:     ['published', 'archived'],
    published: ['draft', 'rented', 'archived'],
    rented:    ['published', 'archived'],
    archived:  ['draft']
};

const ownerSelect = {
    id: true,
    firstname: true,
    lastname: true,
    email: true,
    phone: true,
    role: true,
    agency: {
        select: {
            id: true,
            nom_agence: true,
            numero_tva: true,
            site_web: true
        }
    }
};

class PropertyService {

    static async create(data, ownerId) {
        const { title, description, property_type, price, surface, rooms, parking, address } = data;

        if (!title || !property_type || !price || !surface || !rooms || !address?.street) {
            throw new Error("All required fields must be provided");
        }

        return prisma.property.create({
            data: {
                title,
                description,
                property_type,
                status: data.status || 'published',
                price: parseInt(price),
                surface: parseInt(surface),
                rooms: parseInt(rooms),
                parking: parking || false,
                address: {
                    create: {
                        number: address.number || '',
                        box: address.box || null,
                        street: address.street,
                        city: address.city,
                        postal_code: address.postal_code,
                        country: address.country || 'Belgique'
                    }
                },
                owner: { connect: { id: ownerId } }
            },
            include: {
                address: true,
                owner: { select: ownerSelect },
                photos: true
            }
        });
    }

    static async getAll(filters = {}, pagination = { skip: 0, take: 20 }) {
    const where = { status: { not: 'archived' } };

    if (filters.propertyType) where.property_type = filters.propertyType;
    if (filters.city) where.address = { city: { contains: filters.city, mode: 'insensitive' } };
    if (filters.minPrice || filters.maxPrice) {
        where.price = {};
        if (filters.minPrice) where.price.gte = parseInt(filters.minPrice);
        if (filters.maxPrice) where.price.lte = parseInt(filters.maxPrice);
    }
    if (filters.minSurface) where.surface = { gte: parseInt(filters.minSurface) };
    if (filters.minRooms) where.rooms = { gte: parseInt(filters.minRooms) };

    const properties = await prisma.property.findMany({
        where,
        include: {
            address: true,
            owner: { select: ownerSelect },
            photos: true
        },
        orderBy: { created_at: 'desc' },
        skip: pagination.skip,
        take: pagination.take
    });

    const total = await prisma.property.count({ where });

    return { total, properties };
}

    static async getById(id) {
        const property = await prisma.property.findUnique({
            where: { id },
            include: {
                address: true,
                owner: { select: { ...ownerSelect, role: true } },
                photos: true
            }
        });

        if (!property) throw new Error("Property not found");
        return property;
    }

    static async getByOwner(ownerId) {
        return prisma.property.findMany({
            where: { owner_id: ownerId },
            include: {
                address: true,
                photos: true,
                swipes: {
                    where: { direction: true },
                    include: {
                        user: {
                            select: { id: true, firstname: true, lastname: true, bio: true }
                        }
                    }
                }
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async update(id, data, ownerId) {
        const property = await prisma.property.findUnique({ where: { id } });

        if (!property) throw new Error("Property not found");
        if (property.owner_id !== ownerId) throw new Error("Unauthorized to update this property");

        const prismaData = {};
        if (data.title !== undefined) prismaData.title = data.title;
        if (data.description !== undefined) prismaData.description = data.description;
        if (data.property_type !== undefined) prismaData.property_type = data.property_type;
        if (data.price !== undefined) prismaData.price = parseInt(data.price);
        if (data.surface !== undefined) prismaData.surface = parseInt(data.surface);
        if (data.rooms !== undefined) prismaData.rooms = parseInt(data.rooms);
        if (data.parking !== undefined) prismaData.parking = data.parking;

        if (data.address) {
            await prisma.address.update({
                where: { id: property.address_id },
                data: {
                    number: data.address.number,
                    box: data.address.box,
                    street: data.address.street,
                    city: data.address.city,
                    postal_code: data.address.postal_code,
                    country: data.address.country
                }
            });
        }

        return prisma.property.update({
            where: { id },
            data: prismaData,
            include: { address: true, photos: true }
        });
    }

    static async changeStatus(id, newStatus, ownerId) {
        const property = await prisma.property.findUnique({ where: { id } });

        if (!property) throw new Error("Property not found");
        if (property.owner_id !== ownerId) throw new Error("Unauthorized to update this property");

        const allowed = ALLOWED_TRANSITIONS[property.status];
        if (!allowed?.includes(newStatus)) {
            throw new Error(`Transition invalide : ${property.status} → ${newStatus}`);
        }

        const updated = await prisma.property.update({
            where: { id },
            data: { status: newStatus },
            include: { address: true, photos: true }
        });

        // Effets de bord sur les conversations
        if (newStatus === 'rented' || newStatus === 'archived') {
            const conversations = await prisma.conversation.findMany({
                where: { property_id: id },
                select: { id: true }
            });
            const conversationIds = conversations.map(c => c.id);

            if (conversationIds.length > 0) {
                await prisma.message.updateMany({
                    where: { conversation_id: { in: conversationIds }, deleted_at: null },
                    data: { deleted_at: new Date() }
                });
            }
        }

        // Archivé : supprimer les swipes (le bien ne réapparaîtra plus dans le feed)
        if (newStatus === 'archived') {
            await prisma.swipe.deleteMany({ where: { property_id: id } });
        }

        return updated;
    }

    static async delete(id, ownerId) {
        const property = await prisma.property.findUnique({ where: { id } });

        if (!property) throw new Error("Property not found");
        if (property.owner_id !== ownerId) throw new Error("Unauthorized to delete this property");

        return prisma.property.delete({ where: { id } });
    }

    static async addPhoto(id, photoUrl, ownerId) {
        const property = await prisma.property.findUnique({ where: { id } });

        if (!property) throw new Error("Property not found");
        if (property.owner_id !== ownerId) throw new Error("Unauthorized to modify this property");

        const lastPhoto = await prisma.announcementPhoto.findFirst({
            where: { property_id: id },
            orderBy: { order: 'desc' }
        });

        await prisma.announcementPhoto.create({
            data: {
                url: photoUrl,
                order: lastPhoto ? lastPhoto.order + 1 : 0,
                property_id: id
            }
        });

        return prisma.property.findUnique({
            where: { id },
            include: { address: true, photos: { orderBy: { order: 'asc' } } }
        });
    }

    static async removePhoto(id, photoUrl, ownerId) {
        const property = await prisma.property.findUnique({
            where: { id },
            include: { photos: true }
        });

        if (!property) throw new Error("Property not found");
        if (property.owner_id !== ownerId) throw new Error("Unauthorized to modify this property");

        const photo = property.photos.find(p => p.url === photoUrl);
        if (photo) {
            await prisma.announcementPhoto.delete({ where: { id: photo.id } });
        }

        return prisma.property.findUnique({
            where: { id },
            include: { address: true, photos: { orderBy: { order: 'asc' } } }
        });
    }
}

export default PropertyService;

import prisma from '../config/db.js';

class ApartmentService {

    static async create(apartmentData, ownerId) {
        const {
            title,
            description,
            address,
            region,
            propertyType,
            listingType,
            price,
            surface,
            rooms,
            pictures,
            tags,
            availability
        } = apartmentData;

        if (!title || !address || !region || !propertyType || !listingType || !price || !surface || !rooms) {
            throw new Error("All required fields must be provided");
        }

        return prisma.apartment.create({
            data: {
                title,
                description,
                address,
                region,
                property_type: propertyType,
                listing_type: listingType,
                price: parseFloat(price),
                surface: parseFloat(surface),
                rooms: parseInt(rooms),
                pictures: pictures || [],
                tags: tags || [],
                availability: availability !== undefined ? availability : true,
                owner_id: ownerId
            },
            include: {
                owner: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        phone: true,
                        company_name: true
                    }
                }
            }
        });
    }

    static async getAll(filters = {}) {
        const where = {};

        if (filters.propertyType) where.property_type = filters.propertyType;
        if (filters.listingType) where.listing_type = filters.listingType;
        if (filters.region) where.region = { contains: filters.region, mode: 'insensitive' };
        if (filters.minPrice || filters.maxPrice) {
            where.price = {};
            if (filters.minPrice) where.price.gte = parseFloat(filters.minPrice);
            if (filters.maxPrice) where.price.lte = parseFloat(filters.maxPrice);
        }
        if (filters.minSurface) where.surface = { gte: parseFloat(filters.minSurface) };
        if (filters.availability !== undefined) where.availability = filters.availability === 'true' || filters.availability === true;

        return prisma.apartment.findMany({
            where,
            include: {
                owner: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        phone: true,
                        company_name: true
                    }
                }
            }
        });
    }

    static async getById(id) {
        const apartment = await prisma.apartment.findUnique({
            where: { id },
            include: {
                owner: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        phone: true,
                        company_name: true,
                        role: true
                    }
                }
            }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        return apartment;
    }

    static async getByOwner(ownerId) {
        return prisma.apartment.findMany({
            where: { owner_id: ownerId },
            orderBy: { created_at: 'desc' }
        });
    }

    static async update(id, updateData, ownerId) {
        const apartment = await prisma.apartment.findUnique({
            where: { id }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner_id !== ownerId) {
            throw new Error("Unauthorized to update this apartment");
        }

        // Convertir les noms de champs camelCase vers snake_case
        const prismaData = {};
        if (updateData.title !== undefined) prismaData.title = updateData.title;
        if (updateData.description !== undefined) prismaData.description = updateData.description;
        if (updateData.address !== undefined) prismaData.address = updateData.address;
        if (updateData.region !== undefined) prismaData.region = updateData.region;
        if (updateData.propertyType !== undefined) prismaData.property_type = updateData.propertyType;
        if (updateData.listingType !== undefined) prismaData.listing_type = updateData.listingType;
        if (updateData.price !== undefined) prismaData.price = parseFloat(updateData.price);
        if (updateData.surface !== undefined) prismaData.surface = parseFloat(updateData.surface);
        if (updateData.rooms !== undefined) prismaData.rooms = parseInt(updateData.rooms);
        if (updateData.pictures !== undefined) prismaData.pictures = updateData.pictures;
        if (updateData.tags !== undefined) prismaData.tags = updateData.tags;
        if (updateData.availability !== undefined) prismaData.availability = updateData.availability;

        return prisma.apartment.update({
            where: { id },
            data: prismaData
        });
    }

    static async delete(id, ownerId) {
        const apartment = await prisma.apartment.findUnique({
            where: { id }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner_id !== ownerId) {
            throw new Error("Unauthorized to delete this apartment");
        }

        return prisma.apartment.delete({
            where: { id }
        });
    }

    static async addPhoto(id, photoUrl, ownerId) {
        const apartment = await prisma.apartment.findUnique({
            where: { id }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner_id !== ownerId) {
            throw new Error("Unauthorized to modify this apartment");
        }

        return prisma.apartment.update({
            where: { id },
            data: {
                pictures: {
                    push: photoUrl
                }
            }
        });
    }

    static async removePhoto(id, photoUrl, ownerId) {
        const apartment = await prisma.apartment.findUnique({
            where: { id }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner_id !== ownerId) {
            throw new Error("Unauthorized to modify this apartment");
        }

        const updatedPictures = apartment.pictures.filter(photo => photo !== photoUrl);

        return prisma.apartment.update({
            where: { id },
            data: {
                pictures: updatedPictures
            }
        });
    }
}

export default ApartmentService;

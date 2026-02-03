import prisma from '../config/db.js';
import GeocodingService from './geocodingService.js';

class ApartmentService {

    static async create(apartmentData, ownerId) {
        const {
            title,
            description,
            address,
            region,
            city,
            postalCode,
            country,
            latitude,
            longitude,
            propertyType,
            listingType,
            price,
            surface,
            rooms,
            tags,
            availability
        } = apartmentData;

        if (!title || !address || !region || !propertyType || !listingType || !price || !surface || !rooms) {
            throw new Error("All required fields must be provided");
        }

        // Géocodage automatique si coordonnées non fournies
        let lat = latitude ? parseFloat(latitude) : null;
        let lon = longitude ? parseFloat(longitude) : null;

        if (!lat || !lon) {
            const geocodeResult = await GeocodingService.geocodeAddress(
                address,
                city || null,
                postalCode || null,
                country || 'France'
            );

            if (geocodeResult) {
                lat = geocodeResult.latitude;
                lon = geocodeResult.longitude;
            }
        }

        return prisma.apartment.create({
            data: {
                title,
                description,
                address,
                region,
                city: city || null,
                postal_code: postalCode || null,
                country: country || 'France',
                latitude: lat,
                longitude: lon,
                property_type: propertyType,
                listing_type: listingType,
                price: parseFloat(price),
                surface: parseFloat(surface),
                rooms: parseInt(rooms),
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
                },
                pictures: true
            }
        });
    }

    static async getAll(filters = {}) {
        const where = {};

        if (filters.propertyType) where.property_type = filters.propertyType;
        if (filters.listingType) where.listing_type = filters.listingType;
        if (filters.region) where.region = { contains: filters.region, mode: 'insensitive' };
        if (filters.city) where.city = { contains: filters.city, mode: 'insensitive' };
        if (filters.minPrice || filters.maxPrice) {
            where.price = {};
            if (filters.minPrice) where.price.gte = parseFloat(filters.minPrice);
            if (filters.maxPrice) where.price.lte = parseFloat(filters.maxPrice);
        }
        if (filters.minSurface) where.surface = { gte: parseFloat(filters.minSurface) };
        if (filters.minRooms) where.rooms = { gte: parseInt(filters.minRooms) };
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
                },
                pictures: true
            },
            orderBy: { created_at: 'desc' }
        });
    }

    /**
     * Recherche des appartements par proximité géographique
     * @param {number} latitude - Latitude du point de recherche
     * @param {number} longitude - Longitude du point de recherche
     * @param {number} radiusKm - Rayon de recherche en km (défaut: 10)
     * @param {object} filters - Filtres supplémentaires
     * @returns {Promise<Array>} Appartements triés par distance
     */
    static async searchByLocation(latitude, longitude, radiusKm = 10, filters = {}) {
        if (!GeocodingService.isValidCoordinates(latitude, longitude)) {
            throw new Error("Invalid coordinates");
        }

        // Calculer la bounding box pour filtrer grossièrement
        const bbox = GeocodingService.getBoundingBox(latitude, longitude, radiusKm);

        const where = {
            latitude: { not: null },
            longitude: { not: null },
            AND: [
                { latitude: { gte: bbox.minLat } },
                { latitude: { lte: bbox.maxLat } },
                { longitude: { gte: bbox.minLon } },
                { longitude: { lte: bbox.maxLon } }
            ]
        };

        // Appliquer les filtres supplémentaires
        if (filters.propertyType) where.property_type = filters.propertyType;
        if (filters.listingType) where.listing_type = filters.listingType;
        if (filters.minPrice || filters.maxPrice) {
            where.price = {};
            if (filters.minPrice) where.price.gte = parseFloat(filters.minPrice);
            if (filters.maxPrice) where.price.lte = parseFloat(filters.maxPrice);
        }
        if (filters.minSurface) where.surface = { gte: parseFloat(filters.minSurface) };
        if (filters.minRooms) where.rooms = { gte: parseInt(filters.minRooms) };
        if (filters.availability !== undefined) {
            where.availability = filters.availability === 'true' || filters.availability === true;
        } else {
            where.availability = true; // Par défaut, seulement les disponibles
        }

        const apartments = await prisma.apartment.findMany({
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
                },
                pictures: true
            }
        });

        // Calculer la distance exacte et filtrer par rayon
        const apartmentsWithDistance = apartments
            .map(apt => ({
                ...apt,
                distance: GeocodingService.calculateDistance(
                    latitude,
                    longitude,
                    apt.latitude,
                    apt.longitude
                )
            }))
            .filter(apt => apt.distance <= radiusKm)
            .sort((a, b) => a.distance - b.distance);

        return apartmentsWithDistance;
    }

    /**
     * Recherche par adresse textuelle (géocode l'adresse puis recherche par proximité)
     */
    static async searchByAddress(address, radiusKm = 10, filters = {}) {
        const geocodeResult = await GeocodingService.geocodeAddress(address);

        if (!geocodeResult) {
            throw new Error("Could not geocode the provided address");
        }

        return this.searchByLocation(
            geocodeResult.latitude,
            geocodeResult.longitude,
            radiusKm,
            filters
        );
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
                },
                pictures: true
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
            include: { pictures: true },
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
        if (updateData.city !== undefined) prismaData.city = updateData.city;
        if (updateData.postalCode !== undefined) prismaData.postal_code = updateData.postalCode;
        if (updateData.country !== undefined) prismaData.country = updateData.country;
        if (updateData.propertyType !== undefined) prismaData.property_type = updateData.propertyType;
        if (updateData.listingType !== undefined) prismaData.listing_type = updateData.listingType;
        if (updateData.price !== undefined) prismaData.price = parseFloat(updateData.price);
        if (updateData.surface !== undefined) prismaData.surface = parseFloat(updateData.surface);
        if (updateData.rooms !== undefined) prismaData.rooms = parseInt(updateData.rooms);
        if (updateData.tags !== undefined) prismaData.tags = updateData.tags;
        if (updateData.availability !== undefined) prismaData.availability = updateData.availability;

        // Gérer les coordonnées
        if (updateData.latitude !== undefined) prismaData.latitude = parseFloat(updateData.latitude);
        if (updateData.longitude !== undefined) prismaData.longitude = parseFloat(updateData.longitude);

        // Si l'adresse change et pas de nouvelles coordonnées, re-géocoder
        if (updateData.address && updateData.latitude === undefined) {
            const geocodeResult = await GeocodingService.geocodeAddress(
                updateData.address,
                updateData.city || apartment.city,
                updateData.postalCode || apartment.postal_code,
                updateData.country || apartment.country
            );

            if (geocodeResult) {
                prismaData.latitude = geocodeResult.latitude;
                prismaData.longitude = geocodeResult.longitude;
            }
        }

        return prisma.apartment.update({
            where: { id },
            data: prismaData
        });
    }

    /**
     * Met à jour les coordonnées d'un appartement (géocodage manuel)
     */
    static async updateCoordinates(id, ownerId) {
        const apartment = await prisma.apartment.findUnique({
            where: { id }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner_id !== ownerId) {
            throw new Error("Unauthorized");
        }

        const geocodeResult = await GeocodingService.geocodeAddress(
            apartment.address,
            apartment.city,
            apartment.postal_code,
            apartment.country
        );

        if (!geocodeResult) {
            throw new Error("Could not geocode the address");
        }

        return prisma.apartment.update({
            where: { id },
            data: {
                latitude: geocodeResult.latitude,
                longitude: geocodeResult.longitude
            }
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

        // Créer une nouvelle Picture liée à l'appartement
        await prisma.picture.create({
            data: {
                url: photoUrl,
                type: 'apartment',
                apartment_id: id
            }
        });

        // Retourner l'appartement avec ses photos mises à jour
        return prisma.apartment.findUnique({
            where: { id },
            include: { pictures: true }
        });
    }

    static async removePhoto(id, photoUrl, ownerId) {
        const apartment = await prisma.apartment.findUnique({
            where: { id },
            include: { pictures: true }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner_id !== ownerId) {
            throw new Error("Unauthorized to modify this apartment");
        }

        // Trouver et supprimer la photo
        const picture = apartment.pictures.find(p => p.url === photoUrl);
        if (picture) {
            await prisma.picture.delete({
                where: { id: picture.id }
            });
        }

        // Retourner l'appartement avec ses photos mises à jour
        return prisma.apartment.findUnique({
            where: { id },
            include: { pictures: true }
        });
    }
}

export default ApartmentService;

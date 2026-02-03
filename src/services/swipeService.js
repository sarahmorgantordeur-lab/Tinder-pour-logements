import prisma from '../config/db.js';
import EmailService from './emailService.js';

class SwipeService {

    static async swipe(userId, apartmentId, direction) {
        // Vérifier que l'appartement existe
        const apartment = await prisma.apartment.findUnique({
            where: { id: apartmentId },
            include: { owner: true }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner_id === userId) {
            throw new Error("You cannot swipe on your own apartment");
        }

        const existingSwipe = await prisma.swipe.findUnique({
            where: {
                user_id_apartment_id: {
                    user_id: userId,
                    apartment_id: apartmentId
                }
            }
        });

        let swipe;

        if (existingSwipe) {
            swipe = await prisma.swipe.update({
                where: { id: existingSwipe.id },
                data: { direction }
            });
        } else {
            swipe = await prisma.swipe.create({
                data: {
                    user_id: userId,
                    apartment_id: apartmentId,
                    direction
                }
            });
        }
        if (direction === 'like') {
            EmailService.sendNewLikeNotification(apartment.owner_id, apartmentId, userId).catch(err => {
                console.error('Failed to send like notification:', err.message);
            });
        }

        return swipe;
    }

    static async getApartmentsToSwipe(userId, limit = 10) {
        // Récupérer les IDs des appartements déjà swipés
        const swipedApartments = await prisma.swipe.findMany({
            where: { user_id: userId },
            select: { apartment_id: true }
        });

        const swipedIds = swipedApartments.map(s => s.apartment_id);

        // Récupérer les préférences de l'utilisateur
        const preferences = await prisma.preferences.findUnique({
            where: { user_id: userId }
        });

        // Construire le filtre
        const where = {
            availability: true,
            owner_id: { not: userId },
            id: { notIn: swipedIds }
        };

        if (preferences) {
            if (preferences.property_type?.length > 0) {
                where.property_type = { in: preferences.property_type };
            }
            if (preferences.listing_type) {
                where.listing_type = preferences.listing_type;
            }
            if (preferences.min_price !== null) {
                where.price = { ...where.price, gte: preferences.min_price };
            }
            if (preferences.max_price !== null) {
                where.price = { ...where.price, lte: preferences.max_price };
            }
            if (preferences.min_surface !== null) {
                where.surface = { gte: preferences.min_surface };
            }
            if (preferences.regions?.length > 0) {
                where.region = { in: preferences.regions, mode: 'insensitive' };
            }
        }

        const apartments = await prisma.apartment.findMany({
            where,
            take: limit,
            orderBy: { created_at: 'desc' },
            include: {
                owner: {
                    select: {
                        id: true,
                        username: true,
                        avatar: true,
                        company_name: true
                    }
                }
            }
        });

        return apartments;
    }

    static async getUserSwipes(userId, direction = null) {
        const where = { user_id: userId };
        if (direction) {
            where.direction = direction;
        }

        return prisma.swipe.findMany({
            where,
            include: {
                apartment: {
                    include: {
                        owner: {
                            select: {
                                id: true,
                                username: true,
                                avatar: true
                            }
                        }
                    }
                }
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async getLikesForOwner(ownerId) {
        // Récupérer tous les appartements du propriétaire
        const apartments = await prisma.apartment.findMany({
            where: { owner_id: ownerId },
            select: { id: true }
        });

        const apartmentIds = apartments.map(a => a.id);

        // Récupérer tous les likes sur ces appartements
        return prisma.swipe.findMany({
            where: {
                apartment_id: { in: apartmentIds },
                direction: 'like'
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        phone: true,
                        avatar: true,
                        profile: true
                    }
                },
                apartment: {
                    select: {
                        id: true,
                        title: true,
                        address: true,
                        price: true,
                        pictures: true
                    }
                }
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async getLikesForApartment(apartmentId, ownerId) {
        // Vérifier que l'appartement appartient au propriétaire
        const apartment = await prisma.apartment.findUnique({
            where: { id: apartmentId }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner_id !== ownerId) {
            throw new Error("Unauthorized to view likes for this apartment");
        }

        return prisma.swipe.findMany({
            where: {
                apartment_id: apartmentId,
                direction: 'like'
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        phone: true,
                        avatar: true,
                        profile: true,
                        documents: true
                    }
                }
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async deleteSwipe(userId, apartmentId) {
        const swipe = await prisma.swipe.findUnique({
            where: {
                user_id_apartment_id: {
                    user_id: userId,
                    apartment_id: apartmentId
                }
            }
        });

        if (!swipe) {
            throw new Error("Swipe not found");
        }

        return prisma.swipe.delete({
            where: { id: swipe.id }
        });
    }
}

export default SwipeService;

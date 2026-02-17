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

        // Récupérer les IDs des appartements déjà vus (pour baisser la priorité)
        const viewedApartments = await prisma.viewedApartment.findMany({
            where: { user_id: userId },
            select: { apartment_id: true }
        });

        const viewedSet = new Set(viewedApartments.map(v => v.apartment_id));

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
        const candidateLimit = Math.min(Math.max(limit * 5, 30), 100);

        const apartments = await prisma.apartment.findMany({
            where,
            take: candidateLimit,
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

        const scored = apartments.map(apartment => ({
            apartment,
            score: SwipeService.computeSuggestionScore(apartment, preferences, viewedSet)
        }));

        scored.sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return new Date(b.apartment.created_at).getTime() - new Date(a.apartment.created_at).getTime();
        });

        return scored.slice(0, limit).map(s => s.apartment);
    }

    static computeSuggestionScore(apartment, preferences, viewedSet) {
        let score = 0;

        if (preferences) {
            if (preferences.property_type?.length > 0) {
                score += preferences.property_type.includes(apartment.property_type) ? 3 : -1;
            }

            if (preferences.listing_type) {
                score += preferences.listing_type === apartment.listing_type ? 2 : -1;
            }

            const minPrice = preferences.min_price;
            const maxPrice = preferences.max_price;
            if (minPrice !== null || maxPrice !== null) {
                const price = apartment.price;
                if ((minPrice === null || price >= minPrice) && (maxPrice === null || price <= maxPrice)) {
                    score += 3;
                } else {
                    score -= 2;
                }
            }

            if (preferences.min_surface !== null) {
                score += apartment.surface >= preferences.min_surface ? 2 : -2;
            }

            if (preferences.regions?.length > 0) {
                const regionMatch = preferences.regions.some(r =>
                    r && apartment.region && r.toLowerCase() === apartment.region.toLowerCase()
                );
                if (regionMatch) score += 2;
            }

            if (preferences.tags?.length > 0 && apartment.tags?.length > 0) {
                const tagSet = new Set(apartment.tags.map(t => t.toLowerCase()));
                const overlap = preferences.tags.filter(t => tagSet.has(t.toLowerCase())).length;
                score += Math.min(overlap, 3);
            }
        }

        if (viewedSet && viewedSet.has(apartment.id)) {
            score -= 1;
        }

        const createdAt = new Date(apartment.created_at);
        if (!Number.isNaN(createdAt.getTime())) {
            const days = (Date.now() - createdAt.getTime()) / (1000 * 60 * 60 * 24);
            if (days <= 14) score += 1;
            else if (days <= 30) score += 0.5;
        }

        return score;
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

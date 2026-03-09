import prisma from '../config/db.js';

class SwipeService {

    static async swipe(userId, propertyId, direction) {
        const property = await prisma.property.findUnique({
            where: { id: propertyId },
            include: { owner: true }
        });

        if (!property) throw new Error("Property not found");
        if (property.owner_id === userId) throw new Error("You cannot swipe on your own property");

        const existingSwipe = await prisma.swipe.findUnique({
            where: {
                user_id_property_id: {
                    user_id: userId,
                    property_id: propertyId
                }
            }
        });

        let swipe;
        if (existingSwipe) {
            swipe = await prisma.swipe.update({
                where: { id: existingSwipe.id },
                data: { direction }
            });

            // Si le like est retiré, supprimer la conversation associée
            if (!direction) {
                await prisma.conversation.deleteMany({ where: { swipe_id: swipe.id } });
            }
        } else {
            swipe = await prisma.swipe.create({
                data: { user_id: userId, property_id: propertyId, direction }
            });
        }

        // Like → ouvrir la conversation automatiquement
        if (direction === true) {
            const existing = await prisma.conversation.findUnique({ where: { swipe_id: swipe.id } });
            if (!existing) {
                await prisma.conversation.create({
                    data: {
                        swipe_id: swipe.id,
                        property_id: propertyId,
                        tenant_id: userId,
                        owner_id: property.owner_id
                    }
                });
            }
        }

        return swipe;
    }

    static async getPropertiesToSwipe(userId, limit = 10) {
        const swipedProperties = await prisma.swipe.findMany({
            where: { user_id: userId },
            select: { property_id: true }
        });
        const swipedIds = swipedProperties.map(s => s.property_id);

        const tenantProfile = await prisma.tenantProfile.findUnique({
            where: { user_id: userId }
        });

        const where = {
            status: 'published',
            owner_id: { not: userId },
            id: { notIn: swipedIds }
        };

        if (tenantProfile) {
            if (tenantProfile.property_types?.length > 0) {
                where.property_type = { in: tenantProfile.property_types };
            }
            if (tenantProfile.budget_max !== null) {
                where.price = { lte: tenantProfile.budget_max };
            }
            if (tenantProfile.min_surface !== null) {
                where.surface = { gte: tenantProfile.min_surface };
            }
        }

        const properties = await prisma.property.findMany({
            where,
            take: limit * 3,
            orderBy: { created_at: 'desc' },
            include: {
                address: true,
                owner: {
                    select: {
                        id: true,
                        firstname: true,
                        lastname: true,
                        avatar: true,
                        agency: true
                    }
                },
                photos: { orderBy: { order: 'asc' } }
            }
        });

        const scored = properties.map(p => ({
            property: p,
            score: SwipeService.computeScore(p, tenantProfile)
        }));
        scored.sort((a, b) => b.score - a.score);
        return scored.slice(0, limit).map(s => s.property);
    }

    static computeScore(property, profile) {
        let score = 0;
        if (!profile) return score;

        if (profile.property_types?.length > 0) {
            score += profile.property_types.includes(property.property_type) ? 3 : -1;
        }
        if (profile.budget_max !== null) {
            score += property.price <= profile.budget_max ? 3 : -2;
        }
        if (profile.min_surface !== null) {
            score += property.surface >= profile.min_surface ? 2 : -2;
        }
        if (profile.max_surface !== null) {
            score += property.surface <= profile.max_surface ? 1 : -1;
        }

        const days = (Date.now() - new Date(property.created_at).getTime()) / 86400000;
        if (days <= 7) score += 2;
        else if (days <= 30) score += 1;

        return score;
    }

    static async getUserSwipes(userId, direction = null) {
        const where = { user_id: userId };
        if (direction !== null) where.direction = direction;

        return prisma.swipe.findMany({
            where,
            include: {
                property: {
                    include: {
                        address: true,
                        owner: { select: { id: true, firstname: true, lastname: true, avatar: true } },
                        photos: { orderBy: { order: 'asc' } }
                    }
                }
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async getLikesForOwner(ownerId) {
        const properties = await prisma.property.findMany({
            where: { owner_id: ownerId },
            select: { id: true }
        });
        const propertyIds = properties.map(p => p.id);

        return prisma.swipe.findMany({
            where: { property_id: { in: propertyIds }, direction: true },
            include: {
                user: {
                    select: {
                        id: true,
                        firstname: true,
                        lastname: true,
                        email: true,
                        phone: true,
                        avatar: true,
                        tenant_profile: true
                    }
                },
                property: {
                    include: {
                        address: true,
                        photos: { orderBy: { order: 'asc' }, take: 1 }
                    }
                }
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async getLikesForProperty(propertyId, ownerId) {
        const property = await prisma.property.findUnique({ where: { id: propertyId } });

        if (!property) throw new Error("Property not found");
        if (property.owner_id !== ownerId) throw new Error("Unauthorized to view likes for this property");

        return prisma.swipe.findMany({
            where: { property_id: propertyId, direction: true },
            include: {
                user: {
                    select: {
                        id: true,
                        firstname: true,
                        lastname: true,
                        email: true,
                        phone: true,
                        avatar: true,
                        tenant_profile: true
                    }
                }
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async deleteSwipe(userId, propertyId) {
        const swipe = await prisma.swipe.findUnique({
            where: {
                user_id_property_id: {
                    user_id: userId,
                    property_id: propertyId
                }
            }
        });

        if (!swipe) throw new Error("Swipe not found");
        return prisma.swipe.delete({ where: { id: swipe.id } });
    }
}

export default SwipeService;

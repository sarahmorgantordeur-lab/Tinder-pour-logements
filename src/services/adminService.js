import prisma from '../config/db.js';

class AdminService {
    static async listUsers({ page, limit, search, role, banned }) {
        const where = {};
        if (role) where.role = role;
        if (banned !== undefined) where.is_banned = banned;
        if (search) {
            where.OR = [
                { email: { contains: search, mode: 'insensitive' } },
                { username: { contains: search, mode: 'insensitive' } }
            ];
        }

        const [items, total] = await prisma.$transaction([
            prisma.user.findMany({
                where,
                orderBy: { created_at: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
                select: {
                    id: true,
                    email: true,
                    username: true,
                    role: true,
                    phone: true,
                    avatar: true,
                    company_name: true,
                    siret: true,
                    is_banned: true,
                    created_at: true,
                    updated_at: true
                }
            }),
            prisma.user.count({ where })
        ]);

        return { items, total };
    }

    static async updateUserRole(userId, role) {
        return prisma.user.update({
            where: { id: userId },
            data: { role },
            select: {
                id: true,
                email: true,
                username: true,
                role: true,
                is_banned: true
            }
        });
    }

    static async setUserBan(userId, isBanned) {
        return prisma.user.update({
            where: { id: userId },
            data: { is_banned: isBanned },
            select: {
                id: true,
                email: true,
                username: true,
                role: true,
                is_banned: true
            }
        });
    }

    static async deleteUser(userId) {
        const ownedApartments = await prisma.apartment.findMany({
            where: { owner_id: userId },
            select: { id: true }
        });

        for (const apartment of ownedApartments) {
            await AdminService.deleteApartment(apartment.id);
        }

        const requestIds = await prisma.request.findMany({
            where: { user_id: userId },
            select: { id: true }
        });
        const requestIdList = requestIds.map(r => r.id);
        if (requestIdList.length > 0) {
            await prisma.requestDocument.deleteMany({
                where: { request_id: { in: requestIdList } }
            });
        }
        await prisma.request.deleteMany({ where: { user_id: userId } });

        const matchIds = await prisma.match.findMany({
            where: { user_id: userId },
            select: { id: true }
        });
        const matchIdList = matchIds.map(m => m.id);
        if (matchIdList.length > 0) {
            await prisma.message.deleteMany({
                where: { match_id: { in: matchIdList } }
            });
        }
        await prisma.match.deleteMany({ where: { user_id: userId } });
        await prisma.message.deleteMany({ where: { sender_id: userId } });

        await prisma.swipe.deleteMany({ where: { user_id: userId } });
        await prisma.favorite.deleteMany({ where: { user_id: userId } });
        await prisma.viewedApartment.deleteMany({ where: { user_id: userId } });
        await prisma.picture.deleteMany({ where: { user_id: userId } });
        await prisma.profile.deleteMany({ where: { user_id: userId } });
        await prisma.preferences.deleteMany({ where: { user_id: userId } });

        return prisma.user.delete({ where: { id: userId } });
    }

    static async listApartments({ page, limit, search, region, listingType, propertyType, ownerId, availability }) {
        const where = {};
        if (region) where.region = { contains: region, mode: 'insensitive' };
        if (listingType) where.listing_type = listingType;
        if (propertyType) where.property_type = propertyType;
        if (ownerId) where.owner_id = ownerId;
        if (availability !== undefined) where.availability = availability;
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { address: { contains: search, mode: 'insensitive' } },
                { city: { contains: search, mode: 'insensitive' } },
                { region: { contains: search, mode: 'insensitive' } }
            ];
        }

        const [items, total] = await prisma.$transaction([
            prisma.apartment.findMany({
                where,
                orderBy: { created_at: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
                include: {
                    owner: {
                        select: {
                            id: true,
                            username: true,
                            email: true
                        }
                    },
                    pictures: true
                }
            }),
            prisma.apartment.count({ where })
        ]);

        return { items, total };
    }

    static async deleteApartment(apartmentId) {
        const matchIds = await prisma.match.findMany({
            where: { apartment_id: apartmentId },
            select: { id: true }
        });
        const matchIdList = matchIds.map(m => m.id);

        if (matchIdList.length > 0) {
            await prisma.message.deleteMany({
                where: { match_id: { in: matchIdList } }
            });
        }

        const requestIds = await prisma.request.findMany({
            where: { apartment_id: apartmentId },
            select: { id: true }
        });
        const requestIdList = requestIds.map(r => r.id);
        if (requestIdList.length > 0) {
            await prisma.requestDocument.deleteMany({
                where: { request_id: { in: requestIdList } }
            });
        }

        await prisma.match.deleteMany({ where: { apartment_id: apartmentId } });
        await prisma.request.deleteMany({ where: { apartment_id: apartmentId } });
        await prisma.swipe.deleteMany({ where: { apartment_id: apartmentId } });
        await prisma.favorite.deleteMany({ where: { apartment_id: apartmentId } });
        await prisma.viewedApartment.deleteMany({ where: { apartment_id: apartmentId } });
        await prisma.picture.deleteMany({ where: { apartment_id: apartmentId } });

        return prisma.apartment.delete({ where: { id: apartmentId } });
    }

    static async listMatches({ page, limit, userId, apartmentId, ownerId }) {
        const where = {};
        if (userId) where.user_id = userId;
        if (apartmentId) where.apartment_id = apartmentId;
        if (ownerId) {
            where.apartment = { owner_id: ownerId };
        }

        const [items, total] = await prisma.$transaction([
            prisma.match.findMany({
                where,
                orderBy: { created_at: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
                include: {
                    user: { select: { id: true, username: true, email: true } },
                    apartment: { select: { id: true, title: true, owner_id: true } }
                }
            }),
            prisma.match.count({ where })
        ]);

        return { items, total };
    }

    static async getMatchById(matchId) {
        return prisma.match.findUnique({
            where: { id: matchId },
            include: {
                user: { select: { id: true, username: true, email: true } },
                apartment: { select: { id: true, title: true, owner_id: true } },
                messages: {
                    include: {
                        sender: { select: { id: true, username: true, avatar: true } }
                    },
                    orderBy: { created_at: 'desc' }
                }
            }
        });
    }

    static async deleteMatch(matchId) {
        await prisma.message.deleteMany({ where: { match_id: matchId } });
        return prisma.match.delete({ where: { id: matchId } });
    }

    static async listMessages({ page, limit, matchId, senderId }) {
        const where = {};
        if (matchId) where.match_id = matchId;
        if (senderId) where.sender_id = senderId;

        const [items, total] = await prisma.$transaction([
            prisma.message.findMany({
                where,
                orderBy: { created_at: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
                include: {
                    sender: { select: { id: true, username: true, avatar: true } },
                    match: { select: { id: true, apartment_id: true, user_id: true } }
                }
            }),
            prisma.message.count({ where })
        ]);

        return { items, total };
    }

    static async deleteMessage(messageId) {
        return prisma.message.delete({ where: { id: messageId } });
    }
}

export default AdminService;

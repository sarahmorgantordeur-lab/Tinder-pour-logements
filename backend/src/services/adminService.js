import prisma from '../config/db.js';

class AdminService {
    static async listUsers({ page, limit, search, role, active }) {
        const where = {};
        if (role) where.role = role;
        if (active !== undefined) where.is_active = active;
        if (search) {
            where.OR = [
                { email: { contains: search, mode: 'insensitive' } },
                { firstname: { contains: search, mode: 'insensitive' } },
                { lastname: { contains: search, mode: 'insensitive' } }
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
                    firstname: true,
                    lastname: true,
                    role: true,
                    phone: true,
                    avatar: true,
                    is_active: true,
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
            select: { id: true, email: true, firstname: true, lastname: true, role: true, is_active: true }
        });
    }

    static async setUserActive(userId, isActive) {
        return prisma.user.update({
            where: { id: userId },
            data: { is_active: isActive },
            select: { id: true, email: true, firstname: true, lastname: true, role: true, is_active: true }
        });
    }

    static async deleteUser(userId) {
        // onDelete: Cascade gère swipes, conversations, messages, tenantProfile, agency
        return prisma.user.delete({ where: { id: userId } });
    }

    static async listProperties({ page, limit, search, propertyType, ownerId, status }) {
        const where = {};
        if (propertyType) where.property_type = propertyType;
        if (ownerId) where.owner_id = ownerId;
        if (status) where.status = status;
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { address: { city: { contains: search, mode: 'insensitive' } } }
            ];
        }

        const [items, total] = await prisma.$transaction([
            prisma.property.findMany({
                where,
                orderBy: { created_at: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
                include: {
                    address: true,
                    owner: { select: { id: true, firstname: true, lastname: true, email: true } },
                    photos: { take: 1 }
                }
            }),
            prisma.property.count({ where })
        ]);

        return { items, total };
    }

    static async deleteProperty(propertyId) {
        // onDelete: Cascade gère photos, swipes, conversations et messages
        return prisma.property.delete({ where: { id: propertyId } });
    }

    static async listConversations({ page, limit, userId, propertyId, ownerId }) {
        const where = {};
        if (userId) where.tenant_id = userId;
        if (propertyId) where.property_id = propertyId;
        if (ownerId) where.owner_id = ownerId;

        const [items, total] = await prisma.$transaction([
            prisma.conversation.findMany({
                where,
                orderBy: { created_at: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
                include: {
                    tenant: { select: { id: true, firstname: true, lastname: true, email: true } },
                    owner: { select: { id: true, firstname: true, lastname: true, email: true } },
                    property: { select: { id: true, title: true } }
                }
            }),
            prisma.conversation.count({ where })
        ]);

        return { items, total };
    }

    static async getConversationById(conversationId) {
        return prisma.conversation.findUnique({
            where: { id: conversationId },
            include: {
                tenant: { select: { id: true, firstname: true, lastname: true, email: true } },
                owner: { select: { id: true, firstname: true, lastname: true, email: true } },
                property: { select: { id: true, title: true } },
                messages: {
                    include: {
                        sender: { select: { id: true, firstname: true, lastname: true, avatar: true } }
                    },
                    orderBy: { created_at: 'asc' }
                }
            }
        });
    }

    static async deleteConversation(conversationId) {
        // onDelete: Cascade supprime les messages
        return prisma.conversation.delete({ where: { id: conversationId } });
    }

    static async listMessages({ page, limit, conversationId, senderId }) {
        const where = {};
        if (conversationId) where.conversation_id = conversationId;
        if (senderId) where.sender_id = senderId;

        const [items, total] = await prisma.$transaction([
            prisma.message.findMany({
                where,
                orderBy: { created_at: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
                include: {
                    sender: { select: { id: true, firstname: true, lastname: true, avatar: true } },
                    conversation: { select: { id: true, property_id: true, tenant_id: true } }
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

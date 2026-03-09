import prisma from '../config/db.js';

const ACTIVE_MSG = { deleted_at: null };

const conversationInclude = {
    property: {
        include: {
            address: true,
            photos: { orderBy: { order: 'asc' }, take: 1 }
        }
    },
    tenant: {
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
    owner: {
        select: {
            id: true,
            firstname: true,
            lastname: true,
            email: true,
            phone: true,
            avatar: true,
            agency: true
        }
    }
};

const listInclude = (userId) => ({
    ...conversationInclude,
    messages: {
        where: ACTIVE_MSG,
        orderBy: { created_at: 'desc' },
        take: 1,
        include: {
            sender: { select: { id: true, firstname: true, lastname: true } }
        }
    },
    _count: {
        select: {
            messages: { where: { ...ACTIVE_MSG, sender_id: { not: userId }, read: false } }
        }
    }
});

class ConversationService {

    static async createConversation(ownerId, swipeId) {
        const swipe = await prisma.swipe.findUnique({
            where: { id: swipeId },
            include: { property: true, user: true }
        });

        if (!swipe) throw new Error("Swipe not found");
        if (!swipe.direction) throw new Error("Tenant has not liked this property");
        if (swipe.property.owner_id !== ownerId) throw new Error("Unauthorized");

        const existing = await prisma.conversation.findUnique({ where: { swipe_id: swipeId } });
        if (existing) throw new Error("Conversation already exists");

        const conversation = await prisma.conversation.create({
            data: {
                swipe_id: swipeId,
                property_id: swipe.property_id,
                tenant_id: swipe.user_id,
                owner_id: ownerId
            },
            include: conversationInclude
        });

        return conversation;
    }

    static async getUserConversations(userId) {
        return prisma.conversation.findMany({
            where: { tenant_id: userId },
            include: listInclude(userId),
            orderBy: { created_at: 'desc' }
        });
    }

    static async getOwnerConversations(ownerId) {
        return prisma.conversation.findMany({
            where: { owner_id: ownerId },
            include: listInclude(ownerId),
            orderBy: { created_at: 'desc' }
        });
    }

    static async getById(conversationId, userId) {
        const conversation = await prisma.conversation.findUnique({
            where: { id: conversationId },
            include: conversationInclude
        });

        if (!conversation) throw new Error("Conversation not found");
        if (conversation.tenant_id !== userId && conversation.owner_id !== userId) {
            throw new Error("Unauthorized to view this conversation");
        }

        return conversation;
    }

    static async deleteConversation(conversationId, ownerId) {
        const conversation = await prisma.conversation.findUnique({
            where: { id: conversationId }
        });

        if (!conversation) throw new Error("Conversation not found");
        if (conversation.owner_id !== ownerId) throw new Error("Unauthorized to delete this conversation");

        return prisma.conversation.delete({ where: { id: conversationId } });
    }

    static async sendMessage(conversationId, senderId, content) {
        const conversation = await prisma.conversation.findUnique({
            where: { id: conversationId }
        });

        if (!conversation) throw new Error("Conversation not found");
        if (conversation.tenant_id !== senderId && conversation.owner_id !== senderId) {
            throw new Error("Unauthorized to send message in this conversation");
        }

        return prisma.message.create({
            data: {
                content,
                conversation_id: conversationId,
                sender_id: senderId
            },
            include: {
                sender: { select: { id: true, firstname: true, lastname: true, avatar: true } }
            }
        });
    }

    static async getMessages(conversationId, userId, limit = 50, offset = 0) {
        const conversation = await prisma.conversation.findUnique({
            where: { id: conversationId }
        });

        if (!conversation) throw new Error("Conversation not found");
        if (conversation.tenant_id !== userId && conversation.owner_id !== userId) {
            throw new Error("Unauthorized to view messages");
        }

        // Marquer les messages non lus (et non supprimés) comme lus
        await prisma.message.updateMany({
            where: {
                conversation_id: conversationId,
                sender_id: { not: userId },
                read: false,
                deleted_at: null
            },
            data: { read: true }
        });

        return prisma.message.findMany({
            where: { conversation_id: conversationId, deleted_at: null },
            include: {
                sender: { select: { id: true, firstname: true, lastname: true, avatar: true } }
            },
            orderBy: { created_at: 'asc' },
            take: limit,
            skip: offset
        });
    }
}

export default ConversationService;

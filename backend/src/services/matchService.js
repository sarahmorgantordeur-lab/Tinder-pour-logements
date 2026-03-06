import prisma from '../config/db.js';
import EmailService from './emailService.js';

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

class ConversationService {

    // Propriétaire ouvre une conversation à partir d'un swipe like
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

        EmailService.sendMatchNotification(swipe.user_id, swipe.property_id).catch(err => {
            console.error('Failed to send match notification:', err.message);
        });

        return conversation;
    }

    static async getUserConversations(userId) {
        return prisma.conversation.findMany({
            where: { tenant_id: userId },
            include: {
                ...conversationInclude,
                messages: {
                    orderBy: { created_at: 'desc' },
                    take: 1
                }
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async getOwnerConversations(ownerId) {
        return prisma.conversation.findMany({
            where: { owner_id: ownerId },
            include: {
                ...conversationInclude,
                messages: {
                    orderBy: { created_at: 'desc' },
                    take: 1
                }
            },
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

        // Marquer les messages non lus comme lus
        await prisma.message.updateMany({
            where: {
                conversation_id: conversationId,
                sender_id: { not: userId },
                read: false
            },
            data: { read: true }
        });

        return prisma.message.findMany({
            where: { conversation_id: conversationId },
            include: {
                sender: { select: { id: true, firstname: true, lastname: true, avatar: true } }
            },
            orderBy: { created_at: 'asc' },
            take: limit,
            skip: offset
        });
    }

    // Propriétaire rejette un like (supprime le swipe)
    static async rejectLike(ownerId, swipeId) {
        const swipe = await prisma.swipe.findUnique({
            where: { id: swipeId },
            include: { property: true }
        });

        if (!swipe) throw new Error("Swipe not found");
        if (swipe.property.owner_id !== ownerId) throw new Error("Unauthorized");

        await prisma.swipe.delete({ where: { id: swipeId } });
        return { success: true, message: "Like rejected" };
    }
}

export default ConversationService;

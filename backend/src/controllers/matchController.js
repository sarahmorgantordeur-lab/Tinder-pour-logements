import ConversationService from '../services/matchService.js';

class ConversationController {

    static async createConversation(req, res) {
        try {
            const { swipeId } = req.body;
            if (!swipeId) return res.status(400).json({ message: "swipeId is required" });

            const conversation = await ConversationService.createConversation(req.user.id, swipeId);
            res.status(201).json({ message: "Conversation created", conversation });
        } catch (error) {
            if (error.message === "Swipe not found") return res.status(404).json({ message: error.message });
            if (error.message === "Tenant has not liked this property") return res.status(400).json({ message: error.message });
            if (error.message === "Unauthorized") return res.status(403).json({ message: error.message });
            if (error.message === "Conversation already exists") return res.status(409).json({ message: error.message });
            console.error('[createConversation]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getUserConversations(req, res) {
        try {
            const conversations = await ConversationService.getUserConversations(req.user.id);
            res.status(200).json({ conversations });
        } catch (error) {
            console.error('[getUserConversations]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getOwnerConversations(req, res) {
        try {
            const conversations = await ConversationService.getOwnerConversations(req.user.id);
            res.status(200).json({ conversations });
        } catch (error) {
            console.error('[getOwnerConversations]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getById(req, res) {
        try {
            const conversation = await ConversationService.getById(req.params.id, req.user.id);
            res.status(200).json({ conversation });
        } catch (error) {
            if (error.message === "Conversation not found") return res.status(404).json({ message: error.message });
            if (error.message === "Unauthorized to view this conversation") return res.status(403).json({ message: error.message });
            console.error('[getConversationById]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async deleteConversation(req, res) {
        try {
            await ConversationService.deleteConversation(req.params.id, req.user.id);
            res.status(200).json({ message: "Conversation deleted" });
        } catch (error) {
            if (error.message === "Conversation not found") return res.status(404).json({ message: error.message });
            if (error.message === "Unauthorized to delete this conversation") return res.status(403).json({ message: error.message });
            console.error('[deleteConversation]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async sendMessage(req, res) {
        try {
            const { content } = req.body;
            if (!content?.trim()) return res.status(400).json({ message: "Message content is required" });

            const message = await ConversationService.sendMessage(req.params.id, req.user.id, content);
            res.status(201).json({ message: "Message sent", data: message });
        } catch (error) {
            if (error.message === "Conversation not found") return res.status(404).json({ message: error.message });
            if (error.message === "Unauthorized to send message in this conversation") return res.status(403).json({ message: error.message });
            console.error('[sendMessage]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getMessages(req, res) {
        try {
            const limit = parseInt(req.query.limit) || 50;
            const offset = parseInt(req.query.offset) || 0;
            const messages = await ConversationService.getMessages(req.params.id, req.user.id, limit, offset);
            res.status(200).json({ messages });
        } catch (error) {
            if (error.message === "Conversation not found") return res.status(404).json({ message: error.message });
            if (error.message === "Unauthorized to view messages") return res.status(403).json({ message: error.message });
            console.error('[getMessages]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async rejectLike(req, res) {
        try {
            const { swipeId } = req.body;
            if (!swipeId) return res.status(400).json({ message: "swipeId is required" });

            const result = await ConversationService.rejectLike(req.user.id, swipeId);
            res.status(200).json(result);
        } catch (error) {
            if (error.message === "Swipe not found") return res.status(404).json({ message: error.message });
            if (error.message === "Unauthorized") return res.status(403).json({ message: error.message });
            console.error('[rejectLike]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default ConversationController;

import MatchService from '../services/matchService.js';

class MatchController {
    /**
     * POST /api/matches
     * Crée un match (propriétaire accepte un like)
     */
    static async createMatch(req, res) {
        try {
            const ownerId = req.user.id;
            const { userId, apartmentId } = req.body;

            if (!userId || !apartmentId) {
                return res.status(400).json({ message: "userId and apartmentId are required" });
            }

            const match = await MatchService.createMatch(ownerId, userId, apartmentId);
            res.status(201).json({ message: "Match created", match });
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to create match for this apartment") {
                return res.status(403).json({ message: error.message });
            }
            if (error.message === "User has not liked this apartment") {
                return res.status(400).json({ message: error.message });
            }
            if (error.message === "Match already exists") {
                return res.status(409).json({ message: error.message });
            }
            console.error('Create match error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * GET /api/matches
     * Récupère les matchs de l'utilisateur (locataire)
     */
    static async getUserMatches(req, res) {
        try {
            const userId = req.user.id;

            const matches = await MatchService.getUserMatches(userId);
            res.status(200).json({ matches });
        } catch (error) {
            console.error('Get user matches error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * GET /api/matches/owner
     * Récupère les matchs du propriétaire
     */
    static async getOwnerMatches(req, res) {
        try {
            const ownerId = req.user.id;

            const matches = await MatchService.getOwnerMatches(ownerId);
            res.status(200).json({ matches });
        } catch (error) {
            console.error('Get owner matches error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * GET /api/matches/:id
     * Récupère un match par son ID
     */
    static async getMatchById(req, res) {
        try {
            const userId = req.user.id;
            const { id } = req.params;

            const match = await MatchService.getMatchById(id, userId);
            res.status(200).json({ match });
        } catch (error) {
            if (error.message === "Match not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to view this match") {
                return res.status(403).json({ message: error.message });
            }
            console.error('Get match by id error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * DELETE /api/matches/:id
     * Supprime un match (propriétaire uniquement)
     */
    static async deleteMatch(req, res) {
        try {
            const ownerId = req.user.id;
            const { id } = req.params;

            await MatchService.deleteMatch(id, ownerId);
            res.status(200).json({ message: "Match deleted" });
        } catch (error) {
            if (error.message === "Match not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to delete this match") {
                return res.status(403).json({ message: error.message });
            }
            console.error('Delete match error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * POST /api/matches/:id/messages
     * Envoie un message dans un match
     */
    static async sendMessage(req, res) {
        try {
            const senderId = req.user.id;
            const { id } = req.params;
            const { content } = req.body;

            if (!content || content.trim() === '') {
                return res.status(400).json({ message: "Message content is required" });
            }

            const message = await MatchService.sendMessage(id, senderId, content);
            res.status(201).json({ message: "Message sent", data: message });
        } catch (error) {
            if (error.message === "Match not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to send message in this match") {
                return res.status(403).json({ message: error.message });
            }
            console.error('Send message error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * GET /api/matches/:id/messages
     * Récupère les messages d'un match
     */
    static async getMessages(req, res) {
        try {
            const userId = req.user.id;
            const { id } = req.params;
            const limit = parseInt(req.query.limit) || 50;
            const offset = parseInt(req.query.offset) || 0;

            const messages = await MatchService.getMessages(id, userId, limit, offset);
            res.status(200).json({ messages });
        } catch (error) {
            if (error.message === "Match not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to view messages") {
                return res.status(403).json({ message: error.message });
            }
            console.error('Get messages error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * POST /api/matches/reject
     * Refuse un like (ne crée pas de match)
     */
    static async rejectLike(req, res) {
        try {
            const ownerId = req.user.id;
            const { userId, apartmentId } = req.body;

            if (!userId || !apartmentId) {
                return res.status(400).json({ message: "userId and apartmentId are required" });
            }

            const result = await MatchService.rejectLike(ownerId, userId, apartmentId);
            res.status(200).json(result);
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized") {
                return res.status(403).json({ message: error.message });
            }
            console.error('Reject like error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default MatchController;

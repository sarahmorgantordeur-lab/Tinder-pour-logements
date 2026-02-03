import SwipeService from '../services/swipeService.js';

class SwipeController {
    /**
     * POST /api/swipes
     * Enregistre un swipe (like ou dislike)
     */
    static async swipe(req, res) {
        try {
            const userId = req.user.id;
            const { apartmentId, direction } = req.body;

            if (!apartmentId || !direction) {
                return res.status(400).json({ message: "apartmentId and direction are required" });
            }

            if (!['like', 'dislike'].includes(direction)) {
                return res.status(400).json({ message: "direction must be 'like' or 'dislike'" });
            }

            const swipe = await SwipeService.swipe(userId, apartmentId, direction);
            res.status(200).json({ message: "Swipe recorded", swipe });
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "You cannot swipe on your own apartment") {
                return res.status(403).json({ message: error.message });
            }
            console.error('Swipe error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * GET /api/swipes/apartments
     * Récupère les appartements à swiper
     */
    static async getApartmentsToSwipe(req, res) {
        try {
            const userId = req.user.id;
            const limit = parseInt(req.query.limit) || 10;

            const apartments = await SwipeService.getApartmentsToSwipe(userId, limit);
            res.status(200).json({ apartments });
        } catch (error) {
            console.error('Get apartments to swipe error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * GET /api/swipes/history
     * Récupère l'historique des swipes de l'utilisateur
     */
    static async getSwipeHistory(req, res) {
        try {
            const userId = req.user.id;
            const direction = req.query.direction; // 'like', 'dislike', or null for all

            const swipes = await SwipeService.getUserSwipes(userId, direction);
            res.status(200).json({ swipes });
        } catch (error) {
            console.error('Get swipe history error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * GET /api/swipes/likes/received
     * Récupère tous les likes reçus sur les appartements du propriétaire
     */
    static async getReceivedLikes(req, res) {
        try {
            const ownerId = req.user.id;

            const likes = await SwipeService.getLikesForOwner(ownerId);
            res.status(200).json({ likes });
        } catch (error) {
            console.error('Get received likes error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * GET /api/swipes/likes/apartment/:apartmentId
     * Récupère les likes sur un appartement spécifique
     */
    static async getLikesForApartment(req, res) {
        try {
            const ownerId = req.user.id;
            const { apartmentId } = req.params;

            const likes = await SwipeService.getLikesForApartment(apartmentId, ownerId);
            res.status(200).json({ likes });
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to view likes for this apartment") {
                return res.status(403).json({ message: error.message });
            }
            console.error('Get likes for apartment error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * DELETE /api/swipes/:apartmentId
     * Supprime un swipe
     */
    static async deleteSwipe(req, res) {
        try {
            const userId = req.user.id;
            const { apartmentId } = req.params;

            await SwipeService.deleteSwipe(userId, apartmentId);
            res.status(200).json({ message: "Swipe deleted" });
        } catch (error) {
            if (error.message === "Swipe not found") {
                return res.status(404).json({ message: error.message });
            }
            console.error('Delete swipe error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default SwipeController;

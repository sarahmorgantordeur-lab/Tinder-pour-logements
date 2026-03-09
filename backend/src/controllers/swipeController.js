import SwipeService from '../services/swipeService.js';

class SwipeController {

    static async swipe(req, res) {
        try {
            const { propertyId, direction } = req.body;

            if (propertyId === undefined || direction === undefined) {
                return res.status(400).json({ message: "propertyId and direction (boolean) are required" });
            }
            if (typeof direction !== 'boolean') {
                return res.status(400).json({ message: "direction must be a boolean (true = like, false = dislike)" });
            }

            const swipe = await SwipeService.swipe(req.user.id, propertyId, direction);
            res.status(200).json({ message: "Swipe recorded", swipe });
        } catch (error) {
            if (error.message === "Property not found") return res.status(404).json({ message: error.message });
            if (error.message === "You cannot swipe on your own property") return res.status(403).json({ message: error.message });
            console.error('[swipe]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getPropertiesToSwipe(req, res) {
        try {
            const limit = parseInt(req.query.limit) || 10;
            const properties = await SwipeService.getPropertiesToSwipe(req.user.id, limit);
            res.status(200).json({ properties });
        } catch (error) {
            console.error('[getPropertiesToSwipe]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getSwipeHistory(req, res) {
        try {
            // direction query: "true" | "false" | undefined
            let direction = null;
            if (req.query.direction === 'true') direction = true;
            else if (req.query.direction === 'false') direction = false;

            const swipes = await SwipeService.getUserSwipes(req.user.id, direction);
            res.status(200).json({ swipes });
        } catch (error) {
            console.error('[getSwipeHistory]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getReceivedLikes(req, res) {
        try {
            const likes = await SwipeService.getLikesForOwner(req.user.id);
            res.status(200).json({ likes });
        } catch (error) {
            console.error('[getReceivedLikes]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getLikesForProperty(req, res) {
        try {
            const likes = await SwipeService.getLikesForProperty(req.params.propertyId, req.user.id);
            res.status(200).json({ likes });
        } catch (error) {
            if (error.message === "Property not found") return res.status(404).json({ message: error.message });
            if (error.message === "Unauthorized to view likes for this property") return res.status(403).json({ message: error.message });
            console.error('[getLikesForProperty]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async deleteSwipe(req, res) {
        try {
            await SwipeService.deleteSwipe(req.user.id, req.params.propertyId);
            res.status(200).json({ message: "Swipe deleted" });
        } catch (error) {
            if (error.message === "Swipe not found") return res.status(404).json({ message: error.message });
            console.error('[deleteSwipe]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default SwipeController;

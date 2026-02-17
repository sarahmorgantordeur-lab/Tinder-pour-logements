import RequestService from '../services/requestService.js';

class RequestController {
    static async create(req, res) {
        const userId = req.user.id;
        const { apartmentId, message } = req.body;

        try {
            const request = await RequestService.create(userId, apartmentId, message);
            res.status(201).json({ message: "Request created successfully", request });
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "You have already made a request for this apartment") {
                return res.status(409).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getByApartment(req, res) {
        const { apartmentId } = req.params;
        const ownerId = req.user.id;

        try {
            const requests = await RequestService.getByApartment(apartmentId, ownerId);
            res.status(200).json({ requests });
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to view requests for this apartment") {
                return res.status(403).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getMyRequests(req, res) {
        const userId = req.user.id;

        try {
            const requests = await RequestService.getByUser(userId);
            res.status(200).json({ requests });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getAllForOwner(req, res) {
        const ownerId = req.user.id;

        try {
            const requests = await RequestService.getAllForOwner(ownerId);
            res.status(200).json({ requests });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;
        const userId = req.user.id;
        const isOwner = req.user.role === 'owner' || req.user.role === 'agency';

        try {
            const request = await RequestService.getById(id, userId, isOwner);
            res.status(200).json({ request });
        } catch (error) {
            if (error.message === "Request not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to view this request") {
                return res.status(403).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async updateStatus(req, res) {
        const { id } = req.params;
        const { status, visitDate } = req.body;
        const ownerId = req.user.id;

        try {
            const request = await RequestService.updateStatus(id, status, ownerId, visitDate);
            res.status(200).json({ message: "Request status updated successfully", request });
        } catch (error) {
            if (error.message === "Request not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to update this request") {
                return res.status(403).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async addDocument(req, res) {
        const { id } = req.params;
        const userId = req.user.id;
        const documentData = req.body;

        try {
            const request = await RequestService.addDocument(id, userId, documentData);
            res.status(200).json({ message: "Document added successfully", request });
        } catch (error) {
            if (error.message === "Request not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to modify this request") {
                return res.status(403).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async delete(req, res) {
        const { id } = req.params;
        const userId = req.user.id;

        try {
            await RequestService.delete(id, userId);
            res.status(200).json({ message: "Request deleted successfully" });
        } catch (error) {
            if (error.message === "Request not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to delete this request") {
                return res.status(403).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getOwnerStats(req, res) {
        const ownerId = req.user.id;

        try {
            const stats = await RequestService.getOwnerStats(ownerId);
            res.status(200).json({ stats });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default RequestController;

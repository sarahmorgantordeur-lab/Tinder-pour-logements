const requestService = require('../services/requestService.js');

class RequestController {
    // Créer une nouvelle demande
    static async create(req, res) {
        const userId = req.user.id;
        const { apartmentId, message } = req.body;

        try {
            const request = await requestService.create(userId, apartmentId, message);
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

    // Obtenir toutes les demandes pour un appartement (propriétaire)
    static async getByApartment(req, res) {
        const { apartmentId } = req.params;
        const ownerId = req.user.id;

        try {
            const requests = await requestService.getByApartment(apartmentId, ownerId);
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

    // Obtenir toutes les demandes d'un utilisateur
    static async getMyRequests(req, res) {
        const userId = req.user.id;

        try {
            const requests = await requestService.getByUser(userId);
            res.status(200).json({ requests });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Obtenir toutes les demandes pour tous les appartements d'un propriétaire
    static async getAllForOwner(req, res) {
        const ownerId = req.user.id;

        try {
            const requests = await requestService.getAllForOwner(ownerId);
            res.status(200).json({ requests });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Obtenir une demande par ID
    static async getById(req, res) {
        const { id } = req.params;
        const userId = req.user.id;
        const isOwner = req.user.role === 'propriétaire' || req.user.role === 'agence';

        try {
            const request = await requestService.getById(id, userId, isOwner);
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

    // Mettre à jour le statut d'une demande (propriétaire)
    static async updateStatus(req, res) {
        const { id } = req.params;
        const { status, visitDate } = req.body;
        const ownerId = req.user.id;

        try {
            const request = await requestService.updateStatus(id, status, ownerId, visitDate);
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

    // Ajouter un document à une demande
    static async addDocument(req, res) {
        const { id } = req.params;
        const userId = req.user.id;
        const documentData = req.body;

        try {
            const request = await requestService.addDocument(id, userId, documentData);
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

    // Supprimer une demande
    static async delete(req, res) {
        const { id } = req.params;
        const userId = req.user.id;

        try {
            await requestService.delete(id, userId);
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

    // Obtenir les statistiques des demandes pour un propriétaire
    static async getOwnerStats(req, res) {
        const ownerId = req.user.id;

        try {
            const stats = await requestService.getOwnerStats(ownerId);
            res.status(200).json({ stats });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = RequestController;

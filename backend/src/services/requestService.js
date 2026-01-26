const Request = require('../models/Request.js');
const Apartment = require('../models/Apartment.js');

class RequestService {

    // Créer une nouvelle demande
    static async create(userId, apartmentId, message) {
        // Vérifier que l'appartement existe
        const apartment = await Apartment.findById(apartmentId);
        if (!apartment) {
            throw new Error("Apartment not found");
        }

        // Vérifier que l'utilisateur n'a pas déjà fait une demande
        const existingRequest = await Request.findOne({ user: userId, apartment: apartmentId });
        if (existingRequest) {
            throw new Error("You have already made a request for this apartment");
        }

        const newRequest = new Request({
            user: userId,
            apartment: apartmentId,
            message,
            status: 'en attente'
        });

        return newRequest.save();
    }

    // Obtenir toutes les demandes pour un appartement (pour le propriétaire)
    static async getByApartment(apartmentId, ownerId) {
        // Vérifier que l'appartement appartient au propriétaire
        const apartment = await Apartment.findById(apartmentId);
        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner.toString() !== ownerId.toString()) {
            throw new Error("Unauthorized to view requests for this apartment");
        }

        return Request.find({ apartment: apartmentId })
            .populate('user', 'username email phone profile documents')
            .sort({ createdAt: -1 });
    }

    // Obtenir toutes les demandes d'un utilisateur
    static async getByUser(userId) {
        return Request.find({ user: userId })
            .populate('apartment')
            .sort({ createdAt: -1 });
    }

    // Obtenir toutes les demandes pour tous les appartements d'un propriétaire
    static async getAllForOwner(ownerId) {
        const apartments = await Apartment.find({ owner: ownerId });
        const apartmentIds = apartments.map(apt => apt._id);

        return Request.find({ apartment: { $in: apartmentIds } })
            .populate('user', 'username email phone profile documents')
            .populate('apartment', 'title address region price')
            .sort({ createdAt: -1 });
    }

    // Obtenir une demande par ID
    static async getById(requestId, userId, isOwner = false) {
        const request = await Request.findById(requestId)
            .populate('user', 'username email phone profile documents')
            .populate('apartment');

        if (!request) {
            throw new Error("Request not found");
        }

        // Vérifier les permissions
        if (!isOwner && request.user._id.toString() !== userId.toString()) {
            const apartment = await Apartment.findById(request.apartment._id);
            if (!apartment || apartment.owner.toString() !== userId.toString()) {
                throw new Error("Unauthorized to view this request");
            }
        }

        return request;
    }

    // Mettre à jour le statut d'une demande (pour le propriétaire)
    static async updateStatus(requestId, status, ownerId, visitDate = null) {
        const request = await Request.findById(requestId).populate('apartment');

        if (!request) {
            throw new Error("Request not found");
        }

        // Vérifier que l'appartement appartient au propriétaire
        const apartment = await Apartment.findById(request.apartment._id);
        if (apartment.owner.toString() !== ownerId.toString()) {
            throw new Error("Unauthorized to update this request");
        }

        request.status = status;
        if (visitDate && status === 'visite planifiée') {
            request.visitDate = visitDate;
        }

        return request.save();
    }

    // Ajouter un document à une demande
    static async addDocument(requestId, userId, documentData) {
        const request = await Request.findById(requestId);

        if (!request) {
            throw new Error("Request not found");
        }

        if (request.user.toString() !== userId.toString()) {
            throw new Error("Unauthorized to modify this request");
        }

        request.documents.push(documentData);
        return request.save();
    }

    // Supprimer une demande
    static async delete(requestId, userId) {
        const request = await Request.findById(requestId);

        if (!request) {
            throw new Error("Request not found");
        }

        if (request.user.toString() !== userId.toString()) {
            throw new Error("Unauthorized to delete this request");
        }

        return Request.findByIdAndDelete(requestId);
    }

    // Obtenir les statistiques des demandes pour un propriétaire
    static async getOwnerStats(ownerId) {
        const apartments = await Apartment.find({ owner: ownerId });
        const apartmentIds = apartments.map(apt => apt._id);

        const requests = await Request.find({ apartment: { $in: apartmentIds } });

        const stats = {
            total: requests.length,
            enAttente: requests.filter(r => r.status === 'en attente').length,
            contacté: requests.filter(r => r.status === 'contacté').length,
            visitePlanifiée: requests.filter(r => r.status === 'visite planifiée').length,
            accepté: requests.filter(r => r.status === 'accepté').length,
            refusé: requests.filter(r => r.status === 'refusé').length
        };

        return stats;
    }
}

module.exports = RequestService;

const Request = require('../models/Request.js');
const Apartment = require('../models/Apartment.js');

class RequestService {

    static async create(userId, apartmentId, message) {
        const apartment = await Apartment.findById(apartmentId);
        if (!apartment) {
            throw new Error("Apartment not found");
        }

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

    static async getByApartment(apartmentId, ownerId) {
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

    static async getByUser(userId) {
        return Request.find({ user: userId })
            .populate('apartment')
            .sort({ createdAt: -1 });
    }

    static async getAllForOwner(ownerId) {
        const apartments = await Apartment.find({ owner: ownerId });
        const apartmentIds = apartments.map(apt => apt._id);

        return Request.find({ apartment: { $in: apartmentIds } })
            .populate('user', 'username email phone profile documents')
            .populate('apartment', 'title address region price')
            .sort({ createdAt: -1 });
    }

    static async getById(requestId, userId, isOwner = false) {
        const request = await Request.findById(requestId)
            .populate('user', 'username email phone profile documents')
            .populate('apartment');

        if (!request) {
            throw new Error("Request not found");
        }

        if (!isOwner && request.user._id.toString() !== userId.toString()) {
            const apartment = await Apartment.findById(request.apartment._id);
            if (!apartment || apartment.owner.toString() !== userId.toString()) {
                throw new Error("Unauthorized to view this request");
            }
        }

        return request;
    }

    static async updateStatus(requestId, status, ownerId, visitDate = null) {
        const request = await Request.findById(requestId).populate('apartment');

        if (!request) {
            throw new Error("Request not found");
        }

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

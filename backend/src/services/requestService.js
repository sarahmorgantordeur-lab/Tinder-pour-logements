import prisma from '../config/db.js';
import EmailService from './emailService.js';

class RequestService {

    static async create(userId, apartmentId, message) {
        const apartment = await prisma.apartment.findUnique({
            where: { id: apartmentId }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        const existingRequest = await prisma.request.findUnique({
            where: {
                apartment_id_user_id: {
                    apartment_id: apartmentId,
                    user_id: userId
                }
            }
        });

        if (existingRequest) {
            throw new Error("You have already made a request for this apartment");
        }

        const request = await prisma.request.create({
            data: {
                user_id: userId,
                apartment_id: apartmentId,
                message,
                status: 'waiting'
            }
        });

        // Notifier le propriétaire (non bloquant)
        EmailService.sendNewRequestNotification(apartment.owner_id, request.id).catch(err => {
            console.error('Failed to send new request notification:', err.message);
        });

        return request;
    }

    static async getByApartment(apartmentId, ownerId) {
        const apartment = await prisma.apartment.findUnique({
            where: { id: apartmentId }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner_id !== ownerId) {
            throw new Error("Unauthorized to view requests for this apartment");
        }

        return prisma.request.findMany({
            where: { apartment_id: apartmentId },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        phone: true,
                        profile: true,
                        documents: true
                    }
                }
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async getByUser(userId) {
        return prisma.request.findMany({
            where: { user_id: userId },
            include: {
                apartment: true
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async getAllForOwner(ownerId) {
        const apartments = await prisma.apartment.findMany({
            where: { owner_id: ownerId },
            select: { id: true }
        });

        const apartmentIds = apartments.map(apt => apt.id);

        return prisma.request.findMany({
            where: {
                apartment_id: { in: apartmentIds }
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        phone: true,
                        profile: true,
                        documents: true
                    }
                },
                apartment: {
                    select: {
                        id: true,
                        title: true,
                        address: true,
                        region: true,
                        price: true
                    }
                }
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async getById(requestId, userId, isOwner = false) {
        const request = await prisma.request.findUnique({
            where: { id: requestId },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        phone: true,
                        profile: true,
                        documents: true
                    }
                },
                apartment: true
            }
        });

        if (!request) {
            throw new Error("Request not found");
        }

        if (!isOwner && request.user_id !== userId) {
            const apartment = await prisma.apartment.findUnique({
                where: { id: request.apartment_id }
            });

            if (!apartment || apartment.owner_id !== userId) {
                throw new Error("Unauthorized to view this request");
            }
        }

        return request;
    }

    static async updateStatus(requestId, status, ownerId, visitDate = null) {
        const request = await prisma.request.findUnique({
            where: { id: requestId },
            include: { apartment: true }
        });

        if (!request) {
            throw new Error("Request not found");
        }

        const apartment = await prisma.apartment.findUnique({
            where: { id: request.apartment_id }
        });

        if (apartment.owner_id !== ownerId) {
            throw new Error("Unauthorized to update this request");
        }

        const updateData = { status };
        if (visitDate && status === 'visit_planned') {
            updateData.visit_date = new Date(visitDate);
        }

        const updatedRequest = await prisma.request.update({
            where: { id: requestId },
            data: updateData
        });

        // Notifier l'utilisateur du changement de statut (non bloquant)
        EmailService.sendRequestStatusUpdate(requestId, status).catch(err => {
            console.error('Failed to send status update notification:', err.message);
        });

        return updatedRequest;
    }

    static async addDocument(requestId, userId, documentData) {
        const request = await prisma.request.findUnique({
            where: { id: requestId }
        });

        if (!request) {
            throw new Error("Request not found");
        }

        if (request.user_id !== userId) {
            throw new Error("Unauthorized to modify this request");
        }

        return prisma.requestDocument.create({
            data: {
                name: documentData.name,
                url: documentData.url,
                request_id: requestId
            }
        });
    }

    static async delete(requestId, userId) {
        const request = await prisma.request.findUnique({
            where: { id: requestId }
        });

        if (!request) {
            throw new Error("Request not found");
        }

        if (request.user_id !== userId) {
            throw new Error("Unauthorized to delete this request");
        }

        // Supprimer d'abord les documents associés
        await prisma.requestDocument.deleteMany({
            where: { request_id: requestId }
        });

        return prisma.request.delete({
            where: { id: requestId }
        });
    }

    static async getOwnerStats(ownerId) {
        const apartments = await prisma.apartment.findMany({
            where: { owner_id: ownerId },
            select: { id: true }
        });

        const apartmentIds = apartments.map(apt => apt.id);

        const requests = await prisma.request.findMany({
            where: {
                apartment_id: { in: apartmentIds }
            }
        });

        const stats = {
            total: requests.length,
            waiting: requests.filter(r => r.status === 'waiting').length,
            contacted: requests.filter(r => r.status === 'contacted').length,
            visit_planned: requests.filter(r => r.status === 'visit_planned').length,
            accepted: requests.filter(r => r.status === 'accepted').length,
            refused: requests.filter(r => r.status === 'refused').length
        };

        return stats;
    }
}

export default RequestService;

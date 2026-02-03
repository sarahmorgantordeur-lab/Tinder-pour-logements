import prisma from '../config/db.js';
import EmailService from './emailService.js';

class MatchService {

    static async createMatch(ownerId, userId, apartmentId) {
        // Vérifier que l'appartement existe et appartient au propriétaire
        const apartment = await prisma.apartment.findUnique({
            where: { id: apartmentId }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner_id !== ownerId) {
            throw new Error("Unauthorized to create match for this apartment");
        }

        // Vérifier qu'un like existe
        const swipe = await prisma.swipe.findUnique({
            where: {
                user_id_apartment_id: {
                    user_id: userId,
                    apartment_id: apartmentId
                }
            }
        });

        if (!swipe || swipe.direction !== 'like') {
            throw new Error("User has not liked this apartment");
        }

        const existingMatch = await prisma.match.findUnique({
            where: {
                user_id_apartment_id: {
                    user_id: userId,
                    apartment_id: apartmentId
                }
            }
        });

        if (existingMatch) {
            throw new Error("Match already exists");
        }

        const match = await prisma.match.create({
            data: {
                user_id: userId,
                apartment_id: apartmentId
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true
                    }
                },
                apartment: {
                    include: {
                        owner: {
                            select: {
                                id: true,
                                username: true,
                                email: true
                            }
                        }
                    }
                }
            }
        });

        EmailService.sendMatchNotification(userId, apartmentId).catch(err => {
            console.error('Failed to send match notification:', err.message);
        });

        return match;
    }

    static async getUserMatches(userId) {
        return prisma.match.findMany({
            where: { user_id: userId },
            include: {
                apartment: {
                    include: {
                        owner: {
                            select: {
                                id: true,
                                username: true,
                                email: true,
                                phone: true,
                                avatar: true,
                                company_name: true
                            }
                        }
                    }
                },
                messages: {
                    orderBy: { created_at: 'desc' },
                    take: 1
                }
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async getOwnerMatches(ownerId) {
        // Récupérer les appartements du propriétaire
        const apartments = await prisma.apartment.findMany({
            where: { owner_id: ownerId },
            select: { id: true }
        });

        const apartmentIds = apartments.map(a => a.id);

        return prisma.match.findMany({
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
                        avatar: true,
                        profile: true
                    }
                },
                apartment: {
                    select: {
                        id: true,
                        title: true,
                        address: true,
                        price: true,
                        pictures: true
                    }
                },
                messages: {
                    orderBy: { created_at: 'desc' },
                    take: 1
                }
            },
            orderBy: { created_at: 'desc' }
        });
    }

    static async getMatchById(matchId, userId) {
        const match = await prisma.match.findUnique({
            where: { id: matchId },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        phone: true,
                        avatar: true,
                        profile: true
                    }
                },
                apartment: {
                    include: {
                        owner: {
                            select: {
                                id: true,
                                username: true,
                                email: true,
                                phone: true,
                                avatar: true,
                                company_name: true
                            }
                        }
                    }
                },
                messages: {
                    orderBy: { created_at: 'asc' },
                    include: {
                        sender: {
                            select: {
                                id: true,
                                username: true,
                                avatar: true
                            }
                        }
                    }
                }
            }
        });

        if (!match) {
            throw new Error("Match not found");
        }

        // Vérifier que l'utilisateur a accès au match
        const isUser = match.user_id === userId;
        const isOwner = match.apartment.owner_id === userId;

        if (!isUser && !isOwner) {
            throw new Error("Unauthorized to view this match");
        }

        return match;
    }

    static async deleteMatch(matchId, ownerId) {
        const match = await prisma.match.findUnique({
            where: { id: matchId },
            include: { apartment: true }
        });

        if (!match) {
            throw new Error("Match not found");
        }

        if (match.apartment.owner_id !== ownerId) {
            throw new Error("Unauthorized to delete this match");
        }

        // Supprimer d'abord les messages associés
        await prisma.message.deleteMany({
            where: { match_id: matchId }
        });

        return prisma.match.delete({
            where: { id: matchId }
        });
    }

    static async sendMessage(matchId, senderId, content) {
        const match = await prisma.match.findUnique({
            where: { id: matchId },
            include: { apartment: true }
        });

        if (!match) {
            throw new Error("Match not found");
        }

        // Vérifier que l'expéditeur fait partie du match
        const isUser = match.user_id === senderId;
        const isOwner = match.apartment.owner_id === senderId;

        if (!isUser && !isOwner) {
            throw new Error("Unauthorized to send message in this match");
        }

        return prisma.message.create({
            data: {
                content,
                match_id: matchId,
                sender_id: senderId
            },
            include: {
                sender: {
                    select: {
                        id: true,
                        username: true,
                        avatar: true
                    }
                }
            }
        });
    }

    static async getMessages(matchId, userId, limit = 50, offset = 0) {
        const match = await prisma.match.findUnique({
            where: { id: matchId },
            include: { apartment: true }
        });

        if (!match) {
            throw new Error("Match not found");
        }

        // Vérifier l'accès
        const isUser = match.user_id === userId;
        const isOwner = match.apartment.owner_id === userId;

        if (!isUser && !isOwner) {
            throw new Error("Unauthorized to view messages");
        }

        return prisma.message.findMany({
            where: { match_id: matchId },
            include: {
                sender: {
                    select: {
                        id: true,
                        username: true,
                        avatar: true
                    }
                }
            },
            orderBy: { created_at: 'desc' },
            take: limit,
            skip: offset
        });
    }

    /**
     * Refuse un like (ne crée pas de match, optionnellement supprime le swipe)
     */
    static async rejectLike(ownerId, userId, apartmentId) {
        // Vérifier que l'appartement appartient au propriétaire
        const apartment = await prisma.apartment.findUnique({
            where: { id: apartmentId }
        });

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner_id !== ownerId) {
            throw new Error("Unauthorized");
        }

        // Supprimer le swipe
        const swipe = await prisma.swipe.findUnique({
            where: {
                user_id_apartment_id: {
                    user_id: userId,
                    apartment_id: apartmentId
                }
            }
        });

        if (swipe) {
            await prisma.swipe.delete({
                where: { id: swipe.id }
            });
        }

        return { success: true, message: "Like rejected" };
    }
}

export default MatchService;

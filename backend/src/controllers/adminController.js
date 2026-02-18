import AdminService from '../services/adminService.js';

const parsePagination = (req) => {
    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const limit = Math.min(Math.max(parseInt(req.query.limit) || 20, 1), 100);
    return { page, limit };
};

class AdminController {
    static async listUsers(req, res) {
        try {
            const { page, limit } = parsePagination(req);
            const search = req.query.search?.trim();
            const role = req.query.role;
            const banned = req.query.banned !== undefined ? req.query.banned === 'true' : undefined;

            const { items, total } = await AdminService.listUsers({
                page,
                limit,
                search,
                role,
                banned
            });

            res.status(200).json({
                items,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
        } catch (error) {
            console.error('Admin list users error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async updateUserRole(req, res) {
        try {
            const { id } = req.params;
            const { role } = req.body;

            if (!role) {
                return res.status(400).json({ message: 'role is required' });
            }
            if (!['user', 'owner', 'agency', 'admin'].includes(role)) {
                return res.status(400).json({ message: 'Invalid role' });
            }

            const user = await AdminService.updateUserRole(id, role);
            res.status(200).json({ message: 'Role updated', user });
        } catch (error) {
            if (error.code === 'P2025') {
                return res.status(404).json({ message: 'User not found' });
            }
            console.error('Admin update role error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async setUserBan(req, res) {
        try {
            const { id } = req.params;
            const { banned } = req.body;

            if (banned === undefined) {
                return res.status(400).json({ message: 'banned is required' });
            }
            const isBanned = banned === true || banned === 'true';
            const user = await AdminService.setUserBan(id, isBanned);
            res.status(200).json({ message: 'Ban status updated', user });
        } catch (error) {
            if (error.code === 'P2025') {
                return res.status(404).json({ message: 'User not found' });
            }
            console.error('Admin ban user error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await AdminService.deleteUser(id);
            res.status(200).json({ message: 'User deleted' });
        } catch (error) {
            if (error.code === 'P2025') {
                return res.status(404).json({ message: 'User not found' });
            }
            console.error('Admin delete user error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async listApartments(req, res) {
        try {
            const { page, limit } = parsePagination(req);
            const search = req.query.search?.trim();
            const region = req.query.region?.trim();
            const listingType = req.query.listingType;
            const propertyType = req.query.propertyType;
            const ownerId = req.query.ownerId;
            const availability = req.query.availability !== undefined ? req.query.availability === 'true' : undefined;

            const { items, total } = await AdminService.listApartments({
                page,
                limit,
                search,
                region,
                listingType,
                propertyType,
                ownerId,
                availability
            });

            res.status(200).json({
                items,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
        } catch (error) {
            console.error('Admin list apartments error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async deleteApartment(req, res) {
        try {
            const { id } = req.params;
            await AdminService.deleteApartment(id);
            res.status(200).json({ message: 'Apartment deleted' });
        } catch (error) {
            if (error.code === 'P2025') {
                return res.status(404).json({ message: 'Apartment not found' });
            }
            console.error('Admin delete apartment error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async listMatches(req, res) {
        try {
            const { page, limit } = parsePagination(req);
            const userId = req.query.userId;
            const apartmentId = req.query.apartmentId;
            const ownerId = req.query.ownerId;

            const { items, total } = await AdminService.listMatches({
                page,
                limit,
                userId,
                apartmentId,
                ownerId
            });

            res.status(200).json({
                items,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
        } catch (error) {
            console.error('Admin list matches error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getMatchById(req, res) {
        try {
            const { id } = req.params;
            const match = await AdminService.getMatchById(id);
            if (!match) {
                return res.status(404).json({ message: 'Match not found' });
            }
            res.status(200).json({ match });
        } catch (error) {
            console.error('Admin get match error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async deleteMatch(req, res) {
        try {
            const { id } = req.params;
            await AdminService.deleteMatch(id);
            res.status(200).json({ message: 'Match deleted' });
        } catch (error) {
            if (error.code === 'P2025') {
                return res.status(404).json({ message: 'Match not found' });
            }
            console.error('Admin delete match error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async listMessages(req, res) {
        try {
            const { page, limit } = parsePagination(req);
            const matchId = req.query.matchId;
            const senderId = req.query.senderId;

            const { items, total } = await AdminService.listMessages({
                page,
                limit,
                matchId,
                senderId
            });

            res.status(200).json({
                items,
                pagination: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
        } catch (error) {
            console.error('Admin list messages error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async deleteMessage(req, res) {
        try {
            const { id } = req.params;
            await AdminService.deleteMessage(id);
            res.status(200).json({ message: 'Message deleted' });
        } catch (error) {
            if (error.code === 'P2025') {
                return res.status(404).json({ message: 'Message not found' });
            }
            console.error('Admin delete message error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default AdminController;

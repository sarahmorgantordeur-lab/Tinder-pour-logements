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
            const active = req.query.active !== undefined ? req.query.active === 'true' : undefined;

            const { items, total } = await AdminService.listUsers({ page, limit, search, role, active });

            res.status(200).json({
                items,
                pagination: { page, limit, total, totalPages: Math.ceil(total / limit) }
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

            if (!role) return res.status(400).json({ message: 'role is required' });
            if (!['user', 'owner', 'agency'].includes(role)) {
                return res.status(400).json({ message: 'Invalid role' });
            }

            const user = await AdminService.updateUserRole(id, role);
            res.status(200).json({ message: 'Role updated', user });
        } catch (error) {
            if (error.code === 'P2025') return res.status(404).json({ message: 'User not found' });
            console.error('Admin update role error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async setUserActive(req, res) {
        try {
            const { id } = req.params;
            const { active } = req.body;

            if (active === undefined) return res.status(400).json({ message: 'active is required' });

            const isActive = active === true || active === 'true';
            const user = await AdminService.setUserActive(id, isActive);
            res.status(200).json({ message: 'User status updated', user });
        } catch (error) {
            if (error.code === 'P2025') return res.status(404).json({ message: 'User not found' });
            console.error('Admin set active error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await AdminService.deleteUser(id);
            res.status(200).json({ message: 'User deleted' });
        } catch (error) {
            if (error.code === 'P2025') return res.status(404).json({ message: 'User not found' });
            console.error('Admin delete user error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async listProperties(req, res) {
        try {
            const { page, limit } = parsePagination(req);
            const search = req.query.search?.trim();
            const propertyType = req.query.propertyType;
            const ownerId = req.query.ownerId;
            const status = req.query.status;

            const { items, total } = await AdminService.listProperties({ page, limit, search, propertyType, ownerId, status });

            res.status(200).json({
                items,
                pagination: { page, limit, total, totalPages: Math.ceil(total / limit) }
            });
        } catch (error) {
            console.error('Admin list properties error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async deleteProperty(req, res) {
        try {
            const { id } = req.params;
            await AdminService.deleteProperty(id);
            res.status(200).json({ message: 'Property deleted' });
        } catch (error) {
            if (error.code === 'P2025') return res.status(404).json({ message: 'Property not found' });
            console.error('Admin delete property error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async listConversations(req, res) {
        try {
            const { page, limit } = parsePagination(req);
            const userId = req.query.userId;
            const propertyId = req.query.propertyId;
            const ownerId = req.query.ownerId;

            const { items, total } = await AdminService.listConversations({ page, limit, userId, propertyId, ownerId });

            res.status(200).json({
                items,
                pagination: { page, limit, total, totalPages: Math.ceil(total / limit) }
            });
        } catch (error) {
            console.error('Admin list conversations error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async getConversationById(req, res) {
        try {
            const { id } = req.params;
            const conversation = await AdminService.getConversationById(id);
            if (!conversation) return res.status(404).json({ message: 'Conversation not found' });
            res.status(200).json({ conversation });
        } catch (error) {
            console.error('Admin get conversation error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async deleteConversation(req, res) {
        try {
            const { id } = req.params;
            await AdminService.deleteConversation(id);
            res.status(200).json({ message: 'Conversation deleted' });
        } catch (error) {
            if (error.code === 'P2025') return res.status(404).json({ message: 'Conversation not found' });
            console.error('Admin delete conversation error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async listMessages(req, res) {
        try {
            const { page, limit } = parsePagination(req);
            const conversationId = req.query.conversationId;
            const senderId = req.query.senderId;

            const { items, total } = await AdminService.listMessages({ page, limit, conversationId, senderId });

            res.status(200).json({
                items,
                pagination: { page, limit, total, totalPages: Math.ceil(total / limit) }
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
            if (error.code === 'P2025') return res.status(404).json({ message: 'Message not found' });
            console.error('Admin delete message error:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default AdminController;

import express from 'express';
import AdminController from '../controllers/adminController.js';
import { authenticate, isAdmin } from '../middlewares/authMiddleware.js';
import { uuidParamValidation } from '../utils/validators.js';

const router = express.Router();

router.use(authenticate, isAdmin);

// Users
router.get('/users', AdminController.listUsers);
router.patch('/users/:id/role', uuidParamValidation('id'), AdminController.updateUserRole);
router.patch('/users/:id/active', uuidParamValidation('id'), AdminController.setUserActive);
router.delete('/users/:id', uuidParamValidation('id'), AdminController.deleteUser);

// Properties
router.get('/properties', AdminController.listProperties);
router.delete('/properties/:id', uuidParamValidation('id'), AdminController.deleteProperty);

// Conversations
router.get('/conversations', AdminController.listConversations);
router.get('/conversations/:id', uuidParamValidation('id'), AdminController.getConversationById);
router.delete('/conversations/:id', uuidParamValidation('id'), AdminController.deleteConversation);

// Messages
router.get('/messages', AdminController.listMessages);
router.delete('/messages/:id', uuidParamValidation('id'), AdminController.deleteMessage);

export default router;

import express from 'express';
import ConversationController from '../controllers/matchController.js';
import { authenticate } from '../config/jwt.js';
import { isUser, isOwnerOrAgency } from '../middlewares/roleMiddleware.js';
import { uuidParamValidation } from '../utils/validators.js';

const router = express.Router();

// Propriétaires / agences
router.post('/', authenticate, isOwnerOrAgency, ConversationController.createConversation);
router.get('/owner', authenticate, isOwnerOrAgency, ConversationController.getOwnerConversations);
router.delete('/:id', authenticate, isOwnerOrAgency, uuidParamValidation('id'), ConversationController.deleteConversation);

// Locataires
router.get('/', authenticate, isUser, ConversationController.getUserConversations);

// Commun
router.get('/:id', authenticate, uuidParamValidation('id'), ConversationController.getById);
router.post('/:id/messages', authenticate, uuidParamValidation('id'), ConversationController.sendMessage);
router.get('/:id/messages', authenticate, uuidParamValidation('id'), ConversationController.getMessages);

export default router;

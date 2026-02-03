import express from 'express';
import MatchController from '../controllers/matchController.js';
import { authenticate } from '../config/jwt.js';
import { isUser, isOwnerOrAgency } from '../middlewares/roleMiddleware.js';
import { uuidParamValidation } from '../utils/validators.js';

const router = express.Router();

// Routes pour les propriétaires/agences
router.post('/', authenticate, isOwnerOrAgency, MatchController.createMatch);
router.post('/reject', authenticate, isOwnerOrAgency, MatchController.rejectLike);
router.get('/owner', authenticate, isOwnerOrAgency, MatchController.getOwnerMatches);
router.delete('/:id', authenticate, isOwnerOrAgency, uuidParamValidation('id'), MatchController.deleteMatch);

// Routes pour les locataires (users)
router.get('/', authenticate, isUser, MatchController.getUserMatches);

// Routes communes (accessibles par les deux parties d'un match)
router.get('/:id', authenticate, uuidParamValidation('id'), MatchController.getMatchById);
router.post('/:id/messages', authenticate, uuidParamValidation('id'), MatchController.sendMessage);
router.get('/:id/messages', authenticate, uuidParamValidation('id'), MatchController.getMessages);

export default router;

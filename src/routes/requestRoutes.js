import express from 'express';
import RequestController from '../controllers/requestController.js';
import { authenticate } from '../config/jwt.js';
import { isUser, isOwnerOrAgency } from '../middlewares/roleMiddleware.js';

const router = express.Router();

// Routes pour les utilisateurs (locataires/acheteurs)
router.post('/', authenticate, isUser, RequestController.create);
router.get('/my-requests', authenticate, isUser, RequestController.getMyRequests);
router.get('/:id', authenticate, RequestController.getById);
router.delete('/:id', authenticate, isUser, RequestController.delete);
router.post('/:id/documents', authenticate, isUser, RequestController.addDocument);

// Routes pour les propriétaires/agences
router.get('/apartment/:apartmentId', authenticate, isOwnerOrAgency, RequestController.getByApartment);
router.get('/owner/all', authenticate, isOwnerOrAgency, RequestController.getAllForOwner);
router.get('/owner/stats', authenticate, isOwnerOrAgency, RequestController.getOwnerStats);
router.put('/:id/status', authenticate, isOwnerOrAgency, RequestController.updateStatus);

export default router;

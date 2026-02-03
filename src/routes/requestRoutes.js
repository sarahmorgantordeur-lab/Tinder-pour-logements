import express from 'express';
import RequestController from '../controllers/requestController.js';
import { authenticate, authorize } from '../config/jwt.js';

const router = express.Router();

// Routes pour les utilisateurs (locataires/acheteurs)
router.post('/', authenticate, authorize('user'), RequestController.create);
router.get('/my-requests', authenticate, authorize('user'), RequestController.getMyRequests);
router.get('/:id', authenticate, RequestController.getById);
router.delete('/:id', authenticate, authorize('user'), RequestController.delete);
router.post('/:id/documents', authenticate, authorize('user'), RequestController.addDocument);

// Routes pour les propriétaires/agences
router.get('/apartment/:apartmentId', authenticate, authorize('owner', 'agency'), RequestController.getByApartment);
router.get('/owner/all', authenticate, authorize('owner', 'agency'), RequestController.getAllForOwner);
router.get('/owner/stats', authenticate, authorize('owner', 'agency'), RequestController.getOwnerStats);
router.put('/:id/status', authenticate, authorize('owner', 'agency'), RequestController.updateStatus);

export default router;

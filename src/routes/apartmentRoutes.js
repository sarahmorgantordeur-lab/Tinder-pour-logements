import express from 'express';
import ApartmentController from '../controllers/apartmentController.js';
import { authenticate, authorize } from '../config/jwt.js';

const router = express.Router();

// Routes publiques
router.get('/', ApartmentController.getAll);
router.get('/:id', ApartmentController.getById);

// Routes protégées - Propriétaires et agences
router.post('/', authenticate, authorize('owner', 'agency'), ApartmentController.create);
router.get('/owner/my-apartments', authenticate, authorize('owner', 'agency'), ApartmentController.getMyApartments);
router.put('/:id', authenticate, authorize('owner', 'agency'), ApartmentController.update);
router.delete('/:id', authenticate, authorize('owner', 'agency'), ApartmentController.delete);
router.post('/:id/photos', authenticate, authorize('owner', 'agency'), ApartmentController.addPhoto);
router.delete('/:id/photos', authenticate, authorize('owner', 'agency'), ApartmentController.removePhoto);

export default router;

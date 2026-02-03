import express from 'express';
import ApartmentController from '../controllers/apartmentController.js';
import { authenticate } from '../config/jwt.js';
import { isOwnerOrAgency } from '../middlewares/roleMiddleware.js';

const router = express.Router();

// Routes publiques
router.get('/', ApartmentController.getAll);
router.get('/:id', ApartmentController.getById);

// Routes protégées - Propriétaires et agences
router.post('/', authenticate, isOwnerOrAgency, ApartmentController.create);
router.get('/owner/my-apartments', authenticate, isOwnerOrAgency, ApartmentController.getMyApartments);
router.put('/:id', authenticate, isOwnerOrAgency, ApartmentController.update);
router.delete('/:id', authenticate, isOwnerOrAgency, ApartmentController.delete);
router.post('/:id/photos', authenticate, isOwnerOrAgency, ApartmentController.addPhoto);
router.delete('/:id/photos', authenticate, isOwnerOrAgency, ApartmentController.removePhoto);

export default router;

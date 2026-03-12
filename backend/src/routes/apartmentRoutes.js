import express from 'express';
import PropertyController from '../controllers/apartmentController.js';
import { authenticate } from '../config/jwt.js';
import { isOwnerOrAgency } from '../middlewares/roleMiddleware.js';
import { uploadPicturesMiddleware } from '../middlewares/uploadMiddleware.js';
import { uuidParamValidation } from '../utils/validators.js';

const router = express.Router();

// Routes publiques
router.get('/', PropertyController.getAll);

// Routes protégées — propriétaires et agences
router.get('/owner/my-properties', authenticate, isOwnerOrAgency, PropertyController.getMyProperties);

// Route par ID
router.get('/:id', uuidParamValidation('id'), PropertyController.getById);

// CRUD protégé
router.post('/', authenticate, isOwnerOrAgency, PropertyController.create);
router.put('/:id', authenticate, isOwnerOrAgency, uuidParamValidation('id'), PropertyController.update);
router.patch('/:id/status', authenticate, isOwnerOrAgency, uuidParamValidation('id'), PropertyController.changeStatus);
router.delete('/:id', authenticate, isOwnerOrAgency, uuidParamValidation('id'), PropertyController.delete);

// Photos
router.post('/:id/photos', authenticate, isOwnerOrAgency, uuidParamValidation('id'), uploadPicturesMiddleware, PropertyController.uploadPhotos);
router.delete('/:id/photos', authenticate, isOwnerOrAgency, uuidParamValidation('id'), PropertyController.removePhoto);

export default router;
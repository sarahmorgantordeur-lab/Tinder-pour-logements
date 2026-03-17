import express from 'express';
import PropertyController from '../controllers/apartmentController.js';
import { authenticate, optionalAuthenticate } from '../config/jwt.js';
import { isOwnerOrAgency } from '../middlewares/roleMiddleware.js';
import { uploadPicturesMiddleware } from '../middlewares/uploadMiddleware.js';
import { uuidParamValidation } from '../utils/validators.js';

const router = express.Router();

// Routes publiques
router.get('/', optionalAuthenticate, PropertyController.getAll);

// Routes protégées — propriétaires et agences
router.get('/owner/my-properties', authenticate, isOwnerOrAgency, PropertyController.getMyProperties);

// CRUD protégé
router.post('/', authenticate, isOwnerOrAgency, PropertyController.create);
router.put('/:id', authenticate, isOwnerOrAgency, uuidParamValidation('id'), PropertyController.update);
router.patch('/:id/status', authenticate, isOwnerOrAgency, uuidParamValidation('id'), PropertyController.changeStatus);
router.delete('/:id', authenticate, isOwnerOrAgency, uuidParamValidation('id'), PropertyController.delete);

// Photos
router.post('/:id/photos', authenticate, isOwnerOrAgency, uuidParamValidation('id'), uploadPicturesMiddleware, PropertyController.uploadPhotos);
router.delete('/:id/photos', authenticate, isOwnerOrAgency, uuidParamValidation('id'), PropertyController.removePhoto);

// Route par ID (doit être en dernier pour ne pas capturer les routes nommées)
router.get('/:id', uuidParamValidation('id'), PropertyController.getById);

export default router;
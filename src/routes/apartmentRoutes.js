import express from 'express';
import ApartmentController from '../controllers/apartmentController.js';
import { authenticate } from '../config/jwt.js';
import { isOwnerOrAgency } from '../middlewares/roleMiddleware.js';
import { uploadPicturesMiddleware } from '../middlewares/uploadMiddleware.js';
import {
    createApartmentValidation,
    updateApartmentValidation,
    searchApartmentValidation,
    uuidParamValidation
} from '../utils/validators.js';

const router = express.Router();

// Routes publiques
router.get('/', searchApartmentValidation, ApartmentController.getAll);
router.get('/:id', uuidParamValidation('id'), ApartmentController.getById);

// Routes protégées - Propriétaires et agences
router.post('/', authenticate, isOwnerOrAgency, createApartmentValidation, ApartmentController.create);
router.get('/owner/my-apartments', authenticate, isOwnerOrAgency, ApartmentController.getMyApartments);
router.put('/:id', authenticate, isOwnerOrAgency, uuidParamValidation('id'), updateApartmentValidation, ApartmentController.update);
router.delete('/:id', authenticate, isOwnerOrAgency, uuidParamValidation('id'), ApartmentController.delete);

router.post('/:id/pictures', authenticate, isOwnerOrAgency, uuidParamValidation('id'), uploadPicturesMiddleware, ApartmentController.uploadPictures);
router.delete('/:id/pictures', authenticate, isOwnerOrAgency, uuidParamValidation('id'), ApartmentController.removePicture);

export default router;

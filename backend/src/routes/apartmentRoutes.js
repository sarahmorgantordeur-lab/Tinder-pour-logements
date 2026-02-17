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

// Routes de recherche géolocalisée (AVANT /:id pour éviter les conflits)
router.get('/search/location', ApartmentController.searchByLocation);
router.get('/search/address', ApartmentController.searchByAddress);

// Routes protégées - Propriétaires et agences (AVANT /:id)
router.get('/owner/my-apartments', authenticate, isOwnerOrAgency, ApartmentController.getMyApartments);

// Route avec paramètre :id
router.get('/:id', uuidParamValidation('id'), ApartmentController.getById);

// Routes protégées - Propriétaires et agences
router.post('/', authenticate, isOwnerOrAgency, createApartmentValidation, ApartmentController.create);
router.put('/:id', authenticate, isOwnerOrAgency, uuidParamValidation('id'), updateApartmentValidation, ApartmentController.update);
router.delete('/:id', authenticate, isOwnerOrAgency, uuidParamValidation('id'), ApartmentController.delete);

// Photos
router.post('/:id/pictures', authenticate, isOwnerOrAgency, uuidParamValidation('id'), uploadPicturesMiddleware, ApartmentController.uploadPictures);
router.delete('/:id/pictures', authenticate, isOwnerOrAgency, uuidParamValidation('id'), ApartmentController.removePicture);

// Géocodage manuel
router.post('/:id/geocode', authenticate, isOwnerOrAgency, uuidParamValidation('id'), ApartmentController.updateCoordinates);

export default router;

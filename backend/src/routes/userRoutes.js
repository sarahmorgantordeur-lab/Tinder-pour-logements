import express from 'express';
import UserController from '../controllers/userController.js';
import { authenticate } from '../config/jwt.js';
import { uploadAvatarMiddleware, uploadProfilePhotoMiddleware, uploadDocumentMiddleware } from '../middlewares/uploadMiddleware.js';
import { uuidParamValidation } from '../utils/validators.js';

const router = express.Router();

router.get('/profile', authenticate, UserController.getProfile);
router.put('/profile', authenticate, UserController.updateProfile);
router.post('/avatar', authenticate, uploadAvatarMiddleware, UserController.uploadAvatar);

// Photos de profil (galerie)
router.post('/profile-photos', authenticate, uploadProfilePhotoMiddleware, UserController.uploadProfilePhoto);
router.delete('/profile-photos/:id', authenticate, uuidParamValidation('id'), UserController.deleteProfilePhoto);

// Documents
router.post('/documents', authenticate, uploadDocumentMiddleware, UserController.uploadDocument);
router.delete('/documents/:id', authenticate, uuidParamValidation('id'), UserController.deleteDocument);

// Profil locataire
router.put('/tenant-profile', authenticate, UserController.updateTenantProfile);

// Profil agence
router.put('/agency', authenticate, UserController.updateAgency);

export default router;

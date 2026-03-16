import express from 'express';
import UserController from '../controllers/userController.js';
import { authenticate } from '../config/jwt.js';
import { uploadProfilePhotosMiddleware, uploadDocumentMiddleware } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.get('/agencies', UserController.getAgencies);
router.get('/profile', authenticate, UserController.getProfile);
router.put('/profile', authenticate, UserController.updateProfile);

// Photos de profil
router.get('/profile-photos', authenticate, UserController.getProfilePhotos);
router.post('/profile-photos', authenticate, uploadProfilePhotosMiddleware, UserController.uploadProfilePhotos);
router.delete('/profile-photos/:photoId', authenticate, UserController.removeProfilePhoto);

// Documents
router.get('/documents', authenticate, UserController.getDocuments);
router.post('/documents', authenticate, uploadDocumentMiddleware, UserController.uploadDocument);
router.delete('/documents/:docId', authenticate, UserController.removeDocument);

// Profil locataire
router.put('/tenant-profile', authenticate, UserController.updateTenantProfile);

// Profil agence
router.put('/agency', authenticate, UserController.updateAgency);

// Profil public — doit être en dernier pour ne pas intercepter les routes nommées
router.get('/:id', authenticate, UserController.getPublicProfile);

export default router;

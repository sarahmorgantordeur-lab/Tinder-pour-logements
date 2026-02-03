import express from 'express';
import UserController from '../controllers/userController.js';
import { authenticate } from '../config/jwt.js';
import { uploadAvatarMiddleware, uploadDocumentMiddleware } from '../middlewares/uploadMiddleware.js';
import {
    updateProfileValidation,
    updatePreferencesValidation,
    uuidParamValidation
} from '../utils/validators.js';

const router = express.Router();

router.get('/profile', authenticate, UserController.getProfile);
router.put('/profile', authenticate, updateProfileValidation, UserController.updateProfile);
router.post('/avatar', authenticate, uploadAvatarMiddleware, UserController.uploadAvatar);

router.post('/favorites', authenticate, UserController.addFavorite);
router.delete('/favorites/:apartmentId', authenticate, uuidParamValidation('apartmentId'), UserController.removeFavorite);
router.get('/favorites', authenticate, UserController.getFavorites);

router.post('/history', authenticate, UserController.addToHistory);
router.get('/history', authenticate, UserController.getHistory);

router.put('/preferences', authenticate, updatePreferencesValidation, UserController.updatePreferences);

router.post('/documents', authenticate, uploadDocumentMiddleware, UserController.addDocument);
router.get('/documents', authenticate, UserController.getDocuments);
router.delete('/documents/:documentId', authenticate, uuidParamValidation('documentId'), UserController.removeDocument);

// Paramètres de notification
router.put('/notifications', authenticate, UserController.updateNotificationSettings);

export default router;

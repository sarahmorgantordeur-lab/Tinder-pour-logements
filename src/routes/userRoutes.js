import express from 'express';
import UserController from '../controllers/userController.js';
import { authenticate } from '../config/jwt.js';

const router = express.Router();

router.get('/profile', authenticate, UserController.getProfile);
router.put('/profile', authenticate, UserController.updateProfile);

router.post('/favorites', authenticate, UserController.addFavorite);
router.delete('/favorites/:apartmentId', authenticate, UserController.removeFavorite);
router.get('/favorites', authenticate, UserController.getFavorites);

router.post('/history', authenticate, UserController.addToHistory);
router.get('/history', authenticate, UserController.getHistory);

router.put('/preferences', authenticate, UserController.updatePreferences);

router.post('/documents', authenticate, UserController.addDocument);
router.delete('/documents/:documentId', authenticate, UserController.removeDocument);

export default router;

import express from 'express';
import UserController from '../controllers/userController.js';
import { authenticate } from '../config/jwt.js';
import { uploadAvatarMiddleware } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.get('/profile', authenticate, UserController.getProfile);
router.put('/profile', authenticate, UserController.updateProfile);
router.post('/avatar', authenticate, uploadAvatarMiddleware, UserController.uploadAvatar);

// Profil locataire
router.put('/tenant-profile', authenticate, UserController.updateTenantProfile);

// Profil agence
router.put('/agency', authenticate, UserController.updateAgency);

export default router;

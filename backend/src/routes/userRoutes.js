import express from 'express';
import UserController from '../controllers/userController.js';
import { authenticate } from '../config/jwt.js';

const router = express.Router();

router.get('/profile', authenticate, UserController.getProfile);
router.put('/profile', authenticate, UserController.updateProfile);

// Profil locataire
router.put('/tenant-profile', authenticate, UserController.updateTenantProfile);

// Profil agence
router.put('/agency', authenticate, UserController.updateAgency);

export default router;

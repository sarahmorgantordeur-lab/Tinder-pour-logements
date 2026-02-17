import express from 'express';
import AuthController from '../controllers/authController.js';
import { registerValidation, loginValidation } from '../utils/validators.js';

const router = express.Router();

router.post('/register', registerValidation, AuthController.register);
router.post('/login', loginValidation, AuthController.login);

export default router;

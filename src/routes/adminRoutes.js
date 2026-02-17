import express from 'express';
import AdminController from '../controllers/adminController.js';
import { authenticate, isAdmin } from '../middlewares/authMiddleware.js';
import { uuidParamValidation } from '../utils/validators.js';

const router = express.Router();

router.use(authenticate, isAdmin);

// Users
router.get('/users', AdminController.listUsers);
router.patch('/users/:id/role', uuidParamValidation('id'), AdminController.updateUserRole);
router.patch('/users/:id/ban', uuidParamValidation('id'), AdminController.setUserBan);
router.delete('/users/:id', uuidParamValidation('id'), AdminController.deleteUser);

// Apartments
router.get('/apartments', AdminController.listApartments);
router.delete('/apartments/:id', uuidParamValidation('id'), AdminController.deleteApartment);

// Matches
router.get('/matches', AdminController.listMatches);
router.get('/matches/:id', uuidParamValidation('id'), AdminController.getMatchById);
router.delete('/matches/:id', uuidParamValidation('id'), AdminController.deleteMatch);

// Messages
router.get('/messages', AdminController.listMessages);
router.delete('/messages/:id', uuidParamValidation('id'), AdminController.deleteMessage);

export default router;

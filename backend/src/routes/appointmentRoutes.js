import express from 'express';
import AppointmentController from '../controllers/appointmentController.js';
import { authenticate } from '../config/jwt.js';
import { isOwnerOrAgency } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/tenant', authenticate, AppointmentController.listAsTenant);
router.get('/',       authenticate, isOwnerOrAgency, AppointmentController.list);
router.post('/',     authenticate, isOwnerOrAgency, AppointmentController.create);
router.put('/:id',   authenticate, isOwnerOrAgency, AppointmentController.update);
router.delete('/:id', authenticate, AppointmentController.remove);

export default router;

import express from 'express';
import SwipeController from '../controllers/swipeController.js';
import { authenticate } from '../config/jwt.js';
import { isUser, isOwnerOrAgency } from '../middlewares/roleMiddleware.js';
import { uuidParamValidation } from '../utils/validators.js';

const router = express.Router();

// Routes pour les locataires (users)
router.post('/', authenticate, isUser, SwipeController.swipe);
router.get('/apartments', authenticate, isUser, SwipeController.getApartmentsToSwipe);
router.get('/history', authenticate, isUser, SwipeController.getSwipeHistory);
router.delete('/:apartmentId', authenticate, isUser, uuidParamValidation('apartmentId'), SwipeController.deleteSwipe);

// Routes pour les propriétaires/agences
router.get('/likes/received', authenticate, isOwnerOrAgency, SwipeController.getReceivedLikes);
router.get('/likes/apartment/:apartmentId', authenticate, isOwnerOrAgency, uuidParamValidation('apartmentId'), SwipeController.getLikesForApartment);

export default router;

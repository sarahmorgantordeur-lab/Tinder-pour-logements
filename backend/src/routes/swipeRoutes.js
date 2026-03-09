import express from 'express';
import SwipeController from '../controllers/swipeController.js';
import { authenticate } from '../config/jwt.js';
import { isUser, isOwnerOrAgency } from '../middlewares/roleMiddleware.js';
import { uuidParamValidation } from '../utils/validators.js';

const router = express.Router();

// Locataires
router.post('/', authenticate, isUser, SwipeController.swipe);
router.get('/properties', authenticate, isUser, SwipeController.getPropertiesToSwipe);
router.get('/history', authenticate, isUser, SwipeController.getSwipeHistory);
router.delete('/:propertyId', authenticate, isUser, uuidParamValidation('propertyId'), SwipeController.deleteSwipe);

// Propriétaires / agences
router.get('/likes/received', authenticate, isOwnerOrAgency, SwipeController.getReceivedLikes);
router.get('/likes/property/:propertyId', authenticate, isOwnerOrAgency, uuidParamValidation('propertyId'), SwipeController.getLikesForProperty);

export default router;

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const { authenticate } = require('../config/jwt.js');

router.get('/profile', authenticate, userController.getProfile);
router.put('/profile', authenticate, userController.updateProfile);

router.post('/favorites', authenticate, userController.addFavorite);
router.delete('/favorites/:apartmentId', authenticate, userController.removeFavorite);
router.get('/favorites', authenticate, userController.getFavorites);

router.post('/history', authenticate, userController.addToHistory);
router.get('/history', authenticate, userController.getHistory);

router.put('/preferences', authenticate, userController.updatePreferences);

router.post('/documents', authenticate, userController.addDocument);
router.delete('/documents/:documentId', authenticate, userController.removeDocument);

module.exports = router;

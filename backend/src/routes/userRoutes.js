const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const { authenticate } = require('../config/jwt.js');

// Toutes les routes nécessitent l'authentification
router.get('/profile', authenticate, userController.getProfile);
router.put('/profile', authenticate, userController.updateProfile);

// Favoris
router.post('/favorites', authenticate, userController.addFavorite);
router.delete('/favorites/:apartmentId', authenticate, userController.removeFavorite);
router.get('/favorites', authenticate, userController.getFavorites);

// Historique
router.post('/history', authenticate, userController.addToHistory);
router.get('/history', authenticate, userController.getHistory);

// Préférences
router.put('/preferences', authenticate, userController.updatePreferences);

// Documents
router.post('/documents', authenticate, userController.addDocument);
router.delete('/documents/:documentId', authenticate, userController.removeDocument);

module.exports = router;

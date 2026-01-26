const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController.js');
const { authenticate, authorize } = require('../config/jwt.js');

// Routes pour les utilisateurs (locataires/acheteurs)
router.post('/', authenticate, authorize('utilisateur'), requestController.create);
router.get('/my-requests', authenticate, authorize('utilisateur'), requestController.getMyRequests);
router.get('/:id', authenticate, requestController.getById);
router.delete('/:id', authenticate, authorize('utilisateur'), requestController.delete);
router.post('/:id/documents', authenticate, authorize('utilisateur'), requestController.addDocument);

// Routes pour les propriétaires/agences
router.get('/apartment/:apartmentId', authenticate, authorize('propriétaire', 'agence'), requestController.getByApartment);
router.get('/owner/all', authenticate, authorize('propriétaire', 'agence'), requestController.getAllForOwner);
router.get('/owner/stats', authenticate, authorize('propriétaire', 'agence'), requestController.getOwnerStats);
router.put('/:id/status', authenticate, authorize('propriétaire', 'agence'), requestController.updateStatus);

module.exports = router;

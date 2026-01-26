const express = require('express');
const router = express.Router();
const apartmentController = require('../controllers/apartmentController.js');
const { authenticate, authorize } = require('../config/jwt.js');

// Routes publiques
router.get('/', apartmentController.getAll);
router.get('/:id', apartmentController.getById);

// Routes protégées - Propriétaires et agences
router.post('/', authenticate, authorize('propriétaire', 'agence'), apartmentController.create);
router.get('/owner/my-apartments', authenticate, authorize('propriétaire', 'agence'), apartmentController.getMyApartments);
router.put('/:id', authenticate, authorize('propriétaire', 'agence'), apartmentController.update);
router.delete('/:id', authenticate, authorize('propriétaire', 'agence'), apartmentController.delete);
router.post('/:id/photos', authenticate, authorize('propriétaire', 'agence'), apartmentController.addPhoto);
router.delete('/:id/photos', authenticate, authorize('propriétaire', 'agence'), apartmentController.removePhoto);

module.exports = router;

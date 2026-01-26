const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    apartment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apartment',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['en attente', 'contacté', 'visite planifiée', 'accepté', 'refusé'],
        default: 'en attente'
    },
    message: {
        type: String,
        trim: true
    },
    documents: [{
        name: String,
        url: String,
        uploadedAt: {
            type: Date,
            default: Date.now
        }
    }],
    visitDate: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware pour mettre à jour la date de modification
requestSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

// Index pour éviter les doublons (un utilisateur ne peut faire qu'une demande par appartement)
requestSchema.index({ apartment: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('Request', requestSchema);

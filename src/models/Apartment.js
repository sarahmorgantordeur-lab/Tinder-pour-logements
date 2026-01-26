const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    region: {
        type: String,
        required: true,
        trim: true
    },
    propertyType: {
        type: String,
        required: true,
        enum: ['appartement', 'maison', 'studio', 'villa', 'terrain', 'local commercial', 'autre'],
        default: 'appartement'
    },
    listingType: {
        type: String,
        required: true,
        enum: ['location', 'vente'],
        default: 'location'
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    surface: {
        type: Number,
        required: true,
        min: 0
    },
    rooms: {
        type: Number,
        required: true,
        min: 0
    },
    photos: [{
        type: String,
        trim: true
    }],
    tags: [{
        type: String,
        trim: true
    }],
    disponibility: {
        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
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
apartmentSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('Apartment', apartmentSchema);

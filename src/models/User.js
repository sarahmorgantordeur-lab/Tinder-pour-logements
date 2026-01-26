const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['utilisateur', 'propriétaire', 'agence'],
        default: 'utilisateur'
    },
    phone: {
        type: String,
        trim: true
    },
    avatar: {
        type: String,
        trim: true
    },
    // Informations spécifiques aux propriétaires/agences
    companyName: {
        type: String,
        trim: true
    },
    siret: {
        type: String,
        trim: true
    },
    // Informations spécifiques aux utilisateurs
    profile: {
        bio: String,
        occupation: String,
        income: Number,
        guarantors: Number
    },
    documents: [{
        name: String,
        url: String,
        type: {
            type: String,
            enum: ['identité', 'revenus', 'garantie', 'autre']
        },
        uploadedAt: {
            type: Date,
            default: Date.now
        }
    }],
    // Historique et préférences
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apartment'
    }],
    viewedApartments: [{
        apartment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Apartment'
        },
        viewedAt: {
            type: Date,
            default: Date.now
        }
    }],
    preferences: {
        propertyType: [String],
        listingType: String,
        minPrice: Number,
        maxPrice: Number,
        minSurface: Number,
        regions: [String],
        tags: [String]
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
userSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model('User', userSchema);

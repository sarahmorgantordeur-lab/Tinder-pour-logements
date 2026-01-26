const User = require('../models/User.js');
const Apartment = require('../models/Apartment.js');

class UserController {
    // Obtenir le profil de l'utilisateur connecté
    static async getProfile(req, res) {
        try {
            const userId = req.user.id;
            const user = await User.findById(userId).select('-password');

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Mettre à jour le profil
    static async updateProfile(req, res) {
        try {
            const userId = req.user.id;
            const updateData = req.body;

            // Interdire la modification du mot de passe et de l'email via cette route
            delete updateData.password;
            delete updateData.email;

            const user = await User.findByIdAndUpdate(
                userId,
                updateData,
                { new: true, runValidators: true }
            ).select('-password');

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({ message: "Profile updated successfully", user });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Ajouter un appartement aux favoris
    static async addFavorite(req, res) {
        try {
            const userId = req.user.id;
            const { apartmentId } = req.body;

            const apartment = await Apartment.findById(apartmentId);
            if (!apartment) {
                return res.status(404).json({ message: "Apartment not found" });
            }

            const user = await User.findById(userId);
            if (user.favorites.includes(apartmentId)) {
                return res.status(400).json({ message: "Apartment already in favorites" });
            }

            user.favorites.push(apartmentId);
            await user.save();

            res.status(200).json({ message: "Apartment added to favorites", favorites: user.favorites });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Retirer un appartement des favoris
    static async removeFavorite(req, res) {
        try {
            const userId = req.user.id;
            const { apartmentId } = req.params;

            const user = await User.findById(userId);
            user.favorites = user.favorites.filter(id => id.toString() !== apartmentId);
            await user.save();

            res.status(200).json({ message: "Apartment removed from favorites", favorites: user.favorites });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Obtenir les favoris
    static async getFavorites(req, res) {
        try {
            const userId = req.user.id;
            const user = await User.findById(userId).populate('favorites');

            res.status(200).json({ favorites: user.favorites });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Ajouter un appartement à l'historique
    static async addToHistory(req, res) {
        try {
            const userId = req.user.id;
            const { apartmentId } = req.body;

            const apartment = await Apartment.findById(apartmentId);
            if (!apartment) {
                return res.status(404).json({ message: "Apartment not found" });
            }

            const user = await User.findById(userId);

            // Vérifier si l'appartement est déjà dans l'historique
            const existingIndex = user.viewedApartments.findIndex(
                item => item.apartment.toString() === apartmentId
            );

            if (existingIndex !== -1) {
                // Mettre à jour la date de visualisation
                user.viewedApartments[existingIndex].viewedAt = new Date();
            } else {
                // Ajouter à l'historique
                user.viewedApartments.push({ apartment: apartmentId });
            }

            await user.save();

            res.status(200).json({ message: "Apartment added to history" });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Obtenir l'historique
    static async getHistory(req, res) {
        try {
            const userId = req.user.id;
            const user = await User.findById(userId)
                .populate('viewedApartments.apartment')
                .sort({ 'viewedApartments.viewedAt': -1 });

            res.status(200).json({ history: user.viewedApartments });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Mettre à jour les préférences
    static async updatePreferences(req, res) {
        try {
            const userId = req.user.id;
            const preferences = req.body;

            const user = await User.findByIdAndUpdate(
                userId,
                { preferences },
                { new: true, runValidators: true }
            ).select('-password');

            res.status(200).json({ message: "Preferences updated successfully", preferences: user.preferences });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Ajouter un document
    static async addDocument(req, res) {
        try {
            const userId = req.user.id;
            const documentData = req.body;

            const user = await User.findById(userId);
            user.documents.push(documentData);
            await user.save();

            res.status(200).json({ message: "Document added successfully", documents: user.documents });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Supprimer un document
    static async removeDocument(req, res) {
        try {
            const userId = req.user.id;
            const { documentId } = req.params;

            const user = await User.findById(userId);
            user.documents = user.documents.filter(doc => doc._id.toString() !== documentId);
            await user.save();

            res.status(200).json({ message: "Document removed successfully", documents: user.documents });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = UserController;

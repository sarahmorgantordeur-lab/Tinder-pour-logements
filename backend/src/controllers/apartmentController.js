const apartmentService = require('../services/apartmentService.js');

class ApartmentController {
    // Créer un nouvel appartement
    static async create(req, res) {
        try {
            // req.user.id devrait être ajouté par le middleware d'authentification
            const ownerId = req.user.id;
            const apartment = await apartmentService.create(req.body, ownerId);
            res.status(201).json({ message: "Apartment created successfully", apartment });
        } catch (error) {
            if (error.message === "All required fields must be provided") {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Obtenir tous les appartements avec filtres optionnels
    static async getAll(req, res) {
        try {
            const filters = {
                propertyType: req.query.propertyType,
                listingType: req.query.listingType,
                region: req.query.region,
                minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
                maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
                minSurface: req.query.minSurface ? Number(req.query.minSurface) : undefined,
                disponibility: req.query.disponibility
            };
            const apartments = await apartmentService.getAll(filters);
            res.status(200).json({ apartments });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Obtenir un appartement par ID
    static async getById(req, res) {
        const { id } = req.params;
        try {
            const apartment = await apartmentService.getById(id);
            res.status(200).json({ apartment });
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Obtenir les appartements d'un propriétaire
    static async getMyApartments(req, res) {
        try {
            const ownerId = req.user.id;
            const apartments = await apartmentService.getByOwner(ownerId);
            res.status(200).json({ apartments });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Mettre à jour un appartement
    static async update(req, res) {
        const { id } = req.params;
        try {
            const ownerId = req.user.id;
            const apartment = await apartmentService.update(id, req.body, ownerId);
            res.status(200).json({ message: "Apartment updated successfully", apartment });
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to update this apartment") {
                return res.status(403).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Supprimer un appartement
    static async delete(req, res) {
        const { id } = req.params;
        try {
            const ownerId = req.user.id;
            await apartmentService.delete(id, ownerId);
            res.status(200).json({ message: "Apartment deleted successfully" });
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to delete this apartment") {
                return res.status(403).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Ajouter une photo
    static async addPhoto(req, res) {
        const { id } = req.params;
        const { photoUrl } = req.body;
        try {
            const ownerId = req.user.id;
            const apartment = await apartmentService.addPhoto(id, photoUrl, ownerId);
            res.status(200).json({ message: "Photo added successfully", apartment });
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to modify this apartment") {
                return res.status(403).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Supprimer une photo
    static async removePhoto(req, res) {
        const { id } = req.params;
        const { photoUrl } = req.body;
        try {
            const ownerId = req.user.id;
            const apartment = await apartmentService.removePhoto(id, photoUrl, ownerId);
            res.status(200).json({ message: "Photo removed successfully", apartment });
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized to modify this apartment") {
                return res.status(403).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

module.exports = ApartmentController;

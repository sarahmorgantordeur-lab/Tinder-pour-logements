import ApartmentService from '../services/apartmentService.js';

class ApartmentController {
    static async create(req, res) {
        try {
            // req.user.id devrait être ajouté par le middleware d'authentification
            const ownerId = req.user.id;
            const apartment = await ApartmentService.create(req.body, ownerId);
            res.status(201).json({ message: "Apartment created successfully", apartment });
        } catch (error) {
            if (error.message === "All required fields must be provided") {
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getAll(req, res) {
        try {
            const filters = {
                propertyType: req.query.propertyType,
                listingType: req.query.listingType,
                region: req.query.region,
                minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
                maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
                minSurface: req.query.minSurface ? Number(req.query.minSurface) : undefined,
                availability: req.query.availability
            };
            const apartments = await ApartmentService.getAll(filters);
            res.status(200).json({ apartments });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getById(req, res) {
        const { id } = req.params;
        try {
            const apartment = await ApartmentService.getById(id);
            res.status(200).json({ apartment });
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getMyApartments(req, res) {
        try {
            const ownerId = req.user.id;
            const apartments = await ApartmentService.getByOwner(ownerId);
            res.status(200).json({ apartments });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        try {
            const ownerId = req.user.id;
            const apartment = await ApartmentService.update(id, req.body, ownerId);
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

    static async delete(req, res) {
        const { id } = req.params;
        try {
            const ownerId = req.user.id;
            await ApartmentService.delete(id, ownerId);
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

    static async uploadPictures(req, res) {
        const { id } = req.params;
        try {
            const ownerId = req.user.id;

            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ message: "No files uploaded" });
            }

            const pictureUrls = req.files.map(file => `/uploads/apartments/${file.filename}`);

            // Ajouter chaque photo
            let apartment;
            for (const url of pictureUrls) {
                apartment = await ApartmentService.addPhoto(id, url, ownerId);
            }

            res.status(200).json({ message: "Pictures uploaded successfully", apartment });
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

    static async removePicture(req, res) {
        const { id } = req.params;
        const { pictureUrl } = req.body;
        try {
            const ownerId = req.user.id;
            const apartment = await ApartmentService.removePhoto(id, pictureUrl, ownerId);
            res.status(200).json({ message: "Picture removed successfully", apartment });
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

export default ApartmentController;

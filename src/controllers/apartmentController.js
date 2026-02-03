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
                city: req.query.city,
                minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
                maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
                minSurface: req.query.minSurface ? Number(req.query.minSurface) : undefined,
                minRooms: req.query.minRooms ? Number(req.query.minRooms) : undefined,
                availability: req.query.availability
            };
            const apartments = await ApartmentService.getAll(filters);
            res.status(200).json({ apartments });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * GET /api/apartments/search/location
     * Recherche par coordonnées GPS
     */
    static async searchByLocation(req, res) {
        try {
            const { latitude, longitude, radius } = req.query;

            if (!latitude || !longitude) {
                return res.status(400).json({ message: "latitude and longitude are required" });
            }

            const lat = parseFloat(latitude);
            const lon = parseFloat(longitude);
            const radiusKm = radius ? parseFloat(radius) : 10;

            if (isNaN(lat) || isNaN(lon)) {
                return res.status(400).json({ message: "Invalid coordinates" });
            }

            const filters = {
                propertyType: req.query.propertyType,
                listingType: req.query.listingType,
                minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
                maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
                minSurface: req.query.minSurface ? Number(req.query.minSurface) : undefined,
                minRooms: req.query.minRooms ? Number(req.query.minRooms) : undefined,
                availability: req.query.availability
            };

            const apartments = await ApartmentService.searchByLocation(lat, lon, radiusKm, filters);
            res.status(200).json({
                apartments,
                searchCenter: { latitude: lat, longitude: lon },
                radiusKm
            });
        } catch (error) {
            if (error.message === "Invalid coordinates") {
                return res.status(400).json({ message: error.message });
            }
            console.error('Search by location error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * GET /api/apartments/search/address
     * Recherche par adresse textuelle
     */
    static async searchByAddress(req, res) {
        try {
            const { address, radius } = req.query;

            if (!address) {
                return res.status(400).json({ message: "address is required" });
            }

            const radiusKm = radius ? parseFloat(radius) : 10;

            const filters = {
                propertyType: req.query.propertyType,
                listingType: req.query.listingType,
                minPrice: req.query.minPrice ? Number(req.query.minPrice) : undefined,
                maxPrice: req.query.maxPrice ? Number(req.query.maxPrice) : undefined,
                minSurface: req.query.minSurface ? Number(req.query.minSurface) : undefined,
                minRooms: req.query.minRooms ? Number(req.query.minRooms) : undefined,
                availability: req.query.availability
            };

            const apartments = await ApartmentService.searchByAddress(address, radiusKm, filters);
            res.status(200).json({
                apartments,
                searchAddress: address,
                radiusKm
            });
        } catch (error) {
            if (error.message === "Could not geocode the provided address") {
                return res.status(400).json({ message: error.message });
            }
            console.error('Search by address error:', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    /**
     * POST /api/apartments/:id/geocode
     * Met à jour les coordonnées d'un appartement
     */
    static async updateCoordinates(req, res) {
        try {
            const { id } = req.params;
            const ownerId = req.user.id;

            const apartment = await ApartmentService.updateCoordinates(id, ownerId);
            res.status(200).json({
                message: "Coordinates updated successfully",
                apartment: {
                    id: apartment.id,
                    latitude: apartment.latitude,
                    longitude: apartment.longitude
                }
            });
        } catch (error) {
            if (error.message === "Apartment not found") {
                return res.status(404).json({ message: error.message });
            }
            if (error.message === "Unauthorized") {
                return res.status(403).json({ message: error.message });
            }
            if (error.message === "Could not geocode the address") {
                return res.status(400).json({ message: error.message });
            }
            console.error('Update coordinates error:', error);
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

import PropertyService from '../services/apartmentService.js';

class PropertyController {
    static async create(req, res) {
        try {
            const property = await PropertyService.create(req.body, req.user.id);
            res.status(201).json({ message: "Property created successfully", property });
        } catch (error) {
            if (error.message === "All required fields must be provided") {
                return res.status(400).json({ message: error.message });
            }
            console.error('[property create]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getAll(req, res) {
        try {
            const { propertyType, city, minPrice, maxPrice, minSurface, minRooms, page = 1, limit = 20 } = req.query;

            const filters = { propertyType, city, minPrice, maxPrice, minSurface, minRooms };
            const skip = (Number(page) - 1) * Number(limit);

            const { total, properties } = await PropertyService.getAll(filters, { skip, take: Number(limit) }, req.user?.id);

            res.status(200).json({
                page: Number(page),
                limit: Number(limit),
                total,
                properties
            });
        } catch (error) {
            console.error('[property getAll]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getById(req, res) {
        try {
            const property = await PropertyService.getById(req.params.id);
            res.status(200).json({ property });
        } catch (error) {
            if (error.message === "Property not found") {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getMyProperties(req, res) {
        try {
            const properties = await PropertyService.getByOwner(req.user.id);
            res.status(200).json({ properties });
        } catch (error) {
            console.error('[property getMyProperties]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async update(req, res) {
        try {
            const property = await PropertyService.update(req.params.id, req.body, req.user.id);
            res.status(200).json({ message: "Property updated successfully", property });
        } catch (error) {
            if (error.message === "Property not found") return res.status(404).json({ message: error.message });
            if (error.message === "Unauthorized to update this property") return res.status(403).json({ message: error.message });
            console.error('[property update]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async delete(req, res) {
        try {
            await PropertyService.delete(req.params.id, req.user.id);
            res.status(200).json({ message: "Property deleted successfully" });
        } catch (error) {
            if (error.message === "Property not found") return res.status(404).json({ message: error.message });
            if (error.message === "Unauthorized to delete this property") return res.status(403).json({ message: error.message });
            console.error('[property delete]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async changeStatus(req, res) {
        try {
            const { status } = req.body;
            if (!status) return res.status(400).json({ message: "status is required" });

            const property = await PropertyService.changeStatus(req.params.id, status, req.user.id);
            res.status(200).json({ message: "Status updated successfully", property });
        } catch (error) {
            if (error.message === "Property not found") return res.status(404).json({ message: error.message });
            if (error.message === "Unauthorized to update this property") return res.status(403).json({ message: error.message });
            if (error.message.startsWith("Transition invalide")) return res.status(400).json({ message: error.message });
            console.error('[property changeStatus]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async uploadPhotos(req, res) {
        try {
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({ message: "No files uploaded" });
            }

            let property;
            for (const file of req.files) {
                const url = `/uploads/properties/${file.filename}`;
                property = await PropertyService.addPhoto(req.params.id, url, req.user.id);
            }

            res.status(200).json({ message: "Photos uploaded successfully", property });
        } catch (error) {
            if (error.message === "Property not found") return res.status(404).json({ message: error.message });
            if (error.message === "Unauthorized to modify this property") return res.status(403).json({ message: error.message });
            console.error('[property uploadPhotos]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async removePhoto(req, res) {
        try {
            const property = await PropertyService.removePhoto(req.params.id, req.body.photoUrl, req.user.id);
            res.status(200).json({ message: "Photo removed successfully", property });
        } catch (error) {
            if (error.message === "Property not found") return res.status(404).json({ message: error.message });
            if (error.message === "Unauthorized to modify this property") return res.status(403).json({ message: error.message });
            console.error('[property removePhoto]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default PropertyController;

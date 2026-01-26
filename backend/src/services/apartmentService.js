const Apartment = require('../models/Apartment.js');

class ApartmentService {

    static async create(apartmentData, ownerId) {
        const {
            title,
            description,
            address,
            region,
            propertyType,
            listingType,
            price,
            surface,
            rooms,
            photos,
            tags,
            disponibility
        } = apartmentData;

        if (!title || !address || !region || !propertyType || !listingType || !price || !surface || !rooms) {
            throw new Error("All required fields must be provided");
        }

        const newApartment = new Apartment({
            title,
            description,
            address,
            region,
            propertyType,
            listingType,
            price,
            surface,
            rooms,
            photos: photos || [],
            tags: tags || [],
            disponibility: disponibility !== undefined ? disponibility : true,
            owner: ownerId
        });

        return newApartment.save();
    }

    static async getAll(filters = {}) {
        const query = {};

        // Filtres disponibles
        if (filters.propertyType) query.propertyType = filters.propertyType;
        if (filters.listingType) query.listingType = filters.listingType;
        if (filters.region) query.region = { $regex: filters.region, $options: 'i' };
        if (filters.minPrice) query.price = { ...query.price, $gte: filters.minPrice };
        if (filters.maxPrice) query.price = { ...query.price, $lte: filters.maxPrice };
        if (filters.minSurface) query.surface = { $gte: filters.minSurface };
        if (filters.disponibility !== undefined) query.disponibility = filters.disponibility;

        return Apartment.find(query).populate('owner', 'username email phone companyName');
    }

    static async getById(id) {
        const apartment = await Apartment.findById(id).populate('owner', 'username email phone companyName role');

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        return apartment;
    }

    static async getByOwner(ownerId) {
        return Apartment.find({ owner: ownerId }).sort({ createdAt: -1 });
    }

    static async update(id, updateData, ownerId) {
        const apartment = await Apartment.findById(id);

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner.toString() !== ownerId.toString()) {
            throw new Error("Unauthorized to update this apartment");
        }

        const updatedApartment = await Apartment.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        return updatedApartment;
    }

    static async delete(id, ownerId) {
        const apartment = await Apartment.findById(id);

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner.toString() !== ownerId.toString()) {
            throw new Error("Unauthorized to delete this apartment");
        }

        return Apartment.findByIdAndDelete(id);
    }

    static async addPhoto(id, photoUrl, ownerId) {
        const apartment = await Apartment.findById(id);

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner.toString() !== ownerId.toString()) {
            throw new Error("Unauthorized to modify this apartment");
        }

        apartment.photos.push(photoUrl);
        return apartment.save();
    }

    static async removePhoto(id, photoUrl, ownerId) {
        const apartment = await Apartment.findById(id);

        if (!apartment) {
            throw new Error("Apartment not found");
        }

        if (apartment.owner.toString() !== ownerId.toString()) {
            throw new Error("Unauthorized to modify this apartment");
        }

        apartment.photos = apartment.photos.filter(photo => photo !== photoUrl);
        return apartment.save();
    }
}

module.exports = ApartmentService;

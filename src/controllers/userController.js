import prisma from '../config/db.js';

class UserController {
    static async getProfile(req, res) {
        try {
            const userId = req.user.id;
            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    email: true,
                    username: true,
                    role: true,
                    phone: true,
                    avatar: true,
                    company_name: true,
                    siret: true,
                    email_notifications: true,
                    profile: true,
                    created_at: true,
                    updated_at: true
                }
            });

            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async updateProfile(req, res) {
        try {
            const userId = req.user.id;
            const updateData = req.body;

            // Interdire la modification du mot de passe et de l'email via cette route
            delete updateData.password;
            delete updateData.email;

            // Convertir les champs camelCase vers snake_case
            const prismaData = {};
            if (updateData.username !== undefined) prismaData.username = updateData.username;
            if (updateData.phone !== undefined) prismaData.phone = updateData.phone;
            if (updateData.avatar !== undefined) prismaData.avatar = updateData.avatar;
            if (updateData.companyName !== undefined) prismaData.company_name = updateData.companyName;
            if (updateData.siret !== undefined) prismaData.siret = updateData.siret;

            const user = await prisma.user.update({
                where: { id: userId },
                data: prismaData,
                select: {
                    id: true,
                    email: true,
                    username: true,
                    role: true,
                    phone: true,
                    avatar: true,
                    company_name: true,
                    siret: true,
                    profile: true,
                    created_at: true,
                    updated_at: true
                }
            });

            res.status(200).json({ message: "Profile updated successfully", user });
        } catch (error) {
            if (error.code === 'P2025') {
                return res.status(404).json({ message: "User not found" });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async uploadAvatar(req, res) {
        try {
            const userId = req.user.id;

            if (!req.file) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            const avatarUrl = `/uploads/avatars/${req.file.filename}`;

            const user = await prisma.user.update({
                where: { id: userId },
                data: { avatar: avatarUrl },
                select: {
                    id: true,
                    email: true,
                    username: true,
                    avatar: true
                }
            });

            res.status(200).json({ message: "Avatar uploaded successfully", user });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async addFavorite(req, res) {
        try {
            const userId = req.user.id;
            const { apartmentId } = req.body;

            const apartment = await prisma.apartment.findUnique({
                where: { id: apartmentId }
            });

            if (!apartment) {
                return res.status(404).json({ message: "Apartment not found" });
            }

            const existingFavorite = await prisma.favorite.findUnique({
                where: {
                    user_id_apartment_id: {
                        user_id: userId,
                        apartment_id: apartmentId
                    }
                }
            });

            if (existingFavorite) {
                return res.status(400).json({ message: "Apartment already in favorites" });
            }

            await prisma.favorite.create({
                data: {
                    user_id: userId,
                    apartment_id: apartmentId
                }
            });

            const favorites = await prisma.favorite.findMany({
                where: { user_id: userId },
                include: { apartment: true }
            });

            res.status(200).json({ message: "Apartment added to favorites", favorites });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async removeFavorite(req, res) {
        try {
            const userId = req.user.id;
            const { apartmentId } = req.params;

            await prisma.favorite.delete({
                where: {
                    user_id_apartment_id: {
                        user_id: userId,
                        apartment_id: apartmentId
                    }
                }
            });

            const favorites = await prisma.favorite.findMany({
                where: { user_id: userId },
                include: { apartment: true }
            });

            res.status(200).json({ message: "Apartment removed from favorites", favorites });
        } catch (error) {
            if (error.code === 'P2025') {
                return res.status(404).json({ message: "Favorite not found" });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getFavorites(req, res) {
        try {
            const userId = req.user.id;
            const favorites = await prisma.favorite.findMany({
                where: { user_id: userId },
                include: { apartment: true }
            });

            res.status(200).json({ favorites: favorites.map(f => f.apartment) });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async addToHistory(req, res) {
        try {
            const userId = req.user.id;
            const { apartmentId } = req.body;

            const apartment = await prisma.apartment.findUnique({
                where: { id: apartmentId }
            });

            if (!apartment) {
                return res.status(404).json({ message: "Apartment not found" });
            }

            const existingView = await prisma.viewedApartment.findFirst({
                where: {
                    user_id: userId,
                    apartment_id: apartmentId
                }
            });

            if (existingView) {
                await prisma.viewedApartment.update({
                    where: { id: existingView.id },
                    data: { viewed_at: new Date() }
                });
            } else {
                await prisma.viewedApartment.create({
                    data: {
                        user_id: userId,
                        apartment_id: apartmentId
                    }
                });
            }

            res.status(200).json({ message: "Apartment added to history" });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getHistory(req, res) {
        try {
            const userId = req.user.id;
            const history = await prisma.viewedApartment.findMany({
                where: { user_id: userId },
                include: { apartment: true },
                orderBy: { viewed_at: 'desc' }
            });

            res.status(200).json({ history });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async updatePreferences(req, res) {
        try {
            const userId = req.user.id;
            const preferences = req.body;

            // Convertir les champs
            const prismaData = {
                property_type: preferences.propertyType || [],
                listing_type: preferences.listingType,
                min_price: preferences.minPrice ? parseFloat(preferences.minPrice) : null,
                max_price: preferences.maxPrice ? parseFloat(preferences.maxPrice) : null,
                min_surface: preferences.minSurface ? parseFloat(preferences.minSurface) : null,
                regions: preferences.regions || [],
                tags: preferences.tags || []
            };

            const updatedPreferences = await prisma.preferences.upsert({
                where: { user_id: userId },
                update: prismaData,
                create: {
                    ...prismaData,
                    user_id: userId
                }
            });

            res.status(200).json({ message: "Preferences updated successfully", preferences: updatedPreferences });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async addDocument(req, res) {
        try {
            const userId = req.user.id;
            const { type } = req.body;

            if (!req.file) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            const documentUrl = `/uploads/documents/${req.file.filename}`;

            await prisma.document.create({
                data: {
                    name: req.file.originalname,
                    url: documentUrl,
                    type: type || 'other',
                    user_id: userId
                }
            });

            const documents = await prisma.document.findMany({
                where: { user_id: userId }
            });

            res.status(200).json({ message: "Document added successfully", documents });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getDocuments(req, res) {
        try {
            const userId = req.user.id;
            const documents = await prisma.document.findMany({
                where: { user_id: userId },
                orderBy: { uploaded_at: 'desc' }
            });

            res.status(200).json({ documents });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async removeDocument(req, res) {
        try {
            const userId = req.user.id;
            const { documentId } = req.params;

            // Vérifier que le document appartient à l'utilisateur
            const document = await prisma.document.findUnique({
                where: { id: documentId }
            });

            if (!document || document.user_id !== userId) {
                return res.status(404).json({ message: "Document not found" });
            }

            await prisma.document.delete({
                where: { id: documentId }
            });

            const documents = await prisma.document.findMany({
                where: { user_id: userId }
            });

            res.status(200).json({ message: "Document removed successfully", documents });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async updateNotificationSettings(req, res) {
        try {
            const userId = req.user.id;
            const { emailNotifications } = req.body;

            if (typeof emailNotifications !== 'boolean') {
                return res.status(400).json({ message: "emailNotifications must be a boolean" });
            }

            const user = await prisma.user.update({
                where: { id: userId },
                data: { email_notifications: emailNotifications },
                select: {
                    id: true,
                    email: true,
                    email_notifications: true
                }
            });

            res.status(200).json({
                message: emailNotifications
                    ? "Email notifications enabled"
                    : "Email notifications disabled",
                user
            });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default UserController;

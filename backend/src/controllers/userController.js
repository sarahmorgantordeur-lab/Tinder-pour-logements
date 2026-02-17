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
                    pictures: true,
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

            // Mise à jour du champ avatar de l'utilisateur
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

            // Auto-création d'une entrée Picture avec type 'profile'
            await prisma.picture.create({
                data: {
                    url: avatarUrl,
                    type: 'profile',
                    user_id: userId
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

    static async addProfilePicture(req, res) {
        try {
            const userId = req.user.id;

            if (!req.file) {
                return res.status(400).json({ message: "No file uploaded" });
            }

            const pictureUrl = `/uploads/avatars/${req.file.filename}`;

            // Créer une entrée Picture avec type 'profile'
            await prisma.picture.create({
                data: {
                    url: pictureUrl,
                    type: 'profile',
                    user_id: userId
                }
            });

            const pictures = await prisma.picture.findMany({
                where: { user_id: userId, type: 'profile' },
                orderBy: { uploaded_at: 'desc' }
            });

            res.status(200).json({ message: "Picture added successfully", pictures });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async getProfilePictures(req, res) {
        try {
            const userId = req.user.id;
            const pictures = await prisma.picture.findMany({
                where: { user_id: userId, type: 'profile' },
                orderBy: { uploaded_at: 'desc' }
            });

            res.status(200).json({ pictures });
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async removeProfilePicture(req, res) {
        try {
            const userId = req.user.id;
            const { pictureId } = req.params;

            // Vérifier que la photo appartient à l'utilisateur
            const picture = await prisma.picture.findUnique({
                where: { id: pictureId }
            });

            if (!picture || picture.user_id !== userId) {
                return res.status(404).json({ message: "Picture not found" });
            }

            await prisma.picture.delete({
                where: { id: pictureId }
            });

            const pictures = await prisma.picture.findMany({
                where: { user_id: userId, type: 'profile' },
                orderBy: { uploaded_at: 'desc' }
            });

            res.status(200).json({ message: "Picture removed successfully", pictures });
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

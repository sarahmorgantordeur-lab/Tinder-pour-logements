import prisma from '../config/db.js';

class UserController {
    static async getProfile(req, res) {
        try {
            const user = await prisma.user.findUnique({
                where: { id: req.user.id },
                select: {
                    id: true,
                    email: true,
                    firstname: true,
                    lastname: true,
                    role: true,
                    phone: true,
                    avatar: true,
                    bio: true,
                    is_active: true,
                    address: true,
                    agency: { include: { address: true } },
                    tenant_profile: true,
                    created_at: true,
                    updated_at: true
                }
            });

            if (!user) return res.status(404).json({ message: "User not found" });
            res.status(200).json({ user });
        } catch (error) {
            console.error('[getProfile]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async updateProfile(req, res) {
        try {
            const { firstname, lastname, phone, bio, avatar } = req.body;

            const prismaData = {};
            if (firstname !== undefined) prismaData.firstname = firstname;
            if (lastname !== undefined) prismaData.lastname = lastname;
            if (phone !== undefined) prismaData.phone = phone;
            if (bio !== undefined) prismaData.bio = bio;
            if (avatar !== undefined) prismaData.avatar = avatar;

            const user = await prisma.user.update({
                where: { id: req.user.id },
                data: prismaData,
                select: {
                    id: true,
                    email: true,
                    firstname: true,
                    lastname: true,
                    role: true,
                    phone: true,
                    avatar: true,
                    bio: true,
                    created_at: true,
                    updated_at: true
                }
            });

            res.status(200).json({ message: "Profile updated successfully", user });
        } catch (error) {
            if (error.code === 'P2025') return res.status(404).json({ message: "User not found" });
            console.error('[updateProfile]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async uploadAvatar(req, res) {
        try {
            if (!req.file) return res.status(400).json({ message: "No file uploaded" });

            const avatarUrl = `/uploads/avatars/${req.file.filename}`;
            const user = await prisma.user.update({
                where: { id: req.user.id },
                data: { avatar: avatarUrl },
                select: { id: true, email: true, firstname: true, lastname: true, avatar: true }
            });

            res.status(200).json({ message: "Avatar uploaded successfully", user });
        } catch (error) {
            console.error('[uploadAvatar]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Profil locataire
    static async updateTenantProfile(req, res) {
        try {
            const { household_size, budget_max, min_surface, max_surface, regions, property_types } = req.body;

            const data = {
                household_size: household_size ? parseInt(household_size) : null,
                budget_max: budget_max ? parseFloat(budget_max) : null,
                min_surface: min_surface ? parseInt(min_surface) : null,
                max_surface: max_surface ? parseInt(max_surface) : null,
                regions: regions || [],
                property_types: property_types || []
            };

            const profile = await prisma.tenantProfile.upsert({
                where: { user_id: req.user.id },
                update: data,
                create: { ...data, user_id: req.user.id }
            });

            res.status(200).json({ message: "Tenant profile updated successfully", profile });
        } catch (error) {
            console.error('[updateTenantProfile]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Profil agence
    static async updateAgency(req, res) {
        try {
            const { nom_agence, numero_tva, numero_bce, site_web, address } = req.body;

            if (!nom_agence) return res.status(400).json({ message: "nom_agence is required" });

            const existingAgency = await prisma.agency.findUnique({ where: { user_id: req.user.id } });

            let agency;
            if (existingAgency) {
                if (address) {
                    await prisma.address.update({ where: { id: existingAgency.address_id }, data: address });
                }
                agency = await prisma.agency.update({
                    where: { user_id: req.user.id },
                    data: { nom_agence, numero_tva, numero_bce, site_web }
                });
            } else {
                if (!address?.street) return res.status(400).json({ message: "Agency address is required" });
                agency = await prisma.agency.create({
                    data: {
                        nom_agence, numero_tva, numero_bce, site_web,
                        address: {
                            create: {
                                number: address.number || '',
                                box: address.box || null,
                                street: address.street,
                                city: address.city,
                                postal_code: address.postal_code,
                                country: address.country || 'Belgique'
                            }
                        },
                        user_id: req.user.id
                    }
                });
            }

            res.status(200).json({ message: "Agency updated successfully", agency });
        } catch (error) {
            console.error('[updateAgency]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default UserController;

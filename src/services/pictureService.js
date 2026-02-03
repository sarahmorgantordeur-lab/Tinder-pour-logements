import prisma from '../config/db.js';

class PictureService {
    /**
     * Ajoute une photo de profil pour un utilisateur
     * @param {string} userId - ID de l'utilisateur
     * @param {string} url - URL de la photo
     * @returns {Promise<Picture>}
     */
    static async addProfilePicture(userId, url) {
        return prisma.picture.create({
            data: {
                url,
                type: 'profile',
                user_id: userId
            }
        });
    }

    /**
     * Ajoute une photo d'appartement
     * @param {string} apartmentId - ID de l'appartement
     * @param {string} url - URL de la photo
     * @returns {Promise<Picture>}
     */
    static async addApartmentPicture(apartmentId, url) {
        return prisma.picture.create({
            data: {
                url,
                type: 'apartment',
                apartment_id: apartmentId
            }
        });
    }

    /**
     * Récupère toutes les photos d'un utilisateur (profil)
     * @param {string} userId - ID de l'utilisateur
     * @returns {Promise<Picture[]>}
     */
    static async getUserPictures(userId) {
        return prisma.picture.findMany({
            where: {
                user_id: userId,
                type: 'profile'
            },
            orderBy: { uploaded_at: 'desc' }
        });
    }

    /**
     * Récupère toutes les photos d'un appartement
     * @param {string} apartmentId - ID de l'appartement
     * @returns {Promise<Picture[]>}
     */
    static async getApartmentPictures(apartmentId) {
        return prisma.picture.findMany({
            where: {
                apartment_id: apartmentId,
                type: 'apartment'
            },
            orderBy: { uploaded_at: 'desc' }
        });
    }

    /**
     * Supprime une photo par son ID
     * @param {string} pictureId - ID de la photo
     * @param {string} userId - ID de l'utilisateur (pour vérification)
     * @returns {Promise<Picture>}
     */
    static async deletePicture(pictureId, userId) {
        const picture = await prisma.picture.findUnique({
            where: { id: pictureId },
            include: {
                apartment: true
            }
        });

        if (!picture) {
            throw new Error("Picture not found");
        }

        // Vérifier les droits : soit c'est sa photo de profil, soit c'est une photo de son appartement
        if (picture.type === 'profile' && picture.user_id !== userId) {
            throw new Error("Unauthorized to delete this picture");
        }

        if (picture.type === 'apartment' && picture.apartment?.owner_id !== userId) {
            throw new Error("Unauthorized to delete this picture");
        }

        return prisma.picture.delete({
            where: { id: pictureId }
        });
    }

    /**
     * Récupère une photo par son ID
     * @param {string} pictureId - ID de la photo
     * @returns {Promise<Picture|null>}
     */
    static async getById(pictureId) {
        return prisma.picture.findUnique({
            where: { id: pictureId }
        });
    }

    /**
     * Supprime toutes les photos d'un utilisateur (nettoyage)
     * @param {string} userId - ID de l'utilisateur
     * @returns {Promise<{count: number}>}
     */
    static async deleteAllUserPictures(userId) {
        return prisma.picture.deleteMany({
            where: { user_id: userId }
        });
    }

    /**
     * Supprime toutes les photos d'un appartement (nettoyage)
     * @param {string} apartmentId - ID de l'appartement
     * @returns {Promise<{count: number}>}
     */
    static async deleteAllApartmentPictures(apartmentId) {
        return prisma.picture.deleteMany({
            where: { apartment_id: apartmentId }
        });
    }
}

export default PictureService;

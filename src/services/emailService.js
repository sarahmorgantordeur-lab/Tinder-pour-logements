import { sendEmail } from '../config/email.js';
import prisma from '../config/db.js';

class EmailService {

    static baseTemplate(content) {
        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FindMyRoof</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; }
        .header h1 { color: #ffffff; margin: 0; font-size: 28px; }
        .content { padding: 30px; }
        .button { display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 25px; margin: 20px 0; }
        .footer { background-color: #f8f9fa; padding: 20px; text-align: center; color: #6c757d; font-size: 12px; }
        .apartment-card { border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px; margin: 15px 0; }
        .apartment-card h3 { margin: 0 0 10px 0; color: #333; }
        .apartment-card .price { color: #667eea; font-weight: bold; font-size: 18px; }
        .apartment-card .details { color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🏠 FindMyRoof</h1>
        </div>
        <div class="content">
            ${content}
        </div>
        <div class="footer">
            <p>© ${new Date().getFullYear()} FindMyRoof - Trouvez votre logement idéal</p>
            <p>Vous recevez cet email car vous êtes inscrit sur FindMyRoof.</p>
        </div>
    </div>
</body>
</html>`;
    }

    // Vérifier si l'utilisateur accepte les notifications email
    static async canSendEmail(userId) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { email_notifications: true, email: true }
        });

        // Par défaut, on autorise les emails si le champ n'existe pas encore
        return user && user.email && (user.email_notifications !== false);
    }

    static async sendWelcomeEmail(user) {
        const content = `
            <h2>Bienvenue sur FindMyRoof, ${user.username} ! 👋</h2>
            <p>Nous sommes ravis de vous accueillir sur notre plateforme.</p>
            <p>Avec FindMyRoof, vous pouvez :</p>
            <ul>
                <li>🔍 Rechercher des logements selon vos critères</li>
                <li>❤️ Swiper et liker vos logements favoris</li>
                <li>💬 Entrer en contact avec les propriétaires après un match</li>
                <li>📄 Gérer vos documents et candidatures</li>
            </ul>
            <p style="text-align: center;">
                <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}" class="button">Commencer à explorer</a>
            </p>
        `;

        return sendEmail({
            to: user.email,
            subject: '🏠 Bienvenue sur FindMyRoof !',
            html: this.baseTemplate(content),
            text: `Bienvenue sur FindMyRoof, ${user.username} ! Commencez à explorer les logements disponibles.`
        });
    }

    static async sendMatchNotification(userId, apartmentId) {
        if (!await this.canSendEmail(userId)) return { success: false, reason: 'Notifications disabled' };

        const [user, apartment] = await Promise.all([
            prisma.user.findUnique({ where: { id: userId } }),
            prisma.apartment.findUnique({
                where: { id: apartmentId },
                include: { owner: { select: { username: true, email: true } } }
            })
        ]);

        if (!user || !apartment) return { success: false, reason: 'User or apartment not found' };

        const content = `
            <h2>🎉 Félicitations, vous avez un match !</h2>
            <p>Bonne nouvelle ${user.username} ! Le propriétaire a accepté votre intérêt pour ce logement :</p>

            <div class="apartment-card">
                <h3>${apartment.title}</h3>
                <p class="price">${apartment.price.toLocaleString('fr-FR')} € ${apartment.listing_type === 'rent' ? '/ mois' : ''}</p>
                <p class="details">
                    📍 ${apartment.address}, ${apartment.region}<br>
                    🏠 ${apartment.surface ? apartment.surface + ' m² - ' : ''}${apartment.rooms ? apartment.rooms + ' pièces' : ''}
                </p>
            </div>

            <p>Vous pouvez maintenant contacter le propriétaire <strong>${apartment.owner.username}</strong> pour organiser une visite.</p>

            <p style="text-align: center;">
                <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/matches" class="button">Voir mes matchs</a>
            </p>
        `;

        return sendEmail({
            to: user.email,
            subject: `🎉 Match ! ${apartment.title}`,
            html: this.baseTemplate(content),
            text: `Félicitations ! Vous avez matché avec le logement "${apartment.title}". Connectez-vous pour contacter le propriétaire.`
        });
    }

    static async sendNewLikeNotification(ownerId, apartmentId, likerId) {
        if (!await this.canSendEmail(ownerId)) return { success: false, reason: 'Notifications disabled' };

        const [owner, apartment, liker] = await Promise.all([
            prisma.user.findUnique({ where: { id: ownerId } }),
            prisma.apartment.findUnique({ where: { id: apartmentId } }),
            prisma.user.findUnique({
                where: { id: likerId },
                include: { profile: true }
            })
        ]);

        if (!owner || !apartment || !liker) return { success: false, reason: 'Data not found' };

        const content = `
            <h2>❤️ Nouveau like sur votre annonce !</h2>
            <p>Bonjour ${owner.username},</p>
            <p><strong>${liker.username}</strong> a montré son intérêt pour votre logement :</p>

            <div class="apartment-card">
                <h3>${apartment.title}</h3>
                <p class="details">📍 ${apartment.address}</p>
            </div>

            ${liker.profile ? `
            <p><strong>À propos du candidat :</strong></p>
            <ul>
                ${liker.profile.job ? `<li>Profession : ${liker.profile.job}</li>` : ''}
                ${liker.profile.income ? `<li>Revenus : ${liker.profile.income.toLocaleString('fr-FR')} €/mois</li>` : ''}
                ${liker.profile.guarantors ? `<li>Garants : ${liker.profile.guarantors}</li>` : ''}
            </ul>
            ` : ''}

            <p style="text-align: center;">
                <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/owner/swipes" class="button">Voir les candidats</a>
            </p>
        `;

        return sendEmail({
            to: owner.email,
            subject: `❤️ Nouveau like sur "${apartment.title}"`,
            html: this.baseTemplate(content),
            text: `${liker.username} a liké votre annonce "${apartment.title}". Connectez-vous pour voir son profil.`
        });
    }

    static async sendNewRequestNotification(ownerId, requestId) {
        if (!await this.canSendEmail(ownerId)) return { success: false, reason: 'Notifications disabled' };

        const request = await prisma.request.findUnique({
            where: { id: requestId },
            include: {
                user: { include: { profile: true } },
                apartment: true
            }
        });

        const owner = await prisma.user.findUnique({ where: { id: ownerId } });

        if (!owner || !request) return { success: false, reason: 'Data not found' };

        const content = `
            <h2>📋 Nouvelle demande de ${request.apartment.listing_type === 'rent' ? 'location' : 'achat'}</h2>
            <p>Bonjour ${owner.username},</p>
            <p><strong>${request.user.username}</strong> souhaite ${request.apartment.listing_type === 'rent' ? 'louer' : 'acheter'} votre bien :</p>

            <div class="apartment-card">
                <h3>${request.apartment.title}</h3>
                <p class="price">${request.apartment.price.toLocaleString('fr-FR')} €</p>
            </div>

            ${request.message ? `<p><strong>Message du candidat :</strong><br><em>"${request.message}"</em></p>` : ''}

            <p style="text-align: center;">
                <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/owner/requests" class="button">Gérer les demandes</a>
            </p>
        `;

        return sendEmail({
            to: owner.email,
            subject: `📋 Nouvelle demande pour "${request.apartment.title}"`,
            html: this.baseTemplate(content),
            text: `${request.user.username} a fait une demande pour "${request.apartment.title}". Connectez-vous pour la consulter.`
        });
    }

    static async sendRequestStatusUpdate(requestId, newStatus) {
        const request = await prisma.request.findUnique({
            where: { id: requestId },
            include: { user: true, apartment: true }
        });

        if (!request || !await this.canSendEmail(request.user_id)) {
            return { success: false, reason: 'Cannot send email' };
        }

        const statusMessages = {
            contacted: { emoji: '📞', title: 'Le propriétaire vous a contacté', message: 'Le propriétaire a consulté votre dossier et souhaite entrer en contact avec vous.' },
            visit_planned: { emoji: '📅', title: 'Visite programmée', message: `Une visite a été programmée${request.visit_date ? ` pour le ${new Date(request.visit_date).toLocaleDateString('fr-FR')}` : ''}.` },
            accepted: { emoji: '✅', title: 'Demande acceptée !', message: 'Félicitations ! Votre demande a été acceptée. Le propriétaire va vous contacter pour finaliser les démarches.' },
            refused: { emoji: '❌', title: 'Demande refusée', message: 'Malheureusement, votre demande n\'a pas été retenue. N\'hésitez pas à continuer vos recherches !' }
        };

        const status = statusMessages[newStatus];
        if (!status) return { success: false, reason: 'Unknown status' };

        const content = `
            <h2>${status.emoji} ${status.title}</h2>
            <p>Bonjour ${request.user.username},</p>
            <p>${status.message}</p>

            <div class="apartment-card">
                <h3>${request.apartment.title}</h3>
                <p class="details">📍 ${request.apartment.address}</p>
            </div>

            <p style="text-align: center;">
                <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/my-requests" class="button">Voir mes demandes</a>
            </p>
        `;

        return sendEmail({
            to: request.user.email,
            subject: `${status.emoji} ${status.title} - ${request.apartment.title}`,
            html: this.baseTemplate(content),
            text: `${status.title} pour "${request.apartment.title}". ${status.message}`
        });
    }

    static async sendPasswordResetEmail(user, resetToken) {
        const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/reset-password?token=${resetToken}`;

        const content = `
            <h2>🔐 Réinitialisation de mot de passe</h2>
            <p>Bonjour ${user.username},</p>
            <p>Vous avez demandé à réinitialiser votre mot de passe. Cliquez sur le bouton ci-dessous pour créer un nouveau mot de passe :</p>

            <p style="text-align: center;">
                <a href="${resetUrl}" class="button">Réinitialiser mon mot de passe</a>
            </p>

            <p><small>Ce lien expirera dans 1 heure. Si vous n'avez pas demandé cette réinitialisation, ignorez cet email.</small></p>
        `;

        return sendEmail({
            to: user.email,
            subject: '🔐 Réinitialisation de votre mot de passe FindMyRoof',
            html: this.baseTemplate(content),
            text: `Réinitialisez votre mot de passe en visitant : ${resetUrl}`
        });
    }
}

export default EmailService;

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const FROM = `"${process.env.EMAIL_FROM_NAME || 'FindMyRoof'}" <${process.env.EMAIL_FROM_ADDRESS || process.env.SMTP_USER}>`;

function formatDate(iso) {
    return new Date(iso).toLocaleString('fr-BE', { dateStyle: 'long', timeStyle: 'short' });
}

/**
 * Envoie un email de confirmation de rendez-vous aux deux participants.
 * @param {{ appointment, owner, tenant }} params
 */
export async function sendAppointmentConfirmation({ appointment, owner, tenant }) {
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER) return; // SMTP non configuré

    const date     = formatDate(appointment.date);
    const property = appointment.property?.title ?? 'Bien inconnu';
    const city     = appointment.property?.address?.city ?? '';
    const location = city ? `${property} (${city})` : property;
    const notes    = appointment.notes ? `\n\nNotes : ${appointment.notes}` : '';

    const subject = `Confirmation de rendez-vous — ${appointment.title}`;

    const bodyOwner = `Bonjour ${owner.firstname},

Votre rendez-vous a été créé avec succès.

📅 ${appointment.title}
📆 Le ${date}
🏠 Bien : ${location}
👤 Locataire : ${tenant.firstname} ${tenant.lastname} (${tenant.email})${notes}

Bonne visite !
— FindMyRoof`;

    const bodyTenant = `Bonjour ${tenant.firstname},

Un rendez-vous vient d'être planifié pour vous.

📅 ${appointment.title}
📆 Le ${date}
🏠 Bien : ${location}
👤 Organisé par : ${owner.firstname} ${owner.lastname} (${owner.email})${notes}

À bientôt !
— FindMyRoof`;

    await Promise.allSettled([
        transporter.sendMail({ from: FROM, to: owner.email,  subject, text: bodyOwner }),
        transporter.sendMail({ from: FROM, to: tenant.email, subject, text: bodyTenant }),
    ]);
}

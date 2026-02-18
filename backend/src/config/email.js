import nodemailer from 'nodemailer';

const createTransporter = () => {
    // Vérifier si les variables d'environnement sont définies
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn('⚠️  Email configuration missing. Email notifications will be disabled.');
        return null;
    }

    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true', // true pour port 465, false pour autres ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
};

let transporter = null;

// Initialiser le transporteur de manière lazy
const getTransporter = () => {
    if (transporter === null) {
        transporter = createTransporter();
    }
    return transporter;
};

// Vérifier la connexion SMTP
export const verifyEmailConnection = async () => {
    const t = getTransporter();
    if (!t) return false;

    try {
        await t.verify();
        console.log('✅ Email service connected');
        return true;
    } catch (error) {
        console.error('❌ Email service connection failed:', error.message);
        return false;
    }
};

export const sendEmail = async ({ to, subject, html, text }) => {
    const t = getTransporter();

    if (!t) {
        console.warn('Email not sent (service disabled):', subject);
        return { success: false, reason: 'Email service disabled' };
    }

    try {
        const info = await t.sendMail({
            from: `"${process.env.EMAIL_FROM_NAME || 'FindMyRoof'}" <${process.env.EMAIL_FROM_ADDRESS || process.env.SMTP_USER}>`,
            to,
            subject,
            text,
            html
        });

        console.log('📧 Email sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Failed to send email:', error.message);
        return { success: false, error: error.message };
    }
};

export default { sendEmail, verifyEmailConnection, getTransporter };

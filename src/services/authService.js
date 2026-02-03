import prisma from '../config/db.js';
import { generateToken } from '../config/jwt.js';
import bcrypt from 'bcrypt';
import EmailService from './emailService.js';

const SALT_ROUNDS = 12;

class AuthService {

    static async register(email, password, userName, role = 'user') {
        if (!email || !password || !userName) {
            throw new Error("All fields are required");
        }

        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            throw new Error("This email is already taken");
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                username: userName,
                role
            }
        });

        // Envoyer l'email de bienvenue (non bloquant)
        EmailService.sendWelcomeEmail(newUser).catch(err => {
            console.error('Failed to send welcome email:', err.message);
        });

        const { password: _, ...userWithoutPassword } = newUser;
        return userWithoutPassword;
    }

    static async login(email, password) {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            throw new Error("Invalid email or password");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }

        const token = generateToken(user);

        return { user: { id: user.id, email: user.email, userName: user.username, role: user.role }, token };
    }
}

export default AuthService;

import prisma from '../config/db.js';
import { generateToken } from '../config/jwt.js';

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

        const newUser = await prisma.user.create({
            data: {
                email,
                password,
                username: userName,
                role
            }
        });

        return newUser;
    }

    static async login(email, password) {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            throw new Error("Invalid email or password");
        }

        const isPasswordValid = (password === user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }

        const token = generateToken(user);

        return { user: { id: user.id, email: user.email, userName: user.username }, token };
    }
}

export default AuthService;

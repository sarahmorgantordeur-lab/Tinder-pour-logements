import prisma from '../config/db.js';
import { generateToken } from '../config/jwt.js';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

class AuthService {

    static async register(email, password, firstname, lastname, phone, role, address) {
        if (!email || !password || !firstname || !lastname) {
            throw new Error("All fields are required");
        }

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) throw new Error("This email is already taken");

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                firstname,
                lastname,
                phone,
                role,
                address: {
                    create: {
                        number: address?.number || '',
                        box: address?.box || null,
                        street: address?.street || '',
                        city: address?.city || '',
                        postal_code: address?.postal_code || '',
                        country: address?.country || 'Belgique'
                    }
                }
            }
        });

        const { password: _, ...userWithoutPassword } = newUser;
        const token = generateToken(newUser);
        return { user: userWithoutPassword, token };
    }

    static async login(email, password) {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) throw new Error("Invalid email or password");
        if (!user.is_active) throw new Error("Compte désactivé");

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error("Invalid email or password");

        const token = generateToken(user);

        return {
            user: {
                id: user.id,
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                phone: user.phone,
                role: user.role,
                tenant_profile: user.tenant_profile,
                agency: user.agency
            },
            token
        };
    }
}

export default AuthService;

const User = require('../models/User.js');
const { generateToken } = require('../config/jwt.js');

class AuthService {

    static async register(email, password, userName, role = 'utilisateur') {
        if (!email || !password || !userName) {
            throw new Error("All fields are required");
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("This email is already taken");
        }

        const newUser = new User({
            email,
            password,
            username: userName,
            role
        });
        return newUser.save();
    }

    static async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("Invalid email or password");
        }

        const isPasswordValid = (password === user.password);
        if (!isPasswordValid) {
            throw new Error("Invalid email or password");
        }

        const token = generateToken(user);

        return { user: { id: user._id, email: user.email, userName: user.username }, token };
    }
}

module.exports = AuthService;
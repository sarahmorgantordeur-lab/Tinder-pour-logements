import AuthService from '../services/authService.js';

class AuthController {
    static async login(req, res) {
        const { email, password } = req.body;
        try {
            const { user, token } = await AuthService.login(email, password);
            res.status(200).json({ message: "Login successful", user, token });
        } catch (error) {
            if (error.message === "Invalid email or password") {
                return res.status(401).json({ message: error.message });
            }
            if (error.message === "Compte désactivé") {
                return res.status(403).json({ message: error.message });
            }
            console.error('[login error]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    static async register(req, res) {
        const { email, password, firstname, lastname, phone, role, address } = req.body;
        try {
            const { user, token } = await AuthService.register(
                email,
                password,
                firstname,
                lastname,
                phone,
                role,
                address
            );
            res.status(200).json({ message: "User registered successfully", user, token });
        } catch (error) {
            if (error.message === "This email is already taken") {
                return res.status(409).json({ message: error.message });
            }
            if (error.message === "All fields are required") {
                return res.status(400).json({ message: error.message });
            }
            console.error('[register error]', error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default AuthController;

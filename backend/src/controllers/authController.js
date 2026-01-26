const authService = require('../services/authService.js')

class AuthController {
static async login(req, res) {
const { email, password } = req.body;
        try {
            const { user, token } = await authService.login(email, password);
            res.status(200).json({ message: "Login successful", user, token });
        }
        catch(error) {
            if (error.message === "Invalid email or password") {
                return res.status(401).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
}
static async register(req, res) {
const { email, password, userName } = req.body;
        try {
            const user = await authService.register(
                email,
                password,
                userName
            );

            res.status(200).json({ message: "User register sucessfully", user });
        }
        catch (error) {
            if (error.message === "This email is already taken") {
                return res.status(409).json({ message: error.message });
            }

            if (error.message === "All fields are required") {
                return res.status(400).json({ message: error.message });
            }

            res.status(500).json({ message: "Internal server error" });
        }
}

}

module.exports = AuthController
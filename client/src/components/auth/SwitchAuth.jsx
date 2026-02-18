import { useAuth } from "../../contexts/AuthContext";

export default function SwitchAuth({ isLogin, setIsLogin, isRegister, setIsRegister }) {
    

    const toggleAuth = () => {
        setIsLogin(!isLogin);
        setIsRegister(!isRegister);
    };

    return (
        <div className="mt-4 text-center">
            <button
                onClick={toggleAuth}
                className="text-sm text-zinc-600 hover:text-zinc-900"
                name="login-btn"
            >
                {isLogin ? "Sign in" : "Déjà inscrit ? Se connecter"}
            </button>

            <button
                onClick={toggleAuth}
                className="text-sm text-zinc-600 hover:text-zinc-900"
                name="register-btn"
            >
                {isRegister ? "Sign up" : "Déjà inscrit ? Se connecter"}
            </button>
        </div>
    );
}
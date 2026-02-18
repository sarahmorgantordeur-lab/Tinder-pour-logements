import { useAuth } from "../../contexts/AuthContext";

export default function SwitchAuth({ isLogin, setIsLogin, isRegister, setIsRegister }) {
    const { logout } = useAuth();

    const toggleAuth = () => {
        if (isLogin) {
            logout();
        }
        setIsLogin(!isLogin);

        if (isRegister) {
            logout();
        }
        setIsRegister(!isRegister);
    };

    return (
        <div className="mt-4 text-center">
            <button
                onClick={toggleAuth}
                className="text-sm text-zinc-600 hover:text-zinc-900"
            >
                {isLogin ? "Sign in" : "Déjà inscrit ? Se connecter"}
            </button>

            <button
                onClick={toggleAuth}
                className="text-sm text-zinc-600 hover:text-zinc-900"
            >
                {isRegister ? "Sign up" : "Déjà inscrit ? Se connecter"}
            </button>
        </div>
    );
}
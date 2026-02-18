import { useAuth } from "../../contexts/AuthContext";

export default function SwitchAuth({ isLogin, setIsLogin, isRegister, setIsRegister }) {
    
    const toggleAuth = () => {
        setIsLogin(!isLogin);
        setIsRegister(!isRegister);
    };

    return (
        <div className="switch-auth-container">
            <div className="switch-auth-content">
                <button
                    data-cy="login-btn"
                    onClick={toggleAuth}
                    className={isLogin ?  "" : "Inactive-button" }
                >
                    Sign in
                </button>

                <button
                    data-cy="register-btn"
                    onClick={toggleAuth}
                    className={isRegister ? "" : "Inactive-button"}
                >
                    Sign up
                </button>
            </div>
        </div>
    );
}
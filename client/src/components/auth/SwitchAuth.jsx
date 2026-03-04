import Button from "../ui/Button";

export default function SwitchAuth({ isLogin, setIsLogin, isRegister, setIsRegister }) {
    
    const toggleAuth = () => {
        setIsLogin(!isLogin);
        setIsRegister(!isRegister);
    };

    return (
        <div className="switch-auth-container">
            <div className="switch-auth-content">
                <Button
                    data-cy="login-btn"
                    onClick={toggleAuth}
                    className={isLogin ?  "" : "Inactive-button" }
                >
                    Sign in
                </Button>

                <Button
                    data-cy="register-btn"
                    onClick={toggleAuth}
                    className={isRegister ? "" : "Inactive-button"}
                >
                    Sign up
                </Button>
            </div>
        </div>
    );
}
import SwitchAuth from "./SwitchAuth";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";



export default function AuthLayoutForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [isRegister, setIsRegister] = useState(false);

    const toggleAuthMode = () => {
        setIsLogin((prev) => !prev);
        setIsRegister((prev) => !prev);
    };

    return (
        <div className="auth-layout-form">
            <SwitchAuth isLogin={isLogin} isRegister={isRegister} setIsLogin={setIsLogin} setIsRegister={setIsRegister} toggleAuthMode={toggleAuthMode} />
            {isLogin ? <Login /> : <Register />}
        </div>
    );
}
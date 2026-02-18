import SwitchAuth from "./SwitchAuth";
import Login from "./Login";
import Register from "./Register";



export default function AuthLayoutForm() {
    return (
        <div className="auth-layout-form">
            <SwitchAuth />
            <Login/>
            <Register/>
        </div>
    );
}
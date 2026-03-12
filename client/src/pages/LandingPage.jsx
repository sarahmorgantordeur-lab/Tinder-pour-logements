import AuthLayoutForm from "../components/auth/AuthLayoutForm";
import Button from "../components/ui/Button";
import { useState } from "react";

export default function Landing() {
    const [isLogin, setIsLogin] = useState(true);
    const [isRegister, setIsRegister] = useState(false);
    return (
    <main className="landing-page">
        <div className="landing-intro">
            <div className="intro-container">
                <h1 className="landing-title">Find My Roof</h1>
                <p className="landing-description">
                Find My Roof is an application that help people to find the perfect lodging.<br />
                It’s easy to use with it’s principle of matching with the good landlord and lodging.<br />

                If you’re interested to join the grand inovation join us either you want to find or to rent out a lodging.
                </p>
                <Button className="landing-button" onClick={() => { setIsLogin(false); setIsRegister(true); }}>Join the movement</Button>
            </div>
        </div>
        <div className="landing-forms">
            <AuthLayoutForm isLogin={isLogin} isRegister={isRegister} setIsLogin={setIsLogin} setIsRegister={setIsRegister} />
        </div>
    </main>
    );
}

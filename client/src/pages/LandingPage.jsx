import AuthLayoutForm from "../components/auth/AuthLayoutForm";
import Button from "../components/ui/Button";
import { useState } from "react";

export default function Landing() {
    const [isLogin, setIsLogin] = useState(true);
    const [isRegister, setIsRegister] = useState(false);
    const [step, setStep] = useState('form');
    return (
    <main className={`landing-page${step === 'agency-profile' ? ' landing-page--column' : ''}`}>
        <div className={`landing-intro${step === 'agency-profile' ? ' landing-intro--narrow' : ''}`}>
            <div className="intro-container">
                <h1 className="landing-title">{(step === 'form') ? 'Find My Roof' : 'Complétez votre profil agence'}</h1>
                <p className="landing-description">
                    {(step === 'form') ?
                <>
                Find My Roof is an application that help people to find the perfect lodging.<br />
                {"It’s easy to use with it’s principle of matching with the good landlord and lodging."}<br />
                {"If you’re interested to join the grand inovation join us either you want to find or to rent out a lodging."}
                </>
                : "Créez votre agence ou passez cette étape pour la compléter plus tard."}
                </p>
                {(step === 'form') &&
                <Button className="landing-button" onClick={() => { setIsLogin(false); setIsRegister(true); }}>Join the movement</Button>
                }
                </div>
        </div>
        <div className={`landing-forms${step === 'agency-profile' ? ' landing-forms--wide' : ''}`}>
            <AuthLayoutForm step={step} setStep={setStep} isLogin={isLogin} isRegister={isRegister} setIsLogin={setIsLogin} setIsRegister={setIsRegister} />
        </div>
    </main>
    );
}

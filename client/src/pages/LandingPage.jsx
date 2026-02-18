import AuthLayoutForm from "../components/auth/AuthLayoutForm";

export default function Landing() {
    return (
    <div className="landing-page">
        <div className="landing-intro">
            <div className="intro-container">
                <h1 className="landing-title">Find My Roof</h1>
                <p className="landing-description">
                Tinder pour logements : Trouvez votre prochain chez-vous en un swipe
                !
                </p>
                <button className="landing-button">Get Started</button>
            </div>
        </div>
        <div className="landing-forms">
            <AuthLayoutForm />
        </div>
    </div>
    );
}

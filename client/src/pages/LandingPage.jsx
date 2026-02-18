import AuthLayoutForm from "../components/auth/AuthLayoutForm";

export default function Landing() {
    return (
    <div className="landing-page">
        <div className="landing-intro">
            <div className="intro-container">
                <h1 className="landing-title">Find My Roof</h1>
                <p className="landing-description">
                Find My Roof is an application that help people to find the perfect lodging.<br />
                It’s easy to use with it’s principle of matching with the good landlord and lodging.<br />

                If you’re interested to join the grand inovation join us either you want to find or to rent out a lodging.
                </p>
                <button className="landing-button">Join the movement</button>
            </div>
        </div>
        <div className="landing-forms">
            <AuthLayoutForm />
            <p>pute</p>
        </div>
    </div>
    );
}

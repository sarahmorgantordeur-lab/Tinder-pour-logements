import FMRIcon from "../../assets/icons/FMR.svg?react";
import NavLink from "../../components/navigation/NavLink";

export default function Footer() {
    return (
        <footer className="app-footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <FMRIcon />
                    </div>
                    <p className="footer-tagline">Trouvez le logement qui vous correspond.</p>
                </div>

                <nav className="footer-nav">
                    <div className="footer-nav-group">
                        <h4>Navigation</h4>
                        <ul>
                            <li><NavLink to="/home">Accueil</NavLink></li>
                            <li><NavLink to="/profile">Profil</NavLink></li>
                            <li><NavLink to="/discussions">Discussions</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="footer-bottom">
                <p className="footer-copy">© {new Date().getFullYear()} FMR — Tous droits réservés.</p>
            </div>
        </footer>
    );
}

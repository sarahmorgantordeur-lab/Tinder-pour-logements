import FMRIcon from "../assets/icons/FMR.svg?react";

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
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/about">À propos</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-nav-group">
                        <h4>Compte</h4>
                        <ul>
                            <li><a href="/login">Connexion</a></li>
                            <li><a href="/register">Inscription</a></li>
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

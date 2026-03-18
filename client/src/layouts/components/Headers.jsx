import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../components/ui/Button";
import NavLink from "../../components/navigation/NavLink";
import { useAuth } from "../../hooks/useAuth";
import FMRIcon from "../../assets/icons/FMR.svg?react";

export default function Headers() {
    const { user, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <header className="app-header">
            <div className="logo">
                <Link to="/home">
                    <FMRIcon />
                </Link>
            </div>
            <button
                className="burger-button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`header-right ${menuOpen ? "open" : ""}`}>
                <nav className="navigation">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/discussions">Discussions</NavLink>
                    {user?.role === "user" && (
                        <NavLink to="/agenda">Agenda</NavLink>
                    )}
                </nav>
                <div>
                    <Button onClick={logout}>Logout</Button>
                </div>
            </div>
        </header>
    );
}

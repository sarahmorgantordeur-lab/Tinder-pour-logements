import Button from "../../components/ui/Button";
import  NavLink  from "../../components/navigation/NavLink";
import { useAuth } from "../../hooks/useAuth";
import FMRIcon from "../../assets/icons/FMR.svg?react";
import { Link } from "react-router-dom";

export default function Headers() {
    const { user, logout } = useAuth();
    return (
        <header className="app-header">
            <div className="logo">
                <Link to="/home">
                    <FMRIcon />
                </Link>
            </div>
            <div className="header-right">
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
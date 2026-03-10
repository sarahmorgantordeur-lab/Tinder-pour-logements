import Button from "../../components/ui/Button";
import  NavLink  from "../../components/navigation/NavLink";
import { useAuth } from "../../hooks/useAuth";
import FMRIcon from "../../assets/icons/FMR.svg?react";

export default function Headers() {
    const { user, logout } = useAuth();
    return (
        <header className="app-header">
            <div className="logo">
                <FMRIcon />
            </div>
            <div className="header-right">
            <nav className="navigation">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                {user?.role === "user" && (
                    <NavLink to="/discussions">Discussions</NavLink>
                )}
            </nav>
            <div>
                <Button onClick={logout}>Logout</Button>
            </div>
            </div>
        </header>
    );
}
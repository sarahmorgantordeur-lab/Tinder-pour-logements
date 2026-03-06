import Button from "../../components/ui/Button";
import  NavLink  from "../../components/navigation/NavLink";
import { useAuth } from "../../hooks/useAuth";
import FMRIcon from "../../assets/icons/FMR.svg?react";

export default function Headers() {
    const { logout, user } = useAuth();
    return (
        <header className="app-header">
            <div className="logo">
                <FMRIcon />
            </div>
            <div className="header-right">
            <nav className="navigation">
                <NavLink>Home</NavLink>
                <NavLink>Profile</NavLink>
                {user?.role === 'user' && <NavLink>Dashboard</NavLink>}
            </nav>
            <div>
                <Button onClick={logout}>Logout</Button>
            </div>
            </div>
        </header>
    );
}
import Button from "../components/ui/Button";
import  NavLink  from "../components/navigation/NavLink";
import { useAuth } from "../contexts/useAuth";

export default function Headers() {
    const { logout } = useAuth();
    return (
        <header className="app-header">
            <div className="logo">Find My Roof</div>
            <nav className="navigation">
                <NavLink>Home</NavLink>
                <NavLink>About</NavLink>
                <NavLink>Contact</NavLink>
            </nav>
            <div className="logout-container">
                <Button className="logout-btn" onClick={logout}>Logout</Button>
            </div>
        </header>
    );
}
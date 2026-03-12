import { Link } from "react-router-dom";

export default function NavLink({ children, to, className }) {
    const isActive = window.location.pathname === to;
    const activeClass = isActive ? "active" : "";
    className = `${className || ""} ${activeClass}`.trim();

    return (
        <Link to={to} className={`nav-link ${className}`}>
            {children}
        </Link>
    );
}
import { Link } from "react-router-dom";

export default function NavLink({ children, to, className }) {

    return (
        <Link to={to} className={`nav-link ${className}`}>
            {children}
        </Link>
    );
}
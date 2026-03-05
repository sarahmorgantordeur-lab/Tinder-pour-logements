export default function NavLink({ children, onClick, className }) {

    return (
        <a onClick={onClick} className={`nav-link ${className}`}>
            {children}
        </a>
    );
}
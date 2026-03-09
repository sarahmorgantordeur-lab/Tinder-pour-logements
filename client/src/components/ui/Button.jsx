

export default function Button({ children, onClick, className, ...rest }) {
    return (
        <button onClick={onClick} className={`btn ${className}`} {...rest}>
            {children}
        </button>
    );
}
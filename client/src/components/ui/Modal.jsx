import { useEffect } from "react";

export default function Modal({ children, onClose, className }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className={`modal-content ${className ?? ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}

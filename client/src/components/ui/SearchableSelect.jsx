import { useState, useRef, useEffect } from "react";

export default function SearchableSelect({ options = [], value, onChange, placeholder = "Rechercher...", required }) {
    const [query, setQuery]       = useState("");
    const [open, setOpen]         = useState(false);
    const containerRef            = useRef(null);

    const displayValue = value?.label ?? "";

    const filtered = options.filter((opt) =>
        opt.label.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (opt) => {
        onChange(opt);
        setQuery("");
        setOpen(false);
    };

    const handleInputChange = (e) => {
        setQuery(e.target.value);
        if (!open) setOpen(true);
        if (e.target.value === "") onChange(null);
    };

    const handleFocus = () => setOpen(true);

    // Fermer si clic hors du composant
    useEffect(() => {
        const onClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false);
                setQuery("");
            }
        };
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    return (
        <div className="searchable-select" ref={containerRef}>
            <input
                className="searchable-select__input"
                type="text"
                placeholder={value ? displayValue : placeholder}
                value={open ? query : displayValue}
                onChange={handleInputChange}
                onFocus={handleFocus}
                required={required && !value}
                autoComplete="off"
            />
            {open && (
                <ul className="searchable-select__dropdown">
                    {filtered.length > 0 ? (
                        filtered.map((opt) => (
                            <li
                                key={opt.value}
                                className={`searchable-select__option${value?.value === opt.value ? " searchable-select__option--selected" : ""}`}
                                onMouseDown={() => handleSelect(opt)}
                            >
                                {opt.label}
                            </li>
                        ))
                    ) : (
                        <li className="searchable-select__empty">Aucun résultat</li>
                    )}
                </ul>
            )}
        </div>
    );
}

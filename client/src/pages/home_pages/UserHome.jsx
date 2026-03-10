import { useState } from "react";
import { useHome } from "../../hooks/useHome";

export default function UserHome() {
    const { apartments, loading, error, cityFilter, setCityFilter, fetchApartments, swipe, remaining } = useHome();
    const [inputValue, setInputValue] = useState(cityFilter);

    const handleSearch = (e) => {
        e.preventDefault();
        const trimmed = inputValue.trim();
        setCityFilter(trimmed);
        fetchApartments(trimmed);
    };

    const handleClear = () => {
        setInputValue("");
        setCityFilter("");
        fetchApartments("");
    };

    return (
        <div className="user-home">
            {/* Filtre ville */}
            <form className="user-home-filter" onSubmit={handleSearch}>
                <div className="user-home-filter-row">
                    <input
                        className="user-home-filter-input"
                        type="text"
                        placeholder="Filtrer par ville..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="user-home-filter-btn" type="submit">
                        Rechercher
                    </button>
                    {cityFilter && (
                        <button
                            className="user-home-filter-clear"
                            type="button"
                            onClick={handleClear}
                        >
                            ✕
                        </button>
                    )}
                </div>
                {cityFilter && (
                    <p className="user-home-filter-active">
                        Résultats pour <strong>{cityFilter}</strong> — {apartments.length} bien{apartments.length !== 1 ? "s" : ""}
                    </p>
                )}
            </form>

            {/* Contenu */}
            {loading && <p className="user-home-loading">Chargement des biens...</p>}
            {error && <p className="user-home-error">{error}</p>}

            {!loading && !error && apartments.length === 0 && (
                <p className="user-home-empty">
                    Aucun bien trouvé{cityFilter ? ` à ${cityFilter}` : ""}.
                </p>
            )}

            {!loading && apartments.length > 0 && (
                <div className="user-home-grid">
                    {apartments.map((property) => (
                        <div key={property.id} className="user-home-card">
                            {property.photos?.[0]?.url ? (
                                <img
                                    className="user-home-card-photo"
                                    src={property.photos[0].url}
                                    alt={property.title}
                                />
                            ) : (
                                <div className="user-home-card-photo user-home-card-photo--empty" />
                            )}
                            <div className="user-home-card-body">
                                <h3 className="user-home-card-title">{property.title}</h3>
                                <p className="user-home-card-location">
                                    {property.address?.city}
                                    {property.address?.postal_code && ` (${property.address.postal_code})`}
                                </p>
                                <p className="user-home-card-price">{property.price} €/mois</p>
                                <p className="user-home-card-details">
                                    {property.rooms} pièce{property.rooms !== 1 ? "s" : ""} · {property.surface} m²
                                    {property.parking ? " · Parking" : ""}
                                </p>
                            </div>
                            <div className="user-home-card-actions">
                                <button
                                    className="user-home-card-dislike"
                                    type="button"
                                    onClick={() => swipe(false)}
                                    aria-label="Passer"
                                >
                                    ✕
                                </button>
                                <button
                                    className="user-home-card-like"
                                    type="button"
                                    onClick={() => swipe(true)}
                                    aria-label="J'aime"
                                >
                                    ♥
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

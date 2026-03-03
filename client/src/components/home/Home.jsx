import { useHome } from "../../hooks/useHome";
import { useAuth } from "../../hooks/useAuth";

export default function Home() {
    const { currentApartment, remaining, loading, error, swipe, fetchApartments } = useHome();
    const { user, logout } = useAuth();

    if (loading) {
        return (
            <div className="home-loading">
                <p>Chargement des logements...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="home-error">
                <p>{error}</p>
                <button onClick={fetchApartments}>Réessayer</button>
            </div>
        );
    }

    if (!currentApartment) {
        return (
            <div className="home-empty">
                <p>Plus aucun logement disponible pour le moment.</p>
                <button onClick={fetchApartments}>Recharger</button>
            </div>
        );
    }

    const { title, address, city, price, surface, rooms, pictures, description } = currentApartment;
    const cover = pictures?.[0]?.url ?? null;

    return (
        <div className="home">
            <header className="home-header">
                <span className="home-username">Bonjour, {user?.username}</span>
                <button className="home-logout" onClick={logout}>Déconnexion</button>
            </header>

            <div className="home-card">
                {cover ? (
                    <img className="home-card-image" src={cover} alt={title} />
                ) : (
                    <div className="home-card-image home-card-image--placeholder" />
                )}

                <div className="home-card-body">
                    <h2 className="home-card-title">{title}</h2>
                    <p className="home-card-location">{city ?? address}</p>

                    <div className="home-card-details">
                        <span>{price} €/mois</span>
                        <span>{surface} m²</span>
                        <span>{rooms} pièce{rooms > 1 ? "s" : ""}</span>
                    </div>

                    {description && (
                        <p className="home-card-description">{description}</p>
                    )}
                </div>
            </div>

            <div className="home-actions">
                <button
                    className="home-action home-action--dislike"
                    onClick={() => swipe("dislike")}
                    aria-label="Passer"
                >
                    ✕
                </button>
                <span className="home-remaining">{remaining} restant{remaining > 1 ? "s" : ""}</span>
                <button
                    className="home-action home-action--like"
                    onClick={() => swipe("like")}
                    aria-label="J'aime"
                >
                    ♥
                </button>
            </div>
        </div>
    );
}

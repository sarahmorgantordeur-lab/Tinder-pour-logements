import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import AppartementOwnerCard from "../../components/cards/AppartementOwnerCard";

export default function AgencyHome() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        api.get("/properties/owner/my-properties")
            .then(({ data }) => setProperties(data.properties ?? data))
            .catch(() => setError("Impossible de charger vos annonces."))
            .finally(() => setLoading(false));
    }, []);

    const handleDelete = async (id) => {
        if (!confirm("Supprimer cette annonce ?")) return;
        try {
            await api.delete(`/properties/${id}`);
            setProperties((prev) => prev.filter((p) => p.id !== id));
        } catch {
            alert("Erreur lors de la suppression.");
        }
    };

    return (
        <div className="agency-home">
            <header className="agency-home-header">
                <div>
                    <h1 className="agency-home-title">Espace agence</h1>
                    <p className="agency-home-subtitle">
                        {properties.length} annonce{properties.length !== 1 ? "s" : ""} en ligne
                    </p>
                </div>
                <button
                    className="agency-home-create-btn"
                    onClick={() => navigate("/announcements/create")}
                >
                    + Nouvelle annonce
                </button>
            </header>

            {loading && <p className="agency-home-loading">Chargement des annonces...</p>}
            {error && <p className="agency-home-error">{error}</p>}

            {!loading && !error && properties.length === 0 && (
                <p className="agency-home-empty">
                    Vous n&apos;avez pas encore d&apos;annonces. Créez votre première !
                </p>
            )}

            {!loading && properties.length > 0 && (
                <div className="agency-home-grid">
                    {properties.map((property) => (
                        <div key={property.id} className="agency-home-card-wrapper">
                            <AppartementOwnerCard
                                appartement={{
                                    ...property,
                                    city: property.address?.city,
                                    postal_code: property.address?.postal_code,
                                    image: property.photos?.[0]?.url ?? null,
                                }}
                            />
                            <div className="agency-home-card-actions">
                                <button
                                    className="agency-home-edit-btn"
                                    onClick={() => navigate(`/announcements/${property.id}/edit`)}
                                >
                                    Modifier
                                </button>
                                <button
                                    className="agency-home-delete-btn"
                                    onClick={() => handleDelete(property.id)}
                                >
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

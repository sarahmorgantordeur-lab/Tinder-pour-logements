import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppartementOwnerCard from "../../components/cards/AppartementOwnerCard";
import ApartmentModal from "../../components/cards/ApartmentModal";
import Button from "../../components/ui/Button";
import { useHome } from "../../hooks/useHome";

export default function OwnerHome() {
    const { loading, error } = useHome();
    const { appartmentById, fetchMyProperties } = useHome();
    const [selectedApartmentId, setSelectedApartmentId] = useState(null);

    useEffect(() => {
        fetchMyProperties();
    }, [fetchMyProperties]);

    const count = appartmentById?.length;

    const selectedApartment = selectedApartmentId && appartmentById
        ? (() => {
            const a = appartmentById.find(p => p.id === selectedApartmentId);
            if (!a) return null;
            return {
                ...a,
                city: a.address?.city,
                postal_code: a.address?.postal_code,
                image: a.photos?.[0]?.url
                    ? `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${a.photos[0].url}`
                    : null,
            };
        })()
        : null;

    return (
        <div className="agency-home">

            {loading && (
                <p className="agency-home-loading">
                    Chargement des annonces...
                </p>
            )}

            {error && (
                <p className="agency-home-error">
                    {error}
                </p>
            )}

            {!loading && !error && count === 0 && (
                <div className="agency-home-empty-state">
                <p className="agency-home-empty">
                    Vous n&apos;avez pas encore d&apos;annonces.
                    Créez votre première !
                </p>

                <Link to="/properties/new">
                    <Button className="agency-home-create-button">
                        Créer une annonce
                    </Button>
                </Link>
                </div>
            )}

            {!loading && !error && count > 0 && (
                <div className="agency-home-content">
                    <div className="agency-home-header">
                        <Link to="/properties/new">
                            <Button>
                                Créer une annonce
                            </Button>
                        </Link>
                        <Link to="/agenda">
                            <Button>
                                Mon agenda
                            </Button>
                        </Link>
                    </div>

                    <div className="agency-home-grid">
                        {appartmentById.map((apartment) => {
                            const formattedApartment = {
                                ...apartment,
                                city: apartment.address?.city,
                                postal_code: apartment.address?.postal_code,
                                image: apartment.photos?.[0]?.url
                                    ? `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${apartment.photos[0].url}`
                                    : null,
                            };

                            return (
                                <div
                                    key={apartment.id}
                                    className="agency-home-card-wrapper"
                                >
                                    <AppartementOwnerCard
                                        appartement={formattedApartment}
                                        onClick={() => setSelectedApartmentId(apartment.id)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            {selectedApartment && (
                <ApartmentModal
                    appartement={selectedApartment}
                    onClose={() => setSelectedApartmentId(null)}
                    isOwner={true}
                />
            )}
        </div>
    );
}
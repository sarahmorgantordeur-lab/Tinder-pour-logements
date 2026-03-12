import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppartementOwnerCard from "../../components/cards/AppartementOwnerCard";
import Headers from "../../layouts/components/Headers";
import Footer from "../../layouts/components/Footer";
import Button from "../../components/ui/Button";
import { useHome } from "../../hooks/useHome";

export default function OwnerHome() {
    const { loading, error } = useHome();
    const { appartmentById, fetchMyProperties } = useHome();
    const navigate = useNavigate();

    useEffect(() => {
        fetchMyProperties();
    }, [fetchMyProperties]);

    const count = appartmentById?.length;

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

                <Button
                    className="agency-home-create-button"
                    onClick={() => navigate("/properties/new")}
                >
                    Créer une annonce
                </Button>
                </div>
            )}

            {!loading && !error && count > 0 && (
                <div className="agency-home-header">
                    <Button onClick={() => navigate("/properties/new")}>
                        Créer une annonce
                    </Button>
                
                <div className="agency-home-grid">
                    {appartmentById.map((apartment) => {
                        const formattedApartment = {
                            ...apartment,
                            city: apartment.address?.city,
                            postal_code: apartment.address?.postal_code,
                            image: apartment.photos?.[0]?.url ?? null,
                        };

                        return (
                            <div
                                key={apartment.id}
                                className="agency-home-card-wrapper"
                            >
                                <AppartementOwnerCard
                                    appartement={formattedApartment}
                                />
                            </div>
                        );
                    })}
                </div>
                </div>
            )}
        </div>
    );
}
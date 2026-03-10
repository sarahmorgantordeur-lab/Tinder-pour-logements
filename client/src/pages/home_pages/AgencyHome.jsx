import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import AppartementOwnerCard from "../../components/cards/AppartementOwnerCard";
import Headers from "../../layouts/components/Headers";
import Footer from "../../layouts/components/Footer";
import Button from "../../components/ui/Button";
import useHome from "../../hooks/useHome";

export default function AgencyHome() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { properties } = useHome();

    const count = properties.length;
    const label = count > 1 ? "annonces" : "annonce";

    return (
        <div className="agency-home">
            <Headers/>

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
                    {properties.map((property) => {
                        const formattedProperty = {
                            ...property,
                            city: property.address?.city,
                            postal_code: property.address?.postal_code,
                            image: property.photos?.[0]?.url ?? null,
                        };

                        return (
                            <div
                                key={property.id}
                                className="agency-home-card-wrapper"
                            >
                                <AppartementOwnerCard
                                    appartement={formattedProperty}
                                />
                            </div>
                        );
                    })}
                </div>
                </div>
            )}
            <Footer/>
        </div>
    );
}
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import Headers from "../layouts/components/Headers";
import Footer from "../layouts/components/Footer";

export default function UserPublicProfilePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get(`/users/${id}`)
            .then(({ data }) => setUser(data.user))
            .catch(() => setError("Impossible de charger ce profil."))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <div className="profile-loading">Chargement...</div>;
    if (error)   return <div className="profile-error">{error}</div>;

    const tp = user.tenant_profile;

    return (
        <div className="profile-page">
            <Headers />
            <main className="profile-content">
                <header className="profile-header">
                    <button className="profile-back" onClick={() => navigate(-1)}>← Retour</button>
                    <p className="profile-kicker">Profil locataire</p>
                    <h1 className="profile-title">{user.firstname} {user.lastname}</h1>
                </header>

                <section className="profile-section">
                    <h2 className="profile-section-title">Informations</h2>
                    {user.bio && <p className="profile-bio">{user.bio}</p>}
                    <p className="profile-field"><strong>Rôle :</strong> {user.role}</p>
                </section>

                {tp && (
                    <section className="profile-section">
                        <h2 className="profile-section-title">Critères de recherche</h2>
                        {tp.budget_max   && <p className="profile-field"><strong>Budget max :</strong> {tp.budget_max} €/mois</p>}
                        {tp.household_size && <p className="profile-field"><strong>Taille du ménage :</strong> {tp.household_size} pers.</p>}
                        {tp.min_surface  && <p className="profile-field"><strong>Surface min :</strong> {tp.min_surface} m²</p>}
                        {tp.max_surface  && <p className="profile-field"><strong>Surface max :</strong> {tp.max_surface} m²</p>}
                        {tp.regions?.length > 0 && (
                            <p className="profile-field"><strong>Régions :</strong> {tp.regions.join(", ")}</p>
                        )}
                        {tp.property_types?.length > 0 && (
                            <p className="profile-field"><strong>Types de biens :</strong> {tp.property_types.join(", ")}</p>
                        )}
                    </section>
                )}

                {user.profile_photos?.length > 0 && (
                    <section className="profile-section">
                        <h2 className="profile-section-title">Photos</h2>
                        <div className="profile-photos-grid">
                            {user.profile_photos.map((p) => (
                                <img key={p.id} src={p.url} alt="Photo de profil" className="profile-photo-thumb" />
                            ))}
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}

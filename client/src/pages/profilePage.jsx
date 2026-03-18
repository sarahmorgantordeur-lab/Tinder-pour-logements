import { useEffect, useState } from "react";
import api from "../api";
import Headers from "../layouts/components/Headers";
import Footer from "../layouts/components/Footer";

const emptyAddress = {
    number: "",
    box: "",
    street: "",
    city: "",
    postal_code: "",
    country: "",
};

const buildFormData = (user) => {
    const agency = user?.agency || user?.agency_member || null;
    const agencyAddress = agency?.address || emptyAddress;

    return {
        firstname: user?.firstname || "",
        lastname: user?.lastname || "",
        phone: user?.phone || "",
        avatar: user?.avatar || "",
        bio: user?.bio || "",
        role: user?.role || "user",
        password: "",
        nom_agence: agency?.nom_agence || "",
        numero_tva: agency?.numero_tva || "",
        site_web: agency?.site_web || "",
        agency_address: {
            number: agencyAddress?.number || "",
            box: agencyAddress?.box || "",
            street: agencyAddress?.street || "",
            city: agencyAddress?.city || "",
            postal_code: agencyAddress?.postal_code || "",
            country: agencyAddress?.country || "",
        },
    };
};

export default function ProfilePage() {
    const [formData, setFormData] = useState(buildFormData(null));
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        api.get("/users/profile")
            .then(({ data }) => setFormData(buildFormData(data.user)))
            .catch(() => setError("Impossible de charger le profil."))
            .finally(() => setLoading(false));
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name.startsWith("agency_address.")) {
            const field = name.replace("agency_address.", "");
            setFormData((prev) => ({
                ...prev,
                agency_address: { ...prev.agency_address, [field]: value },
            }));
            return;
        }

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSaving(true);
        setError(null);
        setSuccess(false);

        try {
            const profilePayload = {
                firstname: formData.firstname,
                lastname: formData.lastname,
                phone: formData.phone,
                bio: formData.bio,
                avatar: formData.avatar,
            };
            if (formData.password) profilePayload.password = formData.password;

            await api.put("/users/profile", profilePayload);

            if (formData.role === "agency" && formData.nom_agence) {
                await api.put("/users/agency", {
                    nom_agence: formData.nom_agence,
                    numero_tva: formData.numero_tva,
                    numero_bce: formData.numero_bce,
                    site_web: formData.site_web,
                    address: formData.agency_address,
                });
            }

            setSuccess(true);
            setFormData((prev) => ({ ...prev, password: "" }));
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (err) {
            setError(err.message || "Erreur lors de la sauvegarde.");
        } finally {
            setSaving(false);
        }
    };

    const isAgency = formData.role === "agency";

    if (loading) return <div className="profile-loading">Chargement...</div>;

    return (
        <div className="profile-page">
            <Headers />
            <main className="profile-content">
                <header className="profile-header">
                    <p className="profile-kicker">Espace profil</p>
                    <h1 className="profile-title">Bienvenue {formData.firstname} {formData.lastname}</h1>
                </header>

                {error && <p className="profile-error">{error}</p>}
                {success && <p className="profile-success">Profil mis à jour avec succès.</p>}

                <form className="profile-form" onSubmit={handleSubmit}>
                    <fieldset className="profile-section">
                        <legend className="profile-section-title">Informations personnelles</legend>

                        <label className="profile-field">
                            Nom
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={handleChange}
                            />
                        </label>

                        <label className="profile-field">
                            Prénom
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                            />
                        </label>

                        <label className="profile-field">
                            Téléphone
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </label>

                        <label className="profile-field">
                            Bio
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                rows={4}
                            />
                        </label>
                    </fieldset>

                    <fieldset className="profile-section">
                        <legend className="profile-section-title">Sécurité</legend>
                        <label className="profile-field">
                            Nouveau mot de passe
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </label>
                    </fieldset>

                    {isAgency && (
                        <fieldset className="profile-section">
                            <legend className="profile-section-title">Informations agence</legend>

                            <label className="profile-field">
                                Nom agence
                                <input
                                    type="text"
                                    name="nom_agence"
                                    value={formData.nom_agence}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="profile-field">
                                Numéro TVA
                                <input
                                    type="text"
                                    name="numero_tva"
                                    value={formData.numero_tva}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="profile-field">
                                Site web
                                <input
                                    type="url"
                                    name="site_web"
                                    value={formData.site_web}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="profile-field">
                                Numéro
                                <input
                                    type="text"
                                    name="agency_address.number"
                                    value={formData.agency_address.number}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="profile-field">
                                Boîte
                                <input
                                    type="text"
                                    name="agency_address.box"
                                    value={formData.agency_address.box}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="profile-field">
                                Rue
                                <input
                                    type="text"
                                    name="agency_address.street"
                                    value={formData.agency_address.street}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="profile-field">
                                Ville
                                <input
                                    type="text"
                                    name="agency_address.city"
                                    value={formData.agency_address.city}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="profile-field">
                                Code postal
                                <input
                                    type="text"
                                    name="agency_address.postal_code"
                                    value={formData.agency_address.postal_code}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="profile-field">
                                Pays
                                <input
                                    type="text"
                                    name="agency_address.country"
                                    value={formData.agency_address.country}
                                    onChange={handleChange}
                                />
                            </label>
                        </fieldset>
                    )}

                    <div className="profile-actions">
                        <button className="profile-submit" type="submit" disabled={saving}>
                            {saving ? "Enregistrement..." : "Enregistrer"}
                        </button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
}

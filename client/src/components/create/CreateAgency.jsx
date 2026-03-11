import { useEffect, useState } from "react";
import api from "../../api";

const buildForm = (agency) => ({
    nom_agence:  agency?.nom_agence  || "",
    numero_tva:  agency?.numero_tva  || "",
    numero_bce:  agency?.numero_bce  || "",
    site_web:    agency?.site_web    || "",
    address: {
        number:      agency?.address?.number      || "",
        box:         agency?.address?.box         || "",
        street:      agency?.address?.street      || "",
        city:        agency?.address?.city        || "",
        postal_code: agency?.address?.postal_code || "",
        country:     agency?.address?.country     || "Belgique",
    },
});

export default function CreateAgency({ onClose } = {}) {
    const [formData, setFormData] = useState(buildForm(null));
    const [loading, setLoading]   = useState(true);
    const [saving, setSaving]     = useState(false);
    const [error, setError]       = useState(null);
    const [success, setSuccess]   = useState(false);

    useEffect(() => {
        api.get("/users/profile")
            .then(({ data }) => {
                if (data.user?.agency) {
                    setFormData(buildForm(data.user.agency));
                }
            })
            .catch(() => setError("Impossible de charger le profil agence."))
            .finally(() => setLoading(false));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("address.")) {
            const field = name.replace("address.", "");
            setFormData((prev) => ({ ...prev, address: { ...prev.address, [field]: value } }));
            return;
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError(null);
        setSuccess(false);

        try {
            await api.put("/users/agency", formData);
            setSuccess(true);
            if (onClose) setTimeout(onClose, 1000);
        } catch (err) {
            setError(err.response?.data?.message || "Erreur lors de la sauvegarde.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <p className="create-agency-loading">Chargement...</p>;

    return (
        <form className="create-agency-form" onSubmit={handleSubmit}>
            {error   && <p className="create-agency-error">{error}</p>}
            {success && <p className="create-agency-success">Profil agence mis à jour.</p>}

            <fieldset className="create-agency-section">
                <legend className="create-agency-section-title">Informations agence</legend>

                <label className="create-agency-field">
                    Nom de l&apos;agence *
                    <input
                        type="text"
                        name="nom_agence"
                        value={formData.nom_agence}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className="create-agency-field">
                    Numéro BCE
                    <input
                        type="text"
                        name="numero_bce"
                        value={formData.numero_bce}
                        onChange={handleChange}
                    />
                </label>

                <label className="create-agency-field">
                    Site web
                    <input
                        type="url"
                        name="site_web"
                        value={formData.site_web}
                        onChange={handleChange}
                        placeholder="https://..."
                    />
                </label>
            </fieldset>

            <fieldset className="create-agency-section">
                <legend className="create-agency-section-title">Adresse</legend>

                <label className="create-agency-field">
                    Numéro
                    <input
                        type="text"
                        name="address.number"
                        value={formData.address.number}
                        onChange={handleChange}
                    />
                </label>

                <label className="create-agency-field">
                    Boîte
                    <input
                        type="text"
                        name="address.box"
                        value={formData.address.box}
                        onChange={handleChange}
                    />
                </label>

                <label className="create-agency-field">
                    Rue *
                    <input
                        type="text"
                        name="address.street"
                        value={formData.address.street}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className="create-agency-field">
                    Ville *
                    <input
                        type="text"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className="create-agency-field">
                    Code postal *
                    <input
                        type="text"
                        name="address.postal_code"
                        value={formData.address.postal_code}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className="create-agency-field">
                    Pays
                    <input
                        type="text"
                        name="address.country"
                        value={formData.address.country}
                        onChange={handleChange}
                    />
                </label>
            </fieldset>

            <div className="create-agency-actions">
                {onClose && (
                    <button type="button" className="create-agency-cancel" onClick={onClose}>
                        Annuler
                    </button>
                )}
                <button type="submit" className="create-agency-submit" disabled={saving}>
                    {saving ? "Enregistrement..." : "Enregistrer"}
                </button>
            </div>
        </form>
    );
}

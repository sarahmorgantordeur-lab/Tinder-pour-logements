import { useState } from "react";
import api from "../../api";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";

const initialForm = {
    nom_agence:  "",
    numero_tva:  "",
    numero_bce:  "",
    site_web:    "",
    address: {
        number:      "",
        box:         "",
        street:      "",
        city:        "",
        postal_code: "",
        country:     "Belgique",
    },
};

export default function CreateAgency({ onClose, onData } = {}) {
    const [formData, setFormData] = useState(initialForm);
    const [saving, setSaving]     = useState(false);
    const [error, setError]       = useState(null);
    const [success, setSuccess]   = useState(false);

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

        // Mode "pré-inscription" : collecter les données sans appeler l'API
        if (onData) {
            onData(formData);
            setSaving(false);
            return;
        }

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

    return (
        <form className="create-agency-form" onSubmit={handleSubmit}>
            {error   && <p className="create-agency-error">{error}</p>}
            {success && <p className="create-agency-success">Agence créée avec succès.</p>}

            <div className="create-agency-sections">
            <fieldset className="create-agency-section">
                <legend className="create-agency-section-title">Informations agence</legend>

                <label className="create-agency-field">
                    Nom de l&apos;agence *
                    <TextInput
                        type="text"
                        name="nom_agence"
                        value={formData.nom_agence}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className="create-agency-field">
                    Numéro BCE
                    <TextInput
                        type="text"
                        name="numero_bce"
                        value={formData.numero_bce}
                        onChange={handleChange}
                    />
                </label>

                <label className="create-agency-field">
                    Site web
                    <TextInput
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
                    <TextInput
                        type="text"
                        name="address.number"
                        value={formData.address.number}
                        onChange={handleChange}
                    />
                </label>

                <label className="create-agency-field">
                    Boîte
                    <TextInput
                        type="text"
                        name="address.box"
                        value={formData.address.box}
                        onChange={handleChange}
                    />
                </label>

                <label className="create-agency-field">
                    Rue *
                    <TextInput
                        type="text"
                        name="address.street"
                        value={formData.address.street}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className="create-agency-field">
                    Ville *
                    <TextInput
                        type="text"
                        name="address.city"
                        value={formData.address.city}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className="create-agency-field">
                    Code postal *
                    <TextInput
                        type="text"
                        name="address.postal_code"
                        value={formData.address.postal_code}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className="create-agency-field">
                    Pays
                    <TextInput
                        type="text"
                        name="address.country"
                        value={formData.address.country}
                        onChange={handleChange}
                    />
                </label>
            </fieldset>
            </div>

            <div className="create-agency-actions">
                {onClose && (
                    <Button type="button" className="create-agency-cancel" onClick={onClose}>
                        Annuler
                    </Button>
                )}
                <Button type="submit" className="create-agency-submit" disabled={saving}>
                    {saving ? "Enregistrement..." : "Créer l'agence"}
                </Button>
            </div>
        </form>
    );
}

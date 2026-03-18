import { useState, useEffect } from "react";
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

export default function CreateAgency({ onClose, onSkip, onData } = {}) {
    const [formData, setFormData]         = useState(initialForm);
    const [saving, setSaving]             = useState(false);
    const [error, setError]               = useState(null);
    const [success, setSuccess]           = useState(false);
    const [agencies, setAgencies]         = useState([]);
    const [selectedAgency, setSelectedAgency] = useState("");

    useEffect(() => {
        api.get("/users/agencies")
            .then(res => setAgencies(res.data.agencies || []))
            .catch(() => {});
    }, []);

    const handleSelectAgency = async (e) => {
        const id = e.target.value;
        setSelectedAgency(id);
        if (!id) {
            setFormData(initialForm);
            return;
        }
        try {
            const res = await api.get(`/users/agencies/${id}`);
            const a = res.data.agency;
            setFormData({
                nom_agence:  a.nom_agence  || "",
                numero_tva:  a.numero_tva  || "",
                numero_bce:  a.numero_bce  || "",
                site_web:    a.site_web    || "",
                address: {
                    number:      a.address?.number      || "",
                    box:         a.address?.box         || "",
                    street:      a.address?.street      || "",
                    city:        a.address?.city        || "",
                    postal_code: a.address?.postal_code || "",
                    country:     a.address?.country     || "Belgique",
                },
            });
        } catch {
            setError("Impossible de récupérer les données de l'agence.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("address.")) {
            const field = name.replace("address.", "");
            setFormData((prev) => ({ ...prev, address: { ...prev.address, [field]: value } }));
            return;
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleJoinExisting = async () => {
        setSaving(true);
        setError(null);
        try {
            await api.put("/users/join-agency", { agencyId: selectedAgency });
            setSuccess(true);
            if (onClose) setTimeout(onClose, 1000);
        } catch (err) {
            setError(err.response?.data?.message || "Erreur lors de l'association.");
        } finally {
            setSaving(false);
        }
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

            {agencies.length > 0 && (
                <div className="create-agency-existing">
                    <label className="create-agency-field">
                        Récupérer une agence existante
                        <select
                            className="create-agency-select"
                            value={selectedAgency}
                            onChange={handleSelectAgency}
                        >
                            <option value="">— Créer une nouvelle agence —</option>
                            {agencies.map(a => (
                                <option key={a.id} value={a.id}>{a.nom_agence}</option>
                            ))}
                        </select>
                    </label>
                    {selectedAgency && (
                        <Button type="button" className="create-agency-submit" onClick={handleJoinExisting} disabled={saving}>
                            {saving ? "Enregistrement..." : "Rejoindre cette agence"}
                        </Button>
                    )}
                </div>
            )}

            {!selectedAgency && (<div className="create-agency-sections">
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
            </div>)}

            {!selectedAgency && (
                <div className="create-agency-actions">
                    {onSkip && (
                        <Button type="button" className="create-agency-cancel" onClick={onSkip}>
                            Passer cette étape
                        </Button>
                    )}
                    <Button type="submit" className="create-agency-submit" disabled={saving}>
                        {saving ? "Enregistrement..." : "Créer l'agence"}
                    </Button>
                </div>
            )}
        </form>
    );
}

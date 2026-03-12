import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import Headers from "../layouts/components/Headers";
import Footer from "../layouts/components/Footer";

const PROPERTY_TYPES = [
    "Bungalow", "Chalet", "Castel", "Farm", "CountryHouse",
    "ApartmentBuilding", "MixedUseBuilding", "BelEtageHouse", "Mansion",
    "Villa", "ManorHouse", "Pavilion", "GroundFloor", "Duplex", "Triplex",
    "Studio", "Penthouse", "Loft", "StudentHousing", "ServiceApartment",
    "Appartement", "Other",
];

const ALLOWED_TRANSITIONS = {
    draft:     ["published", "archived"],
    published: ["draft", "rented", "archived"],
    rented:    ["published", "archived"],
    archived:  ["draft"],
};

const STATUS_LABELS = {
    draft:     "Brouillon",
    published: "Publié",
    rented:    "Loué",
    archived:  "Archivé",
};

const buildForm = (property) => ({
    title:         property?.title || "",
    description:   property?.description || "",
    property_type: property?.property_type || "Appartement",
    price:         property?.price ?? "",
    surface:       property?.surface ?? "",
    rooms:         property?.rooms ?? "",
    parking:       property?.parking ?? false,
    address: {
        number:      property?.address?.number || "",
        box:         property?.address?.box || "",
        street:      property?.address?.street || "",
        city:        property?.address?.city || "",
        postal_code: property?.address?.postal_code || "",
        country:     property?.address?.country || "Belgique",
    },
});

export default function CreateAnnouncementPage({ onClose } = {}) {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = Boolean(id);
    const handleClose = onClose ?? (() => navigate(-1));

    const [formData, setFormData]       = useState(buildForm(null));
    const [currentStatus, setCurrentStatus] = useState("draft");
    const [loading, setLoading]         = useState(isEdit);
    const [saving, setSaving]           = useState(false);
    const [statusSaving, setStatusSaving] = useState(false);
    const [error, setError]             = useState(null);
    const [success, setSuccess]         = useState(false);
    const [statusError, setStatusError] = useState(null);
    const [statusSuccess, setStatusSuccess] = useState(false);

    useEffect(() => {
        if (!isEdit) return;
        api.get(`/properties/${id}`)
            .then(({ data }) => {
                setFormData(buildForm(data.property));
                setCurrentStatus(data.property.status);
            })
            .catch(() => setError("Impossible de charger l'annonce."))
            .finally(() => setLoading(false));
    }, [id, isEdit]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name.startsWith("address.")) {
            const field = name.replace("address.", "");
            setFormData((prev) => ({ ...prev, address: { ...prev.address, [field]: value } }));
            return;
        }
        setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError(null);
        setSuccess(false);

        const payload = {
            ...formData,
            price:   Number(formData.price),
            surface: Number(formData.surface),
            rooms:   Number(formData.rooms),
        };

        try {
            if (isEdit) {
                await api.put(`/properties/${id}`, payload);
            } else {
                await api.post("/properties", payload);
            }
            setSuccess(true);
            setTimeout(() => handleClose(), 1500);
        } catch (err) {
            setError(err.response?.data?.message || "Erreur lors de la sauvegarde.");
        } finally {
            setSaving(false);
        }
    };

    const handleStatusChange = async (newStatus) => {
        setStatusSaving(true);
        setStatusError(null);
        setStatusSuccess(false);
        try {
            await api.patch(`/properties/${id}/status`, { status: newStatus });
            setCurrentStatus(newStatus);
            setStatusSuccess(true);
            setTimeout(() => setStatusSuccess(false), 2000);
        } catch (err) {
            setStatusError(err.response?.data?.message || "Erreur lors du changement de statut.");
        } finally {
            setStatusSaving(false);
        }
    };

    if (loading) return <div className="edit-announcement-loading">Chargement...</div>;

    const availableTransitions = ALLOWED_TRANSITIONS[currentStatus] ?? [];

    return (
        <div className="edit-announcement-page">
            {!onClose && <Headers />}
            <main className="edit-announcement-content">
                <header className="edit-announcement-header">
                    <p className="edit-announcement-kicker">Gestion des annonces</p>
                    <h1 className="edit-announcement-title">
                        {isEdit ? "Modifier l'annonce" : "Créer une annonce"}
                    </h1>
                </header>

                {error   && <p className="edit-announcement-error">{error}</p>}
                {success && <p className="edit-announcement-success">
                    {isEdit ? "Annonce mise à jour avec succès." : "Annonce créée avec succès."}
                </p>}

                <form className="edit-announcement-form" onSubmit={handleSubmit}>
                    <fieldset className="edit-announcement-section">
                        <legend className="edit-announcement-section-title">Informations générales</legend>

                        <label className="edit-announcement-field">
                            Titre
                            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                        </label>

                        <label className="edit-announcement-field">
                            Description
                            <textarea name="description" value={formData.description} onChange={handleChange} rows={5} />
                        </label>

                        <label className="edit-announcement-field">
                            Type de bien
                            <select name="property_type" value={formData.property_type} onChange={handleChange}>
                                {PROPERTY_TYPES.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </label>
                    </fieldset>

                    <fieldset className="edit-announcement-section">
                        <legend className="edit-announcement-section-title">Caractéristiques</legend>

                        <label className="edit-announcement-field">
                            Loyer (€/mois)
                            <input type="number" name="price" value={formData.price} onChange={handleChange} min={0} required />
                        </label>

                        <label className="edit-announcement-field">
                            Surface (m²)
                            <input type="number" name="surface" value={formData.surface} onChange={handleChange} min={0} required />
                        </label>

                        <label className="edit-announcement-field">
                            Nombre de pièces
                            <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} min={1} required />
                        </label>

                        <label className="edit-announcement-field edit-announcement-field--checkbox">
                            <input type="checkbox" name="parking" checked={formData.parking} onChange={handleChange} />
                            Parking inclus
                        </label>
                    </fieldset>

                    <fieldset className="edit-announcement-section">
                        <legend className="edit-announcement-section-title">Adresse</legend>

                        <label className="edit-announcement-field">
                            Numéro
                            <input type="text" name="address.number" value={formData.address.number} onChange={handleChange} required />
                        </label>

                        <label className="edit-announcement-field">
                            Boîte
                            <input type="text" name="address.box" value={formData.address.box} onChange={handleChange} />
                        </label>

                        <label className="edit-announcement-field">
                            Rue
                            <input type="text" name="address.street" value={formData.address.street} onChange={handleChange} required />
                        </label>

                        <label className="edit-announcement-field">
                            Ville
                            <input type="text" name="address.city" value={formData.address.city} onChange={handleChange} required />
                        </label>

                        <label className="edit-announcement-field">
                            Code postal
                            <input type="text" name="address.postal_code" value={formData.address.postal_code} onChange={handleChange} required />
                        </label>

                        <label className="edit-announcement-field">
                            Pays
                            <input type="text" name="address.country" value={formData.address.country} onChange={handleChange} required />
                        </label>
                    </fieldset>

                    <div className="edit-announcement-actions">
                        <button type="button" className="edit-announcement-cancel" onClick={handleClose}>
                            Annuler
                        </button>
                        <button type="submit" className="edit-announcement-submit" disabled={saving}>
                            {saving ? "Enregistrement..." : isEdit ? "Enregistrer" : "Créer l'annonce"}
                        </button>
                    </div>
                </form>

                {isEdit && (
                    <section className="edit-announcement-section edit-announcement-status">
                        <h2 className="edit-announcement-section-title">Statut de l&apos;annonce</h2>
                        <p className="edit-announcement-status-current">
                            Statut actuel : <strong>{STATUS_LABELS[currentStatus]}</strong>
                        </p>

                        {statusError   && <p className="edit-announcement-error">{statusError}</p>}
                        {statusSuccess && <p className="edit-announcement-success">Statut mis à jour.</p>}

                        <div className="edit-announcement-status-actions">
                            {availableTransitions.map((s) => (
                                <button
                                    key={s}
                                    type="button"
                                    className={`edit-announcement-status-btn edit-announcement-status-btn--${s}`}
                                    onClick={() => handleStatusChange(s)}
                                    disabled={statusSaving}
                                >
                                    {statusSaving ? "..." : `→ ${STATUS_LABELS[s]}`}
                                </button>
                            ))}
                            {availableTransitions.length === 0 && (
                                <p className="edit-announcement-status-none">Aucune transition disponible.</p>
                            )}
                        </div>
                    </section>
                )}
            </main>
            {!onClose && <Footer />}
        </div>
    );
}

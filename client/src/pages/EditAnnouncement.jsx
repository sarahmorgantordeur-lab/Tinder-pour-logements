import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import Headers from "../layouts/components/Headers";
import Footer from "../layouts/components/Footer";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";

const PROPERTY_TYPES = [
    "Bungalow", "Chalet", "Castel", "Farm", "CountryHouse",
    "ApartmentBuilding", "MixedUseBuilding", "BelEtageHouse", "Mansion",
    "Villa", "ManorHouse", "Pavilion", "GroundFloor", "Duplex", "Triplex",
    "Studio", "Penthouse", "Loft", "StudentHousing", "ServiceApartment",
    "Appartement", "Other",
];

const STATUSES = ["draft", "published", "rented", "archived"];

const buildForm = (property) => ({
    title: property?.title || "",
    description: property?.description || "",
    property_type: property?.property_type || "Appartement",
    status: property?.status || "draft",
    price: property?.price ?? "",
    surface: property?.surface ?? "",
    rooms: property?.rooms ?? "",
    parking: property?.parking ?? false,
    address: {
        number: property?.address?.number || "",
        box: property?.address?.box || "",
        street: property?.address?.street || "",
        city: property?.address?.city || "",
        postal_code: property?.address?.postal_code || "",
        country: property?.address?.country || "",
    },
});

export default function EditAnnouncement() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState(buildForm(null));
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        api.get(`/properties/${id}`)
            .then(({ data }) => {
                setFormData(buildForm(data.property));
            })
            .catch(() => setError("Impossible de charger l'annonce."))
            .finally(() => setLoading(false));
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (name.startsWith("address.")) {
            const field = name.replace("address.", "");
            setFormData((prev) => ({
                ...prev,
                address: { ...prev.address, [field]: value },
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setError(null);
        setSuccess(false);

        const payload = {
            ...formData,
            price: Number(formData.price),
            surface: Number(formData.surface),
            rooms: Number(formData.rooms),
        };

        try {
            await api.put(`/properties/${id}`, payload);
            setSuccess(true);
            setTimeout(() => navigate(-1), 1500);
        } catch (err) {
            setError(err.message || "Erreur lors de la sauvegarde.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="edit-announcement-loading">Chargement...</div>;

    return (
        <div className="edit-announcement-page">
            <Headers />
            <main className="edit-announcement-content">
                <header className="edit-announcement-header">
                    <p className="edit-announcement-kicker">Gestion des annonces</p>
                    <h1 className="edit-announcement-title">Modifier l&apos;annonce</h1>
                </header>

                {error && <p className="edit-announcement-error">{error}</p>}
                {success && <p className="edit-announcement-success">Annonce mise à jour avec succès.</p>}

                <form className="edit-announcement-form" onSubmit={handleSubmit}>
                    <fieldset className="edit-announcement-section">
                        <legend className="edit-announcement-section-title">Informations générales</legend>

                        <label className="edit-announcement-field">
                            Titre
                            <TextInput
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="edit-announcement-field">
                            Description
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={5}
                            />
                        </label>

                        <label className="edit-announcement-field">
                            Type de bien
                            <Select name="property_type" value={formData.property_type} onChange={handleChange}>
                                {PROPERTY_TYPES.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </Select>
                        </label>

                        <label className="edit-announcement-field">
                            Statut
                            <Select name="status" value={formData.status} onChange={handleChange}>
                                {STATUSES.map((s) => (
                                    <option key={s} value={s}>{s}</option>
                                ))}
                            </Select>
                        </label>
                    </fieldset>

                    <fieldset className="edit-announcement-section">
                        <legend className="edit-announcement-section-title">Caractéristiques</legend>

                        <label className="edit-announcement-field">
                            Loyer (€/mois)
                            <TextInput
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                min={0}
                                required
                            />
                        </label>

                        <label className="edit-announcement-field">
                            Surface (m²)
                            <TextInput
                                type="number"
                                name="surface"
                                value={formData.surface}
                                onChange={handleChange}
                                min={0}
                                required
                            />
                        </label>

                        <label className="edit-announcement-field">
                            Nombre de pièces
                            <TextInput
                                type="number"
                                name="rooms"
                                value={formData.rooms}
                                onChange={handleChange}
                                min={1}
                                required
                            />
                        </label>

                        <label className="edit-announcement-field edit-announcement-field--checkbox">
                            <input
                                type="checkbox"
                                name="parking"
                                checked={formData.parking}
                                onChange={handleChange}
                            />
                            Parking inclus
                        </label>
                    </fieldset>

                    <fieldset className="edit-announcement-section">
                        <legend className="edit-announcement-section-title">Adresse</legend>

                        <label className="edit-announcement-field">
                            Numéro
                            <TextInput
                                type="text"
                                name="address.number"
                                value={formData.address.number}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="edit-announcement-field">
                            Boîte
                            <TextInput
                                type="text"
                                name="address.box"
                                value={formData.address.box}
                                onChange={handleChange}
                            />
                        </label>

                        <label className="edit-announcement-field">
                            Rue
                            <TextInput
                                type="text"
                                name="address.street"
                                value={formData.address.street}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="edit-announcement-field">
                            Ville
                            <TextInput
                                type="text"
                                name="address.city"
                                value={formData.address.city}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="edit-announcement-field">
                            Code postal
                            <TextInput
                                type="text"
                                name="address.postal_code"
                                value={formData.address.postal_code}
                                onChange={handleChange}
                                required
                            />
                        </label>

                        <label className="edit-announcement-field">
                            Pays
                            <TextInput
                                type="text"
                                name="address.country"
                                value={formData.address.country}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </fieldset>

                    <div className="edit-announcement-actions">
                        <Button type="button" className="edit-announcement-cancel" onClick={() => navigate(-1)}>
                            Annuler
                        </Button>
                        <Button type="submit" className="edit-announcement-submit" disabled={saving}>
                            {saving ? "Enregistrement..." : "Enregistrer"}
                        </Button>
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
}

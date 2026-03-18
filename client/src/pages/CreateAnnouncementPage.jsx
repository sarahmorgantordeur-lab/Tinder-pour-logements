import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import Headers from "../layouts/components/Headers";
import Footer from "../layouts/components/Footer";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";

const BASE_URL = import.meta.env.VITE_API_URL || '/api';

const PROPERTY_TYPES = [
    "Appartement",
    "BelEtageHouse",
    "Castel",
    "Duplex",
    "StudentHousing",
    "Villa",
    "Chalet",
    "Bungalow",
    "Mansion",
    "Penthouse",
    "Loft", 
    "Studio", 
    "Other"
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
    const photoInputRef = useRef(null);

    const [formData, setFormData]           = useState(buildForm(null));
    const [currentStatus, setCurrentStatus] = useState("draft");
    const [photos, setPhotos]               = useState([]);
    const [loading, setLoading]             = useState(isEdit);
    const [saving, setSaving]               = useState(false);
    const [uploadingPhoto, setUploadingPhoto] = useState(false);
    const [statusSaving, setStatusSaving]   = useState(false);
    const [error, setError]                 = useState(null);
    const [success, setSuccess]             = useState(false);
    const [photoError, setPhotoError]       = useState(null);
    const [statusError, setStatusError]     = useState(null);
    const [statusSuccess, setStatusSuccess] = useState(false);

    useEffect(() => {
        if (!isEdit) return;
        api.get(`/properties/${id}`)
            .then(({ data }) => {
                setFormData(buildForm(data.property));
                setCurrentStatus(data.property.status);
                setPhotos(data.property.photos ?? []);
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

    const handlePhotoUpload = async (files) => {
        if (!files || files.length === 0) return;
        setUploadingPhoto(true);
        setPhotoError(null);
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            Array.from(files).forEach((file) => formData.append('pictures', file));
            const res = await fetch(`${BASE_URL}/properties/${id}/photos`, {
                method: 'POST',
                headers: { Authorization: `Bearer ${token}`, 'ngrok-skip-browser-warning': 'true' },
                body: formData,
            });
            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.message || 'Erreur lors de l\'upload.');
            }
            const { property } = await res.json();
            setPhotos(property.photos ?? []);
        } catch (err) {
            setPhotoError(err.message || "Erreur lors de l'upload des photos.");
        } finally {
            setUploadingPhoto(false);
            if (photoInputRef.current) photoInputRef.current.value = '';
        }
    };

    const handlePhotoDelete = async (photoUrl) => {
        setPhotoError(null);
        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`${BASE_URL}/properties/${id}/photos`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ photoUrl }),
            });
            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.message || 'Erreur lors de la suppression.');
            }
            const { property } = await res.json();
            setPhotos(property.photos ?? []);
        } catch (err) {
            setPhotoError(err.message || "Erreur lors de la suppression de la photo.");
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
                            <TextInput type="text" name="title" value={formData.title} onChange={handleChange} required />
                        </label>

                        <label className="edit-announcement-field">
                            Description
                            <textarea name="description" value={formData.description} onChange={handleChange} rows={5} />
                        </label>

                        <label className="edit-announcement-field">
                            Type de bien
                            <Select name="property_type" value={formData.property_type} onChange={handleChange}>
                                {PROPERTY_TYPES.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </Select>
                        </label>
                    </fieldset>

                    <fieldset className="edit-announcement-section">
                        <legend className="edit-announcement-section-title">Caractéristiques</legend>

                        <label className="edit-announcement-field">
                            Loyer (€/mois)
                            <TextInput type="number" name="price" value={formData.price} onChange={handleChange} min={0} required />
                        </label>

                        <label className="edit-announcement-field">
                            Surface (m²)
                            <TextInput type="number" name="surface" value={formData.surface} onChange={handleChange} min={0} required />
                        </label>

                        <label className="edit-announcement-field">
                            Nombre de pièces
                            <TextInput type="number" name="rooms" value={formData.rooms} onChange={handleChange} min={1} required />
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
                            <TextInput type="text" name="address.number" value={formData.address.number} onChange={handleChange} required />
                        </label>

                        <label className="edit-announcement-field">
                            Boîte
                            <TextInput type="text" name="address.box" value={formData.address.box} onChange={handleChange} />
                        </label>

                        <label className="edit-announcement-field">
                            Rue
                            <TextInput type="text" name="address.street" value={formData.address.street} onChange={handleChange} required />
                        </label>

                        <label className="edit-announcement-field">
                            Ville
                            <TextInput type="text" name="address.city" value={formData.address.city} onChange={handleChange} required />
                        </label>

                        <label className="edit-announcement-field">
                            Code postal
                            <TextInput type="text" name="address.postal_code" value={formData.address.postal_code} onChange={handleChange} required />
                        </label>

                        <label className="edit-announcement-field">
                            Pays
                            <TextInput type="text" name="address.country" value={formData.address.country} onChange={handleChange} required />
                        </label>
                    </fieldset>

                    {isEdit && (
                    <section className="edit-announcement-section edit-announcement-photos">
                        <h2 className="edit-announcement-section-title">Photos</h2>

                        {photoError && <p className="edit-announcement-error">{photoError}</p>}

                        {photos.length > 0 && (
                            <div className="edit-announcement-photo-grid">
                                {photos.map((photo) => (
                                    <div key={photo.id} className="edit-announcement-photo-item">
                                        <img
                                            src={`${BASE_URL.replace('/api', '')}${photo.url}`}
                                            alt="Photo du bien"
                                            className="edit-announcement-photo-img"
                                        />
                                        <button
                                            type="button"
                                            className="edit-announcement-photo-delete"
                                            onClick={() => handlePhotoDelete(photo.url)}
                                            title="Supprimer cette photo"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        <input
                            ref={photoInputRef}
                            type="file"
                            accept="image/jpeg,image/png,image/webp"
                            multiple
                            style={{ display: 'none' }}
                            onChange={(e) => handlePhotoUpload(e.target.files)}
                        />
                        <Button
                            type="button"
                            className="edit-announcement-photo-add-btn"
                            onClick={() => photoInputRef.current?.click()}
                            disabled={uploadingPhoto}
                        >
                            {uploadingPhoto ? "Upload en cours..." : "+ Ajouter des photos"}
                        </Button>
                    </section>
                )}

                    <div className="edit-announcement-actions">
                        <Button type="button" className="edit-announcement-cancel" onClick={handleClose}>
                            Annuler
                        </Button>
                        <Button type="submit" className="edit-announcement-submit" disabled={saving}>
                            {saving ? "Enregistrement..." : isEdit ? "Enregistrer" : "Créer l'annonce"}
                        </Button>
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
                                <Button
                                    key={s}
                                    type="button"
                                    className={`edit-announcement-status-btn edit-announcement-status-btn--${s}`}
                                    onClick={() => handleStatusChange(s)}
                                    disabled={statusSaving}
                                >
                                    {statusSaving ? "..." : `→ ${STATUS_LABELS[s]}`}
                                </Button>
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

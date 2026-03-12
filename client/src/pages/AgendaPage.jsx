import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import api from "../api";
import Headers from "../layouts/components/Headers";
import Footer from "../layouts/components/Footer";

const EMPTY_FORM = { title: "", date: "", notes: "", tenant_id: "", property_id: "" };

function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleString("fr-BE", { dateStyle: "medium", timeStyle: "short" });
}

export default function AgendaPage() {
    const { user } = useAuth();

    const [appointments, setAppointments] = useState([]);
    const [properties, setProperties]     = useState([]);
    const [tenants, setTenants]           = useState([]);
    const [loading, setLoading]           = useState(true);
    const [error, setError]               = useState(null);

    const [form, setForm]           = useState(EMPTY_FORM);
    const [editId, setEditId]       = useState(null);
    const [saving, setSaving]       = useState(false);
    const [formError, setFormError] = useState(null);
    const [showForm, setShowForm]   = useState(false);

    // Charger rdv + biens + tenants (via conversations)
    useEffect(() => {
        Promise.all([
            api.get("/appointments"),
            api.get("/properties/my"),
            api.get("/conversations"),
        ])
            .then(([apptRes, propRes, convRes]) => {
                setAppointments(apptRes.data.appointments || []);
                setProperties(propRes.data.properties || propRes.data.apartments || []);

                // Extraire les tenants uniques depuis les conversations
                const convs = convRes.data.conversations || [];
                const seen = new Map();
                convs.forEach((c) => {
                    if (c.tenant && !seen.has(c.tenant.id)) seen.set(c.tenant.id, c.tenant);
                });
                setTenants(Array.from(seen.values()));
            })
            .catch(() => setError("Impossible de charger les données."))
            .finally(() => setLoading(false));
    }, []);

    const openCreate = () => {
        setEditId(null);
        setForm(EMPTY_FORM);
        setFormError(null);
        setShowForm(true);
    };

    const openEdit = (appt) => {
        setEditId(appt.id);
        setForm({
            title:       appt.title,
            date:        appt.date ? appt.date.slice(0, 16) : "",
            notes:       appt.notes || "",
            tenant_id:   appt.tenant?.id || "",
            property_id: appt.property?.id || "",
        });
        setFormError(null);
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        setFormError(null);
        try {
            if (editId) {
                const { data } = await api.put(`/appointments/${editId}`, {
                    title: form.title,
                    date:  form.date,
                    notes: form.notes || null,
                });
                setAppointments((prev) => prev.map((a) => a.id === editId ? data.appointment : a));
            } else {
                const { data } = await api.post("/appointments", form);
                setAppointments((prev) => [...prev, data.appointment]);
            }
            setShowForm(false);
        } catch (err) {
            setFormError(err.response?.data?.message || "Erreur lors de la sauvegarde.");
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Supprimer ce rendez-vous ?")) return;
        try {
            await api.delete(`/appointments/${id}`);
            setAppointments((prev) => prev.filter((a) => a.id !== id));
        } catch {
            alert("Impossible de supprimer le rendez-vous.");
        }
    };

    // Grouper par bien
    const grouped = appointments.reduce((acc, appt) => {
        const key = appt.property?.id ?? "unknown";
        if (!acc[key]) acc[key] = { property: appt.property, items: [] };
        acc[key].items.push(appt);
        return acc;
    }, {});

    return (
        <div className="agenda-page">
            <Headers />
            <main className="agenda-content">
                <header className="agenda-header">
                    <div>
                        <p className="agenda-kicker">Gestion</p>
                        <h1 className="agenda-title">Mon agenda</h1>
                    </div>
                    <button className="agenda-create-btn" onClick={openCreate}>
                        + Nouveau rendez-vous
                    </button>
                </header>

                {loading && <p className="agenda-loading">Chargement...</p>}
                {error   && <p className="agenda-error">{error}</p>}

                {/* Formulaire */}
                {showForm && (
                    <div className="agenda-modal-overlay" onClick={() => setShowForm(false)}>
                        <div className="agenda-modal" onClick={(e) => e.stopPropagation()}>
                            <h2 className="agenda-modal-title">
                                {editId ? "Modifier le rendez-vous" : "Nouveau rendez-vous"}
                            </h2>

                            {formError && <p className="agenda-form-error">{formError}</p>}

                            <form className="agenda-form" onSubmit={handleSubmit}>
                                <label className="agenda-field">
                                    Titre
                                    <input
                                        type="text"
                                        required
                                        value={form.title}
                                        onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                                    />
                                </label>

                                <label className="agenda-field">
                                    Date & heure
                                    <input
                                        type="datetime-local"
                                        required
                                        value={form.date}
                                        onChange={(e) => setForm((p) => ({ ...p, date: e.target.value }))}
                                    />
                                </label>

                                {!editId && (
                                    <>
                                        <label className="agenda-field">
                                            Bien immobilier
                                            <select
                                                required
                                                value={form.property_id}
                                                onChange={(e) => setForm((p) => ({ ...p, property_id: e.target.value }))}
                                            >
                                                <option value="">-- Choisir un bien --</option>
                                                {properties.map((p) => (
                                                    <option key={p.id} value={p.id}>
                                                        {p.title} {p.address?.city ? `(${p.address.city})` : ""}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>

                                        <label className="agenda-field">
                                            Locataire
                                            <select
                                                required
                                                value={form.tenant_id}
                                                onChange={(e) => setForm((p) => ({ ...p, tenant_id: e.target.value }))}
                                            >
                                                <option value="">-- Choisir un locataire --</option>
                                                {tenants.map((t) => (
                                                    <option key={t.id} value={t.id}>
                                                        {t.firstname} {t.lastname}
                                                    </option>
                                                ))}
                                            </select>
                                        </label>
                                    </>
                                )}

                                <label className="agenda-field">
                                    Notes
                                    <textarea
                                        rows={3}
                                        value={form.notes}
                                        onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
                                    />
                                </label>

                                <div className="agenda-form-actions">
                                    <button
                                        type="button"
                                        className="agenda-cancel-btn"
                                        onClick={() => setShowForm(false)}
                                    >
                                        Annuler
                                    </button>
                                    <button type="submit" className="agenda-submit-btn" disabled={saving}>
                                        {saving ? "Enregistrement..." : editId ? "Enregistrer" : "Créer"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {/* Liste groupée par bien */}
                {!loading && !error && Object.keys(grouped).length === 0 && (
                    <p className="agenda-empty">Aucun rendez-vous. Créez-en un !</p>
                )}

                {Object.values(grouped).map(({ property, items }) => (
                    <section key={property?.id} className="agenda-group">
                        <h2 className="agenda-group-title">
                            {property?.title ?? "Bien inconnu"}
                            {property?.address?.city && (
                                <span className="agenda-group-city"> · {property.address.city}</span>
                            )}
                        </h2>

                        <ul className="agenda-list">
                            {items.map((appt) => (
                                <li key={appt.id} className="agenda-item">
                                    <div className="agenda-item-info">
                                        <p className="agenda-item-title">{appt.title}</p>
                                        <p className="agenda-item-date">{formatDate(appt.date)}</p>
                                        <p className="agenda-item-tenant">
                                            Locataire : <strong>{appt.tenant?.firstname} {appt.tenant?.lastname}</strong>
                                        </p>
                                        {appt.notes && (
                                            <p className="agenda-item-notes">{appt.notes}</p>
                                        )}
                                    </div>
                                    <div className="agenda-item-actions">
                                        <button
                                            className="agenda-edit-btn"
                                            onClick={() => openEdit(appt)}
                                        >
                                            Modifier
                                        </button>
                                        <button
                                            className="agenda-delete-btn"
                                            onClick={() => handleDelete(appt.id)}
                                        >
                                            Supprimer
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </main>
            <Footer />
        </div>
    );
}

import { useEffect, useState } from "react";
import api from "../api";
import { useAuth } from "../hooks/useAuth";
import Headers from "../layouts/components/Headers";
import Footer from "../layouts/components/Footer";
import Select from "../components/ui/Select";
import SearchableSelect from "../components/ui/SearchableSelect";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import Modal from "../components/ui/Modal";

const EMPTY_FORM = { title: "", date: "", notes: "", tenant_id: "", property_id: "" };

function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleString("fr-BE", { dateStyle: "medium", timeStyle: "short" });
}

export default function AgendaPage() {

    const { user } = useAuth();
    const isTenant = user?.role === "user";

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

    // Charger les rdv selon le rôle
    useEffect(() => {
        if (isTenant) {
            api.get("/appointments/tenant")
                .then(({ data }) => setAppointments(data.appointments || []))
                .catch(() => setError("Impossible de charger vos rendez-vous."))
                .finally(() => setLoading(false));
        } else {
            Promise.allSettled([
                api.get("/appointments"),
                api.get("/properties/owner/my-properties"),
                api.get("/conversations/owner"),
            ])
                .then(([apptRes, propRes, convRes]) => {
                    if (apptRes.status === "fulfilled") {
                        setAppointments(apptRes.value.data.appointments || []);
                    }
                    if (propRes.status === "fulfilled") {
                        setProperties(propRes.value.data.properties || propRes.value.data.apartments || []);
                    } else {
                        setError("Impossible de charger les biens.");
                    }
                    if (convRes.status === "fulfilled") {
                        const convs = convRes.value.data.conversations || [];
                        const seen = new Map();
                        convs.forEach((c) => {
                            if (c.tenant && !seen.has(c.tenant.id)) seen.set(c.tenant.id, c.tenant);
                        });
                        setTenants(Array.from(seen.values()));
                    }
                })
                .finally(() => setLoading(false));
        }
    }, [isTenant]);

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

    // Vue tenant — liste en lecture seule groupée par bien
    if (isTenant) {
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
                            <p className="agenda-kicker">Mes visites</p>
                            <h1 className="agenda-title">Mes rendez-vous</h1>
                        </div>
                    </header>

                    {loading && <p className="agenda-loading">Chargement...</p>}
                    {error   && <p className="agenda-error">{error}</p>}

                    {!loading && !error && Object.keys(grouped).length === 0 && (
                        <p className="agenda-empty">Aucun rendez-vous prévu pour l'instant.</p>
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
                                            <p className="agenda-item-owner">
                                                Organisé par : <strong>{appt.owner?.firstname} {appt.owner?.lastname}</strong>
                                            </p>
                                            {appt.notes && (
                                                <p className="agenda-item-notes">{appt.notes}</p>
                                            )}
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

    return (
        <div className="agenda-page">
            <Headers />
            <main className="agenda-content">
                <header className="agenda-header">
                    <div>
                        <p className="agenda-kicker">Gestion</p>
                        <h1 className="agenda-title">Mon agenda</h1>
                    </div>
                    <Button className="agenda-create-btn" onClick={openCreate}>
                        + Nouveau rendez-vous
                    </Button>
                </header>

                {loading && <p className="agenda-loading">Chargement...</p>}
                {error   && <p className="agenda-error">{error}</p>}

                {/* Formulaire */}
                {showForm && (
                    <Modal onClose={() => setShowForm(false)}>
                            <h2 className="agenda-modal-title">
                                {editId ? "Modifier le rendez-vous" : "Nouveau rendez-vous"}
                            </h2>

                            {formError && <p className="agenda-form-error">{formError}</p>}

                            <form className="agenda-form" onSubmit={handleSubmit}>
                                <label className="agenda-field">
                                    Titre
                                    <TextInput
                                        type="text"
                                        required
                                        value={form.title}
                                        onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                                    />
                                </label>

                                <label className="agenda-field">
                                    Date & heure
                                    <TextInput
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

                                            <Select
                                                required
                                                value={properties
                                                    .map(p => ({
                                                        value: p.id,
                                                        label: `${p.title} ${p.address?.city ? `(${p.address.city})` : ""}`
                                                    }))
                                                    .find(opt => opt.value === form.property_id)
                                                    }
                                                    onChange={(selected) =>
                                                        setForm((prev) => ({
                                                            ...prev,
                                                            property_id: selected?.value || ""
                                                        }))
                                                    }
                                                    options={properties.map((p) => ({
                                                        value: p.id,
                                                        label: `${p.title} ${p.address?.city ? `(${p.address.city})` : ""}`
                                                    }))}
                                                    placeholder="-- Choisir un bien --"
                                                />
                                            </label>        
                                        <label className="agenda-field">
                                            Locataire
                                            <SearchableSelect
                                                required
                                                value={tenants
                                                    .map((t) => ({ value: t.id, label: `${t.firstname} ${t.lastname}` }))
                                                    .find((opt) => opt.value === form.tenant_id)
                                                }
                                                onChange={(selected) =>
                                                    setForm((prev) => ({
                                                        ...prev,
                                                        tenant_id: selected?.value || "",
                                                    }))
                                                }
                                                options={tenants.map((t) => ({
                                                    value: t.id,
                                                    label: `${t.firstname} ${t.lastname}`,
                                                }))}
                                                placeholder="-- Choisir un locataire --"
                                            />
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
                                    <Button
                                        type="button"
                                        className="agenda-cancel-btn"
                                        onClick={() => setShowForm(false)}
                                    >
                                        Annuler
                                    </Button>
                                    <Button type="submit" className="agenda-submit-btn" disabled={saving}>
                                        {saving ? "Enregistrement..." : editId ? "Enregistrer" : "Créer"}
                                    </Button>
                                </div>
                            </form>
                    </Modal>
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
                                        <Button
                                            className="agenda-edit-btn"
                                            onClick={() => openEdit(appt)}
                                        >
                                            Modifier
                                        </Button>
                                        <Button
                                            className="agenda-delete-btn"
                                            onClick={() => handleDelete(appt.id)}
                                        >
                                            Supprimer
                                        </Button>
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

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apartmentAPI } from '../services/api';

export default function MyApartments() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '', description: '', address: '', city: '', postal_code: '',
    region: '', property_type: 'apartment', listing_type: 'rent',
    price: '', surface: '', rooms: '',
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => { loadApartments(); }, []);

  const loadApartments = async () => {
    try {
      const res = await apartmentAPI.getMyApartments();
      setApartments(res.data.apartments || res.data || []);
    } catch { /* ignore */ }
    finally { setLoading(false); }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await apartmentAPI.create({
        ...formData,
        price: Number(formData.price),
        surface: formData.surface ? Number(formData.surface) : undefined,
        rooms: formData.rooms ? Number(formData.rooms) : undefined,
      });
      setShowForm(false);
      setFormData({ title: '', description: '', address: '', city: '', postal_code: '', region: '', property_type: 'apartment', listing_type: 'rent', price: '', surface: '', rooms: '' });
      loadApartments();
    } catch { /* ignore */ }
    finally { setSaving(false); }
  };

  const handleDelete = async (id) => {
    if (!confirm('Supprimer cette annonce ?')) return;
    try {
      await apartmentAPI.delete(id);
      setApartments((prev) => prev.filter((a) => a.id !== id));
    } catch { /* ignore */ }
  };

  if (loading) return <div className="page-loader">Chargement...</div>;

  return (
    <div className="my-apartments-page">
      <div className="page-header">
        <h1>Mes Annonces</h1>
        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Annuler' : '+ Nouvelle annonce'}
        </button>
      </div>

      {showForm && (
        <form className="create-apartment-form" onSubmit={handleCreate}>
          <div className="form-row">
            <div className="form-group">
              <label>Titre</label>
              <input name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Prix</label>
              <input name="price" type="number" value={formData.price} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows={3} />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Adresse</label>
              <input name="address" value={formData.address} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Ville</label>
              <input name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Code postal</label>
              <input name="postal_code" value={formData.postal_code} onChange={handleChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Type de bien</label>
              <select name="property_type" value={formData.property_type} onChange={handleChange}>
                <option value="apartment">Appartement</option>
                <option value="house">Maison</option>
                <option value="studio">Studio</option>
                <option value="villa">Villa</option>
              </select>
            </div>
            <div className="form-group">
              <label>Type d'annonce</label>
              <select name="listing_type" value={formData.listing_type} onChange={handleChange}>
                <option value="rent">Location</option>
                <option value="sale">Vente</option>
              </select>
            </div>
            <div className="form-group">
              <label>Surface (m²)</label>
              <input name="surface" type="number" value={formData.surface} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Pieces</label>
              <input name="rooms" type="number" value={formData.rooms} onChange={handleChange} />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? 'Creation...' : 'Creer l\'annonce'}
          </button>
        </form>
      )}

      {apartments.length === 0 && !showForm ? (
        <div className="apartments-empty">
          <p>Vous n'avez pas encore d'annonces</p>
        </div>
      ) : (
        <div className="apartments-grid">
          {apartments.map((apt) => (
            <div key={apt.id} className="apartment-card">
              <Link to={`/apartments/${apt.id}`}>
                <div className="apartment-card-image">
                  {(apt.pictures?.[0]?.url || apt.Pictures?.[0]?.url) ? (
                    <img src={apt.pictures?.[0]?.url || apt.Pictures?.[0]?.url} alt={apt.title} />
                  ) : (
                    <div className="apartment-card-no-image">Pas de photo</div>
                  )}
                </div>
                <div className="apartment-card-body">
                  <h3>{apt.title}</h3>
                  <p className="apartment-card-price">{apt.price?.toLocaleString('fr-FR')} €</p>
                  <p className="apartment-card-location">{apt.city}</p>
                </div>
              </Link>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(apt.id)}>
                Supprimer
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

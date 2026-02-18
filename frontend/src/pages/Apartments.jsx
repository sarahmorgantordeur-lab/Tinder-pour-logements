import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { apartmentAPI } from '../services/api';

export default function Apartments() {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    city: '',
    listing_type: '',
    property_type: '',
    min_price: '',
    max_price: '',
  });

  useEffect(() => {
    loadApartments();
  }, []);

  const loadApartments = async (params = {}) => {
    setLoading(true);
    try {
      const cleanParams = Object.fromEntries(
        Object.entries(params).filter(([, v]) => v !== '')
      );
      const res = await apartmentAPI.getAll(cleanParams);
      setApartments(res.data.apartments || res.data || []);
    } catch {
      setApartments([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (e) => {
    e.preventDefault();
    loadApartments(filters);
  };

  const handleChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="apartments-page">
      <h1>Explorer les logements</h1>

      <form className="apartments-filters" onSubmit={handleFilter}>
        <input
          name="city"
          placeholder="Ville"
          value={filters.city}
          onChange={handleChange}
        />
        <select name="listing_type" value={filters.listing_type} onChange={handleChange}>
          <option value="">Tout type</option>
          <option value="rent">Location</option>
          <option value="sale">Vente</option>
        </select>
        <select name="property_type" value={filters.property_type} onChange={handleChange}>
          <option value="">Tout bien</option>
          <option value="apartment">Appartement</option>
          <option value="house">Maison</option>
          <option value="studio">Studio</option>
          <option value="villa">Villa</option>
        </select>
        <input
          name="min_price"
          type="number"
          placeholder="Prix min"
          value={filters.min_price}
          onChange={handleChange}
        />
        <input
          name="max_price"
          type="number"
          placeholder="Prix max"
          value={filters.max_price}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">Rechercher</button>
      </form>

      {loading ? (
        <div className="page-loader">Chargement...</div>
      ) : apartments.length === 0 ? (
        <div className="apartments-empty">
          <p>Aucun logement trouve</p>
        </div>
      ) : (
        <div className="apartments-grid">
          {apartments.map((apt) => (
            <Link to={`/apartments/${apt.id}`} key={apt.id} className="apartment-card">
              <div className="apartment-card-image">
                {(apt.pictures?.[0]?.url || apt.Pictures?.[0]?.url) ? (
                  <img src={apt.pictures?.[0]?.url || apt.Pictures?.[0]?.url} alt={apt.title} />
                ) : (
                  <div className="apartment-card-no-image">Pas de photo</div>
                )}
                <span className="badge badge-type">
                  {apt.listing_type === 'rent' ? 'Location' : 'Vente'}
                </span>
              </div>
              <div className="apartment-card-body">
                <h3>{apt.title}</h3>
                <p className="apartment-card-price">
                  {apt.price?.toLocaleString('fr-FR')} {apt.listing_type === 'rent' ? '€/mois' : '€'}
                </p>
                <p className="apartment-card-location">{apt.city}</p>
                <div className="apartment-card-meta">
                  {apt.surface && <span>{apt.surface} m²</span>}
                  {apt.rooms && <span>{apt.rooms} pcs</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

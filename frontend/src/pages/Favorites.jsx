import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userAPI } from '../services/api';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await userAPI.getFavorites();
        setFavorites(res.data.favorites || res.data || []);
      } catch { /* ignore */ }
      finally { setLoading(false); }
    };
    load();
  }, []);

  const removeFavorite = async (aptId) => {
    try {
      await userAPI.removeFavorite(aptId);
      setFavorites((prev) => prev.filter((f) => (f.apartment_id || f.apartmentId || f.id) !== aptId));
    } catch { /* ignore */ }
  };

  if (loading) return <div className="page-loader">Chargement...</div>;

  return (
    <div className="favorites-page">
      <h1>Mes Favoris</h1>

      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <p>Aucun favori pour le moment</p>
          <Link to="/apartments" className="btn btn-primary">Explorer les logements</Link>
        </div>
      ) : (
        <div className="apartments-grid">
          {favorites.map((fav) => {
            const apt = fav.apartment || fav.Apartment || fav;
            return (
              <div key={fav.id || apt.id} className="apartment-card">
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
                    <p className="apartment-card-price">
                      {apt.price?.toLocaleString('fr-FR')} €
                    </p>
                    <p className="apartment-card-location">{apt.city}</p>
                  </div>
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFavorite(apt.id)}
                >
                  Retirer
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

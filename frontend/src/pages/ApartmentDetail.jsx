import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apartmentAPI, userAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function ApartmentDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [apartment, setApartment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await apartmentAPI.getById(id);
        setApartment(res.data.apartment || res.data);
      } catch {
        navigate('/apartments');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id, navigate]);

  const toggleFavorite = async () => {
    if (!user) return navigate('/login');
    try {
      if (isFavorite) {
        await userAPI.removeFavorite(id);
      } else {
        await userAPI.addFavorite(id);
      }
      setIsFavorite(!isFavorite);
    } catch { /* ignore */ }
  };

  if (loading) return <div className="page-loader">Chargement...</div>;
  if (!apartment) return null;

  const pictures = apartment.pictures || apartment.Pictures || [];

  return (
    <div className="apartment-detail">
      <button onClick={() => navigate(-1)} className="btn btn-outline btn-sm back-btn">
        Retour
      </button>

      {pictures.length > 0 && (
        <div className="detail-gallery">
          <img src={pictures[currentImage]?.url} alt={apartment.title} className="detail-main-image" />
          {pictures.length > 1 && (
            <div className="detail-thumbnails">
              {pictures.map((pic, i) => (
                <img
                  key={pic.id || i}
                  src={pic.url}
                  alt=""
                  className={`detail-thumb ${i === currentImage ? 'active' : ''}`}
                  onClick={() => setCurrentImage(i)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      <div className="detail-content">
        <div className="detail-header">
          <div>
            <h1>{apartment.title}</h1>
            <p className="detail-location">
              {apartment.address && `${apartment.address}, `}
              {apartment.city}
              {apartment.postal_code && ` ${apartment.postal_code}`}
              {apartment.region && `, ${apartment.region}`}
            </p>
          </div>
          <div className="detail-price">
            <span className="price-amount">{apartment.price?.toLocaleString('fr-FR')} €</span>
            {apartment.listing_type === 'rent' && <span className="price-period">/mois</span>}
          </div>
        </div>

        <div className="detail-badges">
          <span className="badge badge-type">
            {apartment.listing_type === 'rent' ? 'Location' : 'Vente'}
          </span>
          <span className="badge badge-property">{apartment.property_type}</span>
          {apartment.available && <span className="badge badge-available">Disponible</span>}
        </div>

        <div className="detail-specs">
          {apartment.surface && (
            <div className="spec">
              <span className="spec-value">{apartment.surface}</span>
              <span className="spec-label">m²</span>
            </div>
          )}
          {apartment.rooms && (
            <div className="spec">
              <span className="spec-value">{apartment.rooms}</span>
              <span className="spec-label">pieces</span>
            </div>
          )}
        </div>

        {apartment.description && (
          <div className="detail-description">
            <h2>Description</h2>
            <p>{apartment.description}</p>
          </div>
        )}

        {apartment.tags && apartment.tags.length > 0 && (
          <div className="detail-tags">
            {apartment.tags.map((tag, i) => (
              <span key={i} className="tag">{tag}</span>
            ))}
          </div>
        )}

        {user && (
          <div className="detail-actions">
            <button
              className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline'}`}
              onClick={toggleFavorite}
            >
              {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

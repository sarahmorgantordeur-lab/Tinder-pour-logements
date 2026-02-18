import { useState, useEffect } from 'react';
import { swipeAPI } from '../services/api';

export default function Swipe() {
  const [apartments, setApartments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [swiping, setSwiping] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    loadApartments();
  }, []);

  const loadApartments = async () => {
    try {
      const res = await swipeAPI.getApartmentsToSwipe();
      setApartments(res.data.apartments || res.data || []);
    } catch (err) {
      setError('Impossible de charger les logements');
    } finally {
      setLoading(false);
    }
  };

  const handleSwipe = async (direction) => {
    if (swiping) return;
    const apartment = apartments[currentIndex];
    if (!apartment) return;

    setSwiping(direction);
    try {
      await swipeAPI.swipe(apartment.id, direction);
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setSwiping(null);
      }, 300);
    } catch {
      setSwiping(null);
    }
  };

  if (loading) return <div className="page-loader">Chargement...</div>;
  if (error) return <div className="page-error">{error}</div>;

  const apartment = apartments[currentIndex];

  if (!apartment) {
    return (
      <div className="swipe-page">
        <div className="swipe-empty">
          <h2>Plus de logements disponibles</h2>
          <p>Revenez plus tard pour de nouvelles annonces !</p>
          <button onClick={() => { setCurrentIndex(0); loadApartments(); }} className="btn btn-primary">
            Rafraichir
          </button>
        </div>
      </div>
    );
  }

  const mainImage = apartment.pictures?.[0]?.url || apartment.Pictures?.[0]?.url;

  return (
    <div className="swipe-page">
      <div className={`swipe-card ${swiping ? `swipe-${swiping}` : ''}`}>
        <div className="swipe-card-image">
          {mainImage ? (
            <img src={mainImage} alt={apartment.title} />
          ) : (
            <div className="swipe-card-no-image">Pas de photo</div>
          )}
          <div className="swipe-card-badges">
            <span className="badge badge-type">
              {apartment.listing_type === 'rent' ? 'Location' : 'Vente'}
            </span>
            <span className="badge badge-property">
              {apartment.property_type}
            </span>
          </div>
        </div>

        <div className="swipe-card-info">
          <h2>{apartment.title}</h2>
          <p className="swipe-card-price">
            {apartment.price?.toLocaleString('fr-FR')} {apartment.listing_type === 'rent' ? '€/mois' : '€'}
          </p>
          <p className="swipe-card-location">
            {apartment.city}{apartment.postal_code ? ` (${apartment.postal_code})` : ''}
          </p>
          <div className="swipe-card-details">
            {apartment.surface && <span>{apartment.surface} m²</span>}
            {apartment.rooms && <span>{apartment.rooms} pieces</span>}
          </div>
          {apartment.description && (
            <p className="swipe-card-description">{apartment.description}</p>
          )}
        </div>
      </div>

      <div className="swipe-actions">
        <button
          className="swipe-btn swipe-btn-dislike"
          onClick={() => handleSwipe('dislike')}
          disabled={!!swiping}
        >
          ✕
        </button>
        <button
          className="swipe-btn swipe-btn-like"
          onClick={() => handleSwipe('like')}
          disabled={!!swiping}
        >
          ♥
        </button>
      </div>

      <div className="swipe-counter">
        {currentIndex + 1} / {apartments.length}
      </div>
    </div>
  );
}

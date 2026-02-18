import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Landing() {
  const { user } = useAuth();

  return (
    <div className="landing">
      <div className="landing-hero">
        <h1>FindMyRoof</h1>
        <p className="landing-tagline">
          Trouvez votre logement ideal en un swipe
        </p>
        <p className="landing-description">
          Parcourez des centaines d'annonces, likez celles qui vous plaisent
          et entrez en contact directement avec les proprietaires.
        </p>

        <div className="landing-actions">
          {user ? (
            <Link to="/swipe" className="btn btn-primary btn-lg">
              Commencer a swiper
            </Link>
          ) : (
            <>
              <Link to="/register" className="btn btn-primary btn-lg">
                S'inscrire gratuitement
              </Link>
              <Link to="/login" className="btn btn-outline btn-lg">
                Se connecter
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="landing-features">
        <div className="feature-card">
          <div className="feature-icon">🏠</div>
          <h3>Parcourez</h3>
          <p>Des centaines de logements disponibles pres de chez vous</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💖</div>
          <h3>Swipez</h3>
          <p>Likez les logements qui vous plaisent, passez les autres</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Matchez</h3>
          <p>Echangez directement avec les proprietaires interesses</p>
        </div>
      </div>
    </div>
  );
}

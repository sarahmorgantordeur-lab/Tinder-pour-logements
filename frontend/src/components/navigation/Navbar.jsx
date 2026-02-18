import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isOwnerOrAgency = user?.role === 'owner' || user?.role === 'agency';
  const isAdmin = user?.role === 'admin';

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        FindMyRoof
      </Link>

      <div className="navbar-links">
        {user ? (
          <>
            <Link to="/apartments">Explorer</Link>
            {!isOwnerOrAgency && !isAdmin && (
              <>
                <Link to="/swipe">Swiper</Link>
                <Link to="/matches">Matches</Link>
                <Link to="/favorites">Favoris</Link>
              </>
            )}
            {isOwnerOrAgency && (
              <>
                <Link to="/my-apartments">Mes annonces</Link>
                <Link to="/owner/matches">Matches</Link>
                <Link to="/owner/requests">Candidatures</Link>
              </>
            )}
            {isAdmin && <Link to="/admin">Admin</Link>}
            <Link to="/profile">Profil</Link>
            <button onClick={handleLogout} className="btn btn-outline btn-sm">
              Deconnexion
            </button>
          </>
        ) : (
          <>
            <Link to="/apartments">Explorer</Link>
            <Link to="/login" className="btn btn-outline btn-sm">
              Connexion
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm">
              S'inscrire
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

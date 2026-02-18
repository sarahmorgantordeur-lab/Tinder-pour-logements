import { useState, useEffect } from 'react';
import { adminAPI } from '../services/api';

export default function Admin() {
  const [tab, setTab] = useState('users');
  const [users, setUsers] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [tab]);

  const loadData = async () => {
    setLoading(true);
    try {
      if (tab === 'users') {
        const res = await adminAPI.listUsers();
        setUsers(res.data.users || res.data || []);
      } else if (tab === 'apartments') {
        const res = await adminAPI.listApartments();
        setApartments(res.data.apartments || res.data || []);
      } else if (tab === 'matches') {
        const res = await adminAPI.listMatches();
        setMatches(res.data.matches || res.data || []);
      }
    } catch { /* ignore */ }
    finally { setLoading(false); }
  };

  const handleBan = async (id, banned) => {
    try {
      await adminAPI.setUserBan(id, !banned);
      setUsers((prev) => prev.map((u) => u.id === id ? { ...u, is_banned: !banned } : u));
    } catch { /* ignore */ }
  };

  const handleDeleteUser = async (id) => {
    if (!confirm('Supprimer cet utilisateur ?')) return;
    try {
      await adminAPI.deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch { /* ignore */ }
  };

  const handleDeleteApartment = async (id) => {
    if (!confirm('Supprimer cette annonce ?')) return;
    try {
      await adminAPI.deleteApartment(id);
      setApartments((prev) => prev.filter((a) => a.id !== id));
    } catch { /* ignore */ }
  };

  const handleDeleteMatch = async (id) => {
    if (!confirm('Supprimer ce match ?')) return;
    try {
      await adminAPI.deleteMatch(id);
      setMatches((prev) => prev.filter((m) => m.id !== id));
    } catch { /* ignore */ }
  };

  const handleRoleChange = async (id, role) => {
    try {
      await adminAPI.updateUserRole(id, role);
      setUsers((prev) => prev.map((u) => u.id === id ? { ...u, role } : u));
    } catch { /* ignore */ }
  };

  return (
    <div className="admin-page">
      <h1>Administration</h1>

      <div className="admin-tabs">
        <button className={`tab ${tab === 'users' ? 'active' : ''}`} onClick={() => setTab('users')}>
          Utilisateurs
        </button>
        <button className={`tab ${tab === 'apartments' ? 'active' : ''}`} onClick={() => setTab('apartments')}>
          Logements
        </button>
        <button className={`tab ${tab === 'matches' ? 'active' : ''}`} onClick={() => setTab('matches')}>
          Matches
        </button>
      </div>

      {loading ? (
        <div className="page-loader">Chargement...</div>
      ) : (
        <div className="admin-content">
          {tab === 'users' && (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Utilisateur</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                    <td>
                      <select value={u.role} onChange={(e) => handleRoleChange(u.id, e.target.value)}>
                        <option value="user">User</option>
                        <option value="owner">Owner</option>
                        <option value="agency">Agency</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td>
                      <span className={`badge ${u.is_banned ? 'badge-danger' : 'badge-success'}`}>
                        {u.is_banned ? 'Banni' : 'Actif'}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline" onClick={() => handleBan(u.id, u.is_banned)}>
                        {u.is_banned ? 'Debannir' : 'Bannir'}
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDeleteUser(u.id)}>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {tab === 'apartments' && (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Titre</th>
                  <th>Ville</th>
                  <th>Prix</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {apartments.map((a) => (
                  <tr key={a.id}>
                    <td>{a.title}</td>
                    <td>{a.city}</td>
                    <td>{a.price?.toLocaleString('fr-FR')} €</td>
                    <td>{a.listing_type}</td>
                    <td>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDeleteApartment(a.id)}>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {tab === 'matches' && (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Utilisateur</th>
                  <th>Logement</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {matches.map((m) => (
                  <tr key={m.id}>
                    <td>{(m.user || m.User)?.username || 'N/A'}</td>
                    <td>{(m.apartment || m.Apartment)?.title || 'N/A'}</td>
                    <td>{new Date(m.created_at).toLocaleDateString('fr-FR')}</td>
                    <td>
                      <button className="btn btn-sm btn-danger" onClick={() => handleDeleteMatch(m.id)}>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}

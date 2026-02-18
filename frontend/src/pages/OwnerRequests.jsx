import { useState, useEffect } from 'react';
import { requestAPI } from '../services/api';

const STATUS_LABELS = {
  waiting: 'En attente',
  contacted: 'Contacte',
  visit_planned: 'Visite prevue',
  accepted: 'Accepte',
  refused: 'Refuse',
};

export default function OwnerRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await requestAPI.getAllForOwner();
        setRequests(res.data.requests || res.data || []);
      } catch { /* ignore */ }
      finally { setLoading(false); }
    };
    load();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await requestAPI.updateStatus(id, { status });
      setRequests((prev) => prev.map((r) => r.id === id ? { ...r, status } : r));
    } catch { /* ignore */ }
  };

  if (loading) return <div className="page-loader">Chargement...</div>;

  return (
    <div className="requests-page">
      <h1>Candidatures recues</h1>

      {requests.length === 0 ? (
        <p className="requests-empty">Aucune candidature pour le moment</p>
      ) : (
        <div className="requests-list">
          {requests.map((req) => {
            const apt = req.apartment || req.Apartment;
            const applicant = req.user || req.User;
            return (
              <div key={req.id} className="request-card">
                <div className="request-info">
                  <h3>{apt?.title || 'Logement'}</h3>
                  <p>Candidat : <strong>{applicant?.username || applicant?.email}</strong></p>
                  <span className={`badge badge-status-${req.status}`}>
                    {STATUS_LABELS[req.status] || req.status}
                  </span>
                </div>
                <div className="request-actions">
                  <select
                    value={req.status}
                    onChange={(e) => updateStatus(req.id, e.target.value)}
                  >
                    {Object.entries(STATUS_LABELS).map(([val, label]) => (
                      <option key={val} value={val}>{label}</option>
                    ))}
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

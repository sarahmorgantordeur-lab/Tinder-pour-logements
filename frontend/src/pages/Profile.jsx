import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { userAPI } from '../services/api';

export default function Profile() {
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    bio: '',
    job: '',
    income: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const load = async () => {
      try {
        const res = await userAPI.getProfile();
        const profile = res.data.user || res.data;
        setFormData({
          username: profile.username || '',
          phone: profile.phone || '',
          bio: profile.profile?.bio || profile.Profile?.bio || '',
          job: profile.profile?.job || profile.Profile?.job || '',
          income: profile.profile?.income || profile.Profile?.income || '',
        });
      } catch { /* ignore */ }
      finally { setLoading(false); }
    };
    load();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      await userAPI.updateProfile(formData);
      updateUser(formData);
      setMessage('Profil mis a jour !');
    } catch (err) {
      setMessage(err.response?.data?.message || 'Erreur lors de la mise a jour');
    } finally {
      setSaving(false);
    }
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('avatar', file);
    try {
      const res = await userAPI.uploadAvatar(formData);
      updateUser({ avatar: res.data.avatar || res.data.url });
      setMessage('Avatar mis a jour !');
    } catch {
      setMessage("Erreur lors de l'upload");
    }
  };

  if (loading) return <div className="page-loader">Chargement...</div>;

  return (
    <div className="profile-page">
      <h1>Mon Profil</h1>

      {message && <div className="profile-message">{message}</div>}

      <div className="profile-avatar-section">
        <div className="profile-avatar">
          {user?.avatar ? (
            <img src={user.avatar} alt="Avatar" />
          ) : (
            <div className="profile-avatar-placeholder">
              {user?.username?.charAt(0)?.toUpperCase() || '?'}
            </div>
          )}
        </div>
        <label className="btn btn-outline btn-sm">
          Changer l'avatar
          <input type="file" accept="image/*" onChange={handleAvatarUpload} hidden />
        </label>
      </div>

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label>Email</label>
          <input type="email" value={user?.email || ''} disabled />
        </div>

        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Telephone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={3}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Metier</label>
            <input
              name="job"
              value={formData.job}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Revenus mensuels</label>
            <input
              name="income"
              type="number"
              value={formData.income}
              onChange={handleChange}
              placeholder="€"
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={saving}>
          {saving ? 'Sauvegarde...' : 'Sauvegarder'}
        </button>
      </form>
    </div>
  );
}

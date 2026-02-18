import { useState, useEffect } from 'react';
import { matchAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function Matches() {
  const { user } = useAuth();
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const isOwner = user?.role === 'owner' || user?.role === 'agency';

  useEffect(() => {
    loadMatches();
  }, []);

  const loadMatches = async () => {
    try {
      const res = isOwner
        ? await matchAPI.getOwnerMatches()
        : await matchAPI.getUserMatches();
      setMatches(res.data.matches || res.data || []);
    } catch { /* ignore */ }
    finally { setLoading(false); }
  };

  const openChat = async (match) => {
    setSelectedMatch(match);
    try {
      const res = await matchAPI.getMessages(match.id);
      setMessages(res.data.messages || res.data || []);
    } catch { /* ignore */ }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedMatch) return;
    try {
      const res = await matchAPI.sendMessage(selectedMatch.id, newMessage);
      setMessages((prev) => [...prev, res.data.message || res.data]);
      setNewMessage('');
    } catch { /* ignore */ }
  };

  if (loading) return <div className="page-loader">Chargement...</div>;

  return (
    <div className="matches-page">
      <div className="matches-sidebar">
        <h2>Mes Matches</h2>
        {matches.length === 0 ? (
          <p className="matches-empty">Aucun match pour le moment</p>
        ) : (
          <div className="matches-list">
            {matches.map((match) => {
              const apt = match.apartment || match.Apartment;
              const otherUser = isOwner ? (match.user || match.User) : null;
              return (
                <div
                  key={match.id}
                  className={`match-item ${selectedMatch?.id === match.id ? 'active' : ''}`}
                  onClick={() => openChat(match)}
                >
                  <div className="match-item-info">
                    <h4>{apt?.title || 'Logement'}</h4>
                    {otherUser && <p>{otherUser.username}</p>}
                    <p className="match-item-city">{apt?.city}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="matches-chat">
        {selectedMatch ? (
          <>
            <div className="chat-header">
              <h3>{(selectedMatch.apartment || selectedMatch.Apartment)?.title}</h3>
            </div>
            <div className="chat-messages">
              {messages.length === 0 ? (
                <p className="chat-empty">Commencez la conversation !</p>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`chat-message ${msg.sender_id === user.id ? 'sent' : 'received'}`}
                  >
                    <p>{msg.content}</p>
                    <span className="chat-time">
                      {new Date(msg.created_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))
              )}
            </div>
            <form className="chat-input" onSubmit={sendMessage}>
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Votre message..."
              />
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </>
        ) : (
          <div className="chat-placeholder">
            <p>Selectionnez un match pour commencer a discuter</p>
          </div>
        )}
      </div>
    </div>
  );
}

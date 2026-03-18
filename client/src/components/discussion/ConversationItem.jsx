import { displayLastMessage, formatTime } from "../../utils/discussion";

const SERVER_URL = import.meta.env.VITE_API_URL?.replace('/api', '') || '';

export default function ConversationItem({ conv, isActive, currentUserId, onClick }) {
    const lastMsg = conv.messages?.[0];
    const unread = conv._count?.messages ?? 0;
    const photoPath = conv.property?.photos?.[0]?.url;
    const photo = photoPath ? `${SERVER_URL}${photoPath}` : null;
    const city = conv.property?.address?.city;
    const otherUser = conv.tenant_id === currentUserId ? conv.owner : conv.tenant;

    return (
        <button
            className={`discussion-conv-item ${isActive ? "discussion-conv-item--active" : ""}`}
            onClick={onClick}
        >
            <div className="discussion-conv-photo">
                {photo ? (
                    <img src={photo} alt={conv.property?.title} />
                ) : (
                    <div className="discussion-conv-photo--placeholder" />
                )}
            </div>
            <div className="discussion-conv-info">
                <p className="discussion-conv-title">{conv.property?.title}</p>
                <p className="discussion-conv-subtitle">
                    {city && <span>{city} · </span>}
                    {otherUser?.firstname} {otherUser?.lastname}
                </p>
                {lastMsg && (
                    <p className="discussion-conv-last">
                        {lastMsg.sender?.id === currentUserId ? "Vous : " : ""}
                        {displayLastMessage(lastMsg.content)}
                    </p>
                )}
            </div>
            <div className="discussion-conv-meta">
                {lastMsg && (
                    <span className="discussion-conv-time">{formatTime(lastMsg.created_at)}</span>
                )}
                {unread > 0 && (
                    <span className="discussion-conv-badge">{unread}</span>
                )}
            </div>
        </button>
    );
}

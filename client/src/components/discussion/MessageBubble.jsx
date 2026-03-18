import { useRef } from "react";
import { parseContent, formatTime } from "../../utils/discussion";

const SERVER_URL = import.meta.env.VITE_API_URL?.replace('/api', '') || '';

export default function MessageBubble({ msg, isOwn, isTenant, onDocUpload }) {
    const parsed = parseContent(msg.content);
    const fileInputRef = useRef(null);
    const initials =
        msg.sender?.firstname?.[0]?.toUpperCase() +
        (msg.sender?.lastname?.[0]?.toUpperCase() ?? "");

    const renderContent = () => {
        if (parsed?.type === "doc_request") {
            return (
                <div className="discussion-doc-card discussion-doc-card--request">
                    <div className="discussion-doc-header">
                        <span className="discussion-doc-icon">📋</span>
                        <div className="discussion-doc-info">
                            <p className="discussion-doc-title">Demande de document</p>
                            <p className="discussion-doc-text">
                                {parsed.text || "Veuillez renvoyer ce document complété."}
                            </p>
                        </div>
                    </div>
                    {parsed.templateUrl && (
                        <a
                            href={`${SERVER_URL}${parsed.templateUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="discussion-doc-template-link"
                        >
                            📥 Télécharger le document vierge
                            {parsed.templateLabel ? ` — ${parsed.templateLabel}` : ""}
                        </a>
                    )}
                    {isTenant && (
                        <>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept=".pdf"
                                style={{ display: "none" }}
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) onDocUpload(file);
                                    e.target.value = "";
                                }}
                            />
                            <button
                                className="discussion-doc-upload-btn"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                📎 Envoyer le document complété
                            </button>
                        </>
                    )}
                </div>
            );
        }

        if (parsed?.type === "doc_upload") {
            return (
                <div className="discussion-doc-card discussion-doc-card--upload">
                    <span className="discussion-doc-icon">📎</span>
                    <div className="discussion-doc-info">
                        <p className="discussion-doc-title">Document envoyé</p>
                        <a
                            href={`${SERVER_URL}${parsed.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="discussion-doc-link"
                        >
                            {parsed.label || "Voir le document"}
                        </a>
                    </div>
                </div>
            );
        }

        if (parsed?.type === "image") {
            return (
                <img
                    src={`${SERVER_URL}${parsed.url}`}
                    alt={parsed.label || "photo"}
                    className="discussion-msg-image"
                />
            );
        }

        return <p>{msg.content}</p>;
    };

    return (
        <div className={`discussion-msg ${isOwn ? "discussion-msg--own" : "discussion-msg--other"}`}>
            {!isOwn && (
                <div className="discussion-msg-avatar">
                    {msg.sender?.avatar ? (
                        <img src={msg.sender.avatar} alt={msg.sender.firstname} />
                    ) : (
                        <span>{initials}</span>
                    )}
                </div>
            )}
            <div className="discussion-msg-body">
                {!isOwn && (
                    <p className="discussion-msg-name">
                        {msg.sender?.firstname} {msg.sender?.lastname}
                    </p>
                )}
                <div className={`discussion-msg-bubble${parsed ? " discussion-msg-bubble--doc" : ""}`}>
                    {renderContent()}
                </div>
                <span className="discussion-msg-time">{formatTime(msg.created_at)}</span>
            </div>
        </div>
    );
}

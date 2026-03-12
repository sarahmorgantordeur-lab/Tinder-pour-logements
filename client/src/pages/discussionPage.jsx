import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import api from "../api";
import Headers from "../layouts/components/Headers";
import Footer from "../layouts/components/Footer";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";

function formatTime(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const isToday =
        date.getDate() === now.getDate() &&
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear();

    if (isToday) {
        return date.toLocaleTimeString("fr-BE", { hour: "2-digit", minute: "2-digit" });
    }
    return date.toLocaleDateString("fr-BE", { day: "2-digit", month: "2-digit" });
}

function ConversationItem({ conv, isActive, currentUserId, onClick }) {
    const lastMsg = conv.messages?.[0];
    const unread = conv._count?.messages ?? 0;
    const photo = conv.property?.photos?.[0]?.url;
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
                        {lastMsg.content}
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

function MessageBubble({ msg, isOwn }) {
    const initials =
        msg.sender?.firstname?.[0]?.toUpperCase() +
        (msg.sender?.lastname?.[0]?.toUpperCase() ?? "");

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
                <div className="discussion-msg-bubble">
                    <p>{msg.content}</p>
                </div>
                <span className="discussion-msg-time">{formatTime(msg.created_at)}</span>
            </div>
        </div>
    );
}

export default function DiscussionPage() {
    const { user } = useAuth();
    const isOwnerOrAgency = user?.role === "owner" || user?.role === "agency";
    const [searchParams] = useSearchParams();
    const filterPropertyId = searchParams.get("property");

    const [conversations, setConversations] = useState([]);
    const [activeId, setActiveId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [draft, setDraft] = useState("");
    const [loadingConvs, setLoadingConvs] = useState(true);
    const [loadingMsgs, setLoadingMsgs] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(null);
    const [activeProperty, setActiveProperty] = useState(null);

    const messagesEndRef = useRef(null);

    useEffect(() => {
        const endpoint = isOwnerOrAgency ? "/conversations/owner" : "/conversations";
        api.get(endpoint)
            .then(({ data }) => {
                setConversations(data.conversations);
                if (filterPropertyId) {
                    const first = data.conversations.find(
                        (c) => c.property_id === filterPropertyId
                    );
                    if (first) setActiveId(first.id);
                }
            })
            .catch(() => setError("Impossible de charger les conversations."))
            .finally(() => setLoadingConvs(false));
    }, [isOwnerOrAgency]);

    useEffect(() => {
        if (!activeId) return;
        setLoadingMsgs(true);
        setMessages([]);

        api.get(`/conversations/${activeId}/messages`)
            .then(({ data }) => setMessages(data.messages))
            .catch(() => setError("Impossible de charger les messages."))
            .finally(() => setLoadingMsgs(false));
    }, [activeId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSelectConv = (convId) => {
        setActiveId(convId);
        setDraft("");
        setError(null);
        setConversations((prev) =>
            prev.map((c) =>
                c.id === convId ? { ...c, _count: { messages: 0 } } : c
            )
        );
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!draft.trim() || !activeId) return;

        setSending(true);
        setError(null);
        try {
            const { data } = await api.post(`/conversations/${activeId}/messages`, {
                content: draft.trim(),
            });
            setMessages((prev) => [...prev, data.data]);
            setDraft("");

            setConversations((prev) =>
                prev.map((c) =>
                    c.id === activeId
                        ? {
                            ...c,
                              messages: [
                                  {
                                      ...data.data,
                                      sender: {
                                          id: user.id,
                                          firstname: user.firstname,
                                          lastname: user.lastname,
                                      },
                                  },
                              ],
                          }
                        : c
                )
            );
        } catch (err) {
            setError(err.message || "Erreur lors de l'envoi.");
        } finally {
            setSending(false);
        }
    };

    const activeConv = conversations.find((c) => c.id === activeId);

    const properties = isOwnerOrAgency
        ? [...new Map(conversations.filter(c => c.property_id).map(c => [c.property_id, c.property])).values()]
        : [];


    return (
        <div className="discussion-page">
            <Headers />
            <main className="discussion-main">
                <aside className="discussion-sidebar">
                    <h2 className="discussion-sidebar-title">Messages</h2>

                    {isOwnerOrAgency && properties.length > 1 && (
                        <div className="discussion-filter">
                            <Select
                                options={[
                                    { value: "", label: "Tous les logements" },
                                    ...properties.map((p) => ({ value: p.id, label: p.title })),
                                ]}
                                value={activeProperty ?? ""}
                                onChange={(e) => setActiveProperty(e.target.value || null)}
                            />
                        </div>
                    )}

                    {loadingConvs && (
                        <p className="discussion-loading">Chargement...</p>
                    )}

                    {!loadingConvs && conversations.length === 0 && (
                        <p className="discussion-empty">Aucune conversation pour le moment.</p>
                    )}

                    <div className="discussion-conv-list">
                        {isOwnerOrAgency ? (
                            Object.entries(
                                conversations.reduce((groups, conv) => {
                                    const key = conv.property_id;
                                    if (!groups[key]) groups[key] = { property: conv.property, convs: [] };
                                    groups[key].convs.push(conv);
                                    return groups;
                                }, {})
                            ).filter(([propertyId]) => !activeProperty || propertyId === activeProperty)
                            .map(([propertyId, { property, convs }]) => (
                                <div key={propertyId} className="discussion-property-group">
                                    <p className="discussion-property-group-title">
                                        {property?.title ?? propertyId}
                                        <span className="discussion-property-group-city">
                                            {property?.address?.city ? ` · ${property.address.city}` : ""}
                                        </span>
                                    </p>
                                    {convs.map((conv) => (
                                        <ConversationItem
                                            key={conv.id}
                                            conv={conv}
                                            isActive={conv.id === activeId}
                                            currentUserId={user?.id}
                                            onClick={() => handleSelectConv(conv.id)}
                                        />
                                    ))}
                                </div>
                            ))
                        ) : (
                            conversations.map((conv) => (
                                <ConversationItem
                                    key={conv.id}
                                    conv={conv}
                                    isActive={conv.id === activeId}
                                    currentUserId={user?.id}
                                    onClick={() => handleSelectConv(conv.id)}
                                />
                            ))
                        )}
                    </div>
                </aside>

                <section className="discussion-thread">
                    {!activeId ? (
                        <div className="discussion-thread-empty">
                            <p>Selectionnez une conversation pour voir les messages.</p>
                        </div>
                    ) : (
                        <>
                            <header className="discussion-thread-header">
                                <p className="discussion-thread-property">
                                    {activeConv?.property?.title}
                                </p>
                                <p className="discussion-thread-city">
                                    {activeConv?.property?.address?.city}
                                </p>
                                {isOwnerOrAgency && activeConv?.tenant?.id && (
                                    <Link
                                        to={`/users/${activeConv.tenant.id}`}
                                        className="discussion-view-profile-btn"
                                    >
                                        Voir le profil de {activeConv.tenant.firstname} {activeConv.tenant.lastname}
                                    </Link>
                                )}
                            </header>

                            <div className="discussion-messages">
                                {loadingMsgs && (
                                    <p className="discussion-loading">Chargement des messages...</p>
                                )}

                                {!loadingMsgs && messages.length === 0 && (
                                    <p className="discussion-messages-empty">
                                        Aucun message. Soyez le premier a ecrire !
                                    </p>
                                )}

                                {messages.map((msg) => (
                                    <MessageBubble
                                        key={msg.id}
                                        msg={msg}
                                        isOwn={msg.sender?.id === user?.id}
                                    />
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            <form className="discussion-send-form" onSubmit={handleSend}>
                                {error && (
                                    <p className="discussion-error">{error}</p>
                                )}
                                <div className="discussion-send-row">
                                    <TextInput
                                        className="discussion-send-input"
                                        type="text"
                                        placeholder="Ecrivez un message..."
                                        value={draft}
                                        onChange={(e) => setDraft(e.target.value)}
                                        disabled={sending}
                                    />
                                    <Button
                                        className="discussion-send-btn"
                                        type="submit"
                                        disabled={sending || !draft.trim()}
                                    >
                                        {sending ? "..." : "Envoyer"}
                                    </Button>
                                </div>
                            </form>
                        </>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import Headers from "../layouts/components/Headers";
import Footer from "../layouts/components/Footer";
import Select from "../components/ui/Select";
import Button from "../components/ui/Button";
import TextInput from "../components/ui/TextInput";
import ConversationItem from "../components/discussion/ConversationItem";
import MessageBubble from "../components/discussion/MessageBubble";
import ApartmentModal from "../components/cards/ApartmentModal";
import { useDiscussion } from "../hooks/useDiscussion";
import SendIcon from "../assets/icons/send-message.svg?react";

export default function DiscussionPage() {
    const {
        user,
        conversations,
        activeId,
        activeConv,
        messages,
        draft,
        setDraft,
        loadingConvs,
        loadingMsgs,
        sending,
        error,
        activeProperty,
        setActiveProperty,
        properties,
        isOwnerOrAgency,
        isTenant,
        messagesEndRef,
        docRequestInputRef,
        photoInputRef,
        handleSelectConv,
        handleSend,
        handleRequestDocFile,
        handleSendPhoto,
        handleDocUpload,
    } = useDiscussion();

    const [mobileView, setMobileView] = useState("list");
    const [showPropertyModal, setShowPropertyModal] = useState(false);

    const handleSelectConvMobile = (id) => {
        handleSelectConv(id);
        setMobileView("thread");
    };

    return (
        <div className="discussion-page">
            <Headers />
            <main className="discussion-main">
                <aside className={`discussion-sidebar${mobileView === "thread" ? " discussion-sidebar--hidden-mobile" : ""}`}>
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
                            )
                            .filter(([propertyId]) => !activeProperty || propertyId === activeProperty)
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
                                            onClick={() => handleSelectConvMobile(conv.id)}
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
                                    onClick={() => handleSelectConvMobile(conv.id)}
                                />
                            ))
                        )}
                    </div>
                </aside>

                <section className={`discussion-thread${mobileView === "list" ? " discussion-thread--hidden-mobile" : ""}`}>
                    {!activeId ? (
                        <div className="discussion-thread-empty">
                            <p>Selectionnez une conversation pour voir les messages.</p>
                        </div>
                    ) : (
                        <>
                            <header className="discussion-thread-header">
                                <button
                                    className="discussion-back-btn"
                                    onClick={() => setMobileView("list")}
                                >
                                    ← Retour
                                </button>
                                <p className="discussion-thread-property">
                                    {activeConv?.property?.title}
                                </p>
                                <p className="discussion-thread-city">
                                    {activeConv?.property?.address?.city}
                                </p>
                                {isTenant && activeConv?.property && (
                                    <button
                                        className="discussion-view-property-btn"
                                        onClick={() => setShowPropertyModal(true)}
                                    >
                                        Voir le logement
                                    </button>
                                )}
                                {isOwnerOrAgency && activeConv?.tenant?.id && (
                                    <div className="discussion-thread-actions">
                                        <Link
                                            to={`/users/${activeConv.tenant.id}`}
                                            className="discussion-view-profile-btn"
                                        >
                                            Voir le profil de {activeConv.tenant.firstname} {activeConv.tenant.lastname}
                                        </Link>
                                        <input
                                            ref={docRequestInputRef}
                                            type="file"
                                            accept=".pdf,.jpg,.jpeg,.png,.webp"
                                            style={{ display: "none" }}
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) handleRequestDocFile(file);
                                                e.target.value = "";
                                            }}
                                        />
                                        <button
                                            className="discussion-doc-request-btn"
                                            onClick={() => docRequestInputRef.current?.click()}
                                            disabled={sending}
                                        >
                                            📋 Demander un document
                                        </button>
                                    </div>
                                )}
                            </header>

                            <div className="discussion-messages">
                                {loadingMsgs && (
                                    <p className="discussion-loading">Chargement des messages...</p>
                                )}

                                {!loadingMsgs && messages.length === 0 && (
                                    <p className="discussion-messages-empty">
                                        Aucun message. Soyez le premier à ecrire !
                                    </p>
                                )}

                                {messages.map((msg) => (
                                    <MessageBubble
                                        key={msg.id}
                                        msg={msg}
                                        isOwn={msg.sender?.id === user?.id}
                                        isTenant={isTenant}
                                        onDocUpload={handleDocUpload}
                                    />
                                ))}
                                <div ref={messagesEndRef} />
                            </div>

                            <form className="discussion-send-form" onSubmit={handleSend}>
                                {error && (
                                    <p className="discussion-error">{error}</p>
                                )}
                                <div className="discussion-send-row">
                                    {isOwnerOrAgency && (
                                        <>
                                            <input
                                                ref={photoInputRef}
                                                type="file"
                                                accept=".jpg,.jpeg,.png,.webp"
                                                style={{ display: "none" }}
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) handleSendPhoto(file);
                                                    e.target.value = "";
                                                }}
                                            />
                                            <button
                                                type="button"
                                                className="discussion-photo-btn"
                                                onClick={() => photoInputRef.current?.click()}
                                                disabled={sending}
                                                title="Envoyer une photo"
                                            >
                                                🖼️
                                            </button>
                                        </>
                                    )}
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
                                        title="Envoyer"
                                    >
                                        {sending
                                            ? "..."
                                            : <><span className="discussion-send-btn__text">Envoyer</span><SendIcon className="discussion-send-btn__icon" /></>
                                        }
                                    </Button>
                                </div>
                            </form>
                        </>
                    )}
                </section>
            </main>
            <Footer />
            {showPropertyModal && activeConv?.property && (
                <ApartmentModal
                    appartement={{
                        ...activeConv.property,
                        city: activeConv.property.address?.city,
                        postal_code: activeConv.property.address?.postal_code,
                    }}
                    onClose={() => setShowPropertyModal(false)}
                    isOwner={false}
                />
            )}
        </div>
    );
}

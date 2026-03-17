import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "./useAuth";
import api from "../api";
import { uploadFile } from "../utils/discussion";

export function useDiscussion() {
    const { user } = useAuth();
    const isOwnerOrAgency = user?.role === "owner" || user?.role === "agency";
    const isTenant = user?.role === "user";
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
    const docRequestInputRef = useRef(null);
    const photoInputRef = useRef(null);

    // Charger les conversations
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

    // Charger les messages de la conversation active
    useEffect(() => {
        if (!activeId) return;
        setLoadingMsgs(true);
        setMessages([]);

        api.get(`/conversations/${activeId}/messages`)
            .then(({ data }) => setMessages(data.messages))
            .catch(() => setError("Impossible de charger les messages."))
            .finally(() => setLoadingMsgs(false));
    }, [activeId]);

    // Scroll automatique vers le dernier message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const pushMessage = (newMsg) => {
        setMessages((prev) => [...prev, newMsg]);
        setConversations((prev) =>
            prev.map((c) =>
                c.id === activeId
                    ? {
                        ...c,
                        messages: [{
                            ...newMsg,
                            sender: { id: user.id, firstname: user.firstname, lastname: user.lastname },
                        }],
                    }
                    : c
            )
        );
    };

    const sendMessage = async (content) => {
        const { data } = await api.post(`/conversations/${activeId}/messages`, { content });
        pushMessage(data.data);
    };

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
            await sendMessage(draft.trim());
            setDraft("");
        } catch (err) {
            setError(err.message || "Erreur lors de l'envoi.");
        } finally {
            setSending(false);
        }
    };

    const handleRequestDocFile = async (file) => {
        setSending(true);
        setError(null);
        try {
            const doc = await uploadFile(file);
            await sendMessage(
                JSON.stringify({
                    type: "doc_request",
                    text: "Veuillez remplir et renvoyer ce document complété.",
                    templateUrl: doc.url,
                    templateLabel: file.name,
                })
            );
        } catch (err) {
            setError(err.message || "Erreur lors de l'envoi.");
        } finally {
            setSending(false);
        }
    };

    const handleSendPhoto = async (file) => {
        setSending(true);
        setError(null);
        try {
            const doc = await uploadFile(file);
            await sendMessage(
                JSON.stringify({ type: "image", url: doc.url, label: file.name })
            );
        } catch (err) {
            setError(err.message || "Erreur lors de l'envoi de la photo.");
        } finally {
            setSending(false);
        }
    };

    const handleDocUpload = async (file) => {
        setSending(true);
        setError(null);
        try {
            const doc = await uploadFile(file);
            await sendMessage(
                JSON.stringify({ type: "doc_upload", url: doc.url, label: file.name })
            );
        } catch (err) {
            setError(err.message || "Erreur lors de l'envoi du document.");
        } finally {
            setSending(false);
        }
    };

    const activeConv = conversations.find((c) => c.id === activeId);

    const properties = isOwnerOrAgency
        ? [...new Map(conversations.filter(c => c.property_id).map(c => [c.property_id, c.property])).values()]
        : [];

    return {
        // État
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
        // Rôles
        isOwnerOrAgency,
        isTenant,
        // Refs
        messagesEndRef,
        docRequestInputRef,
        photoInputRef,
        // Handlers
        handleSelectConv,
        handleSend,
        handleRequestDocFile,
        handleSendPhoto,
        handleDocUpload,
    };
}

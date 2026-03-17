const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export function formatTime(dateStr) {
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

export function parseContent(content) {
    try {
        const parsed = JSON.parse(content);
        if (parsed && typeof parsed === "object" && parsed.type) return parsed;
    } catch {}
    return null;
}

export function displayLastMessage(content) {
    const parsed = parseContent(content);
    if (parsed?.type === "doc_request") return "📋 Demande de document";
    if (parsed?.type === "doc_upload") return "📎 Document envoyé";
    if (parsed?.type === "image") return "🖼️ Photo";
    return content;
}

export async function uploadFile(file) {
    const token = localStorage.getItem("token");
    const formData = new FormData();
    formData.append("document", file);
    const res = await fetch(`${BASE_URL}/users/documents`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
    });
    if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Échec de l'upload.");
    }
    const { document } = await res.json();
    return document;
}

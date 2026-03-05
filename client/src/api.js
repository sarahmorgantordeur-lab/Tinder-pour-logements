const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
};

const handleResponse = async (res) => {
    const data = await res.json();
    if (!res.ok) {
        if (res.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/';
        }
        const err = new Error(data.message || 'Request failed');
        err.response = { data };
        throw err;
    }
    return { data };
};

const api = {
    get: (path) =>
        fetch(`${BASE_URL}${path}`, { headers: getAuthHeaders() }).then(handleResponse),

    post: (path, body) =>
        fetch(`${BASE_URL}${path}`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(body),
        }).then(handleResponse),

    put: (path, body) =>
        fetch(`${BASE_URL}${path}`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(body),
        }).then(handleResponse),

    patch: (path, body) =>
        fetch(`${BASE_URL}${path}`, {
            method: 'PATCH',
            headers: getAuthHeaders(),
            body: JSON.stringify(body),
        }).then(handleResponse),

    delete: (path) =>
        fetch(`${BASE_URL}${path}`, {
            method: 'DELETE',
            headers: getAuthHeaders(),
        }).then(handleResponse),
};

export default api;

import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth
export const authAPI = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
};

// User
export const userAPI = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data) => api.put('/users/profile', data),
  uploadAvatar: (formData) => api.post('/users/avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  getFavorites: () => api.get('/users/favorites'),
  addFavorite: (apartmentId) => api.post('/users/favorites', { apartment_id: apartmentId }),
  removeFavorite: (apartmentId) => api.delete(`/users/favorites/${apartmentId}`),
  getHistory: () => api.get('/users/history'),
  updatePreferences: (data) => api.put('/users/preferences', data),
};

// Apartments
export const apartmentAPI = {
  getAll: (params) => api.get('/apartments', { params }),
  getById: (id) => api.get(`/apartments/${id}`),
  create: (data) => api.post('/apartments', data),
  update: (id, data) => api.put(`/apartments/${id}`, data),
  delete: (id) => api.delete(`/apartments/${id}`),
  uploadPictures: (id, formData) => api.post(`/apartments/${id}/pictures`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  getMyApartments: () => api.get('/apartments/owner/my-apartments'),
  searchByLocation: (params) => api.get('/apartments/search/location', { params }),
  searchByAddress: (query) => api.get('/apartments/search/address', { params: { q: query } }),
};

// Swipes
export const swipeAPI = {
  swipe: (apartmentId, direction) => api.post('/swipes', { apartment_id: apartmentId, direction }),
  getApartmentsToSwipe: () => api.get('/swipes/apartments'),
  getHistory: () => api.get('/swipes/history'),
  deleteSwipe: (apartmentId) => api.delete(`/swipes/${apartmentId}`),
  getReceivedLikes: () => api.get('/swipes/likes/received'),
};

// Matches
export const matchAPI = {
  getUserMatches: () => api.get('/matches'),
  getOwnerMatches: () => api.get('/matches/owner'),
  getMatchById: (id) => api.get(`/matches/${id}`),
  createMatch: (data) => api.post('/matches', data),
  rejectLike: (data) => api.post('/matches/reject', data),
  deleteMatch: (id) => api.delete(`/matches/${id}`),
  sendMessage: (matchId, content) => api.post(`/matches/${matchId}/messages`, { content }),
  getMessages: (matchId) => api.get(`/matches/${matchId}/messages`),
};

// Requests
export const requestAPI = {
  create: (data) => api.post('/requests', data),
  getMyRequests: () => api.get('/requests/my-requests'),
  getById: (id) => api.get(`/requests/${id}`),
  delete: (id) => api.delete(`/requests/${id}`),
  getByApartment: (apartmentId) => api.get(`/requests/apartment/${apartmentId}`),
  getAllForOwner: () => api.get('/requests/owner/all'),
  getOwnerStats: () => api.get('/requests/owner/stats'),
  updateStatus: (id, data) => api.put(`/requests/${id}/status`, data),
};

// Admin
export const adminAPI = {
  listUsers: () => api.get('/admin/users'),
  updateUserRole: (id, role) => api.patch(`/admin/users/${id}/role`, { role }),
  setUserBan: (id, banned) => api.patch(`/admin/users/${id}/ban`, { is_banned: banned }),
  deleteUser: (id) => api.delete(`/admin/users/${id}`),
  listApartments: () => api.get('/admin/apartments'),
  deleteApartment: (id) => api.delete(`/admin/apartments/${id}`),
  listMatches: () => api.get('/admin/matches'),
  deleteMatch: (id) => api.delete(`/admin/matches/${id}`),
  listMessages: () => api.get('/admin/messages'),
  deleteMessage: (id) => api.delete(`/admin/messages/${id}`),
};

export default api;

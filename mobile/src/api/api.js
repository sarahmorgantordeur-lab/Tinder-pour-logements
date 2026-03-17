import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Attach JWT token to every request
api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ── Auth ──────────────────────────────────────────────────────────────────────
export const login = (data) => api.post('/auth/login', data);
export const register = (data) => api.post('/auth/register', data);
export const searchAgencies = (q) => api.get('/auth/agencies', { params: { q } });

// ── Users ─────────────────────────────────────────────────────────────────────
export const getProfile = () => api.get('/users/profile');
export const updateProfile = (data) => api.put('/users/profile', data);
export const updateAgency = (data) => api.put('/users/agency', data);
export const getPublicProfile = (id) => api.get(`/users/${id}`);
export const updateTenantProfile = (data) => api.put('/users/tenant-profile', data);

export const getDocuments = () => api.get('/users/documents');
export const uploadDocument = (formData) =>
  api.post('/users/documents', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
export const deleteDocument = (docId) => api.delete(`/users/documents/${docId}`);

export const getProfilePhotos = () => api.get('/users/profile-photos');
export const uploadProfilePhoto = (formData) =>
  api.post('/users/profile-photos', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
export const deleteProfilePhoto = (photoId) => api.delete(`/users/profile-photos/${photoId}`);

// ── Properties ────────────────────────────────────────────────────────────────
export const getProperties = (filters) => api.get('/properties', { params: filters });
export const getProperty = (id) => api.get(`/properties/${id}`);
export const getMyProperties = () => api.get('/properties/owner/my-properties');
export const createProperty = (data) => api.post('/properties', data);
export const updateProperty = (id, data) => api.put(`/properties/${id}`, data);
export const updatePropertyStatus = (id, status) => api.patch(`/properties/${id}/status`, { status });
export const deleteProperty = (id) => api.delete(`/properties/${id}`);
export const uploadPropertyPhotos = (id, formData) =>
  api.post(`/properties/${id}/photos`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
export const deletePropertyPhoto = (id, photoUrl) =>
  api.delete(`/properties/${id}/photos`, { data: { photoUrl } });

// ── Swipes ────────────────────────────────────────────────────────────────────
export const getSwipeProperties = () => api.get('/swipes/properties');
export const swipe = (propertyId, direction) => api.post('/swipes', { propertyId, direction });
export const getSwipeHistory = () => api.get('/swipes/history');
export const getLikesReceived = () => api.get('/swipes/likes/received');
export const deleteSwipe = (propertyId) => api.delete(`/swipes/${propertyId}`);

// ── Conversations ─────────────────────────────────────────────────────────────
export const getConversations = () => api.get('/conversations');
export const getOwnerConversations = () => api.get('/conversations/owner');
export const createConversation = (data) => api.post('/conversations', data);
export const getConversation = (id) => api.get(`/conversations/${id}`);
export const deleteConversation = (id) => api.delete(`/conversations/${id}`);
export const getMessages = (id) => api.get(`/conversations/${id}/messages`);
export const sendMessage = (id, content) => api.post(`/conversations/${id}/messages`, { content });

// ── Appointments ──────────────────────────────────────────────────────────────
export const getAppointments = () => api.get('/appointments');
export const getTenantAppointments = () => api.get('/appointments/tenant');
export const createAppointment = (data) => api.post('/appointments', data);
export const updateAppointment = (id, data) => api.put(`/appointments/${id}`, data);
export const deleteAppointment = (id) => api.delete(`/appointments/${id}`);

export default api;

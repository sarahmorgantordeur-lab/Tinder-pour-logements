import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/auth/ProtectedRoute';

import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Apartments from '../pages/Apartments';
import ApartmentDetail from '../pages/ApartmentDetail';
import Swipe from '../pages/Swipe';
import Matches from '../pages/Matches';
import Profile from '../pages/Profile';
import Favorites from '../pages/Favorites';
import MyApartments from '../pages/MyApartments';
import OwnerRequests from '../pages/OwnerRequests';
import Admin from '../pages/Admin';

export default function AppRouter() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/apartments" element={<Apartments />} />
      <Route path="/apartments/:id" element={<ApartmentDetail />} />

      {/* User (locataire) */}
      <Route path="/swipe" element={
        <ProtectedRoute roles={['user']}>
          <Swipe />
        </ProtectedRoute>
      } />
      <Route path="/matches" element={
        <ProtectedRoute roles={['user']}>
          <Matches />
        </ProtectedRoute>
      } />
      <Route path="/favorites" element={
        <ProtectedRoute roles={['user']}>
          <Favorites />
        </ProtectedRoute>
      } />

      {/* Owner / Agency */}
      <Route path="/my-apartments" element={
        <ProtectedRoute roles={['owner', 'agency']}>
          <MyApartments />
        </ProtectedRoute>
      } />
      <Route path="/owner/matches" element={
        <ProtectedRoute roles={['owner', 'agency']}>
          <Matches />
        </ProtectedRoute>
      } />
      <Route path="/owner/requests" element={
        <ProtectedRoute roles={['owner', 'agency']}>
          <OwnerRequests />
        </ProtectedRoute>
      } />

      {/* Common auth */}
      <Route path="/profile" element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      } />

      {/* Admin */}
      <Route path="/admin" element={
        <ProtectedRoute roles={['admin']}>
          <Admin />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

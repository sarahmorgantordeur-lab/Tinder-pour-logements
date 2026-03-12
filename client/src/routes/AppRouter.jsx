import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "../pages/LandingPage";
import Home from "../layouts/Home";
import CreateAnnouncementPage from "../pages/CreateAnnouncementPage";
import EditAnnouncement from "../pages/editAnnouncement";
import UserPublicProfilePage from "../pages/UserPublicProfilePage";
import DiscussionPage from "../pages/DiscussionPage";
import ProfilePage from "../pages/ProfilePage";
import { useAuth } from "../hooks/useAuth";

function PublicRoute({ children }) {
  const { token } = useAuth();
  return token ? <Navigate to="/home" /> : children;
}

function PrivateRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/" />;
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={
        <PublicRoute>
          <Landing />
        </PublicRoute>
      } />
      <Route path="/home" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
      <Route path="/properties/new" element={
        <PrivateRoute>
          <CreateAnnouncementPage />
        </PrivateRoute>
      } />
      <Route path="/properties/:id/edit" element={
        <PrivateRoute>
          <EditAnnouncement />
        </PrivateRoute>
      } />
      <Route path="/discussions" element={
        <PrivateRoute>
          <DiscussionPage />
        </PrivateRoute>
      } />
      <Route path="/profile" element={
        <PrivateRoute>
          <ProfilePage />
        </PrivateRoute>
      } />
      <Route path="/users/:id" element={
        <PrivateRoute>
          <UserPublicProfilePage />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default AppRouter;
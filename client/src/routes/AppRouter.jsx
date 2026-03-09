import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "../pages/LandingPage";
import Home from "../layouts/Home";
import EditAnnouncement from "../pages/EditAnnouncement";
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
      <Route path="/properties/:id/edit" element={
        <PrivateRoute>
          <EditAnnouncement />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default AppRouter;
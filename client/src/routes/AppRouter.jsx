import { Routes, Route } from "react-router-dom";
import Landing from "../pages/LandingPage";
import LandlordHome from "../pages/LandlordHome";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/LandlordHome" element={<LandlordHome />} />
    </Routes>
  );
}

export default AppRouter;
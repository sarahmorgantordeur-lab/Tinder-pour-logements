import { Routes, Route } from "react-router-dom";

import Landing from "../pages/LandingPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default AppRouter;
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/LandingPage";
import Home from "../components/home/Home";
import { HomeProvider } from "../hooks/useHome";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/home"
        element={
          <HomeProvider>
            <Home />
          </HomeProvider>
        }
      />
    </Routes>
  );
}

export default AppRouter;
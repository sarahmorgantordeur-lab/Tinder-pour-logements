import { createContext, useCallback, useContext, useEffect, useState } from "react";
import api from "../api";

const HomeContext = createContext(null);

export const HomeProvider = ({ children }) => {
  const [apartments, setApartments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApartments = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/apartments");
      setApartments(response.data.apartments ?? response.data);
      setCurrentIndex(0);
    } catch {
      setError("Impossible de charger les logements");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchApartments();
  }, [fetchApartments]);

  const swipe = async (direction) => {
    const current = apartments[currentIndex];
    if (!current) return;
    try {
      await api.post("/swipes", { apartment_id: current.id, direction });
    } catch {
      // swipe enregistré localement même si l'API échoue
    } finally {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <HomeContext.Provider
      value={{
        apartments,
        currentApartment: apartments[currentIndex] ?? null,
        remaining: apartments.length - currentIndex,
        loading,
        error,
        swipe,
        fetchApartments,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = () => {
  const context = useContext(HomeContext);
  if (!context) throw new Error("useHome must be used within a HomeProvider");
  return context;
};

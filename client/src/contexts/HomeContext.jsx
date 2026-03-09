import { createContext, useState, useEffect, useCallback } from "react";
import api from "../api";
import { HomeContext } from "../hooks/useHome";


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

    const fetchApartementNames = useCallback(async () => {
        try {
            const response = await api.get("/agencies");
            console.log(response.data);
            return response.data.agencies.map((agency) => agency.name);
        } catch {
            return [];
        }
    }, []);

    useEffect(() => {
        fetchApartments();
        fetchApartementNames();
    }, [fetchApartments, fetchApartementNames]);

    const swipe = async (direction) => {
        const current = apartments[currentIndex];
        if (!current) return;
        try {
            await api.post("/swipes", { appartement_id: current.id, direction });
        } catch {
            // swipe enregistré localement même si l'API échoue
        } finally {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const value = {
        apartments,
        currentApartment: apartments[currentIndex] ?? null,
        remaining: apartments.length - currentIndex,
        loading,
        error,
        swipe,
        fetchApartments,
    };

    return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};



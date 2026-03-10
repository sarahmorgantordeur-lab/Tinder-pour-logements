import { createContext, useState, useEffect, useCallback } from "react";
import api from "../api";
import { HomeContext } from "../hooks/useHome";


export const HomeProvider = ({ children }) => {
    const [apartments, setApartments] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [filters, setFilters] = useState({ city: "", minPrice: "", maxPrice: "", propertyType: "" });

    const fetchApartments = useCallback(async (f = {}) => {
        setLoading(true);
        setError(null);
        try {
            const params = new URLSearchParams();
            if (f.city)         params.set("city", f.city);
            if (f.minPrice)     params.set("minPrice", f.minPrice);
            if (f.maxPrice)     params.set("maxPrice", f.maxPrice);
            if (f.propertyType) params.set("propertyType", f.propertyType);
            const query = params.toString() ? `?${params.toString()}` : "";
            const response = await api.get(`/properties${query}`);
            const list = response.data?.properties ?? (Array.isArray(response.data) ? response.data : []);
            setApartments(list);
            setCurrentIndex(0);
        } catch {
            setError("Impossible de charger les logements");
        } finally {
            setLoading(false);
        }
    }, []);

    // Autocomplete agences — nécessite au moins 3 caractères
    const fetchAgencyNames = useCallback(async (q) => {
        if (!q || q.length < 3) return [];
        try {
            const response = await api.get(`/auth/agencies?q=${encodeURIComponent(q)}`);
            return response.data.map((agency) => agency.nom_agence);
        } catch {
            return [];
        }
    }, []);

    useEffect(() => {
        fetchApartments(filters);
    }, [fetchApartments]);

    const swipe = async (direction) => {
        const current = apartments[currentIndex];
        if (!current) return;
        try {
            await api.post("/swipes", { propertyId: current.id, direction });
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
        filters,
        setFilters,
        swipe,
        fetchApartments,
        fetchAgencyNames,
    };

    return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

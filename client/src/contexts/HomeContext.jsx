import { useState, useEffect, useCallback } from "react";
import api from "../api";
import { HomeContext } from "../hooks/useHome";


export const HomeProvider = ({ children }) => {
    const [apartments, setApartments] = useState([]);
    const [appartmentById, setAppartmentById] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [filters, setFilters] = useState({ city: "", minPrice: "", maxPrice: "", propertyType: "" });

    const fetchApartments = useCallback(async (f = {}) => {
        setLoading(true);
        setError(null);
        if (filters) {
            const query = new URLSearchParams();
            if (f.city) query.append("city", f.city);
            if (f.minPrice) query.append("minPrice", f.minPrice);
            if (f.maxPrice) query.append("maxPrice", f.maxPrice);
            if (f.propertyType) query.append("propertyType", f.propertyType);
            try {
                const response = await api.get(`/properties?${query.toString()}`);
                setApartments(Array.isArray(response.data.properties) ? response.data.properties : []);
                setCurrentIndex(0);
            } catch {
                setError("Impossible de charger les logements");
            } finally {
                setLoading(false);
            }
        } else {    
        try {
            const response = await api.get("/properties");
            setApartments(Array.isArray(response.data.properties) ? response.data.properties : []);
            console.log("Fetched apartments:", response);
            setCurrentIndex(0);
        } catch {
            setError("Impossible de charger les logements");
        } finally {
            setLoading(false);
        }
        }
    }, []);

    const fetchPropertiesById = useCallback(async (id) => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get(`/properties/${id}`);
            console.log("Fetched property by ID:", response);
            setAppartmentById(response.data.properties);
            return response.data;
        } catch {
            setError("Impossible de charger le logement");
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchMyProperties = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get("/properties/owner/my-properties");
            setAppartmentById(Array.isArray(response.data.properties) ? response.data.properties : []);
            return response.data;
        } catch {
            setError("Impossible de charger vos logements");
            return null;
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
    }, [fetchApartments, filters]);

    const swipe = async (direction) => {
        const current = apartments[currentIndex];
        if (!current) return;
        try {
            await api.post("/swipes", { propertyId: current.id, direction: direction === 'like' });
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
        appartmentById,
        loading,
        error,
        filters,
        setFilters,
        swipe,
        fetchApartments,
        fetchAgencyNames,
        fetchPropertiesById,
        fetchMyProperties,
    };

    return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

import { useEffect, useState } from "react";
import AppartementCard from "../../components/cards/AppartementCard";
import {useHome} from "../../hooks/useHome";
import Button from "../../components/ui/Button";
import { motion, AnimatePresence } from 'framer-motion';

const swipAnimations = {
    like: { x: 300, opacity: 0 },
    dislike: { x: -300, opacity: 0 },
    initial: { x: 0, opacity: 1 }
};

export default function UserHome() {

    const { currentApartment, swipe } = useHome();
    const [swipeDirection, setSwipeDirection] = useState(null);

    const swipeAction = (direction) => () => {
        if (swipeDirection) return; // empêche le double-clic pendant l'animation
        setSwipeDirection(direction);
    };

    const handleAnimationComplete = () => {
        if (swipeDirection) {
            swipe(swipeDirection);
            setSwipeDirection(null);
        }
    };

    useEffect(() => {
        console.log("Appartement chargé dans UserHome:", currentApartment);
    }, [currentApartment]);

    return (
        <div className="user-home">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentApartment?.id}
                    className="appartement-card-container"
                    initial={swipAnimations.initial}
                    animate={swipeDirection ? swipAnimations[swipeDirection] : swipAnimations.initial}
                    transition={{ duration: 0.3 }}
                    onAnimationComplete={handleAnimationComplete}
                >
                    {currentApartment && <AppartementCard appartement={currentApartment} />}
                </motion.div>
            </AnimatePresence>
            <div className="swipe-buttons">
                <Button onClick={swipeAction('dislike')} className="swipe-button">
                    Dislike
                </Button>
                <Button onClick={swipeAction('like')} className="swipe-button">
                    Like
                </Button>
            </div>
import { useState } from "react";
import { useHome } from "../../hooks/useHome";

const PROPERTY_TYPES = [
    "Bungalow", "Chalet", "Castel", "Farm", "CountryHouse",
    "ApartmentBuilding", "MixedUseBuilding", "BelEtageHouse", "Mansion",
    "Villa", "ManorHouse", "Pavilion", "GroundFloor", "Duplex", "Triplex",
    "Studio", "Penthouse", "Loft", "StudentHousing", "ServiceApartment",
    "Appartement", "Other",
];

const EMPTY_FILTERS = { city: "", minPrice: "", maxPrice: "", propertyType: "" };

function hasActiveFilter(f) {
    return f.city || f.minPrice || f.maxPrice || f.propertyType;
}

export default function UserHome() {
    const { apartments, loading, error, filters, setFilters, fetchApartments, swipe } = useHome();
    const [form, setForm] = useState(filters);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const clean = {
            city: form.city.trim(),
            minPrice: form.minPrice,
            maxPrice: form.maxPrice,
            propertyType: form.propertyType,
        };
        setFilters(clean);
        fetchApartments(clean);
    };

    const handleClear = () => {
        setForm(EMPTY_FILTERS);
        setFilters(EMPTY_FILTERS);
        fetchApartments(EMPTY_FILTERS);
    };

    const activeFilter = hasActiveFilter(filters);

    return (
        <div className="user-home">
            {/* Filtres */}
            <form className="user-home-filter" onSubmit={handleSearch}>
                <div className="user-home-filter-row">
                    <input
                        className="user-home-filter-input"
                        type="text"
                        name="city"
                        placeholder="Ville"
                        value={form.city}
                        onChange={handleChange}
                    />

                    <input
                        className="user-home-filter-input user-home-filter-input--short"
                        type="number"
                        name="minPrice"
                        placeholder="Prix min (€)"
                        value={form.minPrice}
                        min={0}
                        onChange={handleChange}
                    />

                    <input
                        className="user-home-filter-input user-home-filter-input--short"
                        type="number"
                        name="maxPrice"
                        placeholder="Prix max (€)"
                        value={form.maxPrice}
                        min={0}
                        onChange={handleChange}
                    />

                    <select
                        className="user-home-filter-select"
                        name="propertyType"
                        value={form.propertyType}
                        onChange={handleChange}
                    >
                        <option value="">Tous les types</option>
                        {PROPERTY_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>

                    <button className="user-home-filter-btn" type="submit">
                        Rechercher
                    </button>

                    {activeFilter && (
                        <button className="user-home-filter-clear" type="button" onClick={handleClear}>
                            ✕ Effacer
                        </button>
                    )}
                </div>

                {activeFilter && (
                    <p className="user-home-filter-active">
                        {apartments.length} bien{apartments.length !== 1 ? "s" : ""} trouvé{apartments.length !== 1 ? "s" : ""}
                        {filters.city && <> à <strong>{filters.city}</strong></>}
                        {filters.propertyType && <> · <strong>{filters.propertyType}</strong></>}
                        {filters.minPrice && <> · min <strong>{filters.minPrice} €</strong></>}
                        {filters.maxPrice && <> · max <strong>{filters.maxPrice} €</strong></>}
                    </p>
                )}
            </form>

            {/* États */}
            {loading && <p className="user-home-loading">Chargement des biens...</p>}
            {error && <p className="user-home-error">{error}</p>}

            {!loading && !error && apartments.length === 0 && (
                <p className="user-home-empty">Aucun bien trouvé pour ces critères.</p>
            )}

            {/* Grille */}
            {!loading && apartments.length > 0 && (
                <div className="user-home-grid">
                    {apartments.map((property) => (
                        <div key={property.id} className="user-home-card">
                            {property.photos?.[0]?.url ? (
                                <img
                                    className="user-home-card-photo"
                                    src={property.photos[0].url}
                                    alt={property.title}
                                />
                            ) : (
                                <div className="user-home-card-photo user-home-card-photo--empty" />
                            )}
                            <div className="user-home-card-body">
                                <h3 className="user-home-card-title">{property.title}</h3>
                                <p className="user-home-card-location">
                                    {property.address?.city}
                                    {property.address?.postal_code && ` (${property.address.postal_code})`}
                                </p>
                                <p className="user-home-card-type">{property.property_type}</p>
                                <p className="user-home-card-price">{property.price} €/mois</p>
                                <p className="user-home-card-details">
                                    {property.rooms} pièce{property.rooms !== 1 ? "s" : ""} · {property.surface} m²
                                    {property.parking ? " · Parking" : ""}
                                </p>
                            </div>
                            <div className="user-home-card-actions">
                                <button
                                    className="user-home-card-dislike"
                                    type="button"
                                    onClick={() => swipe(false)}
                                    aria-label="Passer"
                                >
                                    ✕
                                </button>
                                <button
                                    className="user-home-card-like"
                                    type="button"
                                    onClick={() => swipe(true)}
                                    aria-label="J'aime"
                                >
                                    ♥
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

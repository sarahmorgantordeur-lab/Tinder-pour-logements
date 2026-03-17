import { useState } from "react";
import AppartementCard from "../../components/cards/AppartementCard";
import ApartmentModal from "../../components/cards/ApartmentModal";
import {useHome} from "../../hooks/useHome";
import Button from "../../components/ui/Button";
import Select from "../../components/ui/Select";
import TextInput from "../../components/ui/TextInput";
import { motion, AnimatePresence } from 'framer-motion';


const swipAnimations = {
    like: { x: 300, opacity: 0 },
    dislike: { x: -300, opacity: 0 },
    initial: { x: 0, opacity: 1 }
};

export default function UserHome() {
    const { apartments, currentApartment, loading, error, filters, setFilters, fetchApartments, swipe } = useHome();
    const [form, setForm] = useState(filters);
    const [selectedApartment, setSelectedApartment] = useState(null);

const PROPERTY_TYPES = [
    "Appartement",
    "BelEtageHouse",
    "Castel",
    "Duplex",
    "StudentHousing",
    "Villa",
    "Chalet",
    "Bungalow",
    "Mansion",
    "Penthouse",
    "Loft", 
    "Studio", 
    "Other"
];

const EMPTY_FILTERS = { city: "", minPrice: "", maxPrice: "", propertyType: "" };

function hasActiveFilter(f) {
    return f.city || f.minPrice || f.maxPrice || f.propertyType;
}

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
        setFilters(EMPTY_FILTERS)
        fetchApartments(EMPTY_FILTERS);
    };

    const activeFilter = hasActiveFilter(filters);

    const [swipeDirection, setSwipeDirection] = useState(null);

    const swipeAction = (direction) => () => {
        setSwipeDirection(direction);
    };

    const handleAnimationComplete = () => {
        try {
        if (swipeDirection) {
            swipe(swipeDirection);
        }
        } catch (err) {
            console.error("Erreur lors de l'enregistrement du swipe :", err);
        } finally {
            setSwipeDirection(null);
        }
    };

    return (
        <div className="user-home">
            {/* Filtres */}
            <form className="user-home-filter" onSubmit={handleSearch}>
                <div className="user-home-filter-row">
                    <TextInput
                        className="user-home-filter-input"
                        type="text"
                        name="city"
                        placeholder="Ville"
                        value={form.city}
                        onChange={handleChange}
                    />

                    <TextInput
                        className="user-home-filter-input user-home-filter-input--short"
                        type="number"
                        name="minPrice"
                        placeholder="Prix min (€)"
                        value={form.minPrice}
                        min={0}
                        onChange={handleChange}
                    />

                    <TextInput
                        className="user-home-filter-input user-home-filter-input--short"
                        type="number"
                        name="maxPrice"
                        placeholder="Prix max (€)"
                        value={form.maxPrice}
                        min={0}
                        onChange={handleChange}
                    />

                    <Select
                        className="user-home-filter-select"
                        name="propertyType"
                        value={form.propertyType}
                        onChange={handleChange}
                    >
                        <option value="">Tous les types</option>
                        {PROPERTY_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </Select>

                    <Button className="user-home-filter-btn" type="submit">
                        Rechercher
                    </Button>

                    {activeFilter && (
                        <Button className="user-home-filter-clear" type="button" onClick={handleClear}>
                            ✕ Effacer
                        </Button>
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
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentApartment?.id}
                    className="appartement-card-container"
                    initial={swipAnimations.initial}
                    animate={swipeDirection ? swipAnimations[swipeDirection] : swipAnimations.initial}
                    transition={{ duration: 0.3 }}
                    onAnimationComplete={handleAnimationComplete}
                >
                    {currentApartment && (
                        <AppartementCard
                            appartement={{
                                ...currentApartment,
                                city: currentApartment.address?.city,
                                postal_code: currentApartment.address?.postal_code,
                                image: currentApartment.photos?.[0]?.url
                                    ? `${import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:3000'}${currentApartment.photos[0].url}`
                                    : null,
                            }}
                            onClick={() => setSelectedApartment({
                                ...currentApartment,
                                city: currentApartment.address?.city,
                                postal_code: currentApartment.address?.postal_code,
                                image: currentApartment.photos?.[0]?.url
                                    ? `${import.meta.env.VITE_API_URL?.replace('/api', '') || 'http://localhost:3000'}${currentApartment.photos[0].url}`
                                    : null,
                            })}
                        />
                    )}
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
        {selectedApartment && (
                <ApartmentModal
                    appartement={selectedApartment}
                    onClose={() => setSelectedApartment(null)}
                    isOwner={false}
                />
            )}
        </div>
    );
}

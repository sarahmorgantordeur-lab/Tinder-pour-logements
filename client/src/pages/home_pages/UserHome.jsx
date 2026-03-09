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
        </div>
    );
}
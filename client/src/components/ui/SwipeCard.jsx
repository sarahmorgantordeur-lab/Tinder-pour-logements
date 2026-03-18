import { useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useIsTouchDevice } from '../../hooks/useIsTouchDevice';

const THRESHOLD = 120;

export function SwipeCard({ children, onSwipeLeft, onSwipeRight }) {
  const isTouch = useIsTouchDevice();
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 0, 300], [-18, 0, 18]);
  const likeOpacity = useTransform(x, [0, THRESHOLD], [0, 1]);
  const nopeOpacity = useTransform(x, [-THRESHOLD, 0], [1, 0]);

  const handleDragEnd = async (_, { offset }) => {
    if (offset.x > THRESHOLD) {
      await animate(x, 600, { duration: 0.3 });
      x.set(0);
      onSwipeRight?.();
    } else if (offset.x < -THRESHOLD) {
      await animate(x, -600, { duration: 0.3 });
      x.set(0);
      onSwipeLeft?.();
    } else {
      animate(x, 0, { type: 'spring', stiffness: 300, damping: 25 });
    }
  };

  // Desktop → pas de swipe
  if (!isTouch) return <div>{children}</div>;

  return (
    <motion.div
      style={{ x, rotate, touchAction: 'none' }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.85}
      onDragEnd={handleDragEnd}
      whileTap={{ scale: 1.02 }}
    >
      {/* Overlay LIKE */}
      <motion.div className="overlay overlay-like" style={{ opacity: likeOpacity }}>
        <span>LIKE</span>
      </motion.div>

      {/* Overlay NOPE */}
      <motion.div className="overlay overlay-nope" style={{ opacity: nopeOpacity }}>
        <span>NOPE</span>
      </motion.div>

      {children}
    </motion.div>
  );
}
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeartBackground: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; scale: number }[]>([]);

  useEffect(() => {
    // Generate static hearts on mount to avoid hydration mismatch if SSR (though this is SPA)
    // and to set up the animation
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      scale: Math.random() * 0.5 + 0.5,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-50px] text-romantic-300 opacity-40"
          initial={{ y: 0, opacity: 0, scale: heart.scale }}
          animate={{
            y: -1000,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{
            left: `${heart.left}%`,
            fontSize: `${Math.random() * 30 + 20}px`
          }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
};

export default HeartBackground;
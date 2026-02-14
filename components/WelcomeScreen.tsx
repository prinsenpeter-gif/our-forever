import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface WelcomeScreenProps {
  onEnter: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 relative z-10">
      <motion.div
        {...({
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1 }
        } as any)}
        className="mb-8"
      >
        <div className="relative inline-block">
          <Heart className="w-24 h-24 text-romantic-500 fill-romantic-100 animate-pulse-slow" />
        </div>
      </motion.div>

      <motion.h1
        {...({
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5, duration: 0.8 }
        } as any)}
        className="font-script text-6xl text-romantic-600 mb-4"
      >
        Happy Valentine's Day<br/>Stephy
      </motion.h1>

      <motion.p
        {...({
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1.2, duration: 0.8 }
        } as any)}
        className="text-romantic-800 text-lg mb-12 font-light tracking-wide"
      >
        Built with love by Prinsen.
      </motion.p>

      <motion.button
        {...({
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 1.8, duration: 0.8 },
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 }
        } as any)}
        onClick={onEnter}
        className="glass-card px-8 py-3 rounded-full text-romantic-600 font-semibold shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
      >
        <span>Enter Our World</span>
        <Heart size={16} className="fill-romantic-500 text-romantic-500" />
      </motion.button>
    </div>
  );
};

export default WelcomeScreen;
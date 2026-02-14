import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart } from 'lucide-react';

interface LetterViewProps {
  onBack: () => void;
}

const LetterView: React.FC<LetterViewProps> = ({ onBack }) => {
  return (
    <div className="h-full flex flex-col relative z-10">
      <div className="absolute top-6 left-6 z-20">
        <button 
          onClick={onBack}
          className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors shadow-sm"
        >
          <ArrowLeft className="text-romantic-600" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 pt-20 pb-10">
        <motion.div
          {...({
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 }
          } as any)}
          className="glass-card p-8 rounded-lg shadow-xl max-w-lg mx-auto relative"
        >
          {/* Paper texture effect overlay could go here, keeping it simple with glassmorphism */}
          
          <h2 className="font-script text-4xl text-romantic-700 mb-8 text-center">My Dearest Stephy,</h2>
          
          <div className="space-y-6 text-slate-700 font-serif leading-loose text-lg">
            <p>
              Every moment with you feels like a beautiful dream I never want to wake up from. 
              Since the day you walked into my life, everything has become brighter, warmer, and full of meaning.
            </p>
            <p>
              You are my heart, my soul, and my forever. Your laughter is my favorite song, and your happiness is my life's mission.
              As we count down the days to our wedding, I find myself falling more in love with you with each passing second.
            </p>
            <p>
              Happy Valentine's Day, my love. I cannot wait to call you my wife.
            </p>
          </div>

          <div className="mt-12 text-right">
             <p className="font-script text-3xl text-romantic-600 mb-2">Forever Yours,</p>
             <p className="font-sans font-bold text-romantic-800 uppercase tracking-widest text-sm">Prinsen</p>
             <div className="flex justify-end mt-2">
               <Heart className="text-romantic-500 fill-romantic-500" size={24} />
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LetterView;
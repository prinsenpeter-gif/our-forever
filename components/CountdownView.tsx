import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart } from 'lucide-react';
import { WEDDING_DATE } from '../constants';

interface CountdownViewProps {
  onBack: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownView: React.FC<CountdownViewProps> = ({ onBack }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +WEDDING_DATE - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 sm:w-20 sm:h-20 glass-card rounded-2xl flex items-center justify-center mb-2 shadow-lg border border-romantic-200">
        <span className="text-2xl sm:text-3xl font-bold text-romantic-600 font-mono">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs uppercase tracking-widest text-romantic-800 font-medium">{label}</span>
    </div>
  );

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

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <motion.div
          {...({
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 }
          } as any)}
          className="text-center w-full max-w-lg"
        >
          <h2 className="font-script text-5xl text-romantic-600 mb-2">Our Wedding</h2>
          <p className="text-slate-500 mb-12 tracking-widest uppercase text-sm">May 10, 2026</p>

          <div className="flex justify-center gap-3 sm:gap-6 mb-12">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Mins" />
            <TimeUnit value={timeLeft.seconds} label="Secs" />
          </div>

          <div className="glass-card p-6 rounded-2xl inline-block">
             <p className="text-romantic-700 italic font-serif">
               "Counting every second until forever begins."
             </p>
          </div>
          
          <div className="mt-12 animate-pulse-slow flex justify-center">
            <Heart className="text-romantic-400 fill-romantic-200 w-12 h-12" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CountdownView;
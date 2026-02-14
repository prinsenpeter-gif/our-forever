import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Play, Pause, ChevronRight, ChevronLeft } from 'lucide-react';
import { STORY_CHAPTERS } from '../constants';

interface StoryViewProps {
  onBack: () => void;
}

const StoryView: React.FC<StoryViewProps> = ({ onBack }) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed (placeholder)", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextChapter = () => {
    if (activeChapter < STORY_CHAPTERS.length - 1) {
      setActiveChapter(prev => prev + 1);
      setIsPlaying(false);
    }
  };

  const prevChapter = () => {
    if (activeChapter > 0) {
      setActiveChapter(prev => prev - 1);
      setIsPlaying(false);
    }
  };

  const currentChapter = STORY_CHAPTERS[activeChapter];

  return (
    <div className="flex flex-col h-full px-4 py-6 relative z-10 max-w-lg mx-auto">
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={onBack}
          className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
        >
          <ArrowLeft className="text-romantic-600" />
        </button>
        <h2 className="font-script text-3xl text-romantic-600">Our Story</h2>
        <div className="w-10"></div> 
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter.id}
            {...({
              initial: { opacity: 0, scale: 0.95 },
              animate: { opacity: 1, scale: 1 },
              exit: { opacity: 0, scale: 0.95 },
              transition: { duration: 0.4 }
            } as any)}
            className="flex flex-col h-full"
          >
            {/* Header */}
            <div className="bg-white rounded-t-2xl p-4 shadow-sm relative z-20 border-b border-romantic-100">
              <div className="absolute top-0 left-0 bg-romantic-500 text-white text-xs px-3 py-1 font-bold uppercase rounded-br-lg rounded-tl-2xl">
                Chapter {activeChapter + 1}
              </div>
              <h3 className="font-sans font-bold text-2xl text-center text-slate-800 mt-4">
                {currentChapter.title}
              </h3>
              {currentChapter.date && (
                 <p className="text-center text-romantic-500 font-medium italic text-sm mt-1">{currentChapter.date}</p>
              )}
            </div>

            {/* Content Container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-b-2xl p-6 shadow-lg relative flex-1 flex flex-col">
                
                {/* Static Image */}
                <motion.img
                    key={`img-${currentChapter.id}`}
                    src={`/images/${currentChapter.id}.jpg`}
                    alt={currentChapter.title}
                    {...({
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5 }
                    } as any)}
                    className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-md mb-6"
                />

               {/* Narration */}
               <div className="bg-romantic-50 p-4 rounded-xl border border-romantic-100 shadow-inner mb-6">
                 <p className="font-sans text-slate-700 leading-relaxed text-sm sm:text-base">
                   {currentChapter.content}
                 </p>
               </div>

               {/* Audio Controls */}
               <div className="mt-auto flex items-center justify-between border-t border-romantic-100 pt-4">
                  <div className="flex items-center gap-2">
                     <button
                        onClick={toggleAudio}
                        className="w-10 h-10 rounded-full bg-romantic-500 text-white flex items-center justify-center hover:bg-romantic-600 transition-colors shadow-md"
                      >
                        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                      </button>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Narration</span>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={prevChapter}
                      disabled={activeChapter === 0}
                      className="p-2 text-slate-600 disabled:opacity-30 hover:bg-romantic-50 rounded-full transition-colors"
                    >
                      <ChevronLeft />
                    </button>
                    <button 
                      onClick={nextChapter}
                      disabled={activeChapter === STORY_CHAPTERS.length - 1}
                      className="p-2 text-slate-600 disabled:opacity-30 hover:bg-romantic-50 rounded-full transition-colors"
                    >
                      <ChevronRight />
                    </button>
                  </div>
               </div>
               
               <audio 
                ref={audioRef} 
                src={currentChapter.audioSrc} 
                onEnded={() => setIsPlaying(false)}
                className="hidden"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Page Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {STORY_CHAPTERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveChapter(idx);
                setIsPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeChapter === idx ? 'bg-romantic-500 w-6' : 'bg-romantic-200'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryView;
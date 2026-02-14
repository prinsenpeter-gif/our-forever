import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ZoomIn } from 'lucide-react';
import { MEMORIES } from '../constants';

interface MemoriesViewProps {
  onBack: () => void;
}

const MemoriesView: React.FC<MemoriesViewProps> = ({ onBack }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="h-full flex flex-col relative z-10">
      <div className="flex items-center px-6 py-6 z-20">
        <button 
          onClick={onBack}
          className="p-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors shadow-sm"
        >
          <ArrowLeft className="text-romantic-600" />
        </button>
        <h2 className="font-script text-3xl text-romantic-600 ml-4">Sweet Memories</h2>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-4 pb-20">
        <div className="columns-2 gap-4 space-y-4">
          {MEMORIES.map((memory) => (
            <motion.div
              key={memory.id}
              {...({
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                whileHover: { scale: 1.02 }
              } as any)}
              onClick={() => setSelectedId(memory.id)}
              className="break-inside-avoid relative group rounded-xl overflow-hidden cursor-pointer shadow-md"
            >
              <img 
                src={memory.url} 
                alt={memory.caption} 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <ZoomIn className="text-white opacity-80" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            {...({
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 }
            } as any)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <button className="absolute top-4 right-4 text-white/70 hover:text-white">
              <X size={32} />
            </button>
            {(() => {
              const selected = MEMORIES.find(m => m.id === selectedId);
              if (!selected) return null;
              return (
                <motion.div 
                  {...({
                    initial: { scale: 0.9, opacity: 0 },
                    animate: { scale: 1, opacity: 1 }
                  } as any)}
                  className="max-w-full max-h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={selected.url} 
                    alt={selected.caption} 
                    className="max-h-[80vh] w-auto rounded-lg shadow-2xl mx-auto"
                  />
                  <p className="text-white text-center mt-4 font-script text-2xl tracking-wide">
                    {selected.caption}
                  </p>
                </motion.div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemoriesView;
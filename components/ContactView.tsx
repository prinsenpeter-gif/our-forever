import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface ContactViewProps {
  onBack: () => void;
}

const ContactView: React.FC<ContactViewProps> = ({ onBack }) => {
  const displayPhone = "+91 9074094737";
  const telLink = `tel:+91${CONTACT_INFO.phone}`;

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
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          } as any)}
          className="w-full max-w-sm text-center"
        >
          <div className="mb-8">
            <span className="text-6xl">🥰</span>
          </div>
          
          <h2 className="font-script text-4xl text-romantic-600 mb-8">Missing Prinsen?</h2>
          
          <div className="glass-card p-8 rounded-3xl shadow-xl border border-romantic-200">
             <p className="text-slate-600 mb-8 text-xl font-light font-sans">
               I am just a call away...
             </p>
             
             <motion.a 
               href={telLink}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="flex flex-col items-center justify-center gap-4 group cursor-pointer"
             >
               <div className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg group-hover:bg-green-600 transition-colors animate-pulse-slow">
                 <Phone className="w-10 h-10 fill-current" />
               </div>
               <span className="font-bold text-2xl text-slate-800 tracking-wider group-hover:text-romantic-600 transition-colors">
                 {displayPhone}
               </span>
             </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactView;
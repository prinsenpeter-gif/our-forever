import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Mail, Clock, Image as ImageIcon, HeartHandshake } from 'lucide-react';
import { View } from '../types';

interface MainMenuProps {
  onNavigate: (view: View) => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const MainMenu: React.FC<MainMenuProps> = ({ onNavigate }) => {
  const menuItems = [
    {
      title: "Our Love Story",
      icon: <BookOpen className="w-8 h-8 text-romantic-500" />,
      view: View.STORY,
      description: "How it all began"
    },
    {
      title: "Love Letter",
      icon: <Mail className="w-8 h-8 text-romantic-500" />,
      view: View.LETTER,
      description: "From Prinsen to you"
    },
    {
      title: "Marriage Countdown",
      icon: <Clock className="w-8 h-8 text-romantic-500" />,
      view: View.COUNTDOWN,
      description: "May 10, 2026"
    },
    {
      title: "Memories",
      icon: <ImageIcon className="w-8 h-8 text-romantic-500" />,
      view: View.MEMORIES,
      description: "Our captured moments"
    },
    {
      title: "Miss Prinsen?",
      icon: <HeartHandshake className="w-8 h-8 text-romantic-500" />,
      view: View.CONTACT,
      description: "Click here if you miss me"
    },
  ];

  return (
    <div className="flex flex-col h-full overflow-y-auto scrollbar-hide pt-10 pb-20 px-6 relative z-10">
      <motion.div
        {...({
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 }
        } as any)}
        className="text-center mb-8"
      >
        <h2 className="font-script text-5xl text-romantic-600">Our Love Story</h2>
        <div className="w-16 h-1 bg-romantic-300 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <motion.div
        {...({
          variants: container,
          initial: "hidden",
          animate: "show"
        } as any)}
        className="grid gap-4 w-full max-w-md mx-auto"
      >
        {menuItems.map((menuItem, index) => (
          <motion.div
            key={index}
            {...({
              variants: item,
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 }
            } as any)}
            onClick={() => onNavigate(menuItem.view)}
            className="glass-card p-4 rounded-2xl cursor-pointer flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-3 bg-romantic-50 rounded-full">
              {menuItem.icon}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-800 text-lg">{menuItem.title}</h3>
              <p className="text-sm text-slate-500">{menuItem.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MainMenu;
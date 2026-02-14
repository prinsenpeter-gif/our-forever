import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { View } from './types';
import HeartBackground from './components/HeartBackground';
import WelcomeScreen from './components/WelcomeScreen';
import MainMenu from './components/MainMenu';
import StoryView from './components/StoryView';
import LetterView from './components/LetterView';
import CountdownView from './components/CountdownView';
import MemoriesView from './components/MemoriesView';
import ContactView from './components/ContactView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.WELCOME);

  const renderView = () => {
    switch (currentView) {
      case View.WELCOME:
        return <WelcomeScreen onEnter={() => setCurrentView(View.MENU)} />;
      case View.MENU:
        return <MainMenu onNavigate={setCurrentView} />;
      case View.STORY:
        return <StoryView onBack={() => setCurrentView(View.MENU)} />;
      case View.LETTER:
        return <LetterView onBack={() => setCurrentView(View.MENU)} />;
      case View.COUNTDOWN:
        return <CountdownView onBack={() => setCurrentView(View.MENU)} />;
      case View.MEMORIES:
        return <MemoriesView onBack={() => setCurrentView(View.MENU)} />;
      case View.CONTACT:
        return <ContactView onBack={() => setCurrentView(View.MENU)} />;
      default:
        return <WelcomeScreen onEnter={() => setCurrentView(View.MENU)} />;
    }
  };

  return (
    <div className="relative w-full h-full max-w-md mx-auto bg-gradient-to-br from-romantic-50 to-romantic-100 overflow-hidden shadow-2xl sm:rounded-[3rem] sm:border-8 sm:border-white sm:h-[90vh] sm:mt-[5vh] sm:shadow-slate-300">
      <HeartBackground />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          {...({
            initial: { opacity: 0, filter: 'blur(10px)' },
            animate: { opacity: 1, filter: 'blur(0px)' },
            exit: { opacity: 0, filter: 'blur(10px)' },
            transition: { duration: 0.4 }
          } as any)}
          className="w-full h-full"
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 15 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          aria-label="الرجوع إلى أعلى الصفحة"
          title="الرجوع إلى أعلى الصفحة"
          className="fixed bottom-5 right-5 z-40 group flex items-center gap-2 p-3 sm:px-3.5 sm:py-2.5 rounded-xl sm:rounded-full bg-[#0D1B30]/90 hover:bg-[#11233E] text-slate-300 hover:text-[#10B981] border border-sav-border hover:border-[#10B981]/50 shadow-xl backdrop-blur-md transition-all duration-200 active:scale-95"
        >
          <div className="w-7 h-7 sm:w-6 sm:h-6 rounded-lg bg-[#050914] flex items-center justify-center text-[#10B981] group-hover:bg-[#10B981] group-hover:text-[#050914] transition-all">
            <ArrowUp className="w-4 h-4 transform group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <span className="hidden sm:inline text-xs font-bold text-slate-200 group-hover:text-white transition-colors">
            إلى الأعلى
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

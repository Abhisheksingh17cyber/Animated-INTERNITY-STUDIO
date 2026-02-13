'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 4;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10001] bg-neutral-black flex flex-col items-center justify-center"
        >
          {/* Simple honeycomb spinner */}
          <div className="relative w-20 h-20 mb-8">
            <div
              className="w-full h-full bg-honey-primary/20 animate-pulse-honey"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            />
            <div className="absolute inset-3 flex items-center justify-center text-2xl">
              \ud83d\udc1d
            </div>
          </div>

          <h1 className="text-2xl font-bold text-white mb-1">INTERNITY</h1>
          <p className="text-honey-primary text-xs tracking-[0.3em]">
            ANIMATION STUDIO
          </p>

          <div className="w-40 h-0.5 bg-neutral-charcoal mt-6 rounded-full overflow-hidden">
            <div
              className="h-full bg-honey-primary transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

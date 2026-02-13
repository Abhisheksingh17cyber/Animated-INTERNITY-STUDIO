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
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-[10001] bg-neutral-black flex flex-col items-center justify-center"
        >
          {/* Honeycomb loader */}
          <div className="relative w-32 h-32 mb-8">
            {Array.from({ length: 7 }, (_, i) => {
              const positions = [
                { x: 50, y: 20 },
                { x: 80, y: 37 },
                { x: 80, y: 63 },
                { x: 50, y: 80 },
                { x: 20, y: 63 },
                { x: 20, y: 37 },
                { x: 50, y: 50 },
              ];
              return (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8"
                  style={{
                    left: `${positions[i].x}%`,
                    top: `${positions[i].y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    repeatDelay: 0.5,
                  }}
                >
                  <div
                    className="w-full h-full bg-honey-primary"
                    style={{
                      clipPath:
                        'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-white mb-2">
              INTERNITY
            </h1>
            <p className="text-honey-primary text-sm tracking-[0.3em]">
              ANIMATION STUDIO
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-neutral-charcoal mt-8 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-honey-primary"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-neutral-silver text-xs mt-4"
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

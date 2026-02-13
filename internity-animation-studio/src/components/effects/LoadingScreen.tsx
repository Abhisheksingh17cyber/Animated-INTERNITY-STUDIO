'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store';

export function LoadingScreen() {
  const { isLoading, setLoading } = useAppStore();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [setLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center"
        >
          {/* Animated honeycomb loader */}
          <motion.div
            className="relative w-32 h-36 mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <HoneycombLoader progress={progress} />
          </motion.div>

          {/* Logo text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-honey-primary">INTERNITY</span>
              <span className="text-neutral-white"> ANIMATION</span>
            </h1>
            <p className="text-neutral-gray text-sm tracking-widest uppercase">
              Studio
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="mt-12 w-64">
            <div className="h-1 bg-neutral-charcoal rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-honey-dark via-honey-primary to-honey-light"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-honey-primary text-sm mt-3 text-center font-mono">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </div>

          {/* Flying bee animation */}
          <motion.div
            className="absolute"
            animate={{
              x: ['-20vw', '120vw'],
              y: ['40vh', '35vh', '45vh', '40vh'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <LoaderBee />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HoneycombLoader({ progress }: { progress: number }) {
  const fillOpacity = progress / 100;

  return (
    <svg viewBox="0 0 100 115" className="w-full h-full">
      {/* Outer hexagon */}
      <polygon
        points="50 0, 100 28.75, 100 86.25, 50 115, 0 86.25, 0 28.75"
        fill="none"
        stroke="#F4A623"
        strokeWidth="2"
        className="drop-shadow-[0_0_10px_rgba(244,166,35,0.5)]"
      />
      
      {/* Fill hexagon */}
      <motion.polygon
        points="50 10, 90 33.75, 90 81.25, 50 105, 10 81.25, 10 33.75"
        fill="#F4A623"
        initial={{ opacity: 0 }}
        animate={{ opacity: fillOpacity * 0.3 }}
      />

      {/* Inner hexagon */}
      <polygon
        points="50 20, 80 38.75, 80 76.25, 50 95, 20 76.25, 20 38.75"
        fill="none"
        stroke="#FFD700"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Honey drip effect */}
      <motion.ellipse
        cx="50"
        cy="57.5"
        rx="15"
        ry="20"
        fill="#FFD700"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </svg>
  );
}

function LoaderBee() {
  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 64 64"
      fill="none"
      animate={{ y: [0, -5, 0, 5, 0] }}
      transition={{ duration: 0.5, repeat: Infinity }}
    >
      {/* Wings */}
      <motion.ellipse
        cx="18"
        cy="26"
        rx="12"
        ry="7"
        fill="rgba(255, 215, 0, 0.6)"
        animate={{ scaleY: [1, 0.5, 1] }}
        transition={{ duration: 0.05, repeat: Infinity }}
      />
      <motion.ellipse
        cx="46"
        cy="26"
        rx="12"
        ry="7"
        fill="rgba(255, 215, 0, 0.6)"
        animate={{ scaleY: [1, 0.5, 1] }}
        transition={{ duration: 0.05, repeat: Infinity, delay: 0.025 }}
      />

      {/* Body */}
      <ellipse cx="32" cy="36" rx="12" ry="16" fill="#F4A623" />
      <rect x="22" y="30" width="20" height="3" fill="#1A1A1A" rx="1.5" />
      <rect x="24" y="37" width="16" height="3" fill="#1A1A1A" rx="1.5" />
      <rect x="26" y="44" width="12" height="2" fill="#1A1A1A" rx="1" />

      {/* Head */}
      <circle cx="32" cy="22" r="8" fill="#F4A623" />
      <circle cx="29" cy="20" r="2" fill="#1A1A1A" />
      <circle cx="35" cy="20" r="2" fill="#1A1A1A" />
    </motion.svg>
  );
}

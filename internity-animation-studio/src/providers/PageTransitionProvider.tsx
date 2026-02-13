'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { honeycombTransition } from '@/animations/variants';

interface PageTransitionProviderProps {
  children: React.ReactNode;
}

export function PageTransitionProvider({ children }: PageTransitionProviderProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={honeycombTransition}
        className="min-h-screen"
      >
        {/* Honeycomb overlay for transition */}
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HoneycombOverlay />
        </motion.div>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function HoneycombOverlay() {
  const hexagons = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="absolute inset-0 bg-neutral-950 flex flex-wrap justify-center items-center overflow-hidden">
      {hexagons.map((i) => (
        <motion.div
          key={i}
          className="w-24 h-28 md:w-32 md:h-36 -mx-2 -my-4"
          initial={{ scale: 0, rotate: -30 }}
          animate={{
            scale: [0, 1, 1.5, 0],
            rotate: [-30, 0, 30, 60],
          }}
          transition={{
            duration: 1,
            delay: i * 0.03,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon
              points="50 0, 100 28.75, 100 86.25, 50 115, 0 86.25, 0 28.75"
              fill="#F4A623"
              className="drop-shadow-lg"
            />
            <polygon
              points="50 10, 90 33.75, 90 81.25, 50 105, 10 81.25, 10 33.75"
              fill="#FFD700"
              opacity="0.6"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

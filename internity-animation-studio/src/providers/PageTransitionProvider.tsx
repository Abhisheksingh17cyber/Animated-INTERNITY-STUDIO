'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

function HexGrid() {
  const hexagons = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: (i % 6) * 18 + (Math.floor(i / 6) % 2 === 0 ? 0 : 9),
    y: Math.floor(i / 6) * 16,
    delay: Math.random() * 0.3,
  }));

  return (
    <motion.div
      className="fixed inset-0 z-[9999] pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {hexagons.map((hex) => (
        <motion.div
          key={hex.id}
          className="absolute"
          style={{
            left: `${hex.x}%`,
            top: `${hex.y}%`,
            width: '20%',
            height: '20%',
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: hex.delay,
            ease: [0.25, 0.46, 0.45, 0.94],
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
      ))}
    </motion.div>
  );
}

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    setShowTransition(true);
    const timer = setTimeout(() => setShowTransition(false), 1300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showTransition && <HexGrid key={pathname} />}
      </AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}

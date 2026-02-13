'use client';

import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { SmoothScrollProvider } from '@/providers';
import { HoneybeeCursor, Navbar, FlyingBees, HoneycombBackground, LoadingScreen } from '@/components';
import { useAppStore } from '@/store';

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { isLoading, setLoading } = useAppStore();

  useEffect(() => {
    setMounted(true);
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [setLoading]);

  if (!mounted) {
    return null;
  }

  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <SmoothScrollProvider>
      {/* Loading screen */}
      <LoadingScreen />
      
      {/* Custom cursor (only on non-admin pages) */}
      {!isAdminRoute && <HoneybeeCursor />}
      
      {/* Flying bees background (only on non-admin pages) */}
      {!isAdminRoute && !isLoading && <FlyingBees count={5} />}
      
      {/* Honeycomb background pattern */}
      {!isAdminRoute && <HoneycombBackground />}
      
      {/* Navbar (only on non-admin pages) */}
      {!isAdminRoute && <Navbar />}
      
      {/* Page transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Honeycomb transition overlay */}
          <HoneycombTransition />
          {children}
        </motion.main>
      </AnimatePresence>
    </SmoothScrollProvider>
  );
}

function HoneycombTransition() {
  const pathname = usePathname();

  return (
    <motion.div
      key={`transition-${pathname}`}
      className="fixed inset-0 z-[60] pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="absolute inset-0 bg-neutral-950 flex items-center justify-center">
        <motion.div
          className="grid grid-cols-5 gap-2"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1, 15], opacity: [0, 1, 0] }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-12 h-14"
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.02, duration: 0.3 }}
            >
              <svg viewBox="0 0 100 115" className="w-full h-full">
                <polygon
                  points="50 0, 100 28.75, 100 86.25, 50 115, 0 86.25, 0 28.75"
                  fill="#F4A623"
                />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

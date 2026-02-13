'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function HoneycombBackground() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: document.documentElement.scrollHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const cols = Math.ceil(dimensions.width / 80) + 2;
  const rows = Math.ceil(dimensions.height / 90) + 2;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <defs>
          <pattern
            id="honeycomb-bg"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.5)"
          >
            <polygon
              points="28 0, 56 14, 56 43, 28 57, 0 43, 0 14"
              fill="none"
              stroke="#F4A623"
              strokeWidth="0.5"
            />
            <polygon
              points="28 57, 56 71, 56 100, 28 114, 0 100, 0 71"
              fill="none"
              stroke="#F4A623"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#honeycomb-bg)" />
      </svg>
    </div>
  );
}

export function HoneycombGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2 ${className}`}>
      {Array.from({ length: 21 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
          className="aspect-[1/1.15]"
        >
          <svg viewBox="0 0 100 115" className="w-full h-full">
            <polygon
              points="50 0, 100 28.75, 100 86.25, 50 115, 0 86.25, 0 28.75"
              fill="rgba(244, 166, 35, 0.1)"
              stroke="rgba(244, 166, 35, 0.3)"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export function HoneycombCell({
  children,
  className = '',
  delay = 0,
}: {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -30 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      className={`relative ${className}`}
    >
      <svg
        viewBox="0 0 100 115"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="honey-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#F4A623" />
          </linearGradient>
        </defs>
        <polygon
          points="50 0, 100 28.75, 100 86.25, 50 115, 0 86.25, 0 28.75"
          fill="url(#honey-gradient)"
        />
      </svg>
      <div className="relative z-10 p-6">{children}</div>
    </motion.div>
  );
}

export function HoneyDrip({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }}
      style={{ transformOrigin: 'top' }}
    >
      <svg width="40" height="120" viewBox="0 0 40 120" fill="none">
        <defs>
          <linearGradient id="drip-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F4A623" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </defs>
        <path
          d="M20 0 C20 0 0 40 0 60 C0 80 10 100 20 120 C30 100 40 80 40 60 C40 40 20 0 20 0Z"
          fill="url(#drip-gradient)"
        />
      </svg>
    </motion.div>
  );
}

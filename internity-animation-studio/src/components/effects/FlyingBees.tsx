'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { randomBetween } from '@/lib/utils';

interface Bee {
  id: number;
  startX: number;
  startY: number;
  size: number;
  duration: number;
  delay: number;
}

function SmallBee({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="6" ry="8" fill="#F4A623" />
      <line x1="6" y1="9" x2="18" y2="9" stroke="#1A1A1A" strokeWidth="1.5" />
      <line x1="6" y1="13" x2="18" y2="13" stroke="#1A1A1A" strokeWidth="1.5" />
      <ellipse cx="8" cy="5" rx="4" ry="3" fill="#FFD70040" />
      <ellipse cx="16" cy="5" rx="4" ry="3" fill="#FFD70040" />
    </svg>
  );
}

export default function FlyingBees() {
  const [bees, setBees] = useState<Bee[]>([]);

  useEffect(() => {
    const generatedBees: Bee[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      startX: randomBetween(0, 100),
      startY: randomBetween(0, 100),
      size: randomBetween(12, 24),
      duration: randomBetween(15, 30),
      delay: randomBetween(0, 5),
    }));
    setBees(generatedBees);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {bees.map((bee) => (
        <motion.div
          key={bee.id}
          className="absolute"
          style={{
            left: `${bee.startX}%`,
            top: `${bee.startY}%`,
          }}
          animate={{
            x: [0, 100, -50, 80, -30, 0],
            y: [0, -60, 40, -80, 20, 0],
          }}
          transition={{
            duration: bee.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: bee.delay,
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 5, -5, 0],
              scale: [1, 1.1, 0.9, 1.05, 0.95, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <SmallBee size={bee.size} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

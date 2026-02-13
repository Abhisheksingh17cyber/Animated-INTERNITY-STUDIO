'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { randomBetween } from '@/lib/utils';

interface Bee {
  id: number;
  x: number;
  y: number;
  scale: number;
  duration: number;
  delay: number;
}

export function FlyingBees({ count = 6 }: { count?: number }) {
  const [bees, setBees] = useState<Bee[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateBees = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const newBees: Bee[] = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: randomBetween(0, width),
        y: randomBetween(0, height),
        scale: randomBetween(0.3, 0.6),
        duration: randomBetween(15, 30),
        delay: randomBetween(0, 5),
      }));

      setBees(newBees);
    };

    generateBees();
    window.addEventListener('resize', generateBees);
    return () => window.removeEventListener('resize', generateBees);
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[5] overflow-hidden"
    >
      {bees.map((bee) => (
        <FloatingBee key={bee.id} bee={bee} />
      ))}
    </div>
  );
}

function FloatingBee({ bee }: { bee: Bee }) {
  return (
    <motion.div
      className="absolute"
      style={{ scale: bee.scale }}
      animate={{
        x: [
          bee.x,
          bee.x + randomBetween(-200, 200),
          bee.x + randomBetween(-300, 300),
          bee.x + randomBetween(-200, 200),
          bee.x,
        ],
        y: [
          bee.y,
          bee.y + randomBetween(-150, 150),
          bee.y + randomBetween(-200, 200),
          bee.y + randomBetween(-150, 150),
          bee.y,
        ],
        rotate: [0, 15, -15, 10, 0],
      }}
      transition={{
        duration: bee.duration,
        delay: bee.delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <SmallBee />
    </motion.div>
  );
}

function SmallBee() {
  return (
    <motion.svg
      width="32"
      height="32"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        y: [0, -3, 0, 3, 0],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Wings with flutter animation */}
      <motion.ellipse
        cx="18"
        cy="26"
        rx="10"
        ry="6"
        fill="rgba(255, 215, 0, 0.5)"
        animate={{ scaleY: [1, 0.6, 1] }}
        transition={{ duration: 0.08, repeat: Infinity }}
      />
      <motion.ellipse
        cx="46"
        cy="26"
        rx="10"
        ry="6"
        fill="rgba(255, 215, 0, 0.5)"
        animate={{ scaleY: [1, 0.6, 1] }}
        transition={{ duration: 0.08, repeat: Infinity, delay: 0.04 }}
      />

      {/* Body */}
      <ellipse cx="32" cy="36" rx="12" ry="16" fill="#F4A623" />
      
      {/* Stripes */}
      <rect x="22" y="30" width="20" height="3" fill="#1A1A1A" rx="1.5" />
      <rect x="24" y="37" width="16" height="3" fill="#1A1A1A" rx="1.5" />
      <rect x="26" y="44" width="12" height="2" fill="#1A1A1A" rx="1" />

      {/* Head */}
      <circle cx="32" cy="22" r="8" fill="#F4A623" />
      
      {/* Eyes */}
      <circle cx="29" cy="20" r="2" fill="#1A1A1A" />
      <circle cx="35" cy="20" r="2" fill="#1A1A1A" />

      {/* Antennae */}
      <path
        d="M29 14 Q27 10 24 8"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M35 14 Q37 10 40 8"
        stroke="#1A1A1A"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </motion.svg>
  );
}

// Additional decorative bee for special sections
export function DecorativeBee({ className = '' }: { className?: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -10, 0, 10, 0],
        x: [0, 5, 0, -5, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Wings */}
        <motion.ellipse
          cx="16"
          cy="24"
          rx="14"
          ry="8"
          fill="rgba(255, 215, 0, 0.6)"
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ duration: 0.1, repeat: Infinity }}
          style={{ transformOrigin: '26px 28px' }}
        />
        <motion.ellipse
          cx="48"
          cy="24"
          rx="14"
          ry="8"
          fill="rgba(255, 215, 0, 0.6)"
          animate={{ rotate: [15, -15, 15] }}
          transition={{ duration: 0.1, repeat: Infinity }}
          style={{ transformOrigin: '38px 28px' }}
        />

        {/* Body */}
        <ellipse cx="32" cy="38" rx="14" ry="18" fill="#F4A623" />
        
        {/* Stripes */}
        <rect x="20" y="32" width="24" height="4" fill="#1A1A1A" rx="2" />
        <rect x="22" y="40" width="20" height="4" fill="#1A1A1A" rx="2" />
        <rect x="24" y="48" width="16" height="3" fill="#1A1A1A" rx="1.5" />

        {/* Head */}
        <circle cx="32" cy="20" r="10" fill="#F4A623" />
        
        {/* Eyes */}
        <circle cx="28" cy="18" r="3" fill="#1A1A1A" />
        <circle cx="36" cy="18" r="3" fill="#1A1A1A" />
        <circle cx="29" cy="17" r="1" fill="#FFFFFF" />
        <circle cx="37" cy="17" r="1" fill="#FFFFFF" />

        {/* Antennae */}
        <path
          d="M28 12 Q26 6 22 4"
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M36 12 Q38 6 42 4"
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="22" cy="4" r="2" fill="#F4A623" />
        <circle cx="42" cy="4" r="2" fill="#F4A623" />
      </svg>
    </motion.div>
  );
}

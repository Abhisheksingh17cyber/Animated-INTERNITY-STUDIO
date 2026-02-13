'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useAppStore } from '@/store';

export function HoneybeeCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { cursor, setCursor } = useAppStore();

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if device has fine pointer (mouse)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setCursor({ isClicking: true });
    const handleMouseUp = () => setCursor({ isClicking: false });

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.dataset.hover === 'true'
      ) {
        setCursor({ isHovering: true });
      }
    };

    const handleMouseLeave = () => {
      setCursor({ isHovering: false });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [cursorX, cursorY, setCursor]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main bee cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            scale: cursor.isClicking ? 0.8 : cursor.isHovering ? 1.5 : 1,
            rotate: cursor.isHovering ? [0, 10, -10, 0] : 0,
          }}
          transition={{ duration: 0.2 }}
        >
          <BeeSVG size={cursor.isHovering ? 40 : 32} />
        </motion.div>
      </motion.div>

      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-8 h-8 rounded-full bg-honey-primary/20 blur-sm"
          animate={{
            scale: cursor.isHovering ? 2 : 1,
            opacity: cursor.isClicking ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  );
}

function BeeSVG({ size = 32 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        y: [0, -2, 0, 2, 0],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {/* Wings */}
      <motion.ellipse
        cx="20"
        cy="24"
        rx="12"
        ry="8"
        fill="#FFD700"
        opacity="0.7"
        animate={{ rotate: [-10, 10, -10] }}
        transition={{ duration: 0.1, repeat: Infinity }}
        style={{ transformOrigin: '28px 28px' }}
      />
      <motion.ellipse
        cx="44"
        cy="24"
        rx="12"
        ry="8"
        fill="#FFD700"
        opacity="0.7"
        animate={{ rotate: [10, -10, 10] }}
        transition={{ duration: 0.1, repeat: Infinity }}
        style={{ transformOrigin: '36px 28px' }}
      />

      {/* Body */}
      <ellipse cx="32" cy="36" rx="14" ry="18" fill="#F4A623" />
      
      {/* Stripes */}
      <rect x="20" y="30" width="24" height="4" fill="#1A1A1A" rx="2" />
      <rect x="22" y="38" width="20" height="4" fill="#1A1A1A" rx="2" />
      <rect x="24" y="46" width="16" height="3" fill="#1A1A1A" rx="1.5" />

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

      {/* Stinger */}
      <path
        d="M32 54 L32 60"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

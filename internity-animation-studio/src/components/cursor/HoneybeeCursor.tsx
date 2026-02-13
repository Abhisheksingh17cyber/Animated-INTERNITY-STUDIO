'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function HoneybeeCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  const trailX = useSpring(0, { damping: 20, stiffness: 150 });
  const trailY = useSpring(0, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
      trailX.set(e.clientX - 20);
      trailY.set(e.clientY - 20);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Main cursor - bee */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            rotate: isHovering ? 45 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="relative"
        >
          <div className="w-6 h-6 rounded-full bg-honey-primary flex items-center justify-center text-xs">
            🐝
          </div>
        </motion.div>
      </motion.div>

      {/* Trail */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: trailX, y: trailY }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 2 : 1,
            opacity: isHovering ? 0.3 : 0.15,
          }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 rounded-full border-2 border-honey-primary"
          style={{
            clipPath:
              'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
        />
      </motion.div>
    </>
  );
}

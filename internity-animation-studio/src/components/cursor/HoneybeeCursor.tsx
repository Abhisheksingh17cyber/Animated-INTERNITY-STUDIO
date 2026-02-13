'use client';

import { useEffect, useRef, useCallback } from 'react';

export default function HoneybeeCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  const animate = useCallback(() => {
    // Lerp cursor toward target
    trail.current.x += (pos.current.x - trail.current.x) * 0.15;
    trail.current.y += (pos.current.y - trail.current.y) * 0.15;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${pos.current.x - 12}px, ${pos.current.y - 12}px, 0)`;
    }
    if (trailRef.current) {
      trailRef.current.style.transform = `translate3d(${trail.current.x - 20}px, ${trail.current.y - 20}px, 0)`;
    }

    raf.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hovering = !!(t.tagName === 'A' || t.tagName === 'BUTTON' || t.closest('a') || t.closest('button'));
      cursorRef.current?.classList.toggle('cursor-hover', hovering);
      trailRef.current?.classList.toggle('trail-hover', hovering);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf.current);
    };
  }, [animate]);

  return (
    <>
      <style jsx>{`
        .cursor-bee {
          position: fixed; top: 0; left: 0; z-index: 10000;
          pointer-events: none; will-change: transform;
          width: 24px; height: 24px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          transition: font-size 0.2s ease;
        }
        .cursor-bee.cursor-hover { font-size: 22px; }
        .cursor-trail {
          position: fixed; top: 0; left: 0; z-index: 9999;
          pointer-events: none; will-change: transform;
          width: 40px; height: 40px;
          border: 1.5px solid #F4A623;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          opacity: 0.15;
          transition: opacity 0.3s ease, width 0.3s ease, height 0.3s ease;
        }
        .cursor-trail.trail-hover { opacity: 0.35; width: 56px; height: 56px; }
        @media (max-width: 768px) { .cursor-bee, .cursor-trail { display: none; } }
      `}</style>
      <div ref={cursorRef} className="cursor-bee">🐝</div>
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}

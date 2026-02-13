'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { throttle } from '@/lib/utils';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = throttle((...args: unknown[]) => {
      const e = args[0] as MouseEvent;
      setPosition({ x: e.clientX, y: e.clientY });
    }, 16);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

export function useIntersectionObserver(
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    setIsIntersecting(entries[0]?.isIntersecting ?? false);
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      ...options,
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);

  return { ref, isIntersecting };
}

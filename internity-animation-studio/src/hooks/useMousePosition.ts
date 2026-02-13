'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAppStore } from '@/store';
import { throttle } from '@/lib/utils';

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
}

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  const setCursor = useAppStore((state) => state.setCursor);

  const updatePosition = useCallback(
    throttle((...args: unknown[]) => {
      const e = args[0] as MouseEvent;
      const newPosition: MousePosition = {
        x: e.clientX,
        y: e.clientY,
        normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
        normalizedY: (e.clientY / window.innerHeight) * 2 - 1,
      };
      setPosition(newPosition);
      setCursor({ x: e.clientX, y: e.clientY });
    }, 16),
    [setCursor]
  );

  useEffect(() => {
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, [updatePosition]);

  return position;
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const setScrollProgress = useAppStore((state) => state.setScrollProgress);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
      setScrollProgress(scrollPercent);
    }, 16);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollProgress]);

  return progress;
}

export function useInView(threshold: number = 0.1) {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return { ref: setRef, isInView };
}

export function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = throttle(() => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

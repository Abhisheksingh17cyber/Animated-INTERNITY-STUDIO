'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapScroll(
  callback: (gsapInstance: typeof gsap, ScrollTriggerPlugin: typeof ScrollTrigger) => void,
  deps: unknown[] = []
) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      callback(gsap, ScrollTrigger);
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

export function useTextReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const elements = ref.current!.querySelectorAll('.reveal-text');
      elements.forEach((el) => {
        gsap.from(el, {
          yPercent: 100,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current!.scrollWidth - window.innerWidth;
      
      gsap.to(scrollRef.current, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return { containerRef, scrollRef };
}

export function usePinSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

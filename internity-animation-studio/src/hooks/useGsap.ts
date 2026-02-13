'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseGsapScrollOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

export function useGsapScroll(
  animation: (tl: gsap.core.Timeline, trigger: Element | null) => void,
  options: UseGsapScrollOptions = {},
  deps: React.DependencyList = []
) {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: options.trigger || triggerRef.current,
          start: options.start || 'top center',
          end: options.end || 'bottom center',
          scrub: options.scrub ?? true,
          pin: options.pin || false,
          markers: options.markers || false,
          onEnter: options.onEnter,
          onLeave: options.onLeave,
          onEnterBack: options.onEnterBack,
          onLeaveBack: options.onLeaveBack,
        },
      });

      animation(tl, triggerRef.current);
    });

    return () => ctx.revert();
  }, deps);

  return triggerRef;
}

export function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        yPercent: -100 * speed,
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
    const ctx = gsap.context(() => {
      const chars = ref.current?.querySelectorAll('.char');
      if (!chars) return;

      gsap.fromTo(
        chars,
        {
          y: 100,
          opacity: 0,
          rotateX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.02,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !scrollRef.current) return;

      const scrollWidth = scrollRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;

      gsap.to(scrollRef.current, {
        x: -(scrollWidth - containerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth - containerWidth}`,
          scrub: 1,
          pin: true,
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
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
}

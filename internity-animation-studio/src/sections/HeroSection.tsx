'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { DecorativeBee } from '@/components/effects/FlyingBees';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    if (!headingRef.current || !subheadingRef.current) return;

    // Split text for animation
    const headingSplit = new SplitType(headingRef.current, {
      types: 'chars,words',
      tagName: 'span',
    });

    const subheadingSplit = new SplitType(subheadingRef.current, {
      types: 'chars,words',
      tagName: 'span',
    });

    const ctx = gsap.context(() => {
      // Animate heading characters
      gsap.fromTo(
        headingSplit.chars,
        {
          y: 100,
          opacity: 0,
          rotateX: -90,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.03,
          duration: 1,
          ease: 'power3.out',
          delay: 0.5,
        }
      );

      // Animate subheading
      gsap.fromTo(
        subheadingSplit.chars,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.01,
          duration: 0.8,
          ease: 'power2.out',
          delay: 1.2,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/95 to-neutral-950"
          style={{ opacity }}
        />
        
        {/* Honeycomb pattern background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{ y }}
        >
          <HoneycombPatternBg />
        </motion.div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-honey-primary/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-honey-light/15 rounded-full blur-[80px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center"
        style={{ scale, opacity }}
      >
        {/* Decorative bee */}
        <DecorativeBee className="top-0 right-0 md:right-20 transform translate-x-1/2 -translate-y-full" />

        {/* Main heading */}
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 perspective-1000"
        >
          <span className="text-honey-primary">INTERNITY</span>
          <br />
          <span className="text-neutral-white">ANIMATION</span>
          <br />
          <span className="text-honey-light">STUDIO</span>
        </h1>

        {/* Subheading */}
        <p
          ref={subheadingRef}
          className="text-xl md:text-2xl text-neutral-silver max-w-2xl mx-auto mb-12"
        >
          Crafting immersive digital experiences with the precision of nature
        </p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-honey-primary text-neutral-black font-bold rounded-full overflow-hidden"
            data-hover="true"
          >
            <span className="relative z-10">View Our Work</span>
            <motion.div
              className="absolute inset-0 bg-honey-light"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-honey-primary/50 text-honey-primary font-semibold rounded-full hover:bg-honey-primary/10 transition-colors"
            data-hover="true"
          >
            Start Project
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-neutral-gray text-xs uppercase tracking-widest">
            Scroll to explore
          </span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-honey-primary"
          >
            <path
              d="M12 5L12 19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="rotate(180 12 12)"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Decorative honeycomb corners */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <HexagonCorner />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rotate-180">
        <HexagonCorner />
      </div>
    </section>
  );
}

function HoneycombPatternBg() {
  return (
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 460"
    >
      <defs>
        <pattern
          id="hero-honeycomb"
          width="56"
          height="100"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2)"
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
      <rect width="100%" height="100%" fill="url(#hero-honeycomb)" />
    </svg>
  );
}

function HexagonCorner() {
  return (
    <svg viewBox="0 0 100 115" className="w-full h-full">
      <polygon
        points="50 0, 100 28.75, 100 86.25, 50 115, 0 86.25, 0 28.75"
        fill="none"
        stroke="#F4A623"
        strokeWidth="2"
      />
    </svg>
  );
}

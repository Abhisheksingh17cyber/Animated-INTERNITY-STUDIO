'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to('.hero-bg', {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Title reveal
      gsap.from('.hero-title-word', {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
        ease: 'power4.out',
        delay: 1.5,
      });

      // Subtitle reveal
      gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-black"
    >
      {/* Background */}
      <div className="hero-bg absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-honey-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-honey-dark/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-honey-light/5 rounded-full blur-[120px]" />
      </div>

      {/* Floating hexagons */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: `${40 + i * 10}px`,
              height: `${40 + i * 10}px`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          >
            <div
              className="w-full h-full border border-honey-primary/20"
              style={{
                clipPath:
                  'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 ref={titleRef} className="overflow-hidden">
          <span className="hero-title-word inline-block text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
            We Create
          </span>
          <br />
          <span className="hero-title-word inline-block text-6xl md:text-8xl lg:text-9xl font-bold text-honey-primary leading-tight">
            Extraordinary
          </span>
          <br />
          <span className="hero-title-word inline-block text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
            Animations
          </span>
        </h1>

        <motion.p
          className="hero-subtitle text-lg md:text-xl text-neutral-silver mt-8 max-w-2xl mx-auto"
        >
          Premium animation studio crafting digital experiences with the precision
          and beauty of nature. Every frame tells a story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-honey-primary text-neutral-black font-bold rounded-xl hover:bg-honey-light transition-colors"
          >
            View Our Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-honey-primary/30 text-honey-primary font-bold rounded-xl hover:bg-honey-primary/10 transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-neutral-silver text-xs tracking-widest">
            SCROLL
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-honey-primary to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

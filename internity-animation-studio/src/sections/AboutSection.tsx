'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { DecorativeBee } from '@/components/effects/FlyingBees';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, {
      types: 'chars,words',
      tagName: 'span',
    });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        split.chars,
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.02,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-neutral-950"
    >
      {/* Background elements */}
      <motion.div
        className="absolute left-0 top-1/3 w-1/2 h-96 bg-honey-dark/10 blur-[150px] rounded-full"
        style={{ y }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Honeycomb structure */}
              <HoneycombStructure />

              {/* Decorative bee */}
              <DecorativeBee className="-top-8 -right-8" />

              {/* Stats overlays */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -left-4 bg-neutral-charcoal/90 backdrop-blur-sm rounded-xl p-4 border border-honey-primary/20"
              >
                <span className="text-3xl font-bold text-honey-primary">50+</span>
                <span className="block text-neutral-silver text-sm">Projects Delivered</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-neutral-charcoal/90 backdrop-blur-sm rounded-xl p-4 border border-honey-primary/20"
              >
                <span className="text-3xl font-bold text-honey-light">5+</span>
                <span className="block text-neutral-silver text-sm">Years Experience</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-honey-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white mb-8">
              Crafting Digital{' '}
              <span className="text-honey-primary">Experiences</span>
            </h2>

            <p
              ref={textRef}
              className="text-xl md:text-2xl text-neutral-silver leading-relaxed mb-8"
            >
              Like bees crafting the perfect honeycomb, we meticulously build
              animations that are both structurally sound and visually stunning.
              Our studio brings together creative minds passionate about pushing
              the boundaries of digital storytelling.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-neutral-white mb-2">
                  Our Mission
                </h4>
                <p className="text-neutral-gray text-sm">
                  To transform ideas into captivating visual narratives that
                  inspire and engage.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-white mb-2">
                  Our Vision
                </h4>
                <p className="text-neutral-gray text-sm">
                  To be the go-to studio for brands seeking unforgettable
                  animated experiences.
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-honey-primary text-neutral-black font-bold rounded-full hover:bg-honey-light transition-colors"
              data-hover="true"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HoneycombStructure() {
  const hexagons = [
    { x: 50, y: 50, scale: 1, delay: 0 },
    { x: 0, y: 75, scale: 0.85, delay: 0.1 },
    { x: 100, y: 75, scale: 0.85, delay: 0.15 },
    { x: 25, y: 120, scale: 0.7, delay: 0.2 },
    { x: 75, y: 120, scale: 0.7, delay: 0.25 },
    { x: 50, y: 165, scale: 0.55, delay: 0.3 },
  ];

  return (
    <div className="relative w-full h-full">
      {hexagons.map((hex, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: hex.scale, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: hex.delay, duration: 0.5 }}
          className="absolute"
          style={{
            left: `${hex.x}%`,
            top: `${hex.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="relative"
            style={{
              width: `${120 * hex.scale}px`,
              height: `${138 * hex.scale}px`,
            }}
          >
            <svg viewBox="0 0 100 115" className="w-full h-full">
              <defs>
                <linearGradient id={`hex-grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F4A623" />
                  <stop offset="100%" stopColor="#D4800D" />
                </linearGradient>
              </defs>
              <polygon
                points="50 0, 100 28.75, 100 86.25, 50 115, 0 86.25, 0 28.75"
                fill={`url(#hex-grad-${i})`}
                className="drop-shadow-2xl"
              />
              <polygon
                points="50 15, 85 36, 85 79, 50 100, 15 79, 15 36"
                fill="#1A1A1A"
                opacity="0.8"
              />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

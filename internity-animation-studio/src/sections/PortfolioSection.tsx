'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_ITEMS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

export function PortfolioSection() {
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

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-neutral-950 overflow-hidden"
    >
      {/* Section header (fixed during scroll) */}
      <div className="absolute top-0 left-0 right-0 z-10 py-8 px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto flex items-center justify-between"
        >
          <div>
            <span className="text-honey-primary text-sm font-semibold uppercase tracking-widest mb-2 block">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-white">
              Featured <span className="text-honey-primary">Projects</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-3 border border-honey-primary/50 text-honey-primary font-semibold rounded-full hover:bg-honey-primary/10 transition-colors"
            data-hover="true"
          >
            View All
          </motion.button>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex items-center h-screen pt-24 gap-8 px-6 lg:px-8"
        style={{ width: 'fit-content' }}
      >
        {/* Spacer for proper start positioning */}
        <div className="w-[20vw] flex-shrink-0" />

        {PORTFOLIO_ITEMS.map((item, index) => (
          <PortfolioCard key={item.id} item={item} index={index} />
        ))}

        {/* View all card */}
        <ViewAllCard />

        {/* End spacer */}
        <div className="w-[20vw] flex-shrink-0" />
      </div>

      {/* Progress indicator */}
      <ScrollProgressIndicator containerRef={containerRef} />
    </section>
  );
}

function PortfolioCard({
  item,
  index,
}: {
  item: (typeof PORTFOLIO_ITEMS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative w-[400px] md:w-[500px] lg:w-[600px] flex-shrink-0 group"
      data-hover="true"
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-2xl overflow-hidden bg-neutral-charcoal"
      >
        {/* Image container with honeycomb mask on hover */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Placeholder gradient since we don't have actual images */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${item.color}40 0%, #1A1A1A 50%, ${item.color}20 100%)`,
            }}
          />

          {/* Honeycomb overlay on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{ backgroundColor: item.color }}
          >
            <HoneycombOverlay />
          </motion.div>

          {/* Project number */}
          <div className="absolute top-6 left-6 z-10">
            <span
              className="text-8xl font-bold opacity-20"
              style={{ color: item.color }}
            >
              {String(item.id).padStart(2, '0')}
            </span>
          </div>

          {/* Decorative bee */}
          <motion.div
            className="absolute bottom-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            animate={{
              y: [0, -5, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <SmallBee color={item.color} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <span
            className="text-xs font-semibold uppercase tracking-widest mb-2 block"
            style={{ color: item.color }}
          >
            {item.category}
          </span>
          <h3 className="text-2xl font-bold text-neutral-white mb-2 group-hover:text-honey-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-neutral-silver text-sm">{item.description}</p>
        </div>

        {/* Border accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 origin-left"
          style={{ backgroundColor: item.color }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  );
}

function ViewAllCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-[300px] md:w-[350px] flex-shrink-0"
      data-hover="true"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative aspect-[3/4] rounded-2xl border-2 border-dashed border-honey-primary/30 flex items-center justify-center bg-honey-primary/5 hover:bg-honey-primary/10 transition-colors"
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-20 h-20 mx-auto mb-6"
          >
            <svg viewBox="0 0 100 115" className="w-full h-full">
              <polygon
                points="50 0, 100 28.75, 100 86.25, 50 115, 0 86.25, 0 28.75"
                fill="none"
                stroke="#F4A623"
                strokeWidth="2"
              />
              <text
                x="50"
                y="65"
                textAnchor="middle"
                fill="#F4A623"
                fontSize="24"
                fontWeight="bold"
              >
                +
              </text>
            </svg>
          </motion.div>
          <h3 className="text-xl font-bold text-honey-primary mb-2">
            View All
          </h3>
          <p className="text-neutral-silver text-sm">
            Explore our complete portfolio
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function HoneycombOverlay() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 230">
      <defs>
        <pattern
          id="portfolio-honeycomb"
          width="40"
          height="70"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="20 0, 40 10, 40 30, 20 40, 0 30, 0 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#portfolio-honeycomb)" />
    </svg>
  );
}

function SmallBee({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64" fill="none">
      <ellipse cx="18" cy="26" rx="10" ry="6" fill={`${color}80`} />
      <ellipse cx="46" cy="26" rx="10" ry="6" fill={`${color}80`} />
      <ellipse cx="32" cy="36" rx="12" ry="16" fill={color} />
      <rect x="22" y="30" width="20" height="3" fill="#1A1A1A" rx="1.5" />
      <rect x="24" y="37" width="16" height="3" fill="#1A1A1A" rx="1.5" />
      <circle cx="32" cy="22" r="8" fill={color} />
      <circle cx="29" cy="20" r="2" fill="#1A1A1A" />
      <circle cx="35" cy="20" r="2" fill="#1A1A1A" />
    </svg>
  );
}

function ScrollProgressIndicator({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48">
      <div className="h-1 bg-neutral-charcoal rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-honey-primary"
          style={{ width }}
        />
      </div>
    </div>
  );
}

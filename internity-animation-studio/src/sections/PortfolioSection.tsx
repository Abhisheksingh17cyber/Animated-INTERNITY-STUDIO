'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_ITEMS } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PortfolioSection() {
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

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="relative bg-neutral-charcoal overflow-hidden"
    >
      {/* Section header */}
      <div className="absolute top-8 left-8 z-10">
        <p className="text-honey-primary text-sm tracking-[0.3em] mb-2">
          PORTFOLIO
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Featured <span className="text-honey-primary">Work</span>
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex items-center h-screen gap-8 px-8 pt-24"
        style={{ width: `${PORTFOLIO_ITEMS.length * 40 + 20}vw` }}
      >
        {PORTFOLIO_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex-shrink-0 w-[35vw] h-[60vh] rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Background gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`,
              }}
            />

            {/* Honeycomb overlay */}
            <div className="absolute inset-0 opacity-10">
              {[0, 1, 2].map((j) => (
                <div
                  key={j}
                  className="absolute w-20 h-20"
                  style={{
                    left: `${j * 35 + 10}%`,
                    top: `${j * 30 + 15}%`,
                    clipPath:
                      'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    backgroundColor: item.color,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-neutral-black/90 via-neutral-black/50 to-transparent">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <span
                  className="text-xs tracking-[0.2em] font-medium mb-2 block"
                  style={{ color: item.color }}
                >
                  {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-silver text-sm">
                  {item.description}
                </p>
              </motion.div>
            </div>

            {/* Hover border */}
            <div
              className="absolute inset-0 border-2 border-transparent group-hover:border-honey-primary/30 rounded-2xl transition-colors duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

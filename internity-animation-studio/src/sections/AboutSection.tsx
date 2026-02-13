'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: '200+', label: 'Projects Completed' },
  { value: '50+', label: 'Team Members' },
  { value: '8+', label: 'Years Experience' },
  { value: '30+', label: 'Countries Served' },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-text', {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.stat-item', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-neutral-black overflow-hidden"
    >
      {/* Background honeycomb structure */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {Array.from({ length: 7 }, (_, i) => {
            const positions = [
              { cx: 100, cy: 50 },
              { cx: 145, cy: 75 },
              { cx: 145, cy: 125 },
              { cx: 100, cy: 150 },
              { cx: 55, cy: 125 },
              { cx: 55, cy: 75 },
              { cx: 100, cy: 100 },
            ];
            return (
              <polygon
                key={i}
                points={`${positions[i].cx},${positions[i].cy - 25} ${positions[i].cx + 22},${positions[i].cy - 12} ${positions[i].cx + 22},${positions[i].cy + 12} ${positions[i].cx},${positions[i].cy + 25} ${positions[i].cx - 22},${positions[i].cy + 12} ${positions[i].cx - 22},${positions[i].cy - 12}`}
                fill="none"
                stroke="#F4A623"
                strokeWidth="1"
              />
            );
          })}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div>
            <motion.p
              className="about-text text-honey-primary text-sm tracking-[0.3em] mb-4"
            >
              ABOUT US
            </motion.p>
            <motion.h2
              className="about-text text-5xl md:text-6xl font-bold text-white mb-8"
            >
              Crafted by <span className="text-honey-primary">Nature</span>,
              <br />
              Powered by <span className="text-honey-primary">Code</span>
            </motion.h2>
            <motion.p
              className="about-text text-neutral-silver text-lg leading-relaxed mb-6"
            >
              Like honeybees building the perfect hexagonal structure, we
              architect digital experiences with mathematical precision and
              organic beauty. Every project we undertake is built to be
              efficient, beautiful, and purposeful.
            </motion.p>
            <motion.p
              className="about-text text-neutral-silver leading-relaxed"
            >
              Founded with a passion for pushing creative boundaries, our team
              of artists and developers blend cutting-edge technology with
              timeless design principles. We believe in creating work that not
              only looks stunning but tells compelling stories.
            </motion.p>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-square max-w-md mx-auto"
            >
              {/* Honeycomb visual structure */}
              {Array.from({ length: 7 }, (_, i) => {
                const positions = [
                  { x: 50, y: 20 },
                  { x: 75, y: 35 },
                  { x: 75, y: 60 },
                  { x: 50, y: 75 },
                  { x: 25, y: 60 },
                  { x: 25, y: 35 },
                  { x: 50, y: 47.5 },
                ];
                const colors = [
                  'from-honey-primary/20 to-honey-dark/10',
                  'from-honey-light/15 to-honey-primary/5',
                  'from-honey-dark/20 to-honey-primary/10',
                  'from-honey-primary/15 to-honey-light/5',
                  'from-honey-light/20 to-honey-dark/10',
                  'from-honey-dark/15 to-honey-primary/5',
                  'from-honey-primary/25 to-honey-light/15',
                ];
                return (
                  <motion.div
                    key={i}
                    className="absolute w-[30%] aspect-square"
                    style={{
                      left: `${positions[i].x}%`,
                      top: `${positions[i].y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${colors[i]} backdrop-blur-sm border border-honey-primary/20`}
                      style={{
                        clipPath:
                          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-neutral-gray/20">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <div className="text-4xl md:text-5xl font-bold text-honey-primary mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-silver text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

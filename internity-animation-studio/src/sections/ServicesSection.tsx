'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import { cn } from '@/lib/utils';

const serviceIcons: Record<string, React.ReactNode> = {
  motion: <MotionIcon />,
  '3d': <ThreeDIcon />,
  interactive: <InteractiveIcon />,
  brand: <BrandIcon />,
  web: <WebIcon />,
  vfx: <VfxIcon />,
};

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-neutral-950"
    >
      {/* Background decoration */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-honey-primary/5 blur-[100px] rounded-full"
        style={{ y }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-honey-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-white mb-6">
            Our <span className="text-honey-primary">Services</span>
          </h2>
          <p className="text-neutral-silver text-lg max-w-2xl mx-auto">
            From concept to completion, we craft animations that captivate audiences
            and elevate brands.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative h-full p-8 bg-neutral-charcoal/50 backdrop-blur-sm rounded-2xl border border-neutral-charcoal hover:border-honey-primary/30 transition-colors overflow-hidden"
        data-hover="true"
      >
        {/* Honeycomb background pattern on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
          initial={false}
        >
          <HoneycombPattern />
        </motion.div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-honey-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
          initial={false}
        />

        {/* Icon */}
        <div className="relative w-16 h-16 mb-6">
          <motion.div
            className="w-full h-full bg-gradient-to-br from-honey-primary/20 to-honey-dark/20 rounded-xl flex items-center justify-center"
            whileHover={{
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 },
            }}
          >
            <div className="text-honey-primary w-8 h-8">
              {serviceIcons[service.icon]}
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-neutral-white mb-3 group-hover:text-honey-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-neutral-silver text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Arrow indicator */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-honey-primary"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function HoneycombPattern() {
  return (
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 230"
    >
      <defs>
        <pattern
          id="service-honeycomb"
          width="40"
          height="70"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="20 0, 40 10, 40 30, 20 40, 0 30, 0 10"
            fill="none"
            stroke="#F4A623"
            strokeWidth="0.5"
          />
          <polygon
            points="20 40, 40 50, 40 70, 20 80, 0 70, 0 50"
            fill="none"
            stroke="#F4A623"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#service-honeycomb)" />
    </svg>
  );
}

// Icon components
function MotionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L12 6M12 18L12 22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12L6 12M18 12L22 12M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" />
    </svg>
  );
}

function ThreeDIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
      <path d="M2 17L12 22L22 17" />
      <path d="M2 12L12 17L22 12" />
    </svg>
  );
}

function InteractiveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10" />
      <path d="M12 10L16 6M16 6V10M16 6H12" />
    </svg>
  );
}

function BrandIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6V12L16 14" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21H16M12 17V21" />
    </svg>
  );
}

function VfxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21" />
      <path d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { SERVICES } from '@/lib/constants';
import { Footer } from '@/sections';
import {
  Film,
  Palette,
  Box,
  Sparkles,
  Globe,
  Smartphone,
  LucideIcon,
} from 'lucide-react';

const iconMap: { [key: string]: LucideIcon } = {
  Film,
  Palette,
  Box,
  Sparkles,
  Globe,
  Smartphone,
};

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section ref={containerRef} className="min-h-screen pt-32 pb-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-honey-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              What We Do
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-white mb-6">
              Our <span className="text-honey-primary">Services</span>
            </h1>
            <p className="text-neutral-silver text-lg max-w-2xl mx-auto">
              From concept to creation, we deliver exceptional animation and design
              services that bring your vision to life.
            </p>
          </motion.div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                  data-hover="true"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="relative p-8 rounded-3xl bg-gradient-to-br from-neutral-charcoal to-neutral-900 border border-honey-primary/10 hover:border-honey-primary/30 transition-colors overflow-hidden"
                  >
                    {/* Background glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-honey-primary/10 rounded-full blur-3xl group-hover:bg-honey-primary/20 transition-colors" />

                    {/* Icon */}
                    <motion.div
                      className="relative w-16 h-16 mb-6 rounded-2xl bg-honey-primary/10 flex items-center justify-center group-hover:bg-honey-primary/20 transition-colors"
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent className="w-8 h-8 text-honey-primary" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="relative text-2xl font-bold text-neutral-white mb-4 group-hover:text-honey-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="relative text-neutral-silver leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="relative space-y-2">
                      {getServiceFeatures(service.title).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-sm text-neutral-silver"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-honey-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Honeycomb pattern overlay */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                      <HoneycombPattern />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Process section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-white mb-4">
                Our <span className="text-honey-primary">Process</span>
              </h2>
              <p className="text-neutral-silver max-w-xl mx-auto">
                A streamlined approach to bringing your creative vision to life
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.15 }}
                  className="relative text-center p-6"
                  data-hover="true"
                >
                  {/* Step number */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-honey-primary/10 border-2 border-honey-primary/30 mb-4">
                    <span className="text-2xl font-bold text-honey-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-honey-primary/30 to-transparent" />
                  )}

                  <h3 className="text-xl font-bold text-neutral-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-silver text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-20 p-12 rounded-3xl bg-gradient-to-br from-honey-primary/10 to-transparent border border-honey-primary/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-neutral-silver mb-8 max-w-lg mx-auto">
              Let&apos;s collaborate and create something extraordinary together.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-honey-primary text-neutral-black font-semibold rounded-full hover:bg-honey-light transition-colors"
              data-hover="true"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}

const processSteps = [
  {
    title: 'Discovery',
    description: 'Understanding your vision, goals, and target audience.',
  },
  {
    title: 'Concept',
    description: 'Developing creative concepts and storyboards.',
  },
  {
    title: 'Production',
    description: 'Bringing your vision to life with precision.',
  },
  {
    title: 'Delivery',
    description: 'Final polish, optimization, and project handoff.',
  },
];

function getServiceFeatures(title: string): string[] {
  const features: { [key: string]: string[] } = {
    '2D Animation': [
      'Character animation',
      'Explainer videos',
      'Motion graphics',
      'Animated logos',
    ],
    '3D Animation': [
      'Product visualization',
      '3D character design',
      'Architectural renders',
      'VFX integration',
    ],
    'Motion Design': [
      'UI/UX animations',
      'Brand animations',
      'Promotional videos',
      'Social media content',
    ],
    'Visual Effects': [
      'Compositing',
      'Green screen',
      'Particle effects',
      'Color grading',
    ],
    'Web Animation': [
      'Interactive websites',
      'Scroll animations',
      'Micro-interactions',
      'Loading animations',
    ],
    'App Development': [
      'Mobile animations',
      'App prototypes',
      'Lottie animations',
      'Gesture-based design',
    ],
  };
  return features[title] || ['Custom solutions', 'Expert team', 'Fast delivery'];
}

function HoneycombPattern() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 230">
      <defs>
        <pattern
          id="services-honeycomb"
          width="40"
          height="70"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="20 0, 40 10, 40 30, 20 40, 0 30, 0 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#services-honeycomb)" />
    </svg>
  );
}

'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/animations/variants';
import { Footer } from '@/sections';
import { Film, Palette, Box, Sparkles, Globe, Smartphone } from 'lucide-react';

const services = [
  {
    id: '1',
    title: '2D Animation',
    description: 'Hand-crafted frame-by-frame animations that bring stories to life with warmth and character. From character animation to explainer videos.',
    icon: Film,
    color: '#FFD700',
    features: ['Character Animation', 'Explainer Videos', 'Storyboarding', 'Frame-by-Frame', 'Rotoscoping'],
  },
  {
    id: '2',
    title: '3D Animation',
    description: 'Stunning three-dimensional worlds rendered with photorealistic detail and artistic vision. Product visualization to full cinematic sequences.',
    icon: Palette,
    color: '#F4A623',
    features: ['Character Modeling', 'Environment Design', 'Product Visualization', 'Cinematic Sequences', 'Texturing & Lighting'],
  },
  {
    id: '3',
    title: 'Motion Design',
    description: 'Dynamic motion graphics that transform complex ideas into engaging visual narratives. Brand animations and UI motion.',
    icon: Box,
    color: '#D4800D',
    features: ['Brand Animation', 'Title Sequences', 'Infographics', 'Social Media Content', 'Kinetic Typography'],
  },
  {
    id: '4',
    title: 'Visual Effects',
    description: 'Seamless VFX integration that pushes the boundaries of what is visually possible. Compositing and particle simulations.',
    icon: Sparkles,
    color: '#FFB347',
    features: ['Compositing', 'Particle Effects', 'Green Screen', 'CGI Integration', 'Color Grading'],
  },
  {
    id: '5',
    title: 'Web Animation',
    description: 'Interactive web experiences with buttery-smooth animations and micro-interactions. GSAP, Framer Motion, and WebGL.',
    icon: Globe,
    color: '#FFC107',
    features: ['Micro-interactions', 'Scroll Animations', 'Page Transitions', 'WebGL/Three.js', 'SVG Animation'],
  },
  {
    id: '6',
    title: 'App Development',
    description: 'Mobile and desktop applications with fluid animations and intuitive interfaces. React Native and Flutter.',
    icon: Smartphone,
    color: '#FFD700',
    features: ['React Native', 'Flutter', 'iOS/Android', 'Gesture Animations', 'Haptic Feedback'],
  },
];

const processSteps = [
  { step: '01', title: 'Discovery', description: 'We learn about your vision, goals, and audience to craft the perfect strategy.' },
  { step: '02', title: 'Concept', description: 'Our team develops creative concepts, storyboards, and style frames for approval.' },
  { step: '03', title: 'Production', description: 'We bring the vision to life with meticulous attention to detail and craft.' },
  { step: '04', title: 'Delivery', description: 'Final review, optimization, and delivery in all required formats.' },
];

export default function ServicesPage() {
  return (
    <>
      <section className="min-h-screen pt-32 pb-20 px-6 bg-neutral-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-honey-primary text-sm tracking-[0.3em] mb-4">
              WHAT WE DO
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-neutral-silver max-w-2xl mx-auto text-lg">
              From concept to delivery, we offer a full spectrum of animation and
              creative services to bring your vision to life.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32"
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group relative p-8 bg-neutral-charcoal rounded-2xl border border-neutral-gray/30 hover:border-honey-primary/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-honey-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex flex-col md:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className="w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                          backgroundColor: `${service.color}20`,
                        }}
                      >
                        <IconComponent size={24} style={{ color: service.color }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-honey-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-neutral-silver mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-3 py-1 rounded-full bg-neutral-gray/50 text-neutral-silver border border-neutral-gray/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <p className="text-honey-primary text-sm tracking-[0.3em] mb-4">
                HOW WE WORK
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Our Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center group"
                >
                  <div className="text-6xl font-bold text-honey-primary/10 group-hover:text-honey-primary/20 transition-colors mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-silver text-sm">
                    {step.description}
                  </p>

                  {/* Connector line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-gradient-to-r from-honey-primary/20 to-transparent translate-x-1/2" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-20 bg-neutral-charcoal rounded-3xl border border-neutral-gray/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to <span className="text-honey-primary">Start</span>?
            </h2>
            <p className="text-neutral-silver max-w-xl mx-auto mb-8">
              Let&apos;s discuss your project and find the perfect solution for
              your needs.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-honey-primary text-neutral-black font-bold rounded-xl hover:bg-honey-light transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}

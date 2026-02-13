'use client';

import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/animations/variants';

export default function ServicesSection() {
  return (
    <section className="relative py-32 px-6 bg-neutral-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-honey-primary text-sm tracking-[0.3em] mb-4">
            WHAT WE DO
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Our <span className="text-honey-primary">Services</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 bg-neutral-charcoal rounded-2xl border border-neutral-gray/30 hover:border-honey-primary/50 transition-all duration-500"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-honey-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Hexagon icon */}
              <div className="relative mb-6">
                <div
                  className="w-16 h-16 bg-honey-primary/10 flex items-center justify-center text-2xl group-hover:bg-honey-primary/20 transition-colors"
                  style={{
                    clipPath:
                      'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
                  {service.icon}
                </div>
              </div>

              <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-honey-primary transition-colors">
                {service.title}
              </h3>
              <p className="relative text-neutral-silver text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <motion.div
                className="relative mt-6 text-honey-primary opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ x: 5 }}
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

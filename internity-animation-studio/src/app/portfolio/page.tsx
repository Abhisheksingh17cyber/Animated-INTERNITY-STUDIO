'use client';

import { motion } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '@/lib/constants';
import { Footer } from '@/sections';

export default function PortfolioPage() {
  return (
    <>
      <section className="min-h-screen pt-32 pb-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-honey-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-white mb-6">
              Creative <span className="text-honey-primary">Portfolio</span>
            </h1>
            <p className="text-neutral-silver text-lg max-w-2xl mx-auto">
              Explore our collection of animations, motion designs, and interactive
              experiences crafted with precision and creativity.
            </p>
          </motion.div>

          {/* Portfolio grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative"
                data-hover="true"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl bg-neutral-charcoal"
                >
                  {/* Image placeholder */}
                  <div
                    className="aspect-[4/3] relative"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}40 0%, #1A1A1A 50%, ${item.color}20 100%)`,
                    }}
                  >
                    {/* Project number */}
                    <span
                      className="absolute top-6 left-6 text-8xl font-bold opacity-20"
                      style={{ color: item.color }}
                    >
                      {String(item.id).padStart(2, '0')}
                    </span>

                    {/* Honeycomb overlay on hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                      style={{ backgroundColor: item.color }}
                    >
                      <HoneycombPattern />
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
                    <h3 className="text-xl font-bold text-neutral-white mb-2 group-hover:text-honey-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-silver text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
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
            ))}
          </div>

          {/* Load more button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-honey-primary/50 text-honey-primary font-semibold rounded-full hover:bg-honey-primary/10 transition-colors"
              data-hover="true"
            >
              Load More Projects
            </motion.button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function HoneycombPattern() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 230">
      <defs>
        <pattern
          id="portfolio-page-honeycomb"
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
      <rect width="100%" height="100%" fill="url(#portfolio-page-honeycomb)" />
    </svg>
  );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '@/lib/constants';
import { Footer } from '@/sections';

const categories = ['All', '2D Animation', '3D Animation', 'Motion Design', 'Visual Effects', 'Web Animation'];

const extendedPortfolio = [
  ...PORTFOLIO_ITEMS,
  {
    id: '6',
    title: 'Pollen Path',
    category: '2D Animation',
    description: 'A whimsical 2D animation following the journey of pollen.',
    image: '/images/portfolio/pollen-path.jpg',
    color: '#FFB347',
  },
  {
    id: '7',
    title: 'Wax Architecture',
    category: '3D Animation',
    description: 'Exploring the geometric perfection of honeycomb structures.',
    image: '/images/portfolio/wax-architecture.jpg',
    color: '#F4A623',
  },
  {
    id: '8',
    title: 'Colony Rhythm',
    category: 'Motion Design',
    description: 'Motion graphics inspired by the dance language of bees.',
    image: '/images/portfolio/colony-rhythm.jpg',
    color: '#FFD700',
  },
  {
    id: '9',
    title: 'Digital Meadow',
    category: 'Visual Effects',
    description: 'VFX-heavy showcase of a digital pollinator paradise.',
    image: '/images/portfolio/digital-meadow.jpg',
    color: '#D4800D',
  },
  {
    id: '10',
    title: 'Hexagonal UI',
    category: 'Web Animation',
    description: 'A fully interactive hexagonal interface system.',
    image: '/images/portfolio/hexagonal-ui.jpg',
    color: '#FFC107',
  },
  {
    id: '11',
    title: 'Amber Glow',
    category: '2D Animation',
    description: 'Warm-toned animation celebrating the golden hour.',
    image: '/images/portfolio/amber-glow.jpg',
    color: '#FFB347',
  },
  {
    id: '12',
    title: 'Propolis Dream',
    category: '3D Animation',
    description: 'Surreal 3D environments inspired by natural resin.',
    image: '/images/portfolio/propolis-dream.jpg',
    color: '#D4800D',
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9);

  const filtered = activeCategory === 'All'
    ? extendedPortfolio
    : extendedPortfolio.filter((item) => item.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);

  return (
    <>
      <section className="min-h-screen pt-32 pb-20 px-6 bg-neutral-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-honey-primary text-sm tracking-[0.3em] mb-4">
              OUR WORK
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Portfolio
            </h1>
            <p className="text-neutral-silver max-w-2xl mx-auto text-lg">
              Explore our collection of award-winning animations, motion graphics,
              and digital experiences.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(9);
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-honey-primary text-neutral-black'
                    : 'bg-neutral-charcoal text-neutral-silver hover:bg-neutral-gray hover:text-white border border-neutral-gray/30'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-neutral-charcoal"
                >
                  {/* Background */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}15, ${item.color}05)`,
                    }}
                  />

                  {/* Honeycomb overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    {Array.from({ length: 4 }, (_, i) => (
                      <div
                        key={i}
                        className="absolute w-16 h-16"
                        style={{
                          left: `${(i % 2) * 50 + 15}%`,
                          top: `${Math.floor(i / 2) * 50 + 15}%`,
                          clipPath:
                            'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                          backgroundColor: item.color,
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-neutral-black/90 via-neutral-black/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span
                      className="text-xs tracking-[0.2em] font-medium mb-2 block"
                      style={{ color: item.color }}
                    >
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-neutral-silver text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.description}
                    </p>
                  </div>

                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-honey-primary/30 rounded-2xl transition-colors duration-500" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More */}
          {visibleCount < filtered.length && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-8 py-4 border border-honey-primary/30 text-honey-primary font-bold rounded-xl hover:bg-honey-primary/10 transition-colors"
              >
                Load More Projects
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}

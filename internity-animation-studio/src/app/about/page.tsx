'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/animations/variants';
import { Footer } from '@/sections';

const stats = [
  { value: '50+', label: 'Team Members' },
  { value: '200+', label: 'Projects Completed' },
  { value: '8+', label: 'Years Experience' },
  { value: '30+', label: 'Countries Served' },
];

const values = [
  {
    title: 'Precision',
    description: 'Like the perfect hexagonal cells of a honeycomb, every detail matters in our work.',
    icon: '⬡',
  },
  {
    title: 'Collaboration',
    description: 'Just as bees work together in harmony, we believe the best work comes from teamwork.',
    icon: '🤝',
  },
  {
    title: 'Innovation',
    description: 'Constantly pushing boundaries and exploring new techniques and technologies.',
    icon: '💡',
  },
  {
    title: 'Quality',
    description: 'We never compromise on quality. Every frame, every pixel is crafted with care.',
    icon: '✨',
  },
];

const team = [
  { name: 'Alex Rivera', role: 'Creative Director', avatar: '🎨' },
  { name: 'Sarah Chen', role: 'Lead Animator', avatar: '✏️' },
  { name: 'Marcus Johnson', role: 'Technical Director', avatar: '💻' },
  { name: 'Emma Williams', role: 'Motion Designer', avatar: '🎬' },
];

function getHexagonPoints(cx: number, cy: number, r: number): string {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    points.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return points.join(' ');
}

export default function AboutPage() {
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
              WHO WE ARE
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-neutral-silver max-w-2xl mx-auto text-lg">
              We are a passionate team of artists, animators, and developers
              creating extraordinary digital experiences.
            </p>
          </motion.div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-honey-primary">Story</span>
              </h2>
              <div className="space-y-4 text-neutral-silver leading-relaxed">
                <p>
                  Founded in 2016, INTERNITY started as a small team of passionate
                  animators with a big dream — to create digital experiences that
                  feel alive and meaningful.
                </p>
                <p>
                  Inspired by the efficiency and beauty of honeybees, we built our
                  studio around the principles of precision, collaboration, and
                  tireless dedication to craft. Just as every cell in a honeycomb
                  serves a purpose, every frame in our animations tells a story.
                </p>
                <p>
                  Today, we&apos;ve grown into a diverse team of over 50 talented
                  individuals, serving clients across 30+ countries. But our core
                  mission remains the same: to create extraordinary digital
                  experiences that move people.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Honeycomb structure */}
              <div className="relative w-full aspect-square max-w-sm mx-auto">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {[
                    { cx: 150, cy: 80, color: '#FFD700' },
                    { cx: 210, cy: 115, color: '#F4A623' },
                    { cx: 210, cy: 185, color: '#D4800D' },
                    { cx: 150, cy: 220, color: '#FFB347' },
                    { cx: 90, cy: 185, color: '#FFC107' },
                    { cx: 90, cy: 115, color: '#F4A623' },
                    { cx: 150, cy: 150, color: '#FFD700' },
                  ].map((hex, i) => (
                    <motion.polygon
                      key={i}
                      points={getHexagonPoints(hex.cx, hex.cy, 40)}
                      fill={`${hex.color}15`}
                      stroke={hex.color}
                      strokeWidth="1"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    />
                  ))}
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 py-16 border-y border-neutral-gray/20"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-honey-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-silver text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <p className="text-honey-primary text-sm tracking-[0.3em] mb-4">
                OUR VALUES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                What Drives Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group p-6 bg-neutral-charcoal rounded-2xl border border-neutral-gray/30 hover:border-honey-primary/50 transition-all text-center"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-honey-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-neutral-silver text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <p className="text-honey-primary text-sm tracking-[0.3em] mb-4">
                THE TEAM
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Meet the Hive
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group text-center"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div
                      className="w-full h-full bg-neutral-charcoal border border-neutral-gray/30 group-hover:border-honey-primary/50 flex items-center justify-center text-5xl transition-colors"
                      style={{
                        clipPath:
                          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      {member.avatar}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-honey-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-neutral-silver text-sm">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}

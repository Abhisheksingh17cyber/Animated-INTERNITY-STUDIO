'use client';

import { motion } from 'framer-motion';
import { Footer } from '@/sections';
import { Users, Award, Calendar, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: '50+', label: 'Team Members' },
  { icon: Award, value: '200+', label: 'Projects Completed' },
  { icon: Calendar, value: '8+', label: 'Years Experience' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
];

const team = [
  {
    name: 'Alex Rivera',
    role: 'Creative Director',
    image: '#F4A623',
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Animator',
    image: '#D4800D',
  },
  {
    name: 'Marcus Johnson',
    role: '3D Artist',
    image: '#FFD700',
  },
  {
    name: 'Emily Davis',
    role: 'Motion Designer',
    image: '#FFF3D6',
  },
];

const values = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge animation techniques.',
  },
  {
    title: 'Quality',
    description: 'Delivering exceptional results that exceed expectations.',
  },
  {
    title: 'Collaboration',
    description: 'Working closely with clients to realize their vision.',
  },
  {
    title: 'Passion',
    description: 'Loving what we do and it shows in every project.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="min-h-screen pt-32 pb-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="text-honey-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-white mb-6">
              Meet <span className="text-honey-primary">INTERNITY</span>
            </h1>
            <p className="text-neutral-silver text-lg max-w-2xl mx-auto">
              We&apos;re a passionate team of animators, designers, and storytellers
              dedicated to creating extraordinary visual experiences.
            </p>
          </motion.div>

          {/* Story section */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-6">
                Our <span className="text-honey-primary">Story</span>
              </h2>
              <div className="space-y-4 text-neutral-silver leading-relaxed">
                <p>
                  Founded in 2016, INTERNITY Animation Studio began with a simple
                  mission: to create animations that inspire and captivate audiences
                  worldwide.
                </p>
                <p>
                  What started as a small team of three passionate animators has
                  grown into a full-service animation studio with over 50 talented
                  professionals.
                </p>
                <p>
                  Our name comes from combining &quot;Infinite&quot; and &quot;Eternity&quot; — 
                  representing our commitment to creating timeless animations that
                  leave lasting impressions.
                </p>
                <p>
                  Today, we work with clients ranging from startups to Fortune 500
                  companies, helping them tell their stories through the power of
                  motion.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              {/* Honeycomb structure visual */}
              <div className="relative aspect-square">
                <HoneycombStructure />
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-neutral-charcoal/50 border border-honey-primary/10"
                  data-hover="true"
                >
                  <IconComponent className="w-8 h-8 text-honey-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-honey-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-neutral-silver text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                Our <span className="text-honey-primary">Values</span>
              </h2>
              <p className="text-neutral-silver max-w-xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-neutral-charcoal to-neutral-900 border border-honey-primary/10 hover:border-honey-primary/30 transition-colors"
                  data-hover="true"
                >
                  <div className="w-12 h-12 rounded-xl bg-honey-primary/10 flex items-center justify-center mb-4">
                    <div className="w-3 h-3 bg-honey-primary rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-neutral-silver text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                Our <span className="text-honey-primary">Team</span>
              </h2>
              <p className="text-neutral-silver max-w-xl mx-auto">
                The talented people behind our creative magic
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="group text-center"
                  data-hover="true"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative mb-4"
                  >
                    {/* Avatar placeholder */}
                    <div
                      className="w-32 h-32 mx-auto rounded-full relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${member.image}40 0%, #1A1A1A 50%, ${member.image}20 100%)`,
                      }}
                    >
                      {/* Bee icon placeholder */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl">🐝</span>
                      </div>
                    </div>

                    {/* Ring */}
                    <div
                      className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-transparent group-hover:border-honey-primary/50 transition-colors"
                      style={{ left: '50%', transform: 'translateX(-50%)' }}
                    />
                  </motion.div>

                  <h3 className="text-lg font-bold text-neutral-white group-hover:text-honey-primary transition-colors">
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

function HoneycombStructure() {
  const hexagons = [
    { x: 50, y: 40, size: 60, opacity: 0.8 },
    { x: 110, y: 75, size: 60, opacity: 0.9 },
    { x: 50, y: 110, size: 60, opacity: 0.7 },
    { x: 110, y: 145, size: 60, opacity: 0.85 },
    { x: 170, y: 40, size: 60, opacity: 0.6 },
    { x: 170, y: 110, size: 60, opacity: 0.75 },
    { x: 230, y: 75, size: 60, opacity: 0.5 },
  ];

  return (
    <svg className="w-full h-full" viewBox="0 0 300 200">
      <defs>
        <linearGradient id="about-hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4A623" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4800D" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {hexagons.map((hex, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: hex.opacity, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
        >
          <polygon
            points={getHexagonPoints(hex.x, hex.y, hex.size)}
            fill="url(#about-hex-gradient)"
            stroke="#F4A623"
            strokeWidth="1"
          />
        </motion.g>
      ))}

      {/* Central bee */}
      <motion.text
        x="140"
        y="105"
        fontSize="40"
        textAnchor="middle"
        dominantBaseline="middle"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        🐝
      </motion.text>
    </svg>
  );
}

function getHexagonPoints(cx: number, cy: number, size: number): string {
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const x = cx + size * Math.cos(angle);
    const y = cy + size * Math.sin(angle);
    points.push(`${x},${y}`);
  }
  return points.join(' ');
}

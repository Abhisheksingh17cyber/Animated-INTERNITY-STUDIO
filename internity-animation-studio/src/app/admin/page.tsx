'use client';

import { motion } from 'framer-motion';
import { Eye, Users, FolderOpen, MessageSquare, TrendingUp, ArrowUpRight } from 'lucide-react';

const stats = [
  { label: 'Total Views', value: '24,567', change: '+12.5%', icon: Eye, color: '#FFD700' },
  { label: 'Visitors', value: '8,234', change: '+8.2%', icon: Users, color: '#F4A623' },
  { label: 'Projects', value: '48', change: '+3', icon: FolderOpen, color: '#D4800D' },
  { label: 'Messages', value: '156', change: '+24', icon: MessageSquare, color: '#FFB347' },
];

const recentActivity = [
  { action: 'New message from Sarah Chen', time: '2 minutes ago', type: 'message' },
  { action: 'Portfolio item "Honey Flow" updated', time: '1 hour ago', type: 'update' },
  { action: 'New visitor from United Kingdom', time: '3 hours ago', type: 'visitor' },
  { action: 'Contact form submission received', time: '5 hours ago', type: 'message' },
  { action: 'Analytics report generated', time: '1 day ago', type: 'report' },
];

const recentProjects = [
  { name: 'Honey Flow', status: 'Published', progress: 100, category: '2D Animation' },
  { name: 'Hive Mind', status: 'In Progress', progress: 75, category: '3D Animation' },
  { name: 'Nectar Dreams', status: 'Review', progress: 90, category: 'Motion Design' },
  { name: 'Swarm Logic', status: 'Draft', progress: 30, category: 'Visual Effects' },
];

const weeklyData = [
  { day: 'Mon', value: 65 },
  { day: 'Tue', value: 80 },
  { day: 'Wed', value: 45 },
  { day: 'Thu', value: 90 },
  { day: 'Fri', value: 70 },
  { day: 'Sat', value: 55 },
  { day: 'Sun', value: 40 },
];

export default function AdminDashboard() {
  const maxValue = Math.max(...weeklyData.map((d) => d.value));

  return (
    <div className="pt-12 md:pt-0">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-neutral-silver">Welcome back! Here&apos;s your studio overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-charcoal rounded-2xl p-6 border border-neutral-gray/20 hover:border-honey-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 flex items-center justify-center"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    backgroundColor: `${stat.color}20`,
                  }}
                >
                  <IconComponent size={18} style={{ color: stat.color }} />
                </div>
                <span className="flex items-center gap-1 text-xs text-green-400">
                  <TrendingUp size={12} /> {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-neutral-silver text-sm mt-1">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-neutral-charcoal rounded-2xl p-6 border border-neutral-gray/20"
        >
          <h2 className="text-lg font-bold text-white mb-6">Weekly Traffic</h2>
          <div className="flex items-end gap-4 h-48">
            {weeklyData.map((data, index) => (
              <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(data.value / maxValue) * 100}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="w-full bg-gradient-to-t from-honey-primary to-honey-light rounded-t-lg min-h-[4px]"
                />
                <span className="text-xs text-neutral-silver">{data.day}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-neutral-charcoal rounded-2xl p-6 border border-neutral-gray/20"
        >
          <h2 className="text-lg font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-honey-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-white">{activity.action}</p>
                  <p className="text-xs text-neutral-silver mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Projects Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 bg-neutral-charcoal rounded-2xl p-6 border border-neutral-gray/20"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-white">Recent Projects</h2>
          <a
            href="/admin/portfolio"
            className="flex items-center gap-1 text-sm text-honey-primary hover:text-honey-light transition-colors"
          >
            View All <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-neutral-gray/20">
                <th className="pb-3 text-sm text-neutral-silver font-medium">Project</th>
                <th className="pb-3 text-sm text-neutral-silver font-medium">Category</th>
                <th className="pb-3 text-sm text-neutral-silver font-medium">Status</th>
                <th className="pb-3 text-sm text-neutral-silver font-medium">Progress</th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.map((project, index) => (
                <tr key={index} className="border-b border-neutral-gray/10 last:border-0">
                  <td className="py-4 text-white font-medium">{project.name}</td>
                  <td className="py-4 text-neutral-silver text-sm">{project.category}</td>
                  <td className="py-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        project.status === 'Published'
                          ? 'bg-green-500/10 text-green-400'
                          : project.status === 'In Progress'
                          ? 'bg-honey-primary/10 text-honey-primary'
                          : project.status === 'Review'
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-neutral-gray/30 text-neutral-silver'
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-neutral-gray/30 rounded-full max-w-[100px]">
                        <div
                          className="h-full bg-honey-primary rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-neutral-silver">{project.progress}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

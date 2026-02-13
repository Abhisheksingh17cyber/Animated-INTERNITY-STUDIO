'use client';

import { motion } from 'framer-motion';
import {
  Eye,
  Users,
  FolderKanban,
  MessageSquare,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
} from 'lucide-react';

const stats = [
  {
    title: 'Total Views',
    value: '12,845',
    change: '+12.5%',
    trend: 'up',
    icon: Eye,
    color: '#F4A623',
  },
  {
    title: 'Visitors',
    value: '3,246',
    change: '+8.2%',
    trend: 'up',
    icon: Users,
    color: '#22C55E',
  },
  {
    title: 'Projects',
    value: '24',
    change: '+3',
    trend: 'up',
    icon: FolderKanban,
    color: '#3B82F6',
  },
  {
    title: 'Messages',
    value: '18',
    change: '-4.1%',
    trend: 'down',
    icon: MessageSquare,
    color: '#EF4444',
  },
];

const recentActivity = [
  {
    action: 'New message from John Doe',
    time: '2 minutes ago',
    type: 'message',
  },
  {
    action: 'Portfolio item "Neon Dreams" updated',
    time: '1 hour ago',
    type: 'update',
  },
  {
    action: 'New visitor from United States',
    time: '3 hours ago',
    type: 'visitor',
  },
  {
    action: 'Contact form submission',
    time: '5 hours ago',
    type: 'message',
  },
  {
    action: 'New project "Tech Startup" added',
    time: '1 day ago',
    type: 'project',
  },
];

const recentProjects = [
  { name: 'Brand Animation', status: 'Completed', progress: 100 },
  { name: 'Product Video', status: 'In Progress', progress: 75 },
  { name: 'Website Animations', status: 'In Progress', progress: 45 },
  { name: 'Social Media Pack', status: 'Planning', progress: 10 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-white">
            Dashboard
          </h1>
          <p className="text-neutral-silver mt-1">
            Welcome back! Here&apos;s what&apos;s happening.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 bg-honey-primary text-neutral-black font-semibold rounded-xl"
        >
          <Calendar className="w-4 h-4" />
          Last 30 Days
        </motion.button>
      </div>

      {/* Stats grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          const TrendIcon = stat.trend === 'up' ? ArrowUpRight : ArrowDownRight;

          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-neutral-charcoal border border-honey-primary/10 hover:border-honey-primary/20 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <IconComponent
                    className="w-6 h-6"
                    style={{ color: stat.color }}
                  />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  <TrendIcon className="w-4 h-4" />
                  {stat.change}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-neutral-white mb-1">
                {stat.value}
              </h3>
              <p className="text-neutral-silver text-sm">{stat.title}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Charts and activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 p-6 rounded-2xl bg-neutral-charcoal border border-honey-primary/10"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-neutral-white">
              Traffic Overview
            </h2>
            <div className="flex gap-2">
              {['Week', 'Month', 'Year'].map((period) => (
                <button
                  key={period}
                  className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                    period === 'Month'
                      ? 'bg-honey-primary/20 text-honey-primary'
                      : 'text-neutral-silver hover:text-neutral-white'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* Simple chart representation */}
          <div className="relative h-64">
            <div className="absolute inset-0 flex items-end justify-between gap-2 px-4">
              {chartData.map((data, index) => (
                <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${data.value}%` }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                    className="w-full bg-gradient-to-t from-honey-primary/40 to-honey-primary rounded-t-lg relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 rounded text-xs text-neutral-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {data.visitors} visitors
                    </div>
                  </motion.div>
                  <span className="text-xs text-neutral-silver">{data.day}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-neutral-charcoal border border-honey-primary/10"
        >
          <h2 className="text-lg font-bold text-neutral-white mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === 'message'
                      ? 'bg-blue-500'
                      : activity.type === 'visitor'
                      ? 'bg-green-500'
                      : 'bg-honey-primary'
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-neutral-white truncate">
                    {activity.action}
                  </p>
                  <p className="text-xs text-neutral-silver">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Projects table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="p-6 rounded-2xl bg-neutral-charcoal border border-honey-primary/10"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-neutral-white">
            Recent Projects
          </h2>
          <motion.a
            href="/admin/portfolio"
            whileHover={{ x: 4 }}
            className="flex items-center gap-1 text-sm text-honey-primary"
          >
            View All
            <TrendingUp className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-honey-primary/10">
                <th className="pb-4 text-sm font-medium text-neutral-silver">
                  Project
                </th>
                <th className="pb-4 text-sm font-medium text-neutral-silver">
                  Status
                </th>
                <th className="pb-4 text-sm font-medium text-neutral-silver">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody>
              {recentProjects.map((project, index) => (
                <motion.tr
                  key={project.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="border-b border-honey-primary/5 last:border-0"
                >
                  <td className="py-4">
                    <span className="font-medium text-neutral-white">
                      {project.name}
                    </span>
                  </td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Completed'
                          ? 'bg-green-500/20 text-green-500'
                          : project.status === 'In Progress'
                          ? 'bg-blue-500/20 text-blue-500'
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-neutral-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project.progress}%` }}
                          transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                          className={`h-full rounded-full ${
                            project.status === 'Completed'
                              ? 'bg-green-500'
                              : 'bg-honey-primary'
                          }`}
                        />
                      </div>
                      <span className="text-sm text-neutral-silver w-10">
                        {project.progress}%
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

const chartData = [
  { day: 'Mon', value: 60, visitors: 245 },
  { day: 'Tue', value: 75, visitors: 312 },
  { day: 'Wed', value: 45, visitors: 189 },
  { day: 'Thu', value: 90, visitors: 378 },
  { day: 'Fri', value: 65, visitors: 267 },
  { day: 'Sat', value: 35, visitors: 145 },
  { day: 'Sun', value: 50, visitors: 210 },
];

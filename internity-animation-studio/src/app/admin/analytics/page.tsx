'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Eye, Users, Clock, Globe, Monitor, Smartphone, Tablet } from 'lucide-react';

const overviewStats = [
  { label: 'Page Views', value: '124,567', change: '+15.3%', icon: Eye },
  { label: 'Unique Visitors', value: '45,234', change: '+12.1%', icon: Users },
  { label: 'Avg. Session', value: '3m 42s', change: '+8.7%', icon: Clock },
  { label: 'Bounce Rate', value: '32.4%', change: '-4.2%', icon: TrendingUp },
];

const monthlyData = [
  { month: 'Jan', views: 8500 },
  { month: 'Feb', views: 9200 },
  { month: 'Mar', views: 11000 },
  { month: 'Apr', views: 10500 },
  { month: 'May', views: 12800 },
  { month: 'Jun', views: 14200 },
  { month: 'Jul', views: 13500 },
  { month: 'Aug', views: 15000 },
  { month: 'Sep', views: 16800 },
  { month: 'Oct', views: 18200 },
  { month: 'Nov', views: 17500 },
  { month: 'Dec', views: 19800 },
];

const trafficSources = [
  { source: 'Direct', percentage: 42, color: '#FFD700' },
  { source: 'Organic Search', percentage: 28, color: '#F4A623' },
  { source: 'Social Media', percentage: 18, color: '#D4800D' },
  { source: 'Referral', percentage: 8, color: '#FFB347' },
  { source: 'Other', percentage: 4, color: '#8A8A8A' },
];

const topPages = [
  { page: '/', title: 'Home', views: 45200, percentage: 36 },
  { page: '/portfolio', title: 'Portfolio', views: 28100, percentage: 22 },
  { page: '/services', title: 'Services', views: 18900, percentage: 15 },
  { page: '/about', title: 'About', views: 15600, percentage: 12 },
  { page: '/contact', title: 'Contact', views: 12400, percentage: 10 },
];

const devices = [
  { name: 'Desktop', percentage: 58, icon: Monitor },
  { name: 'Mobile', percentage: 32, icon: Smartphone },
  { name: 'Tablet', percentage: 10, icon: Tablet },
];

const topCountries = [
  { country: 'United States', flag: '🇺🇸', visitors: 18200, percentage: 35 },
  { country: 'United Kingdom', flag: '🇬🇧', visitors: 8900, percentage: 17 },
  { country: 'Germany', flag: '🇩🇪', visitors: 6200, percentage: 12 },
  { country: 'Canada', flag: '🇨🇦', visitors: 5100, percentage: 10 },
  { country: 'Australia', flag: '🇦🇺', visitors: 3800, percentage: 7 },
  { country: 'France', flag: '🇫🇷', visitors: 2900, percentage: 6 },
];

export default function AdminAnalytics() {
  const maxViews = Math.max(...monthlyData.map((d) => d.views));

  return (
    <div className="pt-12 md:pt-0">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-neutral-silver">Track your studio&apos;s performance</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {overviewStats.map((stat, index) => {
          const IconComponent = stat.icon;
          const isPositive = stat.change.startsWith('+');
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-charcoal rounded-2xl p-6 border border-neutral-gray/20"
            >
              <div className="flex items-center justify-between mb-3">
                <IconComponent size={20} className="text-honey-primary" />
                <span
                  className={`text-xs font-medium ${
                    isPositive ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-neutral-silver text-sm mt-1">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Monthly Traffic Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-neutral-charcoal rounded-2xl p-6 border border-neutral-gray/20 mb-8"
      >
        <h2 className="text-lg font-bold text-white mb-6">Monthly Traffic</h2>
        <div className="flex items-end gap-2 h-64">
          {monthlyData.map((data, index) => (
            <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs text-neutral-silver">
                {(data.views / 1000).toFixed(1)}k
              </span>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(data.views / maxViews) * 100}%` }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                className="w-full bg-gradient-to-t from-honey-dark via-honey-primary to-honey-light rounded-t-lg min-h-[4px]"
              />
              <span className="text-xs text-neutral-silver">{data.month}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Traffic Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-neutral-charcoal rounded-2xl p-6 border border-neutral-gray/20"
        >
          <h2 className="text-lg font-bold text-white mb-6">Traffic Sources</h2>
          <div className="space-y-4">
            {trafficSources.map((source) => (
              <div key={source.source}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white">{source.source}</span>
                  <span className="text-sm text-neutral-silver">
                    {source.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-neutral-gray/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${source.percentage}%` }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: source.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-neutral-charcoal rounded-2xl p-6 border border-neutral-gray/20"
        >
          <h2 className="text-lg font-bold text-white mb-6">Top Pages</h2>
          <div className="space-y-4">
            {topPages.map((page, index) => (
              <div
                key={page.page}
                className="flex items-center justify-between p-3 bg-neutral-black/50 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs text-honey-primary font-bold w-5">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm text-white">{page.title}</p>
                    <p className="text-xs text-neutral-silver">{page.page}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white">
                    {page.views.toLocaleString()}
                  </p>
                  <p className="text-xs text-neutral-silver">
                    {page.percentage}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Devices */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-neutral-charcoal rounded-2xl p-6 border border-neutral-gray/20"
        >
          <h2 className="text-lg font-bold text-white mb-6">
            <Globe size={18} className="inline mr-2" />
            Device Breakdown
          </h2>
          <div className="space-y-6">
            {devices.map((device) => {
              const IconComponent = device.icon;
              return (
                <div key={device.name} className="flex items-center gap-4">
                  <IconComponent size={20} className="text-honey-primary flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-white">{device.name}</span>
                      <span className="text-sm text-honey-primary font-bold">
                        {device.percentage}%
                      </span>
                    </div>
                    <div className="h-2 bg-neutral-gray/30 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${device.percentage}%` }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="h-full bg-honey-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Top Countries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-neutral-charcoal rounded-2xl p-6 border border-neutral-gray/20"
        >
          <h2 className="text-lg font-bold text-white mb-6">Top Countries</h2>
          <div className="space-y-3">
            {topCountries.map((country) => (
              <div
                key={country.country}
                className="flex items-center justify-between p-3 bg-neutral-black/50 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{country.flag}</span>
                  <span className="text-sm text-white">{country.country}</span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white">
                    {country.visitors.toLocaleString()}
                  </p>
                  <p className="text-xs text-neutral-silver">
                    {country.percentage}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

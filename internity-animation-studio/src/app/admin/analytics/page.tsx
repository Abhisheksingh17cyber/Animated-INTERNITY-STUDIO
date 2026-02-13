'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Globe,
  Monitor,
  Smartphone,
  Tablet,
  Clock,
  Eye,
  Users,
  MousePointer,
} from 'lucide-react';

const overviewStats = [
  {
    title: 'Total Views',
    value: '48,291',
    change: '+23.5%',
    trend: 'up',
    icon: Eye,
  },
  {
    title: 'Unique Visitors',
    value: '12,847',
    change: '+18.2%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Avg. Session Duration',
    value: '4m 32s',
    change: '+12.1%',
    trend: 'up',
    icon: Clock,
  },
  {
    title: 'Bounce Rate',
    value: '34.2%',
    change: '-5.4%',
    trend: 'up',
    icon: MousePointer,
  },
];

const pageViews = [
  { page: 'Home', views: 18420, percentage: 38 },
  { page: 'Portfolio', views: 12340, percentage: 25 },
  { page: 'Services', views: 8760, percentage: 18 },
  { page: 'About', views: 5430, percentage: 11 },
  { page: 'Contact', views: 3341, percentage: 7 },
];

const deviceStats = [
  { device: 'Desktop', percentage: 58, icon: Monitor },
  { device: 'Mobile', percentage: 32, icon: Smartphone },
  { device: 'Tablet', percentage: 10, icon: Tablet },
];

const topCountries = [
  { country: 'United States', flag: '🇺🇸', visitors: 4521, percentage: 35 },
  { country: 'United Kingdom', flag: '🇬🇧', visitors: 2134, percentage: 17 },
  { country: 'Germany', flag: '🇩🇪', visitors: 1876, percentage: 15 },
  { country: 'Canada', flag: '🇨🇦', visitors: 1243, percentage: 10 },
  { country: 'Australia', flag: '🇦🇺', visitors: 987, percentage: 8 },
  { country: 'Other', flag: '🌍', visitors: 2086, percentage: 15 },
];

const trafficSources = [
  { source: 'Direct', value: 42, color: '#F4A623' },
  { source: 'Organic Search', value: 28, color: '#22C55E' },
  { source: 'Social Media', value: 18, color: '#3B82F6' },
  { source: 'Referral', value: 8, color: '#A855F7' },
  { source: 'Other', value: 4, color: '#64748B' },
];

export default function AdminAnalytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-white">
            Analytics
          </h1>
          <p className="text-neutral-silver mt-1">
            Website performance and visitor insights
          </p>
        </div>
        <div className="flex gap-2">
          {['7D', '30D', '90D', '1Y'].map((period) => (
            <button
              key={period}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                period === '30D'
                  ? 'bg-honey-primary/20 text-honey-primary'
                  : 'bg-neutral-charcoal text-neutral-silver hover:text-neutral-white'
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Overview stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => {
          const IconComponent = stat.icon;
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;

          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-neutral-charcoal border border-honey-primary/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-honey-primary/10 flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-honey-primary" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.change.startsWith('+') || stat.change.startsWith('-') && stat.title === 'Bounce Rate'
                      ? 'text-green-500'
                      : 'text-red-500'
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

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Traffic chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 p-6 rounded-2xl bg-neutral-charcoal border border-honey-primary/10"
        >
          <h2 className="text-lg font-bold text-neutral-white mb-6">
            Traffic Overview
          </h2>
          <div className="relative h-64">
            <div className="absolute inset-0 flex items-end justify-between gap-1">
              {monthlyData.map((data, index) => (
                <div
                  key={data.month}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${data.value}%` }}
                    transition={{ delay: 0.5 + index * 0.03, duration: 0.5 }}
                    className="w-full bg-gradient-to-t from-honey-primary/40 to-honey-primary rounded-t relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-neutral-900 rounded text-xs text-neutral-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {data.visitors.toLocaleString()}
                    </div>
                  </motion.div>
                  <span className="text-xs text-neutral-silver">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Traffic sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl bg-neutral-charcoal border border-honey-primary/10"
        >
          <h2 className="text-lg font-bold text-neutral-white mb-6">
            Traffic Sources
          </h2>
          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <motion.div
                key={source.source}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: source.color }}
                    />
                    <span className="text-sm text-neutral-silver">
                      {source.source}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-neutral-white">
                    {source.value}%
                  </span>
                </div>
                <div className="h-2 bg-neutral-900 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${source.value}%` }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: source.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 rounded-2xl bg-neutral-charcoal border border-honey-primary/10"
        >
          <h2 className="text-lg font-bold text-neutral-white mb-6">
            Top Pages
          </h2>
          <div className="space-y-4">
            {pageViews.map((page, index) => (
              <motion.div
                key={page.page}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-neutral-white">
                      /{page.page.toLowerCase()}
                    </span>
                    <span className="text-xs text-neutral-silver">
                      {page.views.toLocaleString()} views
                    </span>
                  </div>
                  <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${page.percentage}%` }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="h-full bg-honey-primary rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Device breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="p-6 rounded-2xl bg-neutral-charcoal border border-honey-primary/10"
        >
          <h2 className="text-lg font-bold text-neutral-white mb-6">
            Device Breakdown
          </h2>
          <div className="space-y-6">
            {deviceStats.map((device, index) => {
              const IconComponent = device.icon;
              return (
                <motion.div
                  key={device.device}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-honey-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-honey-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-neutral-white">
                        {device.device}
                      </span>
                      <span className="text-sm text-honey-primary font-medium">
                        {device.percentage}%
                      </span>
                    </div>
                    <div className="h-2 bg-neutral-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${device.percentage}%` }}
                        transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-honey-primary to-honey-dark rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Top countries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="p-6 rounded-2xl bg-neutral-charcoal border border-honey-primary/10"
        >
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-5 h-5 text-honey-primary" />
            <h2 className="text-lg font-bold text-neutral-white">
              Top Countries
            </h2>
          </div>
          <div className="space-y-3">
            {topCountries.map((country, index) => (
              <motion.div
                key={country.country}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-center justify-between py-2 border-b border-honey-primary/5 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{country.flag}</span>
                  <span className="text-sm text-neutral-white">
                    {country.country}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-silver">
                    {country.visitors.toLocaleString()}
                  </span>
                  <span className="text-xs font-medium text-honey-primary">
                    {country.percentage}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const monthlyData = [
  { month: 'Jan', value: 45, visitors: 2340 },
  { month: 'Feb', value: 52, visitors: 2780 },
  { month: 'Mar', value: 48, visitors: 2560 },
  { month: 'Apr', value: 61, visitors: 3210 },
  { month: 'May', value: 55, visitors: 2890 },
  { month: 'Jun', value: 67, visitors: 3540 },
  { month: 'Jul', value: 72, visitors: 3820 },
  { month: 'Aug', value: 80, visitors: 4250 },
  { month: 'Sep', value: 75, visitors: 3980 },
  { month: 'Oct', value: 85, visitors: 4520 },
  { month: 'Nov', value: 90, visitors: 4780 },
  { month: 'Dec', value: 95, visitors: 5040 },
];

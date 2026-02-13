'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Shield, Palette, Globe, Save, Camera } from 'lucide-react';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'site', label: 'Site Settings', icon: Globe },
];

function ProfileSettings() {
  const [profile, setProfile] = useState({
    name: 'Admin User',
    username: 'admin',
    email: 'admin@internity.studio',
    role: 'Administrator',
    bio: 'Creative Director at INTERNITY Animation Studio.',
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6 mb-8">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-honey-primary/20 flex items-center justify-center text-3xl">
            👤
          </div>
          <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-honey-primary rounded-full flex items-center justify-center text-neutral-black hover:bg-honey-light transition-colors">
            <Camera size={14} />
          </button>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{profile.name}</h3>
          <p className="text-neutral-silver text-sm">{profile.role}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-neutral-silver mb-2">Full Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-silver mb-2">Username</label>
          <input
            type="text"
            value={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-silver mb-2">Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-silver mb-2">Role</label>
          <input
            type="text"
            value={profile.role}
            disabled
            className="w-full bg-neutral-black/50 border border-neutral-gray/20 rounded-xl px-4 py-3 text-neutral-silver cursor-not-allowed"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-neutral-silver mb-2">Bio</label>
        <textarea
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          rows={3}
          className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50 resize-none"
        />
      </div>
    </div>
  );
}

function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    emailMessages: true,
    emailPortfolio: false,
    pushMessages: true,
    pushAnalytics: false,
    weeklyDigest: true,
  });

  const toggles = [
    { key: 'emailMessages', label: 'Email notifications for new messages' },
    { key: 'emailPortfolio', label: 'Email notifications for portfolio updates' },
    { key: 'pushMessages', label: 'Push notifications for messages' },
    { key: 'pushAnalytics', label: 'Push notifications for analytics milestones' },
    { key: 'weeklyDigest', label: 'Weekly digest email' },
  ] as const;

  return (
    <div className="space-y-6">
      {toggles.map((toggle) => (
        <div
          key={toggle.key}
          className="flex items-center justify-between p-4 bg-neutral-black/50 rounded-xl"
        >
          <span className="text-white text-sm">{toggle.label}</span>
          <button
            onClick={() =>
              setNotifications({
                ...notifications,
                [toggle.key]: !notifications[toggle.key],
              })
            }
            className={`relative w-12 h-6 rounded-full transition-colors ${
              notifications[toggle.key] ? 'bg-honey-primary' : 'bg-neutral-gray'
            }`}
          >
            <motion.div
              animate={{
                x: notifications[toggle.key] ? 24 : 2,
              }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="absolute top-1 w-4 h-4 rounded-full bg-white"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

function SecuritySettings() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Change Password</h3>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm text-neutral-silver mb-2">Current Password</label>
            <input
              type="password"
              className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-silver mb-2">New Password</label>
            <input
              type="password"
              className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm text-neutral-silver mb-2">Confirm New Password</label>
            <input
              type="password"
              className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-4">Two-Factor Authentication</h3>
        <div className="p-4 bg-neutral-black/50 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-white text-sm">Two-factor authentication is disabled</p>
            <p className="text-neutral-silver text-xs mt-1">
              Add an extra layer of security to your account
            </p>
          </div>
          <button className="px-4 py-2 bg-honey-primary text-neutral-black text-sm font-medium rounded-lg hover:bg-honey-light transition-colors">
            Enable
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-4">Active Sessions</h3>
        <div className="space-y-3">
          {['Chrome on Windows - Current', 'Firefox on macOS - 2 days ago'].map(
            (session, i) => (
              <div
                key={i}
                className="p-4 bg-neutral-black/50 rounded-xl flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-sm text-white">{session}</span>
                </div>
                {i > 0 && (
                  <button className="text-xs text-red-400 hover:text-red-300">
                    Revoke
                  </button>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function AppearanceSettings() {
  const [theme, setTheme] = useState('dark');
  const [accentColor, setAccentColor] = useState('#F4A623');

  const accentColors = [
    '#F4A623',
    '#FFD700',
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#96CEB4',
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-bold text-white mb-4">Theme</h3>
        <div className="grid grid-cols-3 gap-4 max-w-md">
          {['dark', 'light', 'system'].map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`p-4 rounded-xl border text-sm capitalize transition-all ${
                theme === t
                  ? 'border-honey-primary bg-honey-primary/10 text-honey-primary'
                  : 'border-neutral-gray/30 text-neutral-silver hover:border-neutral-gray/50'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-4">Accent Color</h3>
        <div className="flex gap-3">
          {accentColors.map((color) => (
            <button
              key={color}
              onClick={() => setAccentColor(color)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                accentColor === color
                  ? 'border-white scale-110'
                  : 'border-transparent hover:scale-105'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SiteSettings() {
  const [settings, setSettings] = useState({
    siteName: 'INTERNITY',
    siteUrl: 'https://internity.studio',
    description: 'Premium animation studio crafting extraordinary digital experiences.',
    contactEmail: 'hello@internity.studio',
    socialTwitter: '@internity',
    socialInstagram: '@internity.studio',
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-neutral-silver mb-2">Site Name</label>
          <input
            type="text"
            value={settings.siteName}
            onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
            className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-silver mb-2">Site URL</label>
          <input
            type="url"
            value={settings.siteUrl}
            onChange={(e) => setSettings({ ...settings, siteUrl: e.target.value })}
            className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-neutral-silver mb-2">Description</label>
        <textarea
          value={settings.description}
          onChange={(e) => setSettings({ ...settings, description: e.target.value })}
          rows={3}
          className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50 resize-none"
        />
      </div>
      <div>
        <label className="block text-sm text-neutral-silver mb-2">Contact Email</label>
        <input
          type="email"
          value={settings.contactEmail}
          onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
          className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-neutral-silver mb-2">Twitter</label>
          <input
            type="text"
            value={settings.socialTwitter}
            onChange={(e) => setSettings({ ...settings, socialTwitter: e.target.value })}
            className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
          />
        </div>
        <div>
          <label className="block text-sm text-neutral-silver mb-2">Instagram</label>
          <input
            type="text"
            value={settings.socialInstagram}
            onChange={(e) => setSettings({ ...settings, socialInstagram: e.target.value })}
            className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
          />
        </div>
      </div>
    </div>
  );
}

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'security':
        return <SecuritySettings />;
      case 'appearance':
        return <AppearanceSettings />;
      case 'site':
        return <SiteSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="pt-12 md:pt-0">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
        <p className="text-neutral-silver">Manage your studio preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tabs */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-neutral-charcoal rounded-2xl border border-neutral-gray/20 p-3 space-y-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                    activeTab === tab.id
                      ? 'bg-honey-primary/10 text-honey-primary'
                      : 'text-neutral-silver hover:text-white hover:bg-neutral-gray/30'
                  }`}
                >
                  <IconComponent size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-neutral-charcoal rounded-2xl border border-neutral-gray/20 p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}

            {/* Save button */}
            <div className="mt-8 pt-6 border-t border-neutral-gray/20 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 bg-honey-primary text-neutral-black font-bold rounded-xl hover:bg-honey-light transition-colors"
              >
                <Save size={16} /> Save Changes
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

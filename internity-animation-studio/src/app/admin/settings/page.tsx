'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  User,
  Bell,
  Shield,
  Palette,
  Globe,
  Save,
  Camera,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from 'lucide-react';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'site', label: 'Site Settings', icon: Globe },
];

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-white">
          Settings
        </h1>
        <p className="text-neutral-silver mt-1">
          Manage your account and site preferences
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Tabs */}
        <div className="lg:col-span-1">
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-left ${
                    activeTab === tab.id
                      ? 'bg-honey-primary/20 text-honey-primary'
                      : 'text-neutral-silver hover:text-neutral-white hover:bg-neutral-charcoal'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl bg-neutral-charcoal border border-honey-primary/10"
          >
            {activeTab === 'profile' && <ProfileSettings />}
            {activeTab === 'notifications' && <NotificationSettings />}
            {activeTab === 'security' && (
              <SecuritySettings
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            )}
            {activeTab === 'appearance' && <AppearanceSettings />}
            {activeTab === 'site' && <SiteSettings />}

            {/* Save button */}
            <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-honey-primary/10">
              {saved && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-green-500 text-sm"
                >
                  Settings saved successfully!
                </motion.span>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-3 bg-honey-primary text-neutral-black font-semibold rounded-xl"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProfileSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-neutral-white">Profile Settings</h2>

      {/* Avatar */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-honey-primary/20 flex items-center justify-center">
            <span className="text-4xl font-bold text-honey-primary">A</span>
          </div>
          <button className="absolute -bottom-1 -right-1 p-2 rounded-full bg-honey-primary text-neutral-black">
            <Camera className="w-4 h-4" />
          </button>
        </div>
        <div>
          <h3 className="font-medium text-neutral-white">Profile Photo</h3>
          <p className="text-sm text-neutral-silver mt-1">
            JPG, GIF or PNG. Max size 2MB.
          </p>
        </div>
      </div>

      {/* Form fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-silver mb-2">
            Full Name
          </label>
          <input
            type="text"
            defaultValue="Admin User"
            className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-silver mb-2">
            Username
          </label>
          <input
            type="text"
            defaultValue="admin"
            className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-silver mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-silver" />
            <input
              type="email"
              defaultValue="admin@internity.studio"
              className="w-full pl-12 pr-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-silver mb-2">
            Role
          </label>
          <select className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors">
            <option>Administrator</option>
            <option>Editor</option>
            <option>Viewer</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-silver mb-2">
          Bio
        </label>
        <textarea
          rows={4}
          defaultValue="Studio administrator managing portfolio and client communications."
          className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors resize-none"
        />
      </div>
    </div>
  );
}

function NotificationSettings() {
  const notifications = [
    {
      title: 'Email Notifications',
      description: 'Receive email updates for important activities',
      enabled: true,
    },
    {
      title: 'New Messages',
      description: 'Get notified when someone sends a message',
      enabled: true,
    },
    {
      title: 'Project Updates',
      description: 'Notifications for portfolio changes',
      enabled: false,
    },
    {
      title: 'Weekly Digest',
      description: 'Weekly summary of analytics and activity',
      enabled: true,
    },
    {
      title: 'Marketing Emails',
      description: 'News and promotional content',
      enabled: false,
    },
  ];

  const [settings, setSettings] = useState(notifications);

  const toggleSetting = (index: number) => {
    setSettings(
      settings.map((s, i) => (i === index ? { ...s, enabled: !s.enabled } : s))
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-neutral-white">
        Notification Preferences
      </h2>

      <div className="space-y-4">
        {settings.map((setting, index) => (
          <div
            key={setting.title}
            className="flex items-center justify-between p-4 rounded-xl bg-neutral-950/50 border border-honey-primary/5"
          >
            <div>
              <h3 className="font-medium text-neutral-white">{setting.title}</h3>
              <p className="text-sm text-neutral-silver mt-1">
                {setting.description}
              </p>
            </div>
            <button
              onClick={() => toggleSetting(index)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                setting.enabled ? 'bg-honey-primary' : 'bg-neutral-700'
              }`}
            >
              <motion.div
                animate={{ x: setting.enabled ? 24 : 4 }}
                className="absolute top-1 w-6 h-6 rounded-full bg-white shadow"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SecuritySettings({
  showPassword,
  setShowPassword,
}: {
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-neutral-white">Security Settings</h2>

      {/* Change password */}
      <div className="space-y-4">
        <h3 className="font-medium text-neutral-silver">Change Password</h3>
        <div>
          <label className="block text-sm font-medium text-neutral-silver mb-2">
            Current Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-silver" />
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full pl-12 pr-12 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-neutral-silver" />
              ) : (
                <Eye className="w-5 h-5 text-neutral-silver" />
              )}
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-silver mb-2">
              New Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-silver mb-2">
              Confirm New Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>

      {/* Two-factor auth */}
      <div className="p-4 rounded-xl bg-neutral-950/50 border border-honey-primary/5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-neutral-white">
              Two-Factor Authentication
            </h3>
            <p className="text-sm text-neutral-silver mt-1">
              Add an extra layer of security to your account
            </p>
          </div>
          <button className="px-4 py-2 border border-honey-primary/30 text-honey-primary font-medium rounded-lg hover:bg-honey-primary/10 transition-colors">
            Enable
          </button>
        </div>
      </div>

      {/* Sessions */}
      <div>
        <h3 className="font-medium text-neutral-silver mb-4">Active Sessions</h3>
        <div className="space-y-3">
          <div className="p-4 rounded-xl bg-neutral-950/50 border border-honey-primary/10 flex items-center justify-between">
            <div>
              <p className="font-medium text-neutral-white">Current Session</p>
              <p className="text-sm text-neutral-silver">Windows • Chrome</p>
            </div>
            <span className="px-3 py-1 text-xs bg-green-500/20 text-green-500 rounded-full">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppearanceSettings() {
  const [theme, setTheme] = useState<'dark' | 'light' | 'system'>('dark');
  const [accentColor, setAccentColor] = useState('#F4A623');

  const colors = ['#F4A623', '#22C55E', '#3B82F6', '#A855F7', '#EF4444', '#EC4899'];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-neutral-white">Appearance</h2>

      {/* Theme */}
      <div>
        <h3 className="font-medium text-neutral-silver mb-4">Theme</h3>
        <div className="grid grid-cols-3 gap-4">
          {(['dark', 'light', 'system'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`p-4 rounded-xl border transition-colors ${
                theme === t
                  ? 'border-honey-primary bg-honey-primary/10'
                  : 'border-honey-primary/10 hover:border-honey-primary/30'
              }`}
            >
              <div
                className={`w-full aspect-video rounded-lg mb-3 ${
                  t === 'dark'
                    ? 'bg-neutral-950'
                    : t === 'light'
                    ? 'bg-white'
                    : 'bg-gradient-to-r from-neutral-950 to-white'
                }`}
              />
              <span className="text-sm font-medium text-neutral-white capitalize">
                {t}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Accent color */}
      <div>
        <h3 className="font-medium text-neutral-silver mb-4">Accent Color</h3>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setAccentColor(color)}
              className={`w-10 h-10 rounded-full transition-transform ${
                accentColor === color ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-neutral-charcoal' : ''
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
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-neutral-white">Site Settings</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-neutral-silver mb-2">
            Site Name
          </label>
          <input
            type="text"
            defaultValue="INTERNITY Animation Studio"
            className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-silver mb-2">
            Site URL
          </label>
          <input
            type="text"
            defaultValue="https://internity.studio"
            className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-silver mb-2">
          Site Description (SEO)
        </label>
        <textarea
          rows={3}
          defaultValue="Premium animation studio creating stunning 2D, 3D animations, motion design, and interactive web experiences."
          className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-silver mb-2">
          Contact Email
        </label>
        <input
          type="email"
          defaultValue="hello@internity.studio"
          className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
        />
      </div>

      {/* Social links */}
      <div>
        <h3 className="font-medium text-neutral-silver mb-4">Social Links</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
            <div key={social}>
              <label className="block text-sm font-medium text-neutral-silver mb-2">
                {social}
              </label>
              <input
                type="text"
                placeholder={`https://${social.toLowerCase()}.com/internity`}
                className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

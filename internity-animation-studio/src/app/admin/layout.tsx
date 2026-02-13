'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  FolderKanban,
  Settings,
  MessageSquare,
  BarChart3,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react';

const sidebarLinks = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/portfolio', icon: FolderKanban, label: 'Portfolio' },
  { href: '/admin/messages', icon: MessageSquare, label: 'Messages' },
  { href: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <motion.button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-xl bg-neutral-charcoal border border-honey-primary/20"
        >
          {sidebarOpen ? (
            <X className="w-5 h-5 text-honey-primary" />
          ) : (
            <Menu className="w-5 h-5 text-honey-primary" />
          )}
        </motion.button>
      </div>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: sidebarOpen ? 0 : '-100%',
        }}
        className="fixed lg:translate-x-0 top-0 left-0 z-40 h-full w-64 bg-neutral-charcoal border-r border-honey-primary/10 transition-transform lg:transition-none"
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-honey-primary/10">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-honey-primary/20 flex items-center justify-center">
                <span className="text-xl">🐝</span>
              </div>
              <div>
                <h1 className="font-bold text-neutral-white text-sm">INTERNITY</h1>
                <p className="text-xs text-neutral-silver">Admin Panel</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              const IconComponent = link.icon;

              return (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-honey-primary/20 text-honey-primary'
                        : 'text-neutral-silver hover:text-neutral-white hover:bg-neutral-900'
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                    {isActive && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-honey-primary/10">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-900">
              <div className="w-10 h-10 rounded-full bg-honey-primary/20 flex items-center justify-center">
                <span className="text-lg font-bold text-honey-primary">A</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral-white truncate">
                  Admin User
                </p>
                <p className="text-xs text-neutral-silver truncate">
                  admin@internity.studio
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 4 }}
              className="w-full flex items-center gap-3 px-4 py-3 mt-2 rounded-xl text-neutral-silver hover:text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Log Out</span>
            </motion.button>
          </div>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  FolderOpen,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
} from 'lucide-react';

const sidebarLinks = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Portfolio', href: '/admin/portfolio', icon: FolderOpen },
  { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-black flex">
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 256 : 80 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 bg-neutral-charcoal border-r border-neutral-gray/20 z-50"
      >
        {/* Logo */}
        <div className="p-6 flex items-center justify-between">
          <Link href="/admin" className="flex items-center gap-3">
            <div
              className="w-10 h-10 bg-honey-primary flex items-center justify-center text-lg flex-shrink-0"
              style={{
                clipPath:
                  'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              🐝
            </div>
            {sidebarOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white font-bold text-lg"
              >
                Admin
              </motion.span>
            )}
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-neutral-silver hover:text-white transition-colors"
          >
            <ChevronLeft
              size={18}
              className={`transition-transform ${!sidebarOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            const IconComponent = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-honey-primary/10 text-honey-primary'
                    : 'text-neutral-silver hover:text-white hover:bg-neutral-gray/30'
                }`}
              >
                <IconComponent size={20} className="flex-shrink-0" />
                {sidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm font-medium"
                  >
                    {link.name}
                  </motion.span>
                )}
                {isActive && sidebarOpen && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-honey-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-neutral-gray/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-honey-primary/20 flex items-center justify-center text-sm flex-shrink-0">
              👤
            </div>
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex-1 min-w-0"
              >
                <p className="text-white text-sm font-medium truncate">
                  Admin User
                </p>
                <p className="text-neutral-silver text-xs truncate">
                  admin@internity.studio
                </p>
              </motion.div>
            )}
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 mt-3 text-neutral-silver hover:text-red-400 transition-colors text-sm"
          >
            <LogOut size={16} />
            {sidebarOpen && <span>Back to Site</span>}
          </Link>
        </div>
      </motion.aside>

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setMobileSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-neutral-charcoal rounded-lg border border-neutral-gray/20 text-white"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/60 z-50"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25 }}
              className="md:hidden fixed left-0 top-0 bottom-0 w-[280px] bg-neutral-charcoal z-50 flex flex-col"
            >
              <div className="p-6 flex items-center justify-between">
                <Link
                  href="/admin"
                  className="flex items-center gap-3"
                  onClick={() => setMobileSidebarOpen(false)}
                >
                  <div
                    className="w-10 h-10 bg-honey-primary flex items-center justify-center text-lg"
                    style={{
                      clipPath:
                        'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                  >
                    🐝
                  </div>
                  <span className="text-white font-bold text-lg">Admin</span>
                </Link>
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="text-neutral-silver hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 px-3 py-4 space-y-1">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.href;
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileSidebarOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                        isActive
                          ? 'bg-honey-primary/10 text-honey-primary'
                          : 'text-neutral-silver hover:text-white hover:bg-neutral-gray/30'
                      }`}
                    >
                      <IconComponent size={20} />
                      <span className="text-sm font-medium">{link.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'md:ml-64' : 'md:ml-20'
        }`}
      >
        <div className="p-6 md:p-8">{children}</div>
      </main>
    </div>
  );
}

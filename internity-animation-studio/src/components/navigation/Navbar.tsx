'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/store';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'bg-neutral-950/80 backdrop-blur-xl border-b border-honey-primary/10'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative group" data-hover="true">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <HoneycombLogo />
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-honey-primary">INTERNITY</span>
                  <span className="text-neutral-white hidden sm:inline"> ANIMATION</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  isActive={pathname === link.href}
                >
                  {link.name}
                </NavLink>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2.5 bg-honey-primary text-neutral-black font-semibold rounded-full hover:bg-honey-light transition-colors"
                data-hover="true"
              >
                Start Project
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
              data-hover="true"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 6 : 0,
                  }}
                  className="w-6 h-0.5 bg-honey-primary block"
                />
                <motion.span
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  className="w-6 h-0.5 bg-honey-primary block"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -6 : 0,
                  }}
                  className="w-6 h-0.5 bg-honey-primary block"
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            pathname={pathname}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <Link href={href} data-hover="true">
      <motion.span
        className={cn(
          'relative px-4 py-2 text-sm font-medium transition-colors',
          isActive ? 'text-honey-primary' : 'text-neutral-silver hover:text-honey-light'
        )}
        whileHover={{ color: '#FFD700' }}
      >
        {children}
        {isActive && (
          <motion.span
            layoutId="navbar-indicator"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-honey-primary rounded-full"
          />
        )}
      </motion.span>
    </Link>
  );
}

function MobileMenu({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
      animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
      exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-40 lg:hidden bg-neutral-950/95 backdrop-blur-xl"
    >
      <div className="flex flex-col items-center justify-center h-full gap-8">
        {NAV_LINKS.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className={cn(
                'text-3xl font-bold transition-colors',
                pathname === link.href
                  ? 'text-honey-primary'
                  : 'text-neutral-silver hover:text-honey-light'
              )}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ delay: NAV_LINKS.length * 0.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-8 py-3 bg-honey-primary text-neutral-black font-bold text-lg rounded-full"
        >
          Start Project
        </motion.button>
      </div>

      {/* Decorative honeycomb pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <HoneycombPattern />
      </div>
    </motion.div>
  );
}

function HoneycombLogo() {
  return (
    <svg
      width="40"
      height="46"
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points="50 0, 100 28.75, 100 86.25, 50 115, 0 86.25, 0 28.75"
        fill="#F4A623"
      />
      <polygon
        points="50 15, 85 36, 85 79, 50 100, 15 79, 15 36"
        fill="#1A1A1A"
      />
      <polygon
        points="50 30, 70 43, 70 72, 50 85, 30 72, 30 43"
        fill="#FFD700"
      />
    </svg>
  );
}

function HoneycombPattern() {
  return (
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 460"
    >
      <defs>
        <pattern
          id="honeycomb"
          width="56"
          height="100"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2)"
        >
          <polygon
            points="28 0, 56 14, 56 43, 28 57, 0 43, 0 14"
            fill="none"
            stroke="#F4A623"
            strokeWidth="1"
          />
          <polygon
            points="28 57, 56 71, 56 100, 28 114, 0 100, 0 71"
            fill="none"
            stroke="#F4A623"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#honeycomb)" />
    </svg>
  );
}

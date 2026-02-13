'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative bg-neutral-charcoal border-t border-neutral-gray/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 bg-honey-primary rounded-full flex items-center justify-center text-lg"
                style={{
                  clipPath:
                    'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                🐝
              </div>
              <span className="text-xl font-bold text-white">INTERNITY</span>
            </Link>
            <p className="text-neutral-silver text-sm leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-silver text-sm hover:text-honey-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'Dribbble', 'GitHub'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3 }}
                  className="text-neutral-silver hover:text-honey-primary transition-colors text-sm"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-neutral-gray/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-silver text-xs">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-neutral-silver text-xs hover:text-honey-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-neutral-silver text-xs hover:text-honey-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

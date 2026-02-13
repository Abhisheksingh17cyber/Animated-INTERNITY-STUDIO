'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="relative bg-neutral-950 border-t border-neutral-charcoal overflow-hidden">
      {/* Background honeycomb */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <HoneycombPattern />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <HoneycombLogo />
                <span className="text-xl font-bold">
                  <span className="text-honey-primary">INTERNITY</span>
                  <span className="text-neutral-white"> ANIMATION</span>
                </span>
              </motion.div>
            </Link>
            <p className="text-neutral-silver mb-6 max-w-sm">
              Crafting immersive digital experiences with the precision and beauty
              of nature's perfect geometry.
            </p>
            <div className="flex gap-4">
              {['twitter', 'instagram', 'dribbble'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-neutral-charcoal rounded-full flex items-center justify-center text-neutral-silver hover:text-honey-primary hover:bg-honey-primary/10 transition-colors"
                  data-hover="true"
                >
                  <span className="sr-only">{social}</span>
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4 className="text-neutral-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-silver hover:text-honey-primary transition-colors"
                    data-hover="true"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-neutral-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-neutral-silver">
              <li>hello@internity.studio</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-charcoal flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-gray text-sm">
            © 2024 Internity Animation Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-neutral-gray text-sm">
            <Link
              href="/privacy"
              className="hover:text-honey-primary transition-colors"
              data-hover="true"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-honey-primary transition-colors"
              data-hover="true"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bee at bottom */}
      <motion.div
        className="absolute bottom-4 right-8 opacity-20"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
          <ellipse cx="18" cy="26" rx="10" ry="6" fill="#F4A623" opacity="0.5" />
          <ellipse cx="46" cy="26" rx="10" ry="6" fill="#F4A623" opacity="0.5" />
          <ellipse cx="32" cy="36" rx="12" ry="16" fill="#F4A623" />
          <rect x="22" y="30" width="20" height="3" fill="#1A1A1A" rx="1.5" />
          <rect x="24" y="37" width="16" height="3" fill="#1A1A1A" rx="1.5" />
          <circle cx="32" cy="22" r="8" fill="#F4A623" />
          <circle cx="29" cy="20" r="2" fill="#1A1A1A" />
          <circle cx="35" cy="20" r="2" fill="#1A1A1A" />
        </svg>
      </motion.div>
    </footer>
  );
}

function HoneycombLogo() {
  return (
    <svg width="40" height="46" viewBox="0 0 100 115" fill="none">
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
    <svg className="w-full h-full" viewBox="0 0 400 460">
      <defs>
        <pattern
          id="footer-honeycomb"
          width="56"
          height="100"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1.5)"
        >
          <polygon
            points="28 0, 56 14, 56 43, 28 57, 0 43, 0 14"
            fill="none"
            stroke="#F4A623"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#footer-honeycomb)" />
    </svg>
  );
}

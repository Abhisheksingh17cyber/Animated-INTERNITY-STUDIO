'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { ContactFormData } from '@/types';

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="relative py-32 overflow-hidden bg-neutral-950">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <HoneycombPatternFull />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-honey-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-white mb-6">
              Let&apos;s Create{' '}
              <span className="text-honey-primary">Magic</span> Together
            </h2>
            <p className="text-neutral-silver text-lg mb-12">
              Ready to transform your ideas into captivating animations? We&apos;d
              love to hear from you and discuss how we can bring your vision to
              life.
            </p>

            <div className="space-y-8">
              <ContactInfo
                icon={<EmailIcon />}
                label="Email"
                value="hello@internity.studio"
              />
              <ContactInfo
                icon={<PhoneIcon />}
                label="Phone"
                value="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={<LocationIcon />}
                label="Location"
                value="San Francisco, CA"
              />
            </div>

            {/* Social links */}
            <div className="mt-12">
              <h4 className="text-neutral-silver text-sm uppercase tracking-widest mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {['twitter', 'instagram', 'dribbble', 'linkedin'].map(
                  (social) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-neutral-charcoal rounded-full flex items-center justify-center text-neutral-silver hover:text-honey-primary hover:bg-honey-primary/10 transition-colors"
                      data-hover="true"
                    >
                      <SocialIcon name={social} />
                    </motion.a>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <FormInput
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <FormTextarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-honey-primary text-neutral-black font-bold rounded-xl hover:bg-honey-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                data-hover="true"
              >
                {isSubmitting ? (
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    Sending...
                  </motion.span>
                ) : isSubmitted ? (
                  'Message Sent!'
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-4"
    >
      <div className="w-12 h-12 bg-honey-primary/10 rounded-full flex items-center justify-center text-honey-primary">
        {icon}
      </div>
      <div>
        <span className="text-neutral-gray text-sm block">{label}</span>
        <span className="text-neutral-white font-medium">{value}</span>
      </div>
    </motion.div>
  );
}

function FormInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        className="peer w-full px-4 py-4 bg-neutral-charcoal/50 border border-neutral-charcoal rounded-xl text-neutral-white placeholder-transparent focus:outline-none focus:border-honey-primary/50 transition-colors"
        data-hover="true"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-4 text-neutral-gray text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-honey-primary peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-neutral-950 px-1"
      >
        {label}
      </label>
    </div>
  );
}

function FormTextarea({
  label,
  name,
  value,
  onChange,
  required = false,
  rows = 4,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
}) {
  return (
    <div className="relative">
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        placeholder=" "
        className="peer w-full px-4 py-4 bg-neutral-charcoal/50 border border-neutral-charcoal rounded-xl text-neutral-white placeholder-transparent focus:outline-none focus:border-honey-primary/50 transition-colors resize-none"
        data-hover="true"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-4 text-neutral-gray text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-honey-primary peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs bg-neutral-950 px-1"
      >
        {label}
      </label>
    </div>
  );
}

function HoneycombPatternFull() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 460">
      <defs>
        <pattern
          id="contact-honeycomb"
          width="56"
          height="100"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2)"
        >
          <polygon
            points="28 0, 56 14, 56 43, 28 57, 0 43, 0 14"
            fill="none"
            stroke="#F4A623"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#contact-honeycomb)" />
    </svg>
  );
}

// Icons
function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    twitter: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    instagram: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
    dribbble: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
      </svg>
    ),
    linkedin: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  };

  return icons[name] || null;
}

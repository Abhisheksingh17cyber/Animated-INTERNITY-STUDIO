'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-32 px-6 bg-neutral-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-honey-primary text-sm tracking-[0.3em] mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Let&apos;s <span className="text-honey-primary">Create</span>{' '}
            Together
          </h2>
          <p className="text-neutral-silver max-w-xl mx-auto">
            Ready to bring your vision to life? Drop us a message and let&apos;s
            start creating something extraordinary.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your Name"
                required
                className="w-full bg-neutral-charcoal border border-neutral-gray/30 rounded-xl px-6 py-4 text-white placeholder-neutral-silver focus:outline-none focus:border-honey-primary/50 transition-colors"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-honey-primary group-focus-within:w-full transition-all duration-500" />
            </div>
            <div className="relative group">
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Your Email"
                required
                className="w-full bg-neutral-charcoal border border-neutral-gray/30 rounded-xl px-6 py-4 text-white placeholder-neutral-silver focus:outline-none focus:border-honey-primary/50 transition-colors"
              />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-honey-primary group-focus-within:w-full transition-all duration-500" />
            </div>
          </div>

          <div className="relative group">
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Your Message"
              required
              rows={6}
              className="w-full bg-neutral-charcoal border border-neutral-gray/30 rounded-xl px-6 py-4 text-white placeholder-neutral-silver focus:outline-none focus:border-honey-primary/50 transition-colors resize-none"
            />
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-honey-primary group-focus-within:w-full transition-all duration-500" />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-honey-primary text-neutral-black font-bold rounded-xl hover:bg-honey-light transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 border-2 border-neutral-black border-t-transparent rounded-full"
              />
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          <div>
            <p className="text-honey-primary text-sm mb-1">Email</p>
            <p className="text-neutral-silver">{SITE_CONFIG.email}</p>
          </div>
          <div>
            <p className="text-honey-primary text-sm mb-1">Phone</p>
            <p className="text-neutral-silver">{SITE_CONFIG.phone}</p>
          </div>
          <div>
            <p className="text-honey-primary text-sm mb-1">Address</p>
            <p className="text-neutral-silver">{SITE_CONFIG.address}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

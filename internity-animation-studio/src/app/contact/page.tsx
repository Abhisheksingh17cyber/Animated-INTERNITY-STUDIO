'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Footer } from '@/sections';

const contactInfo = [
  { icon: Mail, label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
  { icon: Phone, label: 'Phone', value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
  { icon: MapPin, label: 'Address', value: SITE_CONFIG.address, href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon - Fri, 9AM - 6PM EST', href: '#' },
];

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity. A simple motion design project might take 2-4 weeks, while a full 3D animation can take 2-3 months. We provide detailed timelines during our discovery phase.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely! We serve clients across 30+ countries. Our team is experienced in remote collaboration and can accommodate different time zones.',
  },
  {
    question: 'What file formats do you deliver?',
    answer: 'We deliver in all standard formats including MP4, MOV, GIF, Lottie JSON, and more. We can also provide source files upon request.',
  },
  {
    question: 'How do you handle revisions?',
    answer: 'Our standard packages include 2-3 rounds of revisions. We work closely with you throughout the process to ensure the final product exceeds expectations.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      <section className="min-h-screen pt-32 pb-20 px-6 bg-neutral-black">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-honey-primary text-sm tracking-[0.3em] mb-4">
              GET IN TOUCH
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-neutral-silver max-w-2xl mx-auto text-lg">
              Ready to start your project? We&apos;d love to hear from you. Fill
              out the form below or reach out directly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-2"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-full flex flex-col items-center justify-center py-20 bg-neutral-charcoal rounded-2xl border border-honey-primary/20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', damping: 10, delay: 0.2 }}
                      className="text-6xl mb-6"
                    >
                      🐝
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-neutral-silver">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-neutral-charcoal p-8 rounded-2xl border border-neutral-gray/20"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative group">
                        <label className="block text-sm text-neutral-silver mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-6 py-3 text-white focus:outline-none focus:border-honey-primary/50 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="relative group">
                        <label className="block text-sm text-neutral-silver mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-6 py-3 text-white focus:outline-none focus:border-honey-primary/50 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="relative group">
                      <label className="block text-sm text-neutral-silver mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                        className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-6 py-3 text-white focus:outline-none focus:border-honey-primary/50 transition-colors"
                        placeholder="Project inquiry"
                      />
                    </div>

                    <div className="relative group">
                      <label className="block text-sm text-neutral-silver mb-2">
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        rows={6}
                        className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-6 py-3 text-white focus:outline-none focus:border-honey-primary/50 transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
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
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="w-5 h-5 border-2 border-neutral-black border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-5 bg-neutral-charcoal rounded-xl border border-neutral-gray/20 hover:border-honey-primary/30 transition-all group"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-honey-primary/10 group-hover:bg-honey-primary/20 transition-colors"
                      style={{
                        clipPath:
                          'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      <IconComponent
                        size={16}
                        className="text-honey-primary"
                      />
                    </div>
                    <div>
                      <p className="text-sm text-honey-primary mb-1">
                        {info.label}
                      </p>
                      <p className="text-neutral-silver text-sm">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Social links */}
              <div className="pt-4">
                <p className="text-sm text-neutral-silver mb-3">Follow us</p>
                <div className="flex gap-3">
                  {['Twitter', 'Instagram', 'Dribbble', 'GitHub'].map(
                    (social) => (
                      <motion.a
                        key={social}
                        href="#"
                        whileHover={{ y: -3 }}
                        className="px-4 py-2 bg-neutral-charcoal rounded-lg text-sm text-neutral-silver hover:text-honey-primary hover:border-honey-primary/30 border border-neutral-gray/20 transition-all"
                      >
                        {social}
                      </motion.a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <p className="text-honey-primary text-sm tracking-[0.3em] mb-4">
                FAQ
              </p>
              <h2 className="text-4xl font-bold text-white">
                Common Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-charcoal rounded-xl border border-neutral-gray/20 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-white font-medium">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{
                        rotate: openFaq === index ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown
                        size={18}
                        className="text-honey-primary"
                      />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-5 pb-5 text-neutral-silver text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}

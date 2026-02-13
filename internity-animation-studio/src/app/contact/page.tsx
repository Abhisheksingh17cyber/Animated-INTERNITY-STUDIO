'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Footer } from '@/sections';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@internity.studio',
    link: 'mailto:hello@internity.studio',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    link: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: '123 Creative Ave, Design City',
    link: '#',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon - Fri: 9AM - 6PM',
    link: '#',
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="min-h-screen pt-32 pb-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-honey-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-white mb-6">
              Contact <span className="text-honey-primary">Us</span>
            </h1>
            <p className="text-neutral-silver text-lg max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can help bring your
              vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-charcoal to-neutral-900 border border-honey-primary/10 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-honey-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-honey-primary/5 rounded-full blur-3xl" />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-honey-primary/20 flex items-center justify-center">
                      <MessageSquare className="w-10 h-10 text-honey-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-white mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-neutral-silver mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24
                      hours.
                    </p>
                    <motion.button
                      onClick={() => setSubmitted(false)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-honey-primary/20 text-honey-primary font-semibold rounded-full hover:bg-honey-primary/30 transition-colors"
                      data-hover="true"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="peer w-full px-4 py-4 bg-neutral-950/50 border border-honey-primary/20 rounded-xl text-neutral-white placeholder-transparent focus:outline-none focus:border-honey-primary transition-colors"
                          placeholder="Your Name"
                        />
                        <label className="absolute left-4 -top-2.5 px-1 text-sm font-medium text-honey-primary bg-neutral-charcoal peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-neutral-silver peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-2.5 peer-focus:bg-neutral-charcoal peer-focus:text-sm peer-focus:font-medium peer-focus:text-honey-primary transition-all">
                          Your Name
                        </label>
                      </div>

                      {/* Email */}
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="peer w-full px-4 py-4 bg-neutral-950/50 border border-honey-primary/20 rounded-xl text-neutral-white placeholder-transparent focus:outline-none focus:border-honey-primary transition-colors"
                          placeholder="Email Address"
                        />
                        <label className="absolute left-4 -top-2.5 px-1 text-sm font-medium text-honey-primary bg-neutral-charcoal peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-neutral-silver peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-2.5 peer-focus:bg-neutral-charcoal peer-focus:text-sm peer-focus:font-medium peer-focus:text-honey-primary transition-all">
                          Email Address
                        </label>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="peer w-full px-4 py-4 bg-neutral-950/50 border border-honey-primary/20 rounded-xl text-neutral-white placeholder-transparent focus:outline-none focus:border-honey-primary transition-colors"
                        placeholder="Subject"
                      />
                      <label className="absolute left-4 -top-2.5 px-1 text-sm font-medium text-honey-primary bg-neutral-charcoal peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-neutral-silver peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-2.5 peer-focus:bg-neutral-charcoal peer-focus:text-sm peer-focus:font-medium peer-focus:text-honey-primary transition-all">
                        Subject
                      </label>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="peer w-full px-4 py-4 bg-neutral-950/50 border border-honey-primary/20 rounded-xl text-neutral-white placeholder-transparent focus:outline-none focus:border-honey-primary transition-colors resize-none"
                        placeholder="Your Message"
                      />
                      <label className="absolute left-4 -top-2.5 px-1 text-sm font-medium text-honey-primary bg-neutral-charcoal peer-placeholder-shown:top-4 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-neutral-silver peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:-top-2.5 peer-focus:bg-neutral-charcoal peer-focus:text-sm peer-focus:font-medium peer-focus:text-honey-primary transition-all">
                        Your Message
                      </label>
                    </div>

                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full py-4 bg-honey-primary text-neutral-black font-semibold rounded-xl hover:bg-honey-light transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      data-hover="true"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-neutral-black/30 border-t-neutral-black rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="block p-6 rounded-2xl bg-neutral-charcoal/50 border border-honey-primary/10 hover:border-honey-primary/30 transition-all group"
                    data-hover="true"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-honey-primary/10 flex items-center justify-center group-hover:bg-honey-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-honey-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-honey-primary mb-1">
                          {item.title}
                        </h3>
                        <p className="text-neutral-silver group-hover:text-neutral-white transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-honey-primary/10 to-transparent border border-honey-primary/20"
              >
                <h3 className="text-lg font-bold text-neutral-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map((social, i) => (
                    <motion.a
                      key={social}
                      href="#"
                      whileHover={{ y: -3 }}
                      className="w-10 h-10 rounded-lg bg-neutral-950/50 border border-honey-primary/20 flex items-center justify-center hover:border-honey-primary/50 hover:bg-honey-primary/10 transition-all"
                      data-hover="true"
                    >
                      <span className="text-honey-primary text-sm font-bold">
                        {social[0]}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-white mb-4">
                Frequently Asked <span className="text-honey-primary">Questions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-neutral-charcoal/50 border border-honey-primary/10"
                  data-hover="true"
                >
                  <h3 className="text-lg font-semibold text-neutral-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-silver text-sm">{faq.answer}</p>
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

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary based on complexity. Simple animations take 1-2 weeks, while complex projects may take 4-8 weeks.',
  },
  {
    question: 'Do you offer revisions?',
    answer:
      'Yes! All projects include 2-3 rounds of revisions to ensure the final product meets your expectations.',
  },
  {
    question: 'What file formats do you deliver?',
    answer:
      'We deliver in various formats including MP4, MOV, GIF, Lottie JSON, and more based on your needs.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Absolutely! We work with clients worldwide and accommodate different time zones for meetings.',
  },
];

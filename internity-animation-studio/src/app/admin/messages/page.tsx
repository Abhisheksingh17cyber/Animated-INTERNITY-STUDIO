'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Search,
  Inbox,
  Star,
  Archive,
  Trash2,
  Mail,
  MailOpen,
  ChevronRight,
  Reply,
  Clock,
} from 'lucide-react';

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
  starred: boolean;
};

const initialMessages: Message[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Project Inquiry - Brand Animation',
    message:
      'Hi, I am interested in your brand animation services. We are a tech startup looking for a 30-second explainer video. Could you please share your pricing and availability?',
    date: '2 hours ago',
    read: false,
    starred: true,
  },
  {
    id: 2,
    name: 'Sarah Miller',
    email: 'sarah@company.co',
    subject: 'Partnership Opportunity',
    message:
      'Hello INTERNITY team, We at Digital Agency XYZ would love to explore a partnership opportunity with your studio. Let me know if you are open to a call this week.',
    date: '5 hours ago',
    read: false,
    starred: false,
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'michael@startup.io',
    subject: 'Mobile App Animation Quote',
    message:
      'Good day! We need animations for our fintech mobile app - around 15 micro-interactions and a splash screen animation. What would be the timeline and cost for this?',
    date: '1 day ago',
    read: true,
    starred: false,
  },
  {
    id: 4,
    name: 'Emily Johnson',
    email: 'emily@design.studio',
    subject: 'Collaboration Request',
    message:
      'Hi there! I am a freelance UI designer and I love your animation work. Would you be interested in collaborating on a project for one of my clients?',
    date: '2 days ago',
    read: true,
    starred: true,
  },
  {
    id: 5,
    name: 'Alex Thompson',
    email: 'alex@agency.com',
    subject: 'Website Redesign Animation',
    message:
      'We are redesigning our agency website and need scroll-based animations similar to what you have on your portfolio. Can we schedule a discovery call?',
    date: '3 days ago',
    read: true,
    starred: false,
  },
];

export default function AdminMessages() {
  const [messages, setMessages] = useState(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'unread' | 'starred'>('all');

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch =
      msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchQuery.toLowerCase());

    if (filter === 'unread') return matchesSearch && !msg.read;
    if (filter === 'starred') return matchesSearch && msg.starred;
    return matchesSearch;
  });

  const unreadCount = messages.filter((m) => !m.read).length;
  const starredCount = messages.filter((m) => m.starred).length;

  const toggleRead = (id: number) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, read: !msg.read } : msg))
    );
  };

  const toggleStar = (id: number) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id ? { ...msg, starred: !msg.starred } : msg
      )
    );
  };

  const deleteMessage = (id: number) => {
    setMessages(messages.filter((msg) => msg.id !== id));
    if (selectedMessage?.id === id) setSelectedMessage(null);
  };

  const selectMessage = (msg: Message) => {
    setSelectedMessage(msg);
    if (!msg.read) {
      setMessages(
        messages.map((m) => (m.id === msg.id ? { ...m, read: true } : m))
      );
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-white">
          Messages
        </h1>
        <p className="text-neutral-silver mt-1">
          Manage your inbox and contact form submissions
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Sidebar / List */}
        <div className="lg:col-span-1 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-silver" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-neutral-charcoal border border-honey-primary/10 rounded-xl text-neutral-white placeholder-neutral-silver focus:outline-none focus:border-honey-primary/30 transition-colors"
            />
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2">
            {[
              { key: 'all', label: 'All', icon: Inbox, count: messages.length },
              { key: 'unread', label: 'Unread', icon: Mail, count: unreadCount },
              { key: 'starred', label: 'Starred', icon: Star, count: starredCount },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as typeof filter)}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  filter === tab.key
                    ? 'bg-honey-primary/20 text-honey-primary'
                    : 'bg-neutral-charcoal text-neutral-silver hover:text-neutral-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.count}
              </button>
            ))}
          </div>

          {/* Message list */}
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
            <AnimatePresence>
              {filteredMessages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => selectMessage(msg)}
                  className={`p-4 rounded-xl cursor-pointer transition-all ${
                    selectedMessage?.id === msg.id
                      ? 'bg-honey-primary/20 border border-honey-primary/30'
                      : 'bg-neutral-charcoal border border-transparent hover:border-honey-primary/10'
                  } ${!msg.read ? 'border-l-4 border-l-honey-primary' : ''}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {!msg.read && (
                        <div className="w-2 h-2 rounded-full bg-honey-primary" />
                      )}
                      <span
                        className={`font-medium ${
                          msg.read ? 'text-neutral-silver' : 'text-neutral-white'
                        }`}
                      >
                        {msg.name}
                      </span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStar(msg.id);
                      }}
                      className="p-1"
                    >
                      <Star
                        className={`w-4 h-4 ${
                          msg.starred
                            ? 'fill-honey-primary text-honey-primary'
                            : 'text-neutral-silver'
                        }`}
                      />
                    </button>
                  </div>
                  <p
                    className={`text-sm truncate ${
                      msg.read ? 'text-neutral-silver' : 'text-neutral-white'
                    }`}
                  >
                    {msg.subject}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="w-3 h-3 text-neutral-silver" />
                    <span className="text-xs text-neutral-silver">{msg.date}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredMessages.length === 0 && (
              <div className="text-center py-12">
                <Inbox className="w-12 h-12 text-neutral-silver mx-auto mb-4" />
                <p className="text-neutral-silver">No messages found</p>
              </div>
            )}
          </div>
        </div>

        {/* Message detail */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {selectedMessage ? (
              <motion.div
                key={selectedMessage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-6 rounded-2xl bg-neutral-charcoal border border-honey-primary/10 h-full"
              >
                {/* Header */}
                <div className="flex items-start justify-between pb-6 border-b border-honey-primary/10">
                  <div>
                    <h2 className="text-xl font-bold text-neutral-white mb-2">
                      {selectedMessage.subject}
                    </h2>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-honey-primary/20 flex items-center justify-center">
                          <span className="text-honey-primary font-bold">
                            {selectedMessage.name[0]}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-neutral-white">
                            {selectedMessage.name}
                          </p>
                          <p className="text-xs text-neutral-silver">
                            {selectedMessage.email}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-silver">
                        {selectedMessage.date}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleRead(selectedMessage.id)}
                      className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-colors"
                      title={selectedMessage.read ? 'Mark as unread' : 'Mark as read'}
                    >
                      {selectedMessage.read ? (
                        <Mail className="w-5 h-5 text-neutral-silver" />
                      ) : (
                        <MailOpen className="w-5 h-5 text-honey-primary" />
                      )}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleStar(selectedMessage.id)}
                      className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-colors"
                    >
                      <Star
                        className={`w-5 h-5 ${
                          selectedMessage.starred
                            ? 'fill-honey-primary text-honey-primary'
                            : 'text-neutral-silver'
                        }`}
                      />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition-colors"
                    >
                      <Archive className="w-5 h-5 text-neutral-silver" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => deleteMessage(selectedMessage.id)}
                      className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition-colors"
                    >
                      <Trash2 className="w-5 h-5 text-red-500" />
                    </motion.button>
                  </div>
                </div>

                {/* Body */}
                <div className="py-6">
                  <p className="text-neutral-silver leading-relaxed whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>

                {/* Reply */}
                <div className="pt-6 border-t border-honey-primary/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Reply className="w-5 h-5 text-honey-primary" />
                    <span className="font-medium text-neutral-white">Reply</span>
                  </div>
                  <textarea
                    placeholder="Write your reply..."
                    className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white placeholder-neutral-silver focus:outline-none focus:border-honey-primary/30 transition-colors resize-none"
                    rows={4}
                  />
                  <div className="flex justify-end mt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-6 py-3 bg-honey-primary text-neutral-black font-semibold rounded-xl"
                    >
                      Send Reply
                      <ChevronRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full min-h-[400px] flex items-center justify-center rounded-2xl bg-neutral-charcoal border border-honey-primary/10"
              >
                <div className="text-center">
                  <Mail className="w-16 h-16 text-neutral-silver mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-neutral-white mb-2">
                    Select a message
                  </h3>
                  <p className="text-neutral-silver">
                    Choose a message from the list to view details
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

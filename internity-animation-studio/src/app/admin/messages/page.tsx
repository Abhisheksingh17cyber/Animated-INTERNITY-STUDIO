'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Archive, Trash2, Reply, Mail, MailOpen } from 'lucide-react';

interface Message {
  id: string;
  sender: string;
  email: string;
  subject: string;
  preview: string;
  body: string;
  time: string;
  read: boolean;
  starred: boolean;
}

const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'Sarah Chen',
    email: 'sarah@example.com',
    subject: 'New Animation Project Inquiry',
    preview: 'Hi, I would love to discuss a potential 3D animation project for our brand...',
    body: 'Hi,\n\nI would love to discuss a potential 3D animation project for our brand. We are looking for a 60-second product showcase video with photorealistic rendering.\n\nOur budget range is $15,000-$25,000 and we would need it completed within 6 weeks.\n\nCould we schedule a call to discuss the details?\n\nBest regards,\nSarah Chen\nCreative Director, TechVision Inc.',
    time: '10 min ago',
    read: false,
    starred: true,
  },
  {
    id: '2',
    sender: 'Marcus Rivera',
    email: 'marcus@startup.io',
    subject: 'Motion Graphics for App Launch',
    preview: 'We are launching our new app next month and need some motion graphics...',
    body: 'Hello INTERNITY team,\n\nWe are launching our new app next month and need some motion graphics for our launch campaign. This includes:\n\n- App store preview video\n- Social media teasers (5 variations)\n- Landing page animations\n\nPlease let me know your availability and rates.\n\nThanks,\nMarcus Rivera',
    time: '2 hours ago',
    read: false,
    starred: false,
  },
  {
    id: '3',
    sender: 'Emma Williams',
    email: 'emma@agency.co',
    subject: 'Partnership Opportunity',
    preview: 'Our agency is looking for animation partners for ongoing projects...',
    body: 'Dear INTERNITY,\n\nOur digital agency is looking for reliable animation partners for ongoing client projects. We have a steady stream of work including:\n\n- Explainer videos\n- Brand animations\n- Social media content\n\nWould you be interested in a partnership discussion?\n\nWarm regards,\nEmma Williams\nPartnership Manager',
    time: '1 day ago',
    read: true,
    starred: false,
  },
  {
    id: '4',
    sender: 'James Park',
    email: 'james@design.studio',
    subject: 'Collaboration on VFX Project',
    preview: 'I saw your Swarm Logic project and would love to collaborate...',
    body: 'Hi there!\n\nI saw your Swarm Logic VFX project and was blown away by the quality. I am a filmmaker working on a sci-fi short that could really benefit from similar effects.\n\nWould you be open to collaborating on this project?\n\nBest,\nJames Park',
    time: '2 days ago',
    read: true,
    starred: true,
  },
  {
    id: '5',
    sender: 'Lisa Thompson',
    email: 'lisa@nonprofit.org',
    subject: 'Educational Animation Request',
    preview: 'We are a non-profit looking for animated educational content...',
    body: 'Hello,\n\nWe are a non-profit organization focused on environmental education. We are looking for animated content to help explain climate change concepts to young audiences.\n\nDo you have experience with educational content? What would be a rough estimate for a 3-minute animated video?\n\nThank you,\nLisa Thompson\nEducation Director',
    time: '3 days ago',
    read: true,
    starred: false,
  },
];

export default function AdminMessages() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'unread' | 'starred'>('all');
  const [replyText, setReplyText] = useState('');

  const filtered = messages.filter((msg) => {
    const matchesSearch =
      msg.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === 'unread') return matchesSearch && !msg.read;
    if (filter === 'starred') return matchesSearch && msg.starred;
    return matchesSearch;
  });

  const toggleRead = (id: string) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, read: !msg.read } : msg))
    );
  };

  const toggleStar = (id: string) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id ? { ...msg, starred: !msg.starred } : msg
      )
    );
  };

  const deleteMessage = (id: string) => {
    setMessages(messages.filter((msg) => msg.id !== id));
    if (selectedMessage?.id === id) setSelectedMessage(null);
  };

  const unreadCount = messages.filter((msg) => !msg.read).length;

  return (
    <div className="pt-12 md:pt-0">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Messages</h1>
        <p className="text-neutral-silver">
          {unreadCount} unread message{unreadCount !== 1 ? 's' : ''}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Message List */}
        <div className="lg:col-span-1 bg-neutral-charcoal rounded-2xl border border-neutral-gray/20 flex flex-col overflow-hidden">
          {/* Search & Filter */}
          <div className="p-4 border-b border-neutral-gray/20">
            <div className="relative mb-3">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-silver"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search messages..."
                className="w-full bg-neutral-black border border-neutral-gray/30 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-neutral-silver focus:outline-none focus:border-honey-primary/50"
              />
            </div>
            <div className="flex gap-2">
              {(['all', 'unread', 'starred'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded-lg text-xs capitalize transition-all ${
                    filter === f
                      ? 'bg-honey-primary text-neutral-black font-medium'
                      : 'bg-neutral-gray/30 text-neutral-silver hover:text-white'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto">
            {filtered.map((msg) => (
              <motion.button
                key={msg.id}
                onClick={() => {
                  setSelectedMessage(msg);
                  if (!msg.read) toggleRead(msg.id);
                }}
                className={`w-full text-left p-4 border-b border-neutral-gray/10 hover:bg-neutral-gray/20 transition-colors ${
                  selectedMessage?.id === msg.id ? 'bg-neutral-gray/20' : ''
                } ${!msg.read ? 'bg-honey-primary/5' : ''}`}
              >
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-center gap-2">
                    {!msg.read && (
                      <div className="w-2 h-2 rounded-full bg-honey-primary flex-shrink-0" />
                    )}
                    <span
                      className={`text-sm ${
                        !msg.read ? 'font-bold text-white' : 'text-neutral-silver'
                      }`}
                    >
                      {msg.sender}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-silver flex-shrink-0">
                    {msg.time}
                  </span>
                </div>
                <p
                  className={`text-sm mb-1 truncate ${
                    !msg.read ? 'text-white' : 'text-neutral-silver'
                  }`}
                >
                  {msg.subject}
                </p>
                <p className="text-xs text-neutral-silver truncate">
                  {msg.preview}
                </p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2 bg-neutral-charcoal rounded-2xl border border-neutral-gray/20 flex flex-col overflow-hidden">
          {selectedMessage ? (
            <>
              {/* Message Header */}
              <div className="p-6 border-b border-neutral-gray/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-1">
                      {selectedMessage.subject}
                    </h2>
                    <p className="text-sm text-neutral-silver">
                      From{' '}
                      <span className="text-honey-primary">
                        {selectedMessage.sender}
                      </span>{' '}
                      ({selectedMessage.email})
                    </p>
                  </div>
                  <span className="text-xs text-neutral-silver">
                    {selectedMessage.time}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => toggleRead(selectedMessage.id)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-neutral-gray/30 rounded-lg text-xs text-neutral-silver hover:text-white transition-colors"
                  >
                    {selectedMessage.read ? (
                      <>
                        <Mail size={12} /> Mark Unread
                      </>
                    ) : (
                      <>
                        <MailOpen size={12} /> Mark Read
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => toggleStar(selectedMessage.id)}
                    className={`flex items-center gap-1 px-3 py-1.5 bg-neutral-gray/30 rounded-lg text-xs transition-colors ${
                      selectedMessage.starred
                        ? 'text-honey-primary'
                        : 'text-neutral-silver hover:text-white'
                    }`}
                  >
                    <Star size={12} fill={selectedMessage.starred ? 'currentColor' : 'none'} />
                    {selectedMessage.starred ? 'Starred' : 'Star'}
                  </button>
                  <button className="flex items-center gap-1 px-3 py-1.5 bg-neutral-gray/30 rounded-lg text-xs text-neutral-silver hover:text-white transition-colors">
                    <Archive size={12} /> Archive
                  </button>
                  <button
                    onClick={() => deleteMessage(selectedMessage.id)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-neutral-gray/30 rounded-lg text-xs text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 size={12} /> Delete
                  </button>
                </div>
              </div>

              {/* Message Body */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="whitespace-pre-wrap text-neutral-silver leading-relaxed">
                  {selectedMessage.body}
                </div>
              </div>

              {/* Reply */}
              <div className="p-4 border-t border-neutral-gray/20">
                <div className="flex gap-3">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Type your reply..."
                    rows={2}
                    className="flex-1 bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-silver focus:outline-none focus:border-honey-primary/50 resize-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 bg-honey-primary text-neutral-black rounded-xl hover:bg-honey-light transition-colors self-end"
                  >
                    <Reply size={18} />
                  </motion.button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">📬</div>
                <p className="text-neutral-silver">Select a message to read</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

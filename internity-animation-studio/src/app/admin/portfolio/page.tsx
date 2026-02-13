'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Edit, Trash2, MoreVertical, X } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/lib/constants';
import type { PortfolioItem } from '@/types';

const categories = ['All', '2D Animation', '3D Animation', 'Motion Design', 'Visual Effects', 'Web Animation'];

export default function AdminPortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([...PORTFOLIO_ITEMS]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItem | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '2D Animation',
    description: '',
    color: '#FFD700',
  });

  const filtered = items.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const openCreate = () => {
    setEditingItem(null);
    setFormData({ title: '', category: '2D Animation', description: '', color: '#FFD700' });
    setShowModal(true);
  };

  const openEdit = (item: PortfolioItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      category: item.category,
      description: item.description,
      color: item.color,
    });
    setShowModal(true);
    setOpenMenu(null);
  };

  const handleSave = () => {
    if (editingItem) {
      setItems(
        items.map((item) =>
          item.id === editingItem.id
            ? { ...item, ...formData, image: item.image }
            : item
        )
      );
    } else {
      const newItem: PortfolioItem = {
        id: String(Date.now()),
        ...formData,
        image: '/images/portfolio/new-project.jpg',
      };
      setItems([...items, newItem]);
    }
    setShowModal(false);
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
    setOpenMenu(null);
  };

  return (
    <div className="pt-12 md:pt-0">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Portfolio</h1>
          <p className="text-neutral-silver">Manage your portfolio items</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openCreate}
          className="flex items-center gap-2 px-5 py-3 bg-honey-primary text-neutral-black font-bold rounded-xl hover:bg-honey-light transition-colors"
        >
          <Plus size={18} /> Add Project
        </motion.button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-silver" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full bg-neutral-charcoal border border-neutral-gray/30 rounded-xl pl-12 pr-4 py-3 text-white placeholder-neutral-silver focus:outline-none focus:border-honey-primary/50 transition-colors"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                activeCategory === cat
                  ? 'bg-honey-primary text-neutral-black font-medium'
                  : 'bg-neutral-charcoal text-neutral-silver hover:text-white border border-neutral-gray/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group relative bg-neutral-charcoal rounded-2xl border border-neutral-gray/20 overflow-hidden"
            >
              {/* Thumbnail */}
              <div
                className="aspect-video"
                style={{
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className="w-16 h-16"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      backgroundColor: `${item.color}30`,
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                      }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setOpenMenu(openMenu === item.id ? null : item.id)}
                      className="p-1 text-neutral-silver hover:text-white transition-colors"
                    >
                      <MoreVertical size={18} />
                    </button>
                    <AnimatePresence>
                      {openMenu === item.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute right-0 top-8 bg-neutral-black border border-neutral-gray/30 rounded-xl py-2 min-w-[140px] z-10 shadow-xl"
                        >
                          <button
                            onClick={() => openEdit(item)}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-white hover:bg-neutral-gray/30 transition-colors"
                          >
                            <Edit size={14} /> Edit
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-neutral-gray/30 transition-colors"
                          >
                            <Trash2 size={14} /> Delete
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <p className="text-neutral-silver text-sm mt-3 line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-neutral-charcoal rounded-2xl border border-neutral-gray/20 p-8 z-50"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">
                  {editingItem ? 'Edit Project' : 'Add Project'}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-neutral-silver hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-neutral-silver mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
                    placeholder="Project title"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-silver mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
                  >
                    {categories.filter((c) => c !== 'All').map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-neutral-silver mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                    className="w-full bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50 resize-none"
                    placeholder="Project description"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-silver mb-2">Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={formData.color}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                      className="w-10 h-10 rounded-lg border border-neutral-gray/30 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={formData.color}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                      className="flex-1 bg-neutral-black border border-neutral-gray/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-honey-primary/50"
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 bg-neutral-gray/30 text-white rounded-xl hover:bg-neutral-gray/50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSave}
                  className="flex-1 py-3 bg-honey-primary text-neutral-black rounded-xl hover:bg-honey-light transition-colors font-bold"
                >
                  {editingItem ? 'Save Changes' : 'Create Project'}
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

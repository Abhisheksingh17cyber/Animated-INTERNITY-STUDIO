'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { PORTFOLIO_ITEMS } from '@/lib/constants';
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  X,
} from 'lucide-react';

type PortfolioItemType = {
  id: number;
  title: string;
  category: string;
  description: string;
  color: string;
};

export default function AdminPortfolio() {
  const [items, setItems] = useState<PortfolioItemType[]>([...PORTFOLIO_ITEMS]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<PortfolioItemType | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const categories = ['All', ...new Set(PORTFOLIO_ITEMS.map((item) => item.category))];

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (item: PortfolioItemType) => {
    setEditingItem(item);
    setShowModal(true);
    setOpenMenu(null);
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
    setOpenMenu(null);
  };

  const handleSave = (formData: PortfolioItemType) => {
    if (editingItem) {
      setItems(items.map((item) => (item.id === formData.id ? formData : item)));
    } else {
      setItems([...items, { ...formData, id: items.length + 1 }]);
    }
    setShowModal(false);
    setEditingItem(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-neutral-white">
            Portfolio
          </h1>
          <p className="text-neutral-silver mt-1">
            Manage your portfolio items
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            setEditingItem(null);
            setShowModal(true);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-honey-primary text-neutral-black font-semibold rounded-xl"
        >
          <Plus className="w-4 h-4" />
          Add Project
        </motion.button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-silver" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-neutral-charcoal border border-honey-primary/10 rounded-xl text-neutral-white placeholder-neutral-silver focus:outline-none focus:border-honey-primary/30 transition-colors"
          />
        </div>

        {/* Category filter */}
        <div className="relative">
          <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-silver" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none pl-12 pr-10 py-3 bg-neutral-charcoal border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors cursor-pointer"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Portfolio grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
              className="relative bg-neutral-charcoal rounded-2xl border border-honey-primary/10 overflow-hidden group"
            >
              {/* Image placeholder */}
              <div
                className="aspect-video relative"
                style={{
                  background: `linear-gradient(135deg, ${item.color}40 0%, #1A1A1A 50%, ${item.color}20 100%)`,
                }}
              >
                <span
                  className="absolute top-4 left-4 text-6xl font-bold opacity-20"
                  style={{ color: item.color }}
                >
                  {String(item.id).padStart(2, '0')}
                </span>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center gap-2"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-xl bg-honey-primary/20 text-honey-primary"
                    onClick={() => handleEdit(item)}
                  >
                    <Edit className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-xl bg-blue-500/20 text-blue-500"
                  >
                    <Eye className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: item.color }}
                    >
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-white mt-1 truncate">
                      {item.title}
                    </h3>
                    <p className="text-neutral-silver text-sm mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Menu button */}
                  <div className="relative">
                    <button
                      onClick={() => setOpenMenu(openMenu === item.id ? null : item.id)}
                      className="p-2 rounded-lg hover:bg-neutral-900 transition-colors"
                    >
                      <MoreVertical className="w-5 h-5 text-neutral-silver" />
                    </button>

                    {/* Dropdown menu */}
                    <AnimatePresence>
                      {openMenu === item.id && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute right-0 top-12 w-40 bg-neutral-900 border border-honey-primary/10 rounded-xl overflow-hidden shadow-xl z-10"
                        >
                          <button
                            onClick={() => handleEdit(item)}
                            className="w-full flex items-center gap-2 px-4 py-3 text-left text-neutral-white hover:bg-neutral-charcoal transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="w-full flex items-center gap-2 px-4 py-3 text-left text-red-500 hover:bg-red-500/10 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neutral-charcoal flex items-center justify-center">
            <Search className="w-8 h-8 text-neutral-silver" />
          </div>
          <h3 className="text-lg font-bold text-neutral-white mb-2">
            No projects found
          </h3>
          <p className="text-neutral-silver">
            Try adjusting your search or filter criteria
          </p>
        </motion.div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <PortfolioModal
            item={editingItem}
            onClose={() => {
              setShowModal(false);
              setEditingItem(null);
            }}
            onSave={handleSave}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function PortfolioModal({
  item,
  onClose,
  onSave,
}: {
  item: PortfolioItemType | null;
  onClose: () => void;
  onSave: (data: PortfolioItemType) => void;
}) {
  const [formData, setFormData] = useState<PortfolioItemType>(
    item || {
      id: 0,
      title: '',
      category: '',
      description: '',
      color: '#F4A623',
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-lg bg-neutral-charcoal border border-honey-primary/20 rounded-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-honey-primary/10">
          <h2 className="text-xl font-bold text-neutral-white">
            {item ? 'Edit Project' : 'Add Project'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-neutral-900 transition-colors"
          >
            <X className="w-5 h-5 text-neutral-silver" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-silver mb-2">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
              placeholder="Project title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-silver mb-2">
              Category
            </label>
            <input
              type="text"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
              className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
              placeholder="e.g., Motion Design"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-silver mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
              rows={3}
              className="w-full px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors resize-none"
              placeholder="Project description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-silver mb-2">
              Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                className="w-12 h-12 rounded-lg cursor-pointer border-0"
              />
              <input
                type="text"
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                className="flex-1 px-4 py-3 bg-neutral-950 border border-honey-primary/10 rounded-xl text-neutral-white focus:outline-none focus:border-honey-primary/30 transition-colors"
                placeholder="#F4A623"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-honey-primary/20 text-neutral-white font-semibold rounded-xl hover:bg-neutral-900 transition-colors"
            >
              Cancel
            </button>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-3 bg-honey-primary text-neutral-black font-semibold rounded-xl"
            >
              {item ? 'Update' : 'Create'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

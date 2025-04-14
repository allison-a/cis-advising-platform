'use client';

import { useState, useMemo } from 'react';
import { FAQ } from '@/lib/faqs';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const categories = ['All', 'Course', 'Petition', 'Scheduling', 'Advising'];

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchCategory =
        selectedCategory === 'All' ||
        faq.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [faqs, selectedCategory, searchTerm]);

  return (
    <section className="w-screen flex flex-col items-center px-4 pb-16">
      {/* Search Field */}
      <div className="mb-6 w-full max-w-xl">
        <input
          type="text"
          placeholder="Search questions..."
          className="w-screen px-5 py-3 text-sm rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(category => {
            const isActive = selectedCategory === category;
            return (
            <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500
                ${
                    isActive
                    ? 'bg-red-700 text-white border-white'
                    : 'bg-white text-red-700 border-white hover:bg-[#e9d0d0] hover:shadow-[0_0_12px_4px_rgba(185,28,28,0.35)]'
                }`}
            >
                {category}
            </button>
            );
        })}
      </div>


      {/* FAQs */}
      <div className="w-screen max-w-3xl space-y-4">
        {filteredFaqs.length === 0 && (
          <p className="text-center text-gray-500 italic">No questions matched your search.</p>
        )}

        {filteredFaqs.map(({ id, question, answer }) => (
          <div
            key={id}
            className="border border-gray-200 rounded-xl shadow-sm bg-white overflow-hidden"
          >
            <button
              onClick={() => toggle(id)}
              className="w-full flex justify-between items-center px-5 py-4 font-semibold text-red-700 hover:bg-red-50 transition"
            >
              <span className="w-full text-left">{question}</span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                  openId === id ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openId === id && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="px-5 bg-[#f9f5f2]"
                >
                  <div className="py-4 text-sm text-gray-800 leading-relaxed">{answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

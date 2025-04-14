'use client';

import { useState } from 'react';
import { FAQ } from '@/lib/faqs';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const categories = ['All', 'Course', 'Petition', 'Scheduling', 'Advising'];

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    //Buttons dont work
    <section className="w-screen flex flex-col items-center">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map(category => {
            const isActive = selectedCategory === category;
            return (
            <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`appearance-none px-4 py-2 rounded-full border text-sm font-semibold transition duration-200 outline-none focus:ring-2 focus:ring-red-400
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



{/*       
    <section className="w-screen flex justify-center"> */}
      <div className="w-full max-w-screen-lg px-4 space-y-4">
        {filteredFaqs.map(({ id, question, answer }) => (
          <div key={id} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(id)}
              className="w-full flex justify-between items-center px-4 py-3 font-semibold text-red-700 hover:bg-[#f6f5f3] transition"
            >
              <span className="w-full text-center">{question}</span>
              <ChevronDown
                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                  openId === id ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openId === id && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="px-4 bg-[#dabdb8]"
                >
                  <div className="py-3 text-sm text-gray-800 text-center">{answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

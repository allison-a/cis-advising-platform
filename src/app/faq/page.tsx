'use client';

import { faqs } from '../../lib/faqs';
import FAQAccordion from '@/components/FAQAccordion'; // adjust path if needed

export default function FAQPage() {
  return (
    <main className="w-full max-w-3xl px-6 py-10 mx-auto">
      <h1 className="text-3xl font-bold text-red-700 mb-4">Frequently Asked Questions</h1>
      <p className="text-gray-700 mb-8">
        Click a question below to view the answer.
      </p>

      <FAQAccordion faqs={faqs} />
    </main>
  );
}

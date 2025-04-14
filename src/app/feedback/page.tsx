'use client';

import { useState } from 'react';

export default function FeedbackPage() {
  const [anonymous, setAnonymous] = useState(false);
  const [feedbackType, setFeedbackType] = useState('Advising Experience Feedback');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    netid: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Need to find right emails/recipients
    const recipientMap: Record<string, string> = {
      'Advising Experience Feedback': 'advising@cornell.edu',
      'Petition Request': 'petitions@cornell.edu',
      'Website/Tool Bug': 'websupport@cornell.edu',
      'General Suggestion': 'suggestions@cornell.edu',
    };

    const payload = {
      ...formData,
      anonymous,
      feedbackType,
      recipient: recipientMap[feedbackType],
    };

    // Replace this with your real endpoint (or EmailJS, etc)
    await fetch('/api/submit-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    alert('Feedback submitted!');
  };


  return (
    <main className="w-screen flex flex-col items-center px-4 pb-16">
      <h1 className="text-3xl font-bold text-red-700 mb-2">Submit Your Feedback</h1>
      <p className="text-gray-700 mb-8">
        Use this form to submit feedback, suggestions, or petition requests related to CIS advising
      </p>

      <form className="space-y-6 bg-white p-6 rounded-xl shadow-md">
        {/* Feedback Type */}
        <div>
          <label className="block font-medium mb-1">Feedback Type<span className="text-red-600">*</span></label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition">
            <option>Advising Experience Feedback</option>
            <option>Petition Request</option>
            <option>Website/Tool Bug</option>
            <option>General Suggestion</option>
          </select>
        </div>

        {/* Anonymous Toggle */}
        <div className="flex items-center space-x-2">
          <input
            id="anonymous"
            type="checkbox"
            checked={anonymous}
            onChange={() => setAnonymous(!anonymous)}
            className="accent-red-700 w-4 h-4"
          />
          <label htmlFor="anonymous" className="text-sm font-medium">Submit anonymously</label>
        </div>

        {!anonymous && (
          <>
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">Name<span className="text-red-600">*</span></label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
               />   
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email<span className="text-red-600">*</span> <span className="text-sm text-gray-500">(Cornell email preferred)</span></label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
               />   
            </div>

            {/* NetID */}
            <div>
              <label className="block font-medium mb-1">Cornell Student ID<span className="text-red-600">*</span></label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
               />
</div>
          </>
        )}

        {/* Subject */}
        <div>
          <label className="block font-medium mb-1">Subject<span className="text-red-600">*</span></label>
          <input

            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
            placeholder="Brief description of your feedback"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium mb-1">Message<span className="text-red-600">*</span></label>
          <textarea
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
            placeholder="Please provide details about your feedback, suggestion, or petition request"
            required
          />
        </div>

        {/* Important Notes */}
        <div className="bg-red-50 border-l-4 border-red-500 text-red-900 p-4 rounded-md text-sm">
          <p className="font-semibold flex items-center mb-2">
            <span className="mr-2 text-lg">⚠️</span> Important Notes:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>All feedback is reviewed by the CIS advising team.</li>
            <li>If you provided contact information, we may reach out for clarification or updates.</li>
            <li>For urgent matters, please contact your advisor directly.</li>
          </ul>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition"
        >
          Submit Feedback
        </button>
      </form>
    </main>
  );
}

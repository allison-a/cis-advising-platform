export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-red-700">Welcome to the CIS Advising Platform</h1>
      <p className="text-lg text-gray-700">
        This platform centralizes all your advising needs — from finding advisors to planning your courses,
        submitting petitions, and getting quick answers to common questions.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
        <a href="/advising" className="p-4 bg-white shadow rounded-xl hover:bg-[#e8e7e5] transition">
          <h2 className="text-xl font-semibold text-red-600">Advising Contacts →</h2>
          <p className="text-sm mt-1 text-gray-600">Find advisors by department or major.</p>
        </a>
        <a href="/course-planning" className="p-4 bg-white shadow rounded-xl hover:bg-[#e8e7e5] transition">
          <h2 className="text-xl font-semibold text-red-600">Course Planning →</h2>
          <p className="text-sm mt-1 text-gray-600">Access tools and templates to plan your degree.</p>
        </a>
        <a href="/faq" className="p-4 bg-white shadow rounded-xl hover:bg-[#e8e7e5] transition">
          <h2 className="text-xl font-semibold text-red-600">FAQs →</h2>
          <p className="text-sm mt-1 text-gray-600">Quick answers to common advising questions.</p>
        </a>
        <a href="/feedback" className="p-4 bg-white shadow rounded-xl hover:bg-[#e8e7e5] transition">
          <h2 className="text-xl font-semibold text-red-600">Feedback →</h2>
          <p className="text-sm mt-1 text-gray-600">Submit concerns, petitions or suggestions.</p>
        </a>
      </div>
    </section>
  );
}

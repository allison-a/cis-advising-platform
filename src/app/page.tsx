'use client';
import { resources } from '../lib/resources_data';
import Link from 'next/link';

const featured = ['engineering-handbook', 'course-plan', 'student-center'];
const featuredResources = resources.filter(r => featured.includes(r.id));

export default function HomePage() {
  return (
    <main className="w-full px-6 py-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-000 to-red-800 text-white py-16 px-4 rounded-lg mb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to CISConnect
          </h1>
          <p className="text-xl mb-8">
            Your central hub for academic planning, course selection, and advising resources.
          </p>
        </div>
      </div>

      <section className="w-full px-6 py-6">
        <div className="bg-[#f2e3df] border border-gray-200 rounded-2xl shadow p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-red-700 text-center">What is the CIS Advising Resource Platform?</h2>
          
          <p className="text-gray-800 text-md md:text-lg text-center">
            A centralized platform built to empower Cornell CIS students with tools and guidance for academic success —
            from connecting with advisors to planning your courses and submitting feedback.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-red-600 mb-2">🔍 Find Your Advisor</h3>
              <p className="text-gray-700 text-sm">
                Quickly locate your assigned academic advisor by major or NetID range, and view their office hours.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-red-600 mb-2">📅 Plan Your Courses</h3>
              <p className="text-gray-700 text-sm">
                Access course planning tools, track your degree progress, and explore official course rosters.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-red-600 mb-2">❓ Get Quick Answers</h3>
              <p className="text-gray-700 text-sm">
                Use the searchable FAQ section to find answers to common academic and policy-related questions.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-semibold text-red-600 mb-2">📬 Submit Feedback or Petitions</h3>
              <p className="text-gray-700 text-sm">
                Send suggestions, report issues, or submit official petition requests directly to the advising team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-8 w-full"></div>

      {/* Quick Access Section */}
      <section className="space-y-6 mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-red-700 tracking-wide uppercase bg-[#fceeee] px-4 py-2 rounded-md shadow-sm inline-block"> 🚀 Quick Access </h2> 

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {/* <a href="/advising" className="block border border-gray-200 rounded-xl bg-white p-5 shadow-sm hover:bg-red-50 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-red-600">Advising Contacts →</h2>
            <p className="text-sm mt-1 text-gray-600">Find advisors by department or major.</p>
          </a> */}

          <a href="/course-planning" className="block border border-gray-200 rounded-xl bg-white p-5 shadow-sm hover:bg-red-50 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-red-600">Course Planning →</h2>
            <p className="text-sm mt-1 text-gray-600">Access tools and templates to plan your degree.</p>
          </a>

          <a href="/faq" className="block border border-gray-200 rounded-xl bg-white p-5 shadow-sm hover:bg-red-50 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-red-600">FAQs →</h2>
            <p className="text-sm mt-1 text-gray-600">Quick answers to common advising questions.</p>
          </a>

          <a href="/feedback" className="block border border-gray-200 rounded-xl bg-white p-5 shadow-sm hover:bg-red-50 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-red-600">Feedback →</h2>
            <p className="text-sm mt-1 text-gray-600">Submit concerns, petitions or suggestions.</p>
          </a>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-8 w-full"></div>

      {/* Featured Resources Section */}
      <section className="space-y-6 mb-16">
      <h2 className="text-xl sm:text-2xl font-bold text-red-700 tracking-wide uppercase bg-[#fceeee] px-4 py-2 rounded-md shadow-sm inline-block"> 📌 Featured Resources </h2> 
      <p className="text-gray-700">Popular tools and resources for academic planning</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {featuredResources.map(resource => (
            <div
              key={resource.id}
              className="block border border-gray-200 rounded-xl bg-white p-5 shadow-sm hover:bg-red-50 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-red-600">{resource.title}</h3>
              <p className="text-sm mt-1 text-gray-600">{resource.description}</p>

              {resource.isExternal ? (
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 underline hover:text-blue-800 mt-2 inline-block"
                >
                  Access Resource →
                </a>
              ) : (
                <Link
                  href={resource.url}
                  className="text-sm text-blue-600 underline hover:text-blue-800 mt-2 inline-block"
                >
                  Access Resource →
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="text-center pt-6">
          <Link href="/resources" className="footer-link">
            Browse All Resources
          </Link>
        </div>
      </section>


       {/* Spacer */}
       <div className="h-8 w-full"></div>

      {/* Advisor Section */}
      <section className="w-full">
        <div className="border border-gray-300 rounded-xl p-6 bg-[#f2e3df] shadow">
          <h2 className="text-xl sm:text-2xl font-bold text-red-700 tracking-wide uppercase px-4 py-2 rounded-md"> 👨‍🏫 Find Your Advisor</h2>
          <p className="text-gray-700 mb-8">Connect with your assigned academic advisor</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Advisor 1 */}
            <div className="border p-4 rounded-lg">
              <h3 className="text-lg font-bold text-red-700">Ryan Marchenese</h3>
              <p className="text-sm text-gray-700">Assistant Director, Undergraduate Advising</p>
              <p className="text-sm"><strong>Email:</strong> ryan.m@cornell.edu</p>
              <p className="text-sm"><strong>Office:</strong> Rhodes Hall 518</p>

              <p className="text-sm font-semibold mt-3 mb-2 text-gray-900">Office Hours:</p>
              <div style={{ marginLeft: "1rem" }} className="text-sm text-gray-800 space-y-1">
                <div><span className="font-semibold">Monday:</span> <span className="text-gray-600">None</span></div>
                <div><span className="font-semibold">Tuesday – Thursday:</span> <span className="text-gray-600">2:00 – 3:30 PM</span></div>
                <div><span className="font-semibold">Friday:</span> <span className="text-gray-600">10:00 – 11:30 AM</span></div>
              </div>

              <p className="text-sm mt-2"><strong>Assigned Students:</strong> Last names A–H</p>
            </div>

            {/* Advisor 2 */}
            <div className="border p-4 rounded-lg">
              <h3 className="text-lg font-bold text-red-700">Carl Cornell</h3>
              <p className="text-sm text-gray-700">Assistant Director, Undergraduate Advising</p>
              <p className="text-sm"><strong>Email:</strong> cec232@cornell.edu</p>
              <p className="text-sm"><strong>Office:</strong> Rhodes Hall 519</p>

              <p className="text-sm font-semibold mt-3 mb-2 text-gray-900">Office Hours:</p>
              <div style={{ marginLeft: "1rem" }} className="text-sm text-gray-800 space-y-1">
                <div><span className="font-semibold">Monday:</span> <span className="text-gray-600">2:00–3:30 PM</span></div>
                <div>
                  <span className="font-semibold">Tuesday:</span>{" "}
                  <span className="text-gray-600">
                    2:00–3:30 PM,&nbsp;
                    <a
                      href="https://cornell.zoom.us/j/94033200927?pwd=vBYAA3KDKACbok1yj3M2f4AmY3x1Cs.1"
                      className="zoom-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zoom link
                    </a>
                  </span>
                </div>
                <div><span className="font-semibold">Wednesday:</span> <span className="text-gray-600">9:30–11:00 AM</span></div>
                <div><span className="font-semibold">Thursday:</span> <span className="text-gray-600">10:30 AM–12:30 PM</span></div>
                <div><span className="font-semibold">Friday:</span> <span className="text-gray-600">None</span></div>
              </div>

              <p className="text-sm mt-2"><strong>Assigned Students:</strong> Last names I–Q</p>
            </div>

            {/* Advisor 3 */}
            <div className="border p-4 rounded-lg">
              <h3 className="text-lg font-bold text-red-700">Lindsay Glasner</h3>
              <p className="text-sm text-gray-700">Assistant Director, Undergraduate Advising</p>
              <p className="text-sm"><strong>Email:</strong> ryan.m@cornell.edu</p>
              <p className="text-sm"><strong>Office:</strong> Rhodes Hall 516</p>

              <p className="text-sm font-semibold mt-3 mb-2 text-gray-900">Office Hours:</p>
              <div style={{ marginLeft: "1rem" }} className="text-sm text-gray-800 space-y-1">
                <div><span className="font-semibold">Monday:</span> <span className="text-gray-600">10:00 - 11:00 AM</span></div>
                <div><span className="font-semibold">Tuesday – Thursday:</span> <span className="text-gray-600">9:30 – 11:00 AM</span></div>
                <div><span className="font-semibold">Wednesday:</span> <span className="text-gray-600">None</span></div>
                <div>
                  <span className="font-semibold">Thursday:</span>{" "}
                  <span className="text-gray-600">
                    12:30–2:00 PM,&nbsp;
                    <a
                      href="https://cornell.zoom.us/j/5131828666?pwd=VFNhYVAySmFlTWpNTjl1aitNUTVQdz09"
                      className="zoom-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zoom link
                    </a>
                  </span>
                </div>
                <div><span className="font-semibold">Friday:</span> <span className="text-gray-600">12:30 – 2:00 PM</span></div>
              </div>

              <p className="text-sm mt-2"><strong>Assigned Students:</strong> Last names R–Z</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

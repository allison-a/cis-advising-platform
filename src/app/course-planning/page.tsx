'use client';

import {
  GraduationCap,
  BookOpenCheck,
  Puzzle,
  ExternalLink,
  School,
  ShieldCheck,
  Compass,
} from 'lucide-react';

import { resources } from '@/lib/resources_data';
import type { Resource } from '@/lib/resources_data';

const coursePlanningResources: Resource[] = resources.filter((r) =>
  ['academic-planning', 'course-selection', 'scheduling'].includes(r.category)
);

export default function CoursePlanningPage() {
  return (
    <main className="w-screen max-w-5xl mx-auto px-4 py-10 space-y-16 text-gray-800">
      
      {/* Overview Section */}
      <section className="w-screen text-center px-4">
        <h1 className="text-3xl font-bold text-red-700">CS Degree Requirements Overview</h1>
        <p className="text-gray-700">
          The Computer Science major equips students with a strong foundation in programming, systems, algorithms, and theoretical CS. Customize your path through electives, technical courses, and specialization options.
        </p>
      </section>

      {/* Degree Summary Cards */}
      <section className="w-screen grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Calculus + Intro */}
        <div className="rounded-xl border p-5 bg-white shadow-sm">
          <div className="flex items-center gap-3 text-red-700 mb-3">
            <GraduationCap className="w-6 h-6" />
            <h2 className="text-xl font-bold">Calculus + Intro Programming</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>A&S: Math 1110 → 1120 → 2210</li>
            <li>ENGR: Math 1910 → 1920 → 2940</li>
            <li>CS 1110 or 1112</li>
            <li>CS 2110/2112 or ECE 2400/ENGRD 2140</li>
          </ul>
        </div>

        {/* Core CS */}
        <div className="rounded-xl border p-5 bg-white shadow-sm">
          <div className="flex items-center gap-3 text-red-700 mb-3">
            <BookOpenCheck className="w-6 h-6" />
            <h2 className="text-xl font-bold">Core CS Courses</h2>
          </div>
          <p className="text-sm mb-2 text-gray-600">Pre-Fall 2024:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>CS 2800, 3110, 3410 / 3420</li>
            <li>CS 4410 / 4414, CS 4820</li>
            <li>3 electives 4000+ (no 4090/4998/4999)</li>
          </ul>
          <p className="text-sm mt-4 mb-2 text-gray-600">Fall 2024+:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>+ CS 3700 or 3780</li>
            <li>2 electives 4000+ (if not core)</li>
          </ul>
        </div>

        {/* Practicum / Techs */}
        <div className="rounded-xl border p-5 bg-white shadow-sm">
          <div className="flex items-center gap-3 text-red-700 mb-3">
            <Puzzle className="w-6 h-6" />
            <h2 className="text-xl font-bold">Projects & Technicals</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>1 Practicum or project course</li>
            <li>3 Technical electives (3000+)</li>
            <li>3 External Specializations (non-CS)</li>
            <li>Major-Approved electives (≥3 credits)</li>
          </ul>
        </div>

        {/* Degrees */}
        <div className="rounded-xl border p-5 bg-white shadow-sm">
          <div className="flex items-center gap-3 text-red-700 mb-3">
            <School className="w-6 h-6" />
            <h2 className="text-xl font-bold">Degrees & Notes</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>B.S. – College of Engineering</li>
            <li>B.A. – College of Arts & Sciences</li>
            <li>Same value for jobs & grad school</li>
          </ul>
        </div>
      </section>

      {/* Integrity Notice */}
      <section className="w-screen bg-red-50 border-l-4 border-red-500 p-5 rounded-xl text-sm text-gray-800">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-5 h-5 text-red-700" />
          <span className="font-semibold text-red-700">Academic Integrity Reminder</span>
        </div>
        <p>
          CS work must be your own. Sharing files or code is a violation. Discuss ideas, but don’t copy. Protect your
          work and report misconduct.
        </p>
      </section>

      {/* New Vectors Section */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-4 flex items-center gap-2">
          <Compass className="w-6 h-6 text-red-700" /> Explore Elective Vectors
        </h2>
        <p className="text-gray-700 mb-6">
          Vectors are curated paths of electives to help you explore a specialty in depth. Not required, but great for customizing your CS journey.
        </p>

        <div className="w-screen grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="bg-white p-5 rounded-xl border shadow-sm">
            <h3 className="text-lg font-semibold text-red-700">🧠 Artificial Intelligence</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
              <li>CS 3700 + AI Practicum</li>
              <li>ML/NLP elective (e.g. CS 4740, 4780)</li>
              <li>Human intelligence or decision theory</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-xl border shadow-sm">
            <h3 className="text-lg font-semibold text-red-700">🔢 Computational Science</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
              <li>CS 4210 + 4220 (numerical methods)</li>
              <li>Math-focused electives (e.g. MATH 4200)</li>
              <li>4+ credits of low-level programming (CS 2022, 2043)</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-xl border shadow-sm">
            <h3 className="text-lg font-semibold text-red-700">🖼 Graphics & Vision</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
              <li>CS 4620/4670 + Practicum</li>
              <li>ML or Game Dev electives</li>
              <li>Art, visual perception courses (optional)</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-xl border shadow-sm">
            <h3 className="text-lg font-semibold text-red-700">🌐 Network Science</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
              <li>CS 2850 + INFO 4220</li>
              <li>Data science/ML course</li>
              <li>Game theory / econ modeling</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 mb-2">Planning Tools & Resources</h2>
        <p className="text-gray-700 mb-6">
          These tools help you plan your schedule, track progress, and explore Cornell CIS offerings.
        </p>

        <div className="w-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursePlanningResources.map(({ id, title, description, url, isExternal }) => (
            <a
              key={id}
              href={url}
              target={isExternal ? '_blank' : '_self'}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="block border border-gray-200 rounded-xl bg-white p-5 shadow-sm hover:bg-red-50 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-red-700">{title}</h3>
                {isExternal && <ExternalLink className="w-5 h-5 text-red-500" />}
              </div>
              <p className="mt-2 text-sm text-gray-700">{description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

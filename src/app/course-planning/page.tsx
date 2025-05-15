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
      <section className="w-screen grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
        {[
          {
            title: 'Calculus + Intro Programming',
            icon: <GraduationCap className="w-6 h-6" />,
            bullets: [
              'A&S: Math 1110 → 1120 → 2210',
              'ENGR: Math 1910 → 1920 → 2940',
              'CS 1110 or 1112',
              'CS 2110/2112 or ECE 2400/ENGRD 2140',
            ],
          },
          {
            title: 'Core CS Courses',
            icon: <BookOpenCheck className="w-6 h-6" />,
            bullets: [
              'CS 2800, 3110, 3410 / 3420',
              'CS 4410 / 4414, CS 4820',
              '3 electives 4000+ (no 4090/4998/4999)',
              '+ CS 3700 or 3780 (Fall 2024+)',
              '2 electives 4000+ (if not core)',
            ],
          },
          {
            title: 'Projects & Technicals',
            icon: <Puzzle className="w-6 h-6" />,
            bullets: [
              '1 Practicum or project course',
              '3 Technical electives (3000+)',
              '3 External Specializations (non-CS)',
              'Major-Approved electives (≥3 credits)',
            ],
          },
          {
            title: 'Degrees & Notes',
            icon: <School className="w-6 h-6" />,
            bullets: [
              'B.S. – College of Engineering',
              'B.A. – College of Arts & Sciences',
              'Same value for jobs & grad school',
            ],
          },
        ].map(({ title, icon, bullets }) => (
          <div key={title} className="resource-card space-y-3">
            <div className="flex items-center gap-3 text-red-700">
              {icon}
              <h2 className="font-bold">{title}</h2>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              {bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
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
    <div className="resource-card">
      <h3 className="text-lg font-semibold text-red-700">🧠 Artificial Intelligence</h3>
      <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
        <li>CS 3700 + AI Practicum</li>
        <li>ML/NLP elective (e.g. CS 4740, 4780)</li>
        <li>Human intelligence or decision theory</li>
      </ul>
    </div>
    <div className="resource-card">
      <h3 className="text-lg font-semibold text-red-700">🔢 Computational Science</h3>
      <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
        <li>CS 4210 + 4220 (numerical methods)</li>
        <li>Math-focused electives (e.g. MATH 4200)</li>
        <li>4+ credits of low-level programming (CS 2022, 2043)</li>
      </ul>
    </div>
    <div className="resource-card">
      <h3 className="text-lg font-semibold text-red-700">🖼 Graphics & Vision</h3>
      <ul className="text-sm text-gray-700 list-disc list-inside mt-2 space-y-1">
        <li>CS 4620/4670 + Practicum</li>
        <li>ML or Game Dev electives</li>
        <li>Art, visual perception courses (optional)</li>
      </ul>
    </div>
    <div className="resource-card">
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

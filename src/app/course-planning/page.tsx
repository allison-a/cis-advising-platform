'use client';

import { ExternalLink } from 'lucide-react';
import { resources } from '@/lib/resources_data';
import type { Resource } from '@/lib/resources_data';

const coursePlanningResources: Resource[] = resources.filter((r) =>
  ['academic-planning', 'course-selection', 'scheduling'].includes(r.category)
);

export default function CoursePlanningPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-red-700 mb-2">Course Planning</h1>
      <p className="text-gray-700 mb-6">
        These tools help you plan your schedule, track progress, and explore Cornell CIS offerings.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {coursePlanningResources.map(({ id, title, description, url, isExternal }) => (
          <a
            key={id}
            href={url}
            target={isExternal ? '_blank' : '_self'}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className="block border border-gray-200 rounded-xl bg-white p-5 shadow-sm hover:bg-red-50 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-red-700">{title}</h2>
              {isExternal && <ExternalLink className="w-5 h-5 text-red-500" />}
            </div>
            <p className="mt-2 text-sm text-gray-700">{description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}

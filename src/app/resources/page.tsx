// app/resources/page.tsx

'use client';

import {
    getResourcesByCategory,
    categoryNames,
    Resource
  } from '../../lib/resources_data';
import Link from 'next/link';

const ResourceCard = ({ resource }: { resource: Resource }) => {
  const { title, description, url, isExternal } = resource;

  return (
    <div className="block border border-gray-200 rounded-xl bg-white p-5 shadow-sm hover:bg-red-50 hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-red-700">{title}</h3>
      <p className="text-sm text-gray-700 mt-1">{description}</p>
      {isExternal ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 underline hover:text-blue-800 mt-2 inline-block"
        >
          Access Resource →
        </a>
      ) : (
        <Link href={url} className="text-sm text-blue-600 underline hover:text-blue-800 mt-2 inline-block">
          Access Resource →
        </Link>
      )}
    </div>
  );
};

export default function ResourcesPage() {
  const grouped = getResourcesByCategory();

  return (
    <main className="w-full px-6 py-10 space-y-12">
      <h1 className="text-3xl font-bold text-red-700 mb-2">All Resources</h1>
      <p className="text-gray-700 mb-8">Explore helpful academic tools, services, and forms for your success.</p>

      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="space-y-4">
          <h2 className="text-2xl font-semibold text-red-600">
            {categoryNames[category as keyof typeof categoryNames]}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(resource => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

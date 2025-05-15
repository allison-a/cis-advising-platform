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
    <div className="resource-card group">
      <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-700">{title}</h3>
      <p className="text-sm text-gray-600 mt-1 leading-relaxed">{description}</p>
      {isExternal ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 underline hover:text-blue-800 mt-3 inline-block"
        >
          Access Resource →
        </a>
      ) : (
        <Link href={url} className="text-sm text-blue-600 underline hover:text-blue-800 mt-3 inline-block">
          Access Resource →
        </Link>
      )}
    </div>
  );
};

export default function ResourcesPage() {
  const grouped = getResourcesByCategory();

  return (
    <main className="w-screen px-6 py-12 space-y-20">
      <section className="space-y-2 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-red-700">All Resources</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Helpful academic tools, services, and forms for your success.
        </p>
      </section>

      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="space-y-6 max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-1">
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

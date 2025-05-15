'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  // { name: 'Advising Contacts', path: '/advising' },
  { name: 'Course Planning', path: '/course-planning' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Feedback', path: '/feedback' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white border-b shadow-sm px-6 py-4">
      <div className="w-full flex justify-between items-center px-6">
        <span className="text-3xl font-extrabold text-red-700 tracking-tight">CISConnect</span>
        <ul className="flex gap-8 text-xl font-semibold text-gray-700">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`hover:text-red-600 transition-colors duration-150 ${
                  pathname === item.path ? 'text-red-600 font-bold' : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

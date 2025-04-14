import './globals.css';
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'CIS Advising Resource Platform',
  description: 'Cornell CIS centralized advising resource hub',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

'use client';
import { resources } from '../lib/resources_data';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaLaptop, FaCommentDots, FaRegListAlt, FaFolderOpen } from 'react-icons/fa';

const featured = ['engineering-handbook', 'course-plan', 'student-center'];
const featuredResources = resources.filter(r => featured.includes(r.id));

export default function HomePage() {
  const [showHero, setShowHero] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowHero(true), 100);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f7f3ef] px-4 font-sans">
      <style jsx global>{`
        body { font-family: 'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif; }
        nav, .navbar, .menu-bar, header {
          min-height: 40px !important;
          font-size: 1.35rem !important;
        }
      `}</style>
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center h-[calc(100vh-72px)] relative">
        {/* Huge faint background computer icon, moved up */}
        <FaLaptop className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/4 text-gray-300 opacity-20 text-[50rem] pointer-events-none select-none z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-center" style={{ fontFamily: 'Inter, Roboto, Helvetica Neue, Arial, sans-serif' }}>Welcome to CISConnect</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-2xl font-normal leading-relaxed" style={{ fontFamily: 'Inter, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}>
            A centralized platform built to empower Cornell CIS students with tools and guidance for academic success—from connecting with advisors to planning your courses and submitting feedback.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center mt-4 relative z-10">
          <Link href="/resources" className="flex-1 min-w-[220px] max-w-xs bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-xl p-8 flex flex-col items-center justify-center shadow-lg cursor-pointer">
            <FaFolderOpen className="text-4xl text-white mb-4" />
            <span className="text-2xl font-semibold text-white mb-2">Resources</span>
          </Link>
          <Link href="/course-planning" className="flex-1 min-w-[220px] max-w-xs bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-xl p-8 flex flex-col items-center justify-center shadow-lg cursor-pointer">
            <FaRegListAlt className="text-4xl text-white mb-4" />
            <span className="text-2xl font-semibold text-white mb-2">Course Planning</span>
          </Link>
          <Link href="/feedback" className="flex-1 min-w-[220px] max-w-xs bg-red-600 hover:bg-red-700 transition-colors duration-200 rounded-xl p-8 flex flex-col items-center justify-center shadow-lg cursor-pointer">
            <FaCommentDots className="text-4xl text-white mb-4" />
            <span className="text-2xl font-semibold text-white mb-2">Submit Feedback</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

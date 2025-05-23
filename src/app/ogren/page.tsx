import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Öğren | Finanqa',
  description: 'Finanqa ile finansal okuryazarlığınızı geliştirin. Makaleler, quizler ve finans sözlüğü ile finans dünyasını keşfedin.',
};

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Öğren</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Makaleler Section */}
        <Link href="/ogren/makaleler">
          <div className="bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-200 p-6">
            <div className="h-48 bg-[#1b9c85] rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Makaleler ve Bilgiler</h2>
            <p className="text-gray-600">Kişisel finans, bütçe yönetimi ve yatırım konularında kapsamlı makaleler.</p>
          </div>
        </Link>

        {/* Quizler Section */}
        <Link href="/ogren/quizler">
          <div className="bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-200 p-6">
            <div className="h-48 bg-[#1b9c85] rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Finansal Oyunlar ve Quizler</h2>
            <p className="text-gray-600">Bilginizi test edin ve eğlenceli quizlerle öğrenin.</p>
          </div>
        </Link>

        {/* Sözlük Section */}
        <Link href="/ogren/sozluk">
          <div className="bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-200 p-6">
            <div className="h-48 bg-[#1b9c85] rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Finans Sözlüğü</h2>
            <p className="text-gray-600">Finansal terimleri öğrenin ve anlayın.</p>
          </div>
        </Link>
      </div>
    </div>
  );
} 
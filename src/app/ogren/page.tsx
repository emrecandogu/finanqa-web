import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Öğren | Finanqa',
  description: 'Finanqa ile finansal okuryazarlığınızı geliştirin. Makaleler, quizler ve finans sözlüğü ile finans dünyasını keşfedin.',
};

export default function LearnPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-6 sm:mb-10 text-center">Öğren</h1>
        <p className="text-base sm:text-lg text-finanqa-green-1/80 text-center mb-8 max-w-2xl mx-auto">
          Finanqa'nın eğlenceli ve interaktif öğrenme platformuyla finans dünyasını keşfedin. Makaleler, quizler ve kapsamlı finans sözlüğü ile finansal bilginizi artırın.
        </p>
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Makaleler Section */}
          <Link href="/ogren/makaleler" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200 cursor-pointer h-full">
              <div className="h-28 w-28 bg-[#1b9c85] rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800 text-center">Makaleler ve Bilgiler</h2>
              <p className="text-gray-600 text-center">Kişisel finans, bütçe yönetimi ve yatırım konularında kapsamlı makaleler.</p>
            </div>
          </Link>

          {/* Quizler Section */}
          <Link href="/ogren/quizler" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200 cursor-pointer h-full">
              <div className="h-28 w-28 bg-[#1b9c85] rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800 text-center">Finansal Oyunlar ve Quizler</h2>
              <p className="text-gray-600 text-center">Bilginizi test edin ve eğlenceli quizlerle öğrenin.</p>
            </div>
          </Link>

          {/* Sözlük Section */}
          <Link href="/ogren/sozluk" className="group">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200 cursor-pointer h-full">
              <div className="h-28 w-28 bg-[#1b9c85] rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800 text-center">Finans Sözlüğü</h2>
              <p className="text-gray-600 text-center">Finansal terimleri öğrenin ve anlayın.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
} 
'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const badges = [
  { label: 'Popüler', color: 'bg-yellow-400/80 text-yellow-900' },
  { label: 'Yeni', color: 'bg-blue-400/80 text-blue-900' },
  { label: 'Tavsiye', color: 'bg-green-400/80 text-green-900' },
  { label: 'Sık Sorulan', color: 'bg-pink-400/80 text-pink-900' },
  { label: 'Favori', color: 'bg-purple-400/80 text-purple-900' },
];

const sections = [
  {
    title: 'Makaleler',
    description: 'Finans dünyası hakkında kapsamlı ve güncel makaleler.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    href: '/academy/articles',
  },
  {
    title: 'Quizler',
    description: 'Finansal bilginizi test edin ve öğrenin.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    href: '/academy/quizzes',
  },
  {
    title: 'Sözlük',
    description: 'Finans dünyasının temel terimlerini öğrenin.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    href: '/academy/dictionary',
  },
  {
    title: 'Videolar',
    description: 'Video eğitimlerle finans dünyasını keşfedin.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    href: '/academy/videos',
  },
  {
    title: 'Oyunlar',
    description: 'Eğlenceli oyunlarla finansal okuryazarlığınızı geliştirin.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    href: '/academy/games',
  },
];

function getRandomBadge(idx: number) {
  return badges[idx % badges.length];
}

const AkademiPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-finanqa-green-1 mb-2 tracking-tight">
            Finansal Yolculuğun Başlasın!
          </h1>
          <div className="flex justify-center mb-4">
            <span className="block w-32 h-2 rounded-full bg-gradient-to-r from-finanqa-green-1 via-blue-400 to-finanqa-green-2 opacity-70"></span>
          </div>
          <p className="text-lg sm:text-xl text-finanqa-green-1/80 max-w-3xl mx-auto mb-0">
            Finansal okuryazarlığını eğlenceli içeriklerle geliştir, bilgiyle güçlen, geleceğini bugünden inşa et.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {sections.map((section, idx) => {
            const badge = getRandomBadge(idx);
            return (
              <Link
                key={section.title}
                href={section.href}
                className="group bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Badge */}
                <span className={`absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold ${badge.color} shadow-sm`}>{badge.label}</span>
                {/* Icon with colored bg */}
                <div className="mb-6 flex items-center justify-center">
                  <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-finanqa-green-1/10 group-hover:bg-finanqa-green-1/20 transition-all">
                    {section.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-finanqa-green-1 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-4 min-h-[48px]">{section.description}</p>
                <span className="inline-block mt-2 text-finanqa-green-1 font-semibold group-hover:underline transition-all">Keşfet →</span>
              </Link>
            );
          })}
          {/* Maskot kartı: sadece büyük ekranda görünür, mobilde gizli */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <Image
                src="/images/anqa/anqa_main_transparan.png"
                alt="Anqa Maskot"
                width={220}
                height={220}
                className="object-contain max-h-56"
                priority
              />
              {/* Yeni içerikler mesajı */}
              <div className="mt-6 px-6 py-3 rounded-2xl bg-gradient-to-r from-finanqa-green-1 via-blue-400 to-finanqa-green-2 shadow-lg text-white text-xl font-extrabold tracking-tight text-center drop-shadow-lg animate-pulse">
                Yeni içerikler yakında seninle!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkademiPage; 
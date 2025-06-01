import React from 'react';
import GlossaryTerm from '@/components/ogren/GlossaryTerm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finans Sözlüğü | Finanqa',
  description: 'Finans dünyasının temel terimlerini öğrenin. Kapsamlı finans sözlüğü ile finansal terimleri anlayın ve kullanın.',
};

// This would typically come from an API or CMS
const sampleTerms = [
  {
    term: 'Borsa',
    definition: 'Menkul kıymetlerin alınıp satıldığı organize piyasa. Şirketlerin hisse senetleri, devlet tahvilleri ve diğer finansal araçların işlem gördüğü resmi bir platformdur.',
    relatedArticles: [
      {
        title: 'Borsaya Giriş Rehberi',
        slug: 'borsaya-giris-rehberi',
      },
      {
        title: 'Temel Analiz Nedir?',
        slug: 'temel-analiz-nedir',
      },
    ],
  },
  {
    term: 'Faiz',
    definition: 'Borç alınan paranın kullanımı için ödenen bedel. Bankalar ve diğer finansal kurumlar tarafından uygulanan, paranın zaman değerini yansıtan bir ücrettir.',
    relatedArticles: [
      {
        title: 'Faiz Türleri ve Hesaplama',
        slug: 'faiz-turleri-ve-hesaplama',
      },
      {
        title: 'Bileşik Faiz Nedir?',
        slug: 'bilesik-faiz-nedir',
      },
    ],
  },
  {
    term: 'Enflasyon',
    definition: 'Fiyatların genel seviyesindeki sürekli artış. Para biriminin satın alma gücünün düşmesine ve yaşam maliyetinin artmasına neden olan ekonomik bir olgudur.',
    relatedArticles: [
      {
        title: 'Enflasyon ve Yatırım',
        slug: 'enflasyon-ve-yatirim',
      },
      {
        title: 'Enflasyona Karşı Korunma',
        slug: 'enflasyona-karsi-korunma',
      },
    ],
  },
];

const GlossaryPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-4">Finans Sözlüğü</h1>
          <p className="text-base sm:text-lg text-finanqa-green-1/80 max-w-2xl mx-auto">
            Finans dünyasının temel terimlerini öğrenin. Kapsamlı finans sözlüğü ile finansal terimleri anlayın ve kullanın.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="search"
              placeholder="Terim ara..."
              className="w-full rounded-xl border border-gray-200 px-4 py-3 pl-12 bg-white shadow-sm focus:ring-2 focus:ring-finanqa-green-1 focus:border-transparent"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Alphabet Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Array.from('ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ').map((letter) => (
            <button
              key={letter}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-finanqa-green-1 hover:text-white transition-colors duration-200 font-medium"
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sampleTerms.map((term, index) => (
            <GlossaryTerm key={index} {...term} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage; 
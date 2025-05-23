import React from 'react';
import GlossaryTerm from '@/components/ogren/GlossaryTerm';

// This would typically come from an API or CMS
const sampleTerms = [
  {
    term: 'Borsa',
    definition: 'Menkul kıymetlerin alınıp satıldığı organize piyasa.',
    relatedArticles: [
      {
        title: 'Borsaya Giriş Rehberi',
        slug: 'borsaya-giris-rehberi',
      },
    ],
  },
  {
    term: 'Faiz',
    definition: 'Borç alınan paranın kullanımı için ödenen bedel.',
    relatedArticles: [
      {
        title: 'Faiz Türleri ve Hesaplama',
        slug: 'faiz-turleri-ve-hesaplama',
      },
    ],
  },
  // Add more sample terms as needed
];

const GlossaryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Finans Sözlüğü</h1>
        <div className="flex gap-4">
          <input
            type="search"
            placeholder="Terim ara..."
            className="rounded-lg border border-gray-300 px-4 py-2 w-64"
          />
        </div>
      </div>

      {/* Alphabet Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Array.from('ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ').map((letter) => (
          <button
            key={letter}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#1b9c85] hover:text-white transition-colors"
          >
            {letter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sampleTerms.map((term, index) => (
          <GlossaryTerm key={index} {...term} />
        ))}
      </div>
    </div>
  );
};

export default GlossaryPage; 
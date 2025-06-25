import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { findTermBySlug, getRelatedTerms, getCategoryInfo, createSlug, getDifficultyColor, getDifficultyText, formatDate } from '../utils';

interface TermPageProps {
  params: {
    slug: string;
  };
}

// Metadata generation
export async function generateMetadata({ params }: TermPageProps): Promise<Metadata> {
  const { slug } = params;
  const term = findTermBySlug(slug);

  if (!term) {
    return {
      title: 'Terim Bulunamadı - FinanQA Sözlük',
      description: 'Aradığınız finans terimi bulunamadı.',
    };
  }

  const title = `${term.term} Nedir? - FinanQA Finans Sözlüğü`;
  const description = `${term.definition} ${term.detailedDefinition ? term.detailedDefinition.substring(0, 100) + '...' : ''} FinanQA Finans Sözlüğü'nde ${term.term} terimini detaylı olarak öğrenin.`;

  return {
    title,
    description,
    keywords: [
      term.term,
      ...(term.synonyms || []),
      ...(term.tags || []),
      term.category,
      'finans',
      'sözlük',
      'terim',
      'tanım'
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://finanqa.com/academy/dictionary/${slug}`,
      siteName: 'FinanQA',
      locale: 'tr_TR',
      images: [
        {
          url: `/api/og/dictionary/${slug}`,
          width: 1200,
          height: 630,
          alt: `${term.term} - FinanQA Finans Sözlüğü`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/api/og/dictionary/${slug}`],
      creator: '@finanqa',
      site: '@finanqa',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://finanqa.com/academy/dictionary/${slug}`,
    },
  };
}

export default function TermPage({ params }: TermPageProps) {
  const { slug } = params;
  const term = findTermBySlug(slug);

  if (!term) {
    notFound();
  }

  const relatedTerms = getRelatedTerms(term, 6);
  const categoryInfo = getCategoryInfo(term.category);

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/academy" className="text-emerald-600 hover:text-emerald-700">
                Akademi
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="/academy/dictionary" className="text-emerald-600 hover:text-emerald-700">
                Sözlük
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900 font-medium">{term.term}</li>
          </ol>
        </nav>

        {/* Term Header */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {term.term}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getDifficultyColor(term.difficulty)}`}>
                  {getDifficultyText(term.difficulty)}
                </span>
                
                {categoryInfo && (
                  <span 
                    className="px-3 py-1 text-sm font-medium rounded-full text-white"
                    style={{ backgroundColor: categoryInfo.color }}
                  >
                    {term.category}
                  </span>
                )}
                
                {term.popularity && (
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-sm text-gray-600">
                      Popülerlik: {term.popularity}%
                    </span>
                  </div>
                )}
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                {term.definition}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Detailed Definition */}
            {term.detailedDefinition && (
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Detaylı Açıklama
                </h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="text-gray-700 leading-relaxed">
                    {term.detailedDefinition}
                  </p>
                </div>
              </section>
            )}

            {/* Examples */}
            {term.examples && term.examples.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Örnekler
                </h2>
                <div className="space-y-3">
                  {term.examples.map((example, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                      <span className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {idx + 1}
                      </span>
                      <p className="text-gray-700">{example}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Synonyms & Related Terms */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {term.synonyms && term.synonyms.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Eş Anlamlı Terimler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {term.synonyms.map((synonym, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {synonym}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {term.tags && term.tags.length > 0 && (
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Etiketler
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {term.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Term Stats */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Terim Bilgileri
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Kategori:</span>
                  <span className="font-medium">{term.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Zorluk:</span>
                  <span className="font-medium">{getDifficultyText(term.difficulty)}</span>
                </div>
                {term.views && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Görüntülenme:</span>
                    <span className="font-medium">{term.views.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Güncelleme:</span>
                  <span className="font-medium">{formatDate(term.updatedAt)}</span>
                </div>
              </div>
            </div>

            {/* Related Terms */}
            {relatedTerms.length > 0 && (
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  İlgili Terimler
                </h3>
                <div className="space-y-3">
                  {relatedTerms.map((relatedTerm) => (
                    <Link
                      key={relatedTerm.id}
                      href={`/academy/dictionary/${createSlug(relatedTerm.term)}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-gray-900 mb-1">
                        {relatedTerm.term}
                      </div>
                      <div className="text-sm text-gray-600 line-clamp-2">
                        {relatedTerm.definition}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Share & Actions */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Paylaş
              </h3>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                  Twitter
                </button>
                <button className="flex-1 bg-blue-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-900 transition-colors">
                  LinkedIn
                </button>
                <button className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                  Kopyala
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              href="/academy/dictionary"
              className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              <span>←</span>
              Sözlüğe Dön
            </Link>
            
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Bu terim hakkında daha fazla bilgi mi istiyorsunuz?
              </p>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-emerald-700 transition-colors">
                Soru Sorun
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
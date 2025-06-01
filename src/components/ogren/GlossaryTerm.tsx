import React from 'react';
import Link from 'next/link';

interface GlossaryTermProps {
  term: string;
  definition: string;
  relatedArticles?: {
    title: string;
    slug: string;
  }[];
}

const GlossaryTerm: React.FC<GlossaryTermProps> = ({
  term,
  definition,
  relatedArticles = [],
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 p-6 group">
      <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-finanqa-green-1 transition-colors duration-200">
        {term}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{definition}</p>
      
      {relatedArticles.length > 0 && (
        <div className="mt-6 pt-4 border-t border-gray-100">
          <h4 className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            İlgili Makaleler
          </h4>
          <div className="space-y-2">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/ogren/makaleler/${article.slug}`}
                className="block text-finanqa-green-1 hover:text-finanqa-green-2 transition-colors duration-200 flex items-center gap-2 group/article"
              >
                <span>{article.title}</span>
                <svg className="w-4 h-4 transform group-hover/article:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlossaryTerm; 
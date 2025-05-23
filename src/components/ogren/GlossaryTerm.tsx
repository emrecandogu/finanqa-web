import React from 'react';
import Link from 'next/link';

interface GlossaryTermProps {
  term: string;
  definition: string;
  relatedArticles?: Array<{
    title: string;
    slug: string;
  }>;
}

const GlossaryTerm: React.FC<GlossaryTermProps> = ({
  term,
  definition,
  relatedArticles = [],
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-2xl font-semibold mb-3 text-gray-800">{term}</h3>
      <p className="text-gray-600 mb-4">{definition}</p>
      
      {relatedArticles.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-500 mb-2">İlgili Makaleler</h4>
          <div className="space-y-2">
            {relatedArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/ogren/makaleler/${article.slug}`}
                className="block text-[#1b9c85] hover:text-[#167c6a] transition-colors"
              >
                {article.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlossaryTerm; 
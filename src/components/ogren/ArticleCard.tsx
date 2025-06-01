import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  slug: string;
  imageUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  category,
  readTime,
  slug,
  imageUrl,
}) => {
  return (
    <Link href={`/ogren/makaleler/${slug}`}>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden group">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-sm font-medium bg-finanqa-green-1/10 text-finanqa-green-1 rounded-full">
              {category}
            </span>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readTime} dakika
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-finanqa-green-1 transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 line-clamp-3">{description}</p>
          <div className="mt-4 flex items-center text-finanqa-green-1 font-medium">
            Devamını Oku
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard; 
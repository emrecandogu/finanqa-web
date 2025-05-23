import React from 'react';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  slug: string;
  imageUrl?: string;
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
      <div className="bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-200 overflow-hidden">
        {imageUrl && (
          <div className="relative h-48 w-full">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-sm bg-[#1b9c85] text-white rounded-full">
              {category}
            </span>
            <span className="text-sm text-gray-500">{readTime} dakika</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard; 
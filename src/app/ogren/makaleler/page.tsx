import React from 'react';
import ArticleCard from '@/components/ogren/ArticleCard';

// This would typically come from an API or CMS
const sampleArticles = [
  {
    title: 'Kişisel Bütçe Yönetimi',
    description: 'Aylık gelir ve giderlerinizi nasıl yöneteceğinizi öğrenin.',
    category: 'Bütçe Yönetimi',
    readTime: '5',
    slug: 'kisisel-butce-yonetimi',
    imageUrl: '/images/articles/budget.jpg',
  },
  {
    title: 'Yatırım Yapmaya Başlamak',
    description: 'Yatırım dünyasına ilk adımlarınızı atın.',
    category: 'Yatırım',
    readTime: '8',
    slug: 'yatirim-yapmaya-baslamak',
    imageUrl: '/images/articles/investment.jpg',
  },
  // Add more sample articles as needed
];

const ArticlesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Makaleler ve Bilgiler</h1>
        <div className="flex gap-4">
          <select className="rounded-lg border border-gray-300 px-4 py-2">
            <option value="">Tüm Kategoriler</option>
            <option value="butce">Bütçe Yönetimi</option>
            <option value="yatirim">Yatırım</option>
            <option value="tasarruf">Tasarruf</option>
          </select>
          <input
            type="search"
            placeholder="Makale ara..."
            className="rounded-lg border border-gray-300 px-4 py-2 w-64"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleArticles.map((article) => (
          <ArticleCard key={article.slug} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage; 
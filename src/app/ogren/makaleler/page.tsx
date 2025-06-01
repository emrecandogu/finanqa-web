import React from 'react';
import ArticleCard from '@/components/ogren/ArticleCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Makaleler | Finanqa',
  description: 'Finans dünyası hakkında kapsamlı ve güncel makaleler. Kişisel finans, yatırım ve bütçe yönetimi konularında uzman içerikler.',
};

// This would typically come from an API or CMS
const sampleArticles = [
  {
    title: 'Kişisel Bütçe Yönetimi',
    description: 'Aylık gelir ve giderlerinizi nasıl yöneteceğinizi öğrenin. Bütçe planlaması ve tasarruf stratejileri hakkında detaylı rehber.',
    category: 'Bütçe Yönetimi',
    readTime: '5',
    slug: 'kisisel-butce-yonetimi',
    imageUrl: '/images/articles/budget.jpg',
  },
  {
    title: 'Yatırım Yapmaya Başlamak',
    description: 'Yatırım dünyasına ilk adımlarınızı atın. Temel yatırım araçları ve stratejileri hakkında kapsamlı bir rehber.',
    category: 'Yatırım',
    readTime: '8',
    slug: 'yatirim-yapmaya-baslamak',
    imageUrl: '/images/articles/investment.jpg',
  },
  {
    title: 'Kripto Para Dünyası',
    description: 'Kripto para ve blockchain teknolojisi hakkında temel bilgiler. Güvenli yatırım stratejileri ve risk yönetimi.',
    category: 'Kripto Para',
    readTime: '10',
    slug: 'kripto-para-dunyasi',
    imageUrl: '/images/articles/crypto.jpg',
  },
];

const ArticlesPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-4">Makaleler ve Bilgiler</h1>
          <p className="text-base sm:text-lg text-finanqa-green-1/80 max-w-2xl mx-auto">
            Finans dünyası hakkında kapsamlı ve güncel makaleler. Kişisel finans, yatırım ve bütçe yönetimi konularında uzman içerikler.
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <select className="rounded-xl border border-gray-200 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-finanqa-green-1 focus:border-transparent">
              <option value="">Tüm Kategoriler</option>
              <option value="butce">Bütçe Yönetimi</option>
              <option value="yatirim">Yatırım</option>
              <option value="kripto">Kripto Para</option>
              <option value="tasarruf">Tasarruf</option>
            </select>
            <input
              type="search"
              placeholder="Makale ara..."
              className="rounded-xl border border-gray-200 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-finanqa-green-1 focus:border-transparent w-full sm:w-64"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Toplam {sampleArticles.length} makale</span>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleArticles.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage; 
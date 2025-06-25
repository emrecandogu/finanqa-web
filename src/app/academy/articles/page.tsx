'use client';

import React from 'react';
import { Metadata } from 'next';
import { useArticleFilters } from './hooks/useArticleFilters';
import { ArticleFilters } from './components/ArticleFilters';
import { ArticleCard } from './components/ArticleCard';
import { Pagination } from './components/Pagination';
import { BookOpen, TrendingUp, Users, Award } from 'lucide-react';

// Metadata export'u client component'te çalışmaz, bu yüzden kaldırıyoruz
// Bunun yerine layout.tsx'te tanımlanmalı

const ArticlesPage = () => {
  const filters = useArticleFilters();

  const {
    filteredArticles,
    totalCount,
    currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage,
    setCurrentPage,
    isLoading
  } = filters;

  return (
    <div className="min-h-screen pt-16 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Finansal Eğitim Makaleleri
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Finans dünyası hakkında kapsamlı ve güncel makaleler. Kişisel finans, yatırım, 
            kripto para ve daha fazlası hakkında uzman içerikler.
          </p>
          
          {/* İstatistik Kartları */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Makale</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">6</div>
              <div className="text-sm text-gray-600">Kategori</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mx-auto mb-3">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-600">Uzman Yazar</div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mx-auto mb-3">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">4.8</div>
              <div className="text-sm text-gray-600">Ortalama Puan</div>
            </div>
          </div>
        </div>

        {/* Filtreleme Sistemi */}
        <ArticleFilters filters={filters} />

        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-500"></div>
            <span className="ml-3 text-gray-600">Makaleler yükleniyor...</span>
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100 mb-8">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Makale bulunamadı
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Arama kriterlerinize uygun makale bulunamadı. Filtreleri değiştirmeyi deneyin.
            </p>
            <button
              onClick={filters.clearFilters}
              className="bg-emerald-500 text-white px-8 py-3 rounded-xl hover:bg-emerald-600 transition-colors font-medium"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}

        {/* Articles Grid */}
        {!isLoading && filteredArticles.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredArticles.map((article) => (
                <ArticleCard 
                  key={article.id} 
                  article={article}
                  variant="default"
                  showAuthor={true}
                  showStats={true}
                  showInteractions={true}
                />
              ))}
            </div>

            {/* Sayfalama */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              showInfo={true}
              totalItems={totalCount}
              itemsPerPage={9}
            />
          </>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Finansal Bilginizi Artırın
          </h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Düzenli olarak yeni makaleler ekliyoruz. Finansal okuryazarlığınızı artırmak için 
            quiz'lerimizi de deneyebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/academy/quizzes"
              className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Quiz'leri Deneyin
            </a>
            <a
              href="/academy/articles/favorites"
              className="bg-emerald-400 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-300 transition-colors"
            >
              Favorilerim
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage; 
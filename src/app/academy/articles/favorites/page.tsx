'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, BookOpen, ArrowLeft } from 'lucide-react';
import { useUserInteractions } from '../hooks/useUserInteractions';
import { articles } from '../data/mockData';
import { ArticleCard } from '../components/ArticleCard';

export default function FavoritesPage() {
  const { getFavoritedArticles, getBookmarkedArticles } = useUserInteractions();
  
  const favoritedIds = getFavoritedArticles();
  const bookmarkedIds = getBookmarkedArticles();
  
  const favoritedArticles = articles.filter(article => favoritedIds.includes(article.id));
  const bookmarkedArticles = articles.filter(article => bookmarkedIds.includes(article.id));

  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/academy/articles"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Makalelere Dön
          </Link>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Favorilerim
          </h1>
          <p className="text-gray-600">
            Beğendiğiniz ve kaydettiğiniz makaleler burada görünür.
          </p>
        </div>

        {/* Favorited Articles */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-red-500" />
            <h2 className="text-xl font-semibold text-gray-900">
              Beğenilen Makaleler ({favoritedArticles.length})
            </h2>
          </div>
          
          {favoritedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoritedArticles.map(article => (
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
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
              <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Henüz beğenilen makale yok
              </h3>
              <p className="text-gray-600 mb-4">
                Makaleleri beğenerek burada görüntüleyebilirsiniz.
              </p>
              <Link
                href="/academy/articles"
                className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Makaleleri Keşfet
              </Link>
            </div>
          )}
        </section>

        {/* Bookmarked Articles */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-semibold text-gray-900">
              Kaydedilen Makaleler ({bookmarkedArticles.length})
            </h2>
          </div>
          
          {bookmarkedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookmarkedArticles.map(article => (
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
          ) : (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Henüz kaydedilen makale yok
              </h3>
              <p className="text-gray-600 mb-4">
                Makaleleri kaydederek daha sonra okumak üzere burada saklayabilirsiniz.
              </p>
              <Link
                href="/academy/articles"
                className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Makaleleri Keşfet
              </Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
} 
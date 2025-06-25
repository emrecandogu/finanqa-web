'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Heart, 
  Bookmark, 
  Share2, 
  Eye, 
  Clock, 
  Star,
  User,
  Calendar,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { Article } from '../data/articleTypes';
import { useUserInteractions } from '../hooks/useUserInteractions';
import { ArticleIcon } from './ArticleIcons';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
  showAuthor?: boolean;
  showStats?: boolean;
  showInteractions?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  variant = 'default',
  showAuthor = true,
  showStats = true,
  showInteractions = true
}) => {
  const {
    isLiked,
    isFavorited,
    isBookmarked,
    toggleLike,
    toggleFavorite,
    toggleBookmark,
    getReadProgress
  } = useUserInteractions();

  const readProgress = getReadProgress(article.id);
  const isRead = readProgress > 80;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: `/academy/articles/${article.slug}`
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/academy/articles/${article.slug}`);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Başlangıç';
      case 'intermediate':
        return 'Orta';
      case 'advanced':
        return 'İleri';
      default:
        return 'Bilinmiyor';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-200 overflow-hidden">
        <div className="flex">
          <div className="relative w-24 h-24 flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
              <ArticleIcon category={article.category?.slug || 'default'} className="w-12 h-12" />
            </div>
            {isRead && (
              <div className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full"></div>
            )}
          </div>
          
          <div className="flex-1 p-4">
            <Link href={`/academy/articles/${article.slug}`}>
              <h3 className="font-semibold text-gray-900 hover:text-emerald-600 transition-colors line-clamp-2 mb-1">
                {article.title}
              </h3>
            </Link>
            
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.stats.readTime} dk
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {article.stats.views}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
        <div className="relative h-64">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <ArticleIcon category={article.category?.slug || 'default'} className="w-32 h-32 opacity-20" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {article.isPremium && (
            <div className="absolute top-4 left-4">
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Premium
              </span>
            </div>
          )}
          
          {readProgress > 0 && (
            <div className="absolute top-4 right-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                <div className="relative w-8 h-8">
                  <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      className="text-gray-200"
                    />
                    <circle
                      cx="16"
                      cy="16"
                      r="14"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray={`${readProgress * 0.88} 88`}
                      className="text-emerald-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-700">
                      {Math.round(readProgress)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span 
              className="px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: article.category?.color || '#10b981' }}
            >
              {article.category?.name || 'Kategori'}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(article.difficulty)}`}>
              {getDifficultyLabel(article.difficulty)}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <Link href={`/academy/articles/${article.slug}`}>
            <h2 className="text-xl font-bold text-gray-900 hover:text-emerald-600 transition-colors mb-3 line-clamp-2">
              {article.title}
            </h2>
          </Link>
          
          <p className="text-gray-600 mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          
          {showAuthor && (
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">{article.author.name}</p>
                <p className="text-sm text-gray-500">{article.author.title}</p>
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(article.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.stats.readTime} dk
              </span>
            </div>
            
            {showInteractions && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleLike(article.id)}
                  className={`p-2 rounded-full transition-colors ${
                    isLiked(article.id)
                      ? 'text-red-500 bg-red-50 hover:bg-red-100'
                      : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked(article.id) ? 'fill-current' : ''}`} />
                </button>
                
                <button
                  onClick={() => toggleBookmark(article.id)}
                  className={`p-2 rounded-full transition-colors ${
                    isBookmarked(article.id)
                      ? 'text-blue-500 bg-blue-50 hover:bg-blue-100'
                      : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50'
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isBookmarked(article.id) ? 'fill-current' : ''}`} />
                </button>
                
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 group">
      <div className="relative h-48">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <ArticleIcon category={article.category?.slug || 'default'} className="w-24 h-24 opacity-30 group-hover:opacity-40 transition-opacity duration-300" />
        </div>
        
        {article.isPremium && (
          <div className="absolute top-3 left-3">
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Premium
            </span>
          </div>
        )}
        
        {isRead && (
          <div className="absolute top-3 right-3">
            <div className="bg-emerald-500 text-white rounded-full p-1">
              <Eye className="w-4 h-4" />
            </div>
          </div>
        )}
        
        <div className="absolute bottom-3 left-3">
          <span 
            className="px-2 py-1 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: article.category?.color || '#10b981' }}
          >
            {article.category?.name || 'Kategori'}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(article.difficulty)}`}>
            {getDifficultyLabel(article.difficulty)}
          </span>
          
          {showStats && (
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {article.stats.views}
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                {article.stats.likes}
              </span>
            </div>
          )}
        </div>
        
        <Link href={`/academy/articles/${article.slug}`}>
          <h3 className="font-semibold text-gray-900 hover:text-emerald-600 transition-colors mb-2 line-clamp-2">
            {article.title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        
        {showAuthor && (
          <div className="flex items-center gap-2 mb-3">
            <div className="relative w-6 h-6">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <span className="text-xs text-gray-500">{article.author.name}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {article.stats.readTime} dk
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              {article.stats.avgRating}
            </span>
          </div>
          
          {showInteractions && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => toggleLike(article.id)}
                className={`p-1 rounded-full transition-colors ${
                  isLiked(article.id)
                    ? 'text-red-500 bg-red-50'
                    : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                }`}
              >
                <Heart className={`w-4 h-4 ${isLiked(article.id) ? 'fill-current' : ''}`} />
              </button>
              
              <button
                onClick={() => toggleBookmark(article.id)}
                className={`p-1 rounded-full transition-colors ${
                  isBookmarked(article.id)
                    ? 'text-blue-500 bg-blue-50'
                    : 'text-gray-400 hover:text-blue-500 hover:bg-blue-50'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked(article.id) ? 'fill-current' : ''}`} />
              </button>
              
              <button
                onClick={handleShare}
                className="p-1 rounded-full text-gray-400 hover:text-emerald-500 hover:bg-emerald-50 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 
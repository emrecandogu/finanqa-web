'use client';

import React, { useEffect, useState, useRef } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, 
  Bookmark, 
  Share2, 
  Eye, 
  Clock, 
  Calendar,
  User,
  ArrowLeft,
  Star,
  MessageCircle,
  ThumbsUp,
  ChevronRight
} from 'lucide-react';
import { getArticleBySlug, getRelatedArticles } from '../data/mockData';
import { useUserInteractions } from '../hooks/useUserInteractions';
import { ArticleCard } from '../components/ArticleCard';
import { ArticleIcon } from '../components/ArticleIcons';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  const [readProgress, setReadProgress] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const {
    isLiked,
    isFavorited,
    isBookmarked,
    toggleLike,
    toggleFavorite,
    toggleBookmark,
    updateReadProgress,
    rateArticle,
    getReadProgress
  } = useUserInteractions();

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, 3);
  const currentProgress = getReadProgress(article.id);

  // Okuma ilerlemesi takibi
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const element = contentRef.current;
      const scrollTop = window.scrollY;
      const elementTop = element.offsetTop;
      const elementHeight = element.scrollHeight;
      const windowHeight = window.innerHeight;

      if (scrollTop > elementTop - windowHeight / 2) {
        setIsReading(true);
        
        const scrolled = scrollTop - elementTop + windowHeight;
        const progress = Math.min(100, Math.max(0, (scrolled / elementHeight) * 100));
        
        setReadProgress(progress);
        
        // Her %10'da bir güncelle
        if (Math.floor(progress / 10) > Math.floor(currentProgress / 10)) {
          updateReadProgress(article.id, progress);
        }
      } else {
        setIsReading(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id, currentProgress, updateReadProgress]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: window.location.href
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      // TODO: Show toast notification
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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

  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      {/* Progress Bar */}
      {isReading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div 
            className="h-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${readProgress}%` }}
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/academy/articles" className="hover:text-emerald-600 transition-colors">
            Makaleler
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span 
            className="px-2 py-1 rounded text-xs font-medium"
            style={{ backgroundColor: article.category?.color || '#10b981', color: 'white' }}
          >
            {article.category?.name || 'Kategori'}
          </span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium truncate">{article.title}</span>
        </nav>

        {/* Back Button */}
        <Link 
          href="/academy/articles"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Makalelere Dön
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(article.difficulty)}`}>
              {getDifficultyLabel(article.difficulty)}
            </span>
            {article.isPremium && (
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Premium
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {article.title}
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            {article.excerpt}
          </p>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-medium text-gray-900">{article.author.name}</span>
                <span className="text-gray-500"> • {article.author.title}</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(article.publishedAt)}
            </div>

            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.stats.readTime} dk okuma
            </div>

            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {article.stats.views} görüntülenme
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleLike(article.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isLiked(article.id)
                  ? 'bg-red-50 text-red-600 hover:bg-red-100'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked(article.id) ? 'fill-current' : ''}`} />
              <span>{article.stats.likes}</span>
            </button>

            <button
              onClick={() => toggleBookmark(article.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                isBookmarked(article.id)
                  ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Bookmark className={`w-5 h-5 ${isBookmarked(article.id) ? 'fill-current' : ''}`} />
              Kaydet
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <Share2 className="w-5 h-5" />
              Paylaş
            </button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <ArticleIcon category={article.category?.slug || 'default'} className="w-48 h-48 opacity-30" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold text-gray-800">{article.category?.name || 'Kategori'}</h2>
          </div>
        </div>

        {/* Article Content */}
        <article 
          ref={contentRef}
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br>') }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags && article.tags.filter(tag => tag).map(tag => (
            <Link
              key={tag.id}
              href={`/academy/articles?tag=${tag.slug}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              #{tag.name}
            </Link>
          ))}
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-xl p-6 mb-12 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {article.author.name}
              </h3>
              <p className="text-emerald-600 text-sm mb-2">
                {article.author.title}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                {article.author.bio}
              </p>
              {article.author.socialLinks && (
                <div className="flex items-center gap-3">
                  {article.author.socialLinks.linkedin && (
                    <a
                      href={article.author.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      LinkedIn
                    </a>
                  )}
                  {article.author.socialLinks.twitter && (
                    <a
                      href={article.author.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-500 text-sm"
                    >
                      Twitter
                    </a>
                  )}
                  {article.author.socialLinks.website && (
                    <a
                      href={article.author.socialLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-700 text-sm"
                    >
                      Website
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              İlgili Makaleler
            </h2>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {relatedArticles.map((relatedArticle) => (
                 <ArticleCard
                   key={relatedArticle.id}
                   article={relatedArticle}
                   variant="compact"
                   showAuthor={false}
                   showStats={true}
                   showInteractions={false}
                 />
               ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            Finansal Bilginizi Test Edin
          </h2>
          <p className="text-emerald-100 mb-6">
            Bu makaleyi okuduktan sonra bilginizi quiz'lerimizle test edebilirsiniz.
          </p>
          <Link
            href="/academy/quizzes"
            className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-block"
          >
            Quiz'leri Deneyin
          </Link>
        </div>
      </div>
    </div>
  );
} 
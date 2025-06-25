// Makale veri tipleri - Kullanıcı sistemi ile uyumlu
export interface Author {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface ArticleCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
}

export interface ArticleTag {
  id: string;
  name: string;
  slug: string;
}

export interface ArticleMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface ArticleStats {
  views: number;
  likes: number;
  shares: number;
  comments: number;
  readTime: number; // dakika cinsinden
  avgRating?: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: Author;
  category: ArticleCategory;
  tags: ArticleTag[];
  metadata: ArticleMetadata;
  stats: ArticleStats;
  status: 'draft' | 'published' | 'archived';
  publishedAt: string;
  updatedAt: string;
  createdAt: string;
  // Kullanıcı etkileşimi için (gelecekte)
  isFeatured: boolean;
  isPremium: boolean;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

// Kullanıcı etkileşim tipleri (gelecekte kullanılacak)
export interface UserArticleInteraction {
  userId: string;
  articleId: string;
  isLiked: boolean;
  isFavorited: boolean;
  isBookmarked: boolean;
  readProgress: number; // 0-100 arası
  readAt?: string;
  rating?: number; // 1-5 arası
}

export interface ArticleComment {
  id: string;
  articleId: string;
  userId: string;
  content: string;
  parentId?: string; // Yanıt için
  likes: number;
  createdAt: string;
  updatedAt: string;
}

// Filtreleme ve arama için
export interface ArticleFilters {
  category?: string;
  tags?: string[];
  author?: string;
  difficulty?: string;
  dateRange?: {
    start: string;
    end: string;
  };
  isPremium?: boolean;
  minReadTime?: number;
  maxReadTime?: number;
}

export interface ArticleSearchParams {
  query?: string;
  filters?: ArticleFilters;
  sortBy?: 'publishedAt' | 'views' | 'likes' | 'title' | 'readTime';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface ArticleListResponse {
  articles: Article[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
} 
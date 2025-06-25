'use client';

import { useState, useMemo, useCallback } from 'react';
import { Article, ArticleFilters, ArticleSearchParams } from '../data/articleTypes';
import { articles, categories, tags } from '../data/mockData';

export interface UseArticleFiltersReturn {
  // Veriler
  filteredArticles: Article[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  
  // Filtreleme durumu
  searchQuery: string;
  selectedCategory: string;
  selectedTags: string[];
  selectedDifficulty: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  
  // Filtreleme fonksiyonları
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedTags: (tags: string[]) => void;
  setSelectedDifficulty: (difficulty: string) => void;
  setSortBy: (sortBy: string) => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  setCurrentPage: (page: number) => void;
  clearFilters: () => void;
  
  // Yardımcı veriler
  availableCategories: typeof categories;
  availableTags: typeof tags;
  isLoading: boolean;
}

const ITEMS_PER_PAGE = 9;

export const useArticleFilters = (): UseArticleFiltersReturn => {
  // Filtreleme durumu
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [sortBy, setSortBy] = useState('publishedAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Filtrelenmiş makaleler
  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    // Sadece yayınlanmış makaleleri göster
    filtered = filtered.filter(article => article.status === 'published');

    // Arama sorgusu filtresi
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query) ||
        (article.author && article.author.name && article.author.name.toLowerCase().includes(query)) ||
        (article.category && article.category.name && article.category.name.toLowerCase().includes(query)) ||
        (article.tags && article.tags.some(tag => tag && tag.name && tag.name.toLowerCase().includes(query)))
      );
    }

    // Kategori filtresi
    if (selectedCategory) {
      filtered = filtered.filter(article => article.category && article.category.slug === selectedCategory);
    }

    // Etiket filtresi
    if (selectedTags.length > 0) {
      filtered = filtered.filter(article =>
        selectedTags.some(tagSlug =>
          article.tags && article.tags.some(tag => tag && tag.slug === tagSlug)
        )
      );
    }

    // Zorluk seviyesi filtresi
    if (selectedDifficulty) {
      filtered = filtered.filter(article => article.difficulty === selectedDifficulty);
    }

    // Sıralama
    filtered.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortBy) {
        case 'publishedAt':
          aValue = new Date(a.publishedAt).getTime();
          bValue = new Date(b.publishedAt).getTime();
          break;
        case 'views':
          aValue = a.stats.views;
          bValue = b.stats.views;
          break;
        case 'likes':
          aValue = a.stats.likes;
          bValue = b.stats.likes;
          break;
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'readTime':
          aValue = a.stats.readTime;
          bValue = b.stats.readTime;
          break;
        case 'rating':
          aValue = a.stats.avgRating || 0;
          bValue = b.stats.avgRating || 0;
          break;
        default:
          aValue = new Date(a.publishedAt).getTime();
          bValue = new Date(b.publishedAt).getTime();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedTags, selectedDifficulty, sortBy, sortOrder]);

  // Sayfalama hesaplamaları
  const totalCount = filteredArticles.length;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  // Filtreleri temizle
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedTags([]);
    setSelectedDifficulty('');
    setSortBy('publishedAt');
    setSortOrder('desc');
    setCurrentPage(1);
  }, []);

  // Sayfa değiştiğinde en üste scroll
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return {
    // Veriler
    filteredArticles: paginatedArticles,
    totalCount,
    currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage,
    
    // Filtreleme durumu
    searchQuery,
    selectedCategory,
    selectedTags,
    selectedDifficulty,
    sortBy,
    sortOrder,
    
    // Filtreleme fonksiyonları
    setSearchQuery,
    setSelectedCategory,
    setSelectedTags,
    setSelectedDifficulty,
    setSortBy,
    setSortOrder,
    setCurrentPage: handlePageChange,
    clearFilters,
    
    // Yardımcı veriler
    availableCategories: categories,
    availableTags: tags,
    isLoading
  };
}; 
'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { DictionaryTerm, DictionarySearchFilters } from '../data/types';
import { dictionaryTerms } from '../data/terms';
import { dictionaryCategories } from '../data/categories';

const ITEMS_PER_PAGE = 12;
const ALPHABET = 'ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ'.split('');

export interface UseDictionaryFiltersReturn {
  // Data
  filteredTerms: DictionaryTerm[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  
  // Filter state
  searchQuery: string;
  selectedLetter: string;
  selectedCategory: string;
  selectedDifficulty: string;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  
  // Filter functions
  setSearchQuery: (query: string) => void;
  setSelectedLetter: (letter: string) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedDifficulty: (difficulty: string) => void;
  setSortBy: (sortBy: string) => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  setCurrentPage: (page: number) => void;
  clearFilters: () => void;
  
  // Helper data
  availableCategories: typeof dictionaryCategories;
  alphabet: string[];
  isLoading: boolean;
}

// Aranan kısmı vurgulayan yardımcı fonksiyon
export function highlightMatch(text: string, query: string): React.ReactNode {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part)
      ? React.createElement('span', { 
          key: i, 
          className: "bg-yellow-100 text-emerald-600 rounded px-1 py-0.5 font-medium" 
        }, part)
      : part
  );
}

export const useDictionaryFilters = (): UseDictionaryFiltersReturn => {
  // Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [sortBy, setSortBy] = useState('alphabetical');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Filtered terms
  const filteredTerms = useMemo(() => {
    let filtered = [...dictionaryTerms];

    // Search query filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(term =>
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        (term.detailedDefinition && term.detailedDefinition.toLowerCase().includes(query)) ||
        (term.synonyms && term.synonyms.some(synonym => synonym.toLowerCase().includes(query))) ||
        (term.tags && term.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }

    // Letter filter
    if (selectedLetter) {
      filtered = filtered.filter(term => 
        term.term.toUpperCase().startsWith(selectedLetter)
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(term => term.category === selectedCategory);
    }

    // Difficulty filter
    if (selectedDifficulty) {
      filtered = filtered.filter(term => term.difficulty === selectedDifficulty);
    }

    // Sorting
    filtered.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortBy) {
        case 'alphabetical':
          aValue = a.term.toLowerCase();
          bValue = b.term.toLowerCase();
          break;
        case 'popularity':
          aValue = a.popularity || 0;
          bValue = b.popularity || 0;
          break;
        case 'views':
          aValue = a.views || 0;
          bValue = b.views || 0;
          break;
        case 'recent':
          aValue = new Date(a.updatedAt).getTime();
          bValue = new Date(b.updatedAt).getTime();
          break;
        default:
          aValue = a.term.toLowerCase();
          bValue = b.term.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    return filtered;
  }, [searchQuery, selectedLetter, selectedCategory, selectedDifficulty, sortBy, sortOrder]);

  // Pagination calculations
  const totalCount = filteredTerms.length;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedTerms = filteredTerms.slice(startIndex, endIndex);
  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  // Clear filters
  const clearFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedLetter('');
    setSelectedCategory('');
    setSelectedDifficulty('');
    setSortBy('alphabetical');
    setSortOrder('asc');
    setCurrentPage(1);
  }, []);

  // Page change handler
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return {
    // Data
    filteredTerms: paginatedTerms,
    totalCount,
    currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage,
    
    // Filter state
    searchQuery,
    selectedLetter,
    selectedCategory,
    selectedDifficulty,
    sortBy,
    sortOrder,
    
    // Filter functions
    setSearchQuery,
    setSelectedLetter,
    setSelectedCategory,
    setSelectedDifficulty,
    setSortBy,
    setSortOrder,
    setCurrentPage: handlePageChange,
    clearFilters,
    
    // Helper data
    availableCategories: dictionaryCategories,
    alphabet: ALPHABET,
    isLoading
  };
}; 
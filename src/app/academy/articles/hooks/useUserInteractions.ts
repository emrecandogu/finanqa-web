'use client';

import { useState, useCallback, useEffect } from 'react';
import { UserArticleInteraction } from '../data/articleTypes';

// Şimdilik localStorage kullanıyoruz, gelecekte API ile değiştirilecek
const STORAGE_KEY = 'finanqa_user_interactions';

export interface UseUserInteractionsReturn {
  // Etkileşim durumları
  isLiked: (articleId: string) => boolean;
  isFavorited: (articleId: string) => boolean;
  isBookmarked: (articleId: string) => boolean;
  getReadProgress: (articleId: string) => number;
  
  // Etkileşim fonksiyonları
  toggleLike: (articleId: string) => void;
  toggleFavorite: (articleId: string) => void;
  toggleBookmark: (articleId: string) => void;
  updateReadProgress: (articleId: string, progress: number) => void;
  rateArticle: (articleId: string, rating: number) => void;
  
  // İstatistikler
  getLikedArticles: () => string[];
  getFavoritedArticles: () => string[];
  getBookmarkedArticles: () => string[];
  getReadArticles: () => string[];
  
  // Kullanıcı girişi durumu (gelecekte)
  isLoggedIn: boolean;
  userId: string | null;
}

// Geçici kullanıcı ID'si (gelecekte gerçek kullanıcı sistemi ile değiştirilecek)
const TEMP_USER_ID = 'temp-user-001';

export const useUserInteractions = (): UseUserInteractionsReturn => {
  const [interactions, setInteractions] = useState<Record<string, UserArticleInteraction>>({});
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Gelecekte gerçek auth durumu
  const [userId, setUserId] = useState<string | null>(null);

  // LocalStorage'dan etkileşimleri yükle
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsedInteractions = JSON.parse(stored);
        setInteractions(parsedInteractions);
      }
      
      // Geçici olarak kullanıcı giriş yapmış gibi davran
      setIsLoggedIn(true);
      setUserId(TEMP_USER_ID);
    } catch (error) {
      console.error('Error loading user interactions:', error);
    }
  }, []);

  // Etkileşimleri localStorage'a kaydet
  const saveInteractions = useCallback((newInteractions: Record<string, UserArticleInteraction>) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newInteractions));
      setInteractions(newInteractions);
    } catch (error) {
      console.error('Error saving user interactions:', error);
    }
  }, []);

  // Etkileşim durumlarını kontrol et
  const isLiked = useCallback((articleId: string): boolean => {
    return interactions[articleId]?.isLiked || false;
  }, [interactions]);

  const isFavorited = useCallback((articleId: string): boolean => {
    return interactions[articleId]?.isFavorited || false;
  }, [interactions]);

  const isBookmarked = useCallback((articleId: string): boolean => {
    return interactions[articleId]?.isBookmarked || false;
  }, [interactions]);

  const getReadProgress = useCallback((articleId: string): number => {
    return interactions[articleId]?.readProgress || 0;
  }, [interactions]);

  // Beğeni toggle
  const toggleLike = useCallback((articleId: string) => {
    if (!isLoggedIn) {
      // Gelecekte login modal açılacak
      console.log('Login required for liking articles');
      return;
    }

    const currentInteraction = interactions[articleId] || {
      userId: userId!,
      articleId,
      isLiked: false,
      isFavorited: false,
      isBookmarked: false,
      readProgress: 0
    };

    const newInteractions = {
      ...interactions,
      [articleId]: {
        ...currentInteraction,
        isLiked: !currentInteraction.isLiked
      }
    };

    saveInteractions(newInteractions);
  }, [interactions, isLoggedIn, userId, saveInteractions]);

  // Favori toggle
  const toggleFavorite = useCallback((articleId: string) => {
    if (!isLoggedIn) {
      console.log('Login required for favoriting articles');
      return;
    }

    const currentInteraction = interactions[articleId] || {
      userId: userId!,
      articleId,
      isLiked: false,
      isFavorited: false,
      isBookmarked: false,
      readProgress: 0
    };

    const newInteractions = {
      ...interactions,
      [articleId]: {
        ...currentInteraction,
        isFavorited: !currentInteraction.isFavorited
      }
    };

    saveInteractions(newInteractions);
  }, [interactions, isLoggedIn, userId, saveInteractions]);

  // Bookmark toggle
  const toggleBookmark = useCallback((articleId: string) => {
    if (!isLoggedIn) {
      console.log('Login required for bookmarking articles');
      return;
    }

    const currentInteraction = interactions[articleId] || {
      userId: userId!,
      articleId,
      isLiked: false,
      isFavorited: false,
      isBookmarked: false,
      readProgress: 0
    };

    const newInteractions = {
      ...interactions,
      [articleId]: {
        ...currentInteraction,
        isBookmarked: !currentInteraction.isBookmarked
      }
    };

    saveInteractions(newInteractions);
  }, [interactions, isLoggedIn, userId, saveInteractions]);

  // Okuma ilerlemesini güncelle
  const updateReadProgress = useCallback((articleId: string, progress: number) => {
    if (!isLoggedIn) return;

    const currentInteraction = interactions[articleId] || {
      userId: userId!,
      articleId,
      isLiked: false,
      isFavorited: false,
      isBookmarked: false,
      readProgress: 0
    };

    const newInteractions = {
      ...interactions,
      [articleId]: {
        ...currentInteraction,
        readProgress: Math.max(currentInteraction.readProgress, progress),
        readAt: new Date().toISOString()
      }
    };

    saveInteractions(newInteractions);
  }, [interactions, isLoggedIn, userId, saveInteractions]);

  // Makale puanlama
  const rateArticle = useCallback((articleId: string, rating: number) => {
    if (!isLoggedIn) {
      console.log('Login required for rating articles');
      return;
    }

    const currentInteraction = interactions[articleId] || {
      userId: userId!,
      articleId,
      isLiked: false,
      isFavorited: false,
      isBookmarked: false,
      readProgress: 0
    };

    const newInteractions = {
      ...interactions,
      [articleId]: {
        ...currentInteraction,
        rating: Math.max(1, Math.min(5, rating)) // 1-5 arası sınırla
      }
    };

    saveInteractions(newInteractions);
  }, [interactions, isLoggedIn, userId, saveInteractions]);

  // İstatistik fonksiyonları
  const getLikedArticles = useCallback((): string[] => {
    return Object.values(interactions)
      .filter(interaction => interaction.isLiked)
      .map(interaction => interaction.articleId);
  }, [interactions]);

  const getFavoritedArticles = useCallback((): string[] => {
    return Object.values(interactions)
      .filter(interaction => interaction.isFavorited)
      .map(interaction => interaction.articleId);
  }, [interactions]);

  const getBookmarkedArticles = useCallback((): string[] => {
    return Object.values(interactions)
      .filter(interaction => interaction.isBookmarked)
      .map(interaction => interaction.articleId);
  }, [interactions]);

  const getReadArticles = useCallback((): string[] => {
    return Object.values(interactions)
      .filter(interaction => interaction.readProgress > 80) // %80'den fazla okunanlar
      .map(interaction => interaction.articleId);
  }, [interactions]);

  return {
    // Etkileşim durumları
    isLiked,
    isFavorited,
    isBookmarked,
    getReadProgress,
    
    // Etkileşim fonksiyonları
    toggleLike,
    toggleFavorite,
    toggleBookmark,
    updateReadProgress,
    rateArticle,
    
    // İstatistikler
    getLikedArticles,
    getFavoritedArticles,
    getBookmarkedArticles,
    getReadArticles,
    
    // Kullanıcı girişi durumu
    isLoggedIn,
    userId
  };
}; 
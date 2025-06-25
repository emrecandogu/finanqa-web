import { DictionaryTerm, DictionaryStats } from '../data/types';
import { dictionaryTerms } from '../data/terms';
import { dictionaryCategories } from '../data/categories';

// Slug oluşturma fonksiyonu
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Slug'dan terimi bulma
export function findTermBySlug(slug: string): DictionaryTerm | undefined {
  return dictionaryTerms.find(term => createSlug(term.term) === slug);
}

// İlişkili terimleri getirme
export function getRelatedTerms(term: DictionaryTerm, limit: number = 5): DictionaryTerm[] {
  if (!term.relatedTerms) return [];
  
  const related = dictionaryTerms.filter(t => 
    term.relatedTerms?.includes(t.term) && t.id !== term.id
  );
  
  // Eğer yeterli ilişkili terim yoksa, aynı kategoriden öneriler ekle
  if (related.length < limit) {
    const sameCategory = dictionaryTerms.filter(t => 
      t.category === term.category && 
      t.id !== term.id &&
      !related.some(r => r.id === t.id)
    );
    
    related.push(...sameCategory.slice(0, limit - related.length));
  }
  
  return related.slice(0, limit);
}

// Aynı kategoriden öneriler
export function getSameCategoryTerms(term: DictionaryTerm, limit: number = 3): DictionaryTerm[] {
  return dictionaryTerms
    .filter(t => t.category === term.category && t.id !== term.id)
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
    .slice(0, limit);
}

// Dictionary istatistikleri
export function getDictionaryStats(): DictionaryStats {
  const totalTerms = dictionaryTerms.length;
  const totalCategories = dictionaryCategories.length;
  const totalViews = dictionaryTerms.reduce((sum, term) => sum + (term.views || 0), 0);
  const mostPopularTerm = dictionaryTerms
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))[0]?.term || '';

  return {
    totalTerms,
    totalCategories,
    totalViews,
    mostPopularTerm
  };
}

// Kategori bilgileri
export function getCategoryInfo(categoryName: string) {
  return dictionaryCategories.find(cat => cat.name === categoryName);
}

// Terimi favorilere ekleme/çıkarma (localStorage)
export function toggleFavorite(termId: string): boolean {
  if (typeof window === 'undefined') return false;
  
  const favorites = getFavorites();
  const index = favorites.indexOf(termId);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(termId);
  }
  
  localStorage.setItem('dictionary_favorites', JSON.stringify(favorites));
  return index === -1; // true if added, false if removed
}

// Favorileri getirme
export function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const favorites = localStorage.getItem('dictionary_favorites');
    return favorites ? JSON.parse(favorites) : [];
  } catch {
    return [];
  }
}

// Favori kontrol etme
export function isFavorite(termId: string): boolean {
  return getFavorites().includes(termId);
}

// Terimi görüntülendi olarak işaretle
export function markAsViewed(termId: string): void {
  if (typeof window === 'undefined') return;
  
  const viewed = getViewedTerms();
  if (!viewed.includes(termId)) {
    viewed.push(termId);
    localStorage.setItem('dictionary_viewed', JSON.stringify(viewed));
  }
}

// Görüntülenen terimleri getirme
export function getViewedTerms(): string[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const viewed = localStorage.getItem('dictionary_viewed');
    return viewed ? JSON.parse(viewed) : [];
  } catch {
    return [];
  }
}

// Arama önerilerini getirme
export function getSearchSuggestions(query: string, limit: number = 5): string[] {
  if (!query || query.length < 2) return [];
  
  const lowerQuery = query.toLowerCase();
  const suggestions = new Set<string>();
  
  // Terim adlarından öneriler
  dictionaryTerms.forEach(term => {
    if (term.term.toLowerCase().includes(lowerQuery)) {
      suggestions.add(term.term);
    }
    
    // Sinonimlerden öneriler
    term.synonyms?.forEach(synonym => {
      if (synonym.toLowerCase().includes(lowerQuery)) {
        suggestions.add(synonym);
      }
    });
    
    // Etiketlerden öneriler
    term.tags?.forEach(tag => {
      if (tag.toLowerCase().includes(lowerQuery)) {
        suggestions.add(tag);
      }
    });
  });
  
  return Array.from(suggestions).slice(0, limit);
}

// Zorluk derecesi rengi
export function getDifficultyColor(difficulty: string): string {
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
}

// Zorluk derecesi metni
export function getDifficultyText(difficulty: string): string {
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
}

// Tarih formatları
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Göreli zaman
export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'Az önce';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} dakika önce`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} saat önce`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} gün önce`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} ay önce`;
  return `${Math.floor(diffInSeconds / 31536000)} yıl önce`;
} 
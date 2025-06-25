export interface DictionaryTerm {
  id: string;
  term: string;
  definition: string;
  detailedDefinition?: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  examples?: string[];
  synonyms?: string[];
  relatedTerms?: string[];
  pronunciation?: string;
  etymology?: string;
  sources?: string[];
  tags?: string[];
  popularity?: number;
  views?: number;
  createdAt: string;
  updatedAt: string;
}

export interface DictionaryCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  icon: string;
  termCount?: number;
}

export interface DictionarySearchFilters {
  searchQuery: string;
  selectedLetter: string;
  selectedCategory: string;
  selectedDifficulty: string;
  sortBy: 'alphabetical' | 'popularity' | 'recent' | 'views';
  sortOrder: 'asc' | 'desc';
}

export interface DictionaryStats {
  totalTerms: number;
  totalCategories: number;
  totalViews: number;
  mostPopularTerm: string;
} 
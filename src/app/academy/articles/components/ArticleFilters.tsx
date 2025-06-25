'use client';

import React from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { UseArticleFiltersReturn } from '../hooks/useArticleFilters';

interface ArticleFiltersProps {
  filters: UseArticleFiltersReturn;
}

export const ArticleFilters: React.FC<ArticleFiltersProps> = ({ filters }) => {
  const {
    searchQuery,
    selectedCategory,
    selectedTags,
    selectedDifficulty,
    sortBy,
    sortOrder,
    setSearchQuery,
    setSelectedCategory,
    setSelectedTags,
    setSelectedDifficulty,
    setSortBy,
    setSortOrder,
    clearFilters,
    availableCategories,
    availableTags,
    totalCount
  } = filters;

  const hasActiveFilters = searchQuery || selectedCategory || selectedTags.length > 0 || selectedDifficulty;

  const handleTagToggle = (tagSlug: string) => {
    if (selectedTags.includes(tagSlug)) {
      setSelectedTags(selectedTags.filter(tag => tag !== tagSlug));
    } else {
      setSelectedTags([...selectedTags, tagSlug]);
    }
  };

  const difficultyOptions = [
    { value: '', label: 'Tüm Seviyeler' },
    { value: 'beginner', label: 'Başlangıç' },
    { value: 'intermediate', label: 'Orta' },
    { value: 'advanced', label: 'İleri' }
  ];

  const sortOptions = [
    { value: 'publishedAt', label: 'Yayın Tarihi' },
    { value: 'views', label: 'Görüntülenme' },
    { value: 'likes', label: 'Beğeni' },
    { value: 'title', label: 'Başlık' },
    { value: 'readTime', label: 'Okuma Süresi' },
    { value: 'rating', label: 'Puan' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      {/* Arama Çubuğu */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Makale ara..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Filtreler */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Kategori Filtresi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kategori
          </label>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              <option value="">Tüm Kategoriler</option>
              {availableCategories.map(category => (
                <option key={category.id} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* Zorluk Seviyesi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Seviye
          </label>
          <div className="relative">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              {difficultyOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* Sıralama */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sırala
          </label>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-3 py-2 pr-8 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        {/* Sıralama Yönü */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Yön
          </label>
          <div className="flex rounded-lg border border-gray-200 overflow-hidden">
            <button
              onClick={() => setSortOrder('desc')}
              className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
                sortOrder === 'desc'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Azalan
            </button>
            <button
              onClick={() => setSortOrder('asc')}
              className={`flex-1 px-3 py-2 text-sm font-medium transition-colors ${
                sortOrder === 'asc'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Artan
            </button>
          </div>
        </div>
      </div>

      {/* Etiket Filtresi */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Etiketler
        </label>
        <div className="flex flex-wrap gap-2">
          {availableTags.map(tag => (
            <button
              key={tag.id}
              onClick={() => handleTagToggle(tag.slug)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedTags.includes(tag.slug)
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sonuç Özeti ve Temizle Butonu */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-600">
          <span className="font-medium">{totalCount}</span> makale bulundu
        </div>
        
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
            Filtreleri Temizle
          </button>
        )}
      </div>

      {/* Aktif Filtreler */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                Arama: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery('')}
                  className="ml-1 hover:bg-emerald-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            
            {selectedCategory && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {availableCategories.find(cat => cat.slug === selectedCategory)?.name}
                <button
                  onClick={() => setSelectedCategory('')}
                  className="ml-1 hover:bg-blue-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            
            {selectedDifficulty && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                {difficultyOptions.find(opt => opt.value === selectedDifficulty)?.label}
                <button
                  onClick={() => setSelectedDifficulty('')}
                  className="ml-1 hover:bg-purple-200 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            
            {selectedTags.map(tagSlug => {
              const tag = availableTags.find(t => t.slug === tagSlug);
              return tag ? (
                <span
                  key={tagSlug}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                >
                  {tag.name}
                  <button
                    onClick={() => handleTagToggle(tagSlug)}
                    className="ml-1 hover:bg-gray-200 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ) : null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}; 
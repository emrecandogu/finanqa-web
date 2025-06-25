'use client';

import React from 'react';
import Link from 'next/link';
import { useDictionaryFilters, highlightMatch } from './hooks/useDictionaryFilters';
import { getDictionaryStats, getDifficultyColor, getDifficultyText, createSlug } from './utils';

export default function DictionaryPage() {
  const {
    filteredTerms,
    totalCount,
    currentPage,
    totalPages,
    hasNextPage,
    hasPrevPage,
    searchQuery,
    selectedLetter,
    selectedCategory,
    selectedDifficulty,
    sortBy,
    sortOrder,
    setSearchQuery,
    setSelectedLetter,
    setSelectedCategory,
    setSelectedDifficulty,
    setSortBy,
    setSortOrder,
    setCurrentPage,
    clearFilters,
    availableCategories,
    alphabet,
    isLoading
  } = useDictionaryFilters();

  const stats = getDictionaryStats();

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Finans Sözlüğü
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Finansal dünyayı anlayın. Güncel terimler, detaylı açıklamalar ve örneklerle donatılmış kapsamlı sözlüğümüzden yararlanın.
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 text-center border border-emerald-200">
            <div className="text-4xl font-bold text-emerald-600 mb-3">{stats.totalTerms}</div>
            <div className="text-emerald-700 font-medium">Toplam Terim</div>
            <div className="text-sm text-emerald-600 mt-2">Sürekli güncellenen</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center border border-blue-200">
            <div className="text-4xl font-bold text-blue-600 mb-3">{stats.totalCategories}</div>
            <div className="text-blue-700 font-medium">Kategori</div>
            <div className="text-sm text-blue-600 mt-2">Organize edilmiş</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center border border-purple-200">
            <div className="text-4xl font-bold text-purple-600 mb-3">{Math.floor(stats.totalViews / 1000)}K</div>
            <div className="text-purple-700 font-medium">Toplam Görüntüleme</div>
            <div className="text-sm text-purple-600 mt-2">Bu ay</div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center border border-orange-200">
            <div className="text-4xl font-bold text-orange-600 mb-3">En Popüler</div>
            <div className="text-orange-700 font-medium text-sm">{stats.mostPopularTerm}</div>
            <div className="text-sm text-orange-600 mt-2">Bu hafta</div>
          </div>
        </div>

        {/* Advanced Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-12">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <span className="absolute left-4 top-4 text-gray-400 text-xl">🔍</span>
              <input
                type="text"
                placeholder="Terim, tanım, kategori veya etiket ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <span className="inline mr-2">🔽</span>
                Kategori
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Tüm Kategoriler</option>
                {availableCategories.map(category => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Zorluk Seviyesi
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">Tüm Seviyeler</option>
                <option value="beginner">Başlangıç</option>
                <option value="intermediate">Orta</option>
                <option value="advanced">İleri</option>
              </select>
            </div>

            {/* Sort Options */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <span className="inline mr-2">⚙️</span>
                Sıralama
              </label>
              <div className="flex gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="alphabetical">Alfabetik</option>
                  <option value="popularity">Popülerlik</option>
                  <option value="views">Görüntülenme</option>
                  <option value="recent">Güncellik</option>
                </select>
                <button
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  className="px-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  title={sortOrder === 'asc' ? 'Artan' : 'Azalan'}
                >
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </button>
              </div>
            </div>
          </div>

          {/* Alphabet Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Harfler
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedLetter('')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedLetter === '' 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tümü
              </button>
              {alphabet.map(letter => (
                <button
                  key={letter}
                  onClick={() => setSelectedLetter(letter)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedLetter === letter 
                      ? 'bg-emerald-600 text-white shadow-sm' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          {(searchQuery || selectedCategory || selectedDifficulty || selectedLetter) && (
            <div className="mt-6 text-center">
              <button
                onClick={clearFilters}
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                Tüm filtreleri temizle
              </button>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {totalCount > 0 ? (
              <>
                <span className="text-emerald-600">{totalCount}</span> terim bulundu
              </>
            ) : (
              'Sonuç bulunamadı'
            )}
          </h2>
          
          {totalPages > 1 && (
            <div className="text-sm text-gray-600">
              Sayfa {currentPage} / {totalPages}
            </div>
          )}
        </div>

        {/* Results */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        ) : (
          <>
            {filteredTerms.length === 0 ? (
              <div className="text-center py-20">
                <span className="text-6xl text-gray-300 block mb-6">🔍</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Aradığınız kriterlere uygun terim bulunamadı
                </h3>
                <p className="text-gray-600 mb-6">
                  Farklı arama kriterlerini deneyerek sonuç bulabilirsiniz.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Filtreleri Temizle
                </button>
              </div>
            ) : (
              <>
                {/* Terms Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  {filteredTerms.map(term => (
                    <Link
                      key={term.id}
                      href={`/academy/dictionary/${createSlug(term.term)}`}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow block"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-bold text-gray-900">
                              {highlightMatch(term.term, searchQuery)}
                            </h3>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(term.difficulty)}`}>
                              {getDifficultyText(term.difficulty)}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-4">
                            {highlightMatch(term.definition, searchQuery)}
                          </p>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                              {term.category}
                            </span>
                            {term.popularity && (
                              <span className="text-sm text-gray-500">
                                Popülerlik: {term.popularity}%
                              </span>
                            )}
                          </div>
                          {term.examples && term.examples.length > 0 && (
                            <div className="mb-3">
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">Örnekler:</h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {term.examples.slice(0, 2).map((example, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <span className="w-1 h-1 bg-emerald-600 rounded-full mr-2"></span>
                                    {example}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {term.synonyms && term.synonyms.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              <span className="text-xs text-gray-500">Eş anlamlı:</span>
                              {term.synonyms.slice(0, 3).map((synonym, idx) => (
                                <span key={idx} className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                                  {synonym}
                                </span>
                              ))}
                            </div>
                                                     )}
                         </div>
                       </div>
                     </Link>
                  ))}
                </div>

                {/* Simple Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-12">
                    <button
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={!hasPrevPage}
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      Önceki
                    </button>
                    <span className="text-gray-600">
                      Sayfa {currentPage} / {totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={!hasNextPage}
                      className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                    >
                      Sonraki
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Aradığınız terimi bulamadınız mı?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Sözlüğümüzü sürekli geliştiriyoruz. Yeni terim önerilerinizi bekliyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Terim Önerin
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              İletişime Geçin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
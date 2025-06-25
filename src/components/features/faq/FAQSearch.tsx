'use client';

import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import FAQAccordion from './FAQAccordion';

interface Question {
  question: string;
  answer: string;
}

interface Category {
  id: string;
  title: string;
  questions: Question[];
}

interface FAQSearchProps {
  categories: Category[];
}

export default function FAQSearch({ categories }: FAQSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Tüm soruları tek bir listede topla
  const allQuestions = useMemo(() => {
    return categories.flatMap(category => 
      category.questions.map(q => ({
        ...q,
        categoryTitle: category.title,
        categoryId: category.id
      }))
    );
  }, [categories]);

  // Arama sonuçlarını filtrele
  const filteredQuestions = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const searchLower = searchTerm.toLowerCase();
    return allQuestions.filter(item => 
      item.question.toLowerCase().includes(searchLower) ||
      item.answer.toLowerCase().includes(searchLower)
    );
  }, [searchTerm, allQuestions]);

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="mb-8">
      {/* Search Input */}
      <div className="relative max-w-2xl mx-auto mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="SSS'de arama yapın..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-finanqa-green-1 focus:border-transparent text-base"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Search Results */}
      {searchTerm.trim() && (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-finanqa-green-1 to-finanqa-green-1/90 p-4">
            <h3 className="text-lg font-bold text-white">
              Arama Sonuçları ({filteredQuestions.length})
            </h3>
            <p className="text-white/80 text-sm">
              "{searchTerm}" için bulunan sonuçlar
            </p>
          </div>
          
          <div className="p-6">
            {filteredQuestions.length > 0 ? (
              <FAQAccordion questions={filteredQuestions} />
            ) : (
              <div className="text-center py-8">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg mb-2">Sonuç bulunamadı</p>
                <p className="text-gray-400 text-sm">
                  Farklı anahtar kelimeler deneyebilir veya kategorilere göz atabilirsiniz.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 
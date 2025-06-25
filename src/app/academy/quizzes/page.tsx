'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { quizList, Quiz } from './data/quizData';

const QuizCard = ({ quiz }: { quiz: Quiz }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <img
          src={quiz.imageUrl}
          alt={quiz.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium text-finanqa-green-1 bg-finanqa-green-1/10 px-3 py-1 rounded-full">
            {quiz.category}
          </span>
          <span className="text-sm text-gray-500">{quiz.difficulty}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{quiz.title}</h3>
        <p className="text-gray-600 mb-4">{quiz.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{quiz.questionCount} soru</span>
          <Link 
            href={`/academy/quizzes/${quiz.slug}`}
            className="bg-finanqa-green-1 text-white px-4 py-2 rounded-lg hover:bg-finanqa-green-2 transition-colors inline-block"
          >
            Quize Başla
          </Link>
        </div>
      </div>
    </div>
  );
};

const QuizzesPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredQuizzes = quizList.filter((quiz) => {
    const matchesDifficulty = selectedDifficulty === '' || 
      quiz.difficulty.toLocaleLowerCase('tr') === selectedDifficulty.toLocaleLowerCase('tr');
    const matchesCategory = selectedCategory === '' || 
      quiz.category.toLocaleLowerCase('tr').includes(selectedCategory.toLocaleLowerCase('tr'));
    return matchesDifficulty && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-4">Finansal Okuryazarlık Quizleri</h1>
          <p className="text-base sm:text-lg text-finanqa-green-1/80 max-w-2xl mx-auto mb-6">
            Finansal bilginizi test edin ve öğrenin. Kişisel finans, yatırım ve bütçe yönetimi konularında kendinizi geliştirin.
          </p>
          <Link href="/academy/quizzes/stats">
            <button className="bg-finanqa-green-1 hover:bg-finanqa-green-2 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
              📊 İstatistiklerim
            </button>
          </Link>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <select 
              className="rounded-xl border border-gray-200 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-finanqa-green-1 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Tüm Kategoriler</option>
              <option value="temel">Temel Finans</option>
              <option value="yatirim">Yatırım</option>
              <option value="kisisel">Kişisel Finans</option>
              <option value="bankacilik">Bankacılık</option>
              <option value="karma">Karma</option>
              <option value="hizli">Hızlı Test</option>
            </select>
            <select
              className="rounded-xl border border-gray-200 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-finanqa-green-1 focus:border-transparent"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="">Tüm Zorluklar</option>
              <option value="başlangıç">Başlangıç</option>
              <option value="orta">Orta</option>
              <option value="ileri">İleri</option>
            </select>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Toplam {filteredQuizzes.length} quiz</span>
          </div>
        </div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredQuizzes.map((quiz) => (
            <QuizCard key={quiz.slug} quiz={quiz} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage; 
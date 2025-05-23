import React from 'react';
import QuizCard from '@/components/ogren/QuizCard';

// This would typically come from an API or CMS
const sampleQuizzes = [
  {
    title: 'Temel Finans Bilgisi',
    description: 'Finans dünyasının temel kavramlarını test edin.',
    difficulty: 'Kolay' as const,
    questionCount: 10,
    slug: 'temel-finans-bilgisi',
    category: 'Temel Finans',
  },
  {
    title: 'Yatırım Stratejileri',
    description: 'Farklı yatırım stratejileri hakkındaki bilginizi ölçün.',
    difficulty: 'Orta' as const,
    questionCount: 15,
    slug: 'yatirim-stratejileri',
    category: 'Yatırım',
  },
  // Add more sample quizzes as needed
];

const QuizzesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Finansal Oyunlar ve Quizler</h1>
        <div className="flex gap-4">
          <select className="rounded-lg border border-gray-300 px-4 py-2">
            <option value="">Tüm Kategoriler</option>
            <option value="temel">Temel Finans</option>
            <option value="yatirim">Yatırım</option>
            <option value="butce">Bütçe</option>
          </select>
          <select className="rounded-lg border border-gray-300 px-4 py-2">
            <option value="">Tüm Zorluklar</option>
            <option value="kolay">Kolay</option>
            <option value="orta">Orta</option>
            <option value="zor">Zor</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleQuizzes.map((quiz) => (
          <QuizCard key={quiz.slug} {...quiz} />
        ))}
      </div>
    </div>
  );
};

export default QuizzesPage; 
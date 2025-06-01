import React from 'react';
import QuizCard from '@/components/ogren/QuizCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quizler | Finanqa',
  description: 'Finansal bilginizi test edin ve eğlenceli quizlerle öğrenin. Kişisel finans, yatırım ve bütçe yönetimi konularında interaktif testler.',
};

// This would typically come from an API or CMS
const sampleQuizzes = [
  {
    title: 'Temel Finans Bilgisi',
    description: 'Finans dünyasının temel kavramlarını test edin. Para, bütçe ve tasarruf konularında bilginizi ölçün.',
    difficulty: 'Kolay' as const,
    questionCount: 10,
    slug: 'temel-finans-bilgisi',
    category: 'Temel Finans',
    timeLimit: 15,
    participants: 1250,
  },
  {
    title: 'Yatırım Stratejileri',
    description: 'Farklı yatırım stratejileri hakkındaki bilginizi ölçün. Hisse senedi, tahvil ve diğer yatırım araçları hakkında test edin.',
    difficulty: 'Orta' as const,
    questionCount: 15,
    slug: 'yatirim-stratejileri',
    category: 'Yatırım',
    timeLimit: 20,
    participants: 850,
  },
  {
    title: 'Kripto Para Dünyası',
    description: 'Kripto para ve blockchain teknolojisi hakkındaki bilginizi test edin. Temel kavramlar ve güvenlik önlemleri.',
    difficulty: 'Zor' as const,
    questionCount: 12,
    slug: 'kripto-para-dunyasi',
    category: 'Kripto Para',
    timeLimit: 18,
    participants: 620,
  },
];

const QuizzesPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-4">Finansal Oyunlar ve Quizler</h1>
          <p className="text-base sm:text-lg text-finanqa-green-1/80 max-w-2xl mx-auto">
            Finansal bilginizi test edin ve eğlenceli quizlerle öğrenin. Kişisel finans, yatırım ve bütçe yönetimi konularında interaktif testler.
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <select className="rounded-xl border border-gray-200 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-finanqa-green-1 focus:border-transparent">
              <option value="">Tüm Kategoriler</option>
              <option value="temel">Temel Finans</option>
              <option value="yatirim">Yatırım</option>
              <option value="kripto">Kripto Para</option>
              <option value="butce">Bütçe</option>
            </select>
            <select className="rounded-xl border border-gray-200 px-4 py-2 bg-white shadow-sm focus:ring-2 focus:ring-finanqa-green-1 focus:border-transparent">
              <option value="">Tüm Zorluklar</option>
              <option value="kolay">Kolay</option>
              <option value="orta">Orta</option>
              <option value="zor">Zor</option>
            </select>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Toplam {sampleQuizzes.length} quiz</span>
          </div>
        </div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleQuizzes.map((quiz) => (
            <QuizCard key={quiz.slug} {...quiz} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizzesPage; 
import React from 'react';
import Link from 'next/link';

interface QuizCardProps {
  title: string;
  description: string;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  questionCount: number;
  slug: string;
  category: string;
  timeLimit: number;
  participants: number;
}

const difficultyColors = {
  Kolay: 'bg-green-100 text-green-800',
  Orta: 'bg-yellow-100 text-yellow-800',
  Zor: 'bg-red-100 text-red-800',
};

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  description,
  difficulty,
  questionCount,
  slug,
  category,
  timeLimit,
  participants,
}) => {
  return (
    <Link href={`/ogren/quizler/${slug}`}>
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 p-6 group">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-sm font-medium bg-finanqa-green-1/10 text-finanqa-green-1 rounded-full">
            {category}
          </span>
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-finanqa-green-1 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              {questionCount} soru
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {timeLimit} dakika
            </span>
          </div>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {participants.toLocaleString()}
          </span>
        </div>
        <div className="mt-4 flex items-center text-finanqa-green-1 font-medium">
          Quize Başla
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard; 
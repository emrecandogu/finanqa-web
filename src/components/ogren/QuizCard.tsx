import React from 'react';
import Link from 'next/link';

interface QuizCardProps {
  title: string;
  description: string;
  difficulty: 'Kolay' | 'Orta' | 'Zor';
  questionCount: number;
  slug: string;
  category: string;
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
}) => {
  return (
    <Link href={`/ogren/quizler/${slug}`}>
      <div className="bg-white rounded-xl shadow-md hover:scale-105 transition-transform duration-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-sm bg-[#1b9c85] text-white rounded-full">
            {category}
          </span>
          <span className={`px-3 py-1 text-sm rounded-full ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{questionCount} soru</span>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard; 
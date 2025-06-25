import { basicQuestions } from './basic';
import investmentQuestions from './investment.json';
import personalQuestions from './personal.json';

// Kategori bazında soru sayıları (bankacılık soruları basic.ts içinde)
const bankingQuestions = basicQuestions.filter(q => q.category === 'bankacilik');
const temelQuestions = basicQuestions.filter(q => q.category === 'temel_kavramlar');

// Debug: Import edilen dosyaları kontrol et
console.log('Data imports:', {
  basic: basicQuestions?.length || 0,
  investment: investmentQuestions?.length || 0,
  personal: personalQuestions?.length || 0
});

console.log('Category breakdown:', {
  temel_kavramlar: temelQuestions.length,
  yatirim: investmentQuestions.length,
  kisisel_finans: personalQuestions.length,
  bankacilik: bankingQuestions.length,
  total: basicQuestions.length + investmentQuestions.length + personalQuestions.length
});

// Debug: Bankacılık sorularını detaylı kontrol et
console.log('Banking questions detail:', {
  bankingQuestionsFound: bankingQuestions.length,
  bankingQuestionIds: bankingQuestions.map(q => q.id),
  firstBankingQuestion: bankingQuestions[0]?.question || 'No banking questions found'
});

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

// Tüm soruları birleştir (bankacılık soruları basicQuestions içinde)
export const questions: Question[] = [
  ...basicQuestions,
  ...investmentQuestions,
  ...personalQuestions
];

export const questionCounts = {
  temel_kavramlar: temelQuestions.length,
  yatirim: investmentQuestions.length,
  kisisel_finans: personalQuestions.length,
  bankacilik: bankingQuestions.length,
  all: questions.length
};

// Kategori filtreleme fonksiyonu
export function getFilteredQuestions(category: string): Question[] {
  if (category === "all") return questions;
  return questions.filter((q) => q.category === category);
} 
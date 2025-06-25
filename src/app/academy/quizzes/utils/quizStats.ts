export interface QuizResult {
  quizSlug: string;
  quizTitle: string;
  score: number;
  totalQuestions: number;
  completedAt: Date;
  timeSpent: number; // seconds
  category: string;
  difficulty: string;
}

export interface QuizStats {
  totalQuizzesTaken: number;
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  averageScore: number;
  bestScore: number;
  categoryStats: { [category: string]: { taken: number; averageScore: number } };
  recentResults: QuizResult[];
  streakCount: number;
  lastQuizDate?: Date;
}

const QUIZ_STATS_KEY = 'finanqa_quiz_stats';

export function getQuizStats(): QuizStats {
  if (typeof window === 'undefined') {
    return getDefaultStats();
  }

  try {
    const stored = localStorage.getItem(QUIZ_STATS_KEY);
    if (!stored) return getDefaultStats();
    
    const stats = JSON.parse(stored);
    // Convert date strings back to Date objects
    stats.recentResults = stats.recentResults.map((result: any) => ({
      ...result,
      completedAt: new Date(result.completedAt)
    }));
    if (stats.lastQuizDate) {
      stats.lastQuizDate = new Date(stats.lastQuizDate);
    }
    
    return stats;
  } catch (error) {
    console.error('Error loading quiz stats:', error);
    return getDefaultStats();
  }
}

export function saveQuizResult(result: QuizResult): QuizStats {
  const stats = getQuizStats();
  
  // Add new result
  stats.recentResults.unshift(result);
  
  // Keep only last 50 results
  if (stats.recentResults.length > 50) {
    stats.recentResults = stats.recentResults.slice(0, 50);
  }
  
  // Update totals
  stats.totalQuizzesTaken++;
  stats.totalQuestionsAnswered += result.totalQuestions;
  stats.totalCorrectAnswers += result.score;
  
  // Update averages
  stats.averageScore = (stats.totalCorrectAnswers / stats.totalQuestionsAnswered) * 100;
  
  // Update best score
  const currentPercentage = (result.score / result.totalQuestions) * 100;
  if (currentPercentage > stats.bestScore) {
    stats.bestScore = currentPercentage;
  }
  
  // Update category stats
  if (!stats.categoryStats[result.category]) {
    stats.categoryStats[result.category] = { taken: 0, averageScore: 0 };
  }
  
  const categoryData = stats.categoryStats[result.category];
  const oldTotal = categoryData.taken * categoryData.averageScore;
  categoryData.taken++;
  categoryData.averageScore = (oldTotal + currentPercentage) / categoryData.taken;
  
  // Update streak
  const today = new Date();
  const lastQuizDate = stats.lastQuizDate;
  
  if (currentPercentage >= 70) { // 70% or higher maintains streak
    if (!lastQuizDate || isConsecutiveDay(lastQuizDate, today)) {
      stats.streakCount++;
    } else if (!isSameDay(lastQuizDate, today)) {
      stats.streakCount = 1; // Reset streak but count this quiz
    }
  } else {
    stats.streakCount = 0; // Break streak on poor performance
  }
  
  stats.lastQuizDate = today;
  
  // Save to localStorage
  try {
    localStorage.setItem(QUIZ_STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error('Error saving quiz stats:', error);
  }
  
  return stats;
}

function getDefaultStats(): QuizStats {
  return {
    totalQuizzesTaken: 0,
    totalQuestionsAnswered: 0,
    totalCorrectAnswers: 0,
    averageScore: 0,
    bestScore: 0,
    categoryStats: {},
    recentResults: [],
    streakCount: 0
  };
}

function isSameDay(date1: Date, date2: Date): boolean {
  return date1.toDateString() === date2.toDateString();
}

function isConsecutiveDay(lastDate: Date, currentDate: Date): boolean {
  const diffTime = currentDate.getTime() - lastDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays === 1 || isSameDay(lastDate, currentDate);
}

export function getQuizLeaderboard(): { category: string; score: number; quizTitle: string; date: Date }[] {
  const stats = getQuizStats();
  return stats.recentResults
    .map(result => ({
      category: result.category,
      score: Math.round((result.score / result.totalQuestions) * 100),
      quizTitle: result.quizTitle,
      date: result.completedAt
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
}

export function resetQuizStats(): void {
  try {
    localStorage.removeItem(QUIZ_STATS_KEY);
  } catch (error) {
    console.error('Error resetting quiz stats:', error);
  }
} 
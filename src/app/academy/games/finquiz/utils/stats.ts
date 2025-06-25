export interface GameStats {
  totalGamesPlayed: number;
  totalQuestionsAnswered: number;
  correctAnswers: number;
  streakCurrent: number;
  streakBest: number;
  xpTotal: number;
  level: number;
  categoryStats: {
    [category: string]: {
      played: number;
      correct: number;
      total: number;
    };
  };
  achievements: string[];
  lastPlayDate: string;
}

export interface GameResult {
  mode: "learn" | "challenge";
  category: string;
  questionsCount: number;
  correctCount: number;
  timeSpent: number;
  date: string;
}

const STORAGE_KEY = 'finquiz_stats';

export function getStats(): GameStats {
  if (typeof window === 'undefined') {
    return getDefaultStats();
  }
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading stats:', error);
  }
  
  return getDefaultStats();
}

export function saveStats(stats: GameStats): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (error) {
    console.error('Error saving stats:', error);
  }
}

export function updateStats(result: GameResult): GameStats {
  const stats = getStats();
  
  // Temel istatistikler
  stats.totalGamesPlayed++;
  stats.totalQuestionsAnswered += result.questionsCount;
  stats.correctAnswers += result.correctCount;
  stats.lastPlayDate = result.date;
  
  // Kategori istatistikleri
  if (!stats.categoryStats[result.category]) {
    stats.categoryStats[result.category] = { played: 0, correct: 0, total: 0 };
  }
  stats.categoryStats[result.category].played++;
  stats.categoryStats[result.category].correct += result.correctCount;
  stats.categoryStats[result.category].total += result.questionsCount;
  
  // Streak hesaplama
  const accuracy = result.correctCount / result.questionsCount;
  if (accuracy >= 0.8) { // %80 ve üzeri başarı
    stats.streakCurrent++;
    if (stats.streakCurrent > stats.streakBest) {
      stats.streakBest = stats.streakCurrent;
    }
  } else {
    stats.streakCurrent = 0;
  }
  
  // XP hesaplama
  const baseXP = result.correctCount * 10;
  const bonusXP = result.mode === "challenge" ? result.correctCount * 5 : 0;
  const streakBonus = stats.streakCurrent >= 3 ? 25 : 0;
  const perfectBonus = accuracy === 1 ? 50 : 0;
  
  stats.xpTotal += baseXP + bonusXP + streakBonus + perfectBonus;
  
  // Level hesaplama (her 500 XP = 1 level)
  stats.level = Math.floor(stats.xpTotal / 500) + 1;
  
  // Achievement kontrolü
  checkAchievements(stats);
  
  saveStats(stats);
  return stats;
}

function getDefaultStats(): GameStats {
  return {
    totalGamesPlayed: 0,
    totalQuestionsAnswered: 0,
    correctAnswers: 0,
    streakCurrent: 0,
    streakBest: 0,
    xpTotal: 0,
    level: 1,
    categoryStats: {},
    achievements: [],
    lastPlayDate: new Date().toISOString()
  };
}

function checkAchievements(stats: GameStats): void {
  const newAchievements: string[] = [];
  
  // İlk oyun
  if (stats.totalGamesPlayed === 1 && !stats.achievements.includes('first_game')) {
    newAchievements.push('first_game');
  }
  
  // 10 oyun
  if (stats.totalGamesPlayed >= 10 && !stats.achievements.includes('veteran')) {
    newAchievements.push('veteran');
  }
  
  // 100 soru
  if (stats.totalQuestionsAnswered >= 100 && !stats.achievements.includes('scholar')) {
    newAchievements.push('scholar');
  }
  
  // 5 streak
  if (stats.streakBest >= 5 && !stats.achievements.includes('streak_master')) {
    newAchievements.push('streak_master');
  }
  
  // Level 5
  if (stats.level >= 5 && !stats.achievements.includes('level_5')) {
    newAchievements.push('level_5');
  }
  
  // %90 genel başarı
  const overallAccuracy = stats.correctAnswers / stats.totalQuestionsAnswered;
  if (overallAccuracy >= 0.9 && stats.totalQuestionsAnswered >= 50 && !stats.achievements.includes('perfectionist')) {
    newAchievements.push('perfectionist');
  }
  
  stats.achievements.push(...newAchievements);
}

export const ACHIEVEMENTS = {
  first_game: {
    title: "İlk Adım",
    description: "İlk oyununu tamamladın!",
    icon: "🎯"
  },
  veteran: {
    title: "Deneyimli",
    description: "10 oyun tamamladın",
    icon: "🏆"
  },
  scholar: {
    title: "Bilgin",
    description: "100 soru yanıtladın",
    icon: "📚"
  },
  streak_master: {
    title: "Seri Ustası",
    description: "5 oyun üst üste başarılı",
    icon: "🔥"
  },
  level_5: {
    title: "Seviye 5",
    description: "5. seviyeye ulaştın",
    icon: "⭐"
  },
  perfectionist: {
    title: "Mükemmeliyetçi",
    description: "%90 genel başarı oranı",
    icon: "💎"
  }
};

export function getXPForNextLevel(currentXP: number): number {
  const currentLevel = Math.floor(currentXP / 500) + 1;
  return currentLevel * 500 - currentXP;
}

export function getLevelProgress(currentXP: number): number {
  const levelXP = currentXP % 500;
  return (levelXP / 500) * 100;
} 
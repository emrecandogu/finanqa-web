"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

import { Trophy, Target, Zap, Star, TrendingUp, Award } from 'lucide-react';
import { GameStats, ACHIEVEMENTS, getLevelProgress, getXPForNextLevel } from '../utils/stats';

interface StatsPanelProps {
  stats: GameStats;
}

export default function StatsPanel({ stats }: StatsPanelProps) {
  const overallAccuracy = stats.totalQuestionsAnswered > 0 
    ? Math.round((stats.correctAnswers / stats.totalQuestionsAnswered) * 100)
    : 0;

  const levelProgress = getLevelProgress(stats.xpTotal);
  const xpForNext = getXPForNextLevel(stats.xpTotal);

  return (
    <div className="space-y-6">
      {/* Level ve XP */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Star className="h-5 w-5 text-finanqa-green" />
            Seviye {stats.level}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{stats.xpTotal} XP</span>
              <span>{xpForNext} XP kaldı</span>
            </div>
            <Progress value={levelProgress} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Temel İstatistikler */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Trophy className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.totalGamesPlayed}</p>
                <p className="text-sm text-gray-600">Oyun</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Target className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{overallAccuracy}%</p>
                <p className="text-sm text-gray-600">Başarı</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Zap className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.streakBest}</p>
                <p className="text-sm text-gray-600">En İyi Seri</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">{stats.totalQuestionsAnswered}</p>
                <p className="text-sm text-gray-600">Soru</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kategori İstatistikleri */}
      {Object.keys(stats.categoryStats).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Kategori Performansı</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(stats.categoryStats).map(([category, data]) => {
                const accuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
                const categoryName = getCategoryName(category);
                
                return (
                  <div key={category} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{categoryName}</p>
                      <p className="text-sm text-gray-600">{data.played} oyun</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{accuracy}%</p>
                      <p className="text-sm text-gray-600">{data.correct}/{data.total}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Başarımlar */}
      {stats.achievements.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Award className="h-5 w-5 text-finanqa-green" />
              Başarımlar ({stats.achievements.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {stats.achievements.map((achievementId) => {
                const achievement = ACHIEVEMENTS[achievementId as keyof typeof ACHIEVEMENTS];
                if (!achievement) return null;
                
                return (
                  <div key={achievementId} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <p className="font-medium">{achievement.title}</p>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mevcut Seri */}
      {stats.streakCurrent > 0 && (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold text-orange-800">
                  {stats.streakCurrent} oyun seri! 🔥
                </p>
                <p className="text-sm text-orange-600">
                  Devam et ve rekorunu kır!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function getCategoryName(category: string): string {
  const names: { [key: string]: string } = {
    'temel_kavramlar': 'Temel Kavramlar',
    'yatirim': 'Yatırım',
    'kisisel_finans': 'Kişisel Finans',
    'bankacilik': 'Bankacılık',
    'all': 'Tüm Kategoriler'
  };
  return names[category] || category;
} 
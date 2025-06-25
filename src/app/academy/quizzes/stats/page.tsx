'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getQuizStats, getQuizLeaderboard, resetQuizStats, QuizStats } from '../utils/quizStats';

export default function QuizStatsPage() {
  const [stats, setStats] = useState<QuizStats | null>(null);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    const loadStats = () => {
      const currentStats = getQuizStats();
      const currentLeaderboard = getQuizLeaderboard();
      setStats(currentStats);
      setLeaderboard(currentLeaderboard);
    };

    loadStats();
  }, []);

  const handleResetStats = () => {
    resetQuizStats();
    setStats(getQuizStats());
    setLeaderboard([]);
    setShowResetConfirm(false);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!stats) {
    return (
      <div className="min-h-screen bg-white pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">Yükleniyor...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/academy/quizzes" className="text-finanqa-green-1 hover:underline mb-4 inline-block">
            ← Quizlere Dön
          </Link>
          <h1 className="text-3xl font-bold text-finanqa-green-1 mb-2">Quiz İstatistiklerim</h1>
          <p className="text-gray-600">Finansal bilgi quiz performansınızı takip edin</p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="text-3xl font-bold text-finanqa-green-1 mb-2">
              {stats.totalQuizzesTaken}
            </div>
            <div className="text-gray-600">Toplam Quiz</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="text-3xl font-bold text-finanqa-green-1 mb-2">
              {Math.round(stats.averageScore)}%
            </div>
            <div className="text-gray-600">Ortalama Başarı</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="text-3xl font-bold text-finanqa-green-1 mb-2">
              {Math.round(stats.bestScore)}%
            </div>
            <div className="text-gray-600">En İyi Skor</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="text-3xl font-bold text-finanqa-green-1 mb-2">
              {stats.streakCount}
            </div>
            <div className="text-gray-600">Güncel Seri</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Category Performance */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Kategori Performansı</h2>
            {Object.keys(stats.categoryStats).length > 0 ? (
              <div className="space-y-4">
                {Object.entries(stats.categoryStats).map(([category, data]) => (
                  <div key={category} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-gray-900">{category}</div>
                      <div className="text-sm text-gray-500">{data.taken} quiz tamamlandı</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-finanqa-green-1">
                        {Math.round(data.averageScore)}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-500 text-center py-8">
                Henüz quiz tamamlamadınız
              </div>
            )}
          </div>

          {/* Recent Results */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Son Sonuçlar</h2>
            {stats.recentResults.length > 0 ? (
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {stats.recentResults.slice(0, 10).map((result, index) => {
                  const percentage = Math.round((result.score / result.totalQuestions) * 100);
                  return (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">{result.quizTitle}</div>
                        <div className="text-xs text-gray-500">
                          {formatDate(result.completedAt)} • {formatTime(result.timeSpent)}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-semibold ${
                          percentage >= 80 ? 'text-green-600' : 
                          percentage >= 60 ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {percentage}%
                        </div>
                        <div className="text-xs text-gray-500">
                          {result.score}/{result.totalQuestions}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-gray-500 text-center py-8">
                Henüz quiz tamamlamadınız
              </div>
            )}
          </div>
        </div>

        {/* Leaderboard */}
        {leaderboard.length > 0 && (
          <div className="mt-8 bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">En İyi Skorlarım</h2>
            <div className="space-y-2">
              {leaderboard.map((entry, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      index === 0 ? 'bg-yellow-100 text-yellow-800' :
                      index === 1 ? 'bg-gray-100 text-gray-800' :
                      index === 2 ? 'bg-orange-100 text-orange-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{entry.quizTitle}</div>
                      <div className="text-sm text-gray-500">{entry.category}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-finanqa-green-1">{entry.score}%</div>
                    <div className="text-xs text-gray-500">{formatDate(entry.date)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/academy/quizzes">
            <button className="bg-finanqa-green-1 hover:bg-finanqa-green-2 text-white px-6 py-3 rounded-lg transition-colors">
              Yeni Quiz Çöz
            </button>
          </Link>
          
          {stats.totalQuizzesTaken > 0 && (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              İstatistikleri Sıfırla
            </button>
          )}
        </div>

        {/* Reset Confirmation Modal */}
        {showResetConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 max-w-md mx-4">
              <h3 className="text-lg font-semibold mb-4">İstatistikleri Sıfırla</h3>
              <p className="text-gray-600 mb-6">
                Tüm quiz istatistikleriniz kalıcı olarak silinecek. Bu işlem geri alınamaz.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  İptal
                </button>
                <button
                  onClick={handleResetStats}
                  className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Sıfırla
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Timer, Sparkles } from 'lucide-react';
import { questions, Question } from './questions';
import { getStats, updateStats, GameResult, GameStats } from './utils/stats';
import StatsPanel from './components/StatsPanel';
import AchievementNotification from './components/AchievementNotification';
import Image from 'next/image';

const CATEGORIES = [
  { value: "all", label: "Tümü" },
  { value: "temel_kavramlar", label: "Temel Kavramlar" },
  { value: "yatirim", label: "Yatırım" },
  { value: "kisisel_finans", label: "Kişisel Finans" },
  { value: "bankacilik", label: "Bankacılık" },
];
const QUESTION_COUNTS = [5, 10, 20, 30, 40, 50, 60];
const TIMES = [10, 15, 20, 30, 45, 60];
const MODES = [
  { value: "learn", label: "Eğitici Mod" },
  { value: "challenge", label: "Challenge Modu" },
];

interface GameSettings {
  questionCount: number;
  timePerQuestion: number;
  category: string;
  mode: "learn" | "challenge";
}

function getFilteredQuestions(category: string) {
  if (category === "all") return questions;
  return questions.filter((q) => q.category === category);
}



export default function FinQuiz() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'finished' | 'stats'>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [settings, setSettings] = useState<GameSettings>({
    questionCount: 10,
    timePerQuestion: 20,
    category: "all",
    mode: "learn",
  });
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [correctIndex, setCorrectIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [stats, setStats] = useState<GameStats | null>(null);
  const [newAchievements, setNewAchievements] = useState<string[]>([]);
  const [startTime, setStartTime] = useState<Date | null>(null);

  useEffect(() => {
    const filtered = getFilteredQuestions(settings.category);
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled.slice(0, settings.questionCount));
  }, [settings]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameState, timeLeft]);

  useEffect(() => {
    if (gameState === "playing" && quizQuestions.length > 0 && quizQuestions[currentQuestion]) {
      const options = [...quizQuestions[currentQuestion].options];
      const correct = quizQuestions[currentQuestion].correctAnswer;
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      setShuffledOptions(options);
      setCorrectIndex(options.findIndex((opt) => opt === quizQuestions[currentQuestion].options[correct]));
    }
  }, [currentQuestion, gameState, quizQuestions]);

  const handleTimeUp = () => {
    setShowFeedback(true);
    setTimeout(() => {
      if (currentQuestion + 1 < quizQuestions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setTimeLeft(settings.timePerQuestion);
      } else {
        const correctCount = settings.mode === "learn" ? Math.round(score / 10) : 0;
        finishGame(correctCount);
      }
    }, 2000);
  };

  const startGame = () => {
    setGameState("playing");
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(settings.timePerQuestion);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setUserAnswers([]);
    setStartTime(new Date());
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (settings.mode === "learn") {
      setShowFeedback(true);
      if (answerIndex === correctIndex) {
        setScore((prev) => prev + 10);
      }
      setTimeout(() => {
        if (currentQuestion + 1 < quizQuestions.length) {
          setCurrentQuestion((prev) => prev + 1);
          setSelectedAnswer(null);
          setShowFeedback(false);
          setTimeLeft(settings.timePerQuestion);
        } else {
          const correctCount = settings.mode === "learn" ? Math.round(score / 10) : 0;
          finishGame(correctCount);
        }
      }, 3000);
    } else {
      setUserAnswers((prev) => [...prev, answerIndex]);
      if (currentQuestion + 1 < quizQuestions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedAnswer(null);
        setTimeLeft(settings.timePerQuestion);
      } else {
        const { correct } = getChallengeResults();
        finishGame(correct);
      }
    }
  };

  const getFeedbackMessage = () => {
    const maxScore = quizQuestions.length * 10;
    const percent = (score / maxScore) * 100;
    if (percent >= 80) return "Tebrikler! Finansal farkındalığın çok iyi.";
    if (percent >= 40) return "Güzel gidiyorsun, bilincin artıyor!";
    return "Henüz yolun başındasın. Öğrenmeye devam!";
  };

  const getChallengeResults = () => {
    let correct = 0;
    const details = quizQuestions.map((q, i) => {
      const user = userAnswers[i];
      const isCorrect = user !== undefined && user < q.options.length && q.options[user] === q.options[q.correctAnswer];
      if (isCorrect) correct++;
      return {
        question: q.question,
        userAnswer: user !== undefined && user < q.options.length ? q.options[user] : "Boş",
        correctAnswer: q.options[q.correctAnswer],
        explanation: q.explanation,
        isCorrect,
      };
    });
    return { correct, details };
  };

  const finishGame = (correctCount: number) => {
    if (!startTime) return;
    
    const endTime = new Date();
    const timeSpent = Math.round((endTime.getTime() - startTime.getTime()) / 1000);
    
    const gameResult: GameResult = {
      mode: settings.mode,
      category: settings.category,
      questionsCount: quizQuestions.length,
      correctCount,
      timeSpent,
      date: endTime.toISOString()
    };
    
    const oldStats = getStats();
    const newStats = updateStats(gameResult);
    
    // Yeni başarımları kontrol et
    const newAchievementIds = newStats.achievements.filter(
      id => !oldStats.achievements.includes(id)
    );
    
    setStats(newStats);
    setNewAchievements(newAchievementIds);
    setGameState('finished');
  };

  const currentQ = quizQuestions[currentQuestion];

  return (
    <div className="container mx-auto px-2 py-8 max-w-2xl">
      {gameState === 'start' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-finanqa-green-1 to-finanqa-light-green flex items-center justify-center shadow-lg mb-2 overflow-hidden border-4 border-finanqa-light-green">
              <Image src="/images/anqa/anqa_main_transparan.png" alt="Anqa Maskotu" width={96} height={96} className="object-contain w-full h-full" priority />
            </div>
            <h1 className="text-5xl font-extrabold mb-1 text-finanqa-green-1 tracking-tight drop-shadow-lg">FinQuiz</h1>
            <div className="flex items-center gap-2 text-finanqa-green-1 font-semibold text-lg">
              <Sparkles className="w-6 h-6 text-finanqa-light-green animate-bounce" />
              Finansal Bilgini Test Et, Geliştir ve Eğlen!
            </div>
          </div>
          <Card className="p-8 w-full max-w-lg shadow-2xl border-2 border-finanqa-green-1 bg-white/90 relative">
            <p className="text-lg mb-6 text-center text-finanqa-green-1 font-medium">
              FinQuiz ile finansal bilginizi <span className="font-bold text-finanqa-light-green">test edin</span> ve <span className="font-bold text-finanqa-green-1">geliştirin</span>!<br />
              Her doğru cevap puan kazandırır, her yanlış cevapta doğru bilgi verilir.
            </p>
            <div className="mb-4 flex flex-col gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1 text-finanqa-green-1">Oyun Modu</label>
                <select
                  className="w-full border-2 border-finanqa-green-1 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-finanqa-light-green bg-white"
                  value={settings.mode}
                  onChange={(e) => setSettings((s) => ({ ...s, mode: e.target.value as "learn" | "challenge" }))}
                >
                  {MODES.map((m) => (
                    <option key={m.value} value={m.value}>{m.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 text-finanqa-green-1">Kategori</label>
                <select
                  className="w-full border-2 border-finanqa-green-1 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-finanqa-light-green bg-white"
                  value={settings.category}
                  onChange={(e) => {
                    setSettings((s) => ({ ...s, category: e.target.value }));
                  }}
                >
                  {CATEGORIES.map((cat) => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold mb-1 text-finanqa-green-1">Soru Sayısı</label>
                  <select
                    className="w-full border-2 border-finanqa-green-1 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-finanqa-light-green bg-white"
                    value={settings.questionCount}
                    onChange={(e) => {
                      setSettings((s) => ({ ...s, questionCount: Number(e.target.value) }));
                    }}
                  >
                    {QUESTION_COUNTS.filter(
                      (n) => n <= getFilteredQuestions(settings.category).length
                    ).map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold mb-1 text-finanqa-green-1">Süre (sn)</label>
                  <select
                    className="w-full border-2 border-finanqa-green-1 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-finanqa-light-green bg-white"
                    value={settings.timePerQuestion}
                    onChange={(e) => {
                      setSettings((s) => ({ ...s, timePerQuestion: Number(e.target.value) }));
                    }}
                  >
                    {TIMES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Button
                onClick={startGame}
                className="w-full bg-finanqa-green-1 hover:bg-finanqa-light-green text-white text-lg py-3 rounded-xl font-bold shadow-lg transition-all duration-200"
                size="lg"
              >
                🚀 Hemen Başla
              </Button>
              <Button
                onClick={() => {
                  setStats(getStats());
                  setGameState('stats');
                }}
                variant="outline"
                className="w-full border-finanqa-green-1 text-finanqa-green-1 hover:bg-finanqa-green-1 hover:text-white"
                size="lg"
              >
                📊 İstatistiklerim
              </Button>
            </div>
            <div className="mt-6 text-left text-sm text-finanqa-green-1/80">
              <div className="font-bold mb-1 text-finanqa-green-1">Nasıl Oynanır?</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>Oyun modunu, kategori, soru sayısı ve süreyi seçin.</li>
                <li><b>Eğitici Mod</b>: Her sorudan sonra doğru cevabı ve açıklamayı hemen görebilirsiniz.</li>
                <li><b>Challenge Modu</b>: Cevaplarınız test sonunda topluca değerlendirilir ve gelişim önerileri sunulur.</li>
                <li>Her doğru cevap 10 puan kazandırır.</li>
              </ul>
            </div>
          </Card>
        </motion.div>
      )}

      {gameState === 'playing' && currentQ && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2 text-primary">
              <Timer className="w-5 h-5" />
              <span className="font-semibold">{timeLeft}s</span>
            </div>
            <div className="text-lg font-semibold text-primary">
              {settings.mode === "learn" ? `Puan: ${score}` : `Soru: ${currentQuestion + 1} / ${quizQuestions.length}`}
            </div>
          </div>

          <Progress
            value={((currentQuestion + 1) / quizQuestions.length) * 100}
            className="h-2"
          />

          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-primary">
              {currentQ.question}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {shuffledOptions.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={settings.mode === "learn" ? showFeedback : false}
                  variant={settings.mode === "learn" && showFeedback ? (selectedAnswer === index ? (index === correctIndex ? "default" : "destructive") : "outline") : "outline"}
                  className="w-full min-h-[56px] h-auto py-4 text-left text-base whitespace-pre-line break-words overflow-hidden"
                  style={{ wordBreak: 'break-word', whiteSpace: 'pre-line' }}
                >
                  {option}
                </Button>
              ))}
            </div>
          </Card>

          {settings.mode === "learn" && showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-muted text-center"
            >
              <p className="font-medium text-lg">
                {selectedAnswer === correctIndex
                  ? "✔️ Doğru! Tebrikler."
                  : "❌ Yanlış. Doğru cevap: " + shuffledOptions[correctIndex]}
              </p>
              <p className="mt-2 text-sm text-gray-700">
                {currentQ.explanation}
              </p>
            </motion.div>
          )}
        </motion.div>
      )}

      {gameState === 'finished' && settings.mode === 'learn' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Card className="p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-primary">Oyun Bitti!</h2>
            <p className="text-4xl font-bold text-primary mb-2">{score} / {quizQuestions.length * 10}</p>
            <p className="text-lg mb-6">{getFeedbackMessage()}</p>
            <div className="space-y-3">
              <Button
                onClick={() => setGameState('start')}
                className="bg-primary hover:bg-primary/90"
              >
                Tekrar Oyna
              </Button>
              <Button
                onClick={() => {
                  setStats(getStats());
                  setGameState('stats');
                }}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                📊 İstatistiklerim
              </Button>
            </div>
          </Card>
        </motion.div>
      )}

      {gameState === 'finished' && settings.mode === 'challenge' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Card className="p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-primary">Challenge Sonucu</h2>
            {(() => {
              const { correct, details } = getChallengeResults();
              const maxScore = quizQuestions.length * 10;
              const percent = (correct / quizQuestions.length) * 100;
              return <>
                <p className="text-4xl font-bold text-primary mb-2">{correct * 10} / {maxScore}</p>
                <p className="text-lg mb-6">
                  {percent >= 80 && "Tebrikler! Finansal farkındalığın çok iyi."}
                  {percent >= 40 && percent < 80 && "Güzel gidiyorsun, bilincin artıyor!"}
                  {percent < 40 && "Henüz yolun başındasın. Öğrenmeye devam!"}
                </p>
                <div className="text-left max-h-72 overflow-y-auto mb-4">
                  {details.map((d, i) => (
                    <div key={i} className={`mb-3 p-3 rounded-lg ${d.isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                      <div className="font-semibold mb-1">{i + 1}. {d.question}</div>
                      <div className="text-sm">
                        Senin cevabın: <span className={d.isCorrect ? 'text-green-700' : 'text-red-700'}>{d.userAnswer ?? "Boş"}</span><br />
                        Doğru cevap: <span className="text-green-700">{d.correctAnswer}</span>
                      </div>
                      {!d.isCorrect && <div className="text-xs mt-1 text-gray-700">Açıklama: {d.explanation}</div>}
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-lg p-4 text-left">
                  <div className="font-semibold mb-2 text-blue-800">Gelişim Önerileri</div>
                  {percent < 40 && <ul className="list-disc pl-5 text-sm text-blue-900">
                    <li>Temel finansal kavramları tekrar gözden geçirin.</li>
                    <li>Yanlış yaptığınız soruların açıklamalarını dikkatlice okuyun.</li>
                    <li>Finansal okuryazarlık makalelerini inceleyin.</li>
                  </ul>}
                  {percent >= 40 && percent < 80 && <ul className="list-disc pl-5 text-sm text-blue-900">
                    <li>Daha fazla pratik yaparak bilginizi pekiştirin.</li>
                    <li>Yanlış yaptığınız konulara odaklanın.</li>
                  </ul>}
                  {percent >= 80 && <ul className="list-disc pl-5 text-sm text-blue-900">
                    <li>Harika! Bilginizi güncel tutmak için yeni kaynaklar takip edin.</li>
                  </ul>}
                </div>
              </>;
            })()}
            <div className="space-y-3 mt-6">
              <Button
                onClick={() => setGameState('start')}
                className="bg-primary hover:bg-primary/90"
              >
                Tekrar Oyna
              </Button>
              <Button
                onClick={() => {
                  setStats(getStats());
                  setGameState('stats');
                }}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                📊 İstatistiklerim
              </Button>
            </div>
          </Card>
        </motion.div>
      )}

      {gameState === 'stats' && stats && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-finanqa-green-1">İstatistiklerim</h1>
            <Button
              onClick={() => setGameState('start')}
              variant="outline"
              className="border-finanqa-green-1 text-finanqa-green-1 hover:bg-finanqa-green-1 hover:text-white"
            >
              ← Ana Menü
            </Button>
          </div>
          <StatsPanel stats={stats} />
        </motion.div>
      )}

      {/* Başarım Bildirimleri */}
      {newAchievements.length > 0 && (
        <AchievementNotification
          achievements={newAchievements}
          onClose={() => setNewAchievements([])}
        />
      )}
    </div>
  );
} 
'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { quizzes } from '../data/quizData';
import { saveQuizResult, QuizResult } from '../utils/quizStats';

export default function QuizDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const quiz = quizzes[slug];
  
  // Debug: Quiz bilgilerini kontrol et (geliştirme için)
  if (process.env.NODE_ENV === 'development') {
    console.log('Quiz slug:', slug);
    console.log('Quiz found:', !!quiz);
    console.log('Quiz questions length:', quiz?.questions?.length);
    if (quiz) {
      console.log('Quiz title:', quiz.title);
      console.log('Quiz category:', quiz.category);
    }
  }
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [quizSaved, setQuizSaved] = useState(false);

  if (!quiz) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Quiz bulunamadı</h1>
          <Link href="/academy/quizzes" className="text-finanqa-green-1 hover:underline">
            Quizlere Dön
          </Link>
        </div>
      </div>
    );
  }

  if (!quiz.questions || quiz.questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Quiz soruları yüklenemedi</h1>
          <p className="text-gray-600 mb-4">Bu quiz için henüz soru bulunmuyor.</p>
          <Link href="/academy/quizzes" className="text-finanqa-green-1 hover:underline">
            Quizlere Dön
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswer = (answerIndex: number) => {
    setSelected(answerIndex);
    setShowFeedback(true);
    
    const newAnswers = [...userAnswers];
    newAnswers[step] = answerIndex;
    setUserAnswers(newAnswers);
    
    if (answerIndex === quiz.questions[step].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (step + 1 < quiz.questions.length) {
      setStep(step + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      setShowResult(true);
    }
  };

  // Start timer when quiz begins
  useEffect(() => {
    if (!startTime && step === 0) {
      setStartTime(new Date());
    }
  }, [step, startTime]);

  // Save quiz result when completed
  useEffect(() => {
    if (showResult && !quizSaved && startTime) {
      const endTime = new Date();
      const timeSpent = Math.round((endTime.getTime() - startTime.getTime()) / 1000);
      
      const result: QuizResult = {
        quizSlug: slug,
        quizTitle: quiz.title,
        score: score,
        totalQuestions: quiz.questions.length,
        completedAt: endTime,
        timeSpent: timeSpent,
        category: quiz.category,
        difficulty: quiz.difficulty
      };
      
      saveQuizResult(result);
      setQuizSaved(true);
    }
  }, [showResult, quizSaved, startTime, slug, quiz, score]);

  const resetQuiz = () => {
    setStep(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setShowFeedback(false);
    setUserAnswers([]);
    setStartTime(null);
    setQuizSaved(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / quiz.questions.length) * 100;
    if (percentage >= 80) return "Mükemmel! Finansal bilginiz çok iyi.";
    if (percentage >= 60) return "İyi! Finansal bilginiz gelişiyor.";
    if (percentage >= 40) return "Fena değil! Biraz daha çalışma gerekiyor.";
    return "Başlangıç seviyesi. Öğrenmeye devam edin!";
  };

  const progress = ((step + 1) / quiz.questions.length) * 100;

  return (
    <div className="min-h-screen bg-white pt-20 pb-16">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/academy/quizzes" className="text-finanqa-green-1 hover:underline mb-8 inline-block">
          ← Quizlere Dön
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-finanqa-green-1">{quiz.title}</h1>
          <p className="text-gray-600">{quiz.description}</p>
        </div>

        {!showResult ? (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Soru {step + 1} / {quiz.questions.length}</span>
                <span>{Math.round(progress)}% tamamlandı</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-finanqa-green-1 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-8">
                <h2 className="text-xl font-semibold mb-6 text-gray-900">
                  {quiz.questions[step].question}
                </h2>
                
                <div className="space-y-3 mb-6">
                  {quiz.questions[step].options.map((option, index) => {
                    let buttonClass = "w-full text-left px-4 py-4 rounded-lg border-2 transition-all duration-200 ";
                    
                    if (showFeedback) {
                      if (index === quiz.questions[step].answer) {
                        buttonClass += "bg-green-50 border-green-500 text-green-800";
                      } else if (index === selected && index !== quiz.questions[step].answer) {
                        buttonClass += "bg-red-50 border-red-500 text-red-800";
                      } else {
                        buttonClass += "bg-gray-50 border-gray-200 text-gray-600";
                      }
                    } else if (selected === index) {
                      buttonClass += "bg-finanqa-green-1 border-finanqa-green-1 text-white";
                    } else {
                      buttonClass += "bg-white border-gray-200 hover:bg-finanqa-green-1/10 hover:border-finanqa-green-1";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={showFeedback}
                        className={buttonClass}
                      >
                        <div className="flex items-center gap-3">
                          {showFeedback && index === quiz.questions[step].answer && (
                            <span className="text-green-600">✓</span>
                          )}
                          {showFeedback && index === selected && index !== quiz.questions[step].answer && (
                            <span className="text-red-600">✗</span>
                          )}
                          <span className="flex-1">{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Feedback */}
                {showFeedback && quiz.questions[step].explanation && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Açıklama:</h4>
                    <p className="text-blue-800">{quiz.questions[step].explanation}</p>
                  </div>
                )}

                {/* Next Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    disabled={!showFeedback}
                    className="bg-finanqa-green-1 hover:bg-finanqa-green-2 text-white px-6 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {step + 1 === quiz.questions.length ? 'Sonucu Gör' : 'Sonraki Soru'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Results */
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="p-8 text-center">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-finanqa-green-1 mb-2">Quiz Tamamlandı!</h2>
                <div className="text-6xl font-bold text-finanqa-green-1 mb-2">
                  {score} / {quiz.questions.length}
                </div>
                <p className="text-xl text-gray-600 mb-4">{getScoreMessage()}</p>
                <div className="text-lg text-gray-500">
                  Başarı oranınız: <span className="font-semibold">{Math.round((score / quiz.questions.length) * 100)}%</span>
                </div>
              </div>

              {/* Detailed Results */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left max-h-96 overflow-y-auto">
                <h3 className="font-semibold mb-4 text-center">Detaylı Sonuçlar</h3>
                {quiz.questions.map((question, index) => {
                  const userAnswer = userAnswers[index];
                  const isCorrect = userAnswer === question.answer;
                  
                  return (
                    <div key={index} className={`mb-4 p-3 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
                      <div className="flex items-start gap-2 mb-2">
                        <span className={`mt-0.5 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                          {isCorrect ? '✓' : '✗'}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{index + 1}. {question.question}</p>
                          <p className="text-sm text-gray-600 mt-1">
                            Sizin cevabınız: <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                              {userAnswer !== undefined ? question.options[userAnswer] : 'Boş'}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-700 mt-1">
                              Doğru cevap: {question.options[question.answer]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="border-2 border-finanqa-green-1 text-finanqa-green-1 hover:bg-finanqa-green-1 hover:text-white px-6 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>↻</span>
                  Bu Quiz'i Tekrar Çöz
                </button>
                <Link href="/academy/quizzes">
                  <button className="bg-finanqa-green-1 hover:bg-finanqa-green-2 text-white px-6 py-2 rounded-lg transition-colors w-full sm:w-auto">
                    Diğer Quizlere Göz At
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
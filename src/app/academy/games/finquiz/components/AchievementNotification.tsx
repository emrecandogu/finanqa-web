"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { ACHIEVEMENTS } from '../utils/stats';

interface AchievementNotificationProps {
  achievements: string[];
  onClose: () => void;
}

export default function AchievementNotification({ achievements, onClose }: AchievementNotificationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 700);
  };

  useEffect(() => {
    if (achievements.length === 0) return;

    const timer = setTimeout(() => {
      if (currentIndex < achievements.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsVisible(false);
        setTimeout(onClose, 500);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, achievements.length, onClose]);

  if (achievements.length === 0) return null;

  const currentAchievement = ACHIEVEMENTS[achievements[currentIndex] as keyof typeof ACHIEVEMENTS];
  if (!currentAchievement) return null;

  return (
    <div className={`fixed top-4 right-4 left-4 md:left-auto z-50 transition-all duration-700 ${
      isVisible 
        ? 'animate-in slide-in-from-right-full opacity-100 translate-x-0' 
        : 'animate-out slide-out-to-right-full opacity-0 translate-x-full'
    }`}>
      <Card className="border-2 border-green-500 bg-gradient-to-r from-green-500 to-green-600 text-white shadow-2xl max-w-sm mx-auto md:mx-0">
        <CardContent className="p-5 relative">
          <Button
            onClick={handleClose}
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 h-6 w-6 p-0 text-white hover:bg-green-400/20 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-start gap-4 pr-8">
            <div className="text-4xl flex-shrink-0 animate-bounce">
              {currentAchievement.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-xl mb-1 text-white">🎉 Başarım Kazandın!</p>
              <p className="font-semibold text-lg text-white mb-1">{currentAchievement.title}</p>
              <p className="text-sm text-green-100 leading-relaxed">{currentAchievement.description}</p>
            </div>
          </div>
          {achievements.length > 1 && (
            <div className="mt-3 pt-2 border-t border-green-400/30">
              <div className="flex justify-between items-center text-xs text-green-100">
                <span>Başarım {currentIndex + 1} / {achievements.length}</span>
                <div className="flex gap-1">
                  {achievements.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentIndex ? 'bg-white' : 'bg-green-300/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 
'use client';

import React from 'react';
import Image from 'next/image';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Shield, TrendingUp, GraduationCap, BarChart3, CheckCircle, Award, Users } from 'lucide-react';

const features = [
  {
    title: 'AI Destekli Finansal Analiz',
    description: 'Gelişmiş makine öğrenimi algoritmaları ile %87 doğruluk oranında finansal öngörüler ve kişiselleştirilmiş yatırım önerileri.',
    icon: Brain,
    color: 'finanqa-green-1',
    borderColor: 'finanqa-green-1/20',
    metrics: ['%87 Doğruluk', '24/7 Analiz', '10K+ Veri'],
    screenContent: {
      type: 'dashboard',
      title: 'AI Analiz Dashboard',
      elements: [
        { type: 'chart', value: '87%', label: 'Doğruluk' },
        { type: 'trend', value: '+12.5%', label: 'Bu Ay' },
        { type: 'alert', value: '3', label: 'Öneri' }
      ]
    }
  },
  {
    title: 'Kurumsal Güvenlik Altyapısı',
    description: 'ISO 27001, PCI DSS sertifikalı altyapı. 256-bit SSL şifreleme ve çok faktörlü kimlik doğrulama ile bankacılık seviyesi güvenlik.',
    icon: Shield,
    color: 'finanqa-light-green',
    borderColor: 'finanqa-light-green/30',
    metrics: ['ISO 27001', 'PCI DSS', '256-bit SSL'],
    screenContent: {
      type: 'security',
      title: 'Güvenlik Durumu',
      elements: [
        { type: 'badge', value: 'ISO 27001', label: 'Aktif' },
        { type: 'badge', value: 'SSL', label: 'Şifreli' },
        { type: 'status', value: 'Güvenli', label: 'Durum' }
      ]
    }
  },
  {
    title: 'Akıllı Portföy Yönetimi',
    description: 'Otomatik risk analizi ve portföy optimizasyonu ile kullanıcılarımız ortalama %30 daha iyi performans elde ediyor.',
    icon: TrendingUp,
    color: 'finanqa-green-2',
    borderColor: 'finanqa-green-2/30',
    metrics: ['%30 Performans', 'Otomatik', 'Risk Analizi'],
    screenContent: {
      type: 'portfolio',
      title: 'Portföy Analizi',
      elements: [
        { type: 'pie', value: '65%', label: 'Hisse' },
        { type: 'pie', value: '25%', label: 'Tahvil' },
        { type: 'pie', value: '10%', label: 'Altın' }
      ]
    }
  },
  {
    title: 'Profesyonel Eğitim Platformu',
    description: 'CFA ve CFP sertifikalı uzmanlar tarafından hazırlanan 500+ interaktif eğitim içeriği ve sertifikalı programlar.',
    icon: GraduationCap,
    color: 'finanqa-green-1',
    borderColor: 'finanqa-green-1/20',
    metrics: ['500+ İçerik', 'CFA Onaylı', '15 Sertifika'],
    screenContent: {
      type: 'education',
      title: 'Eğitim Modülü',
      elements: [
        { type: 'progress', value: '75%', label: 'İlerleme' },
        { type: 'badge', value: 'CFA', label: 'Sertifika' },
        { type: 'count', value: '12', label: 'Tamamlanan' }
      ]
    }
  },
  {
    title: 'Gerçek Zamanlı İzleme',
    description: 'Anlık piyasa verileri, portföy performansı ve risk değerlendirmesi. Profesyonel dashboard ile tüm verileriniz tek ekranda.',
    icon: BarChart3,
    color: 'finanqa-light-green',
    borderColor: 'finanqa-light-green/30',
    metrics: ['Anlık Veri', 'Canlı Grafik', '7/24 İzleme'],
    screenContent: {
      type: 'analytics',
      title: 'Canlı Analytics',
      elements: [
        { type: 'line', value: '+5.2%', label: 'Günlük' },
        { type: 'bar', value: '₺125K', label: 'Toplam' },
        { type: 'indicator', value: 'Canlı', label: 'Durum' }
      ]
    }
  }
];

const ScreenContent = ({ content, isActive }: { content: any; isActive: boolean }) => {
  const renderElement = (element: any, index: number) => {
    const baseClasses = "text-xs";
    
    switch (element.type) {
      case 'chart':
        return (
          <div key={index} className="bg-finanqa-green-1/10 rounded p-2 text-center">
            <div className="text-lg font-bold text-finanqa-green-1">{element.value}</div>
            <div className={`${baseClasses} text-finanqa-green-1/70`}>{element.label}</div>
          </div>
        );
      case 'trend':
        return (
          <div key={index} className="bg-finanqa-light-green/10 rounded p-2 text-center">
            <div className="text-sm font-bold text-finanqa-green-1">{element.value}</div>
            <div className={`${baseClasses} text-finanqa-green-1/70`}>{element.label}</div>
          </div>
        );
      case 'badge':
        return (
          <div key={index} className="bg-finanqa-green-2/20 rounded-full px-2 py-1 text-center">
            <div className="text-xs font-bold text-finanqa-green-1">{element.value}</div>
            <div className="text-[10px] text-finanqa-green-1/70">{element.label}</div>
          </div>
        );
      case 'pie':
        return (
          <div key={index} className="flex items-center gap-1">
            <div className="w-2 h-2 bg-finanqa-green-1 rounded-full"></div>
            <div className="text-xs text-finanqa-green-1">{element.value} {element.label}</div>
          </div>
        );
      case 'progress':
        return (
          <div key={index} className="w-full">
            <div className="flex justify-between text-xs text-finanqa-green-1 mb-1">
              <span>{element.label}</span>
              <span>{element.value}</span>
            </div>
            <div className="w-full bg-finanqa-green-1/20 rounded-full h-1">
              <div className="bg-finanqa-green-1 h-1 rounded-full" style={{ width: element.value }}></div>
            </div>
          </div>
        );
      case 'line':
        return (
          <div key={index} className="bg-finanqa-light-green/10 rounded p-2">
            <div className="text-sm font-bold text-finanqa-green-1">{element.value}</div>
            <div className={`${baseClasses} text-finanqa-green-1/70`}>{element.label}</div>
            <div className="w-full h-4 mt-1 relative">
              <svg className="w-full h-full" viewBox="0 0 60 16">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-finanqa-green-1"
                  points="0,12 15,8 30,10 45,4 60,6"
                />
              </svg>
            </div>
          </div>
        );
      default:
        return (
          <div key={index} className="bg-finanqa-green-1/10 rounded p-2 text-center">
            <div className="text-sm font-bold text-finanqa-green-1">{element.value}</div>
            <div className={`${baseClasses} text-finanqa-green-1/70`}>{element.label}</div>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full flex flex-col p-3 space-y-2">
      <div className="text-center mb-2">
        <h4 className="text-xs font-bold text-finanqa-green-1">{content.title}</h4>
      </div>
      <div className="flex-1 space-y-2">
        {content.elements.map((element: any, index: number) => renderElement(element, index))}
      </div>
    </div>
  );
};

const DesktopFeatures = ({ activeIndex, setActiveIndex }: { activeIndex: number; setActiveIndex: (index: number) => void }) => {
  return (
    <div className="hidden lg:block">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto h-[85vh] max-h-[800px]">
        {/* Sol: Sadece Device Mockup */}
        <div className="flex justify-center items-center h-full">
          <div className="relative w-[320px] h-[640px] bg-white border-4 border-finanqa-green-1/20 rounded-3xl shadow-2xl overflow-hidden">
            {/* Device Top Bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[36px] bg-finanqa-green-1/10 rounded-b-2xl z-20 mt-2" />
            
            {/* Screen Content */}
            <div className="absolute left-0 top-10 w-full h-[calc(100%-5rem)] p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.4, type: 'spring' }}
                  className="w-full h-full bg-white border-2 border-finanqa-green-1/10 rounded-2xl shadow-lg overflow-hidden"
                >
                  <ScreenContent 
                    content={features[activeIndex].screenContent} 
                    isActive={true}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Device Bottom Bar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-2 rounded-full bg-finanqa-green-1/20" />
          </div>
        </div>

        {/* Sağ: Feature Navigation + Detail Panel + Stats */}
        <div className="flex flex-col h-full space-y-6">
          {/* Feature Navigation - Üst */}
          <div className="grid grid-cols-2 gap-3">
            {features.slice(0, 4).map((feature, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onFocus={() => setActiveIndex(idx)}
                className={`text-left p-4 rounded-xl transition-all duration-300 ${
                  activeIndex === idx
                    ? `bg-${feature.color} text-white shadow-lg scale-105`
                    : `bg-white border-2 border-${feature.borderColor} text-finanqa-green-1 hover:shadow-md hover:scale-102`
                }`}
                style={{ outline: 'none' }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeIndex === idx ? 'bg-white/20' : `bg-${feature.color}`
                  }`}>
                    {React.createElement(feature.icon, { 
                      className: `w-5 h-5 ${activeIndex === idx ? 'text-white' : 'text-white'}` 
                    })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm mb-1 leading-tight">{feature.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {feature.metrics.slice(0, 2).map((metric, metricIdx) => (
                        <span
                          key={metricIdx}
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            activeIndex === idx 
                              ? 'bg-white/20 text-white' 
                              : 'bg-finanqa-green-1/10 text-finanqa-green-1'
                          }`}
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* 5. Feature - Tek satır */}
          <button
            onMouseEnter={() => setActiveIndex(4)}
            onFocus={() => setActiveIndex(4)}
            className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
              activeIndex === 4
                ? `bg-${features[4].color} text-white shadow-lg scale-105`
                : `bg-white border-2 border-${features[4].borderColor} text-finanqa-green-1 hover:shadow-md hover:scale-102`
            }`}
            style={{ outline: 'none' }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                activeIndex === 4 ? 'bg-white/20' : `bg-${features[4].color}`
              }`}>
                {React.createElement(features[4].icon, { 
                  className: `w-5 h-5 ${activeIndex === 4 ? 'text-white' : 'text-white'}` 
                })}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm mb-1 leading-tight">{features[4].title}</h3>
                <div className="flex flex-wrap gap-1">
                  {features[4].metrics.slice(0, 2).map((metric, metricIdx) => (
                    <span
                      key={metricIdx}
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        activeIndex === 4 
                          ? 'bg-white/20 text-white' 
                          : 'bg-finanqa-green-1/10 text-finanqa-green-1'
                      }`}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>

          {/* Ana Feature Detayları - Orta */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-gradient-to-br from-${features[activeIndex].color}/10 to-${features[activeIndex].color}/5 border-2 border-${features[activeIndex].borderColor} rounded-2xl p-6 flex-1`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 bg-${features[activeIndex].color} rounded-xl flex items-center justify-center`}>
                {React.createElement(features[activeIndex].icon, { className: "w-7 h-7 text-white" })}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-finanqa-green-1 mb-2">{features[activeIndex].title}</h3>
                <div className="flex flex-wrap gap-2">
                  {features[activeIndex].metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className={`text-sm px-3 py-1 rounded-full bg-${features[activeIndex].color}/20 text-finanqa-green-1 font-medium`}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-base text-finanqa-green-1/80 leading-relaxed mb-4">
              {features[activeIndex].description}
            </p>

            {/* Feature Benefits */}
            <div className="space-y-2">
              <h4 className="text-base font-semibold text-finanqa-green-1 mb-3">Temel Avantajlar:</h4>
              {features[activeIndex].metrics.map((metric, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-finanqa-light-green flex-shrink-0" />
                  <span className="text-sm text-finanqa-green-1 font-medium">{metric}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* İstatistik Kartları - Alt */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border-2 border-finanqa-green-1/10 rounded-xl p-4 shadow-lg text-center">
              <Users className="w-6 h-6 text-finanqa-green-1 mx-auto mb-2" />
              <div className="text-xl font-bold text-finanqa-green-1">10K+</div>
              <div className="text-sm text-finanqa-green-1/70">Aktif Kullanıcı</div>
            </div>
            
            <div className="bg-white border-2 border-finanqa-light-green/20 rounded-xl p-4 shadow-lg text-center">
              <Award className="w-6 h-6 text-finanqa-green-1 mx-auto mb-2" />
              <div className="text-xl font-bold text-finanqa-green-1">%98</div>
              <div className="text-sm text-finanqa-green-1/70">Memnuniyet Oranı</div>
            </div>

            <div className="bg-white border-2 border-finanqa-green-2/20 rounded-xl p-4 shadow-lg text-center">
              <BarChart3 className="w-6 h-6 text-finanqa-green-1 mx-auto mb-2" />
              <div className="text-xl font-bold text-finanqa-green-1">%87</div>
              <div className="text-sm text-finanqa-green-1/70">Doğruluk Oranı</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileFeatures = ({ currentIndex, setCurrentIndex }: { currentIndex: number; setCurrentIndex: (index: number) => void }) => {
  return (
    <div className="lg:hidden">
      {/* Kompakt Layout: Device + Aktif Kart Yan Yana */}
      <div className="flex flex-col gap-4">
        {/* Üst: Device Mockup + Aktif Feature Bilgisi */}
        <div className="flex gap-4 items-start">
          {/* Sol: Device Mockup - Küçültülmüş */}
          <div className="flex-shrink-0">
            <div className="relative w-[180px] h-[360px] bg-white border-3 border-finanqa-green-1/20 rounded-2xl shadow-xl overflow-hidden">
              {/* Device Top Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-[16px] bg-finanqa-green-1/10 rounded-b-lg z-20 mt-1" />
              
              {/* Screen Content */}
              <div className="absolute left-0 top-4 w-full h-[calc(100%-2rem)] p-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -15 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="w-full h-full bg-white border-2 border-finanqa-green-1/10 rounded-xl shadow-md overflow-hidden"
                  >
                    <ScreenContent 
                      content={features[currentIndex].screenContent} 
                      isActive={true}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Device Bottom Bar */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-finanqa-green-1/20" />
            </div>
          </div>

          {/* Sağ: Aktif Feature Detayları */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`bg-${features[currentIndex].color} text-white rounded-2xl p-4 shadow-lg`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    {React.createElement(features[currentIndex].icon, { className: "w-4 h-4 text-white" })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm mb-1 leading-tight">{features[currentIndex].title}</h3>
                  </div>
                </div>
                <p className="text-white/90 text-xs leading-relaxed mb-3">
                  {features[currentIndex].description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {features[currentIndex].metrics.map((metric, metricIdx) => (
                    <span
                      key={metricIdx}
                      className="text-[10px] px-2 py-1 rounded-full bg-white/20 text-white"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Alt: Kompakt Feature Navigation - Horizontal Scroll */}
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max px-1">
            {features.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 min-w-[140px] ${
                  currentIndex === idx
                    ? `bg-${feature.color} text-white shadow-lg scale-105`
                    : `bg-white border-2 border-${feature.borderColor} text-finanqa-green-1 hover:shadow-md`
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${
                    currentIndex === idx ? 'bg-white/20' : `bg-${feature.color}`
                  }`}>
                    {React.createElement(feature.icon, { className: "w-3 h-3 text-white" })}
                  </div>
                  <div className="text-left min-w-0">
                    <div className="font-semibold text-xs leading-tight truncate">
                      {feature.title}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <div className="flex gap-1">
            {features.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx 
                    ? `bg-${features[currentIndex].color}` 
                    : 'bg-finanqa-green-1/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useLayoutEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section className="section-padding bg-white" id="features">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-finanqa-green-1">
            Profesyonel Finansal Teknoloji Çözümleri
          </h2>
          <p className="text-base lg:text-lg text-finanqa-green-1/80 max-w-3xl mx-auto">
            Kurumsal düzeyde güvenlik, AI destekli analiz ve profesyonel eğitim platformu ile finansal hedeflerinize ulaşın.
          </p>
        </div>

        {/* Mobile Features */}
        <MobileFeatures currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />

        {/* Desktop Features */}
        <DesktopFeatures activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>
    </section>
  );
}

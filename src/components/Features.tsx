'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: 'Akıllı Bütçeleme',
    description: 'Harcama alışkanlıklarınızı öğrenen yapay zeka destekli bütçeleme araçları ile daha fazla birikim yapın.',
    image: '/images/feature1.svg',
    alt: 'Akıllı bütçeleme görseli',
    icon: '💰',
    gradient: 'from-finanqa-green-1 to-finanqa-green-1/90'
  },
  {
    title: 'Yapay Zeka Önerileri',
    description: 'Hedeflerinize ve mevcut finansal durumunuza göre kişiselleştirilmiş finansal tavsiyeler alın.',
    image: '/images/feature2.svg',
    alt: 'Yapay zeka öneri sistemi görseli',
    icon: '🤖',
    gradient: 'from-finanqa-light-green to-finanqa-green-2'
  },
  {
    title: 'Kullanıcı Dostu Arayüz',
    description: 'Finanslarınızı yönetmeyi sezgisel ve stressiz hale getiren sade tasarım.',
    image: '/images/feature3.svg',
    alt: 'Mobil arayüz görseli',
    icon: '📱',
    gradient: 'from-finanqa-green-1/90 to-finanqa-light-green'
  },
  {
    title: 'Finansal Eğitim',
    description: 'Kişiselleştirilmiş öğrenme yolları ve interaktif içeriklerle finansal okuryazarlığınızı geliştirin.',
    image: '/images/feature4.svg',
    alt: 'Finansal eğitim görseli',
    icon: '📚',
    gradient: 'from-finanqa-green-2 to-finanqa-light-green'
  },
  {
    title: 'Güvenli Altyapı',
    description: 'En son güvenlik standartlarıyla verileriniz her zaman güvende ve özel kalır.',
    image: '/images/feature5.svg',
    alt: 'Güvenlik görseli',
    icon: '🔒',
    gradient: 'from-finanqa-green-1 to-finanqa-green-2'
  }
];

const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ repeat: Infinity, duration: 1.5 }}
    className="flex items-center justify-center gap-2 text-white/80 mt-4"
  >
    <span className="text-sm">Kaydır</span>
    <motion.span
      animate={{ x: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      →
    </motion.span>
  </motion.div>
);

const LG_FEATURE_HEIGHT = 700;

const useLockBodyScroll = (locked: boolean) => {
  useLayoutEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = original; };
  }, [locked]);
};

const SCROLL_ZONE_WIDTH = 1024;

const DesktopFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Statik başlık menüsü ve içerik alanı
  return (
    <div ref={sectionRef} className="w-full flex items-center justify-center bg-white py-20">
      <div className="w-full max-w-[1200px] flex flex-row items-center justify-center gap-12 px-8 py-8 min-h-[700px]">
        {/* Sol: Açıklama, dikeyde ortalı */}
        <div className="flex flex-col items-center justify-center min-w-[280px] flex-1 h-full">
          <div className="max-w-xs mx-auto text-center flex flex-col items-center justify-center h-full">
            <div className="text-5xl mb-6">{features[activeIndex].icon}</div>
            <h3 className="text-3xl font-bold mb-4 text-finanqa-green-1">
              {features[activeIndex].title}
            </h3>
            <p className="text-lg text-finanqa-green-1/80 leading-relaxed">
              {features[activeIndex].description}
            </p>
          </div>
        </div>
        {/* Orta: Mockup ekranı, tam ortada */}
        <div className="flex flex-col items-center justify-center min-w-[340px] flex-1">
          <div className="relative w-[320px] h-[640px] bg-black rounded-[48px] shadow-2xl border-[6px] border-black flex flex-col items-center mx-auto">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[32px] bg-black rounded-b-[18px] z-20" style={{ marginTop: 8 }}></div>
            {/* Screen */}
            <div className="absolute left-0 top-0 w-full h-full rounded-[42px] overflow-hidden bg-white flex flex-col" style={{ paddingTop: 48 }}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.98 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className={`w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${features[activeIndex].gradient} relative`}
              >
                {/* Example: AppBar */}
                <div className="w-full flex items-center justify-between px-6 pt-2 pb-4">
                  <div className="text-2xl font-bold text-white/90">{features[activeIndex].icon}</div>
                  <div className="text-xs text-white/60">Finanqa</div>
                </div>
                {/* Main content */}
                <div className="flex-1 flex flex-col items-center justify-center px-6">
                  <h3 className="text-2xl font-bold mb-3 text-white text-center drop-shadow-lg">
                    {features[activeIndex].title}
                  </h3>
                  <p className="text-base text-white/90 leading-relaxed text-center max-w-[220px]">
                    {features[activeIndex].description}
                  </p>
                </div>
                {/* Example: Bottom bar */}
                <div className="w-full flex items-center justify-center pb-6">
                  <div className="w-16 h-2 rounded-full bg-white/30" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Sağ: Dikey başlık menüsü, dikeyde ortalı */}
        <div className="flex flex-col gap-3 min-w-[220px] items-center justify-center h-full">
          <div className="flex flex-col gap-3 justify-center h-full">
            {features.map((feature, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onFocus={() => setActiveIndex(idx)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl border transition-all duration-200 text-left cursor-pointer w-56
                  ${activeIndex === idx
                    ? 'bg-finanqa-green-1 text-white border-finanqa-green-1 shadow-lg'
                    : 'bg-white text-finanqa-green-1 border-finanqa-green-1/20 hover:bg-finanqa-green-1/10'}
                `}
                style={{ outline: 'none' }}
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="font-semibold text-base">{feature.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  let scrollTimeout: NodeJS.Timeout;
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    if (isProgrammaticScroll.current) return; // Programatik scroll sırasında state güncellenmesin
    const container = scrollContainerRef.current;
    const cardWidth = container.clientWidth;
    const scrollPosition = container.scrollLeft;
    const newIndex = Math.round(scrollPosition / cardWidth);
    setCurrentIndex(newIndex);
    // Scroll bitince en yakın karta hizala
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      container.scrollTo({ left: cardWidth * newIndex, behavior: 'smooth' });
    }, 120);
  };

  const handleTabClick = (idx: number) => {
    setCurrentIndex(idx);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.clientWidth;
      isProgrammaticScroll.current = true;
      container.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 400); // Scroll tamamlanınca tekrar false yap
    }
  };

  const MobileFeatures = () => (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
      {/* Modern iPhone-style Mockup */}
      <div className="relative w-full" style={{ aspectRatio: '320/640', maxWidth: 320 }}>
        {/* Phone Frame */}
        <div className="absolute inset-0 bg-black rounded-[48px] p-2 shadow-2xl border-[6px] border-black flex flex-col items-center">
          {/* Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[32px] bg-black rounded-b-[18px] z-20" style={{ marginTop: 8 }}></div>
          {/* Screen */}
          <div className="absolute left-0 top-0 w-full h-full rounded-[42px] overflow-hidden bg-white flex flex-col" style={{ paddingTop: 48 }}>
            {/* Sadece seçili kartı göster, geçişte animasyon ekle */}
            <div className="w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.96, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -24 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className={`w-full h-[calc(100%-32px)] bg-gradient-to-br ${features[currentIndex].gradient} flex flex-col items-center justify-center relative overflow-hidden px-6 py-8`}
                >
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
                  </div>
                  <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                    <div className="text-6xl mb-6">{features[currentIndex].icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-white leading-tight">
                      {features[currentIndex].title}
                    </h3>
                    <p className="text-base text-white/90 leading-relaxed max-w-[220px] mx-auto">
                      {features[currentIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Alt: Yatay ikonlar */}
            <div className="flex flex-row items-center justify-center gap-2 mt-4 w-full overflow-x-auto px-2">
              {features.map((feature, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`flex flex-col items-center px-3 py-2 rounded-lg transition-all duration-200 min-w-[44px] focus:outline-none
                    ${currentIndex === idx ? 'bg-finanqa-green-1 text-white shadow-md scale-110' : 'bg-white text-finanqa-green-1 border border-finanqa-green-1/20 hover:bg-finanqa-green-1/10'}
                  `}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2">
        <span className="flex items-center gap-2 text-finanqa-green-1/80 text-sm font-medium">
          <span>Özellikler arasında geçiş yapmak için ikonlara tıkla 👉</span>
        </span>
      </div>
    </div>
  );

  return (
    <section className="section-padding bg-white" id="features">
      <div className="container-width">
        {/* Masaüstü: Başlık ve açıklama ortada, alt içerik başlıkla hizalı ve sola kayık */}
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center w-full">
          <div className="w-full max-w-5xl flex flex-col items-center justify-center mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <h2 className="text-4xl font-bold mb-2">Finanqa Mobil Özellikleri</h2>
              <p className="text-lg text-finanqa-green-1/80 max-w-2xl mx-auto">
                Finansal yolculuğunuzu dönüştürecek araçları keşfedin ve hedeflerinize ulaşma yolunda güçlü adımlar atın.
              </p>
            </motion.div>
            <div className="w-full flex flex-row items-start justify-start">
              <DesktopFeatures />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <MobileFeatures />
        </div>
      </div>
    </section>
  );
}

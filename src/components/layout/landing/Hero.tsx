'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Landmark, TrendingUp, PiggyBank, Wallet, CreditCard, LucideIcon, Shield, Users, Award } from 'lucide-react';

function FlyingIcon({ icon: Icon, color, size, initial, speed, containerRef }: {
  icon: LucideIcon;
  color: string;
  size: number;
  initial: { x: number; y: number };
  speed: { x: number; y: number };
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const [pos, setPos] = useState<{ x: number; y: number }>(initial);
  const [dir, setDir] = useState<{ x: number; y: number }>({ x: speed.x, y: speed.y });
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let raf: number;
    const animate = () => {
      setPos(prev => {
        let { x, y } = prev;
        let { x: dx, y: dy } = dir;
        const w = size;
        const h = size;
        let boundW = window.innerWidth;
        let boundH = window.innerHeight * 0.8;
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          boundW = rect.width;
          boundH = rect.height;
        }
        // Kenara çarpınca yön değiştir
        if (x + w >= boundW || x <= 0) dx = -dx;
        if (y + h >= boundH || y <= 0) dy = -dy;
        setDir({ x: dx, y: dy });
        return { x: x + dx, y: y + dy };
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [dir.x, dir.y, size, containerRef]);

  // Hero section'ın sol üstüne göre konumlandır
  let left = pos.x;
  let top = pos.y;
  if (containerRef.current) {
    const rect = containerRef.current.getBoundingClientRect();
    left = rect.left + pos.x;
    top = rect.top + pos.y;
  }

  return (
    <span
      ref={iconRef}
      style={{
        position: 'fixed',
        left,
        top,
        zIndex: 1,
        opacity: 0.13,
        pointerEvents: 'none',
        color,
      }}
      aria-hidden
    >
      <Icon size={size} strokeWidth={1.5} />
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  // Sadece masaüstünde uçan ikonlar
  const flyingIcons = [
    { icon: Landmark, color: '#17f187', size: 60, initial: { x: 100, y: 120 }, speed: { x: 0.5, y: 0.3 } },
    { icon: TrendingUp, color: '#005652', size: 48, initial: { x: 600, y: 200 }, speed: { x: -0.4, y: 0.5 } },
    { icon: PiggyBank, color: '#c8f567', size: 54, initial: { x: 900, y: 80 }, speed: { x: 0.3, y: -0.4 } },
    { icon: Wallet, color: '#005652', size: 44, initial: { x: 400, y: 400 }, speed: { x: -0.45, y: -0.35 } },
    { icon: CreditCard, color: '#17f187', size: 50, initial: { x: 1100, y: 300 }, speed: { x: 0.35, y: -0.45 } },
  ];

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-0 lg:pt-6 px-4">
      {/* Masaüstü için uçan ikonlar */}
      <div className="hidden lg:block pointer-events-none select-none">
        {flyingIcons.map((props, i) => (
          <FlyingIcon key={i} {...props} containerRef={heroRef} />
        ))}
      </div>
      <div className="container-width section-padding relative z-10 px-0">
        {/* Desktop: Heading always at the top */}
        <h1 className="hidden lg:block text-6xl font-bold leading-tight text-center w-full mb-2 text-finanqa-green-1">
          Türkiye'nin Lider Fintech Platformu
        </h1>
        
        {/* Trust indicators - Desktop only */}
        <div className="hidden lg:flex items-center justify-center gap-8 mb-6 text-finanqa-green-1/70">
          <div className="flex items-center gap-2">
            <Users size={20} />
            <span className="text-sm font-medium">10,000+ Aktif Kullanıcı</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={20} />
            <span className="text-sm font-medium">Bankacılık Seviyesi Güvenlik</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={20} />
            <span className="text-sm font-medium">ISO 27001 Sertifikalı</span>
          </div>
        </div>

        {/* Mobile: Grouped hero content */}
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto rounded-b-2xl rounded-t-xl shadow-lg bg-white/90 p-6 gap-5 mt-0 lg:bg-transparent lg:shadow-none lg:p-0 lg:max-w-none lg:mx-0 lg:rounded-2xl lg:hidden lg:gap-0 lg:mt-0">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-center mb-0 text-finanqa-green-1">
            Türkiye'nin Lider Fintech Platformu
          </h1>
          
          {/* Trust badges - Mobile */}
          <div className="flex items-center justify-center gap-3 text-xs text-finanqa-green-1/70">
            <span className="flex items-center gap-1">
              <Users size={14} />
              10K+ Kullanıcı
            </span>
            <span className="flex items-center gap-1">
              <Shield size={14} />
              Güvenli
            </span>
            <span className="flex items-center gap-1">
              <Award size={14} />
              Sertifikalı
            </span>
          </div>
          
          {/* Mascot */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 mx-auto animate-fade-in">
            <Image
              src="/images/anqa/anqa_selamveren_transparan.png"
              alt="Anqa - Finanqa AI destekli finansal danışman"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Description */}
          <p className="text-base sm:text-lg text-finanqa-green-1/80 text-center leading-relaxed mb-0">
            AI destekli finansal danışmanlık, akıllı bütçe yönetimi ve profesyonel eğitim programları ile finansal hedeflerinize ulaşın.
          </p>
          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
            <button 
              className="btn-primary w-full"
              onClick={() => {
                document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hizmetlerimizi Keşfedin
            </button>
            <button 
              className="btn-secondary w-full"
              onClick={() => {
                document.querySelector('#mobile-app')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Mobil Uygulamayı İncele
            </button>
          </div>
        </div>
        
        {/* Desktop: Two column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="flex flex-col items-start justify-center h-full">
            <h2 className="text-3xl font-semibold text-finanqa-green-1 w-full text-center mb-4">
              Profesyonel Finansal Danışmanlık
            </h2>
            <p className="text-lg text-finanqa-green-1/80 leading-relaxed mb-6 w-full text-center">
              AI destekli finansal danışmanlık, akıllı bütçe yönetimi ve profesyonel eğitim programları ile finansal hedeflerinize ulaşın.
            </p>
            
            {/* Value propositions */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-finanqa-green-1">₺50M+</div>
                <div className="text-sm text-finanqa-green-1/70">İşlem Hacmi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-finanqa-green-1">87%</div>
                <div className="text-sm text-finanqa-green-1/70">AI Doğruluk Oranı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-finanqa-green-1">30%</div>
                <div className="text-sm text-finanqa-green-1/70">Ortalama Tasarruf</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-finanqa-green-1">24/7</div>
                <div className="text-sm text-finanqa-green-1/70">Uzman Desteği</div>
              </div>
            </div>
            
            <div className="flex flex-row gap-4 w-full justify-center">
              <button 
                className="btn-primary"
                onClick={() => {
                  document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hizmetlerimizi Keşfedin
              </button>
              <button 
                className="btn-secondary"
                onClick={() => {
                  document.querySelector('#mobile-app')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Mobil Uygulamayı İncele
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="relative w-[500px] h-[500px] animate-fade-in">
              <Image
                src="/images/anqa/anqa_selamveren_transparan.png"
                alt="Anqa - Finanqa AI destekli finansal danışman"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Arka plan geçiş efekti */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-finanqa-light-green/5 to-white/0 pointer-events-none" />
      {/* Mascot fade-in animation */}
      <style jsx>{`
        @media (max-width: 1023px) {
          .animate-fade-in {
            animation: fadeIn 1.1s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(32px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </section>
  );
}

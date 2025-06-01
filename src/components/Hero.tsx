'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave, faChartLine, faPiggyBank, faWallet, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

function FlyingIcon({ icon, color, size, initial, speed, containerRef }: {
  icon: IconDefinition;
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
        fontSize: size,
        transition: 'opacity 0.3s',
      }}
      aria-hidden
    >
      <FontAwesomeIcon icon={icon} />
    </span>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  // Sadece masaüstünde uçan ikonlar
  const flyingIcons = [
    { icon: faMoneyBillWave, color: '#17f187', size: 60, initial: { x: 100, y: 120 }, speed: { x: 0.5, y: 0.3 } },
    { icon: faChartLine, color: '#005652', size: 48, initial: { x: 600, y: 200 }, speed: { x: -0.4, y: 0.5 } },
    { icon: faPiggyBank, color: '#c8f567', size: 54, initial: { x: 900, y: 80 }, speed: { x: 0.3, y: -0.4 } },
    { icon: faWallet, color: '#005652', size: 44, initial: { x: 400, y: 400 }, speed: { x: -0.45, y: -0.35 } },
    { icon: faCreditCard, color: '#17f187', size: 50, initial: { x: 1100, y: 300 }, speed: { x: 0.35, y: -0.45 } },
  ];

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center bg-finanqa-cream overflow-hidden pt-0 lg:pt-6 px-4">
      {/* Masaüstü için uçan ikonlar */}
      <div className="hidden lg:block pointer-events-none select-none">
        {flyingIcons.map((props, i) => (
          <FlyingIcon key={i} {...props} containerRef={heroRef} />
        ))}
      </div>
      <div className="container-width section-padding relative z-10 px-0">
        {/* Desktop: Heading always at the top */}
        <h1 className="hidden lg:block text-6xl font-bold leading-tight text-center w-full mb-2">
          Finansal Kontrolü Elinize Alın
        </h1>
        {/* Mobile: Grouped hero content */}
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto rounded-b-2xl rounded-t-xl shadow-lg bg-white/90 p-6 gap-5 mt-0 lg:bg-transparent lg:shadow-none lg:p-0 lg:max-w-none lg:mx-0 lg:rounded-2xl lg:hidden lg:gap-0 lg:mt-0">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-center mb-0">
            Finansal Kontrolü Elinize Alın
          </h1>
          {/* Mascot */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 mx-auto animate-fade-in">
            <Image
              src="/images/anqa/anqa_selamveren_transparan.png"
              alt="Anqa - Finanqa AI Mascot welcoming users"
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Description */}
          <p className="text-base sm:text-lg text-finanqa-green-1/80 text-center leading-relaxed mb-0">
            Finanqa, yapay zeka destekli kişisel finans danışmanınız olarak daha bilinçli kararlar almanıza ve hedeflerinize ulaşmanıza yardımcı olur.
          </p>
          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
            <button className="btn-primary w-full">Detayları İncele</button>
            <button className="btn-secondary w-full">Uygulamayı İndir</button>
          </div>
        </div>
        {/* Desktop: Two column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="flex flex-col items-start justify-center h-full">
            <h2 className="text-3xl font-semibold text-finanqa-green-1 w-full text-center mb-6">
              Finanqa ile Akıllı Finansal Gelecek
            </h2>
            <p className="text-lg text-finanqa-green-1/80 leading-relaxed mb-8 w-full text-center">
              Finanqa, yapay zeka destekli kişisel finans danışmanınız olarak daha bilinçli kararlar almanıza ve hedeflerinize ulaşmanıza yardımcı olur.
            </p>
            <div className="flex flex-row gap-4 w-full justify-center">
              <button className="btn-primary">Detayları İncele</button>
              <button className="btn-secondary">Uygulamayı İndir</button>
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <div className="relative w-[500px] h-[500px] animate-fade-in">
              <Image
                src="/images/anqa/anqa_selamveren_transparan.png"
                alt="Anqa - Finanqa AI Mascot welcoming users"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Arka plan geçiş efekti */}
      <div className="absolute inset-0 bg-gradient-to-b from-finanqa-cream/0 via-finanqa-cream to-finanqa-cream/0 pointer-events-none" />
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

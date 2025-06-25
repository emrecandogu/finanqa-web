'use client';

import Image from 'next/image';
import { Search, Target, BookOpen, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-white section-padding pb-8 lg:pb-32" id="about">
      <div className="container-width">
        {/* Mobile Card-Like Layout */}
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto rounded-2xl shadow-lg bg-white/90 p-6 gap-6 mt-0 lg:hidden">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 leading-snug text-finanqa-green-1">Finanqa Metodolojisi</h2>
          {/* Mascot */}
          <div className="flex justify-center mb-2">
            <div className="relative w-48 h-48">
              <Image
                src="/images/anqa/anqa_dusunen_transparan.png"
                alt="Anqa - Profesyonel finansal metodoloji uzmanı"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          {/* Description */}
          <p className="text-base sm:text-lg text-finanqa-green-1 text-center leading-relaxed mb-2 font-medium">
            Uzman ekibimizin geliştirdiği 4 adımlı metodoloji ile finansal hedeflerinize emin adımlarla ulaşın.
          </p>
          {/* Feature Cards: Kompakt ve okunabilir kartlar */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 py-2 w-full scrollbar-hide lg:hidden" style={{ scrollSnapType: 'x mandatory' }}>
            <div className="min-w-[75vw] max-w-[80vw] bg-white border-2 border-finanqa-green-1/20 rounded-2xl shadow-md p-5 snap-center relative overflow-hidden">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-finanqa-green-1 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 bg-finanqa-green-1 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">1</span>
                    </span>
                    <h3 className="text-lg font-bold text-finanqa-green-1">Finansal Durum Analizi</h3>
                  </div>
                  <p className="text-sm text-finanqa-green-1/80 leading-relaxed">
                    Anqa AI ile mevcut durumunuzu analiz ederek kişiselleştirilmiş profil oluşturuyoruz
                  </p>
                </div>
              </div>
            </div>
            
            <div className="min-w-[75vw] max-w-[80vw] bg-white border-2 border-finanqa-light-green/30 rounded-2xl shadow-md p-5 snap-center relative overflow-hidden">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-finanqa-light-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-finanqa-green-1" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 bg-finanqa-light-green rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-finanqa-green-1">2</span>
                    </span>
                    <h3 className="text-lg font-bold text-finanqa-green-1">Hedef Belirleme</h3>
                  </div>
                  <p className="text-sm text-finanqa-green-1/80 leading-relaxed">
                    Finansal hedeflerinizi belirleyip gerçekçi zaman çizelgesi oluşturuyoruz
                  </p>
                </div>
              </div>
            </div>
            
            <div className="min-w-[75vw] max-w-[80vw] bg-white border-2 border-finanqa-green-2/30 rounded-2xl shadow-md p-5 snap-center relative overflow-hidden">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-finanqa-green-2 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-finanqa-green-1" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 bg-finanqa-green-2 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-finanqa-green-1">3</span>
                    </span>
                    <h3 className="text-lg font-bold text-finanqa-green-1">Eğitim & Uygulama</h3>
                  </div>
                  <p className="text-sm text-finanqa-green-1/80 leading-relaxed">
                    Uzman destekli eğitimlerle bilgi edinin ve pratik araçlarla uygulayın
                  </p>
                </div>
              </div>
            </div>
            
            <div className="min-w-[75vw] max-w-[80vw] bg-white border-2 border-finanqa-green-1/20 rounded-2xl shadow-md p-5 snap-center relative overflow-hidden">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-finanqa-green-1 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 bg-finanqa-green-1 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">4</span>
                    </span>
                    <h3 className="text-lg font-bold text-finanqa-green-1">İzleme & Optimizasyon</h3>
                  </div>
                  <p className="text-sm text-finanqa-green-1/80 leading-relaxed">
                    İlerlemenizi sürekli takip edip stratejinizi optimize ediyoruz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Desktop Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-finanqa-green-1 mb-3">
              Finanqa Metodolojisi
            </h2>
            <p className="text-lg text-finanqa-green-1/80 max-w-3xl mx-auto">
              Uzman ekibimizin geliştirdiği 4 adımlı metodoloji ile finansal hedeflerinize emin adımlarla ulaşın
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start mt-6">
          {/* Sol Taraf - Özellikler */}
          <div className="flex flex-col gap-4">
            <div className="bg-white border-2 border-finanqa-green-1/20 py-4 px-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-row items-center gap-4">
              <div className="w-12 h-12 bg-finanqa-green-1 rounded-xl flex items-center justify-center flex-shrink-0">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 bg-finanqa-green-1 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">1</span>
                  </span>
                  <h3 className="text-xl font-bold text-finanqa-green-1 leading-tight">Finansal Durum Analizi</h3>
                </div>
                <p className="text-finanqa-green-1/80 text-base leading-relaxed">Anqa AI ile mevcut durumunuzu analiz ederek kişiselleştirilmiş profil oluşturuyoruz</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-finanqa-light-green/30 py-4 px-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-row items-center gap-4">
              <div className="w-12 h-12 bg-finanqa-light-green rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-finanqa-green-1" />
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 bg-finanqa-light-green rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-finanqa-green-1">2</span>
                  </span>
                  <h3 className="text-xl font-bold text-finanqa-green-1 leading-tight">Hedef Belirleme</h3>
                </div>
                <p className="text-finanqa-green-1/80 text-base leading-relaxed">Finansal hedeflerinizi belirleyip gerçekçi zaman çizelgesi oluşturuyoruz</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-finanqa-green-2/30 py-4 px-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-row items-center gap-4">
              <div className="w-12 h-12 bg-finanqa-green-2 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-finanqa-green-1" />
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 bg-finanqa-green-2 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-finanqa-green-1">3</span>
                  </span>
                  <h3 className="text-xl font-bold text-finanqa-green-1 leading-tight">Eğitim & Uygulama</h3>
                </div>
                <p className="text-finanqa-green-1/80 text-base leading-relaxed">Uzman destekli eğitimlerle bilgi edinin ve pratik araçlarla uygulayın</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-finanqa-green-1/20 py-4 px-5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-row items-center gap-4">
              <div className="w-12 h-12 bg-finanqa-green-1 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 bg-finanqa-green-1 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">4</span>
                  </span>
                  <h3 className="text-xl font-bold text-finanqa-green-1 leading-tight">İzleme & Optimizasyon</h3>
                </div>
                <p className="text-finanqa-green-1/80 text-base leading-relaxed">İlerlemenizi sürekli takip edip stratejinizi optimize ediyoruz</p>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Mascot (desktop only) */}
          <div className="hidden lg:flex justify-center items-start">
            <div className="relative w-[380px] h-[380px]">
              <Image
                src="/images/anqa/anqa_dusunen_transparan.png"
                alt="Anqa - Profesyonel finansal metodoloji uzmanı"
                width={380}
                height={380}
                className="object-contain mx-auto"
                priority
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
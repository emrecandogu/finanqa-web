import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Award, Users, TrendingUp, BookOpen, Brain, Target, Gamepad2, Trophy, Zap, ArrowRight } from 'lucide-react';

export default function LearnSection() {
  return (
    <section className="section-padding bg-white" id="learn">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-finanqa-green-1 mb-4">
            Finanqa Akademi - Eğlenceli Öğrenme Deneyimi
          </h2>
          <p className="text-base lg:text-lg text-finanqa-green-1/80 max-w-3xl mx-auto mb-6">
            CFA ve CFP uzmanları tarafından hazırlanan profesyonel eğitim içerikleri, interaktif oyunlar ve AI destekli kişiselleştirilmiş öğrenme deneyimi.
          </p>
          
          {/* Success metrics */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-finanqa-green-1/70">
            <div className="flex items-center gap-2">
              <Users size={16} />
              <span>5,000+ Aktif Öğrenci</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={16} />
              <span>CFA & CFP Onaylı</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp size={16} />
              <span>%92 Başarı Oranı</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy size={16} />
              <span>50+ Oyun & Quiz</span>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mascot */}
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48">
              <Image
                src="/images/anqa/anqa_mobil_transparan.png"
                alt="Anqa - Profesyonel finansal eğitim asistanı"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Feature Cards Grid - Mobile */}
          <div className="grid grid-cols-1 gap-4 mb-8">
            {/* Uzman İçerikleri */}
            <div className="bg-white border-2 border-finanqa-green-1/20 rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-finanqa-green-1 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-finanqa-green-1 mb-1">Uzman İçerikleri</h3>
                  <p className="text-sm text-finanqa-green-1/80 mb-2">CFA & CFP uzmanları tarafından hazırlanan profesyonel içerikler</p>
                  <div className="inline-flex items-center gap-1 bg-finanqa-light-green/20 px-2 py-1 rounded-lg">
                    <TrendingUp className="w-3 h-3 text-finanqa-green-1" />
                    <span className="text-xs font-medium text-finanqa-green-1">200+ Makale</span>
                  </div>
                </div>
              </div>
            </div>

            {/* İnteraktif Oyunlar */}
            <div className="bg-white border-2 border-finanqa-light-green/30 rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-finanqa-light-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gamepad2 className="w-6 h-6 text-finanqa-green-1" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-finanqa-green-1 mb-1">İnteraktif Oyunlar</h3>
                  <p className="text-sm text-finanqa-green-1/80 mb-2">Eğlenceli oyunlarla finansal kavramları öğrenin ve puan kazanın</p>
                  <div className="inline-flex items-center gap-1 bg-finanqa-green-2/30 px-2 py-1 rounded-lg">
                    <Trophy className="w-3 h-3 text-finanqa-green-1" />
                    <span className="text-xs font-medium text-finanqa-green-1">50+ Oyun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Destekli Değerlendirme */}
            <div className="bg-white border-2 border-finanqa-green-2/30 rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-finanqa-green-2 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-finanqa-green-1" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-finanqa-green-1 mb-1">AI Destekli Değerlendirme</h3>
                  <p className="text-sm text-finanqa-green-1/80 mb-2">Kişiselleştirilmiş öğrenme rotası ve akıllı değerlendirme</p>
                  <div className="inline-flex items-center gap-1 bg-finanqa-light-green/20 px-2 py-1 rounded-lg">
                    <Zap className="w-3 h-3 text-finanqa-green-1" />
                    <span className="text-xs font-medium text-finanqa-green-1">%92 Başarı</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sertifikalı Programlar */}
            <div className="bg-white border-2 border-finanqa-green-1/20 rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-finanqa-green-1 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-finanqa-green-1 mb-1">Sertifikalı Programlar</h3>
                  <p className="text-sm text-finanqa-green-1/80 mb-2">Uluslararası standartlarda sertifikalı eğitim programları</p>
                  <div className="inline-flex items-center gap-1 bg-finanqa-green-2/30 px-2 py-1 rounded-lg">
                    <Award className="w-3 h-3 text-finanqa-green-1" />
                    <span className="text-xs font-medium text-finanqa-green-1">15+ Sertifika</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - Mobile */}
          <div className="text-center">
            <Link 
              href="/akademi" 
              target="_blank"
              rel="noopener noreferrer" 
              className="bg-finanqa-green-1 hover:bg-finanqa-green-1/90 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              Akademiye Katıl - Ücretsiz
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Features Grid */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                {/* Uzman İçerikleri */}
                <div className="bg-white border-2 border-finanqa-green-1/20 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-finanqa-green-1 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-finanqa-green-1 mb-2">Uzman İçerikleri</h3>
                      <p className="text-finanqa-green-1/80 mb-3 leading-relaxed">CFA & CFP uzmanları tarafından hazırlanan 200+ profesyonel makale ve video içerik</p>
                      <div className="inline-flex items-center gap-2 bg-finanqa-light-green/20 px-3 py-1 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-finanqa-green-1" />
                        <span className="text-sm font-medium text-finanqa-green-1">Sürekli Güncellenen İçerik</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* İnteraktif Oyunlar */}
                <div className="bg-white border-2 border-finanqa-light-green/30 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-finanqa-light-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <Gamepad2 className="w-7 h-7 text-finanqa-green-1" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-finanqa-green-1 mb-2">İnteraktif Oyunlar</h3>
                      <p className="text-finanqa-green-1/80 mb-3 leading-relaxed">50+ eğlenceli oyun ve quiz ile finansal kavramları öğrenin, puan kazanın ve liderlik tablosunda yarışın</p>
                      <div className="inline-flex items-center gap-2 bg-finanqa-green-2/30 px-3 py-1 rounded-lg">
                        <Trophy className="w-4 h-4 text-finanqa-green-1" />
                        <span className="text-sm font-medium text-finanqa-green-1">Ödüllü Yarışmalar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* AI Destekli Değerlendirme */}
                <div className="bg-white border-2 border-finanqa-green-2/30 rounded-2xl shadow-lg p-5 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-finanqa-green-2 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-finanqa-green-1" />
                  </div>
                  <h3 className="text-lg font-bold text-finanqa-green-1 mb-2">AI Destekli Değerlendirme</h3>
                  <p className="text-finanqa-green-1/80 mb-3 text-sm leading-relaxed">Kişiselleştirilmiş öğrenme rotası</p>
                  <div className="inline-flex items-center gap-1 bg-finanqa-light-green/20 px-2 py-1 rounded-lg">
                    <Zap className="w-3 h-3 text-finanqa-green-1" />
                    <span className="text-xs font-medium text-finanqa-green-1">%92 Başarı</span>
                  </div>
                </div>

                {/* Sertifikalı Programlar */}
                <div className="bg-white border-2 border-finanqa-green-1/20 rounded-2xl shadow-lg p-5 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-finanqa-green-1 rounded-xl flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-finanqa-green-1 mb-2">Sertifikalı Programlar</h3>
                  <p className="text-finanqa-green-1/80 mb-3 text-sm leading-relaxed">Uluslararası standartlarda sertifikalar</p>
                  <div className="inline-flex items-center gap-1 bg-finanqa-green-2/30 px-2 py-1 rounded-lg">
                    <Award className="w-3 h-3 text-finanqa-green-1" />
                    <span className="text-xs font-medium text-finanqa-green-1">15+ Sertifika</span>
                  </div>
                </div>
              </div>

              {/* CTA Button - Desktop */}
              <div className="pt-4">
                <Link 
                  href="/akademi" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-finanqa-green-1 hover:bg-finanqa-green-1/90 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-3"
                >
                  Akademiye Katıl - Ücretsiz Dene
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Right Column - Mascot & Highlights */}
            <div className="space-y-6">
              {/* Mascot */}
              <div className="flex justify-center">
                <div className="relative w-[400px] h-[400px]">
                  <Image
                    src="/images/anqa/anqa_mobil_transparan.png"
                    alt="Anqa - Profesyonel finansal eğitim asistanı"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Highlight Box */}
              <div className="bg-gradient-to-br from-finanqa-green-1/5 to-finanqa-light-green/10 border-2 border-finanqa-green-1/10 rounded-2xl p-6 text-center">
                <h4 className="text-xl font-bold text-finanqa-green-1 mb-3">
                  🎮 Oyun Oynayarak Öğren!
                </h4>
                <p className="text-finanqa-green-1/80 mb-4">
                  Finansal kavramları eğlenceli oyunlarla öğrenin, puanlar kazanın ve arkadaşlarınızla yarışın. 
                  Her doğru cevap sizi bir adım öne taşır!
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-finanqa-green-1/70">
                  <div className="flex items-center gap-1">
                    <Trophy size={16} />
                    <span>Liderlik Tablosu</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap size={16} />
                    <span>Anlık Puanlama</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      );
} 
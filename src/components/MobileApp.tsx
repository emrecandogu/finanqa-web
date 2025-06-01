'use client';

import Image from 'next/image';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

export default function MobileApp() {
  return (
    <section className="section-padding bg-white" id="mobile-app">
      <div className="container-width">
        {/* Mobile Card-Like Layout */}
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto rounded-2xl shadow-lg bg-white/90 p-6 gap-4 mt-0 lg:hidden">
          {/* Heading & Subhead */}
          <h2 className="text-2xl font-bold text-center mb-1">Finanqa Mobil Uygulaması</h2>
          <p className="text-base text-finanqa-green-1/80 text-center mb-1">IOS ve Android için hemen indirin</p>
          {/* Mascot */}
          <div className="flex justify-center mb-2">
            <div className="relative w-52 h-52">
              <Image
                src="/images/anqa/anqa_mobil2_transparan.png"
                alt="Finanqa maskotu telefonu tutuyor"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          {/* Description */}
          <p className="text-base text-finanqa-green-1/80 text-center leading-relaxed mb-2">
            Finansal eğitiminizi bir üst seviyeye taşıyın. Mobil uygulamamız sayesinde kişisel derslere erişin, ilerlemenizi takip edin ve yapay zeka destekli öneriler alın.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto mb-2">
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              <FaAppStore className="w-6 h-6" />
              App Store'dan İndir
            </button>
            <button className="btn-secondary w-full flex items-center justify-center gap-2">
              <FaGooglePlay className="w-6 h-6" />
              Play Store'dan Al
            </button>
          </div>
          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-2">
            <div className="bg-finanqa-cream rounded-xl p-4 shadow-sm text-center flex flex-col items-center justify-center min-h-[70px]">
              <div className="text-2xl font-bold text-finanqa-green-1">100B+</div>
              <div className="text-sm text-finanqa-green-1/70">Aktif Kullanıcı</div>
            </div>
            <div className="bg-finanqa-cream rounded-xl p-4 shadow-sm text-center flex flex-col items-center justify-center min-h-[70px]">
              <div className="text-2xl font-bold text-finanqa-green-1">4.8</div>
              <div className="text-sm text-finanqa-green-1/70">Uygulama Puanı</div>
            </div>
            <div className="bg-finanqa-cream rounded-xl p-4 shadow-sm text-center flex flex-col items-center justify-center min-h-[70px]">
              <div className="text-2xl font-bold text-finanqa-green-1">50+</div>
              <div className="text-sm text-finanqa-green-1/70">Finans Dersi</div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (unchanged) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Metin alanı */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">Finanqa Mobil Uygulaması</h2>
              <p className="text-lg text-finanqa-green-1/80">
                IOS ve Android için hemen indirin
              </p>
            </div>
            <p className="text-lg text-finanqa-green-1/80">
              Finansal eğitiminizi bir üst seviyeye taşıyın. Mobil uygulamamız sayesinde kişisel derslere erişin, ilerlemenizi takip edin ve yapay zeka destekli öneriler alın.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <button className="btn-primary flex items-center gap-2">
                <FaAppStore className="w-6 h-6" />
                App Store'dan İndir
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <FaGooglePlay className="w-6 h-6" />
                Play Store'dan Al
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-finanqa-cream rounded-xl p-4 shadow-sm text-center">
                <div className="text-2xl font-bold text-finanqa-green-1">100B+</div>
                <div className="text-sm text-finanqa-green-1/70">Aktif Kullanıcı</div>
              </div>
              <div className="bg-finanqa-cream rounded-xl p-4 shadow-sm text-center">
                <div className="text-2xl font-bold text-finanqa-green-1">4.8</div>
                <div className="text-sm text-finanqa-green-1/70">Uygulama Puanı</div>
              </div>
              <div className="bg-finanqa-cream rounded-xl p-4 shadow-sm text-center">
                <div className="text-2xl font-bold text-finanqa-green-1">50+</div>
                <div className="text-sm text-finanqa-green-1/70">Finans Dersi</div>
              </div>
            </div>
          </div>

          {/* Görsel alanı */}
          <div className="flex items-center justify-center h-[600px] order-1 lg:order-2">
            <div className="relative w-[500px] h-auto">
              <Image
                src="/images/anqa/anqa_mobil2_transparan.png"
                alt="Finanqa maskotu telefonu tutuyor"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

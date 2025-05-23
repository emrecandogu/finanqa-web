'use client';

import Image from 'next/image';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

export default function MobileApp() {
  return (
    <section className="section-padding bg-white" id="mobile-app">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Metin alanı */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl font-bold">Finanqa Mobil Uygulaması</h2>
            <p className="text-lg text-finanqa-green-1/80">
              Finansal eğitiminizi bir üst seviyeye taşıyın. Mobil uygulamamız sayesinde kişisel derslere erişin, ilerlemenizi takip edin ve yapay zeka destekli öneriler alın.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
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
              <div className="text-center">
                <div className="text-2xl font-bold text-finanqa-green-1">100B+</div>
                <div className="text-sm text-finanqa-green-1/70">Aktif Kullanıcı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-finanqa-green-1">4.8</div>
                <div className="text-sm text-finanqa-green-1/70">Uygulama Puanı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-finanqa-green-1">50+</div>
                <div className="text-sm text-finanqa-green-1/70">Finans Dersi</div>
              </div>
            </div>
          </div>

          {/* Görsel alanı */}
          <div className="relative h-[600px] order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-finanqa-green-2/20 to-finanqa-light-green/20 rounded-3xl">
              <Image
                src="/images/app-mockup.svg"
                alt="Finanqa mobil uygulama arayüzü örneği"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

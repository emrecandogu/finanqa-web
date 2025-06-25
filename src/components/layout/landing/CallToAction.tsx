'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, Smartphone, Shield, Clock, Users, TrendingUp, CheckCircle, Star, Award } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-finanqa-green-1/5 to-finanqa-light-green/10" id="cta">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-finanqa-green-1 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-finanqa-light-green rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border border-finanqa-green-2 rounded-full"></div>
      </div>

      {/* Anqa Mascot - Responsive positioning */}
      <div className="absolute right-0 bottom-0 w-[200px] lg:w-[320px] max-w-[40vw] lg:max-w-[25vw] opacity-40 lg:opacity-60 pointer-events-none select-none z-0">
        <Image
          src="/images/anqa/anqa_main_transparan.png"
          alt="Finanqa maskotu"
          width={320}
          height={320}
          className="object-contain"
          priority
        />
      </div>

      <div className="container-width relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Urgency Banner */}
          <div className="bg-white border-2 border-finanqa-light-green/30 rounded-2xl p-4 mb-8 text-center shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="text-finanqa-green-1" size={20} />
              <span className="text-finanqa-green-1 font-semibold">Sınırlı Süre Fırsatı</span>
            </div>
            <p className="text-sm text-finanqa-green-1/80">
              <span className="font-bold text-finanqa-green-1">Bu ay kayıt olanlara özel:</span> İlk 3 ay premium özellikler ücretsiz!
            </p>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-finanqa-green-1 mb-4">
              Finansal Özgürlüğünüze Başlayın
            </h2>
            <p className="text-lg lg:text-xl text-finanqa-green-1/80 mb-6 max-w-3xl mx-auto">
              Türkiye'nin en güvenilir fintech platformu ile <span className="font-semibold text-finanqa-green-1">ortalama %30 tasarruf</span> sağlayın ve finansal hedeflerinize ulaşın.
            </p>
          </div>

          {/* Value Propositions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border-2 border-finanqa-green-1/10 rounded-xl p-4 text-center shadow-md">
              <div className="w-8 h-8 bg-finanqa-green-1 rounded-lg flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="text-white" size={16} />
              </div>
              <div className="text-lg font-bold text-finanqa-green-1">%30</div>
              <div className="text-sm text-finanqa-green-1/70">Ortalama Tasarruf</div>
            </div>
            <div className="bg-white border-2 border-finanqa-light-green/20 rounded-xl p-4 text-center shadow-md">
              <div className="w-8 h-8 bg-finanqa-light-green rounded-lg flex items-center justify-center mx-auto mb-2">
                <Shield className="text-finanqa-green-1" size={16} />
              </div>
              <div className="text-lg font-bold text-finanqa-green-1">%100</div>
              <div className="text-sm text-finanqa-green-1/70">Güvenli & Şifreli</div>
            </div>
            <div className="bg-white border-2 border-finanqa-green-2/20 rounded-xl p-4 text-center shadow-md">
              <div className="w-8 h-8 bg-finanqa-green-2 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Clock className="text-finanqa-green-1" size={16} />
              </div>
              <div className="text-lg font-bold text-finanqa-green-1">30sn</div>
              <div className="text-sm text-finanqa-green-1/70">Hızlı Kayıt</div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-white border-2 border-finanqa-green-1/10 rounded-2xl p-6 mb-8 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-finanqa-green-1 rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-white text-sm font-semibold">AY</span>
                  </div>
                  <div className="w-10 h-10 bg-finanqa-light-green rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-finanqa-green-1 text-sm font-semibold">MD</span>
                  </div>
                  <div className="w-10 h-10 bg-finanqa-green-2 rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-finanqa-green-1 text-sm font-semibold">EK</span>
                  </div>
                  <div className="w-10 h-10 bg-finanqa-green-1/20 rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-finanqa-green-1 text-sm font-semibold">+</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-finanqa-green-1">Son 24 saatte 127 kişi katıldı</p>
                  <p className="text-xs text-finanqa-green-1/70">10,000+ aktif kullanıcımız var</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-finanqa-light-green text-finanqa-light-green" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-finanqa-green-1">4.8/5 Kullanıcı Puanı</p>
                  <p className="text-xs text-finanqa-green-1/70">2,500+ değerlendirme</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/kayit-ol"
              className="bg-finanqa-green-1 hover:bg-finanqa-green-1/90 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Smartphone size={24} />
              Ücretsiz Hesap Aç - 30sn
            </Link>
            <Link
              href="/mobil-uygulama"
              className="bg-white border-2 border-finanqa-green-1/20 hover:border-finanqa-green-1/40 hover:shadow-lg text-finanqa-green-1 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 shadow-md inline-flex items-center gap-3 w-full sm:w-auto justify-center"
            >
              <Download size={24} />
              Mobil Uygulamayı İndir
            </Link>
          </div>

          {/* Risk Reduction & Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-finanqa-green-1/70 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-finanqa-light-green" />
              <span>Kredi kartı gerekmez</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-finanqa-light-green" />
              <span>30 gün para iade garantisi</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-finanqa-light-green" />
              <span>Anında kullanıma hazır</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={16} className="text-finanqa-light-green" />
              <span>ISO 27001 sertifikalı</span>
            </div>
          </div>

          {/* Security Badges */}
          <div className="flex items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-finanqa-green-1" />
              <span className="text-xs font-medium text-finanqa-green-1">256-bit SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={20} className="text-finanqa-green-1" />
              <span className="text-xs font-medium text-finanqa-green-1">PCI DSS</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-finanqa-green-1" />
              <span className="text-xs font-medium text-finanqa-green-1">KVKK Uyumlu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

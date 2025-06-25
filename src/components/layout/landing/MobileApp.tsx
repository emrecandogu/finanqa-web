'use client';

import Image from 'next/image';
import { Smartphone, Shield, Download, Star, Users, BookOpen, Lock } from 'lucide-react';

export default function MobileApp() {
  return (
    <section className="section-padding bg-white" id="mobile-app">
      <div className="container-width">
        {/* Mobile Card-Like Layout */}
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto rounded-2xl shadow-lg bg-white/90 p-6 gap-4 mt-0 lg:hidden">
          {/* Heading & Subhead */}
          <h2 className="text-2xl font-bold text-center mb-1 text-finanqa-green-1">Güvenli Mobil Finans Platformu</h2>
          <p className="text-base text-finanqa-green-1/80 text-center mb-1">Bankacılık seviyesi güvenlik ile iOS ve Android'de</p>
          
          {/* Security badge */}
          <div className="flex items-center gap-2 bg-finanqa-green-1/10 px-3 py-1 rounded-full mb-1">
            <Shield size={14} className="text-finanqa-green-1" />
            <span className="text-xs font-medium text-finanqa-green-1">SSL Şifreli & KVKK Uyumlu</span>
          </div>
          
          {/* Mascot */}
          <div className="flex justify-center mb-2">
            <div className="relative w-52 h-52">
              <Image
                src="/images/anqa/anqa_mobil2_transparan.png"
                alt="Anqa - Güvenli mobil finansal asistan"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          {/* Description */}
          <p className="text-base text-finanqa-green-1/80 text-center leading-relaxed mb-2">
            Profesyonel finansal danışmanlık hizmetlerimize mobil cihazınızdan güvenle erişin. AI destekli analizler, gerçek zamanlı portföy takibi ve uzman desteği.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto mb-2">
            <button className="btn-primary w-full flex items-center justify-center gap-2">
              <Download size={18} />
              App Store'dan İndir
            </button>
            <button className="btn-secondary w-full flex items-center justify-center gap-2">
              <Download size={18} />
              Play Store'dan Al
            </button>
          </div>
          {/* Metrics: Realistic numbers */}
          <div className="flex flex-row flex-wrap gap-2 w-full mt-2 justify-center">
            <div className="flex items-center gap-2 bg-white border-2 border-finanqa-green-1/20 rounded-full px-4 py-2 shadow-sm min-w-[120px] max-w-[160px]">
              <Users className="w-5 h-5 text-finanqa-green-1" />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-finanqa-green-1">10K+</span>
                <span className="text-xs text-finanqa-green-1/70">Aktif Kullanıcı</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white border-2 border-finanqa-light-green/30 rounded-full px-4 py-2 shadow-sm min-w-[120px] max-w-[160px]">
              <Star className="w-5 h-5 text-finanqa-green-1" />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-finanqa-green-1">4.8</span>
                <span className="text-xs text-finanqa-green-1/70">App Store Puanı</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white border-2 border-finanqa-green-2/30 rounded-full px-4 py-2 shadow-sm min-w-[120px] max-w-[160px]">
              <Lock className="w-5 h-5 text-finanqa-green-1" />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-finanqa-green-1">256-bit</span>
                <span className="text-xs text-finanqa-green-1/70">SSL Şifreleme</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Metin alanı */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-finanqa-green-1">Güvenli Mobil Finans Platformu</h2>
              <p className="text-lg text-finanqa-green-1/80">
                Bankacılık seviyesi güvenlik ile iOS ve Android'de
              </p>
            </div>
            
            {/* Security emphasis */}
            <div className="flex items-center gap-4 text-finanqa-green-1/70">
              <div className="flex items-center gap-2">
                <Shield size={20} />
                <span className="text-sm font-medium">SSL Şifreli</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={20} />
                <span className="text-sm font-medium">KVKK Uyumlu</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} />
                <span className="text-sm font-medium">4.8/5 Puan</span>
              </div>
            </div>
            
            <p className="text-lg text-finanqa-green-1/80">
              Profesyonel finansal danışmanlık hizmetlerimize mobil cihazınızdan güvenle erişin. 
              AI destekli analizler, gerçek zamanlı portföy takibi ve uzman desteği.
            </p>

            <div className="flex flex-wrap gap-6 mt-8">
              <button className="btn-primary flex items-center gap-2">
                <Download size={20} />
                App Store'dan İndir
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Download size={20} />
                Play Store'dan Al
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-white border-2 border-finanqa-green-1/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-8 h-8 bg-finanqa-green-1 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="text-2xl font-bold text-finanqa-green-1">10K+</div>
                <div className="text-sm text-finanqa-green-1/70">Aktif Kullanıcı</div>
              </div>
              <div className="bg-white border-2 border-finanqa-light-green/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-8 h-8 bg-finanqa-light-green rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Star className="w-5 h-5 text-finanqa-green-1" />
                </div>
                <div className="text-2xl font-bold text-finanqa-green-1">4.8</div>
                <div className="text-sm text-finanqa-green-1/70">App Store Puanı</div>
              </div>
              <div className="bg-white border-2 border-finanqa-green-2/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-8 h-8 bg-finanqa-green-2 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-5 h-5 text-finanqa-green-1" />
                </div>
                <div className="text-2xl font-bold text-finanqa-green-1">256-bit</div>
                <div className="text-sm text-finanqa-green-1/70">SSL Şifreleme</div>
              </div>
            </div>
          </div>

          {/* Görsel alanı */}
          <div className="flex items-center justify-center h-[600px] order-1 lg:order-2">
            <div className="relative w-[500px] h-auto">
              <Image
                src="/images/anqa/anqa_mobil2_transparan.png"
                alt="Anqa - Güvenli mobil finansal asistan"
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

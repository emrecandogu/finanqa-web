'use client';

import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="relative py-24" id="cta">
      {/* Arka Plan Görseli */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.svg"
          alt="Finanqa arka plan illüstrasyonu"
          fill
          className="object-cover brightness-50"
        />
      </div>

      <div className="container-width relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Finansal Yolculuğunuza Bugün Başlayın
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Finanqa’nın yapay zeka destekli platformuyla binlerce kullanıcı finansal kontrolü ele aldı. Siz de şimdi katılın!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="bg-finanqa-light-green text-finanqa-green-1 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Uygulamayı İndir
            </button>
            <button
              className="bg-white/10 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Daha Fazla Bilgi
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

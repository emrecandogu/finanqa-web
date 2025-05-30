'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-finanqa-cream overflow-hidden pt-16">
      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Metin alanı */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Finansal Kontrolü Elinize Alın
            </h1>
            <p className="text-xl text-finanqa-green-1/80">
              Finanqa, yapay zeka destekli kişisel finans danışmanınız olarak daha bilinçli kararlar almanıza ve hedeflerinize ulaşmanıza yardımcı olur.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Detayları İncele</button>
              <button className="btn-secondary">Uygulamayı İndir</button>
            </div>
          </div>

          {/* Görsel alanı */}
          <div className="flex items-center justify-center h-full hidden lg:block">
            <div className="relative w-[500px] h-auto">
              <Image
                src="/images/anqa/anqa_selamveren_transparan.png"
                alt="Anqa - Finanqa AI Mascot welcoming users"
                width={500}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Arka plan geçiş efekti */}
      <div className="absolute inset-0 bg-gradient-to-b from-finanqa-cream/0 via-finanqa-cream to-finanqa-cream/0 pointer-events-none" />
    </section>
  );
}

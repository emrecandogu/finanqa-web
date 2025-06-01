'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white section-padding pb-32" id="about">
      <div className="container-width">
        {/* Mobile Card-Like Layout */}
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto rounded-2xl shadow-lg bg-white/90 p-6 gap-4 mt-0 lg:hidden">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Finansal Eğitimi Yeniden Tanımlıyoruz</h2>
          {/* Mascot */}
          <div className="flex justify-center mb-2">
            <div className="relative w-56 h-56">
              <Image
                src="/images/anqa/anqa_dusunen_transparan.png"
                alt="Anqa - Finanqa AI Mascot düşünüyor"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          {/* Description */}
          <p className="text-base sm:text-lg text-finanqa-green-1/80 text-center leading-relaxed mb-2">
            Finanqa, yapay zeka teknolojisini finansal prensiplerle birleştirerek kişiselleştirilmiş öğrenim deneyimleri sunar.
          </p>
          {/* Horizontally Scrollable Feature Cards */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 py-2 w-full scrollbar-hide" style={{ scrollSnapType: 'x mandatory' }}>
            <div className="min-w-[85vw] max-w-[90vw] bg-finanqa-cream py-6 px-5 rounded-xl shadow-sm snap-center flex-shrink-0">
              <h3 className="text-lg font-semibold mb-2">Yapay Zeka Destekli</h3>
              <p className="text-finanqa-green-1/70 text-sm">Öğrenme tarzınıza göre akıllı öneriler sunar</p>
            </div>
            <div className="min-w-[85vw] max-w-[90vw] bg-finanqa-cream py-6 px-5 rounded-xl shadow-sm snap-center flex-shrink-0">
              <h3 className="text-lg font-semibold mb-2">Kişiselleştirilmiş</h3>
              <p className="text-finanqa-green-1/70 text-sm">Sizin için özel olarak tasarlanmış bir finansal eğitim yolculuğu</p>
            </div>
            <div className="min-w-[85vw] max-w-[90vw] bg-finanqa-cream py-6 px-5 rounded-xl shadow-sm snap-center flex-shrink-0">
              <h3 className="text-lg font-semibold mb-2">İlerlemenizi Takip Edin</h3>
              <p className="text-finanqa-green-1/70 text-sm">Gerçek zamanlı verilerle gelişiminizi izleyin</p>
            </div>
            <div className="min-w-[85vw] max-w-[90vw] bg-finanqa-cream py-6 px-5 rounded-xl shadow-sm snap-center flex-shrink-0">
              <h3 className="text-lg font-semibold mb-2">Oyunlaştırılmış Dersler</h3>
              <p className="text-finanqa-green-1/70 text-sm">Eğlenceli ve etkileşimli görevlerle öğrenin</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout (unchanged) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-8">
          {/* Sol Taraf - Özellikler */}
          <div className="space-y-6">
            <div className="bg-finanqa-cream p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Yapay Zeka Destekli</h3>
              <p className="text-finanqa-green-1/70">Öğrenme tarzınıza göre akıllı öneriler sunar</p>
            </div>
            <div className="bg-finanqa-cream p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Kişiselleştirilmiş</h3>
              <p className="text-finanqa-green-1/70">Sizin için özel olarak tasarlanmış bir finansal eğitim yolculuğu</p>
            </div>
            <div className="bg-finanqa-cream p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">İlerlemenizi Takip Edin</h3>
              <p className="text-finanqa-green-1/70">Gerçek zamanlı verilerle gelişiminizi izleyin</p>
            </div>
            <div className="bg-finanqa-cream p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Oyunlaştırılmış Dersler</h3>
              <p className="text-finanqa-green-1/70">Eğlenceli ve etkileşimli görevlerle öğrenin</p>
            </div>
          </div>

          {/* Sağ Taraf - Mascot (desktop only) */}
          <div className="hidden lg:flex justify-center items-start -mt-8">
            <div className="relative w-[450px] h-[450px]">
              <Image
                src="/images/anqa/anqa_dusunen_transparan.png"
                alt="Anqa - Finanqa AI Mascot düşünüyor"
                width={450}
                height={450}
                className="object-contain mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
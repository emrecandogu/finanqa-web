'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white section-padding pb-32" id="about">
      <div className="container-width">
        {/* Başlık */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Finansal Eğitimi Yeniden Tanımlıyoruz
          </h2>
          <p className="text-xl text-finanqa-green-1/80 max-w-3xl mx-auto">
            Finanqa, yapay zeka teknolojisini finansal prensiplerle birleştirerek kişiselleştirilmiş öğrenim deneyimleri sunar.
          </p>
        </div>

        {/* İçerik Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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

          {/* Sağ Taraf - Mascot */}
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
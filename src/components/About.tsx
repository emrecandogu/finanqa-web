'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="bg-white section-padding" id="about">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Görsel alanı */}
          <div className="relative h-[400px]">
            <Image
              src="/images/about-placeholder.svg"
              alt="Finanqa hakkında açıklayıcı görsel"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-finanqa-green-1/20 to-transparent rounded-2xl" />
          </div>

          {/* Metin alanı */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Finansal Eğitimi Yeniden Tanımlıyoruz
            </h2>
            <p className="text-lg text-finanqa-green-1/80">
              Finanqa, yapay zeka teknolojisini finansal prensiplerle birleştirerek kişiselleştirilmiş öğrenim deneyimleri sunar. Platformumuz, bilgi seviyenize ve hedeflerinize uyum sağlar; böylece finansal eğitim erişilebilir ve ilgi çekici hale gelir.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-4 bg-finanqa-cream rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Yapay Zeka Destekli</h3>
                <p>Öğrenme tarzınıza göre akıllı öneriler sunar</p>
              </div>
              <div className="p-4 bg-finanqa-cream rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Kişiselleştirilmiş</h3>
                <p>Sizin için özel olarak tasarlanmış bir finansal eğitim yolculuğu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
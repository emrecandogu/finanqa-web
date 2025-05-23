'use client';

import Image from 'next/image';

const features = [
  {
    title: 'Akıllı Bütçeleme',
    description: 'Harcama alışkanlıklarınızı öğrenen yapay zeka destekli bütçeleme araçları ile daha fazla birikim yapın.',
    image: '/images/feature1.svg',
    alt: 'Akıllı bütçeleme görseli'
  },
  {
    title: 'Yapay Zeka Önerileri',
    description: 'Hedeflerinize ve mevcut finansal durumunuza göre kişiselleştirilmiş finansal tavsiyeler alın.',
    image: '/images/feature2.svg',
    alt: 'Yapay zeka öneri sistemi görseli'
  },
  {
    title: 'Kullanıcı Dostu Arayüz',
    description: 'Finanslarınızı yönetmeyi sezgisel ve stressiz hale getiren sade tasarım.',
    image: '/images/feature3.svg',
    alt: 'Mobil arayüz görseli'
  }
];

export default function Features() {
  return (
    <section className="section-padding bg-finanqa-cream" id="features">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Finanqa Özellikleri</h2>
          <p className="text-lg text-finanqa-green-1/80 max-w-2xl mx-auto">
            Finansal yolculuğunuzu dönüştürecek araçları keşfedin ve hedeflerinize ulaşma yolunda güçlü adımlar atın.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-finanqa-green-1/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import React, { useEffect, useRef } from 'react';
import { Check, CircleUserRound, Smartphone } from 'lucide-react';
import Image from 'next/image';

const benefits = [
  'Kolay bütçe takibi ve harcama analizi',
  'Yapay zeka destekli finansal öneriler',
  'Finansal eğitim içerikleri',
  'Güvenli veri saklama',
  'Çoklu cihaz senkronizasyonu',
  '7/24 müşteri desteği'
];

const benefitDetails = [
  'Gelir ve giderlerinizi kolayca takip edin, harcamalarınızı analiz edin.',
  'Kişiselleştirilmiş finansal önerilerle daha iyi kararlar alın.',
  'Kapsamlı eğitim içerikleriyle finansal bilginizi artırın.',
  'Verileriniz güvenli ve gizli şekilde saklanır.',
  'Tüm cihazlarınızda senkronize finansal yönetim.',
  'Her zaman ulaşabileceğiniz müşteri desteği.'
];

const testimonials = [
  {
    name: 'Ayşe',
    feature: 'Kolay bütçe takibi',
    text: 'Bütçe takibi özelliği sayesinde harcamalarımı kontrol altına aldım. Artık nereye ne harcadığımı kolayca görebiliyorum!'
  },
  {
    name: 'Mehmet',
    feature: 'Yapay zeka önerileri',
    text: 'Yapay zeka destekli öneriler tam bana göre! Kişisel finansal hedeflerime ulaşmamda çok yardımcı oldu.'
  },
  {
    name: 'Elif',
    feature: 'Finansal eğitim içerikleri',
    text: 'Uygulamadaki finansal eğitim içerikleriyle finansal okuryazarlığımı ciddi şekilde geliştirdim.'
  },
  {
    name: 'Burak',
    feature: 'Güvenli veri saklama',
    text: 'Verilerimin güvenli bir şekilde saklandığını bilmek bana büyük bir rahatlık veriyor.'
  },
  {
    name: 'Zeynep',
    feature: 'Çoklu cihaz senkronizasyonu',
    text: 'Telefonumda ve bilgisayarımda aynı anda kullanabiliyorum, senkronizasyon harika çalışıyor.'
  },
  {
    name: 'Ali',
    feature: '7/24 müşteri desteği',
    text: 'Herhangi bir sorum olduğunda müşteri desteği anında yardımcı oluyor, çok memnunum.'
  },
];

export default function MobilUygulamaPage() {
  // Carousel için referans ve otomatik scroll
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    let interval: NodeJS.Timeout;
    let scrollAmount = 0;
    const scrollStep = 280; // bir kart genişliği kadar
    const scrollTime = 3500; // ms
    function autoScroll() {
      if (!carousel) return;
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth - 1) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
        scrollAmount = 0;
      } else {
        carousel.scrollTo({ left: scrollAmount + scrollStep, behavior: 'smooth' });
        scrollAmount += scrollStep;
      }
    }
    interval = setInterval(autoScroll, scrollTime);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-10 sm:mb-12 text-center">Finanqa Mobil Uygulaması ile Tanış</h1>

        {/* Hero Section */}
        <section className="mb-12 sm:mb-16">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Metin ve Butonlar */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Finansal Yönetiminiz Artık Cebinizde</h2>
              <p className="text-gray-700 mb-6 sm:mb-8 max-w-md">
                Finanqa mobil uygulaması ile finansal yönetiminizi her an, her yerden kolayca yapabilirsiniz. 
                Bütçe takibi, harcama analizi ve yapay zeka destekli öneriler artık parmaklarınızın ucunda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs md:max-w-none">
                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto">
                  <Smartphone />
                  <span>Google Play'den İndir</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto">
                  <Smartphone />
                  <span>App Store'dan İndir</span>
                </button>
              </div>
            </div>
            {/* Görsel Alanı */}
            <div className="flex items-center justify-center w-full md:w-auto mb-8 md:mb-0">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                <Image
                  src="/images/anqa/anqa_mobil2_transparan.png"
                  alt="Finanqa maskotu telefonu tutuyor"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-finanqa-green-1 mb-6 sm:mb-8 text-center">FinanqaApp ile neler yapabilirsin?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-finanqa-green-1/10 via-white to-finanqa-green-2/10 rounded-3xl shadow-lg p-7 flex flex-col items-center relative overflow-visible min-h-[120px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex flex-col items-center w-full mb-2">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-finanqa-green-1/20 mb-3 shadow group-hover:bg-finanqa-green-1/30 transition-all">
                    <Check className="w-7 h-7 text-finanqa-green-1" />
                  </span>
                  <p className="text-finanqa-green-1 text-lg font-bold text-center mb-1">{benefit}</p>
                </div>
                {/* Hover ile açılan detay açıklama */}
                <div className="absolute left-4 right-4 bottom-4 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 bg-finanqa-green-1/90 text-white text-sm px-4 py-3 rounded-2xl shadow-lg transition-all duration-300 z-10 pointer-events-none group-hover:pointer-events-auto">
                  {benefitDetails[index]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-finanqa-green-1 mb-6 sm:mb-8 text-center">Kullanıcı Yorumları</h2>
          {/* Otomatik kayan carousel */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {testimonials.concat(testimonials).map((testimonial, idx) => (
              <div
                key={idx}
                className="min-w-[260px] max-w-xs w-full bg-gradient-to-br from-finanqa-green-1/10 via-white to-finanqa-green-2/10 rounded-2xl shadow-lg p-6 flex-shrink-0 hover:scale-105 transition-transform duration-200 snap-center"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-finanqa-cream rounded-full mr-4 flex items-center justify-center text-finanqa-green-1 text-2xl">
                    <CircleUserRound />
                  </div>
                  <div>
                    <h4 className="font-semibold text-finanqa-green-1">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs font-medium">{testimonial.feature}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-base">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 
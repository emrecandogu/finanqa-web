import React from 'react';
import { FaCheck, FaGooglePlay, FaAppStore, FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';

const benefits = [
  'Kolay bütçe takibi ve harcama analizi',
  'Yapay zeka destekli finansal öneriler',
  'Finansal eğitim içerikleri',
  'Güvenli veri saklama',
  'Çoklu cihaz senkronizasyonu',
  '7/24 müşteri desteği'
];

export default function MobilUygulamaPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-10 sm:mb-12 text-center">Finanqa Mobil Uygulama</h1>

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
                  <FaGooglePlay className="w-6 h-6" />
                  <span>Google Play'den İndir</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors w-full sm:w-auto">
                  <FaAppStore className="w-6 h-6" />
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-finanqa-green-1 mb-6 sm:mb-8 text-center">Uygulama Özellikleri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-5 flex items-center gap-3">
                <FaCheck className="w-6 h-6 text-finanqa-green-1 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold text-finanqa-green-1 mb-6 sm:mb-8 text-center">Kullanıcı Yorumları</h2>
          {/* Mobilde yatay scroll, masaüstünde grid */}
          <div className="flex gap-4 overflow-x-auto lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible pb-2 lg:pb-0 snap-x lg:snap-none">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="min-w-[260px] max-w-xs w-full bg-white rounded-2xl shadow-lg p-6 flex-shrink-0 lg:min-w-0 lg:max-w-none lg:hover:scale-105 transition-transform duration-200 snap-center"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-finanqa-cream rounded-full mr-4 flex items-center justify-center text-finanqa-green-1 text-2xl">
                    <FaUserCircle />
                  </div>
                  <div>
                    <h4 className="font-semibold">Kullanıcı {index}</h4>
                    <p className="text-gray-600 text-sm">Finanqa Kullanıcısı</p>
                  </div>
                </div>
                <p className="text-gray-700 text-base">
                  "Finanqa uygulaması sayesinde finansal hedeflerime ulaşmak çok daha kolay hale geldi. 
                  Özellikle yapay zeka önerileri çok faydalı."
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 
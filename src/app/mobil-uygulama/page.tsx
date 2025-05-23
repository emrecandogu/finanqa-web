import React from 'react';
import { FaCheck, FaGooglePlay, FaAppStore } from 'react-icons/fa';
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
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-finanqa-green-1 mb-12 text-center">Finanqa Mobil Uygulama</h1>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Finansal Yönetiminiz Artık Cebinizde</h2>
              <p className="text-gray-700 mb-8">
                Finanqa mobil uygulaması ile finansal yönetiminizi her an, her yerden kolayca yapabilirsiniz. 
                Bütçe takibi, harcama analizi ve yapay zeka destekli öneriler artık parmaklarınızın ucunda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <FaGooglePlay className="w-6 h-6" />
                  <span>Google Play'den İndir</span>
                </button>
                <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  <FaAppStore className="w-6 h-6" />
                  <span>App Store'dan İndir</span>
                </button>
              </div>
            </div>
            <div className="relative h-[600px]">
              <div className="absolute inset-0 bg-gray-200 rounded-lg"></div>
              {/* Placeholder for app mockup image */}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-finanqa-green-1 mb-8 text-center">Uygulama Özellikleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheck className="w-6 h-6 text-finanqa-green-1 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <h2 className="text-3xl font-semibold text-finanqa-green-1 mb-8 text-center">Kullanıcı Yorumları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Kullanıcı {index}</h4>
                    <p className="text-gray-600 text-sm">Finanqa Kullanıcısı</p>
                  </div>
                </div>
                <p className="text-gray-700">
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
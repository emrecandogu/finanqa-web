import React from 'react';
import { FaChartLine, FaRobot, FaGraduationCap, FaMobileAlt, FaLock, FaChartPie } from 'react-icons/fa';

const features = [
  {
    icon: <FaChartLine className="w-10 h-10" />,
    title: 'Bütçe Takibi',
    description: 'Gelir ve giderlerinizi kolayca takip edin, finansal durumunuzu anlık olarak görüntüleyin.'
  },
  {
    icon: <FaRobot className="w-10 h-10" />,
    title: 'Yapay Zeka Önerileri',
    description: 'Kişiselleştirilmiş finansal öneriler ve harcama alışkanlıklarınızı iyileştiren tavsiyeler.'
  },
  {
    icon: <FaGraduationCap className="w-10 h-10" />,
    title: 'Finansal Eğitim',
    description: 'Finansal okuryazarlığınızı geliştirmek için hazırlanmış eğitim içerikleri ve kaynaklar.'
  },
  {
    icon: <FaMobileAlt className="w-10 h-10" />,
    title: 'Mobil Uygulama',
    description: 'Finansal yönetiminizi her an, her yerden kolayca yapın.'
  },
  {
    icon: <FaLock className="w-10 h-10" />,
    title: 'Güvenli Altyapı',
    description: 'En son güvenlik standartlarıyla korunan kişisel verileriniz.'
  },
  {
    icon: <FaChartPie className="w-10 h-10" />,
    title: 'Detaylı Raporlar',
    description: 'Finansal durumunuzu analiz eden kapsamlı raporlar ve grafikler.'
  }
];

export default function OzelliklerPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-8 sm:mb-12 text-center">Özellikler</h1>
        <p className="text-base sm:text-lg text-finanqa-green-1/80 text-center mb-8 max-w-2xl mx-auto">
          Finanqa'nın sunduğu güçlü araçlar ve teknolojilerle finansal yolculuğunuzu kolaylaştırın.
        </p>
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center text-center hover:scale-105 transition-transform duration-200 cursor-pointer h-full"
            >
              <div className="text-finanqa-green-1 mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
import React from 'react';
import { FaChartLine, FaRobot, FaGraduationCap, FaMobileAlt, FaLock, FaChartPie } from 'react-icons/fa';

const features = [
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Bütçe Takibi',
    description: 'Gelir ve giderlerinizi kolayca takip edin, finansal durumunuzu anlık olarak görüntüleyin.'
  },
  {
    icon: <FaRobot className="w-8 h-8" />,
    title: 'Yapay Zeka Önerileri',
    description: 'Kişiselleştirilmiş finansal öneriler ve harcama alışkanlıklarınızı iyileştiren tavsiyeler.'
  },
  {
    icon: <FaGraduationCap className="w-8 h-8" />,
    title: 'Finansal Eğitim',
    description: 'Finansal okuryazarlığınızı geliştirmek için hazırlanmış eğitim içerikleri ve kaynaklar.'
  },
  {
    icon: <FaMobileAlt className="w-8 h-8" />,
    title: 'Mobil Uygulama',
    description: 'Finansal yönetiminizi her an, her yerden kolayca yapın.'
  },
  {
    icon: <FaLock className="w-8 h-8" />,
    title: 'Güvenli Altyapı',
    description: 'En son güvenlik standartlarıyla korunan kişisel verileriniz.'
  },
  {
    icon: <FaChartPie className="w-8 h-8" />,
    title: 'Detaylı Raporlar',
    description: 'Finansal durumunuzu analiz eden kapsamlı raporlar ve grafikler.'
  }
];

export default function OzelliklerPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-finanqa-green-1 mb-12 text-center">Özellikler</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-finanqa-green-1 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
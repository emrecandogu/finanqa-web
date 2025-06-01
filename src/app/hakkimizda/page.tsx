import React from 'react';
import { FaUserTie } from 'react-icons/fa';

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-10 sm:mb-12 text-center">Hakkımızda</h1>

        {/* About Finanqa Section */}
        <section className="mb-12 sm:mb-16">
          <div className="prose prose-lg mx-auto text-center max-w-2xl">
            <p className="text-gray-700">
              Finanqa, finansal okuryazarlığı artırmak ve kişisel finans yönetimini kolaylaştırmak amacıyla kurulmuş yenilikçi bir fintech platformudur. 
              Kullanıcılarımıza bütçe takibi, finansal eğitim ve yapay zeka destekli öneriler sunarak, finansal hedeflerine ulaşmalarında yardımcı oluyoruz.
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-finanqa-green-1 mb-6 sm:mb-8 text-center">Kurucularımız</h2>
          {/* Mobilde yatay scroll, masaüstünde grid */}
          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-8 md:overflow-visible pb-2 md:pb-0 snap-x md:snap-none">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="min-w-[260px] max-w-xs w-full bg-white rounded-2xl shadow-lg p-6 text-center flex-shrink-0 md:min-w-0 md:max-w-none md:hover:scale-105 transition-transform duration-200 snap-center"
              >
                <div className="w-24 h-24 bg-finanqa-cream rounded-full mx-auto mb-4 flex items-center justify-center text-finanqa-green-1 text-4xl">
                  <FaUserTie />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">Kurucu {index}</h3>
                <p className="text-gray-600 text-sm">Pozisyon</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-8 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center md:items-start md:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-finanqa-green-1 mb-2 sm:mb-4">Misyonumuz</h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Finansal okuryazarlığı artırmak ve herkesin finansal hedeflerine ulaşmasına yardımcı olmak için 
                yenilikçi teknolojiler geliştirmek.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center md:items-start md:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-finanqa-green-1 mb-2 sm:mb-4">Vizyonumuz</h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Türkiye'nin en güvenilir ve kullanıcı dostu kişisel finans platformu olmak ve 
                finansal teknolojiler alanında global bir marka haline gelmek.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 
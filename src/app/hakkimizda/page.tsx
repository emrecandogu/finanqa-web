import React from 'react';

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-finanqa-green-1 mb-12 text-center">Hakkımızda</h1>

        {/* About Finanqa Section */}
        <section className="mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700">
              Finanqa, finansal okuryazarlığı artırmak ve kişisel finans yönetimini kolaylaştırmak amacıyla kurulmuş yenilikçi bir fintech platformudur. 
              Kullanıcılarımıza bütçe takibi, finansal eğitim ve yapay zeka destekli öneriler sunarak, finansal hedeflerine ulaşmalarında yardımcı oluyoruz.
            </p>
          </div>
        </section>

        {/* Founders Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-finanqa-green-1 mb-8 text-center">Kurucularımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Kurucu {index}</h3>
                <p className="text-gray-600">Pozisyon</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-finanqa-green-1 mb-4">Misyonumuz</h2>
              <p className="text-gray-700">
                Finansal okuryazarlığı artırmak ve herkesin finansal hedeflerine ulaşmasına yardımcı olmak için 
                yenilikçi teknolojiler geliştirmek.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-finanqa-green-1 mb-4">Vizyonumuz</h2>
              <p className="text-gray-700">
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
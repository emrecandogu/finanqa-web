import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LearnSection() {
  return (
    <section className="section-padding bg-white" id="learn">
      <div className="container-width">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Görsel alanı */}
          <div className="flex items-center justify-center h-[600px] hidden lg:block order-1">
            <div className="relative w-[500px] h-auto">
              <Image
                src="/images/anqa/anqa_mobil_transparan.png"
                alt="anqa öğreniyor"
                width={500}
                height={500}
                className="object-contain mx-auto lg:scale-105"
                priority
              />
            </div>
          </div>

          {/* Metin alanı */}
          <div className="space-y-6 order-2">
            <h2 className="text-4xl font-bold">Finansal Okuryazarlığınızı Geliştirin</h2>
            <p className="text-lg text-finanqa-green-1/80">
              Finanqa'nın eğlenceli ve interaktif öğrenme platformuyla finans dünyasını keşfedin. 
              Türkçe makaleler, eğlenceli quizler ve kapsamlı finans sözlüğü ile finansal bilginizi artırın.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-finanqa-cream p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#1b9c85] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Makaleler</h3>
                <p className="text-finanqa-green-1/70">Kapsamlı ve güncel finans makaleleri</p>
              </div>

              <div className="bg-finanqa-cream p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#1b9c85] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quizler</h3>
                <p className="text-finanqa-green-1/70">Bilginizi test edin ve öğrenin</p>
              </div>

              <div className="bg-finanqa-cream p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#1b9c85] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sözlük</h3>
                <p className="text-finanqa-green-1/70">Finansal terimleri keşfedin</p>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/ogren" className="btn-primary inline-flex items-center gap-2">
                Keşfet
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
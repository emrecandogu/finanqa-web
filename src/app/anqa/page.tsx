'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AnqaPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/images/anqa/anqa_main_transparan.png"
            alt="Anqa Maskot"
            width={180}
            height={180}
            className="object-contain drop-shadow-xl rounded-full bg-white/80"
            priority
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-finanqa-green-1 mb-4 tracking-tight">Merhaba, ben Anqa!</h1>
        <div className="flex justify-center mb-4">
          <span className="block w-24 h-2 rounded-full bg-gradient-to-r from-finanqa-green-1 via-blue-400 to-finanqa-green-2 opacity-70"></span>
        </div>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Ben Finanqa'nın hem maskotu hem de geliştirilmekte olan yapay zeka asistanıyım. Finansal yolculuğunuzda size rehberlik etmek için sürekli öğrenmeye devam ediyorum.
          <br />
          Amacım; finansal okuryazarlığınızı artırmak, bütçe yönetimi, yatırım, tasarruf ve daha birçok konuda size kişiselleştirilmiş öneriler sunmak.
        </p>
        <div className="bg-finanqa-green-1/10 rounded-xl p-6 mb-6">
                      <p className="text-finanqa-green-1 font-semibold text-lg mb-2">Anqa sürekli gelişiyor!</p>
          <p className="text-gray-600">Yapay zeka destekli finansal asistanınız için bizi takipte kalın.</p>
        </div>
        <Link
          href="/akademi"
          className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-finanqa-green-1 via-blue-400 to-finanqa-green-2 text-white font-extrabold text-lg sm:text-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200 cursor-pointer animate-bounce-slow"
          style={{ letterSpacing: '.01em' }}
        >
          🚀 Ben gelene kadar <span className="underline underline-offset-4 decoration-white/60">finansal bilgilerini güçlendirmeye</span> devam et!
        </Link>
      </div>
    </div>
  );
} 
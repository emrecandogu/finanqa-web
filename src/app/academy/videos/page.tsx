'use client';
import Link from 'next/link';

const VideosPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-6">Eğitim Videoları</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Finansal okuryazarlığınızı geliştirmek için hazırladığımız video içeriklerimiz şu anda prodüksiyon aşamasında. 
            Bu süreçte size faydalı olabilecek diğer eğitim materyallerimizi keşfedebilirsiniz.
          </p>
          
          {/* Coming Soon Animation */}
          <div className="relative max-w-md mx-auto mb-12">
            <div className="bg-gradient-to-r from-finanqa-green-1 to-finanqa-light-green rounded-2xl p-8 text-white">
              <div className="animate-pulse">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Video İçerikler Hazırlanıyor</h3>
                <p className="text-white/90 text-sm">
                  Uzman eğitmenlerimiz sizin için en kaliteli içerikleri hazırlıyor
                </p>
              </div>
            </div>
          </div>

          {/* Alternative Content Suggestions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Link href="/academy/articles" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-12 h-12 bg-finanqa-green-1/10 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-finanqa-green-1/20 transition-colors">
                <svg className="w-6 h-6 text-finanqa-green-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-finanqa-green-1 mb-2">Makaleler</h3>
              <p className="text-gray-600 text-sm">Detaylı finansal rehberler ve analizler</p>
            </Link>
            
            <Link href="/academy/quizzes" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-12 h-12 bg-finanqa-light-green/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-finanqa-light-green/30 transition-colors">
                <svg className="w-6 h-6 text-finanqa-green-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-finanqa-green-1 mb-2">Quizler</h3>
              <p className="text-gray-600 text-sm">Bilginizi test edin ve öğrenin</p>
            </Link>
            
            <Link href="/academy/games" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-12 h-12 bg-finanqa-green-2/20 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:bg-finanqa-green-2/30 transition-colors">
                <svg className="w-6 h-6 text-finanqa-green-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a2.5 2.5 0 110 5H9m4.5-5H15a2.5 2.5 0 110 5h-1.5m-5-5v5m5-5v5" />
                </svg>
              </div>
              <h3 className="font-bold text-finanqa-green-1 mb-2">Oyunlar</h3>
              <p className="text-gray-600 text-sm">Eğlenceli öğrenme deneyimi</p>
            </Link>
          </div>

          {/* Progress Indicator */}
          <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold text-finanqa-green-1 mb-3">Gelişim Süreci</h4>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Video İçerik Hazırlığı</span>
              <span>%75</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-finanqa-green-1 to-finanqa-light-green h-2 rounded-full" style={{width: '75%'}}></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Yakında sizlerle buluşacak olan video içeriklerimizin hazırlık süreci devam ediyor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosPage; 
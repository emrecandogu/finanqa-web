'use client';

import React from 'react';
import { HelpCircle, MessageCircle, BookOpen, Shield } from 'lucide-react';
import FAQAccordion from '@/components/features/faq/FAQAccordion';
import FAQSearch from '@/components/features/faq/FAQSearch';

const faqCategories = [
  {
    id: 'genel',
    title: 'Genel Sorular',
    icon: HelpCircle,
    color: 'from-finanqa-green-1 to-finanqa-green-1/90',
    questions: [
      {
        question: 'Finanqa nedir ve nasıl çalışır?',
        answer: 'Finanqa, yapay zeka destekli kişisel finans yönetim platformudur. Bütçe takibi, finansal eğitim ve kişiselleştirilmiş öneriler sunarak finansal hedeflerinize ulaşmanıza yardımcı olur. Platform, harcama alışkanlıklarınızı analiz ederek size özel tavsiyelerde bulunur.'
      },
      {
        question: 'Finanqa ücretsiz mi?',
        answer: 'Finanqa\'nın temel özellikleri ücretsizdir. Akademi bölümü, temel bütçe takibi ve finansal eğitim içerikleri herkes için erişilebilir. Premium özellikler için farklı abonelik seçenekleri sunulmaktadır.'
      },
      {
        question: 'Hangi cihazlarda kullanabilirim?',
        answer: 'Finanqa web platformu tüm modern tarayıcılarda çalışır. Ayrıca iOS ve Android için mobil uygulamamız da mevcuttur. Verileriniz tüm cihazlarda senkronize edilir.'
      },
      {
        question: 'Nasıl başlayabilirim?',
        answer: 'Finanqa\'ya başlamak çok kolay! Web sitemizden ücretsiz hesap oluşturun, temel bilgilerinizi girin ve finansal hedeflerinizi belirleyin. Sistem size özel bir öğrenme yolu oluşturacaktır.'
      }
    ]
  },
  {
    id: 'guvenlik',
    title: 'Güvenlik ve Gizlilik',
    icon: Shield,
    color: 'from-finanqa-light-green to-finanqa-green-2',
    questions: [
      {
        question: 'Verilerim güvende mi?',
        answer: 'Evet, verilerinizin güvenliği bizim önceliğimizdir. 256-bit SSL şifreleme, iki faktörlü kimlik doğrulama ve düzenli güvenlik denetimleri ile verilerinizi koruyoruz. Hiçbir finansal bilginiz üçüncü taraflarla paylaşılmaz.'
      },
      {
        question: 'Banka bilgilerimi paylaşmam gerekiyor mu?',
        answer: 'Hayır, banka şifrelerinizi bizimle paylaşmanız gerekmez. Güvenli API bağlantıları üzerinden sadece gerekli işlem verilerinize erişim sağlarız. Tüm bağlantılar bankacılık standartlarında şifrelenir.'
      },
      {
        question: 'Hesabımı nasıl silebilirim?',
        answer: 'Hesabınızı istediğiniz zaman silebilirsiniz. Ayarlar bölümünden "Hesabı Sil" seçeneğini kullanarak tüm verilerinizi kalıcı olarak silebilirsiniz. Bu işlem geri alınamaz.'
      },
      {
        question: 'KVKK uyumlu musunuz?',
        answer: 'Evet, Finanqa KVKK (Kişisel Verilerin Korunması Kanunu) ve GDPR standartlarına tam uyumludur. Kişisel verilerinizin işlenmesi hakkında detaylı bilgi için Gizlilik Politikamızı inceleyebilirsiniz.'
      }
    ]
  },
  {
    id: 'ozellikler',
    title: 'Özellikler ve Kullanım',
    icon: BookOpen,
    color: 'from-finanqa-green-1/90 to-finanqa-light-green',
    questions: [
      {
        question: 'Yapay zeka önerileri nasıl çalışır?',
        answer: 'Yapay zeka sistemimiz, harcama alışkanlıklarınızı, gelir durumunuzu ve finansal hedeflerinizi analiz ederek kişiselleştirilmiş öneriler sunar. Zaman içinde sizi daha iyi tanıyarak önerilerini geliştirir.'
      },
      {
        question: 'Bütçe takibi nasıl yapılır?',
        answer: 'Gelir ve giderlerinizi kategorilere ayırarak bütçenizi oluşturun. Sistem otomatik olarak harcamalarınızı takip eder ve bütçe limitlerini aştığınızda sizi uyarır. Görsel raporlarla harcama trendlerinizi görebilirsiniz.'
      },
      {
        question: 'Finansal eğitim içerikleri nelerdir?',
        answer: 'Akademi bölümümüzde makaleler, videolar, interaktif quizler, finansal sözlük ve eğitici oyunlar bulunur. Temel finansal okuryazarlıktan ileri yatırım stratejilerine kadar geniş bir yelpazede içerik sunuyoruz.'
      },
      {
        question: 'Hedef takibi nasıl çalışır?',
        answer: 'Finansal hedeflerinizi (ev almak, tatil, emeklilik vb.) belirleyin ve sistem size ulaşmak için gereken tasarruf planını oluştursun. İlerlemenizi takip edebilir ve hedeflerinizi güncelleyebilirsiniz.'
      }
    ]
  },
  {
    id: 'teknik',
    title: 'Teknik Destek',
    icon: MessageCircle,
    color: 'from-finanqa-green-2 to-finanqa-light-green',
    questions: [
      {
        question: 'Uygulama çalışmıyor, ne yapmalıyım?',
        answer: 'Önce tarayıcınızı yenileyin ve çerezleri temizleyin. Sorun devam ederse farklı bir tarayıcı deneyin. Mobil uygulamada sorun yaşıyorsanız uygulamayı kapatıp yeniden açın veya güncelleyin.'
      },
      {
        question: 'Şifremi unuttum, nasıl sıfırlayabilirim?',
        answer: 'Giriş sayfasında "Şifremi Unuttum" linkine tıklayın. E-posta adresinizi girin ve size gönderilen link ile şifrenizi sıfırlayın. Güvenlik için güçlü bir şifre seçmeyi unutmayın.'
      },
      {
        question: 'Verilerim senkronize olmuyor?',
        answer: 'İnternet bağlantınızı kontrol edin ve uygulamayı yenileyin. Sorun devam ederse çıkış yapıp tekrar giriş yapın. Hala sorun yaşıyorsanız destek ekibimizle iletişime geçin.'
      },
      {
        question: 'Nasıl destek alabilirim?',
        answer: 'İletişim sayfamızdan bize ulaşabilir, e-posta gönderebilir veya canlı destek hattımızı kullanabilirsiniz. Genellikle 24 saat içinde geri dönüş yapıyoruz.'
      }
    ]
  }
];

export default function SSSPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-4">
            Sıkça Sorulan Sorular
          </h1>
          <div className="flex justify-center mb-6">
            <span className="block w-32 h-2 rounded-full bg-gradient-to-r from-finanqa-green-1 via-finanqa-light-green to-finanqa-green-2 opacity-70"></span>
          </div>
          <p className="text-lg text-finanqa-green-1/80 max-w-3xl mx-auto">
            Finanqa hakkında merak ettiğiniz tüm soruların cevapları burada. 
            Aradığınız cevabı bulamazsanız bizimle iletişime geçmekten çekinmeyin.
          </p>
        </div>

        {/* Search Component */}
        <FAQSearch categories={faqCategories} />

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => (
            <section key={category.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {category.title}
                  </h2>
                </div>
              </div>

              {/* Questions */}
              <div className="p-6">
                <FAQAccordion questions={category.questions} />
              </div>
            </section>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-finanqa-green-1 mb-4">
              Aradığınız cevabı bulamadınız mı?
            </h3>
            <p className="text-gray-600 mb-6">
              Sorularınız için bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-finanqa-green-1 text-white rounded-lg hover:bg-finanqa-green-1/90 transition-colors font-semibold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                İletişime Geç
              </a>
              <a
                href="mailto:info@finanqa.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-finanqa-light-green text-finanqa-green-1 rounded-lg hover:bg-finanqa-light-green/90 transition-colors font-semibold"
              >
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
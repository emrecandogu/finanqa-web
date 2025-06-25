import React from 'react';
import { Shield, Eye, Lock, FileText, Users, AlertTriangle, Mail, Calendar } from 'lucide-react';

const privacySections = [
  {
    id: 'genel-bilgiler',
    title: 'Genel Bilgiler',
    icon: FileText,
    content: [
      'Bu Gizlilik Politikası, Finanqa platformu ("Platform", "Uygulama", "Hizmet") tarafından kişisel verilerinizin nasıl toplandığı, kullanıldığı, saklandığı ve korunduğu hakkında bilgi vermektedir.',
      'Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve Avrupa Birliği Genel Veri Koruma Yönetmeliği (GDPR) uyarınca hazırlanmıştır.',
             'Platform\'u kullanarak bu Gizlilik Politikası\'nı kabul etmiş sayılırsınız. Bu politika platform geliştirme sürecinde güncellenebilir.'
    ]
  },
  {
    id: 'toplanan-veriler',
    title: 'Toplanan Kişisel Veriler',
    icon: Eye,
    content: [
      'Kimlik Bilgileri: Ad, soyad, e-posta adresi, telefon numarası',
             'Finansal Bilgiler: Gelir durumu, harcama kategorileri, bütçe hedefleri (platform özelliklerine göre)',
      'Teknik Bilgiler: IP adresi, tarayıcı bilgileri, cihaz bilgileri, kullanım istatistikleri',
      'İletişim Bilgileri: Destek talepleri, geri bildirimler, iletişim geçmişi',
      'Platform Kullanım Verileri: Öğrenme ilerlemesi, quiz sonuçları, etkileşim verileri'
    ]
  },
  {
    id: 'veri-kullanimi',
    title: 'Verilerin Kullanım Amaçları',
    icon: Users,
    content: [
      'Hizmet Sunumu: Platform özelliklerinin sağlanması ve kişiselleştirilmiş deneyim oluşturulması',
      'İletişim: Hesap bildirimleri, güvenlik uyarıları ve destek hizmetleri',
      'Geliştirme: Hizmet kalitesinin artırılması ve yeni özelliklerin geliştirilmesi',
      'Güvenlik: Dolandırıcılık önleme, güvenlik ihlallerinin tespiti ve önlenmesi',
      'Yasal Yükümlülükler: Mevzuat gereği saklama ve raporlama yükümlülüklerinin yerine getirilmesi'
    ]
  },
  {
    id: 'veri-guvenlik',
    title: 'Veri Güvenliği',
    icon: Lock,
    content: [
      'Şifreleme: Tüm veriler 256-bit SSL şifreleme ile korunmaktadır',
      'Erişim Kontrolü: Verilere erişim, yetkilendirilmiş personel ile sınırlıdır',
      'Güvenlik Denetimleri: Düzenli güvenlik testleri ve denetimler yapılmaktadır',
      'Yedekleme: Veriler güvenli yedekleme sistemleri ile korunmaktadır',
      'İzleme: 7/24 güvenlik izleme ve olay müdahale sistemleri aktiftir'
    ]
  },
  {
    id: 'haklariniz',
    title: 'Kişisel Veri Sahibi Hakları',
    icon: Shield,
    content: [
      'Bilgi Alma Hakkı: Hangi kişisel verilerinizin işlendiğini öğrenme hakkı',
      'Düzeltme Hakkı: Yanlış veya eksik verilerin düzeltilmesini talep etme hakkı',
      'Silme Hakkı: Belirli koşullarda verilerinizin silinmesini talep etme hakkı',
      'İşlemeyi Durdurma Hakkı: Veri işlemenin durdurulmasını talep etme hakkı',
      'Taşınabilirlik Hakkı: Verilerinizi yapılandırılmış formatta alma hakkı',
      'İtiraz Hakkı: Veri işleme faaliyetlerine itiraz etme hakkı'
    ]
  },
  {
    id: 'cerezler',
    title: 'Çerez Politikası',
    icon: AlertTriangle,
    content: [
      'Zorunlu Çerezler: Platform\'un temel işlevselliği için gerekli çerezler',
      'Analitik Çerezler: Kullanım istatistikleri ve performans analizi için kullanılan çerezler',
      'Fonksiyonel Çerezler: Kullanıcı tercihlerini hatırlayan çerezler',
      'Pazarlama Çerezleri: Kişiselleştirilmiş içerik sunumu için kullanılan çerezler',
             'Çerez yönetimi tarayıcı ayarlarınızdan yapılabilir. Detaylı bilgi için destek ekibimizle iletişime geçebilirsiniz.'
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-finanqa-green-1 to-finanqa-light-green rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-4">
            Gizlilik Politikası
          </h1>
          <div className="flex justify-center mb-6">
            <span className="block w-32 h-2 rounded-full bg-gradient-to-r from-finanqa-green-1 via-finanqa-light-green to-finanqa-green-2 opacity-70"></span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kişisel verilerinizin güvenliği bizim önceliğimizdir. Bu politika, verilerinizin nasıl toplandığı, 
            kullanıldığı ve korunduğu hakkında detaylı bilgi sağlar.
          </p>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 text-blue-800">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-medium">Önemli Bilgilendirme:</span>
            </div>
            <p className="text-blue-700 text-sm mt-1">
              Bu gizlilik politikası genel çerçeveyi sunmaktadır. Platform geliştirme sürecinde güncellenecek olup, 
              nihai versiyonu hukuki inceleme sonrası yayınlanacaktır.
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span className="font-medium">Son Güncelleme:</span>
            <span>{new Date().toLocaleDateString('tr-TR')}</span>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {privacySections.map((section, index) => (
            <section key={section.id} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              {/* Section Header */}
              <div className="bg-gradient-to-r from-finanqa-green-1/10 to-finanqa-light-green/10 p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-finanqa-green-1 to-finanqa-light-green rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-finanqa-green-1">
                      {index + 1}. {section.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Section Content */}
              <div className="p-6">
                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-finanqa-green-1 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-r from-finanqa-green-1 to-finanqa-light-green rounded-2xl p-8 text-white">
          <div className="text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Sorularınız mı var?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Gizlilik politikamız hakkında sorularınız varsa veya kişisel veri haklarınızı kullanmak istiyorsanız 
              bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-finanqa-green-1 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
              >
                İletişime Geç
              </a>
              <a
                href="mailto:privacy@finanqa.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                privacy@finanqa.com
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <a
            href="/terms-of-service"
            className="text-finanqa-green-1 hover:text-finanqa-light-green transition-colors font-medium"
          >
            ← Hizmet Şartları
          </a>
          <a
            href="/sss"
            className="text-finanqa-green-1 hover:text-finanqa-light-green transition-colors font-medium"
          >
            Sıkça Sorulan Sorular →
          </a>
        </div>
      </div>
    </div>
  );
} 
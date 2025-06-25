import React from 'react';
import { FileText, Users, Shield, AlertTriangle, Scale, CreditCard, Mail, Calendar, CheckCircle } from 'lucide-react';

const termsSections = [
  {
    id: 'genel-hukumler',
    title: 'Genel Hükümler',
    icon: FileText,
    content: [
      'Bu Hizmet Şartları ("Şartlar"), Finanqa platformu ("Platform", "Hizmet") kullanımına ilişkin kuralları belirler.',
      'Platform\'u kullanarak bu şartları kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız Platform\'u kullanmamalısınız.',
             'Bu şartlar platform geliştirme sürecinde güncellenebilir.',
      'Şartlar, önceden bildirimde bulunularak değiştirilebilir. Güncel şartlar Platform üzerinden erişilebilir.'
    ]
  },
  {
    id: 'hesap-kullanimi',
    title: 'Hesap Oluşturma ve Kullanım',
    icon: Users,
    content: [
      'Platform\'u kullanmak için 18 yaşını doldurmuş olmanız veya yasal vasi onayına sahip olmanız gerekir.',
      'Hesap bilgilerinizin doğru, güncel ve eksiksiz olmasından sorumlusunuz.',
      'Hesap güvenliğinizden tamamen siz sorumlusunuz. Şifrenizi kimseyle paylaşmamalısınız.',
      'Bir hesap sadece bir kişi tarafından kullanılabilir. Hesap paylaşımı yasaktır.',
      'Hesabınızda şüpheli aktivite fark ederseniz derhal bizimle iletişime geçmelisiniz.'
    ]
  },
  {
    id: 'hizmet-kullanimi',
    title: 'Hizmet Kullanım Kuralları',
    icon: CheckCircle,
    content: [
      'Platform\'u yalnızca yasal amaçlar için kullanabilirsiniz.',
      'Başkalarının haklarını ihlal edecek şekilde Platform\'u kullanamazsınız.',
      'Zararlı yazılım, spam veya yanıltıcı içerik paylaşamazsınız.',
      'Platform\'un güvenlik sistemlerini aşmaya çalışamazsınız.',
      'Ticari amaçlı kullanım için önceden yazılı izin almalısınız.',
             'Platform özellikleri genel eğitim amaçlıdır, kişisel finansal tavsiye niteliği taşımaz.'
    ]
  },
  {
    id: 'finansal-bilgiler',
    title: 'Finansal Bilgiler ve Tavsiyeler',
    icon: CreditCard,
    content: [
      'Platform\'da sunulan bilgiler genel eğitim amaçlıdır, kişisel finansal tavsiye niteliği taşımaz.',
      'Yatırım kararlarınızı vermeden önce profesyonel finansal danışman görüşü almalısınız.',
             'Platform\'daki hesaplamalar ve öneriler genel bilgilendirme amaçlıdır, gerçek sonuçlar farklılık gösterebilir.',
      'Finansal kayıplardan Platform sorumlu tutulamaz.',
      'Üçüncü taraf finansal hizmet sağlayıcılarla olan ilişkilerinizden Platform sorumlu değildir.'
    ]
  },
  {
    id: 'fikri-mulkiyet',
    title: 'Fikri Mülkiyet Hakları',
    icon: Shield,
    content: [
      'Platform\'daki tüm içerik, tasarım ve yazılım Finanqa\'nın fikri mülkiyetidir.',
      'İçerikleri kişisel kullanım dışında kopyalayamaz, dağıtamaz veya değiştiremezsiniz.',
      'Finanqa markası ve logoları tescilli markalardır, izinsiz kullanılamaz.',
      'Kullanıcı tarafından oluşturulan içerikler için gerekli lisansları Platform\'a vermiş sayılırsınız.',
      'Telif hakkı ihlali durumunda derhal bildirimde bulunun.'
    ]
  },
  {
    id: 'sorumluluk',
    title: 'Sorumluluk Sınırlamaları',
    icon: Scale,
    content: [
      'Platform "olduğu gibi" sunulmaktadır, hiçbir garanti verilmemektedir.',
      'Hizmet kesintileri, veri kaybı veya teknik sorunlardan kaynaklanan zararlardan sorumlu değiliz.',
      'Üçüncü taraf bağlantıları ve hizmetleri kendi sorumluluğunuzda kullanırsınız.',
      'Maksimum sorumluluk tutarı, son 12 ayda ödediğiniz ücretlerle sınırlıdır.',
      'Dolaylı, özel veya sonuçsal zararlardan sorumlu tutulamayız.'
    ]
  },
  {
    id: 'fesih',
    title: 'Hesap Feshi ve Sonlandırma',
    icon: AlertTriangle,
    content: [
      'Hesabınızı istediğiniz zaman kapatabilirsiniz.',
      'Şartları ihlal etmeniz durumunda hesabınız askıya alınabilir veya kapatılabilir.',
      'Hesap kapatıldığında verileriniz gizlilik politikası uyarınca işlenir.',
      'Ödenen ücretler, fesih durumunda iade edilmeyebilir.',
      'Fesih sonrası Platform kullanım hakları sona erer.'
    ]
  }
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-finanqa-green-1 to-finanqa-light-green rounded-2xl flex items-center justify-center">
              <Scale className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-4">
            Hizmet Şartları
          </h1>
          <div className="flex justify-center mb-6">
            <span className="block w-32 h-2 rounded-full bg-gradient-to-r from-finanqa-green-1 via-finanqa-light-green to-finanqa-green-2 opacity-70"></span>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Finanqa platformunu kullanırken uymanız gereken kurallar, haklarınız ve yükümlülükleriniz 
            hakkında detaylı bilgi.
          </p>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 text-blue-800">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-medium">Önemli Bilgilendirme:</span>
            </div>
            <p className="text-blue-700 text-sm mt-1">
              Bu hizmet şartları genel çerçeveyi sunmaktadır. Platform geliştirme sürecinde güncellenecek olup, 
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

        {/* Terms Sections */}
        <div className="space-y-8">
          {termsSections.map((section, index) => (
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

        {/* Important Notice */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
          <div className="text-center">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-900">
              Önemli Uyarı
            </h3>
            <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
              Bu platform eğitim amaçlıdır. Gerçek finansal kararlar vermeden önce mutlaka 
              profesyonel finansal danışman görüşü alınız. Platform hiçbir finansal tavsiye vermez.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8 bg-gradient-to-r from-finanqa-green-1 to-finanqa-light-green rounded-2xl p-8 text-white">
          <div className="text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Hukuki Sorularınız mı var?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Hizmet şartlarımız hakkında sorularınız varsa veya hukuki konularda 
              destek almak istiyorsanız bizimle iletişime geçebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-finanqa-green-1 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
              >
                İletişime Geç
              </a>
              <a
                href="mailto:legal@finanqa.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                legal@finanqa.com
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between items-center">
          <a
            href="/privacy-policy"
            className="text-finanqa-green-1 hover:text-finanqa-light-green transition-colors font-medium"
          >
            ← Gizlilik Politikası
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
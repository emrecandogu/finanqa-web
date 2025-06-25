import React from 'react';
import { Metadata } from 'next';
import { CircleUserRound, ArrowRight, Shield, Users, TrendingUp, Award, CheckCircle, Star, Building, Globe, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hakkımızda | Finanqa Ekibi ve Vizyonu',
  description: 'Finanqa\'nın misyonunu, vizyonunu ve finansal okuryazarlığı herkes için erişilebilir kılmayı hedefleyen ekibimizi tanıyın.',
};

const founders = [
  {
    name: 'EMRECAN DOĞU',
    position: 'Teknoloji Direktörü ve Kurucu Ortak',
    bio: 'Bilgisayar Mühendisliği alanında uzmanlaşmış, yapay zeka ve finansal teknolojilerde 8+ yıllık deneyime sahip. Modern teknolojileri kullanarak kullanıcı deneyimini önemsiyor ve fintech sektöründe inovatif çözümler geliştiriyor.',
    expertise: ['Full-Stack Development', 'AI/ML', 'Fintech', 'UX/UI Design'],
    education: 'Bilgisayar Mühendisliği',
    experience: '8+ Yıl Teknoloji & Fintech',
    slug: 'emrecan-dogu',
    linkedin: 'https://www.linkedin.com/in/emrecandogu1/',
  },
  {
    name: 'GÜRKAN GÖNÜL',
    position: 'İş Geliştirme Direktörü ve Kurucu Ortak',
    bio: 'İşletme ve operasyon yönetimi alanında uzman, büyüme stratejileri ve iş geliştirme süreçlerinde 6+ yıllık deneyime sahip. Takım ruhuna ve sürdürülebilir büyümeye odaklanarak Finanqa\'nın pazar konumunu güçlendiriyor.',
    expertise: ['İş Geliştirme', 'Stratejik Planlama', 'Operasyon Yönetimi', 'Pazar Analizi'],
    education: 'İşletme Yönetimi',
    experience: '6+ Yıl İş Geliştirme & Strategi',
    slug: 'gurkan-gonul',
    linkedin: 'https://www.linkedin.com/in/g%C3%BCrkan-g%C3%B6n%C3%BCl-609b5b253/',
  },
  {
    name: 'ELİF MÜRDÜN',
    position: 'Sosyal Medya Direktörü ve Kurucu Ortak',
    bio: 'Dijital pazarlama ve sosyal medya stratejileri alanında uzman, içerik oluşturma ve topluluk yönetiminde 5+ yıllık deneyime sahip. Kullanıcı deneyimini önemsiyor ve Finanqa\'nın dijital varlığını güçlendiriyor.',
    expertise: ['Sosyal Medya Yönetimi', 'İçerik Stratejisi', 'Dijital Pazarlama', 'Topluluk Yönetimi'],
    education: 'İletişim Fakültesi',
    experience: '5+ Yıl Dijital Pazarlama',
    slug: 'elif-murdun',
    linkedin: 'https://www.linkedin.com/in/elif-m%C3%BCrd%C3%BCn-490417254/',
  },
];

const companyStats = [
  { number: '10,000+', label: 'Aktif Kullanıcı', icon: Users },
  { number: '₺50M+', label: 'İşlem Hacmi', icon: TrendingUp },
  { number: '95%', label: 'Kullanıcı Memnuniyeti', icon: Star },
  { number: '24/7', label: 'Teknik Destek', icon: Shield },
];

const values = [
  {
    title: 'Güvenilirlik',
    description: 'Finansal verilerinizin güvenliği bizim önceliğimizdir. En yüksek güvenlik standartlarını uyguluyoruz.',
    icon: Shield,
  },
  {
    title: 'Şeffaflık',
    description: 'Tüm işlemlerimizde açık ve anlaşılır olmaya özen gösteriyor, kullanıcılarımızla dürüst iletişim kuruyoruz.',
    icon: CheckCircle,
  },
  {
    title: 'İnovasyon',
    description: 'Sürekli gelişim ve yenilik anlayışıyla, finansal teknolojilerde öncü çözümler geliştiriyoruz.',
    icon: Target,
  },
  {
    title: 'Kullanıcı Odaklılık',
    description: 'Her kararımızda kullanıcı deneyimini ön planda tutuyor, ihtiyaçlarınıza uygun çözümler sunuyoruz.',
    icon: Users,
  },
];

const achievements = [
  'ISO 27001 Bilgi Güvenliği Sertifikası',
  'PCI DSS Uyumluluk Sertifikası',
  'KVKK Uyum Belgesi',
  'Türkiye Fintech Derneği Üyeliği',
];

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-10 sm:mb-12 text-center">Hakkımızda</h1>

        {/* Company Story Section */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
            <div className="flex items-center justify-center mb-6">
              <Building className="text-finanqa-green-1 mr-3" size={32} />
              <h2 className="text-2xl sm:text-3xl font-semibold text-finanqa-green-1">Finanqa Hikayesi</h2>
            </div>
            <div className="prose prose-lg mx-auto text-center max-w-4xl">
              <p className="text-gray-700 mb-6">
                Finanqa, 2024 yılında finansal okuryazarlığı artırmak ve kişisel finans yönetimini herkese erişilebilir kılmak vizyonuyla kurulmuştur. 
                Üç deneyimli girişimci tarafından hayata geçirilen projemiz, Türkiye'de finansal teknolojiler alanında yenilikçi bir yaklaşım benimser.
              </p>
              <p className="text-gray-700 mb-6">
                Kurucu ekibimiz, teknoloji, iş geliştirme ve dijital pazarlama alanlarındaki birikimleriyle, finansal hizmetleri daha anlaşılır ve 
                kullanıcı dostu hale getirmeyi hedeflemektedir. Yapay zeka destekli öneriler, bütçe takibi ve finansal eğitim içerikleriyle 
                kullanıcılarımızın finansal hedeflerine ulaşmalarına destek oluyoruz.
              </p>
              <p className="text-gray-700">
                Bugün binlerce kullanıcıya hizmet veren Finanqa, sürekli gelişim ve kullanıcı geri bildirimlerini önceleyerek, 
                Türkiye'nin önde gelen fintech platformlarından biri olmayı hedeflemektedir.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-finanqa-green-1 mb-8 text-center">Sayılarla Finanqa</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <stat.icon className="text-finanqa-green-1 mx-auto mb-3" size={40} />
                <div className="text-2xl sm:text-3xl font-bold text-finanqa-green-1 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Founders Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-finanqa-green-1 mb-6 sm:mb-8 text-center">Kurucu Ekibimiz</h2>
          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-8 md:overflow-visible pb-2 md:pb-0 snap-x md:snap-none">
            {founders.map((founder, idx) => (
              <div
                key={founder.slug}
                className="min-w-[300px] max-w-sm w-full bg-gradient-to-br from-finanqa-green-1/5 via-white to-finanqa-green-2/5 rounded-2xl shadow-lg p-8 text-center flex-shrink-0 md:min-w-0 md:max-w-none md:hover:scale-105 transition-transform duration-200 snap-center"
              >
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-tr from-finanqa-green-1/20 to-finanqa-green-2/20 border-4 border-finanqa-green-1/10">
                  <CircleUserRound className="text-finanqa-green-1" size={56} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-finanqa-green-1">{founder.name}</h3>
                <p className="text-finanqa-green-1 text-sm mb-2 font-semibold">{founder.position}</p>
                <div className="text-xs text-gray-600 mb-2">{founder.education} • {founder.experience}</div>
                <p className="text-gray-700 text-sm mb-4 min-h-[60px] leading-relaxed">{founder.bio}</p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-finanqa-green-1 mb-2">Uzmanlık Alanları:</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {founder.expertise.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-finanqa-green-1/10 text-finanqa-green-1 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 justify-center">
                  <Link
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold shadow hover:brightness-110 hover:scale-105 transition-all"
                  >
                    <Globe size={12} />
                    LinkedIn
                  </Link>
                  <Link
                    href={`/about-us/${founder.slug}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-gradient-to-r from-finanqa-green-1 to-finanqa-green-2 text-white text-xs font-semibold shadow hover:brightness-110 hover:scale-105 transition-all"
                  >
                    Detay
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-finanqa-green-1 mb-8 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <value.icon className="text-finanqa-green-1 mx-auto mb-4" size={48} />
                <h3 className="text-lg font-semibold text-finanqa-green-1 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust & Security Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-finanqa-green-1 mb-8 text-center">Güvenilirlik ve Uyumluluk</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-finanqa-green-1 mb-4">Güvenlik Standartlarımız</h3>
                <p className="text-gray-700 mb-4">
                  Finanqa olarak, kullanıcılarımızın finansal verilerinin güvenliği bizim en büyük önceliğimizdir. 
                  Uluslararası güvenlik standartlarına uygun altyapımızla, verilerinizi en yüksek seviyede koruyoruz.
                </p>
                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Award className="text-finanqa-green-1" size={16} />
                      <span className="text-sm text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-finanqa-green-1 mb-4">Teknolojik Altyapı</h3>
                <p className="text-gray-700 mb-4">
                  Modern bulut teknolojileri ve yapay zeka algoritmaları ile desteklenen platformumuz, 
                  7/24 kesintisiz hizmet sunarak kullanıcı deneyimini en üst seviyede tutar.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-finanqa-green-1/5 rounded-lg">
                    <div className="text-lg font-bold text-finanqa-green-1">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center p-3 bg-finanqa-green-1/5 rounded-lg">
                    <div className="text-lg font-bold text-finanqa-green-1">256-bit</div>
                    <div className="text-xs text-gray-600">SSL Şifreleme</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-8 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center md:items-start md:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-finanqa-green-1 mb-2 sm:mb-4">Misyonumuz</h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Finansal okuryazarlığı artırmak ve herkesin finansal hedeflerine ulaşmasına yardımcı olmak için 
                yenilikçi teknolojiler geliştirmek. Finansal hizmetleri daha şeffaf, anlaşılır ve erişilebilir kılarak 
                toplumsal refaha katkıda bulunmak.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center text-center md:items-start md:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-finanqa-green-1 mb-2 sm:mb-4">Vizyonumuz</h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Türkiye'nin en güvenilir ve kullanıcı dostu kişisel finans platformu olmak ve 
                finansal teknolojiler alanında global bir marka haline gelmek. Finansal eşitlik ve 
                okuryazarlık konularında öncü rol üstlenmek.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 
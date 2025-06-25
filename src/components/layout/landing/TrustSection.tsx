'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Users, TrendingUp, Star, Shield, CheckCircle, Award, Building, Globe } from 'lucide-react';

const companyStats = [
  { number: '10,000+', label: 'Aktif Kullanıcı', icon: Users, color: 'finanqa-green-1', borderColor: 'finanqa-green-1/20' },
  { number: '₺50M+', label: 'İşlem Hacmi', icon: TrendingUp, color: 'finanqa-light-green', borderColor: 'finanqa-light-green/30' },
  { number: '%95', label: 'Kullanıcı Memnuniyeti', icon: Star, color: 'finanqa-green-2', borderColor: 'finanqa-green-2/30' },
  { number: '24/7', label: 'Teknik Destek', icon: Shield, color: 'finanqa-green-1', borderColor: 'finanqa-green-1/20' },
];

const securityBadges = [
  { name: 'ISO 27001', description: 'Bilgi Güvenliği Sertifikası', icon: Shield },
  { name: 'PCI DSS', description: 'Ödeme Güvenliği Uyumlu', icon: CheckCircle },
  { name: 'KVKK Uyumlu', description: 'Veri Koruma Kanunu', icon: Award },
  { name: 'SSL Şifreli', description: '256-bit Güvenlik', icon: Building },
];

const foundersHighlight = [
  {
    name: 'EMRECAN DOĞU',
    role: 'Teknoloji Direktörü',
    experience: '8+ Yıl Teknoloji & Fintech',
    slug: 'emrecan-dogu'
  },
  {
    name: 'GÜRKAN GÖNÜL',
    role: 'İş Geliştirme Direktörü',
    experience: '6+ Yıl İş Geliştirme & Strategi',
    slug: 'gurkan-gonul'
  },
  {
    name: 'ELİF MÜRDÜN',
    role: 'Sosyal Medya Direktörü',
    experience: '5+ Yıl Dijital Pazarlama',
    slug: 'elif-murdun'
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-white" id="trust">
      <div className="container-width">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-finanqa-green-1 mb-3">
              Türkiye'nin Güvenilir Fintech Partneri
            </h2>
            <p className="text-base text-finanqa-green-1/80 max-w-md mx-auto">
              Binlerce kullanıcının güvendiği platform, uzman ekip ve güvenli altyapı
            </p>
          </div>

          {/* Mobile Stats - Horizontal Scroll */}
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-1 py-2 mb-8 scrollbar-hide">
            {companyStats.map((stat, index) => (
              <div
                key={index}
                className={`min-w-[140px] max-w-[150px] bg-white border-2 border-${stat.borderColor} rounded-2xl shadow-md p-4 text-center snap-center flex-shrink-0`}
              >
                <div className={`w-8 h-8 bg-${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                  <stat.icon className="text-white" size={20} />
                </div>
                <div className="text-2xl font-bold text-finanqa-green-1 mb-1">{stat.number}</div>
                <div className="text-finanqa-green-1/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mobile Security Badges */}
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-finanqa-green-1 mb-4">Güvenlik Sertifikaları</h3>
            <div className="grid grid-cols-2 gap-3">
              {securityBadges.map((badge, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-finanqa-green-1/10 rounded-xl p-3 text-center"
                >
                  <div className="w-8 h-8 bg-finanqa-green-1/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <badge.icon className="text-finanqa-green-1" size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-finanqa-green-1 mb-1">{badge.name}</h4>
                  <p className="text-xs text-finanqa-green-1/60">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Founders */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-finanqa-green-1 mb-4">Uzman Kurucu Ekibimiz</h3>
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-1 py-2 scrollbar-hide">
              {foundersHighlight.map((founder, index) => (
                <div
                  key={index}
                  className="min-w-[200px] max-w-[220px] bg-white border-2 border-finanqa-green-1/10 rounded-xl p-4 text-center snap-center flex-shrink-0"
                >
                  <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-finanqa-green-1/10">
                    <Users className="text-finanqa-green-1" size={24} />
                  </div>
                  <h4 className="text-sm font-bold text-finanqa-green-1 mb-1">{founder.name}</h4>
                  <p className="text-xs text-finanqa-green-1/70 mb-1">{founder.role}</p>
                  <p className="text-xs text-finanqa-green-1/60">{founder.experience}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/hakkimizda"
                className="text-finanqa-green-1 text-sm font-semibold underline underline-offset-2 hover:text-finanqa-green-2 transition-colors"
              >
                Ekibi Tanı →
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Desktop Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-finanqa-green-1 mb-4">
              Türkiye'nin Güvenilir Fintech Partneri
            </h2>
            <p className="text-lg text-finanqa-green-1/80 max-w-3xl mx-auto">
              Binlerce kullanıcının güvendiği platform, deneyimli uzman ekip ve bankacılık seviyesi güvenli altyapı ile finansal hedeflerinize ulaşın
            </p>
          </div>

          {/* Desktop Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Stats + Security */}
            <div className="space-y-8">
              {/* Stats Grid */}
              <div>
                <h3 className="text-2xl font-semibold text-finanqa-green-1 mb-6">Sayılarla Başarılarımız</h3>
                <div className="grid grid-cols-2 gap-4">
                  {companyStats.map((stat, index) => (
                    <div
                      key={index}
                      className={`bg-white border-2 border-${stat.borderColor} rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300`}
                    >
                      <div className={`w-10 h-10 bg-${stat.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                        <stat.icon className="text-white" size={24} />
                      </div>
                      <div className="text-3xl font-bold text-finanqa-green-1 mb-2">{stat.number}</div>
                      <div className="text-finanqa-green-1/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Badges */}
              <div>
                <h3 className="text-2xl font-semibold text-finanqa-green-1 mb-6">Güvenlik Sertifikaları</h3>
                <div className="grid grid-cols-2 gap-4">
                  {securityBadges.map((badge, index) => (
                    <div
                      key={index}
                      className="bg-white border-2 border-finanqa-green-1/10 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-finanqa-green-1/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <badge.icon className="text-finanqa-green-1" size={20} />
                      </div>
                      <h4 className="text-base font-bold text-finanqa-green-1 mb-1">{badge.name}</h4>
                      <p className="text-sm text-finanqa-green-1/60">{badge.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Founders + Mascot */}
            <div className="space-y-8">
              {/* Founders Section */}
              <div>
                <h3 className="text-2xl font-semibold text-finanqa-green-1 mb-6">Uzman Kurucu Ekibimiz</h3>
                <div className="space-y-4">
                  {foundersHighlight.map((founder, index) => (
                    <div
                      key={index}
                      className="bg-white border-2 border-finanqa-green-1/10 rounded-xl p-5 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-finanqa-green-1/10">
                          <Users className="text-finanqa-green-1" size={28} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-finanqa-green-1">{founder.name}</h4>
                          <p className="text-sm text-finanqa-green-1/80 mb-1">{founder.role}</p>
                          <p className="text-sm text-finanqa-green-1/60">{founder.experience}</p>
                        </div>
                        <Link
                          href={`/hakkimizda/${founder.slug}`}
                          className="text-finanqa-green-1 hover:text-finanqa-green-2 transition-colors"
                        >
                          <Globe size={20} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/hakkimizda"
                    className="text-finanqa-green-1 text-lg font-semibold underline underline-offset-2 hover:text-finanqa-green-2 transition-colors"
                  >
                    Tüm Ekibi Tanı →
                  </Link>
                </div>
              </div>

              {/* Mascot */}
              <div className="flex justify-center">
                <div className="relative w-[300px] h-[300px]">
                  <Image
                    src="/images/anqa/anqa_main_transparan.png"
                    alt="Anqa - Güvenilir finansal partner"
                    width={300}
                    height={300}
                    className="object-contain mx-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
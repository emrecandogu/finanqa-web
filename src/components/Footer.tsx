'use client';

import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const navigation = {
  main: [
    { name: 'Anasayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Özellikler', href: '/ozellikler' },
    { name: 'İletişim', href: '/iletisim' },
    { name: 'Gizlilik Politikası', href: '/privacy' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: FaTwitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: FaLinkedin,
    },
    {
      name: 'Instagram',
      href: '#',
      icon: FaInstagram,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-finanqa-green-1 text-white">
      <div className="container-width section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Sol üst - Logo ve açıklama */}
          <div className="space-y-4">
            <div className="text-white text-2xl font-bold">Finanqa</div>
            <p className="text-white/80">
              Yapay zeka destekli eğitimle finansal okuryazarlığı güçlendiriyoruz.
            </p>
          </div>

          {/* Hızlı bağlantılar */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim bilgileri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <FaEnvelope className="w-5 h-5" />
                <a href="mailto:support@finanqa.com">blabla@finanqa.com</a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="w-5 h-5" />
                <a href="tel:+18003462672">+90 555 555 55 55</a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span>Bornova / İzmir</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-5 h-5 opacity-0" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>

          {/* Sosyal medya */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Bizi Takip Edin</h3>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <item.icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Telif hakkı */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Finanqa. Tüm hakları saklıdır.</p>
          <p>DEMO SÜRÜM ED1.3</p>
        </div>
      </div>
    </footer>
  );
}

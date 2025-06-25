'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Twitter', href: '#', icon: <Twitter className="w-6 h-6" /> },
    { name: 'LinkedIn', href: '#', icon: <Linkedin className="w-6 h-6" /> },
    { name: 'Instagram', href: '#', icon: <Instagram className="w-6 h-6" /> },
  ];

  const contactInfo = [
    { name: 'info@finanqa.com', href: 'mailto:info@finanqa.com', icon: <Mail className="w-5 h-5" /> },
    { name: '+90 555 555 55 55', href: 'tel:+905555555555', icon: <Phone className="w-5 h-5" /> },
    { name: 'Bornova, İzmir', href: '#', icon: <MapPin className="w-5 h-5" /> },
  ];

  const quickLinks = [
    { name: 'Hakkımızda', href: '/about-us' },
    { name: 'Akademi', href: '/academy' },
    { name: 'İletişim', href: '/contact-us' },
    { name: 'SSS', href: '/sss' },
  ];

  return (
    <footer className="bg-finanqa-green-1 text-white pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">Finanqa</h3>
            <p className="text-gray-300 text-sm">
              Finansal okuryazarlığı herkes için erişilebilir kılma misyonuyla yola çıktık.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <ul className="space-y-3">
              {contactInfo.map(item => (
                <li key={item.name} className="flex items-center gap-3">
                  {item.icon}
                  <a href={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} className="text-gray-300 hover:text-white" aria-label={link.name}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 pb-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Finanqa. Tüm hakları saklıdır.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/terms-of-service" className="text-sm text-gray-400 hover:text-white">Hizmet Şartları</Link>
            <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">Gizlilik Politikası</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

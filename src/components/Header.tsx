'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Öğren', href: '/ogren' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Özellikler', href: '/ozellikler' },
    { name: 'Mobil Uygulama', href: '/mobil-uygulama' },
    { name: 'İletişim', href: '/iletisim' }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-lg bg-white/70 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-finanqa-green-1">Finanqa</span>
            </Link>
          </div>

          {/* Masaüstü Menü */}
          <nav className="hidden md:flex md:items-center md:space-x-8" aria-label="Ana menü">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-finanqa-green-1 hover:text-finanqa-light-green transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <button className="btn-primary">Uygulamayı İndir</button>
          </nav>

          {/* Mobil Menü Düğmesi */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-finanqa-green-1 hover:text-finanqa-light-green focus:outline-none"
              aria-label="Menüyü aç/kapat"
            >
              {!isMenuOpen ? (
                <FaBars className="h-6 w-6" />
              ) : (
                <FaTimes className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2" aria-label="Mobil menü">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-finanqa-green-1 hover:text-finanqa-light-green"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full btn-primary mt-4">Uygulamayı İndir</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

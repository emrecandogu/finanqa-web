import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function IletisimPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-finanqa-green-1 mb-12 text-center">İletişim</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Bize Ulaşın</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finanqa-green-1 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finanqa-green-1 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-finanqa-green-1 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-finanqa-green-1 text-white px-6 py-3 rounded-lg hover:bg-finanqa-light-green transition-colors"
              >
                Gönder
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaEnvelope className="w-6 h-6 text-finanqa-green-1 mt-1" />
                <div>
                  <h3 className="font-medium">E-posta</h3>
                  <p className="text-gray-600">info@finanqa.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="w-6 h-6 text-finanqa-green-1 mt-1" />
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <p className="text-gray-600">+90 (212) 123 45 67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="w-6 h-6 text-finanqa-green-1 mt-1" />
                <div>
                  <h3 className="font-medium">Adres</h3>
                  <p className="text-gray-600">
                    Levent, Büyükdere Cad. No:123<br />
                    34330 Beşiktaş/İstanbul
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-medium mb-4">Sosyal Medya</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-finanqa-green-1">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-finanqa-green-1">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-finanqa-green-1">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-finanqa-green-1">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-gray-200 rounded-lg">
              {/* Placeholder for embedded map */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 
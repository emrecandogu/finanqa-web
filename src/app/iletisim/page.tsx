import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function IletisimPage() {
  return (
    <div className="min-h-screen pt-20 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-finanqa-green-1 mb-10 sm:mb-12 text-center">İletişim</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8 lg:mb-0 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-finanqa-green-1">Bize Ulaşın</h2>
            <form className="space-y-5">
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
              {/* Placeholder for error/success message */}
              <div className="h-6 text-sm text-center text-red-500"></div>
              <button
                type="submit"
                className="w-full bg-finanqa-green-1 text-white px-6 py-3 rounded-lg hover:bg-finanqa-light-green transition-colors text-base font-semibold shadow-md"
              >
                Gönder
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-finanqa-green-1">İletişim Bilgileri</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <FaEnvelope className="w-6 h-6 text-finanqa-green-1 mt-1" />
                <div>
                  <h3 className="font-medium">E-posta</h3>
                  <p className="text-gray-600">blabla@finanqa.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="w-6 h-6 text-finanqa-green-1 mt-1" />
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <p className="text-gray-600">+90 555 555 55 55</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="w-6 h-6 text-finanqa-green-1 mt-1" />
                <div>
                  <h3 className="font-medium">Adres</h3>
                  <p className="text-gray-600">
                   Bornova / İzmir<br />
                   İzmir / Türkiye
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-medium mb-4">Sosyal Medya</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-finanqa-green-1 focus:outline-none focus:ring-2 focus:ring-finanqa-green-1 rounded-full p-2" aria-label="Facebook">
                  <FaFacebook className="w-7 h-7" />
                </a>
                <a href="#" className="text-gray-600 hover:text-finanqa-green-1 focus:outline-none focus:ring-2 focus:ring-finanqa-green-1 rounded-full p-2" aria-label="Twitter">
                  <FaTwitter className="w-7 h-7" />
                </a>
                <a href="#" className="text-gray-600 hover:text-finanqa-green-1 focus:outline-none focus:ring-2 focus:ring-finanqa-green-1 rounded-full p-2" aria-label="Instagram">
                  <FaInstagram className="w-7 h-7" />
                </a>
                <a href="#" className="text-gray-600 hover:text-finanqa-green-1 focus:outline-none focus:ring-2 focus:ring-finanqa-green-1 rounded-full p-2" aria-label="LinkedIn">
                  <FaLinkedin className="w-7 h-7" />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-56 sm:h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
              Harita yakında burada olacak
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 
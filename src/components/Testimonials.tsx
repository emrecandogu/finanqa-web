'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  {
    name: 'Ayşe Yılmaz',
    role: 'Küçük İşletme Sahibi',
    quote: 'Finanqa, işimin finansal yönetimini kökten değiştirdi. Yapay zeka önerileri tam isabet!',
    avatar: '/images/avatar1.svg'
  },
  {
    name: 'Mehmet Demir',
    role: 'Üniversite Öğrencisi',
    quote: 'Finans öğrenmenin bu kadar keyifli olabileceğini düşünmezdim. Uygulama her şeyi çok net anlatıyor.',
    avatar: '/images/avatar2.svg'
  },
  {
    name: 'Elif Kara',
    role: 'Finans Profesyoneli',
    quote: 'Kişiselleştirilmiş öğrenim yolu sayesinde yatırım yapmayı gerçekten anlamaya başladım.',
    avatar: '/images/avatar3.svg'
  },
  {
    name: 'Burak Şahin',
    role: 'Girişimci',
    quote: 'Finanqa ile finansal planlama artık çok daha kolay ve anlaşılır.',
    avatar: ''
  },
  {
    name: 'Zeynep Aksoy',
    role: 'Ev Hanımı',
    quote: 'Aile bütçemi yönetmek için harika bir rehber oldu. Tavsiye ederim!',
    avatar: ''
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container-width">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-finanqa-green-1">Kullanıcılarımız Ne Diyor?</h2>
          <p className="text-base text-finanqa-green-1/80 max-w-2xl mx-auto">
            Finanqa sayesinde finansal okuryazarlığını geliştiren binlerce mutlu kullanıcıya sen de katıl.
          </p>
        </div>
        {/* Mobil Swiper */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            loop
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: false }}
            speed={1200}
            className="pb-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-finanqa-green-1/10 p-5 rounded-2xl shadow-lg flex flex-col gap-3 min-h-[200px] max-w-xs mx-auto relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-finanqa-green-1/30 bg-finanqa-cream">
                      <Image
                        src={testimonial.avatar || '/images/hero-placeholder.svg'}
                        alt={`${testimonial.name} profil fotoğrafı`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-finanqa-green-1 text-base">{testimonial.name}</h3>
                      <p className="text-xs text-finanqa-green-1/70">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-finanqa-green-1/90 italic text-sm">
                    “{testimonial.quote}”
                  </blockquote>
                  <span className="absolute right-4 bottom-4 w-8 h-8 bg-finanqa-green-1/10 rounded-full blur-lg" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Masaüstü Swiper */}
        <div className="hidden md:block">
          <Swiper
            spaceBetween={32}
            slidesPerView={3}
            loop
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}
            speed={1200}
            className="pb-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-finanqa-green-1/10 p-7 rounded-2xl shadow-lg flex flex-col gap-4 min-h-[220px] max-w-md mx-auto relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-finanqa-green-1/30 bg-finanqa-cream">
                      <Image
                        src={testimonial.avatar || '/images/hero-placeholder.svg'}
                        alt={`${testimonial.name} profil fotoğrafı`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-finanqa-green-1 text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-finanqa-green-1/70">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="text-finanqa-green-1/90 italic text-base">
                    “{testimonial.quote}”
                  </blockquote>
                  <span className="absolute right-6 bottom-6 w-12 h-12 bg-finanqa-green-1/10 rounded-full blur-lg" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

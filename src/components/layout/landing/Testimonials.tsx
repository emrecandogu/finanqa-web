'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Linkedin, Building2, TrendingUp } from 'lucide-react';
import 'swiper/css';

const testimonials = [
  {
    name: 'Dr. Ayşe Yılmaz',
    role: 'CFO',
    company: 'TechCorp A.Ş.',
    quote: 'Finanqa\'nın AI destekli analiz araçları sayesinde şirketimizin nakit akışını %35 optimize ettik. Profesyonel dashboard ve raporlama sistemi gerçekten etkileyici.',
    result: '%35 Nakit Akış Optimizasyonu',
    linkedin: true
  },
  {
    name: 'Mehmet Demir',
    role: 'CFA, Portföy Yöneticisi',
    company: 'Demir Yatırım',
    quote: 'CFA olarak söyleyebilirim ki, Finanqa\'nın risk analizi ve portföy optimizasyon araçları sektör standardlarının üzerinde. Müşterilerime güvenle öneriyorum.',
    result: 'CFA Onaylı Sistem',
    linkedin: true
  },
  {
    name: 'Elif Kara',
    role: 'MBA, Finans Direktörü',
    company: 'Kara Holdings',
    quote: 'Finansal planlama süreçlerimizi tamamen dijitalleştirdik. Anqa AI\'ın öngörüleri %87 doğruluk oranıyla bütçe planlamasında devrim yarattı.',
    result: '%87 AI Doğruluk Oranı',
    linkedin: true
  },
  {
    name: 'Burak Şahin',
    role: 'CEO',
    company: 'Şahin Ventures',
    quote: 'Startup ekosisteminde 15 yıldır varım. Finanqa kadar kapsamlı ve kullanıcı dostu bir fintech platformu görmedim. ₺15M yatırım kararımızı destekleyen analiz araçları mükemmel.',
    result: '₺15M Yatırım Desteği',
    linkedin: true
  },
  {
    name: 'Zeynep Aksoy',
    role: 'CFP, Finansal Danışman',
    company: 'Aksoy Finansal Danışmanlık',
    quote: 'CFP sertifikalı danışman olarak müşterilerime Finanqa\'yı öneriyorum. Eğitim modülleri ve kişiselleştirilmiş tavsiyeleri gerçekten değerli.',
    result: 'CFP Sertifikalı Onay',
    linkedin: true
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-white" id="testimonials">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-finanqa-green-1 mb-4">
            Sektör Profesyonellerinin Görüşleri
          </h2>
          <p className="text-base lg:text-lg text-finanqa-green-1/80 max-w-3xl mx-auto">
            CFA, CFP ve MBA sahibi finans uzmanları Finanqa platformunu değerlendiriyor
          </p>
        </div>

        {/* Mobile Testimonials */}
        <div className="block md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            loop
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: false }}
            speed={1200}
            className="pb-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border-2 border-finanqa-green-1/10 p-5 rounded-2xl shadow-lg flex flex-col h-[280px] max-w-xs mx-auto relative overflow-hidden">
                  {/* Header - Fixed height */}
                  <div className="flex items-start gap-3 mb-3 min-h-[60px]">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-finanqa-green-1/20 bg-finanqa-green-1/10 flex-shrink-0">
                      <div className="w-full h-full bg-finanqa-green-1/10 flex items-center justify-center">
                        <span className="text-finanqa-green-1 font-semibold text-lg">
                          {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1] ? testimonial.name.split(' ')[1][0] : ''}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-finanqa-green-1 text-base leading-tight">{testimonial.name}</h3>
                        {testimonial.linkedin && <Linkedin size={14} className="text-finanqa-green-1/70 flex-shrink-0" />}
                      </div>
                      <p className="text-xs text-finanqa-green-1/70 mb-1 leading-tight">{testimonial.role}</p>
                      <div className="flex items-center gap-1">
                        <Building2 size={12} className="text-finanqa-green-1/60 flex-shrink-0" />
                        <p className="text-xs text-finanqa-green-1/60 truncate">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quote - Flexible height */}
                  <blockquote className="text-finanqa-green-1/90 italic text-sm leading-relaxed flex-1 mb-3">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Result - Fixed height */}
                  <div className="flex items-center gap-2 mt-auto">
                    <TrendingUp size={14} className="text-finanqa-light-green flex-shrink-0" />
                    <span className="text-xs font-medium text-finanqa-light-green">{testimonial.result}</span>
                  </div>
                  
                  <span className="absolute right-4 bottom-4 w-8 h-8 bg-finanqa-green-1/5 rounded-full blur-sm" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Testimonials */}
        <div className="hidden md:block">
          <Swiper
            spaceBetween={32}
            slidesPerView={3}
            loop
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: false }}
            speed={1200}
            className="pb-8"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border-2 border-finanqa-green-1/10 p-7 rounded-2xl shadow-lg flex flex-col h-[320px] max-w-md mx-auto relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Header - Fixed height */}
                  <div className="flex items-start gap-4 mb-4 min-h-[70px]">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-finanqa-green-1/20 bg-finanqa-green-1/10 flex-shrink-0">
                      <div className="w-full h-full bg-finanqa-green-1/10 flex items-center justify-center">
                        <span className="text-finanqa-green-1 font-semibold text-xl">
                          {testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1] ? testimonial.name.split(' ')[1][0] : ''}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-finanqa-green-1 text-lg leading-tight">{testimonial.name}</h3>
                        {testimonial.linkedin && <Linkedin size={16} className="text-finanqa-green-1/70 flex-shrink-0" />}
                      </div>
                      <p className="text-sm text-finanqa-green-1/70 mb-1 leading-tight">{testimonial.role}</p>
                      <div className="flex items-center gap-2">
                        <Building2 size={14} className="text-finanqa-green-1/60 flex-shrink-0" />
                        <p className="text-sm text-finanqa-green-1/60 truncate">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quote - Flexible height */}
                  <blockquote className="text-finanqa-green-1/90 italic text-base leading-relaxed flex-1 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Result - Fixed height */}
                  <div className="flex items-center gap-2 mt-auto">
                    <TrendingUp size={16} className="text-finanqa-light-green flex-shrink-0" />
                    <span className="text-sm font-medium text-finanqa-light-green">{testimonial.result}</span>
                  </div>
                  
                  <span className="absolute right-6 bottom-6 w-12 h-12 bg-finanqa-green-1/5 rounded-full blur-lg" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

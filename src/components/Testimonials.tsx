'use client';

import Image from 'next/image';

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
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-finanqa-cream" id="testimonials">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Kullanıcılarımız Ne Diyor?</h2>
          <p className="text-lg text-finanqa-green-1/80 max-w-2xl mx-auto">
            Finanqa sayesinde finansal okuryazarlığını geliştiren binlerce mutlu kullanıcıya sen de katıl.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.name} profil fotoğrafı`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-finanqa-green-1/70">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-finanqa-green-1/80 italic">
                “{testimonial.quote}”
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import dynamic from 'next/dynamic';

// Dinamik olarak bileşenleri yüklüyoruz, performans artışı sağlar.
// İsteğe bağlı: loading fallback eklenebilir.
const Hero = dynamic(() => import('@/components/Hero'));
const About = dynamic(() => import('@/components/About'));
const Features = dynamic(() => import('@/components/Features'));
const LearnSection = dynamic(() => import('@/components/LearnSection'));
const MobileApp = dynamic(() => import('@/components/MobileApp'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const CallToAction = dynamic(() => import('@/components/CallToAction'));

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <About />
      <LearnSection />
      <MobileApp />
      <Features />
      <Testimonials />
      <CallToAction />
    </main>
  );
}

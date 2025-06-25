'use client';

import dynamic from 'next/dynamic';

// Dinamik olarak bileşenleri yüklüyoruz, performans artışı sağlar.
// İsteğe bağlı: loading fallback eklenebilir.
const Hero = dynamic(() => import('@/components/layout/landing/Hero'));
const TrustSection = dynamic(() => import('@/components/layout/landing/TrustSection'));
const About = dynamic(() => import('@/components/layout/landing/About'));
const LearnSection = dynamic(() => import('@/components/layout/landing/LearnSection'));
const MobileApp = dynamic(() => import('@/components/layout/landing/MobileApp'));
const Features = dynamic(() => import('@/components/layout/landing/Features'));
const Testimonials = dynamic(() => import('@/components/layout/landing/Testimonials'));
const CallToAction = dynamic(() => import('@/components/layout/landing/CallToAction'));

export default function HomePageClient() {
  return (
    <main className="min-h-screen pt-4 lg:pt-16">
      <Hero />
      <TrustSection />
      <div id="features">
        <Features />
      </div>
      <About />
      <Testimonials />
      <LearnSection />
      <div id="mobile-app">
        <MobileApp />
      </div>
      <CallToAction />
    </main>
  );
} 
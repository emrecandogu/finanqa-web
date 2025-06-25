import { Metadata } from 'next';
import HomePageClient from '@/components/layout/landing/HomePageClient';

export const metadata: Metadata = {
  title: 'Finanqa | Kişisel Finans ve Yapay Zeka Destekli Danışmanınız',
  description: 'Finanqa ile finansal okuryazarlığınızı geliştirin, bütçenizi yönetin ve yatırım kararlarınızı güçlendirin. Yapay zeka destekli kişisel finans asistanınız Anqa ile tanışın.',
};

export default function Home() {
  return <HomePageClient />;
}

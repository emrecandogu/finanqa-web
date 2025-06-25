import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular | Finanqa SSS',
  description: 'Finanqa hakkında merak ettiğiniz tüm soruların cevapları burada. Platform kullanımı, güvenlik, özellikler ve daha fazlası.',
  keywords: 'finanqa sss, sıkça sorulan sorular, finansal platform, güvenlik, kullanım kılavuzu',
};

export default function SSSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 
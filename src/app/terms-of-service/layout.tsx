import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmet Şartları | Finanqa - Kullanım Koşulları',
  description: 'Finanqa hizmet şartları ve kullanım koşulları. Platform kullanımına ilişkin kurallar, haklar ve yükümlülükler.',
  keywords: 'hizmet şartları, kullanım koşulları, şartlar ve koşullar, finanqa, platform kuralları',
  robots: 'index, follow',
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 
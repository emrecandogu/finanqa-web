import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | Finanqa - Kişisel Verilerin Korunması',
  description: 'Finanqa gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında detaylı bilgi.',
  keywords: 'gizlilik politikası, kişisel veri, KVKK, GDPR, veri güvenliği, finanqa',
  robots: 'index, follow',
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 
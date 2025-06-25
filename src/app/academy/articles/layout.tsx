import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finansal Eğitim Makaleleri | Finanqa Akademi',
  description: 'Finans dünyası hakkında kapsamlı ve güncel makaleler. Kişisel finans, yatırım, kripto para ve daha fazlası hakkında uzman içerikler.',
  keywords: ['finansal eğitim', 'makale', 'kişisel finans', 'yatırım', 'kripto para', 'bütçe yönetimi', 'tasarruf'],
  openGraph: {
    title: 'Finansal Eğitim Makaleleri | Finanqa Akademi',
    description: 'Finans dünyası hakkında kapsamlı ve güncel makaleler. Uzman yazarlarımızdan finansal okuryazarlık içerikleri.',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finansal Eğitim Makaleleri | Finanqa Akademi',
    description: 'Finans dünyası hakkında kapsamlı ve güncel makaleler.',
  },
  alternates: {
    canonical: '/academy/articles',
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
} 
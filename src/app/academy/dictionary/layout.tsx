import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Finans Sözlüğü - FinanQA | 30+ Kategoride Finansal Terimler',
  description: 'FinanQA Finans Sözlüğü ile finansal terimleri öğrenin. Bankacılık, yatırım, sigorta, vergi ve daha fazlası. 200+ terim, örnekler ve detaylı açıklamalar.',
  keywords: [
    'finans sözlüğü',
    'finansal terimler',
    'bankacılık terimleri',
    'yatırım sözlüğü',
    'ekonomi terimleri',
    'kripto para terimleri',
    'sigorta terimleri',
    'vergi terimleri',
    'borsa terimleri',
    'makroekonomi'
  ],
  openGraph: {
    title: 'Finans Sözlüğü - FinanQA',
    description: 'Kapsamlı finans sözlüğü ile finansal dünyayı keşfedin. 200+ terim, detaylı açıklamalar ve örnekler.',
    type: 'website',
    url: 'https://finanqa.com/academy/dictionary',
    siteName: 'FinanQA',
    locale: 'tr_TR',
    images: [
      {
        url: '/api/og/dictionary',
        width: 1200,
        height: 630,
        alt: 'FinanQA Finans Sözlüğü',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finans Sözlüğü - FinanQA',
    description: 'Kapsamlı finans sözlüğü ile finansal dünyayı keşfedin.',
    images: ['/api/og/dictionary'],
    creator: '@finanqa',
    site: '@finanqa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://finanqa.com/academy/dictionary',
  },
};

export default function DictionaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { metadata as siteMeta } from '@/utils/metadata'; // ✅ BURASI eklendi
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

// ✅ metadata artık utils klasöründen çekiliyor
export const metadata: Metadata = siteMeta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-finanqa-cream min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

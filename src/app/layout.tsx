import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { metadata as siteMeta } from '@/lib/metadata';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

// metadata artık utils klasöründen çekiliyor
export const metadata: Metadata = {
  title: 'Finanqa',
  description: 'Finansal okuryazarlık platformu',
};

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
      <body className={`${inter.className} bg-white min-h-screen flex flex-col max-w-full overflow-x-hidden`}>
        <Loader />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

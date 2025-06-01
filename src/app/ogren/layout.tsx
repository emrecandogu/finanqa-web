import React from 'react';
import Header from '@/components/Header';

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        {children}
      </main>
    </>
  );
} 
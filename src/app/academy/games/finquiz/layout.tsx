import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FinQuiz - Finansal Bilgi Yarışması',
  description: 'Finansal bilginizi test edin ve öğrenin!',
};

export default function FinQuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
} 
import { usePathname } from 'next/navigation';

export default function AkademiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-2 md:h-4" />
        {/* Üstteki sekmeler kaldırıldı */}
        {children}
      </div>
    </div>
  );
} 
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <div className="relative w-64 h-64 mx-auto mb-8">
          <Image
            src="/images/anqa/anqa_dusunen_transparan.png" 
            alt="Düşünen Anqa Maskotu"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-6xl font-extrabold text-finanqa-green-1 tracking-tighter mb-4">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-finanqa-green-1/90 mb-4">
          Oops! Sayfa Bulunamadı.
        </h2>
        <p className="text-lg text-finanqa-green-1/80 mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya başka bir yere taşınmış olabilir.
        </p>
        <Link href="/" className="btn-primary">
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
} 
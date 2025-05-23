export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-finanqa-cream">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-finanqa-green-1 mx-auto mb-4"></div>
        <p className="text-finanqa-green-1">Yükleniyor...</p>
      </div>
    </div>
  );
} 
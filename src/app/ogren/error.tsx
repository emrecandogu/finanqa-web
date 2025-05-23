'use client';

import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-finanqa-cream">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-finanqa-green-1 mb-4">
          Bir şeyler yanlış gitti
        </h2>
        <p className="text-gray-600 mb-6">
          Sayfa yüklenirken bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Tekrar Dene
        </button>
      </div>
    </div>
  );
} 
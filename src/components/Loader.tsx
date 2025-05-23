'use client';

import { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loader when page is fully loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-breathing">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Finanqa
        </h1>
      </div>
    </div>
  );
};

export default Loader; 
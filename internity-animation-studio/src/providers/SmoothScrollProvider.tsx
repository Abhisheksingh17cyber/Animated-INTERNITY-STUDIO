'use client';

import { useEffect, useState } from 'react';
import { useLenis } from '@/hooks';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [mounted, setMounted] = useState(false);
  useLenis();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}

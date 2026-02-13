'use client';

import { HoneybeeCursor, Navbar, FlyingBees, HoneycombBackground, LoadingScreen } from '@/components';
import { SmoothScrollProvider, PageTransitionProvider } from '@/providers';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollProvider>
      <LoadingScreen />
      <HoneybeeCursor />
      <FlyingBees />
      <HoneycombBackground />
      <Navbar />
      <PageTransitionProvider>
        <main>{children}</main>
      </PageTransitionProvider>
    </SmoothScrollProvider>
  );
}

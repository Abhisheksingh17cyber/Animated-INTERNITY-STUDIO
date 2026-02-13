import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ClientLayout from './ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'INTERNITY - Animation Studio | Premium Digital Experiences',
  description:
    'Premium animation studio crafting extraordinary digital experiences with the precision and beauty of nature. 2D/3D Animation, Motion Design, VFX, and Web Animation.',
  keywords: [
    'animation studio',
    'motion design',
    '2D animation',
    '3D animation',
    'visual effects',
    'web animation',
    'digital experiences',
  ],
  authors: [{ name: 'INTERNITY Studio' }],
  openGraph: {
    title: 'INTERNITY - Animation Studio',
    description: 'Premium animation studio crafting extraordinary digital experiences.',
    type: 'website',
    url: 'https://internity.studio',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

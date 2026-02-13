import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INTERNITY ANIMATION STUDIO | Premium Animation Agency",
  description: "Crafting immersive digital experiences with the precision and beauty of nature's perfect geometry. Premium animation studio specializing in motion design, 3D animation, and interactive experiences.",
  keywords: ["animation studio", "motion design", "3D animation", "interactive experiences", "web animation", "GSAP", "Framer Motion"],
  authors: [{ name: "INTERNITY ANIMATION STUDIO" }],
  creator: "INTERNITY ANIMATION STUDIO",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://internity-animation-studio.vercel.app",
    title: "INTERNITY ANIMATION STUDIO | Premium Animation Agency",
    description: "Crafting immersive digital experiences with the precision and beauty of nature's perfect geometry.",
    siteName: "INTERNITY ANIMATION STUDIO",
  },
  twitter: {
    card: "summary_large_image",
    title: "INTERNITY ANIMATION STUDIO | Premium Animation Agency",
    description: "Crafting immersive digital experiences with the precision and beauty of nature's perfect geometry.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F4A623",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-black text-neutral-white`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

import { Toaster } from '@/components/ui/sonner';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Cari Jajan',
  description:
    'Jelajahi peta untuk menemukan makanan kaki lima favoritmu mulai dari bakso keliling, sate gerobak, hingga es doger yang legendaris.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  generator: 'Next.js',
  applicationName: 'Cari Jajan',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'jajan',
    'digital agency',
    'web development',
    'mobile development',
    'UI/UX design',
    'branding',
  ],
  authors: [
    {
      name: 'Jordi Irawan',
      url: 'https://wannn.vercel.app',
    },
  ],
  creator: 'Jordi Irawan',
  publisher: 'Jordi Irawan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Cari Jajan',
    description:
      'Jelajahi peta untuk menemukan makanan kaki lima favoritmu mulai dari bakso keliling, sate gerobak, hingga es doger yang legendaris.',
    url: 'https://carijajan.vercel.app',
    siteName: 'Cari Jajan',
    images: [
      {
        url: 'https://carijajan.vercel.app/og.png',
        width: 1200,
        height: 630,
        alt: 'Cari Jajan',
        type: 'image/png',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

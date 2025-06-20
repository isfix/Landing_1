import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

// If you want to use Inter directly from next/font
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Rune Essence - Minimalist Fashion',
  description: 'Discover Rune Essence, a fashion brand for the modern woman. Clean, minimalist designs with a touch of pastel elegance.',
  keywords: 'fashion, minimalist, female, rune, clothing, style, modern',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Google Fonts links are kept as per instruction, though next/font is often preferred */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow animate-fadeIn">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

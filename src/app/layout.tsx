import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/widgets/header';
import { Footer } from '@/components/widgets/footer';
import { PopupAuthManager } from '@/components/widgets/auth';

export const metadata: Metadata = {
  title: 'Mir Traveler',
  description: 'Mir Traveler - открывайте мир вместе с нами 🗺️ ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`antialiased`}>
        <PopupAuthManager>
          <Header />
          {children}
          <Footer />
        </PopupAuthManager>
      </body>
    </html>
  );
}

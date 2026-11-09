import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Drink Master',
  description: 'Cocktails App',
};

function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='en' className={manrope.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;

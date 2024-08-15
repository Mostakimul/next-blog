import type { Metadata } from 'next';
import { Noto_Serif } from 'next/font/google';
import 'swiper/css';
import './globals.css';
const noto_serif = Noto_Serif({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MN Blog',
  description: 'Discover Latest News',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="autumn">
      <body className={noto_serif.className}>{children}</body>
    </html>
  );
}

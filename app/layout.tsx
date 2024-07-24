import type { Metadata } from 'next';
import { Inter, League_Spartan } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

const spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500'],
  variable: '--font-spartan',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spartan.variable}`}>
        {children}
      </body>
    </html>
  );
}

'use client'; // Add this at the very top

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Dynamically import Locomotive Scroll with SSR disabled
const LocomotiveScroll = dynamic(
  () => import('locomotive-scroll').then((mod) => mod.default),
  { ssr: false }
);

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let locomotiveScroll;
    const initScroll = async () => {
      locomotiveScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
      });
    };

    initScroll();
    return () => {
      locomotiveScroll?.destroy();
    };
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Header />
        <div data-scroll-container>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
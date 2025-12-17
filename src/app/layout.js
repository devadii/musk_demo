'use client';

import Head from 'next/head';
import './globals.css';
import StoreProvider from './StoreProvider';
import { APP_CONFIG } from '@/constants';

/**
 * Root Layout Component
 * Provides the main HTML structure and global providers
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Root layout component
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content={APP_CONFIG.DESCRIPTION} />
        <meta name="keywords" content="clothing, fashion, t-shirts, polo, cubans, shorts, premium" />
        <meta name="author" content={APP_CONFIG.NAME} />
        <title>{APP_CONFIG.NAME}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

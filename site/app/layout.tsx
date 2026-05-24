import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Family Civilization Project',
  description: 'A long-term civilization project to rebuild family relationships through dignity, freedom, love, boundaries, repair, and human-centered AI.',
  metadataBase: new URL('https://familyciv.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <footer className="footer">
          Family Civilization Project — Let those who love one another stop hurting one another.<br />
          The human being is an end, not a means. 人是目的，不是手段。
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Milton Masters - Badminton Tournament 2026',
  description: 'Annual badminton tournament at SU Badminton Club in Mississauga. May 18, 2026.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

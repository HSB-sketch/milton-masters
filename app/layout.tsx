import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Milton Masters Badminton Tournament',
  description: 'Official website of Milton Masters Annual Badminton Tournament at SU Badminton Club, Mississauga',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-light text-dark">
        {children}
      </body>
    </html>
  )
}

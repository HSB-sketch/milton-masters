import type { Metadata } from 'next'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Milton Masters - Badminton Tournament',
  description: 'Annual badminton tournament at SU Badminton Club in Mississauga, Ontario',
  keywords: 'badminton, tournament, milton masters, mississauga, sports',
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="🏸" />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

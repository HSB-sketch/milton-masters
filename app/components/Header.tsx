'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-3xl font-bold text-blue-600">🏸</div>
          <div>
            <div className="text-2xl font-bold text-gray-900">Milton Masters</div>
            <div className="text-xs text-gray-600">Badminton Tournament</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-semibold transition">
            Home
          </Link>
          <Link href="/tournament" className="text-gray-700 hover:text-blue-600 font-semibold transition">
            Tournament
          </Link>
          <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-semibold transition">
            Gallery
          </Link>
          <Link href="/players" className="text-gray-700 hover:text-blue-600 font-semibold transition">
            Players
          </Link>
          <Link href="/news" className="text-gray-700 hover:text-blue-600 font-semibold transition">
            News
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 font-semibold transition">
            About
          </Link>
          <Link
            href="/registration"
            className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-6 rounded-lg transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`w-6 h-0.5 bg-gray-900 transition ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-900 transition ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white py-4 px-4 space-y-4">
          <Link
            href="/"
            className="block text-gray-700 hover:text-blue-600 font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/tournament"
            className="block text-gray-700 hover:text-blue-600 font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            Tournament
          </Link>
          <Link
            href="/gallery"
            className="block text-gray-700 hover:text-blue-600 font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            href="/players"
            className="block text-gray-700 hover:text-blue-600 font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            Players
          </Link>
          <Link
            href="/news"
            className="block text-gray-700 hover:text-blue-600 font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            News
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 hover:text-blue-600 font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/registration"
            className="block w-full text-center bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 rounded-lg transition"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </header>
  )
}

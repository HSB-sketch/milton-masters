'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('2026')

  // Gallery data - you'll add actual images later
  const galleries = {
    '2026': [
      { id: 1, title: 'Tournament Day', count: 24 },
      { id: 2, title: 'Action Shots', count: 18 },
      { id: 3, title: 'Team Groups', count: 12 }
    ],
    '2025': [
      { id: 4, title: 'Finals & Awards', count: 15 },
      { id: 5, title: 'Participants', count: 30 },
      { id: 6, title: 'Behind the Scenes', count: 20 }
    ]
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Tournament Gallery</h1>
          <p className="text-xl">Moments from Milton Masters</p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-8">
            {['2026', '2025'].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedCategory(year)}
                className={`py-4 px-2 font-semibold transition ${
                  selectedCategory === year
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {year} Tournament
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {galleries[selectedCategory].map((gallery) => (
              <div
                key={gallery.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition group cursor-pointer"
              >
                {/* Placeholder for image */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-300 to-blue-600 flex items-center justify-center overflow-hidden relative">
                  <div className="text-white text-4xl">📸</div>
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-2 px-6 rounded-lg transition">
                      View Gallery
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{gallery.title}</h3>
                  <p className="text-gray-600">{gallery.count} photos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Share */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Have Tournament Photos?</h2>
          <p className="text-lg text-gray-700 mb-8">
            We'd love to feature your photos! Share them with us and see them in the gallery.
          </p>
          <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-lg transition">
            Share Your Photos
          </button>
        </div>
      </section>

      {/* Photo Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tips for Great Tournament Photos</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Capture Action',
                desc: 'Get shots of players mid-game with dynamic poses and movements',
                icon: '🎬'
              },
              {
                title: 'Team Moments',
                desc: 'Take group photos of teams before, during, and after matches',
                icon: '👥'
              },
              {
                title: 'Details',
                desc: 'Capture trophies, awards, signage, and other tournament details',
                icon: '🏆'
              }
            ].map((tip) => (
              <div key={tip.title} className="text-center">
                <div className="text-5xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-700">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

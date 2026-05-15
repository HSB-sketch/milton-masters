'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const newsItems = [
    {
      id: 1,
      category: 'announcement',
      title: 'Registration Now Open for 2026 Tournament',
      date: 'May 1, 2026',
      excerpt: 'Early bird registration is now open! Secure your spot in your preferred category before slots fill up.',
      content: 'We\'re excited to announce that registration for the 2026 Milton Masters tournament is now live! All four divisions (40+, 50+, Open, and Mixed Doubles) are available. Early registrants will receive special recognition in our tournament program.'
    },
    {
      id: 2,
      category: 'update',
      title: '2025 Champions Crowned - See the Results',
      date: 'May 19, 2025',
      excerpt: 'Congratulations to all our 2025 tournament winners! Check out the complete results and photos.',
      content: 'The 2025 Milton Masters tournament was a huge success with over 50 participants competing across all divisions. Thank you to everyone who participated, competed with grace, and made this a memorable event.'
    },
    {
      id: 3,
      category: 'rules',
      title: 'New Tournament Rules for 2026',
      date: 'April 15, 2026',
      excerpt: 'Important changes to scoring format and elimination bracket structure for this year.',
      content: 'We\'ve made several improvements to our tournament format based on feedback from previous years. The main change is a refined elimination bracket system that will ensure fairness and efficiency.'
    },
    {
      id: 4,
      category: 'announcement',
      title: 'Venue Confirmed - SU Badminton Club',
      date: 'March 20, 2026',
      excerpt: 'Our tournament will be held at the SU Badminton Club again this year.',
      content: 'We\'re proud to return to SU Badminton Club for the 2026 tournament. The venue has excellent facilities with multiple courts and professional lighting.'
    },
    {
      id: 5,
      category: 'update',
      title: 'Tournament Day Logistics Update',
      date: 'May 10, 2026',
      excerpt: 'Important information about parking, arrival time, and day-of logistics.',
      content: 'Please arrive 30 minutes before your scheduled match time. Parking is free and available on-site. Check-in will open 2 hours before the first match.'
    },
    {
      id: 6,
      category: 'announcement',
      title: 'Volunteer Opportunities Available',
      date: 'April 1, 2026',
      excerpt: 'We\'re looking for volunteers to help organize and run the tournament. Get involved!',
      content: 'If you\'re interested in helping organize the 2026 tournament, we have positions available for court coordinators, scorekeepers, and general support staff.'
    }
  ]

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl">Latest from Milton Masters</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-4 py-4 overflow-x-auto">
            {['all', 'announcement', 'update', 'rules'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 rounded-full font-semibold transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat === 'all' && 'All News'}
                {cat === 'announcement' && '📢 Announcements'}
                {cat === 'update' && '📝 Updates'}
                {cat === 'rules' && '⚖️ Rules'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {filteredNews.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition border-l-4 border-blue-600"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      article.category === 'announcement' ? 'bg-blue-100 text-blue-800' :
                      article.category === 'update' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {article.category === 'announcement' && '📢 Announcement'}
                      {article.category === 'update' && '📝 Update'}
                      {article.category === 'rules' && '⚖️ Rules'}
                    </span>
                  </div>
                  <time className="text-sm text-gray-500">{article.date}</time>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition cursor-pointer">
                  {article.title}
                </h2>

                <p className="text-gray-700 mb-4">{article.excerpt}</p>

                <button className="text-blue-600 hover:text-blue-800 font-semibold transition">
                  Read More →
                </button>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No news items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-700 mb-8">
            Subscribe to our newsletter to get the latest news, updates, and tournament information directly to your inbox.
          </p>
          
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-6 rounded-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Archive</h2>
          
          <div className="max-w-2xl mx-auto text-center text-gray-700">
            <p className="mb-6">
              Looking for older news? Check out our complete news archive to find information from previous tournaments and announcements.
            </p>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-6 rounded-lg transition">
              View Archive
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

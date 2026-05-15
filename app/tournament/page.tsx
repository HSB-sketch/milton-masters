import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero.jpg"
            alt="Milton Masters Tournament"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Milton Masters</h1>
          <p className="text-xl md:text-2xl mb-8">Badminton Tournament</p>
          <p className="text-lg md:text-xl mb-12">May 18, 2026 • SU Badminton Club</p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/registration"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition"
            >
              Register Now
            </Link>
            <Link
              href="/tournament"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition"
            >
              Tournament Details
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Tournament Highlights</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700">Players</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <p className="text-gray-700">Categories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$50</div>
              <p className="text-gray-700">Entry Fee/Team</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">26</div>
              <p className="text-gray-700">Years Running</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Tournament Categories</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: '40+ Doubles', time: '9:00 AM', fee: '$50/team' },
              { name: '50+ Doubles', time: '10:00 AM', fee: '$50/team' },
              { name: 'Open Doubles', time: '12:00 PM', fee: '$50/team' },
              { name: 'Mixed Doubles', time: '9:00 AM', fee: '$50/team' }
            ].map((cat) => (
              <div key={cat.name} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-blue-600 mb-3">{cat.name}</h3>
                <p className="text-gray-700 mb-2">⏰ {cat.time}</p>
                <p className="text-gray-900 font-semibold">{cat.fee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">About Milton Masters</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4">
                Milton Masters is an annual badminton tournament held at SU Badminton Club in Mississauga, Ontario. Founded by Vinu George and Harry Bajwa, the tournament brings together badminton enthusiasts from across the Greater Toronto Area.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With categories for different age groups and skill levels, Milton Masters provides a platform for players to compete, connect, and celebrate their passion for badminton.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're a seasoned player or new to the sport, there's a category for you at Milton Masters!
              </p>
            </div>
            
            <div className="bg-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">Key Information</h3>
              <ul className="space-y-4 text-gray-700">
                <li><strong>Date:</strong> May 18, 2026</li>
                <li><strong>Location:</strong> SU Badminton Club, Mississauga</li>
                <li><strong>Format:</strong> Round Robin + Elimination</li>
                <li><strong>Shuttlecock:</strong> Yonex Mavis 350 Blue</li>
                <li><strong>Prizes:</strong> Trophies & Certificates</li>
                <li><strong>Founders:</strong> Vinu George, Harry Bajwa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl mb-8">Register your team today for an amazing badminton experience!</p>
          <Link
            href="/registration"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-lg transition inline-block"
          >
            Register Your Team
          </Link>
        </div>
      </section>

      {/* News Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Latest News</h2>
            <Link href="/news" className="text-blue-600 hover:text-blue-800 font-semibold">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Registration Now Open for 2026',
                date: 'May 1, 2026',
                excerpt: 'Early bird registration is open! Secure your spot in your preferred category.'
              },
              {
                title: '2025 Champions Crowned',
                date: 'May 19, 2025',
                excerpt: 'Congratulations to all our 2025 tournament winners! Check out the results.'
              },
              {
                title: 'Tournament Rules Updated',
                date: 'April 15, 2026',
                excerpt: 'New scoring rules and format changes for 2026. Read more about what\'s new.'
              }
            ].map((post) => (
              <div key={post.title} className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link href="/news" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

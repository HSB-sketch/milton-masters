import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Tournament Winners - Milton Masters',
  description: 'View past champions and winners of Milton Masters Badminton Tournament',
}

export default function Winners() {
  const winners2025 = [
    {
      category: '40+ Doubles',
      winners: 'Team A',
      date: 'May 19, 2025',
    },
    {
      category: '50+ Doubles',
      winners: 'Team B',
      date: 'May 19, 2025',
    },
    {
      category: '60+ Doubles',
      winners: 'Team C',
      date: 'May 19, 2025',
    },
    {
      category: 'Open Doubles',
      winners: 'Team D',
      date: 'May 19, 2025',
    },
    {
      category: 'Mixed Doubles',
      winners: 'Team E',
      date: 'May 19, 2025',
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-wide">
          <h1 className="text-5xl font-bold mb-4 text-primary">Tournament Champions</h1>
          <p className="text-xl text-gray-600">
            Celebrating the outstanding champions of Milton Masters Badminton Club
          </p>
        </div>
      </section>

      {/* 2025 Winners */}
      <section className="py-16 px-4">
        <div className="container-wide">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Milton Masters 2025</h2>
            <p className="text-gray-600 text-lg">Winners of the 2025 tournament held on May 19, 2025</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {winners2025.map((winner, i) => (
              <div key={i} className="card p-8 hover:shadow-lg transition-all duration-300 border-t-4 border-secondary">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold text-primary mb-2">{winner.category}</h3>
                <p className="text-xl font-semibold text-secondary mb-3">{winner.winners}</p>
                <p className="text-sm text-gray-600">{winner.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary cursor-pointer">
              View 2025 Tournament Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-title">Tournament History</h2>
            <p className="section-subtitle">Milton Masters has been celebrating badminton excellence for multiple years</p>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="card p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-primary">Milton Masters 2025</h3>
                <p className="text-gray-600">May 19, 2025 - SU Badminton Club</p>
              </div>
              <button className="text-secondary font-semibold hover:text-primary transition-colors">
                View Details →
              </button>
            </div>

            <div className="card p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-primary">Milton Masters 2024</h3>
                <p className="text-gray-600">May 2024 - SU Badminton Club</p>
              </div>
              <button className="text-secondary font-semibold hover:text-primary transition-colors">
                View Details →
              </button>
            </div>

            <div className="card p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-primary">Milton Masters 2023</h3>
                <p className="text-gray-600">May 2023 - SU Badminton Club</p>
              </div>
              <button className="text-secondary font-semibold hover:text-primary transition-colors">
                View Details →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Records & Stats */}
      <section className="py-16 px-4">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-primary mb-12">Tournament Highlights</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '👥', label: 'Total Participants', value: '100+' },
              { icon: '🎯', label: 'Categories', value: '5' },
              { icon: '🏆', label: 'Championships', value: '2025' },
              { icon: '📍', label: 'Venue', value: 'SU Badminton' },
            ].map((stat, i) => (
              <div key={i} className="card p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <p className="text-gray-600 text-sm mb-2">{stat.label}</p>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container-wide text-center space-y-6">
          <h2 className="text-4xl font-bold">Be Part of Milton Masters 2026</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Register now to compete for the title and join the champions of Milton Masters.
          </p>
          <a href="/registration" className="inline-block btn-secondary">
            Register for 2026 Tournament
          </a>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-4xl font-bold text-primary mb-12">Tournament Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-gray-400 text-sm">Tournament Photo</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">More photos coming soon. Submit your tournament photos to be featured!</p>
            <button className="btn-primary">
              Submit Photos
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

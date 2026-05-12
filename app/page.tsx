import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-accent/20 text-secondary font-semibold rounded-full text-sm">
                  Annual Badminton Tournament
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold gradient-text">
                Milton Masters 2026
              </h1>
              <p className="text-xl text-gray-600 max-w-md leading-relaxed">
                Join us for an exciting day of competitive badminton featuring players of all ages and skill levels at the premier SU Badminton Club.
              </p>

              <div className="flex gap-4 pt-4">
                <Link href="/registration" className="btn-primary">
                  Register Now
                </Link>
                <Link href="/tournament" className="btn-outline">
                  Learn More
                </Link>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-8 max-w-sm">
                <div className="card p-4">
                  <div className="text-sm text-gray-600">Date & Time</div>
                  <div className="font-bold text-primary">May 18, 2026</div>
                  <div className="text-sm text-gray-600">9:00 AM Start</div>
                </div>
                <div className="card p-4">
                  <div className="text-sm text-gray-600">Location</div>
                  <div className="font-bold text-primary">SU Badminton Club</div>
                  <div className="text-sm text-gray-600">Mississauga</div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative h-96 md:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 text-primary/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
                  </svg>
                  <p className="text-gray-400">Tournament Hero Image</p>
                  <p className="text-sm text-gray-400 mt-2">Update with your tournament photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Categories */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-title">Tournament Categories</h2>
            <p className="section-subtitle">Compete in your age group or mixed doubles</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { name: '40+', time: '9:00 AM', fee: '$50/team' },
              { name: '50+', time: '10:00 AM', fee: '$50/team' },
              { name: '60+', time: '10:00 AM', fee: '$50/team' },
              { name: 'Open', time: '12:00 PM', fee: '$50/team' },
              { name: 'Mixed Doubles', time: '9:00 AM', fee: '$50/team' },
            ].map((category, i) => (
              <div key={i} className="card p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-primary mb-2">{category.name}</div>
                <div className="text-sm text-gray-600 mb-4">
                  <div className="font-semibold">{category.time}</div>
                  <div>{category.fee}</div>
                </div>
                <div className="w-12 h-1 bg-secondary mx-auto rounded-full"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/tournament" className="btn-primary">
              View Full Tournament Details
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4">
        <div className="container-wide">
          <div className="section-header">
            <h2 className="section-title">Why Milton Masters?</h2>
            <p className="section-subtitle">What makes our tournament special</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Competitive Spirit',
                description: 'Fair round-robin qualifying rounds followed by exciting elimination matches.',
              },
              {
                icon: '👥',
                title: 'Community Focused',
                description: 'Play against fellow enthusiasts in a welcoming and inclusive environment.',
              },
              {
                icon: '📊',
                title: 'Live Scoring',
                description: 'Real-time bracket updates and standings via our online tournament portal.',
              },
            ].map((feature, i) => (
              <div key={i} className="card p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20 px-4 text-white">
        <div className="container-wide text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Compete?</h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Registration is open now! Secure your spot in Milton Masters 2026.
          </p>
          <Link href="/registration" className="inline-block btn-secondary">
            Register Your Team Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

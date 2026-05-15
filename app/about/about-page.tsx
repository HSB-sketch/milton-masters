import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Milton Masters</h1>
          <p className="text-xl">Learn about our tournament and mission</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Milton Masters was founded by Vinu George and Harry Bajwa with a simple mission: to bring the badminton community together for friendly competition and camaraderie.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                What started as a local tournament has grown into an annual event that attracts badminton enthusiasts from across the Greater Toronto Area. Our tournament provides a platform for players of all age groups and skill levels to showcase their abilities.
              </p>
              <p className="text-lg text-gray-700">
                Through Milton Masters, we've built a vibrant community of players who share a passion for badminton, sportsmanship, and fellowship.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Key Milestones</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-bold text-gray-900">2001</p>
                  <p className="text-gray-700">Tournament Inception</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-bold text-gray-900">2010</p>
                  <p className="text-gray-700">Expanded to Multiple Categories</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-bold text-gray-900">2015</p>
                  <p className="text-gray-700">200+ Participants</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-bold text-gray-900">2024</p>
                  <p className="text-gray-700">Online Platform Launch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Mission & Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-700">
                We strive to organize a world-class badminton tournament that showcases excellent sportsmanship and competitive play.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Community</h3>
              <p className="text-gray-700">
                We believe in building a strong, welcoming community where badminton enthusiasts can connect, compete, and celebrate together.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-700">
                We uphold fair play, honest competition, and the values that make badminton a sport of character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Meet the Organizers</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: 'Vinu George',
                role: 'Founder & Tournament Director',
                bio: 'An experienced badminton player and passionate tournament organizer. Vinu has been instrumental in building Milton Masters into a premier badminton event.',
                contact: 'vinuge@gmail.com'
              },
              {
                name: 'Harry Bajwa',
                role: 'Co-Founder & Coordinator',
                bio: 'A dedicated badminton enthusiast and co-founder of Milton Masters. Harry ensures smooth operations and exceptional player experience.',
                contact: ''
              }
            ].map((organizer) => (
              <div key={organizer.name} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-br from-blue-300 to-blue-600 flex items-center justify-center text-6xl">
                  👤
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{organizer.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{organizer.role}</p>
                  <p className="text-gray-700 mb-4">{organizer.bio}</p>
                  {organizer.contact && (
                    <a href={`mailto:${organizer.contact}`} className="text-blue-600 hover:text-blue-800 font-semibold">
                      {organizer.contact}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Join Milton Masters?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <span className="text-3xl">🏸</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Play</h3>
                <p className="text-gray-700">Compete with skilled players in a well-organized tournament format.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">👥</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Build Community</h3>
                <p className="text-gray-700">Meet and connect with fellow badminton enthusiasts and make lasting friendships.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">🏆</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Win Recognition</h3>
                <p className="text-gray-700">Get recognized for your skills and claim trophies or certificates.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-3xl">🎓</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Improve Your Skills</h3>
                <p className="text-gray-700">Play against different opponents and improve your badminton game.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community Today</h2>
          <p className="text-lg mb-8">
            Whether you're a seasoned player or new to badminton, there's a place for you at Milton Masters.
          </p>
          <Link
            href="/registration"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition inline-block"
          >
            Register Your Team Now
          </Link>
        </div>
      </section>
    </main>
  )
}

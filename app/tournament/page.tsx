import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Tournament Details - Milton Masters',
  description: 'Learn about the tournament format, rules, and schedule for Milton Masters 2026',
}

export default function Tournament() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-wide">
          <h1 className="text-5xl font-bold mb-4 text-primary">Tournament Details</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive information about the tournament format, rules, and competition schedule.
          </p>
        </div>
      </section>

      {/* Tournament Schedule */}
      <section className="py-16 px-4">
        <div className="container-wide">
          <h2 className="text-4xl font-bold mb-12 text-primary">Tournament Schedule</h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-bold text-primary">Category</th>
                  <th className="text-left py-4 px-4 font-bold text-primary">Date</th>
                  <th className="text-left py-4 px-4 font-bold text-primary">Time</th>
                  <th className="text-left py-4 px-4 font-bold text-primary">Fee</th>
                  <th className="text-left py-4 px-4 font-bold text-primary">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: '40+ Doubles', date: 'May 18, 2026', time: '9:00 AM', fee: '$50/team', status: 'Open' },
                  { cat: '50+ Doubles', date: 'May 18, 2026', time: '10:00 AM', fee: '$50/team', status: 'Open' },
                  { cat: '60+ Doubles', date: 'May 18, 2026', time: '10:00 AM', fee: '$50/team', status: 'Open' },
                  { cat: 'Open Doubles', date: 'May 18, 2026', time: '12:00 PM', fee: '$50/team', status: 'Open' },
                  { cat: 'Mixed Doubles (XD)', date: 'May 18, 2026', time: '9:00 AM', fee: '$50/team', status: 'Open' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-semibold text-primary">{row.cat}</td>
                    <td className="py-4 px-4">{row.date}</td>
                    <td className="py-4 px-4">{row.time}</td>
                    <td className="py-4 px-4">{row.fee}</td>
                    <td className="py-4 px-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-accent/20 border-l-4 border-accent p-6 rounded">
            <p className="text-lg">
              <strong>Important:</strong> 2026 Update - No Cash Prizes. Trophies and Certificates will be awarded to limit professional/coach participants and maintain the recreational spirit of the tournament.
            </p>
          </div>
        </div>
      </section>

      {/* Tournament Format */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-4xl font-bold mb-12 text-primary">Tournament Format</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Round Robin */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Round Robin (Qualifying)</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Each team plays against 4-5 other teams in their designated court</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span><strong>Game Format:</strong> 21 point games, Deuce (20-20) ends at max 25</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span><strong>Side Change:</strong> At 11 points, if required</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span><strong>Organizers:</strong> 1-2 teams per court manage the court and scoring</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span><strong>Qualification:</strong> Top 2 teams per court advance to elimination rounds</span>
                </li>
              </ul>
            </div>

            {/* Elimination */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Elimination Rounds</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span>Random assignment of qualified teams from each court</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span><strong>Semi-Finals:</strong> Best of 3 games (optional, by agreement)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span><strong>Finals:</strong> Best of 3 games (mandatory)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span><strong>Game Format:</strong> 21 point games with deuce at 25</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary font-bold">✓</span>
                  <span><strong>Side Change:</strong> At 11 points</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Regulations */}
      <section className="py-16 px-4">
        <div className="container-wide">
          <h2 className="text-4xl font-bold mb-12 text-primary">Rules & Regulations</h2>

          <div className="space-y-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Shuttlecock Specifications</h3>
              <p className="text-gray-700">
                <strong>Official Bird:</strong> Yonex Mavis 350 Blue. All matches use the official tournament shuttlecocks provided by the organizers.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Court & Playing Area</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Ceiling Hits:</strong> Any shuttlecock that hits the ceiling or girders is considered a fault.
                </li>
                <li>
                  <strong>Court Assignment:</strong> Teams assigned randomly; both teams have equal advantages/disadvantages on the same court.
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Officiating</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Round Robin:</strong> No line umpires; referee's decision is final. Referees can ask for input from audience members.
                </li>
                <li>
                  <strong>Elimination:</strong> Proper referees assigned to matches.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-4xl font-bold mb-12 text-primary">Venue Information</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">📍 Location</h3>
              <p className="text-gray-700">
                <strong>SU Badminton Club</strong>
                <br />
                South Campus
                <br />
                4140B Sladeview Crescent #6
                <br />
                Mississauga, ON L5L 5Z3
              </p>
              <a
                href="https://maps.google.com/?q=4140B+Sladeview+Crescent+%236+Mississauga+ON+L5L+5Z3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-semibold hover:text-primary transition-colors mt-4 inline-block"
              >
                View on Google Maps →
              </a>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">🏛️ Facilities</h3>
              <p className="text-gray-700">
                State-of-the-art badminton facility with multiple courts, comfortable seating for spectators, and adequate parking.
              </p>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">🍽️ Amenities</h3>
              <p className="text-gray-700">
                Refreshment area available. Players are welcome to bring their own food and beverages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-16 px-4 text-white">
        <div className="container-wide text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Register?</h2>
          <Link href="/registration" className="inline-block btn-secondary">
            Register Your Team Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

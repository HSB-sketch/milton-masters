'use client';

import Navigation from './components/Header';
import Footer from './components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navigation />

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950 -z-10" />
        <div className="max-w-4xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 mb-6 bg-amber-600/10 border border-amber-600/30 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
            <span className="text-amber-600 text-xs uppercase tracking-wider font-semibold">Annual Badminton Tournament</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white">
            Milton<br /><span className="text-amber-600">Masters</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Ontario's premier masters badminton championship. Five categories, international-standard courts, and live scoring on Challonge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="#registration" className="bg-amber-600 text-white px-8 py-4 rounded font-semibold hover:bg-amber-700 transition inline-block text-center">
              Register Your Team
            </Link>
            <Link href="#tournament" className="border border-amber-600/50 text-amber-600 px-8 py-4 rounded font-semibold hover:bg-amber-600/10 transition inline-block text-center">
              View Categories
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">5</div>
              <div className="text-sm uppercase tracking-wide text-gray-500">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">May 18</div>
              <div className="text-sm uppercase tracking-wide text-gray-500">2026</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">$50</div>
              <div className="text-sm uppercase tracking-wide text-gray-500">Per Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="bg-amber-600 text-slate-900 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center md:text-left">
            <div><div className="font-bold">May 18, 2026</div><div className="text-sm opacity-75">Tournament Date</div></div>
            <div><div className="font-bold">9:00 AM – 6:00 PM</div><div className="text-sm opacity-75">Full Day Event</div></div>
            <div><div className="font-bold">Mississauga</div><div className="text-sm opacity-75">SU Badminton Club</div></div>
            <div><div className="font-bold">Doubles Format</div><div className="text-sm opacity-75">All Categories</div></div>
          </div>
        </div>
      </section>

      {/* LIVE TOURNAMENT TRACKER */}
      <section className="py-16 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/tournament/2026/live"
            className="block bg-gradient-to-r from-slate-900 to-slate-900 border-2 border-amber-600/50 hover:border-amber-600 rounded p-8 md:p-12 text-center transition-all duration-300 hover:scale-[1.01] group"
          >
            <div className="inline-flex items-center gap-2 mb-4 bg-amber-600/10 border border-amber-600/30 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse" />
              <span className="text-amber-600 text-xs uppercase tracking-wider font-semibold">Live Now • Organizers Only</span>
            </div>
            <div className="text-5xl mb-4">🏸</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Live Tournament <span className="text-amber-600">Tracker</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Real-time scoring system for the 2026 Milton Masters. Track round-robin matches, standings, and championship brackets as they happen.
            </p>
            <span className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-3 rounded font-semibold group-hover:bg-amber-700 transition">
              Enter Tournament Tracker →
            </span>
            <p className="text-gray-500 text-xs mt-6">
              🔒 Password protected • Tournament organizers only
            </p>
          </Link>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">About the Tournament</h2>
          <div className="w-12 h-1 bg-amber-600 mb-8" />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Milton Masters celebrates competitive badminton at every stage of life. Founded by Vinu George and Harry Bajwa, our tournament brings together players aged 40+ across five categories at Mississauga's premier badminton facility.
              </p>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Held at the prestigious SU Badminton Club — established in 2004 with international-standard courts — every match uses official Yonex Mavis 350 Blue shuttles.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border border-amber-600/30 rounded p-4 bg-slate-900/50">
                  <div className="text-3xl font-bold text-amber-600 mb-1">VG</div>
                  <div className="font-semibold text-white text-sm">Vinu George</div>
                  <div className="text-xs text-gray-400">Tournament Director</div>
                </div>
                <div className="border border-amber-600/30 rounded p-4 bg-slate-900/50">
                  <div className="text-3xl font-bold text-amber-600 mb-1">HB</div>
                  <div className="font-semibold text-white text-sm">Harry Bajwa</div>
                  <div className="text-xs text-gray-400">Co-Founder</div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded border border-amber-600/20 p-8 flex flex-col items-center justify-center min-h-96">
              <div className="text-6xl mb-4">🏸</div>
              <p className="text-gray-400 text-center text-sm">SU Badminton Club<br/>4140B Sladeview Crescent #6<br/>Mississauga, ON L5L 5Z3</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOURNAMENT */}
      <section id="tournament" className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Tournament Categories</h2>
          <div className="w-12 h-1 bg-amber-600 mb-8" />
          <p className="text-gray-400 mb-12 max-w-2xl">Five competitive doubles categories with round-robin group play followed by knockout semifinals and finals.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { age: '40+', name: 'Men\'s 40+ Doubles', desc: 'Both players 40+', status: 'Open' },
              { age: '50+', name: 'Men\'s 50+ Doubles', desc: 'Both players 50+', status: 'Open' },
              { age: '60+', name: 'Men\'s 60+ Doubles', desc: 'Both players 60+', status: 'Open' },
              { age: 'OPN', name: 'Open Doubles', desc: 'All ages welcome', status: 'Filling' },
              { age: 'XD', name: 'Mixed Doubles', desc: '1 male, 1 female', status: 'Open' },
            ].map((cat) => (
              <div key={cat.age} className="border border-amber-600/20 rounded p-6 bg-slate-950 hover:border-amber-600/50 transition">
                <div className="text-4xl font-bold text-amber-600 mb-2">{cat.age}</div>
                <div className="font-semibold text-white mb-2">{cat.name}</div>
                <p className="text-sm text-gray-400 mb-4">{cat.desc}</p>
                <span className={`inline-block px-3 py-1 rounded text-xs font-semibold ${cat.status === 'Open' ? 'bg-green-600/20 text-green-400' : 'bg-orange-600/20 text-orange-400'}`}>
                  {cat.status === 'Open' ? '✓ Open' : '⚠ Filling'}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6">Schedule — May 18, 2026</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-amber-600/20">
                    <th className="text-left py-3 px-4 text-amber-600 font-semibold">Time</th>
                    <th className="text-left py-3 px-4 text-amber-600 font-semibold">Category</th>
                    <th className="text-left py-3 px-4 text-amber-600 font-semibold">Format</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">9:00 AM</td><td className="py-3 px-4">Check-In</td><td className="py-3 px-4">Registration</td></tr>
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">9:30 AM</td><td className="py-3 px-4">60+, Open Groups</td><td className="py-3 px-4">Round Robin</td></tr>
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">11:00 AM</td><td className="py-3 px-4">50+, Mixed Groups</td><td className="py-3 px-4">Round Robin</td></tr>
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">1:00 PM</td><td className="py-3 px-4">40+ Group Play</td><td className="py-3 px-4">Round Robin</td></tr>
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">3:00 PM</td><td className="py-3 px-4">All Categories</td><td className="py-3 px-4">Semifinals</td></tr>
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">5:00 PM</td><td className="py-3 px-4">All Categories</td><td className="py-3 px-4">Finals</td></tr>
                  <tr><td className="py-3 px-4">6:00 PM</td><td className="py-3 px-4">All Winners</td><td className="py-3 px-4">🏆 Prize Ceremony</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SCORING */}
      <section id="scoring" className="py-20 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Live Scoring on Challonge</h2>
          <div className="w-12 h-1 bg-amber-600 mb-8" />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-400 mb-6 text-lg">All scores entered live by players. Watch your bracket update in real-time on any device.</p>
              <div className="space-y-4">
                {['Create your Challonge account', 'Accept tournament invite', 'Enter scores after each match', 'Watch live bracket updates'].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-amber-600/20 border border-amber-600 flex items-center justify-center flex-shrink-0 font-semibold text-amber-600 text-sm">{i + 1}</div>
                    <div className="text-gray-400 pt-1">{step}</div>
                  </div>
                ))}
              </div>
              <a href="https://challonge.com/i67fngvr" target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-amber-600 text-white px-6 py-3 rounded font-semibold hover:bg-amber-700 transition">
                View Tournament Bracket →
              </a>
            </div>
            <div className="bg-slate-900 rounded border border-amber-600/20 p-8 flex flex-col items-center justify-center">
              <div className="text-center">
                <p className="text-gray-400 mb-4">Tournament Link:</p>
                <p className="font-bold text-amber-600 text-lg">challonge.com/i67fngvr</p>
                <p className="text-sm text-gray-500 mt-4">Available on web & mobile</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section id="registration" className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Registration</h2>
          <div className="w-12 h-1 bg-amber-600 mb-8" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-amber-600/20 rounded p-6 bg-slate-950">
              <div className="text-2xl mb-4">📋</div>
              <h3 className="font-semibold text-white mb-3">Requirements</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Valid photo ID</li>
                <li>✓ Meet age category</li>
                <li>✓ One category per player</li>
                <li>✓ Register as team pair</li>
              </ul>
            </div>
            <div className="border border-amber-600 rounded p-6 bg-amber-600/5">
              <div className="text-2xl mb-4">🏸</div>
              <h3 className="font-semibold text-white mb-3">Fee</h3>
              <div className="text-3xl font-bold text-amber-600 mb-4">$50<span className="text-sm text-gray-400 font-normal">/team</span></div>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Official shuttles</li>
                <li>✓ Bracket access</li>
                <li>✓ Live scoring</li>
                <li>✓ Prizes</li>
              </ul>
            </div>
            <div className="border border-amber-600/20 rounded p-6 bg-slate-950">
              <div className="text-2xl mb-4">📧</div>
              <h3 className="font-semibold text-white mb-3">How to Register</h3>
              <p className="text-sm text-gray-400 mb-4">Email or call Vinu George with your team info and category choice.</p>
              <div className="space-y-2">
                <p className="text-sm"><span className="font-semibold text-amber-600">📞</span> 416-670-6373</p>
                <p className="text-sm"><span className="font-semibold text-amber-600">✉️</span> vinuge@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WINNERS */}
      <section id="winners" className="py-20 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Past Champions</h2>
          <div className="w-12 h-1 bg-amber-600 mb-8" />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['40+ Doubles', '50+ Doubles', '60+ Doubles', 'Open Doubles', 'Mixed Doubles'].map((cat) => (
              <div key={cat} className="border border-amber-600/20 rounded p-6 bg-slate-900 text-center">
                <div className="text-3xl mb-3">🏆</div>
                <p className="text-amber-600 text-xs uppercase tracking-wider font-semibold mb-2">{cat}</p>
                <p className="text-white text-sm font-semibold">TBA</p>
                <p className="text-gray-500 text-xs mt-2">2026 Winners</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VENUE */}
      <section id="venue" className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Venue</h2>
          <div className="w-12 h-1 bg-amber-600 mb-8" />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-white text-lg mb-4">SU Badminton Club</h3>
              <p className="text-gray-400 mb-6">Mississauga's oldest and most respected badminton facility with international-standard courts.</p>
              <div className="space-y-4">
                <div><p className="text-gray-500 text-sm">ADDRESS</p><p className="text-white">4140B Sladeview Crescent #6<br/>Mississauga, ON L5L 5Z3</p></div>
                <div><p className="text-gray-500 text-sm">PHONE</p><p className="text-white">905-615-9996</p></div>
                <div><p className="text-gray-500 text-sm">PARKING</p><p className="text-white">Free on-site parking</p></div>
                <div><p className="text-gray-500 text-sm">SHOES</p><p className="text-white">Non-marking shoes required</p></div>
              </div>
              <a href="https://maps.google.com/?q=4140B+Sladeview+Crescent+Unit+6+Mississauga+ON" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 border border-amber-600/50 text-amber-600 px-6 py-2 rounded hover:bg-amber-600/10 transition text-sm font-semibold">
                View on Google Maps →
              </a>
            </div>
            <div className="bg-slate-950 rounded border border-amber-600/20 p-8 flex flex-col items-center justify-center">
              <div className="text-5xl mb-4">📍</div>
              <p className="text-gray-400 text-center text-sm">SU Badminton Club<br/>South Campus<br/><strong>4140B Sladeview Crescent #6</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
          <div className="w-12 h-1 bg-amber-600 mb-8" />
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="border border-amber-600/20 rounded p-6 bg-slate-900 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-600/20 border border-amber-600/50 flex items-center justify-center flex-shrink-0 font-bold text-amber-600">VG</div>
                  <div>
                    <p className="font-semibold text-white">Vinu George</p>
                    <p className="text-xs text-gray-500">Tournament Director</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400"><span className="text-amber-600 font-semibold">📞</span> <a href="tel:4166706373" className="hover:text-amber-600">416-670-6373</a></p>
                  <p className="text-gray-400"><span className="text-amber-600 font-semibold">✉️</span> <a href="mailto:vinuge@gmail.com" className="hover:text-amber-600">vinuge@gmail.com</a></p>
                </div>
              </div>
              <div className="flex gap-3">
                <a href="tel:4166706373" className="flex-1 bg-amber-600 text-white px-6 py-3 rounded font-semibold hover:bg-amber-700 transition text-center text-sm">
                  Call
                </a>
                <a href="mailto:vinuge@gmail.com" className="flex-1 border border-amber-600/50 text-amber-600 px-6 py-3 rounded font-semibold hover:bg-amber-600/10 transition text-center text-sm">
                  Email
                </a>
              </div>
            </div>
            <div className="border border-amber-600/20 rounded p-6 bg-slate-900">
              <h3 className="font-semibold text-white mb-4">Tournament Updates</h3>
              <p className="text-gray-400 text-sm mb-4">
                Stay up to date with announcements and live bracket updates on Challonge.
              </p>
              <a href="https://challonge.com/i67fngvr" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-600 text-white px-6 py-2 rounded font-semibold hover:bg-amber-700 transition text-sm">
                View Live Bracket →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

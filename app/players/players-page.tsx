'use client'

import { useState } from 'react'

export default function PlayersPage() {
  const [selectedCategory, setSelectedCategory] = useState('overall')

  // Sample player data
  const players = {
    overall: [
      { rank: 1, name: 'Team Alpha', wins: 8, losses: 1, points: 2450 },
      { rank: 2, name: 'Team Beta', wins: 7, losses: 2, points: 2380 },
      { rank: 3, name: 'Team Gamma', wins: 7, losses: 2, points: 2340 },
      { rank: 4, name: 'Team Delta', wins: 6, losses: 3, points: 2250 },
      { rank: 5, name: 'Team Epsilon', wins: 6, losses: 3, points: 2200 }
    ],
    '40plus': [
      { rank: 1, name: 'Masters A', wins: 5, losses: 0, points: 1050 },
      { rank: 2, name: 'Masters B', wins: 4, losses: 1, points: 980 },
      { rank: 3, name: 'Masters C', wins: 3, losses: 2, points: 890 }
    ],
    '50plus': [
      { rank: 1, name: 'Veterans A', wins: 4, losses: 0, points: 950 },
      { rank: 2, name: 'Veterans B', wins: 3, losses: 1, points: 880 },
      { rank: 3, name: 'Veterans C', wins: 2, losses: 2, points: 750 }
    ],
    open: [
      { rank: 1, name: 'Elite A', wins: 6, losses: 1, points: 1200 },
      { rank: 2, name: 'Elite B', wins: 5, losses: 2, points: 1100 },
      { rank: 3, name: 'Elite C', wins: 4, losses: 3, points: 950 }
    ]
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Players & Leaderboard</h1>
          <p className="text-xl">Current standings and player information</p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-8 overflow-x-auto">
            {['overall', '40plus', '50plus', 'open'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-4 px-2 font-semibold transition whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {cat === 'overall' && 'Overall'}
                {cat === '40plus' && '40+ Division'}
                {cat === '50plus' && '50+ Division'}
                {cat === 'open' && 'Open Division'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="text-left py-4 px-6 font-bold">Rank</th>
                    <th className="text-left py-4 px-6 font-bold">Team Name</th>
                    <th className="text-center py-4 px-6 font-bold">Wins</th>
                    <th className="text-center py-4 px-6 font-bold">Losses</th>
                    <th className="text-right py-4 px-6 font-bold">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {players[selectedCategory].map((player) => (
                    <tr
                      key={player.rank}
                      className={`border-b border-gray-200 hover:bg-blue-50 transition ${
                        player.rank === 1 ? 'bg-yellow-50' : ''
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-bold text-blue-600">
                            {player.rank === 1 && '🥇'}
                            {player.rank === 2 && '🥈'}
                            {player.rank === 3 && '🥉'}
                            {player.rank > 3 && `#${player.rank}`}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-gray-900 font-semibold">{player.name}</td>
                      <td className="py-4 px-6 text-center text-gray-700">{player.wins}</td>
                      <td className="py-4 px-6 text-center text-gray-700">{player.losses}</td>
                      <td className="py-4 px-6 text-right text-gray-900 font-bold">{player.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Player Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tournament Statistics</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Total Teams', value: '28' },
              { label: 'Total Matches', value: '64' },
              { label: 'Games Played', value: '192' },
              { label: 'Participants', value: '56+' }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <p className="text-gray-700 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Player Bios */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Players</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Player Name 1',
                category: '40+ Division',
                wins: 15,
                experience: '20+ years',
                bio: 'A passionate badminton player with decades of experience.'
              },
              {
                name: 'Player Name 2',
                category: '50+ Division',
                wins: 12,
                experience: '25+ years',
                bio: 'Known for exceptional footwork and court awareness.'
              },
              {
                name: 'Player Name 3',
                category: 'Open Division',
                wins: 18,
                experience: '15 years',
                bio: 'One of our most competitive and skillful players.'
              }
            ].map((player) => (
              <div key={player.name} className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-full h-48 bg-gradient-to-br from-blue-300 to-blue-600 rounded-lg mb-4 flex items-center justify-center text-4xl">
                  👤
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{player.name}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-4">{player.category}</p>
                <div className="space-y-2 mb-4 text-sm text-gray-700">
                  <p><strong>Tournament Wins:</strong> {player.wins}</p>
                  <p><strong>Experience:</strong> {player.experience}</p>
                </div>
                <p className="text-gray-700">{player.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Milton Masters</h2>
          <p className="text-lg mb-6">Compete with the best players in your division</p>
          <a
            href="/registration"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition inline-block"
          >
            Register Your Team
          </a>
        </div>
      </section>
    </main>
  )
}

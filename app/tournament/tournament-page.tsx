'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TournamentPage() {
  const [activeTab, setActiveTab] = useState('schedule')

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Tournament Details</h1>
          <p className="text-xl">May 18, 2026 • SU Badminton Club, Mississauga</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-8">
            {['schedule', 'rules', 'venue', 'brackets'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-semibold transition capitalize ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Schedule Tab */}
          {activeTab === 'schedule' && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Tournament Schedule</h2>
              
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Categories & Times</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-300">
                        <th className="text-left py-3 px-4 font-bold text-gray-900">Category</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900">Start Time</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900">Entry Fee</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900">Court</th>
                        <th className="text-left py-3 px-4 font-bold text-gray-900">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { cat: '40+ Doubles', time: '9:00 AM', fee: '$50/team', court: 'Court 1-2' },
                        { cat: '50+ Doubles', time: '10:00 AM', fee: '$50/team', court: 'Court 3-4' },
                        { cat: 'Mixed Doubles (XD)', time: '9:00 AM', fee: '$50/team', court: 'Court 5' },
                        { cat: 'Open Doubles', time: '12:00 PM', fee: '$50/team', court: 'Court 1-3' }
                      ].map((row) => (
                        <tr key={row.cat} className="border-b border-gray-200 hover:bg-blue-50">
                          <td className="py-3 px-4 text-gray-900 font-semibold">{row.cat}</td>
                          <td className="py-3 px-4 text-gray-700">{row.time}</td>
                          <td className="py-3 px-4 text-gray-700">{row.fee}</td>
                          <td className="py-3 px-4 text-gray-700">{row.court}</td>
                          <td className="py-3 px-4">
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                              Open
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">🏸 What to Know</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✓ Round Robin qualifying rounds</li>
                    <li>✓ Elimination bracket for semifinals/finals</li>
                    <li>✓ 21-point games, deuce at max 25</li>
                    <li>✓ Side changes at 11 points</li>
                    <li>✓ Yonex Mavis 350 Blue shuttlecocks</li>
                    <li>✓ Self-managed scoring (organizers per court)</li>
                  </ul>
                </div>

                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">📍 Location Details</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>SU Badminton Club (South Campus)</strong><br/>
                    4140B Sladeview Crescent #6<br/>
                    Mississauga, ON L5L 5Z3<br/>
                    Canada
                  </p>
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    View on Google Maps →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Rules Tab */}
          {activeTab === 'rules' && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Tournament Rules & Format</h2>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Round Robin Format</h3>
                <div className="space-y-4 mb-8 text-gray-700">
                  <p>
                    <strong>Round Robin (Qualifying Matches):</strong> Each team will play against 4-5 other teams in a round-robin format on designated courts.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Side change at 11 points, if required</li>
                    <li>21 point games</li>
                    <li>Deuce (20-20) ends at maximum 25 points</li>
                    <li>Teams assigned randomly to courts for the 1st round</li>
                    <li>1-2 team/court assigned as Organizers to self-manage</li>
                    <li>Organizers arrange Referee among team members and record Win (W) and actual loss score</li>
                    <li>Top 2 teams identified per court; if tie - compare total scores across all games</li>
                    <li>No Line umpires for round-robin – Referee's decision final</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Elimination Rounds</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Random assignment from qualified teams:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Side change at 11 points, if required</li>
                    <li>21 point games</li>
                    <li>Deuce (20-20) ends at maximum 25 points</li>
                    <li>Semi-finals: Best of 3 games (to be agreed prior to match start)</li>
                    <li>Finals: Best of 3 games</li>
                  </ul>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-gray-700">
                    <strong>⚠️ Important:</strong> Birds that hit ceiling/girders are considered a fault. Both teams have the same advantage/disadvantage, and side changes occur at 11 points.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Venue Tab */}
          {activeTab === 'venue' && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Venue Information</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">SU Badminton Club</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-700">4140B Sladeview Crescent #6, Mississauga, ON L5L 5Z3</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-gray-900">Facilities</p>
                      <ul className="text-gray-700 list-disc list-inside">
                        <li>Multiple badminton courts</li>
                        <li>Professional-grade lighting</li>
                        <li>Washroom facilities</li>
                        <li>Parking available</li>
                        <li>Seating for spectators</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-900">Parking</p>
                      <p className="text-gray-700">Free parking available on-site</p>
                    </div>
                  </div>

                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded transition inline-block"
                  >
                    Get Directions
                  </Link>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Bring</h3>
                  
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-3">
                      <span className="text-2xl">🎾</span>
                      <div>
                        <p className="font-semibold">Badminton Equipment</p>
                        <p className="text-sm">Rackets, shuttles (if allowed)</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">👟</span>
                      <div>
                        <p className="font-semibold">Proper Shoes</p>
                        <p className="text-sm">Court shoes recommended</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">💧</span>
                      <div>
                        <p className="font-semibold">Water & Snacks</p>
                        <p className="text-sm">Stay hydrated throughout the day</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-2xl">📱</span>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-sm">For quick communication with organizers</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Brackets Tab */}
          {activeTab === 'brackets' && (
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Live Brackets & Scoring</h2>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <p className="text-gray-700 mb-6">
                  Live tournament brackets and real-time scoring will be displayed here during the tournament.
                </p>
                
                <div className="inline-block bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
                  <p className="text-lg font-semibold text-blue-900 mb-4">🏆 Challonge Integration</p>
                  <p className="text-gray-700 mb-6">
                    Tournament brackets, match results, and live scoring are managed through Challonge.
                  </p>
                  <Link
                    href="https://challonge.com"
                    target="_blank"
                    className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-6 rounded transition inline-block"
                  >
                    View Brackets on Challonge
                  </Link>
                </div>

                <p className="text-sm text-gray-500 mt-8">
                  Brackets will be available starting on tournament day.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Compete?</h2>
          <Link
            href="/registration"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition inline-block"
          >
            Register Your Team
          </Link>
        </div>
      </section>
    </main>
  )
}

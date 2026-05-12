'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Registration() {
  const [formData, setFormData] = useState({
    category: '',
    player1Name: '',
    player1CertName: '',
    player2Name: '',
    player2CertName: '',
    teamName: '',
    phone: '',
    email: '',
    comments: '',
    capSize: 0,
    consent: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // In a real application, send to backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-wide">
          <h1 className="text-5xl font-bold mb-4 text-primary">Tournament Registration</h1>
          <p className="text-xl text-gray-600">
            Register your team for Milton Masters 2026. Please complete the form below.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-4">
        <div className="container-wide max-w-3xl">
          {submitted && (
            <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg animate-fade-in">
              <p className="font-semibold">✓ Registration submitted successfully!</p>
              <p className="text-sm mt-1">We have received your registration. The organizers will contact you shortly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Category Selection */}
            <div>
              <label className="block text-lg font-bold text-primary mb-4">
                Select Category <span className="text-secondary">*</span>
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Gen Adults (12:00 PM)',
                  'Mixed Doubles (9:00 AM)',
                  '40+ Adults (9:00 AM)',
                  '50+ Adults (10:00 AM)',
                  '60+ Adults (10:00 AM)',
                ].map(cat => (
                  <label key={cat} className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-all">
                    <input
                      type="radio"
                      name="category"
                      value={cat}
                      checked={formData.category === cat}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-primary"
                    />
                    <span className="ml-3 font-medium">{cat}</span>
                  </label>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">$50 per team</p>
            </div>

            {/* Player 1 */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Player 1</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Player Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    name="player1Name"
                    value={formData.player1Name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name on Certificate
                  </label>
                  <input
                    type="text"
                    name="player1CertName"
                    value={formData.player1CertName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                    placeholder="Leave blank if same as above"
                  />
                </div>
              </div>
            </div>

            {/* Player 2 */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Player 2 (Partner)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Player Name <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="text"
                    name="player2Name"
                    value={formData.player2Name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                    placeholder="Partner's full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name on Certificate
                  </label>
                  <input
                    type="text"
                    name="player2CertName"
                    value={formData.player2CertName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                    placeholder="Leave blank if same as above"
                  />
                </div>
              </div>
            </div>

            {/* Team Info */}
            <div className="card p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Team Name</label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                  placeholder="Optional team name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                    placeholder="(XXX) XXX-XXXX"
                  />
                  <p className="text-xs text-gray-600 mt-1">For tournament updates via WhatsApp</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-secondary">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Comments / Questions</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                  placeholder="Any special requests or questions"
                  rows={4}
                />
              </div>
            </div>

            {/* Merchandise */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Merchandise</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Unisex Cap (White with Black Print) - $5 each
                  </label>
                  <select
                    name="capSize"
                    value={formData.capSize}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                  >
                    <option value={0}>None</option>
                    <option value={1}>1 Cap (Small)</option>
                    <option value={2}>2 Caps (Small)</option>
                    <option value={2}>2 Caps (Medium)</option>
                    <option value={2}>2 Caps (Large)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="card p-6">
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                    className="w-4 h-4 text-primary mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    I consent to Milton Masters collecting and storing my team's tournament performance data for reporting annual progression.
                  </span>
                </label>

                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <p className="text-sm text-gray-600">
                    <strong>By registering, you agree to:</strong>
                  </p>
                  <ul className="text-sm text-gray-600 list-disc list-inside mt-2 space-y-1">
                    <li>Tournament rules and regulations</li>
                    <li>Facility usage policies</li>
                    <li>Fair play and sportsmanship code</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="btn-primary flex-1"
              >
                Submit Registration
              </button>
              <button
                type="reset"
                className="btn-outline flex-1"
              >
                Clear Form
              </button>
            </div>

            <p className="text-sm text-gray-600 text-center">
              Questions? Contact Vinu George at <a href="tel:+14166706373" className="text-primary font-semibold">416-670-6373</a> or <a href="mailto:vinuge@gmail.com" className="text-primary font-semibold">vinuge@gmail.com</a>
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}

'use client'

import { useState } from 'react'

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    category: '',
    player1Name: '',
    player2Name: '',
    teamName: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    comments: '',
    capQuantity: 0,
    agreeTerms: false,
    agreePrivacy: false
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
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        category: '',
        player1Name: '',
        player2Name: '',
        teamName: '',
        email: '',
        phone: '',
        city: '',
        experience: '',
        comments: '',
        capQuantity: 0,
        agreeTerms: false,
        agreePrivacy: false
      })
      setSubmitted(false)
    }, 2000)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg p-12 max-w-md w-full text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Submitted!</h2>
          <p className="text-gray-700 mb-6">
            Thank you for registering. We'll send you a confirmation email shortly with all the tournament details.
          </p>
          <p className="text-sm text-gray-600">
            Questions? Contact us at vinuge@gmail.com or 416-670-6373
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Tournament Registration</h1>
          <p className="text-xl">May 18, 2026 • SU Badminton Club</p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            {/* Category Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Category</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { id: '40plus', label: '40+ Doubles', time: '9:00 AM' },
                  { id: '50plus', label: '50+ Doubles', time: '10:00 AM' },
                  { id: 'xd', label: 'Mixed Doubles (XD)', time: '9:00 AM' },
                  { id: 'open', label: 'Open Doubles', time: '12:00 PM' }
                ].map(cat => (
                  <label key={cat.id} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-blue-600 transition" style={{
                    borderColor: formData.category === cat.id ? '#2563eb' : '#e5e7eb'
                  }}>
                    <input
                      type="radio"
                      name="category"
                      value={cat.id}
                      checked={formData.category === cat.id}
                      onChange={handleChange}
                      className="mr-3"
                      required
                    />
                    <div>
                      <p className="font-bold text-gray-900">{cat.label}</p>
                      <p className="text-sm text-gray-600">{cat.time}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Player Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Player Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Player 1 Name *
                  </label>
                  <input
                    type="text"
                    name="player1Name"
                    value={formData.player1Name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Player 2 Name *
                  </label>
                  <input
                    type="text"
                    name="player2Name"
                    value={formData.player2Name}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Team Name (Optional)
                </label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  placeholder="e.g., Team Alpha"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(416) 123-4567"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Mississauga"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                  required
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Additional Options */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Playing Experience
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                >
                  <option value="">Select...</option>
                  <option value="beginner">Beginner (0-2 years)</option>
                  <option value="intermediate">Intermediate (2-5 years)</option>
                  <option value="advanced">Advanced (5+ years)</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Unisex Caps (White with Black Print) - $5 each
                </label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      capQuantity: Math.max(0, prev.capQuantity - 1)
                    }))}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold text-gray-900 w-8 text-center">
                    {formData.capQuantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      capQuantity: prev.capQuantity + 1
                    }))}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-900 font-bold py-2 px-4 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Comments or Questions
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Any questions or comments for the organizers?"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                ></textarea>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Terms & Conditions */}
            <div className="mb-8">
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the tournament rules and regulations *
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the privacy policy and consent to Milton Masters collecting my information *
                  </span>
                </label>
              </div>
            </div>

            {/* Fee Summary */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8 border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-4">Fee Summary</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Tournament Entry:</span>
                  <span>$50.00</span>
                </div>
                {formData.capQuantity > 0 && (
                  <div className="flex justify-between">
                    <span>Caps ({formData.capQuantity} × $5):</span>
                    <span>${formData.capQuantity * 5}.00</span>
                  </div>
                )}
                <div className="border-t border-blue-200 pt-2 flex justify-between font-bold text-gray-900">
                  <span>Total:</span>
                  <span>${50 + (formData.capQuantity * 5)}.00</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!formData.agreeTerms || !formData.agreePrivacy}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition text-lg"
            >
              Submit Registration
            </button>
          </form>

          {/* Help Section */}
          <div className="mt-12 bg-blue-50 p-8 rounded-lg border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
            <p className="text-gray-700 mb-4">
              Contact us for help with registration or any tournament-related questions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-900">Vinu George</p>
                <p className="text-blue-600">📞 416-670-6373</p>
                <p className="text-blue-600">✉️ vinuge@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Registration',
    hearAbout: 'Website',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: 'Registration',
      hearAbout: 'Website',
      message: '',
    })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-wide">
          <h1 className="text-5xl font-bold mb-4 text-primary">Get In Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions about Milton Masters? Contact the organizers directly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <div className="card p-8">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Phone</h3>
              <p className="text-gray-600 mb-2">WhatsApp / Call</p>
              <a
                href="tel:+14166706373"
                className="text-2xl font-bold text-secondary hover:text-primary transition-colors"
              >
                416-670-6373
              </a>
              <p className="text-sm text-gray-600 mt-4">Vinu George</p>
            </div>

            <div className="card p-8">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Email</h3>
              <p className="text-gray-600 mb-2">Send us a message</p>
              <a
                href="mailto:vinuge@gmail.com"
                className="text-lg font-bold text-secondary hover:text-primary transition-colors break-all"
              >
                vinuge@gmail.com
              </a>
            </div>

            <div className="card p-8">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Venue</h3>
              <p className="text-gray-600 mb-2">SU Badminton Club</p>
              <a
                href="https://maps.google.com/?q=4140B+Sladeview+Crescent+%236+Mississauga+ON+L5L+5Z3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary font-semibold hover:text-primary transition-colors"
              >
                View on Map →
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-primary mb-8">Send us a Message</h2>

            {submitted && (
              <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg animate-fade-in">
                <p className="font-semibold">✓ Thank you for reaching out!</p>
                <p className="text-sm mt-1">We have received your message and will respond within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name <span className="text-secondary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone <span className="text-secondary">*</span>
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
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Inquiry Type <span className="text-secondary">*</span>
                </label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                >
                  <option>Registration Question</option>
                  <option>Tournament Rules</option>
                  <option>Venue Information</option>
                  <option>Sponsorship</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  How did you hear about Milton Masters?
                </label>
                <select
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                >
                  <option>Website</option>
                  <option>Social Media</option>
                  <option>Search Engine</option>
                  <option>Friend/Family</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message <span className="text-secondary">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-primary outline-none transition-colors"
                  placeholder="Your message here..."
                  rows={6}
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="btn-primary flex-1"
                >
                  Send Message
                </button>
                <button
                  type="reset"
                  className="btn-outline flex-1"
                >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container-wide max-w-3xl">
          <h2 className="text-4xl font-bold text-primary mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'When is the tournament?',
                a: 'Milton Masters 2026 will be held on May 18, 2026 at SU Badminton Club in Mississauga.',
              },
              {
                q: 'How much does it cost to register?',
                a: 'The registration fee is $50 per team, regardless of category. This includes tournament participation and a certificate for the winners.',
              },
              {
                q: 'Can I register my team?',
                a: 'Yes! You can register online using our registration form. We accept teams in all categories.',
              },
              {
                q: 'What if I have questions about the rules?',
                a: 'Please contact Vinu George at 416-670-6373 or vinuge@gmail.com. We are happy to clarify any tournament rules.',
              },
              {
                q: 'Is parking available?',
                a: 'Yes, SU Badminton Club has adequate parking for participants and spectators.',
              },
              {
                q: 'Can I bring my own shuttlecocks?',
                a: 'All matches use the official tournament shuttlecocks (Yonex Mavis 350 Blue) provided by the organizers.',
              },
            ].map((faq, i) => (
              <div key={i} className="card p-6">
                <h3 className="text-lg font-bold text-primary mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizers */}
      <section className="py-16 px-4">
        <div className="container-wide max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-primary mb-12">Meet the Organizers</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl">
                VG
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Vinu George</h3>
              <p className="text-gray-600 mb-4">Co-Founder & Tournament Director</p>
              <a
                href="tel:+14166706373"
                className="text-secondary font-semibold hover:text-primary transition-colors"
              >
                416-670-6373
              </a>
            </div>

            <div className="card p-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white text-4xl">
                HB
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Harry Bajwa</h3>
              <p className="text-gray-600 mb-4">Co-Founder & Coordinator</p>
              <p className="text-gray-500">Contact through main line</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

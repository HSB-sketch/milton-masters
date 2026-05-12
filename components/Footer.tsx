import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Milton Masters</h3>
            <p className="text-white/80 text-sm">
              Annual badminton tournament celebrating excellence and community at SU Badminton Club, Mississauga.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tournament" className="text-white/80 hover:text-white transition-colors">
                  Tournament Details
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-white/80 hover:text-white transition-colors">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/winners" className="text-white/80 hover:text-white transition-colors">
                  Winners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>
                <strong>Vinu George</strong>
                <br />
                <a href="tel:+14166706373" className="hover:text-white transition-colors">
                  416-670-6373
                </a>
                <br />
                <a href="mailto:vinuge@gmail.com" className="hover:text-white transition-colors">
                  vinuge@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Venue */}
          <div>
            <h4 className="text-lg font-bold mb-4">Venue</h4>
            <div className="text-sm text-white/80">
              <p className="font-semibold">SU Badminton Club</p>
              <p>South Campus</p>
              <p>4140B Sladeview Crescent #6</p>
              <p>Mississauga, ON L5L 5Z3</p>
              <a
                href="https://maps.google.com/?q=4140B+Sladeview+Crescent+%236+Mississauga+ON+L5L+5Z3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors mt-2 inline-block"
              >
                View Map →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>&copy; 2026 Milton Masters Badminton Tournament. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

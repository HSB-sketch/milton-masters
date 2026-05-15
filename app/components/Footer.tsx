import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Milton Masters</h3>
            <p className="text-sm mb-4">
              An annual badminton tournament at SU Badminton Club in Mississauga, bringing together players of all levels.
            </p>
            <p className="text-sm">Founded by Vinu George and Harry Bajwa</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tournament" className="hover:text-white transition">
                  Tournament
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/players" className="hover:text-white transition">
                  Players
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="font-semibold text-white">Vinu George</p>
                <p>
                  <a href="tel:416-670-6373" className="hover:text-white transition">
                    416-670-6373
                  </a>
                </p>
                <p>
                  <a href="mailto:vinuge@gmail.com" className="hover:text-white transition">
                    vinuge@gmail.com
                  </a>
                </p>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Location</h4>
            <div className="text-sm">
              <p className="font-semibold text-white mb-2">SU Badminton Club</p>
              <p>4140B Sladeview Crescent #6</p>
              <p>Mississauga, ON L5L 5Z3</p>
              <p>Canada</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition mt-2 inline-block"
              >
                View on Maps →
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-bold text-white mb-3">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition text-lg">
                  f
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition text-lg">
                  𝕏
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition text-lg">
                  in
                </a>
              </div>
            </div>

            {/* Tournament Info */}
            <div className="text-center">
              <p className="text-sm">
                <strong className="text-white">Next Tournament:</strong> May 18, 2026
              </p>
              <p className="text-sm mt-1">
                <strong className="text-white">Entry Fee:</strong> $50 per team
              </p>
            </div>

            {/* Newsletter */}
            <div className="text-right">
              <p className="text-sm mb-2">
                <strong className="text-white">Subscribe for Updates</strong>
              </p>
              <p className="text-xs text-gray-400">
                Get tournament news, results, and announcements
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {currentYear} Milton Masters. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition">
              Contact
            </Link>
          </div>

          <p className="text-sm">
            Made with ❤️ for badminton enthusiasts
          </p>
        </div>
      </div>
    </footer>
  )
}

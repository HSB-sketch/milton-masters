import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-amber-600/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Milton Masters</h3>
            <p className="text-gray-400 text-sm">Annual badminton tournament in Mississauga, Ontario</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-amber-600 transition">Home</Link></li>
              <li><Link href="#tournament" className="text-gray-400 hover:text-amber-600 transition">Tournament</Link></li>
              <li><Link href="#register" className="text-gray-400 hover:text-amber-600 transition">Register</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-amber-600 transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">Vinu George</p>
            <p className="text-gray-400 text-sm mb-2">📞 416-670-6373</p>
            <p className="text-gray-400 text-sm">✉️ vinuge@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>© 2026 Milton Masters Badminton Tournament. All rights reserved.</p>
          <p>SU Badminton Club, Mississauga, ON</p>
        </div>
      </div>
    </footer>
  );
}

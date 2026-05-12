import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-amber-600">Milton</span>
          <span className="text-white ml-2">Masters</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#about" className="text-gray-400 hover:text-amber-600 transition text-sm uppercase tracking-wide">About</Link>
          <Link href="#tournament" className="text-gray-400 hover:text-amber-600 transition text-sm uppercase tracking-wide">Tournament</Link>
          <Link href="#register" className="text-gray-400 hover:text-amber-600 transition text-sm uppercase tracking-wide">Register</Link>
          <Link href="#contact" className="text-gray-400 hover:text-amber-600 transition text-sm uppercase tracking-wide">Contact</Link>
          <button className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition text-sm font-semibold uppercase">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}

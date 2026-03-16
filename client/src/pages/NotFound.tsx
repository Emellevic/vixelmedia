import { Link } from "wouter";
import { AlertCircle, Home } from "lucide-react";

/**
 * Vixel Media 404 Not Found Page
 * 
 * Design Philosophy: Premium Modern Agency
 * - Branded 404 page with navigation back to home
 * - Consistent with overall design language
 */

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Navigation */}
      <nav className="sticky-nav">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="text-2xl font-bold cursor-pointer" style={{ color: "var(--vixel-blue)" }}>
              Vixel Media
            </div>
          </Link>
        </div>
      </nav>

      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--vixel-yellow)", opacity: 0.2 }}
              />
              <AlertCircle 
                className="relative h-24 w-24"
                style={{ color: "var(--vixel-blue)" }}
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{ color: "var(--vixel-blue)" }}>
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--vixel-blue)" }}>
            Page Not Found
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Sorry, the page you're looking for doesn't exist. It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button 
                className="btn-primary inline-flex items-center gap-2 text-lg"
              >
                <Home size={20} />
                Go Home
              </button>
            </Link>
            <Link href="/portfolio">
              <button 
                className="btn-secondary inline-flex items-center gap-2 text-lg"
              >
                View Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Vixel Media</h3>
              <p className="text-gray-400">Strategic graphic design for businesses, events, and brands.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services" className="hover:text-white">Logo Design</Link></li>
                <li><Link href="/services" className="hover:text-white">Brand Identity</Link></li>
                <li><Link href="/services" className="hover:text-white">Event Branding</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/portfolio" className="hover:text-white">Portfolio</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://behance.net" className="hover:text-white">Behance</a></li>
                <li><a href="https://instagram.com" className="hover:text-white">Instagram</a></li>
                <li><a href="https://linkedin.com" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vixel Media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

/**
 * Vixel Media Project Inquiry Form Page
 * 
 * Design Philosophy: Premium Modern Agency
 * - Comprehensive project inquiry form
 * - All necessary fields for project scoping
 * - Professional, clean form design
 */

export default function Inquiry() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky-nav">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <div className="text-2xl font-bold cursor-pointer" style={{ color: "var(--vixel-blue)" }}>
              Vixel Media
            </div>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link href="/portfolio" className="hover:text-yellow-400 transition">Portfolio</Link>
            <Link href="/services" className="hover:text-yellow-400 transition">Services</Link>
            <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
            <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <button className="flex items-center gap-2" style={{ color: "var(--vixel-blue)" }}>
            <ArrowLeft size={20} />
            Back to Home
          </button>
        </Link>
      </div>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: "var(--vixel-blue)" }}>
            Project Inquiry Form
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Tell us about your project and we'll get back to you with a custom proposal within 24 hours.
          </p>

          <form className="space-y-6 bg-gray-50 p-8 rounded-lg">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Full Name *
              </label>
              <input 
                type="text"
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Email Address *
              </label>
              <input 
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                required
              />
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Business Name *
              </label>
              <input 
                type="text"
                placeholder="Your business name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                required
              />
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Project Type *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none" required>
                <option value="">Select a project type</option>
                <option value="logo">Logo Design</option>
                <option value="branding">Brand Identity</option>
                <option value="event">Event Branding</option>
                <option value="social">Social Media Graphics</option>
                <option value="marketing">Marketing Design</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Budget Range *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none" required>
                <option value="">Select a budget range</option>
                <option value="under-1k">Under $1,000</option>
                <option value="1k-3k">$1,000 - $3,000</option>
                <option value="3k-5k">$3,000 - $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-plus">$10,000+</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Project Timeline *
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none" required>
                <option value="">Select a timeline</option>
                <option value="asap">ASAP (1-2 weeks)</option>
                <option value="1month">1 Month</option>
                <option value="2months">2 Months</option>
                <option value="3months">3+ Months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Project Description *
              </label>
              <textarea 
                placeholder="Tell us about your project, your vision, and what you're hoping to achieve..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Target Audience */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Target Audience
              </label>
              <textarea 
                placeholder="Describe your target audience and who you want to reach..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              ></textarea>
            </div>

            {/* Inspiration/Reference */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Design Inspiration or References
              </label>
              <textarea 
                placeholder="Share any design styles, competitors, or references you like..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              ></textarea>
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Anything Else?
              </label>
              <textarea 
                placeholder="Any other information you'd like to share..."
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full btn-primary text-white font-semibold py-3 text-lg"
            >
              Submit Inquiry
            </button>

            <p className="text-center text-gray-600 text-sm">
              We'll review your inquiry and get back to you within 24 hours with a custom proposal.
            </p>
          </form>
        </div>
      </section>

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

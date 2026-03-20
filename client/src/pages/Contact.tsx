import { Link } from "wouter";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";

/**
 * Vixel Media Contact Page
 * 
 * Design Philosophy: Premium Modern Agency
 * - Contact information
 * - Contact form
 * - Social links
 * - WhatsApp integration
 */

export default function Contact() {
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

      {/* Hero Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663297762572/PnneSbqDXnT8nSn7rayF65/hero-abstract-blue-BmKusQeycdqPYJ9Vdj8miH.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl md:text-2xl" style={{ color: "var(--vixel-yellow)" }}>
            Let's discuss your next project
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {/* Email */}
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--vixel-light-gray)" }}
              >
                <Mail size={32} style={{ color: "var(--vixel-blue)" }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Email
              </h3>
              <a href="mailto:hello@vixelmedia.com" className="text-gray-600 hover:text-blue-600">
                hello@vixelmedia.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--vixel-light-gray)" }}
              >
                <MessageSquare size={32} style={{ color: "var(--vixel-blue)" }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                WhatsApp
              </h3>
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600"
              >
                +1 (234) 567-890
              </a>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--vixel-light-gray)" }}
              >
                <Phone size={32} style={{ color: "var(--vixel-blue)" }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Phone
              </h3>
              <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">
                +1 (234) 567-890
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "var(--vixel-blue)" }}>
              Send us a Message
            </h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                  Name
                </label>
                <input 
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ outlineColor: "var(--vixel-yellow)" }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                  Email
                </label>
                <input 
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ outlineColor: "var(--vixel-yellow)" }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                  Business Name
                </label>
                <input 
                  type="text"
                  placeholder="Your business name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ outlineColor: "var(--vixel-yellow)" }}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" style={{ color: "var(--vixel-blue)" }}>
                  Message
                </label>
                <textarea 
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                  style={{ outlineColor: "var(--vixel-yellow)" }}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full btn-primary text-white font-semibold py-3"
              >
                Send Message
              </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-6">
              We'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20" style={{ backgroundColor: "var(--vixel-light-gray)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: "var(--vixel-blue)" }}>
            Follow Us
          </h2>
          <div className="flex justify-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition text-lg font-semibold"
            >
              Instagram
            </a>
            <a 
              href="https://behance.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition text-lg font-semibold"
            >
              Behance
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700 transition text-lg font-semibold"
            >
              LinkedIn
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition text-lg font-semibold"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                What's your typical project timeline?
              </h3>
              <p className="text-gray-700">
                Most projects take 2-4 weeks depending on scope and complexity. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Do you offer revisions?
              </h3>
              <p className="text-gray-700">
                Yes! We include unlimited revisions until you're completely satisfied with the final design.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                What's your pricing structure?
              </h3>
              <p className="text-gray-700">
                We offer custom pricing based on your specific project needs. We'll provide a detailed quote after discussing your requirements.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Do you work with international clients?
              </h3>
              <p className="text-gray-700">
                Absolutely! We work with clients worldwide. Our remote-first approach makes it easy to collaborate regardless of location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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

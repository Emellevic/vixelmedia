import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

/**
 * Vixel Media About Page
 * 
 * Design Philosophy: Premium Modern Agency
 * - Agency story and mission
 * - Design philosophy and approach
 * - Commitment to quality
 * - Team and values
 */

export default function About() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
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
        className="py-20 text-white"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663297762572/PnneSbqDXnT8nSn7rayF65/hero-abstract-blue-BmKusQeycdqPYJ9Vdj8miH.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Vixel Media</h1>
          <p className="text-xl md:text-2xl" style={{ color: "var(--vixel-yellow)" }}>
            Strategic design for brands that matter
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-heading mb-8">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Vixel Media was founded with a simple belief: exceptional design has the power to transform businesses. We started as a small team of passionate designers who wanted to create work that went beyond aesthetics—design that solved problems, communicated values, and drove real business results.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Over the past decade, we've had the privilege of working with over 100 clients across diverse industries. From ambitious startups to established enterprises, we've helped brands find their voice and stand out in crowded markets. Each project has taught us something new and reinforced our commitment to excellence.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, Vixel Media is recognized as a trusted partner for strategic graphic design. We're proud of our portfolio, but more importantly, we're proud of the relationships we've built and the impact we've had on our clients' success.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20" style={{ backgroundColor: "var(--vixel-light-gray)" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--vixel-blue)" }}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create strategic, memorable design that elevates brands and drives business growth. We believe that great design is a combination of creativity, strategy, and understanding. Our mission is to deliver design solutions that not only look beautiful but also achieve measurable results for our clients.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: "var(--vixel-blue)" }}>
                Our Values
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--vixel-yellow)" }}
                  ></div>
                  <div>
                    <p className="font-bold" style={{ color: "var(--vixel-blue)" }}>Excellence</p>
                    <p className="text-gray-700 text-sm">We pursue excellence in every project, no matter the size.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--vixel-yellow)" }}
                  ></div>
                  <div>
                    <p className="font-bold" style={{ color: "var(--vixel-blue)" }}>Collaboration</p>
                    <p className="text-gray-700 text-sm">We work closely with our clients as true partners.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--vixel-yellow)" }}
                  ></div>
                  <div>
                    <p className="font-bold" style={{ color: "var(--vixel-blue)" }}>Innovation</p>
                    <p className="text-gray-700 text-sm">We stay ahead of design trends and best practices.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div 
                    className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: "var(--vixel-yellow)" }}
                  ></div>
                  <div>
                    <p className="font-bold" style={{ color: "var(--vixel-blue)" }}>Integrity</p>
                    <p className="text-gray-700 text-sm">We're transparent and honest in all our dealings.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-heading mb-8">Our Design Philosophy</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--vixel-blue)" }}>
                Strategy First
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We believe that great design starts with strategy. Before we create anything, we take time to understand your business, your audience, and your goals. This strategic foundation ensures that every design decision is purposeful and aligned with your objectives.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--vixel-blue)" }}>
                Simplicity with Impact
              </h3>
              <p className="text-gray-700 leading-relaxed">
                In a world of visual noise, simplicity stands out. We believe in creating clean, focused designs that communicate clearly and make a lasting impression. We remove the unnecessary and emphasize what matters most.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--vixel-blue)" }}>
                Timeless Design
              </h3>
              <p className="text-gray-700 leading-relaxed">
                While we stay current with design trends, we focus on creating work that will stand the test of time. We avoid trendy elements that quickly become dated, instead creating designs with longevity and relevance.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--vixel-blue)" }}>
                Collaboration
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your input is invaluable. We see our clients as partners in the creative process. Through open communication and regular feedback, we ensure that the final design exceeds your expectations and truly represents your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ backgroundColor: "var(--vixel-light-gray)" }}>
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Why Choose Vixel Media</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-3" style={{ color: "var(--vixel-yellow)" }}>
                10+
              </div>
              <h3 className="font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Years of Experience
              </h3>
              <p className="text-gray-600">
                A decade of proven expertise in graphic design and branding.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-3" style={{ color: "var(--vixel-yellow)" }}>
                100+
              </div>
              <h3 className="font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Projects Completed
              </h3>
              <p className="text-gray-600">
                Diverse portfolio across industries and design disciplines.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold mb-3" style={{ color: "var(--vixel-yellow)" }}>
                98%
              </div>
              <h3 className="font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Client Satisfaction
              </h3>
              <p className="text-gray-600">
                Dedicated to exceeding expectations on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{ backgroundColor: "var(--vixel-blue)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to work with us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help bring your vision to life.
          </p>
          <Link href="/inquiry">
            <button className="btn-primary inline-flex items-center gap-2" style={{ backgroundColor: "var(--vixel-yellow)", color: "var(--vixel-blue)" }}>
              Get in Touch <ArrowRight size={20} />
            </button>
          </Link>
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

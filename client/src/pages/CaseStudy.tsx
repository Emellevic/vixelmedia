import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * Vixel Media Case Study Page
 * 
 * Design Philosophy: Premium Modern Agency
 * - Detailed project showcase with challenge, approach, solution
 * - High-quality mockups and deliverables
 * - Clear narrative flow
 * - CTA to start new project
 */

export default function CaseStudy() {
  const { id } = useParams();

  // Sample case study data - in production, this would come from a database or API
  const caseStudy = {
    id: id,
    title: "TechFlow Brand Identity",
    client: "TechFlow",
    industry: "SaaS / Technology",
    year: "2024",
    overview: "Complete brand identity redesign for a fast-growing SaaS startup focused on workflow automation.",
    challenge: "TechFlow was a promising startup with a strong product but lacked a cohesive visual identity. Their existing branding felt generic and didn't communicate their innovative approach to workflow automation. They needed a modern, professional identity that would resonate with enterprise clients while maintaining approachability for smaller businesses.",
    approach: "We conducted in-depth discovery sessions to understand TechFlow's vision, values, and target audience. Through competitive analysis and market research, we identified opportunities to create a distinctive visual language. Our approach combined modern geometric elements with dynamic color usage to convey innovation and reliability.",
    solution: "We developed a comprehensive brand identity including logo, color palette, typography system, and visual guidelines. The logo features a dynamic geometric shape that represents workflow and connectivity. The color palette combines deep blue for trust with vibrant accents for innovation.",
    deliverables: [
      "Logo design and variations",
      "Color palette and specifications",
      "Typography system",
      "Brand guidelines document",
      "Business card and letterhead design",
      "Website design mockups",
      "Social media templates"
    ],
    results: "Post-launch, TechFlow saw a 35% increase in brand recognition among target clients. The new identity helped secure three major enterprise contracts within six months. Client satisfaction score: 9.8/10.",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop"
    ]
  };

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

      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/portfolio">
          <button className="flex items-center gap-2" style={{ color: "var(--vixel-blue)" }}>
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: "var(--vixel-blue)" }}>
            {caseStudy.title}
          </h1>
          <div className="flex flex-wrap gap-8 text-lg">
            <div>
              <p className="text-gray-600 text-sm">Client</p>
              <p className="font-bold" style={{ color: "var(--vixel-blue)" }}>{caseStudy.client}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Industry</p>
              <p className="font-bold" style={{ color: "var(--vixel-blue)" }}>{caseStudy.industry}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Year</p>
              <p className="font-bold" style={{ color: "var(--vixel-blue)" }}>{caseStudy.year}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-heading mb-6">Project Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.overview}</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <img 
            src={caseStudy.images[0]} 
            alt={caseStudy.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16" style={{ backgroundColor: "var(--vixel-light-gray)" }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-heading mb-6">The Challenge</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-heading mb-6">Our Approach</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.approach}</p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16" style={{ backgroundColor: "var(--vixel-light-gray)" }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-heading mb-6">The Solution</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{caseStudy.solution}</p>
          
          <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--vixel-blue)" }}>Deliverables</h3>
          <ul className="space-y-3">
            {caseStudy.deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div 
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "var(--vixel-yellow)" }}
                ></div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.images.slice(1).map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16" style={{ backgroundColor: "var(--vixel-light-gray)" }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-heading mb-6">Results & Impact</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.results}</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{ backgroundColor: "var(--vixel-blue)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with strategic design.
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

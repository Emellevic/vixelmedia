import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

/**
 * Vixel Media Services Page
 * 
 * Design Philosophy: Premium Modern Agency
 * - Detailed descriptions of all services
 * - Benefits and deliverables per service
 * - Clear CTAs for each service
 */

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Logo Design",
      description: "A logo is the face of your brand. We create custom, memorable logos that capture your brand essence and stand out in the market.",
      benefits: [
        "Unique, custom designs tailored to your brand",
        "Multiple concepts and revisions",
        "Scalable designs for all applications",
        "Color and monochrome variations",
        "Usage guidelines included"
      ],
      deliverables: [
        "3-5 original logo concepts",
        "Unlimited revisions",
        "Final files in multiple formats (PNG, SVG, PDF)",
        "Brand usage guidelines",
        "Source files for future modifications"
      ]
    },
    {
      id: 2,
      title: "Brand Identity",
      description: "A complete brand identity goes beyond a logo. We develop comprehensive visual systems that communicate your brand values across all touchpoints.",
      benefits: [
        "Cohesive visual language",
        "Professional color palette",
        "Typography system",
        "Consistent brand experience",
        "Scalable across mediums"
      ],
      deliverables: [
        "Logo design and variations",
        "Color palette with specifications",
        "Typography guidelines",
        "Business card design",
        "Letterhead and envelope design",
        "Email signature template",
        "Brand guidelines document (20+ pages)"
      ]
    },
    {
      id: 3,
      title: "Event Branding",
      description: "Make your event unforgettable with cohesive, professional branding that creates a memorable experience for attendees.",
      benefits: [
        "Unified visual experience",
        "Professional event materials",
        "Attendee engagement",
        "Brand reinforcement",
        "Memorable experience"
      ],
      deliverables: [
        "Event logo and visual identity",
        "Poster and promotional materials",
        "Signage and wayfinding design",
        "Program and schedule design",
        "Badge and credential design",
        "Social media graphics",
        "Digital display templates"
      ]
    },
    {
      id: 4,
      title: "Social Media Graphics",
      description: "Stand out on social media with custom, on-brand graphics designed to engage your audience and drive conversions.",
      benefits: [
        "Consistent brand presence",
        "Higher engagement rates",
        "Professional appearance",
        "Time-saving templates",
        "Platform-optimized designs"
      ],
      deliverables: [
        "Social media templates (Instagram, Facebook, LinkedIn)",
        "Post graphics (minimum 20 designs)",
        "Story templates",
        "Cover photo designs",
        "Reels and video graphics",
        "Content calendar template"
      ]
    },
    {
      id: 5,
      title: "Marketing & Promotional Design",
      description: "Elevate your marketing efforts with professionally designed promotional materials that capture attention and drive results.",
      benefits: [
        "Professional presentation",
        "Increased brand awareness",
        "Higher conversion rates",
        "Consistent messaging",
        "Competitive advantage"
      ],
      deliverables: [
        "Flyer and brochure design",
        "Banner and signage",
        "Email marketing templates",
        "Infographics",
        "Product packaging design",
        "Presentation templates",
        "Print-ready files"
      ]
    }
  ];

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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl" style={{ color: "var(--vixel-yellow)" }}>
            Comprehensive design solutions for your brand
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div key={service.id} className={`mb-20 ${index !== services.length - 1 ? 'pb-20 border-b border-gray-200' : ''}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Service Info */}
                <div>
                  <h2 className="section-heading mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--vixel-blue)" }}>
                    Benefits
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} style={{ color: "var(--vixel-yellow)", flexShrink: 0 }} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/inquiry">
                    <button className="btn-primary inline-flex items-center gap-2">
                      Get Started <ArrowRight size={20} />
                    </button>
                  </Link>
                </div>

                {/* Deliverables */}
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--vixel-blue)" }}>
                    Deliverables
                  </h3>
                  <ul className="space-y-4">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0">
                        <div 
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: "var(--vixel-yellow)" }}
                        ></div>
                        <span className="text-gray-700">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" style={{ backgroundColor: "var(--vixel-light-gray)" }}>
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: "var(--vixel-blue)" }}
                >
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                    Discovery & Consultation
                  </h3>
                  <p className="text-gray-700">
                    We start by understanding your brand, goals, target audience, and vision. Through detailed consultation, we gather all necessary information to inform our creative strategy.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: "var(--vixel-blue)" }}
                >
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                    Strategy & Concept Development
                  </h3>
                  <p className="text-gray-700">
                    Based on our research, we develop a creative strategy and present multiple concept directions. We explore different approaches to find the best solution for your brand.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: "var(--vixel-blue)" }}
                >
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                    Design & Refinement
                  </h3>
                  <p className="text-gray-700">
                    We refine the selected concept and create detailed designs. Your feedback is incorporated through unlimited revisions until we achieve the perfect result.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                  style={{ backgroundColor: "var(--vixel-blue)" }}
                >
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                    Delivery & Support
                  </h3>
                  <p className="text-gray-700">
                    We deliver all final files in multiple formats along with comprehensive guidelines. We're available for any questions or future modifications you may need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 text-white" style={{ backgroundColor: "var(--vixel-blue)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Custom Pricing</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Each project is unique. We offer customized packages based on your specific needs and budget. Let's discuss your requirements.
          </p>
          <Link href="/inquiry">
            <button className="btn-primary inline-flex items-center gap-2" style={{ backgroundColor: "var(--vixel-yellow)", color: "var(--vixel-blue)" }}>
              Request a Quote <ArrowRight size={20} />
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

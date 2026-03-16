import { Link } from "wouter";
import { ArrowRight, Zap, Palette, Lightbulb, Users, CheckCircle } from "lucide-react";

/**
 * Vixel Media Home Page
 * 
 * Design Philosophy: Premium Modern Agency
 * - Hero section with deep blue background and yellow accents
 * - Featured projects grid showcasing curated work
 * - Services overview with clear value propositions
 * - Design process visualization
 * - Testimonials section
 * - Strong CTAs throughout
 */

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "TechFlow Brand Identity",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Complete brand identity system for a SaaS startup"
    },
    {
      id: 2,
      title: "EventPro Logo Design",
      category: "Logo Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Modern, scalable logo for event management platform"
    },
    {
      id: 3,
      title: "Summit 2024 Event Branding",
      category: "Event Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Complete visual identity for international conference"
    },
    {
      id: 4,
      title: "SocialBoost Campaign",
      category: "Social Media Graphics",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Cohesive social media content suite for fintech brand"
    }
  ];

  const services = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Custom, memorable logos that define your brand identity and stand out in the market."
    },
    {
      icon: Lightbulb,
      title: "Brand Identity",
      description: "Complete brand systems including color palettes, typography, and visual guidelines."
    },
    {
      icon: Users,
      title: "Event Branding",
      description: "Cohesive visual identities for conferences, exhibitions, and brand experiences."
    },
    {
      icon: Zap,
      title: "Social Media Graphics",
      description: "Engaging, on-brand content designed to drive engagement and conversions."
    },
    {
      icon: CheckCircle,
      title: "Marketing Design",
      description: "Promotional materials, packaging, and collateral that elevate your brand presence."
    }
  ];

  const processSteps = [
    { step: 1, title: "Discovery", description: "Understanding your vision, goals, and target audience" },
    { step: 2, title: "Strategy", description: "Developing a creative approach aligned with your objectives" },
    { step: 3, title: "Design", description: "Crafting compelling visuals that tell your brand story" },
    { step: 4, title: "Delivery", description: "Polished final assets ready for implementation" }
  ];

  const testimonials = [
    {
      quote: "Vixel Media transformed our brand identity. Their attention to detail and creative excellence exceeded our expectations.",
      author: "Sarah Chen",
      title: "CEO, TechFlow",
      company: "SaaS Startup"
    },
    {
      quote: "Working with Vixel Media was seamless. They understood our vision immediately and delivered exceptional results.",
      author: "Marcus Johnson",
      title: "Marketing Director, EventPro",
      company: "Event Management"
    },
    {
      quote: "The social media graphics they created drove a 45% increase in engagement. Highly recommended!",
      author: "Elena Rodriguez",
      title: "Brand Manager, SocialBoost",
      company: "Fintech"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky-nav">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: "var(--vixel-blue)" }}>
            Vixel Media
          </div>
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
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663297762572/PnneSbqDXnT8nSn7rayF65/hero-abstract-blue-BmKusQeycdqPYJ9Vdj8miH.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Strategic Graphic Design</h1>
          <p className="tagline text-2xl md:text-3xl mb-8" style={{ color: "var(--vixel-yellow)" }}>
            For Businesses, Events, and Brands
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Elevate your brand with award-winning design that captures attention and drives results.
          </p>
          <Link href="/inquiry">
            <button className="btn-primary inline-flex items-center gap-2 text-lg">
              Start a Project <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-4">
            Featured <span className="highlight">Projects</span>
          </h2>
          <div className="accent-line mx-auto w-24 mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <div className="project-card cursor-pointer group">
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold" style={{ color: "var(--vixel-yellow)" }}>
                      {project.category}
                    </p>
                    <h3 className="text-lg font-bold mt-2" style={{ color: "var(--vixel-blue)" }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/portfolio">
              <button className="btn-secondary inline-flex items-center gap-2">
                View All Projects <ArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section 
        className="py-20"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663297762572/PnneSbqDXnT8nSn7rayF65/services-section-bg-fu23oKdCDYya2FegxgiLVq.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-4">Our Services</h2>
          <div className="accent-line mx-auto w-24 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card">
                  <Icon size={32} className="mb-4" style={{ color: "var(--vixel-blue)" }} />
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--vixel-blue)" }}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Vixel Media */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-4">
            Why Choose <span className="highlight">Vixel Media</span>
          </h2>
          <div className="accent-line mx-auto w-24 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-3" style={{ color: "var(--vixel-yellow)" }}>
                100+
              </div>
              <h3 className="font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Projects Completed
              </h3>
              <p className="text-gray-600">Diverse portfolio across industries and styles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-3" style={{ color: "var(--vixel-yellow)" }}>
                98%
              </div>
              <h3 className="font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Client Satisfaction
              </h3>
              <p className="text-gray-600">Dedicated to exceeding expectations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-3" style={{ color: "var(--vixel-yellow)" }}>
                10+
              </div>
              <h3 className="font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                Years Experience
              </h3>
              <p className="text-gray-600">Proven track record of creative excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20" style={{ backgroundColor: "var(--vixel-light-gray)" }}>
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-4">Our Design Process</h2>
          <div className="accent-line mx-auto w-24 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl"
                  style={{ backgroundColor: "var(--vixel-blue)" }}
                >
                  {item.step}
                </div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--vixel-blue)" }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        className="py-20"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663297762572/PnneSbqDXnT8nSn7rayF65/testimonial-pattern-KPPNnXNn6dc9SrFSNoNTZq.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-4">Client Testimonials</h2>
          <div className="accent-line mx-auto w-24 mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold" style={{ color: "var(--vixel-blue)" }}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section 
        className="py-20 text-white"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663297762572/PnneSbqDXnT8nSn7rayF65/cta-gradient-bg-WM7H6cVxU63SPYuXr8sHBP.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Start your project today.
          </p>
          <Link href="/inquiry">
            <button className="btn-primary inline-flex items-center gap-2 text-lg">
              Get Started <ArrowRight size={20} />
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

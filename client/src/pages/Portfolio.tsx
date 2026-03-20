import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

/**
 * Vixel Media Portfolio Page
 * 
 * Design Philosophy: Premium Modern Agency
 * - Grid layout showcasing 10-12 curated projects
 * - Each project card links to detailed case study
 * - Category filters for easy navigation
 * - Consistent visual hierarchy and spacing
 */

export default function Portfolio() {
  const projects = [
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
    },
    {
      id: 5,
      title: "Luxe Packaging Design",
      category: "Marketing Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Premium packaging design for luxury cosmetics brand"
    },
    {
      id: 6,
      title: "StartupHub Visual Identity",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Complete visual system for innovation hub"
    },
    {
      id: 7,
      title: "Conference 2024 Branding",
      category: "Event Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Integrated branding for tech conference"
    },
    {
      id: 8,
      title: "Creative Agency Logo",
      category: "Logo Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Bold, memorable logo for creative agency"
    },
    {
      id: 9,
      title: "Digital Marketing Suite",
      category: "Social Media Graphics",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Complete social media content calendar"
    },
    {
      id: 10,
      title: "Brand Guidelines System",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Comprehensive brand guidelines and standards"
    },
    {
      id: 11,
      title: "Festival Identity Design",
      category: "Event Branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Vibrant visual identity for music festival"
    },
    {
      id: 12,
      title: "Product Launch Campaign",
      category: "Marketing Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
      description: "Integrated marketing design for product launch"
    }
  ];

  const categories = ["All", "Logo Design", "Brand Identity", "Event Branding", "Social Media Graphics", "Marketing Design"];

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
        className="py-20 text-white"
        style={{
          backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663297762572/PnneSbqDXnT8nSn7rayF65/hero-abstract-blue-BmKusQeycdqPYJ9Vdj8miH.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl md:text-2xl" style={{ color: "var(--vixel-yellow)" }}>
            Curated collection of our finest design work
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-lg transition-all duration-300 font-semibold"
                style={{
                  backgroundColor: category === "All" ? "var(--vixel-blue)" : "var(--vixel-light-gray)",
                  color: category === "All" ? "var(--vixel-white)" : "var(--vixel-blue)"
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <div className="project-card cursor-pointer group h-full">
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold mb-2" style={{ color: "var(--vixel-yellow)" }}>
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--vixel-blue)" }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="flex items-center gap-2" style={{ color: "var(--vixel-blue)" }}>
                      <span className="font-semibold">View Case Study</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Behance Link */}
      <section className="py-16" style={{ backgroundColor: "var(--vixel-light-gray)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--vixel-blue)" }}>
            Want to see more?
          </h2>
          <p className="text-gray-600 mb-8">
            Explore our complete portfolio on Behance
          </p>
          <a 
            href="https://behance.net" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Visit Behance <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white" style={{ backgroundColor: "var(--vixel-blue)" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life.
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

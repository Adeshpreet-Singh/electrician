"use client";

import { useState, useEffect } from "react";

const services = [
  { name: "Electrical Repair", icon: "🔧", desc: "Fast electrical fixes" },
  { name: "Installation", icon: "💡", desc: "New wiring & fixtures" },
  { name: "Panel Upgrade", icon: "⚡", desc: "Electrical panel updates" },
  { name: "Emergency", icon: "🚨", desc: "24/7 urgent electrical" },
];

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Service request sent! We'll contact you within 1 hour.");
  };

  return (
    <div className="min-h-screen bg-[#1a1a0a] overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a0a]/95 backdrop-blur-xl border-b border-yellow-600/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">⚡</span>
            </div>
            <span className="text-xl font-bold text-white tracking-wider">SPARKPRO</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Services", "About", "Reviews", "Contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="bg-yellow-500 text-black px-6 py-2.5 rounded-lg font-semibold hover:bg-yellow-400 transition-all"
          >
            Get Quote
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a0a] via-[#111] to-black" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 1px 1px, #eab308 1px, transparent 0)', 
            backgroundSize: '50px 50px' 
          }} />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl"
            style={{ 
              top: '15%', 
              left: '20%',
              transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)` 
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600/10 border border-yellow-500/30 rounded-full mb-8">
              <span className="text-yellow-400">✓</span>
              <span className="text-yellow-300 text-sm">Licensed & Insured</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Power<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">Your Home</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
              Professional electrical services for all your needs. 
              Fast, reliable, and guaranteed work by certified electricians.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection("contact")} 
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all hover:scale-105 shadow-xl shadow-yellow-500/30"
              >
                Get Free Quote
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500/10 transition-all"
              >
                Our Services
              </button>
            </div>

            <div className="flex gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">15+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Emergency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Licensed</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/20">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" 
                alt="Electrician" 
                className="w-full h-[450px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <div className="font-bold text-gray-800">24/7 Service</div>
                  <div className="text-sm text-gray-500">Emergency repairs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4 block">What We Do</span>
            <h2 className="text-5xl font-bold text-white">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-yellow-500/50 transition-all cursor-pointer"
              >
                <span className="text-5xl mb-6 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{service.name}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 bg-gradient-to-r from-yellow-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-yellow-200 text-sm tracking-[0.3em] uppercase mb-4 block">About Us</span>
            <h2 className="text-5xl font-bold mb-8">Expert Electricians</h2>
            <p className="text-yellow-100 text-lg leading-relaxed mb-8">
              For over 15 years, SparkPro has been powering homes with expertise and reliability. 
              Our certified electricians deliver quality work you can trust.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-yellow-200 text-sm">Emergency</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-yellow-200 text-sm">Licensed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" 
              alt="Team" 
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4 block">Testimonials</span>
            <h2 className="text-5xl font-bold text-white">Happy Customers</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", text: "Fixed electrical issue fast! Professional service.", rating: 5 },
              { name: "John D.", text: "Installed new panel perfectly. Great work!", rating: 5 },
              { name: "Lisa T.", text: "Best electrician service. Highly recommend!", rating: 5 },
            ].map((review, index) => (
              <div key={index} className="bg-[#111] rounded-2xl p-8 border border-gray-800">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-400 italic mb-6">"{review.text}"</p>
                <p className="font-bold text-white">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-gradient-to-br from-yellow-600/10 to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4 block">Get Started</span>
            <h2 className="text-5xl font-bold text-white">Request Service</h2>
          </div>

          <div className="bg-[#111] rounded-2xl p-10 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white focus:border-yellow-500 transition-colors"
                  placeholder="Your name"
                  required
                />
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white focus:border-yellow-500 transition-colors"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-6 py-4 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white focus:border-yellow-500 transition-colors"
                  placeholder="Phone"
                />
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-6 py-4 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white focus:border-yellow-500 transition-colors"
                >
                  <option value="">Service type</option>
                  {services.map((s, i) => (
                    <option key={i} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 rounded-lg bg-[#0a0a0a] border border-gray-700 text-white focus:border-yellow-500 transition-colors resize-none"
                placeholder="Describe the issue..."
              />
              <button 
                type="submit" 
                className="w-full bg-yellow-500 text-black py-5 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all"
              >
                Get Quote
              </button>
            </form>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <span className="text-3xl mb-3 block">📍</span>
              <p className="text-gray-400">123 Electric Street<br />Power District, CA 90210</p>
            </div>
            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <span className="text-3xl mb-3 block">📞</span>
              <p className="text-gray-400">+1 (800) 555-0199</p>
            </div>
            <div className="bg-[#111] rounded-2xl p-6 border border-gray-800">
              <span className="text-3xl mb-3 block">🕐</span>
              <p className="text-gray-400">24/7 Emergency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white">⚡</span>
              </div>
              <span className="text-xl font-bold text-white tracking-wider">SPARKPRO ELECTRICAL</span>
            </div>
            <div className="flex gap-6">
              {["Instagram", "Facebook", "Google"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-gray-500 hover:text-yellow-400 transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-600 text-sm">© 2026 SparkPro Electrical. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) { element.scrollIntoView({ behavior: 'smooth' }); element.focus(); }
    setMenuOpen(false);
  };

  const services = [
    { title: 'Residential Electrical', desc: 'Wiring, outlets, switches, lighting installation, and whole-home electrical solutions.', price: 'From $89', icon: '🏠' },
    { title: 'Commercial Services', desc: 'Office buildouts, retail lighting, industrial wiring, and code compliance upgrades.', price: 'Custom Quote', icon: '🏢' },
    { title: 'EV Charging Stations', desc: 'Level 2 home charger installation, commercial charging networks, and Tesla wall connectors.', price: 'From $799', icon: '⚡' },
    { title: 'Panel Upgrades', desc: 'Electrical panel replacement, capacity upgrades, and fuse box to breaker conversions.', price: 'From $1,499', icon: '🔌' },
    { title: 'Generator Installation', desc: 'Whole-home backup generators, transfer switches, and automatic standby systems.', price: 'From $3,999', icon: '🔋' },
    { title: 'Emergency Repairs', desc: '24/7 emergency electrical service for power outages, sparking outlets, and safety hazards.', price: 'Call Now', icon: '🚨' },
  ];

  const testimonials = [
    { name: 'Catherine Moore', role: 'Homeowner', text: 'VoltPro upgraded our 1960s electrical panel and installed a whole-home generator. The work was meticulous, clean, and passed inspection on the first try. True professionals.', rating: 5 },
    { name: 'Daniel Kim', role: 'Tesla Owner', text: 'They installed my Tesla wall connector in under 3 hours. Clean routing, proper permits, and they even helped me set up the app scheduling. Couldn&apos;t be happier.', rating: 5 },
    { name: 'Rachel Stevens', role: 'Restaurant Owner', text: 'When our kitchen hood wiring failed during dinner service, VoltPro had someone there in 45 minutes. They diagnosed and fixed the issue without us losing a single order.', rating: 5 },
  ];

  return (
    <div className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neon text-dark px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold">Skip to main content</a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 glass">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neon/20 rounded-xl flex items-center justify-center text-neon text-xl neon-glow" aria-hidden="true">⚡</div>
              <div><h1 className="text-lg font-bold text-white">VoltPro</h1><p className="text-[9px] text-neon tracking-widest">ELECTRIC</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['Services','About','Reviews','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="text-sm text-slate-text hover:text-neon transition-colors focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 rounded">{item}</button>))}
              <button aria-label="Get a free electrical estimate" className="bg-neon text-dark px-6 py-2.5 rounded-full text-sm font-bold hover:bg-neon-dim transition-colors focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">Free Estimate</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-neon focus-visible:outline-2 focus-visible:outline-neon rounded" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}</svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden glass border-t border-dark-border px-6 py-4 space-y-4">
              {['Services','About','Reviews','Contact'].map(item => (<button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="block w-full text-left text-slate-text hover:text-neon py-2">{item}</button>))}
              <button className="w-full bg-neon text-dark px-6 py-3 rounded-full font-bold">Free Estimate</button>
            </div>
          )}
        </nav>
      </header>

      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Electrician",
            "url": "https://electrician.com",
            "description": "Professional electrician services.",
          })}}
        />

        <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden grid-bg">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-20 right-20 w-96 h-96 bg-neon/10 rounded-full blur-[120px]"/>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon/5 rounded-full blur-[100px]"/>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-neon text-sm font-bold tracking-widest mb-4 animate-fade-in-up">LICENSED MASTER ELECTRICIANS</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up stagger-1">Power Your Life<br/><span className="text-neon neon-text">With Confidence.</span></h2>
              <p className="text-xl text-slate-text mb-8 max-w-lg animate-fade-in-up stagger-2">From simple outlet repairs to complete commercial buildouts, our master electricians deliver safe, code-compliant solutions every time.</p>
              <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up stagger-3">
                <button aria-label="Get your free electrical estimate" className="bg-neon text-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-neon-dim transition-all hover:scale-105 neon-glow focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">Free Estimate</button>
                <button aria-label="Call for emergency electrical service" className="border-2 border-neon/50 text-neon px-8 py-4 rounded-full text-lg font-bold hover:bg-neon/10 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">Emergency: 24/7</button>
              </div>
              <div className="flex items-center gap-8">
                {[{num:'18K+',label:'Jobs Completed'},{num:'100%',label:'Code Compliant'},{num:'24/7',label:'Emergency'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-neon">{s.num}</div><div className="text-sm text-slate-text">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-3xl p-8 neon-glow">
                <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80" alt="Licensed electrician working on electrical panel" className="w-full rounded-2xl opacity-90"/>
              </div>
            </div>
          </div>
        </section>

        <section id="services" aria-labelledby="services-heading" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-neon text-sm font-bold tracking-widest mb-4">WHAT WE DO</p>
              <h2 id="services-heading" className="text-4xl font-bold text-white mb-4">Electrical Services</h2>
              <p className="text-slate-text max-w-2xl mx-auto">Comprehensive electrical solutions for homes and businesses. Licensed, insured, and guaranteed.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s,i) => (
                <article key={i} className="glass rounded-2xl p-6 hover:border-neon/30 transition-all hover:scale-105 group">
                  <div className="text-4xl mb-4" aria-hidden="true">{s.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon transition-colors">{s.title}</h3>
                  <p className="text-slate-text text-sm mb-3">{s.desc}</p>
                  <div className="text-neon font-bold text-sm">{s.price}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="py-24 relative">
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px]"/>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="glass rounded-3xl p-8">
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80" alt="VoltPro Electric certified team" className="w-full rounded-2xl opacity-90"/>
            </div>
            <div>
              <p className="text-neon text-sm font-bold tracking-widest mb-4">WHY VOLTPRO</p>
              <h2 id="about-heading" className="text-4xl font-bold text-white mb-6">18,000+ Jobs Done Right</h2>
              <p className="text-slate-text mb-8">VoltPro Electric has been powering homes and businesses since 2007. Our team of licensed master electricians brings decades of combined experience to every project.</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '✓', text: 'Master Electricians' },
                  { icon: '✓', text: 'Licensed & Insured' },
                  { icon: '✓', text: 'Code Compliant' },
                  { icon: '✓', text: 'Free Estimates' },
                  { icon: '✓', text: 'Lifetime Warranty' },
                  { icon: '✓', text: 'EV Certified' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-neon" aria-hidden="true">{item.icon}</span>
                    <span className="text-sm text-white-soft">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" aria-labelledby="reviews-heading" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-neon text-sm font-bold tracking-widest mb-4">TESTIMONIALS</p>
              <h2 id="reviews-heading" className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <article key={i} className="glass rounded-2xl p-6">
                  <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j} className="text-amber" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="text-white-soft mb-6 italic">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-slate-text">{t.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-neon text-sm font-bold tracking-widest mb-4">GET STARTED</p>
              <h2 id="contact-heading" className="text-4xl font-bold text-white mb-6">Request Your Free Estimate</h2>
              <p className="text-slate-text mb-8">Tell us about your electrical needs and we&apos;ll provide a detailed estimate. No obligations, no surprises.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon" aria-hidden="true">📞</div>
                  <div><p className="text-sm text-slate-text">Call Us</p><p className="text-white font-bold">(555) 567-VOLT</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon" aria-hidden="true">📍</div>
                  <div><p className="text-sm text-slate-text">Visit Us</p><p className="text-white font-bold">1234 Electric Ave</p></div>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-8">
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }} noValidate className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white-soft mb-2">Your Name</label>
                  <input id="name" type="text" aria-required="true" placeholder="John Smith" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors"/>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white-soft mb-2">Phone</label>
                  <input id="phone" type="tel" aria-required="true" placeholder="<a href="tel:(555) 000-0000" className="hover:underline">(555) 000-0000</a>" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors"/>
                </div>
                <div>
                  <label htmlFor="service-type" className="block text-sm font-medium text-white-soft mb-2">Service Needed</label>
                  <select id="service-type" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors">
                    <option value="">Select service</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="ev-charging">EV Charging</option>
                    <option value="panel-upgrade">Panel Upgrade</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-white-soft mb-2">Describe Your Needs</label>
                  <textarea id="details" rows={3} placeholder="Tell us about your electrical project..." className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors resize-none"/>
                </div>
                <button type="submit" aria-label="Request your free electrical estimate" className="w-full bg-neon text-dark py-4 rounded-xl font-bold hover:bg-neon-dim transition-all hover:scale-[1.02] neon-glow focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2">Get Free Estimate</button>
              {submitted && <p className="text-center text-green-500 text-sm mt-2 animate-pulse">Sent! We will be in touch soon.</p>}
              </form>
            </div>
          </div>
        </section>
      
        {/* FAQ Section */}
        <section className="py-24" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-current/60">Everything you need to know.</p>
            </div>
            <div className="space-y-4">
              {{[
          {question: 'How do I schedule an appointment?', answer: 'Call us, text us, or fill out the contact form. We typically respond within 1 hour during business hours.'},
          {question: 'Are you licensed and insured?', answer: 'Yes. We are fully licensed, bonded, and carry comprehensive liability insurance.'},
          {question: 'Do you offer free estimates?', answer: 'Yes. We provide free, no-obligation estimates for all services. Call or fill out our form to get started.'},
          {question: 'What areas do you serve?', answer: 'We serve the entire metro area. Contact us to confirm service availability in your specific location.'}
              ].map((faq, i) => (
                <details key={i} className="group border border-current/10 rounded-xl p-5 [&_summary]:cursor-pointer">
                  <summary className="font-medium flex justify-between items-center list-none">
                    {faq.question}
                    <span className="ml-4 text-current/40 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-current/60 text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}}
            </div>
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="py-12 border-t border-dark-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-neon/20 rounded-lg flex items-center justify-center text-neon" aria-hidden="true">⚡</div>
              <span className="text-white font-bold">VoltPro Electric</span>
            </div>
            <p className="text-slate-text text-sm">Licensed Master Electricians | NEC Compliant | ESA Member</p>
          </div>
          <div className="mt-8 pt-8 border-t border-dark-border text-center">
            <p className="text-slate-text/60 text-xs">© 2024 VoltPro Electric. All rights reserved. License #EL-2007-8921</p>
          </div>
        
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>
          </div>
      </footer>
    </div>
  );
}
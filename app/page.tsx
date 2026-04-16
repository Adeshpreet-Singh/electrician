'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className="min-h-screen px-4 md:px-8">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-neon text-dark px-4 py-2 rounded-lg z-[100] focus-visible:outline-2 focus-visible:outline-white font-bold px-4 md:px-8">Skip to main content</a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 glass px-4 md:px-8">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center px-4 md:px-8">
            <div className="flex items-center gap-3 px-4 md:px-8">
              <div className="w-10 h-10 bg-neon/20 rounded-xl flex items-center justify-center text-neon text-xl neon-glow px-4 md:px-8" aria-hidden="true">⚡</div>
              <div><h1 className="text-lg font-bold text-white px-4 md:px-8" style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1.5rem", lineHeight: "1.2" }}>VoltPro</h1><p className="text-[9px] text-neon tracking-widest px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>ELECTRIC</p></div>
            </div>
            <div className="hidden md:flex items-center gap-8 px-4 md:px-8">
              {['Services','About','Reviews','Contact'].map(item => (<button key={item} onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="text-sm text-slate-text hover:text-neon transition-colors focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 rounded px-4 md:px-8">{item}</button>))}
              <button aria-label="Get a free electrical estimate" className="bg-neon text-dark px-6 py-2.5 rounded-full text-sm font-bold hover:bg-neon-dim transition-colors focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 px-4 md:px-8" style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}>Free Estimate</button>
            </div>
            <button aria-label={menuOpen?"Close menu":"Open menu"} aria-expanded={menuOpen} className="md:hidden text-neon focus-visible:outline-2 focus-visible:outline-neon rounded px-4 md:px-8" onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6 px-4 md:px-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">{menuOpen?<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/ style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>:<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/ style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>}</svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden glass border-t border-dark-border px-6 py-4 space-y-4 px-4 md:px-8">
              {['Services','About','Reviews','Contact'].map(item => (<button key={item} onClick={() = style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}> scrollToSection(item.toLowerCase())} className="block w-full text-left text-slate-text hover:text-neon py-2 px-4 md:px-8">{item}</button>))}
              <button className="w-full bg-neon text-dark px-6 py-3 rounded-full font-bold px-4 md:px-8" style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}>Free Estimate</button>
            </div>
          )}
        </nav>
      </header>

      <main id="main-content" role="main">
        <section aria-labelledby="hero-heading" className="pt-24 pb-16 relative overflow-hidden grid-bg px-4 md:px-8" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="absolute inset-0 px-4 md:px-8" aria-hidden="true">
            <div className="absolute top-20 right-20 w-96 h-96 bg-neon/10 rounded-full blur-[120px] px-4 md:px-8"/>
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon/5 rounded-full blur-[100px] px-4 md:px-8"/>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center px-4 md:px-8">
            <div>
              <p className="text-neon text-sm font-bold tracking-widest mb-4 animate-fade-in-up px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>LICENSED MASTER ELECTRICIANS</p>
              <h2 id="hero-heading" className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up stagger-1 px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>Power Your Life<br/><span className="text-neon neon-text px-4 md:px-8">With Confidence.</span></h2>
              <p className="text-xl text-slate-text mb-8 max-w-lg animate-fade-in-up stagger-2 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>From simple outlet repairs to complete commercial buildouts, our master electricians deliver safe, code-compliant solutions every time.</p>
              <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up stagger-3 px-4 md:px-8">
                <button aria-label="Get your free electrical estimate" className="bg-neon text-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-neon-dim transition-all hover:scale-105 neon-glow focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 px-4 md:px-8" style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}>Free Estimate</button>
                <button aria-label="Call for emergency electrical service" className="border-2 border-neon/50 text-neon px-8 py-4 rounded-full text-lg font-bold hover:bg-neon/10 transition-all hover:scale-105 focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 px-4 md:px-8" style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}>Emergency: 24/7</button>
              </div>
              <div className="flex items-center gap-8 px-4 md:px-8">
                {[{num:'18K+',label:'Jobs Completed'},{num:'100%',label:'Code Compliant'},{num:'24/7',label:'Emergency'}].map((s,i) => (<div key={i}><div className="text-2xl font-bold text-neon px-4 md:px-8">{s.num}</div><div className="text-sm text-slate-text px-4 md:px-8">{s.label}</div></div>))}
              </div>
            </div>
            <div className="relative px-4 md:px-8">
              <div className="glass rounded-3xl p-8 neon-glow px-4 md:px-8">
                <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80" alt="Licensed electrician working on electrical panel" className="w-full rounded-2xl opacity-90 px-4 md:px-8"/>
              </div>
            </div>
          </div>
        </section>

        <section id="services" aria-labelledby="services-heading" className="py-24 relative px-4 md:px-8" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-7xl mx-auto px-6 px-4 md:px-8">
            <div className="text-center mb-16 px-4 md:px-8">
              <p className="text-neon text-sm font-bold tracking-widest mb-4 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>WHAT WE DO</p>
              <h2 id="services-heading" className="text-4xl font-bold text-white mb-4 px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>Electrical Services</h2>
              <p className="text-slate-text max-w-2xl mx-auto px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Comprehensive electrical solutions for homes and businesses. Licensed, insured, and guaranteed.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
              {services.map((s,i) => (
                <article key={i} className="glass rounded-2xl p-6 hover:border-neon/30 transition-all hover:scale-105 group px-4 md:px-8">
                  <div className="text-4xl mb-4 px-4 md:px-8" aria-hidden="true">{s.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon transition-colors px-4 md:px-8" style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", lineHeight: "1.4" }}>{s.title}</h3>
                  <p className="text-slate-text text-sm mb-3 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>{s.desc}</p>
                  <div className="text-neon font-bold text-sm px-4 md:px-8">{s.price}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" aria-labelledby="about-heading" className="py-24 relative px-4 md:px-8" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="absolute inset-0 px-4 md:px-8" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon/5 rounded-full blur-[150px] px-4 md:px-8"/>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center px-4 md:px-8">
            <div className="glass rounded-3xl p-8 px-4 md:px-8">
              <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80" alt="VoltPro Electric certified team" className="w-full rounded-2xl opacity-90 px-4 md:px-8"/>
            </div>
            <div>
              <p className="text-neon text-sm font-bold tracking-widest mb-4 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>WHY VOLTPRO</p>
              <h2 id="about-heading" className="text-4xl font-bold text-white mb-6 px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>18,000+ Jobs Done Right</h2>
              <p className="text-slate-text mb-8 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>VoltPro Electric has been powering homes and businesses since 2007. Our team of licensed master electricians brings decades of combined experience to every project.</p>
              <div className="grid grid-cols-2 gap-4 px-4 md:px-8">
                {[
                  { icon: '✓', text: 'Master Electricians' },
                  { icon: '✓', text: 'Licensed & Insured' },
                  { icon: '✓', text: 'Code Compliant' },
                  { icon: '✓', text: 'Free Estimates' },
                  { icon: '✓', text: 'Lifetime Warranty' },
                  { icon: '✓', text: 'EV Certified' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 md:px-8">
                    <span className="text-neon px-4 md:px-8" aria-hidden="true">{item.icon}</span>
                    <span className="text-sm text-white-soft px-4 md:px-8">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" aria-labelledby="reviews-heading" className="py-24 relative px-4 md:px-8" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-7xl mx-auto px-6 px-4 md:px-8">
            <div className="text-center mb-16 px-4 md:px-8">
              <p className="text-neon text-sm font-bold tracking-widest mb-4 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>TESTIMONIALS</p>
              <h2 id="reviews-heading" className="text-4xl font-bold text-white mb-4 px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>What Our Clients Say</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 px-4 md:px-8">
              {testimonials.map((t, i) => (
                <article key={i} className="glass rounded-2xl p-6 px-4 md:px-8">
                  <div className="flex gap-1 mb-4 px-4 md:px-8" aria-label={`${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, j) => (
                      <span key={j} className="text-amber px-4 md:px-8" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <p className="text-white-soft mb-6 italic px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <p className="font-bold text-white px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>{t.name}</p>
                    <p className="text-sm text-slate-text px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>{t.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="py-24 relative px-4 md:px-8" style={{ padding: "5rem 1rem", marginBottom: "2rem" }}>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 px-4 md:px-8">
            <div>
              <p className="text-neon text-sm font-bold tracking-widest mb-4 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>GET STARTED</p>
              <h2 id="contact-heading" className="text-4xl font-bold text-white mb-6 px-4 md:px-8" style={{ fontSize: "2.25rem", fontWeight: "bold", marginBottom: "1.25rem", lineHeight: "1.3" }}>Request Your Free Estimate</h2>
              <p className="text-slate-text mb-8 px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Tell us about your electrical needs and we&apos;ll provide a detailed estimate. No obligations, no surprises.</p>
              <div className="space-y-4 px-4 md:px-8">
                <div className="flex items-center gap-4 px-4 md:px-8">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon px-4 md:px-8" aria-hidden="true">📞</div>
                  <div><p className="text-sm text-slate-text px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Call Us</p><p className="text-white font-bold px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>(555) 567-VOLT</p></div>
                </div>
                <div className="flex items-center gap-4 px-4 md:px-8">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center text-neon px-4 md:px-8" aria-hidden="true">📍</div>
                  <div><p className="text-sm text-slate-text px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Visit Us</p><p className="text-white font-bold px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>1234 Electric Ave</p></div>
                </div>
              </div>
            </div>
            <div className="glass rounded-2xl p-8 px-4 md:px-8">
              <form noValidate className="space-y-6 px-4 md:px-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white-soft mb-2 px-4 md:px-8">Your Name</label>
                  <input id="name" type="text" aria-required="true" placeholder="John Smith" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors px-4 md:px-8"/>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white-soft mb-2 px-4 md:px-8">Phone</label>
                  <input id="phone" type="tel" aria-required="true" placeholder="(555) 000-0000" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors px-4 md:px-8"/>
                </div>
                <div>
                  <label htmlFor="service-type" className="block text-sm font-medium text-white-soft mb-2 px-4 md:px-8">Service Needed</label>
                  <select id="service-type" className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors px-4 md:px-8">
                    <option value="">Select service</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="ev-charging">EV Charging</option>
                    <option value="panel-upgrade">Panel Upgrade</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-white-soft mb-2 px-4 md:px-8">Describe Your Needs</label>
                  <textarea id="details" rows={3} placeholder="Tell us about your electrical project..." className="w-full bg-dark-card border border-dark-border rounded-xl px-4 py-3 text-white placeholder-slate-text/50 focus:border-neon focus:ring-1 focus:ring-neon focus:outline-none transition-colors resize-none px-4 md:px-8"/>
                </div>
                <button type="submit" aria-label="Request your free electrical estimate" className="w-full bg-neon text-dark py-4 rounded-xl font-bold hover:bg-neon-dim transition-all hover:scale-[1.02] neon-glow focus-visible:outline-2 focus-visible:outline-neon focus-visible:outline-offset-2 px-4 md:px-8" style={{ padding: "1rem 2rem", fontSize: "1.125rem", fontWeight: "600", borderRadius: "0.5rem", background: "var(--primary)", color: "white", border: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}>Get Free Estimate</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer role="contentinfo" className="py-12 border-t border-dark-border px-4 md:px-8">
        <div className="max-w-7xl mx-auto px-6 px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-8">
            <div className="flex items-center gap-3 px-4 md:px-8">
              <div className="w-8 h-8 bg-neon/20 rounded-lg flex items-center justify-center text-neon px-4 md:px-8" aria-hidden="true">⚡</div>
              <span className="text-white font-bold px-4 md:px-8">VoltPro Electric</span>
            </div>
            <p className="text-slate-text text-sm px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Licensed Master Electricians | NEC Compliant | ESA Member</p>
          </div>
          <div className="mt-8 pt-8 border-t border-dark-border text-center px-4 md:px-8">
            <p className="text-slate-text/60 text-xs px-4 md:px-8" style={{ fontSize: "1.125rem", lineHeight: "1.7", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>© 2024 VoltPro Electric. All rights reserved. License #EL-2007-8921</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
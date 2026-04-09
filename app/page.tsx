'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-yellow-950 text-yellow-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-400 text-black px-4 py-2 rounded z-[100] font-bold">
        Skip to main content
      </a>

      <header>
        <nav role="navigation" aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 bg-yellow-950/95 backdrop-blur-md border-b border-current/10">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl tracking-tight font-bold">VoltPro Electric</h1>
              <p className="text-xs text-yellow-300 tracking-wider uppercase">Est. 2010</p>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollTo('services')} className="text-sm text-yellow-300 hover:text-yellow-400 transition-colors">Services</button>
              <button onClick={() => scrollTo('team')} className="text-sm text-yellow-300 hover:text-yellow-400 transition-colors">Team</button>
              <button onClick={() => scrollTo('faq')} className="text-sm text-yellow-300 hover:text-yellow-400 transition-colors">FAQ</button>
              <button onClick={() => scrollTo('contact')} className="text-sm text-yellow-300 hover:text-yellow-400 transition-colors">Contact</button>
              <button onClick={() => scrollTo('contact')} className="bg-yellow-400 text-black px-6 py-2.5 text-sm font-medium rounded-full hover:opacity-90 transition-opacity">
                Schedule Service
              </button>
            </div>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden bg-yellow-950 border-t border-current/10 px-6 py-4 space-y-1">
              <button onClick={() => scrollTo('services')} className="block w-full text-left px-4 py-3 text-yellow-300 hover:text-yellow-400">Services</button>
              <button onClick={() => scrollTo('team')} className="block w-full text-left px-4 py-3 text-yellow-300 hover:text-yellow-400">Team</button>
              <button onClick={() => scrollTo('faq')} className="block w-full text-left px-4 py-3 text-yellow-300 hover:text-yellow-400">FAQ</button>
              <button onClick={() => scrollTo('contact')} className="block w-full text-left px-4 py-3 text-yellow-300 hover:text-yellow-400">Contact</button>
            </div>
          )}
        </nav>
      </header>

      <main id="main" role="main">
        <section className="pt-28 pb-20 md:pb-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-yellow-400 text-sm tracking-widest uppercase mb-6">Est. 2010</p>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-8 whitespace-pre-line">
                Powering
your world.
              </h2>
              <p className="text-xl text-yellow-300 max-w-xl leading-relaxed mb-10">
                Licensed electricians for residential and commercial. 24/7 emergency service available.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo('contact')} className="bg-yellow-400 text-black px-8 py-4 text-lg font-medium rounded-full hover:opacity-90 transition-opacity">
                  Schedule Service
                </button>
                <button onClick={() => scrollTo('services')} className="border-2 border-current/20 px-8 py-4 text-lg font-medium rounded-full hover:bg-current/5 transition-colors">
                  Emergency Call
                </button>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-yellow-400">Licensed</div><div className="text-sm text-yellow-300 mt-1">& insured</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-yellow-400">24/7</div><div className="text-sm text-yellow-300 mt-1">Emergency</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-yellow-400">15K+</div><div className="text-sm text-yellow-300 mt-1">Jobs done</div></div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-yellow-400 text-sm tracking-widest uppercase mb-3">What We Offer</p>
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold">Our Services</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-yellow-900 border border-yellow-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-50">Residential</h3>
              <p className="text-yellow-300 leading-relaxed">Wiring, panels, outlets.</p></article>
            <article className="bg-yellow-900 border border-yellow-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-50">Commercial</h3>
              <p className="text-yellow-300 leading-relaxed">Office and retail electrical.</p></article>
            <article className="bg-yellow-900 border border-yellow-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-50">EV Chargers</h3>
              <p className="text-yellow-300 leading-relaxed">Home and commercial charging.</p></article>
            <article className="bg-yellow-900 border border-yellow-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-50">Generator</h3>
              <p className="text-yellow-300 leading-relaxed">Installation and maintenance.</p></article>
            <article className="bg-yellow-900 border border-yellow-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-50">Lighting</h3>
              <p className="text-yellow-300 leading-relaxed">LED upgrades and design.</p></article>
            <article className="bg-yellow-900 border border-yellow-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3 text-yellow-50">Inspections</h3>
              <p className="text-yellow-300 leading-relaxed">Safety and code compliance.</p></article>
            </div>
          </div>
        </section>

        <section id="team" className="py-24 bg-yellow-900" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-yellow-400 text-sm tracking-widest uppercase mb-3">Our Team</p>
              <h2 id="team-heading" className="text-4xl md:text-5xl font-bold">Meet the experts</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-yellow-900 border border-yellow-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center text-2xl font-bold text-yellow-400">TH</div>
              <h3 className="font-bold text-yellow-50">Tom Henderson</h3><p className="text-sm text-yellow-400">Master Electrician</p><p className="text-sm text-yellow-300 mt-1">30yr licensed</p></div>
            <div className="bg-yellow-900 border border-yellow-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center text-2xl font-bold text-yellow-400">CM</div>
              <h3 className="font-bold text-yellow-50">Carlos Mendez</h3><p className="text-sm text-yellow-400">Journeyman</p><p className="text-sm text-yellow-300 mt-1">Commercial specialist</p></div>
            <div className="bg-yellow-900 border border-yellow-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center text-2xl font-bold text-yellow-400">SW</div>
              <h3 className="font-bold text-yellow-50">Sarah Walsh</h3><p className="text-sm text-yellow-400">Residential Lead</p><p className="text-sm text-yellow-300 mt-1">Panel expert</p></div>
            <div className="bg-yellow-900 border border-yellow-800 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center text-2xl font-bold text-yellow-400">JK</div>
              <h3 className="font-bold text-yellow-50">James Kim</h3><p className="text-sm text-yellow-400">EV Specialist</p><p className="text-sm text-yellow-300 mt-1">ChargePoint certified</p></div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-yellow-400 text-sm tracking-widest uppercase mb-3">Questions</p>
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold">FAQ</h2>
            </div>
            <div className="space-y-4">
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none text-yellow-50">Emergency?<span className="ml-4 text-yellow-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-yellow-300 text-sm leading-relaxed">24/7 service, 60min response.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none text-yellow-50">Free estimate?<span className="ml-4 text-yellow-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-yellow-300 text-sm leading-relaxed">Yes, all estimates free.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none text-yellow-50">Licensed?<span className="ml-4 text-yellow-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-yellow-300 text-sm leading-relaxed">Master electrician, fully insured.</p></details>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-yellow-900" aria-labelledby="contact-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-yellow-400 text-sm tracking-widest uppercase mb-3">Get In Touch</p>
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6">Schedule Service</h2>
                <div className="space-y-6 text-yellow-300">
                  <div><div className="font-bold text-yellow-50">Phone</div><a href="tel:(555) 567-8902" className="hover:text-yellow-400">(555) 567-8902</a></div>
                  <div><div className="font-bold text-yellow-50">Address</div><p>Serving Metro Atlanta, GA</p></div>
                  <div><div className="font-bold text-yellow-50">Hours</div><p>24/7 Emergency Available</p></div>
                </div>
              </div>
              <div>
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => setSubmitted(false), 3000); }} aria-label="Contact form">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input id="name" type="text" placeholder="John Smith" required className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-current/20" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input id="email" type="email" placeholder="john@example.com" required className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-current/20" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea id="message" rows={4} placeholder="How can we help?" required className="w-full border border-current/20 rounded-xl px-4 py-3 bg-transparent placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-current/20 resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-yellow-400 text-black py-4 rounded-xl font-medium hover:opacity-90 transition-opacity">
                    {submitted ? "Sent! We'll be in touch." : "Schedule Service"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-yellow-900 border-t border-current/10 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="font-bold text-lg">VoltPro Electric</div>
            <p className="text-sm text-yellow-300">Est. 2010</p>
          </div>
          <p className="text-sm text-yellow-300">&copy; 2026 VoltPro Electric. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

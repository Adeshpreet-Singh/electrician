'use client';
import { useState } from 'react';
export default function Home() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  return (
    <div className="min-h-screen bg-yellow-950 text-yellow-50">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-400 text-white px-4 py-2 rounded z-[100] font-bold">Skip</a>
      {/* EMERGENCY BANNER */}
      <div className="bg-yellow-400 text-white py-2 text-center text-sm font-bold uppercase tracking-wider">24/7 Emergency Service Available — Call Now</div>
      <nav className="sticky top-0 z-50 bg-yellow-950/95 backdrop-blur-md border-b border-current/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-2xl font-black uppercase">VoltPro Electric</h1><p className="text-xs text-yellow-300 uppercase tracking-wider">Est. 2010</p></div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollTo('services')} className="text-sm font-bold text-yellow-300 hover:text-yellow-400 uppercase">Services</button>
            <button onClick={() => scrollTo('book')} className="bg-yellow-400 text-white px-6 py-2 font-bold uppercase">Schedule Service</button>
          </div>
        </div>
      </nav>
      <main id="main" role="main">
        {/* HERO with inline booking form */}
        <section className="pt-4">
          <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-6 whitespace-pre-line">Powering
your world.</h2>
              <p className="text-xl text-yellow-300 mb-8">Licensed electricians for residential and commercial. 24/7 emergency service available.</p>
              <div className="grid grid-cols-3 gap-4 text-center">
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-yellow-400">Licensed</div><div className="text-sm text-yellow-300 mt-1">& insured</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-yellow-400">24/7</div><div className="text-sm text-yellow-300 mt-1">Emergency</div></div>
            <div className="text-center"><div className="text-3xl md:text-4xl font-bold text-yellow-400">15K+</div><div className="text-sm text-yellow-300 mt-1">Jobs done</div></div>
              </div>
            </div>
            <div>
              <form id="book" className="bg-yellow-900 rounded-xl p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-2xl font-bold mb-4">Schedule Service</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="block text-sm font-bold mb-1">Name</label><input type="text" placeholder="Your name" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent" /></div>
                  <div><label className="block text-sm font-bold mb-1">Phone</label><input type="tel" placeholder="(555) 000-0000" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent" /></div>
                </div>
                <div><label className="block text-sm font-bold mb-1">Service</label>
                  <select className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent">
                    <option>Select service</option>                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>EV Chargers</option>
                    <option>Generator</option>
                    <option>Lighting</option>
                    <option>Inspections</option>
                  </select>
                </div>
                <div><label className="block text-sm font-bold mb-1">Describe the issue</label><textarea rows={3} placeholder="What's going on?" className="w-full border border-current/20 rounded-lg px-4 py-3 bg-transparent resize-none" /></div>
                <button type="submit" className="w-full bg-yellow-400 text-white py-4 rounded-lg font-black uppercase text-lg">Schedule Service</button>
              </form>
            </div>
          </div>
        </section>
        {/* SERVICES with pricing */}
        <section id="services" className="py-24 bg-yellow-900" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-black uppercase">Services & Pricing</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-yellow-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🏠</div>
              <div><h3 className="font-bold text-lg">Residential</h3><p className="text-sm text-yellow-300">Wiring, panels, outlets.</p></div>
            </div>
            <div className="bg-yellow-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🏢</div>
              <div><h3 className="font-bold text-lg">Commercial</h3><p className="text-sm text-yellow-300">Office and retail electrical.</p></div>
            </div>
            <div className="bg-yellow-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">⚡</div>
              <div><h3 className="font-bold text-lg">EV Chargers</h3><p className="text-sm text-yellow-300">Home and commercial charging.</p></div>
            </div>
            <div className="bg-yellow-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🔌</div>
              <div><h3 className="font-bold text-lg">Generator</h3><p className="text-sm text-yellow-300">Installation and maintenance.</p></div>
            </div>
            <div className="bg-yellow-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">💡</div>
              <div><h3 className="font-bold text-lg">Lighting</h3><p className="text-sm text-yellow-300">LED upgrades and design.</p></div>
            </div>
            <div className="bg-yellow-900 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
              <div className="text-3xl">🔍</div>
              <div><h3 className="font-bold text-lg">Inspections</h3><p className="text-sm text-yellow-300">Safety and code compliance.</p></div>
            </div>
            </div>
          </div>
        </section>
        {/* TEAM */}
        <section className="py-24" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="team-heading" className="text-4xl font-black uppercase">Our Crew</h2></div>
            <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-yellow-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center text-2xl font-bold text-yellow-400">TH</div>
              <h3 className="font-bold">Tom Henderson</h3><p className="text-sm text-yellow-400">Master Electrician</p><p className="text-sm text-yellow-300 mt-1">30yr licensed</p></div>
            <div className="bg-yellow-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center text-2xl font-bold text-yellow-400">CM</div>
              <h3 className="font-bold">Carlos Mendez</h3><p className="text-sm text-yellow-400">Journeyman</p><p className="text-sm text-yellow-300 mt-1">Commercial specialist</p></div>
            <div className="bg-yellow-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center text-2xl font-bold text-yellow-400">SW</div>
              <h3 className="font-bold">Sarah Walsh</h3><p className="text-sm text-yellow-400">Residential Lead</p><p className="text-sm text-yellow-300 mt-1">Panel expert</p></div>
            <div className="bg-yellow-900 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center text-2xl font-bold text-yellow-400">JK</div>
              <h3 className="font-bold">James Kim</h3><p className="text-sm text-yellow-400">EV Specialist</p><p className="text-sm text-yellow-300 mt-1">ChargePoint certified</p></div>
            </div>
          </div>
        </section>
        {/* FAQ */}
        <section className="py-24 bg-yellow-900" aria-labelledby="faq-heading">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12"><h2 id="faq-heading" className="text-4xl font-black uppercase">FAQ</h2></div>
            <div className="space-y-4">            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Emergency?<span className="ml-4 text-yellow-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-yellow-300 text-sm leading-relaxed">24/7 service, 60min response.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Free estimate?<span className="ml-4 text-yellow-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-yellow-300 text-sm leading-relaxed">Yes, all estimates free.</p></details>
            <details className="group border border-current/10 rounded-xl p-5 cursor-pointer">
              <summary className="font-medium flex justify-between items-center list-none">Licensed?<span className="ml-4 text-yellow-300 group-open:rotate-45 transition-transform text-xl">+</span></summary>
              <p className="mt-3 text-yellow-300 text-sm leading-relaxed">Master electrician, fully insured.</p></details></div>
          </div>
        </section>
        {/* CONTACT INFO */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">📞</div><div className="font-bold text-lg mb-1">Call Us</div><a href="tel:(555) 567-8902" className="text-yellow-400">(555) 567-8902</a></div>
            <div className="bg-yellow-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">📍</div><div className="font-bold text-lg mb-1">Visit Us</div><p className="text-yellow-300">Serving Metro Atlanta, GA</p></div>
            <div className="bg-yellow-900 rounded-xl p-8 text-center"><div className="text-3xl mb-3">⏰</div><div className="font-bold text-lg mb-1">Hours</div><p className="text-yellow-300">24/7 Emergency Available</p></div>
          </div>
        </section>
      </main>
      <footer className="bg-yellow-900 py-8 text-center text-sm text-yellow-300">&copy; 2026 VoltPro Electric</footer>
    </div>
  );
}

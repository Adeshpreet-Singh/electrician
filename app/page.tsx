'use client';
import { useState } from 'react';

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#0c0a09] text-stone-100">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-500 text-black px-4 py-2 rounded z-[100] font-bold">Skip</a>
      <div className="bg-yellow-500 text-black py-2 text-center text-sm font-bold uppercase tracking-wider">24/7 Emergency Electrician — Call Now</div>
      <nav className="fixed top-8 left-0 right-0 z-50 bg-[#0c0a09]/95 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div><h1 className="text-xl font-black uppercase text-yellow-500">VoltPro</h1><p className="text-[10px] tracking-[0.2em] text-stone-500 uppercase">Licensed Electricians — Atlanta</p></div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-sm text-stone-400 hover:text-yellow-500">Services</button>
            <button onClick={() => scrollTo('contact')} className="bg-yellow-500 text-black px-5 py-2.5 text-sm font-bold rounded-full hover:bg-yellow-400">Schedule Service</button>
          </div>
        </div>
      </nav>

      <main id="main">
        <section className="pt-16">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-yellow-500 text-sm tracking-[0.3em] uppercase mb-4">Licensed & Insured — Est. 2010</p>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-6">Powering<br />your <span className="text-yellow-500">world.</span></h2>
              <p className="text-xl text-stone-400 max-w-md mb-8">Licensed electricians for residential and commercial. 24/7 emergency service with 60-minute response.</p>
              <div className="flex gap-4">
                <button onClick={() => scrollTo('contact')} className="bg-yellow-500 text-black px-8 py-4 text-lg font-bold rounded-full hover:bg-yellow-400">Schedule Service</button>
                <a href="tel:(555) 567-8902" className="border-2 border-stone-600 text-stone-300 px-8 py-4 text-lg rounded-full hover:border-yellow-500 hover:text-yellow-500">Emergency Call</a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-stone-900 border border-stone-800 rounded-xl p-6"><div className="text-3xl font-black text-yellow-500 flash-icon">⚡</div><div className="font-bold mt-2">24/7</div><div className="text-xs text-stone-500 uppercase">Emergency</div></div>
              <div className="bg-stone-900 border border-stone-800 rounded-xl p-6"><div className="text-3xl font-black text-yellow-500">60min</div><div className="font-bold mt-2">Response</div><div className="text-xs text-stone-500 uppercase">Avg Time</div></div>
              <div className="bg-stone-900 border border-stone-800 rounded-xl p-6"><div className="text-3xl font-black text-yellow-500">15K+</div><div className="font-bold mt-2">Jobs Done</div><div className="text-xs text-stone-500 uppercase">Since 2010</div></div>
              <div className="bg-stone-900 border border-stone-800 rounded-xl p-6"><div className="text-3xl font-black text-yellow-500">$0</div><div className="font-bold mt-2">Estimates</div><div className="text-xs text-stone-500 uppercase">Always Free</div></div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-stone-900/30" aria-labelledby="services-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16"><h2 id="services-heading" className="text-4xl font-black uppercase">Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Residential', desc: 'Wiring, panels, outlets, switches, lighting installation.', icon: '🏠', price: 'From $89' },
                { name: 'Commercial', desc: 'Office, retail, and restaurant electrical services.', icon: '🏢', price: 'Custom quote' },
                { name: 'EV Chargers', desc: 'Home and commercial EV charging station installation.', icon: '⚡', price: 'From $599' },
                { name: 'Generators', desc: 'Standby generator installation and maintenance.', icon: '🔌', price: 'From $3,500' },
                { name: 'Lighting', desc: 'LED upgrades, recessed lighting, landscape lighting.', icon: '💡', price: 'From $149' },
                { name: 'Panel Upgrades', desc: 'Electrical panel replacement and service upgrades.', icon: '⚙️', price: 'From $1,500' },
              ].map((s, i) => (
                <div key={i} className="border border-stone-800 rounded-lg p-8 hover:border-yellow-500/40 transition-colors">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-black uppercase mb-2">{s.name}</h3>
                  <p className="text-stone-400 text-sm mb-3">{s.desc}</p>
                  <div className="text-yellow-500 font-bold">{s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-8"><div className="text-3xl mb-3">📞</div><div className="font-bold text-lg">Emergency</div><a href="tel:(555) 567-8902" className="text-yellow-500 text-xl font-black hover:underline">(555) 567-8902</a><p className="text-stone-500 text-sm mt-2">24/7 availability</p></div>
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-8"><div className="text-3xl mb-3">📍</div><div className="font-bold text-lg">Service Area</div><p className="text-stone-400">Metro Atlanta, GA<br />30-mile radius</p></div>
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-8"><div className="text-3xl mb-3">✅</div><div className="font-bold text-lg">Licensed</div><p className="text-stone-400">Master Electrician<br />Fully insured</p></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800 py-8"><div className="max-w-6xl mx-auto px-6 text-center text-stone-600 text-sm">© {new Date().getFullYear()} VoltPro Electric. Atlanta, GA. Licensed & Insured.</div></footer>
    </div>
  );
}

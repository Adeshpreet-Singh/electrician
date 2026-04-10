'use client';
import { useState, useEffect } from 'react';
const services = [
  { name: 'Residential Wiring', desc: 'New construction, rewiring, panel upgrades, and code compliance. Licensed for homes up to 10,000 sq ft.', price: 'From $150' },
  { name: 'EV Charger Installation', desc: 'Level 2 home charger installation. 240V dedicated circuit, permit included. Tesla, ChargePoint, JuiceBox compatible.', price: 'From $800' },
  { name: 'Lighting Design', desc: 'Recessed lighting, chandelier installation, landscape lighting, smart switches, and whole-home LED upgrades.', price: 'From $200' },
  { name: 'Panel Upgrades', desc: '100A to 200A+ panel upgrades for older homes. Required for EV chargers, hot tubs, and home additions.', price: 'From $2,500' },
  { name: 'Generator Installation', desc: 'Whole-home standby generators. Automatic transfer switch, natural gas or propane. Keeps your home powered during outages.', price: 'From $5,000' },
  { name: 'Troubleshooting', desc: 'Flickering lights, tripping breakers, dead outlets. We diagnose and fix electrical issues same-day in most cases.', price: 'From $95' },
];
export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => { const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.08 }); document.querySelectorAll('.reveal').forEach(el => obs.observe(el)); return () => obs.disconnect(); }, []);
  return (
    <div className="min-h-screen" style={{ background: 'var(--cream)', color: 'var(--charcoal)' }}>
      <div className="emergency-bar">⚡ Electrical Emergency? Call <a href="tel:(512) 555-0145" style={{ color: 'white', textDecoration: 'underline' }}>(512) 555-0145</a> — Same-Day Service Available</div>
      <nav className="sticky top-0 z-50 px-8 py-4 flex justify-between items-center" style={{ background: '#FFFBF0ee', backdropFilter: 'blur(12px)', borderBottom: '1px solid #E8E0D4' }}>
        <div><h1 className="heading-elec text-xl font-bold" style={{ color: 'var(--orange)' }}>VoltPro</h1><p className="text-[9px] tracking-[0.2em] uppercase opacity-50">Licensed Electrician · Austin</p></div>
        <div className="hidden md:flex gap-8 text-sm opacity-70">{['services','estimate','contact'].map(s => <button key={s} onClick={() => scrollTo(s)} className="capitalize">{s}</button>)}</div>
        <button onClick={() => scrollTo('contact')} className="btn-orange text-sm">Get Estimate</button>
      </nav>
      <main>
        <section className="py-24 px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--orange)' }}>Licensed & Insured — Since 2010</p>
              <h2 className="heading-elec text-5xl md:text-6xl font-extrabold mb-6">Power<br/><span style={{ color: 'var(--orange)' }}>done right.</span></h2>
              <p className="text-lg opacity-60 mb-8 leading-relaxed max-w-lg">Residential and commercial electrical services. Licensed master electricians, upfront pricing, and a lifetime warranty on all workmanship.</p>
              <div className="flex gap-4"><button onClick={() => scrollTo('contact')} className="btn-orange">Free Estimate</button><button onClick={() => scrollTo('services')} className="px-8 py-3 rounded-full font-bold" style={{ border: '2px solid var(--orange)', color: 'var(--orange)' }}>Services</button></div>
              <div className="flex gap-8 mt-12">{[{ n: '5,000+', l: 'Jobs Done' },{ n: '4.9★', l: 'Rating' },{ n: 'Same Day', l: 'Available' }].map(s => <div key={s.l}><p className="heading-elec text-2xl font-bold" style={{ color: 'var(--orange)' }}>{s.n}</p><p className="text-xs opacity-40">{s.l}</p></div>)}</div>
            </div>
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80" alt="Electrician at work" className="w-full h-96 object-cover rounded-2xl" loading="lazy" />
          </div>
        </section>
        <section id="services" className="py-24 px-8 reveal" style={{ background: 'white' }}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16"><p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--orange)' }}>What We Do</p><h2 className="heading-elec text-4xl font-bold">Our Services</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map(s => <div key={s.name} className="service-card"><div className="flex justify-between items-start mb-3"><h3 className="font-bold">{s.name}</h3><p className="font-bold text-sm" style={{ color: 'var(--orange)' }}>{s.price}</p></div><p className="text-sm opacity-60 leading-relaxed">{s.desc}</p></div>)}</div>
          </div>
        </section>
        <section id="estimate" className="py-24 px-8 reveal" style={{ background: 'var(--charcoal)', color: 'white' }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: 'var(--orange)' }}>Free</p>
            <h2 className="heading-elec text-4xl font-bold mb-6">Get a Free Estimate</h2>
            <p className="opacity-60 mb-8">Tell us about your project. We provide upfront pricing with no hidden fees. Most estimates delivered within 2 hours.</p>
            {submitted ? (<p className="heading-elec text-2xl" style={{ color: 'var(--orange)' }}>Received! We will call within 2 hours.</p>) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4 text-left" style={{ color: 'var(--charcoal)' }}><div className="grid grid-cols-2 gap-4"><input type="text" placeholder="Name" required className="w-full" /><input type="tel" placeholder="Phone" required className="w-full" /></div><input type="text" placeholder="Address" className="w-full" /><select className="w-full"><option value="">Service needed</option>{services.map(s => <option key={s.name}>{s.name}</option>)}</select><textarea rows={3} placeholder="Describe the work needed..." className="w-full" /><button type="submit" className="w-full btn-orange py-4">REQUEST ESTIMATE</button></form>
            )}
          </div>
        </section>
        <section id="contact" className="py-16 px-8 reveal">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-elec text-2xl font-bold mb-4" style={{ color: 'var(--orange)' }}>VoltPro Electric</h2>
            <div className="flex justify-center gap-8 text-sm opacity-60 flex-wrap"><span>📍 Serving Austin Metro</span><span>📞 <a href="tel:(512) 555-0145" style={{ color: 'var(--orange)' }}>(512) 555-0145</a></span><span>🕐 Mon–Sat 7AM–7PM</span></div>
          </div>
        </section>
      </main>
      <footer className="py-8 text-center text-xs opacity-30"><p>VoltPro Electric. Licensed & Insured. Austin, TX.</p></footer>
    </div>
  );
}
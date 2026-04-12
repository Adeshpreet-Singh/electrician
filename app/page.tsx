'use client';
import { useState, useEffect } from 'react';

const services = [
  { name: 'Panel Upgrades', desc: 'Upgrade your outdated electrical panel to handle modern power demands safely. We specialize in 100A to 200A and 400A panel replacements, bringing older homes up to current code requirements. A panel upgrade is essential before adding EV chargers, hot tubs, home additions, or any high-draw appliances. Every upgrade includes a full safety inspection, permit pull, and city inspection sign-off.', price: 'From $2,500', icon: '⚡' },
  { name: 'EV Charger Installation', desc: 'Level 2 home EV charger installation for Tesla, ChargePoint, JuiceBox, Wallbox, and more. We run a dedicated 240V circuit from your panel to your garage or driveway, install the NEMA 14-50 outlet or hardwire your unit, and handle all permitting. Most installations are completed in a single visit. We also assess whether your panel can support the additional load or needs an upgrade first.', price: 'From $800', icon: '🔌' },
  { name: 'Lighting Design & Install', desc: 'Transform your home with professional lighting. We install recessed lighting, pendant fixtures, chandeliers, under-cabinet LED strips, landscape and pathway lighting, smart dimmer switches, and whole-home LED conversion packages. Our team helps you select the right fixtures and placement for optimal ambiance, energy efficiency, and functionality in every room.', price: 'From $200', icon: '💡' },
  { name: 'Wiring & Rewiring', desc: 'Complete wiring and rewiring for new construction, renovations, and older homes with outdated aluminum or knob-and-tube wiring. We replace dangerous wiring with modern copper conductors, add circuits for new appliances, install dedicated lines for home offices and media rooms, and ensure every connection meets NEC code standards. Full documentation and permits included.', price: 'From $150', icon: '🔧' },
  { name: 'Generator Installation', desc: 'Whole-home standby generator installation keeps your family comfortable and safe during power outages. We install automatic transfer switches, connect natural gas or propane fuel lines, and configure your generator to power critical systems or your entire home. Brands include Generac, Kohler, and Briggs & Stratton. We handle permits, utility coordination, and final commissioning.', price: 'From $5,000', icon: '🔋' },
  { name: 'Electrical Inspection', desc: 'Comprehensive electrical safety inspections for home buyers, sellers, insurance requirements, and peace of mind. We evaluate your panel, wiring, outlets, grounding, GFCI/AFCI protection, and overall system health. You receive a detailed written report with photos, code violation notes, and prioritized repair recommendations. Same-day reports available for real estate transactions.', price: 'From $195', icon: '📋' },
  { name: 'Commercial Electrical', desc: 'Full-service commercial electrical for offices, retail spaces, restaurants, and warehouses. Services include tenant build-outs, lighting retrofits, electrical panel installations, dedicated equipment circuits, data cabling coordination, exit and emergency lighting, and ongoing maintenance contracts. We work nights and weekends to minimize disruption to your business operations.', price: 'Custom Quote', icon: '🏢' },
  { name: 'Smart Home Wiring', desc: 'Future-proof your home with structured wiring for smart home systems. We install Cat6/Cat6a ethernet, coax, speaker wire, smart switch and dimmer wiring, whole-home Wi-Fi access point cabling, home automation hubs, and security camera pre-wire. Whether you are building new or retrofitting, we design a wiring infrastructure that supports today\'s technology and tomorrow\'s innovations.', price: 'From $350', icon: '🏠' },
];

const testimonials = [
  { name: 'Sarah M.', location: 'West Lake Hills', text: 'VoltPro upgraded our panel from 100A to 200A and installed a Tesla charger in the same visit. The crew was on time, wore booties inside, and cleaned up everything. Our city inspection passed on the first try. Highly recommend for any major electrical work.', rating: 5 },
  { name: 'James R.', location: 'Round Rock', text: 'Called at 6 AM about flickering lights and a burning smell from our panel. They had someone at our door by 8 AM. Turned out a breaker had failed and was overheating. Fixed it on the spot and did a full safety check at no extra charge. These are the people you want in an emergency.', rating: 5 },
  { name: 'Maria L.', location: 'Cedar Park', text: 'We hired VoltPro to rewire our 1970s home during a remodel. They replaced all the aluminum wiring, added recessed lighting throughout, and set up smart switches in every room. The work was meticulous and they coordinated perfectly with our general contractor. Worth every penny.', rating: 5 },
];

const faqs = [
  { q: 'Do you offer free estimates?', a: 'Yes. We provide free, no-obligation estimates for all residential and commercial projects. Most estimates are delivered within 2 hours of your request. For complex projects, we schedule an on-site visit to assess the scope and provide an accurate, upfront price with no hidden fees.' },
  { q: 'Are you licensed and insured?', a: 'Absolutely. VoltPro Electric is fully licensed as a Master Electrician in the state of Texas. We carry $2 million in general liability insurance and full workers\' compensation coverage. We are happy to provide certificates of insurance upon request for any project.' },
  { q: 'How quickly can you come out?', a: 'For emergencies, we offer same-day and often within-hours response across the Austin metro area. For non-emergency appointments, we typically schedule within 1-3 business days. Our team works Monday through Saturday, 7 AM to 7 PM, with after-hours emergency service available.' },
  { q: 'Do you handle permits and inspections?', a: 'Yes. We pull all required electrical permits and schedule city inspections as part of our service. Permit costs are included in our quotes unless otherwise noted. We have established relationships with permitting offices across Travis, Williamson, and Hays counties, which helps expedite approvals.' },
  { q: 'What warranties do you offer?', a: 'We stand behind our work with a lifetime workmanship warranty. If any issue arises from our installation or repair, we fix it at no cost. Parts and materials carry the manufacturer\'s warranty, typically 1-5 years depending on the product. We also offer extended warranty plans for commercial clients.' },
  { q: 'Do you work on older homes?', a: 'Yes, older homes are a specialty. We have extensive experience with knob-and-tube wiring, aluminum wiring, Federal Pacific and Zinsco panels, and other legacy systems common in Austin-area homes built before 1980. We can assess your current system, identify safety concerns, and develop a phased upgrade plan that fits your budget.' },
];

const safetyTips = [
  { title: 'Test Your GFCI Outlets Monthly', tip: 'Press the TEST button on every GFCI outlet in your kitchen, bathroom, garage, and outdoor areas monthly. If the RESET button does not pop out, the outlet is not protecting you from ground faults and needs immediate replacement. A failed GFCI can allow lethal shock current to reach a person.' },
  { title: 'Never Overload Extension Cords', tip: 'Extension cords are for temporary use only, never as permanent wiring. Do not daisy-chain power strips or plug high-draw appliances like space heaters, hair dryers, or window AC units into extension cords. Overloaded cords are one of the leading causes of residential electrical fires.' },
  { title: 'Know Your Panel', tip: 'Every adult in your home should know where the electrical panel is and how to shut off power. Label each breaker clearly. In an emergency, shutting off the main breaker can prevent electrocution and stop an electrical fire from spreading. If your panel is not labeled, schedule a labeling visit.' },
  { title: 'Watch for Warning Signs', tip: 'Flickering lights, outlets that feel warm to the touch, burning smells, buzzing sounds from switches or outlets, and breakers that trip frequently are all signs of serious electrical problems. Do not ignore these symptoms. Call a licensed electrician immediately to diagnose and repair the issue before it becomes dangerous.' },
];

const serviceAreas = [
  'Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville',
  'Leander', 'Kyle', 'Buda', 'Lakeway', 'Bee Cave',
  'Dripping Springs', 'West Lake Hills', 'Rollingwood', 'Hutto', 'Manor',
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--heading)' }}>

      {/* ========== EMERGENCY BANNER ========== */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white text-center py-3 px-4 text-sm font-semibold tracking-wide">
        ⚡ 24/7 Electrical Emergencies — Call{' '}
        <a href="tel:(512) 555-0145" className="underline font-bold hover:text-yellow-200 transition-colors">(512) 555-0145</a>{' '}
        — Live Answer, Same-Day Dispatch, No After-Hours Upcharge
      </div>

      {/* ========== NAVIGATION ========== */}
      <nav role="navigation" className="sticky top-0 z-50 px-6 md:px-8 py-4 flex justify-between items-center" style={{ background: 'rgba(28,28,28,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
        <div>
          <h1 className="heading text-xl font-bold" style={{ color: 'var(--accent)' }}>VoltPro Electric</h1>
          <p className="text-[9px] tracking-[0.2em] uppercase" style={{ color: 'var(--body)' }}>Licensed Master Electrician · Austin, TX</p>
        </div>
        <div className="hidden md:flex gap-6 text-sm" style={{ color: 'var(--body)' }}>
          {['services', 'why-us', 'testimonials', 'faq', 'contact'].map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="capitalize hover:text-white transition-colors" aria-label={`Navigate to ${s}`} aria-label={`Navigate to ${s}`}>{s.replace('-', ' ')}</button>
          ))}
        </div>
        <button onClick={() => scrollTo('contact')} aria-label="Navigate to contact" className="btn">Free Estimate</button>
      </nav>

      <main role="main">
        {/* ========== HERO SECTION ========== */}
        <section className="hero py-24 px-6 md:px-8">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge mb-4">Licensed & Insured · Since 2004</span>
              <h2 className="heading text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Power Your Life<br />
                <span style={{ color: 'var(--accent)' }}>Done Right.</span>
              </h2>
              <p className="text-lg mb-8 leading-relaxed max-w-lg" style={{ color: 'var(--body)' }}>
                VoltPro Electric delivers residential and commercial electrical services you can trust.
                From panel upgrades and EV charger installations to full rewiring and smart home systems,
                our licensed master electricians bring over two decades of experience to every project.
                We believe in upfront pricing, clean workmanship, and doing the job right the first time — every time.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button onClick={() => scrollTo('contact')} aria-label="Navigate to contact" className="btn">Get Free Estimate</button>
                <button onClick={() => scrollTo('services')} aria-label="Navigate to services" className="btn-outline">View Services</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
                {[
                  { n: '20+', l: 'Years Experience' },
                  { n: '5,000+', l: 'Jobs Completed' },
                  { n: '4.9★', l: 'Google Rating' },
                  { n: 'Same Day', l: 'Service Available' },
                ].map(s => (
                  <div key={s.l}>
                    <p className="heading text-2xl font-bold" style={{ color: 'var(--accent)' }}>{s.n}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--body)' }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="img-hover">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
                alt="Licensed electrician performing panel upgrade work"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* ========== SERVICES SECTION ========== */}
        <section id="services" aria-labelledby="services-heading" className="py-24 px-6 md:px-8 reveal section-alt">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-3">What We Do</span>
              <h2 id="services-heading" className="heading text-4xl font-bold mt-4">Our Electrical Services</h2>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
                From simple repairs to complex installations, VoltPro Electric covers every aspect of residential and commercial electrical work. All services include permits, inspections, and our lifetime workmanship warranty.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map(s => (
                <div key={s.name} className="card group">
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-base">{s.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--body)' }}>{s.desc}</p>
                  <p className="font-bold text-sm" style={{ color: 'var(--accent)' }}>{s.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== WHY CHOOSE US ========== */}
        <section id="why-us" aria-labelledby="why-us-heading" className="py-24 px-6 md:px-8 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-3">The VoltPro Difference</span>
              <h2 id="why-us-heading" className="heading text-4xl font-bold mt-4">Why Choose VoltPro Electric</h2>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
                Not all electricians are created equal. Here is what sets VoltPro apart from the rest.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Licensed Master Electrician', desc: 'Our lead electrician holds a Texas Master Electrician license, the highest credential in the trade. This means rigorous testing, continuing education, and proven expertise across all types of electrical systems. We do not subcontract — every job is handled by our in-house team of licensed professionals.' },
                { title: 'Fully Insured & Bonded', desc: 'We carry $2 million in general liability insurance and full workers\' compensation coverage on every crew member. Your home and our team are protected at all times. We provide certificates of insurance before work begins, giving you complete peace of mind throughout the project.' },
                { title: 'Code Compliant, Always', desc: 'Every installation meets or exceeds the National Electrical Code (NEC) and local Austin amendments. We pull permits, schedule inspections, and guarantee your project passes on the first visit from the city inspector. Cutting corners on code is never an option at VoltPro.' },
                { title: 'Clean & Respectful Work', desc: 'We treat your home like our own. Drop cloths go down before any work begins. Booties are worn inside. Work areas are vacuumed and wiped down at the end of each day. We communicate our schedule clearly and respect your time, your family, and your property.' },
              ].map(item => (
                <div key={item.title} className="card text-center">
                  <div className="w-12 h-12 rounded-full mx-auto mb-5 flex items-center justify-center text-lg font-bold" style={{ background: 'rgba(62,207,142,0.15)', color: 'var(--accent)' }}>✓</div>
                  <h3 className="font-bold mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SAFETY TIPS ========== */}
        <section className="py-24 px-6 md:px-8 reveal section-alt">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-3">Stay Safe</span>
              <h2 className="heading text-4xl font-bold mt-4">Electrical Safety Tips</h2>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
                Protect your home and family with these essential electrical safety practices from our licensed electricians.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {safetyTips.map((t, i) => (
                <div key={i} className="card flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(62,207,142,0.15)', color: 'var(--accent)' }}>{i + 1}</div>
                  <div>
                    <h3 className="font-bold mb-2">{t.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--body)' }}>{t.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS ========== */}
        <section id="testimonials" aria-labelledby="testimonials-heading" className="py-24 px-6 md:px-8 reveal">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-3">Reviews</span>
              <h2 id="testimonials-heading" className="heading text-4xl font-bold mt-4">What Our Customers Say</h2>
              <p className="mt-4 max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
                Do not just take our word for it. Here is what Austin homeowners have to say about working with VoltPro Electric.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map(t => (
                <div key={t.name} className="card">
                  <div className="flex gap-1 mb-4" style={{ color: '#facc15' }}>
                    {Array.from({ length: t.rating }).map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <p className="text-sm leading-relaxed italic mb-6" style={{ color: 'var(--body)' }}>&ldquo;{t.text}&rdquo;</p>
                  <div className="border-t pt-4" style={{ borderColor: 'var(--border)' }}>
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs" style={{ color: 'var(--body)' }}>{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FAQ SECTION ========== */}
        <section id="faq" aria-labelledby="faq-heading" className="py-24 px-6 md:px-8 reveal section-alt">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="badge mb-3">Questions</span>
              <h2 id="faq-heading" className="heading text-4xl font-bold mt-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="card cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold pr-4">{faq.q}</h3>
                    <span className="shrink-0 text-lg transition-transform" style={{ color: 'var(--accent)', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                  </div>
                  {openFaq === i && (
                    <p className="text-sm leading-relaxed mt-4 pt-4 border-t" style={{ color: 'var(--body)', borderColor: 'var(--border)' }}>{faq.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SERVICE AREAS ========== */}
        <section className="py-24 px-6 md:px-8 reveal">
          <div className="max-w-5xl mx-auto text-center">
            <span className="badge mb-3">Coverage</span>
            <h2 className="heading text-4xl font-bold mt-4 mb-6">Service Areas</h2>
            <p className="mb-10 max-w-2xl mx-auto" style={{ color: 'var(--body)' }}>
              VoltPro Electric proudly serves the greater Austin metropolitan area. If your city is not listed, call us — we likely cover your area too.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map(area => (
                <span key={area} className="px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'rgba(62,207,142,0.1)', color: 'var(--accent)', border: '1px solid rgba(62,207,142,0.2)' }}>{area}</span>
              ))}
            </div>
            <p className="mt-8 text-sm" style={{ color: 'var(--body)' }}>
              Serving Travis, Williamson, Hays, Bastrop, and Caldwell counties.
            </p>
          </div>
        </section>

        {/* ========== CONTACT / ESTIMATE FORM ========== */}
        <section id="contact" aria-labelledby="contact-heading" className="py-24 px-6 md:px-8 reveal" style={{ background: 'var(--dark)' }}>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <span className="badge mb-4">Get In Touch</span>
              <h2 id="contact-heading" className="heading text-4xl font-bold mt-4 mb-6">Request a Free Estimate</h2>
              <p className="mb-8 leading-relaxed" style={{ color: 'var(--body)' }}>
                Tell us about your project and we will get back to you within 2 hours with an upfront estimate. No obligation, no hidden fees, no pressure. For emergencies, call us directly for immediate assistance.
              </p>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ background: 'rgba(62,207,142,0.15)', color: 'var(--accent)' }}>📞</div>
                  <div>
                    <p className="font-bold text-sm">Phone</p>
                    <a href="tel:(512) 555-0145" className="text-sm" style={{ color: 'var(--accent)' }}>(512) 555-0145</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ background: 'rgba(62,207,142,0.15)', color: 'var(--accent)' }}>📧</div>
                  <div>
                    <p className="font-bold text-sm">Email</p>
                    <a href="mailto:info@voltproelectric.com" className="text-sm" style={{ color: 'var(--accent)' }}>info@voltproelectric.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ background: 'rgba(62,207,142,0.15)', color: 'var(--accent)' }}>🕐</div>
                  <div>
                    <p className="font-bold text-sm">Hours</p>
                    <p className="text-sm" style={{ color: 'var(--body)' }}>Mon–Sat 7AM–7PM · 24/7 Emergency</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm" style={{ background: 'rgba(62,207,142,0.15)', color: 'var(--accent)' }}>📍</div>
                  <div>
                    <p className="font-bold text-sm">Location</p>
                    <p className="text-sm" style={{ color: 'var(--body)' }}>Serving Austin Metro & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {submitted ? (
                <div className="card text-center py-16">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="heading text-2xl font-bold mb-3">Estimate Request Received!</h3>
                  <p style={{ color: 'var(--body)' }}>We will call you within 2 hours. For emergencies, call <a href="tel:(512) 555-0145" style={{ color: 'var(--accent)' }}>(512) 555-0145</a> now.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="card space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Your Name *" aria-label="Your Name *" required />
                    <input type="tel" placeholder="Phone Number *" aria-label="Phone Number *" required />
                  </div>
                  <input type="email" placeholder="Email Address" aria-label="Email Address" />
                  <input type="text" placeholder="Service Address" aria-label="Service Address" />
                  <select aria-label="Select option" defaultValue="">
                    <option value="" disabled>Select a Service</option>
                    {services.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                  </select>
                  <textarea rows={4} placeholder="Describe the work you need done. Include any relevant details like the age of your home, specific problems you are experiencing, or the scope of your project..." aria-label="Describe the work you need done. Include any relevant details like the age of your home, specific problems you are experiencing, or the scope of your project" />
                  <button type="submit" className="btn w-full text-center py-4">REQUEST FREE ESTIMATE</button>
                  <p className="text-xs text-center" style={{ color: 'var(--body)' }}>No obligation. We respond within 2 hours.</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="py-12 px-6 md:px-8 text-center" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto">
          <h3 className="heading text-xl font-bold mb-2" style={{ color: 'var(--accent)' }}>VoltPro Electric</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--body)' }}>Licensed Master Electrician · Bonded & Insured · Austin, TX</p>
          <div className="flex justify-center gap-6 text-xs mb-6" style={{ color: 'var(--body)' }}>
            <span>LIC #TECL-28475</span>
            <span>·</span>
            <span>$2M General Liability</span>
            <span>·</span>
            <span>BBB A+ Rated</span>
          </div>
          <p className="text-xs" style={{ color: 'var(--body)', opacity: 0.5 }}>
            &copy; {new Date().getFullYear()} VoltPro Electric LLC. All rights reserved. Serving the Austin metropolitan area since 2004.
          </p>
        </div>
      </footer>
    </div>
  );
}

'use client';
import { useState, useEffect } from 'react';

const images = {
  hero: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
  services: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
  commercial: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
};

const services = [
  { name: 'Panel Upgrades', desc: 'Upgrade your outdated electrical panel to handle modern power demands safely and efficiently. We specialize in 100A to 400A panel replacements, bringing older homes up to current National Electrical Code requirements. Every upgrade includes a comprehensive safety inspection, permit acquisition, and city inspection sign-off. Whether you are adding an EV charger, hot tub, home addition, or simply need more capacity for modern appliances, a panel upgrade is the foundation of a safe and reliable electrical system. Our team evaluates your current load, calculates future demand, and installs a panel that gives you room to grow.', price: 'From $2,500', icon: '⚡' },
  { name: 'EV Charger Installation', desc: 'Level 2 home EV charger installation for Tesla, ChargePoint, JuiceBox, Wallbox, and every major brand. We run a dedicated 240V circuit from your panel to your garage or driveway, install the NEMA 14-50 outlet or hardwire your unit, and handle all permitting and inspections. Most installations are completed in a single visit with minimal disruption. We also assess whether your existing panel can support the additional electrical load or whether an upgrade is required before installation. Drive electric with confidence knowing your charger was installed by a licensed master electrician.', price: 'From $800', icon: '🔌' },
  { name: 'Lighting Design & Installation', desc: 'Transform any room in your home with professional lighting design and installation. We install recessed lighting, pendant fixtures, chandeliers, under-cabinet LED strips, landscape and pathway lighting, smart dimmer switches, and whole-home LED conversion packages. Our experienced team helps you select the right fixtures and optimal placement for ambiance, energy efficiency, and functionality in every room. From a single fixture swap to a complete lighting redesign, we deliver clean installations that look beautiful and perform reliably for years to come.', price: 'From $200', icon: '💡' },
  { name: 'Wiring & Rewiring', desc: 'Complete wiring and rewiring services for new construction, renovations, and older homes with outdated aluminum or knob-and-tube wiring. We replace dangerous legacy wiring with modern copper conductors, add circuits for new appliances, install dedicated lines for home offices and media rooms, and ensure every connection meets NEC code standards. Full documentation and permits are included with every project. If your home was built before 1980, a wiring inspection can reveal hidden hazards that put your family at risk. Do not wait for a problem to surface.', price: 'From $150', icon: '🔧' },
  { name: 'Generator Installation', desc: 'Whole-home standby generator installation keeps your family comfortable and safe during power outages. We install automatic transfer switches, connect natural gas or propane fuel lines, and configure your generator to power critical systems or your entire home. Trusted brands include Generac, Kohler, and Briggs & Stratton. We handle permits, utility coordination, and final commissioning so you never have to worry about losing power. Texas storms are unpredictable, but your backup power should not be. Schedule a generator consultation today.', price: 'From $5,000', icon: '🔋' },
  { name: 'Electrical Inspection', desc: 'Comprehensive electrical safety inspections for home buyers, sellers, insurance requirements, and peace of mind. We evaluate your panel, wiring, outlets, grounding, GFCI and AFCI protection, and overall system health. You receive a detailed written report with photographs, code violation notes, and prioritized repair recommendations. Same-day reports are available for real estate transactions where timing matters. Whether you are buying a new home, selling your current one, or simply want to verify that your electrical system is safe, our inspections give you the information you need to make confident decisions.', price: 'From $195', icon: '📋' },
  { name: 'Commercial Electrical', desc: 'Full-service commercial electrical contracting for offices, retail spaces, restaurants, and warehouses. Services include tenant build-outs, lighting retrofits, electrical panel installations, dedicated equipment circuits, data cabling coordination, exit and emergency lighting, and ongoing maintenance contracts. We work nights and weekends to minimize disruption to your business operations. Our commercial team understands that downtime costs money, so we plan every project carefully, communicate timelines clearly, and deliver on schedule and on budget.', price: 'Custom Quote', icon: '🏢' },
  { name: 'Smart Home Wiring', desc: 'Future-proof your home with structured wiring designed for modern smart home systems. We install Cat6 and Cat6a ethernet, coax, speaker wire, smart switch and dimmer wiring, whole-home Wi-Fi access point cabling, home automation hubs, and security camera pre-wire. Whether you are building a new home or retrofitting an existing one, we design a wiring infrastructure that supports today\'s technology and tomorrow\'s innovations. Smart homes start with smart wiring, and our team ensures your network backbone is built to perform.', price: 'From $350', icon: '🏠' },
];

const testimonials = [
  { name: 'Sarah M.', location: 'West Lake Hills', text: 'VoltPro upgraded our panel from 100A to 200A and installed a Tesla charger in the same visit. The crew was on time, wore booties inside, and cleaned up everything. Our city inspection passed on the first try. Highly recommend for any major electrical work.', rating: 5 },
  { name: 'James R.', location: 'Round Rock', text: 'Called at 6 AM about flickering lights and a burning smell from our panel. They had someone at our door by 8 AM. Turned out a breaker had failed and was overheating. Fixed it on the spot and did a full safety check at no extra charge. These are the people you want in an emergency.', rating: 5 },
  { name: 'Maria L.', location: 'Cedar Park', text: 'We hired VoltPro to rewire our 1970s home during a remodel. They replaced all the aluminum wiring, added recessed lighting throughout, and set up smart switches in every room. The work was meticulous and they coordinated perfectly with our general contractor. Worth every penny.', rating: 5 },
];

const serviceAreas = [
  'Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville',
  'Leander', 'Kyle', 'Buda', 'Lakeway', 'Bee Cave',
  'Dripping Springs', 'West Lake Hills', 'Rollingwood', 'Hutto', 'Manor',
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

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
    <div className="min-h-screen" style={{ background: '#0a0a0a', color: '#ffffff' }}>

      {/* ========== EMERGENCY BANNER ========== */}
      <div className="emergency-banner">
        <div className="emergency-pulse"></div>
        <span className="emergency-icon">⚡</span>
        <span>24/7 ELECTRICAL EMERGENCIES</span>
        <span className="emergency-divider">|</span>
        <a href="tel:(512) 555-0145" className="emergency-phone">(512) 555-0145</a>
        <span className="emergency-divider">|</span>
        <span>Live Answer · Same-Day Dispatch · No After-Hours Upcharge</span>
      </div>

      {/* ========== NAVIGATION ========== */}
      <nav role="navigation" className="nav-bar">
        <div>
          <h1 className="nav-brand">VoltPro Electric</h1>
          <p className="nav-tagline">Licensed Master Electrician · Austin, TX</p>
        </div>
        <div className="nav-links">
          {['services', 'why-us', 'testimonials', 'contact'].map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="nav-link" aria-label={`Navigate to ${s}`}>
              {s.replace('-', ' ')}
            </button>
          ))}
        </div>
        <button onClick={() => scrollTo('contact')} className="btn btn-primary">Free Estimate</button>
      </nav>

      <main role="main">
        {/* ========== HERO SECTION ========== */}
        <section className="hero-section">
          <div className="hero-inner">
            <div className="hero-content">
              <span className="badge">Licensed & Insured · Since 2004</span>
              <h2 className="hero-title">
                Power Your Life<br />
                <span className="text-accent">Done Right.</span>
              </h2>
              <p className="hero-desc">
                VoltPro Electric delivers residential and commercial electrical services you can trust.
                From panel upgrades and EV charger installations to full rewiring and smart home systems,
                our licensed master electricians bring over two decades of experience to every project.
                We believe in upfront pricing, clean workmanship, and doing the job right the first time — every time.
                When you choose VoltPro, you get a team that treats your home with respect, arrives on schedule,
                and stands behind every installation with a lifetime workmanship warranty.
              </p>
              <div className="hero-actions">
                <button onClick={() => scrollTo('contact')} className="btn btn-primary">Get Free Estimate</button>
                <button onClick={() => scrollTo('services')} className="btn btn-outline">View Services</button>
              </div>
              <div className="hero-stats">
                {[
                  { n: '20+', l: 'Years Experience' },
                  { n: '5,000+', l: 'Jobs Completed' },
                  { n: '4.9★', l: 'Google Rating' },
                  { n: 'Same Day', l: 'Service Available' },
                ].map(s => (
                  <div key={s.l} className="stat-item">
                    <p className="stat-number">{s.n}</p>
                    <p className="stat-label">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-image-wrap">
              <img
                src={images.hero}
                alt="Licensed electrician performing professional panel upgrade work"
                className="hero-image"
                loading="eager"
              />
              <div className="hero-image-overlay"></div>
            </div>
          </div>
        </section>

        {/* ========== SERVICES SECTION ========== */}
        <section id="services" aria-labelledby="services-heading" className="section services-section reveal">
          <div className="container">
            <div className="section-header">
              <span className="badge">What We Do</span>
              <h2 id="services-heading" className="section-title">Our Electrical Services</h2>
              <p className="section-subtitle">
                From simple repairs to complex installations, VoltPro Electric covers every aspect of residential
                and commercial electrical work. All services include permits, inspections, and our lifetime workmanship warranty.
                Every project is handled by our in-house team of licensed professionals — never subcontracted, never rushed.
              </p>
            </div>
            <div className="services-grid">
              {services.map(s => (
                <div key={s.name} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3 className="service-name">{s.name}</h3>
                  <p className="service-desc">{s.desc}</p>
                  <p className="service-price">{s.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FEATURED IMAGE BREAK ========== */}
        <section className="image-break reveal">
          <img
            src={images.services}
            alt="Professional electrician working on commercial lighting installation"
            className="image-break-img"
            loading="lazy"
          />
          <div className="image-break-overlay">
            <h3 className="image-break-title">Professional. Reliable. Trusted.</h3>
            <p className="image-break-text">
              Every VoltPro electrician is background-checked, drug-tested, and trained to deliver
              the highest standard of workmanship on every job.
            </p>
          </div>
        </section>

        {/* ========== WHY CHOOSE US ========== */}
        <section id="why-us" aria-labelledby="why-us-heading" className="section reveal">
          <div className="container">
            <div className="section-header">
              <span className="badge">The VoltPro Difference</span>
              <h2 id="why-us-heading" className="section-title">Why Choose VoltPro Electric</h2>
              <p className="section-subtitle">
                Not all electricians are created equal. When you hire VoltPro, you are choosing a company that holds
                itself to the highest standards in the industry. Here is what sets us apart from the competition
                and why thousands of Austin homeowners trust us with their most important electrical projects.
              </p>
            </div>
            <div className="why-grid">
              {[
                { title: 'Licensed Master Electrician', desc: 'Our lead electrician holds a Texas Master Electrician license, the highest credential in the trade. This means rigorous testing, continuing education, and proven expertise across all types of electrical systems. We do not subcontract — every job is handled by our in-house team of licensed professionals who take pride in their craft.' },
                { title: 'Fully Insured & Bonded', desc: 'We carry $2 million in general liability insurance and full workers\' compensation coverage on every crew member. Your home and our team are protected at all times. We provide certificates of insurance before work begins, giving you complete peace of mind from start to finish.' },
                { title: 'Code Compliant, Always', desc: 'Every installation meets or exceeds the National Electrical Code and local Austin amendments. We pull permits, schedule inspections, and guarantee your project passes on the first visit from the city inspector. Cutting corners on code is never an option at VoltPro — your safety depends on compliance.' },
                { title: 'Clean & Respectful Work', desc: 'We treat your home like our own. Drop cloths go down before any work begins. Booties are worn inside at all times. Work areas are vacuumed and wiped down at the end of each day. We communicate our schedule clearly and respect your time, your family, and your property.' },
              ].map(item => (
                <div key={item.title} className="why-card">
                  <div className="why-check">✓</div>
                  <h3 className="why-title">{item.title}</h3>
                  <p className="why-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SECOND IMAGE BREAK ========== */}
        <section className="image-break reveal">
          <img
            src={images.commercial}
            alt="Modern commercial office building with professional electrical infrastructure"
            className="image-break-img"
            loading="lazy"
          />
          <div className="image-break-overlay">
            <h3 className="image-break-title">Residential & Commercial Expertise</h3>
            <p className="image-break-text">
              From single-family homes to large commercial buildings, VoltPro has the experience and
              equipment to handle projects of any size and complexity.
            </p>
          </div>
        </section>

        {/* ========== SERVICE AREAS ========== */}
        <section className="section services-areas-section reveal">
          <div className="container container-narrow">
            <div className="section-header">
              <span className="badge">Coverage</span>
              <h2 className="section-title">Service Areas</h2>
              <p className="section-subtitle">
                VoltPro Electric proudly serves the greater Austin metropolitan area. If your city is not listed
                below, call us — we likely cover your area too. Our fleet of fully stocked service vehicles is
                positioned across the metro to ensure fast response times no matter where you are located.
              </p>
            </div>
            <div className="areas-grid">
              {serviceAreas.map(area => (
                <span key={area} className="area-tag">{area}</span>
              ))}
            </div>
            <p className="areas-counties">
              Serving Travis, Williamson, Hays, Bastrop, and Caldwell counties.
            </p>
          </div>
        </section>

        {/* ========== TESTIMONIALS ========== */}
        <section id="testimonials" aria-labelledby="testimonials-heading" className="section section-alt reveal">
          <div className="container">
            <div className="section-header">
              <span className="badge">Reviews</span>
              <h2 id="testimonials-heading" className="section-title">What Our Customers Say</h2>
              <p className="section-subtitle">
                Do not just take our word for it. Here is what Austin homeowners have to say about working
                with VoltPro Electric. Our reputation is built on consistently exceeding expectations,
                and our customers are our best advocates.
              </p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map(t => (
                <div key={t.name} className="testimonial-card">
                  <div className="testimonial-stars">
                    {Array.from({ length: t.rating }).map((_, i) => <span key={i}>★</span>)}
                  </div>
                  <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                  <div className="testimonial-author">
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-location">{t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CONTACT / ESTIMATE FORM ========== */}
        <section id="contact" aria-labelledby="contact-heading" className="section contact-section reveal">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <span className="badge">Get In Touch</span>
                <h2 id="contact-heading" className="section-title">Request a Free Estimate</h2>
                <p className="contact-desc">
                  Tell us about your project and we will get back to you within 2 hours with an upfront,
                  transparent estimate. No obligation, no hidden fees, no pressure. For emergencies,
                  call us directly at the number below for immediate assistance from a licensed electrician.
                </p>
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div>
                      <p className="contact-label">Phone</p>
                      <a href="tel:(512) 555-0145" className="contact-value">(512) 555-0145</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">📧</div>
                    <div>
                      <p className="contact-label">Email</p>
                      <a href="mailto:info@voltproelectric.com" className="contact-value">info@voltproelectric.com</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">🕐</div>
                    <div>
                      <p className="contact-label">Hours</p>
                      <p className="contact-value-muted">Mon–Sat 7AM–7PM · 24/7 Emergency</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="contact-icon">📍</div>
                    <div>
                      <p className="contact-label">Location</p>
                      <p className="contact-value-muted">Serving Austin Metro & Surrounding Areas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {submitted ? (
                  <div className="form-success">
                    <div className="form-success-icon">✅</div>
                    <h3 className="form-success-title">Estimate Request Received!</h3>
                    <p className="form-success-text">
                      We will call you within 2 hours. For emergencies, call{' '}
                      <a href="tel:(512) 555-0145" className="text-accent">(512) 555-0145</a> now.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="estimate-form">
                    <div className="form-row">
                      <input type="text" placeholder="Your Name *" aria-label="Your Name" required />
                      <input type="tel" placeholder="Phone Number *" aria-label="Phone Number" required />
                    </div>
                    <input type="email" placeholder="Email Address" aria-label="Email Address" />
                    <input type="text" placeholder="Service Address" aria-label="Service Address" />
                    <select aria-label="Select service" defaultValue="">
                      <option value="" disabled>Select a Service</option>
                      {services.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                    </select>
                    <textarea
                      rows={4}
                      placeholder="Describe the work you need done. Include any relevant details like the age of your home, specific problems you are experiencing, or the scope of your project..."
                      aria-label="Project description"
                    />
                    <button type="submit" className="btn btn-primary btn-full">REQUEST FREE ESTIMATE</button>
                    <p className="form-note">No obligation. We respond within 2 hours.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="container container-narrow">
          <h3 className="footer-brand">VoltPro Electric</h3>
          <p className="footer-tagline">Licensed Master Electrician · Bonded & Insured · Austin, TX</p>
          <div className="footer-badges">
            <span>LIC #TECL-28475</span>
            <span>·</span>
            <span>$2M General Liability</span>
            <span>·</span>
            <span>BBB A+ Rated</span>
          </div>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} VoltPro Electric LLC. All rights reserved. Serving the Austin metropolitan area since 2004.
          </p>
        </div>
      </footer>
    </div>
  );
}

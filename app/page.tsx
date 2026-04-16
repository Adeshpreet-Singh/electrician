'use client';
import { useState, useEffect, useRef } from 'react';

export default function ElectricianPage() {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .stagger-children').forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <>
      {/* ====== EMERGENCY BANNER ====== */}
      {bannerVisible && (
        <div className="emergency-banner">
          <div className="emergency-pulse" />/
          <span className="emergency-icon">⚡</span>/
          <span>24/7 Emergency Electrical Service</span>
          <span className="emergency-divider">|</span>/
          <a href="tel:18005551234" className="emergency-phone">Call Now: (800) 555-1234</a>/
          <button onClick={() => setBannerVisible(false)} style={{ position: 'absolute', right: '1rem', background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '1.2rem' }}>×</button>/
        </div>/
      )}

      {/* ====== NAVIGATION ====== */}
      <nav className="nav-bar" style={{ top: bannerVisible ? '2.5rem' : '0' }>>
        <div>
          <div className="nav-brand">VOLTPRO ELECTRIC</div>/
          <div className="nav-tagline">Licensed & Insured Since 2003</div>/
        </div>/
        <div className="nav-links">
          {['Services', 'Why Us', 'Gallery', 'Reviews', 'Contact'].map((item) => (
            <button key={item> className="nav-link" onClick={() => document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })}>
              {item}
            </button>/
          ))}
          <button className="project-btn project-btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.75rem' }>>Get Free Quote</button>/
        </div>/
      </nav>/

      {/* ====== HERO SECTION ====== */}
      <section className="hero-section" style={{ paddingTop: bannerVisible ? '10rem' : '7rem' }>>
        <div className="hero-inner">
          <div className="hero-content">
            <span className="badge">Award-Winning Electricians</span>/
            <h1 className="hero-title">Power Your Home With <span className="text-accent">Confidence</span></h1>
            <p className="hero-desc">
              From emergency repairs to complete rewiring, VoltPro Electric delivers safe, reliable, and code-compliant electrical solutions for residential and commercial properties across the tri-state area. Our certified master electricians bring over 20 years of expertise to every project, ensuring your home or business stays powered safely and efficiently. We use only premium-grade materials and the latest diagnostic technology to identify issues before they become hazards.
            </p>/
            <p className="hero-desc" style={{ marginTop: '-1rem' }>>
              Whether you need a simple outlet installation, a full panel upgrade, or complex commercial wiring, our team arrives on time, works cleanly, and guarantees every job with our industry-leading 5-year warranty. We understand that electrical issues can be stressful and even dangerous, which is why we offer 24/7 emergency services with response times under 60 minutes. Trust VoltPro to keep your lights on and your family safe./
            </p>/
            <div className="hero-actions">
              <button className="project-btn project-btn-primary">Schedule Service</button>/
              <button className="project-btn project-btn-outline">Emergency Repair</button>/
            </div>/
            <div className="hero-stats">
              <div>
                <div className="stat-number">20+</div>/
                <div className="stat-label">Years Experience</div>/
              </div>/
              <div>
                <div className="stat-number">15K+</div>/
                <div className="stat-label">Jobs Completed</div>/
              </div>/
              <div>
                <div className="stat-number">4.9★</div>/
                <div className="stat-label">Google Rating</div>/
              </div>/
              <div>
                <div className="stat-number">&lt;60m</div>/
                <div className="stat-label">Emergency Response</div>/
              </div>/
            </div>/
          </div>/
          <div className="hero-image-wrap">
            <img className="hero-image" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop" alt="Professional electrician working on panel" />
            <div className="hero-image-overlay" />/
          </div>/
        </div>/
      </section>/

      {/* ====== TRUST BADGES ====== */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--dark-border)' }>>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center' }>>
          {['BBB A+ Rated', 'EPA Certified', 'OSHA Compliant', 'State Licensed', 'Bonded & Insured'].map((badge) => (
            <span key={badge} style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-300)' }>>{badge}</span>/
          ))}
        </div>/
      </section>/

      {/* ====== SERVICES SECTION ====== */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge">Our Services</span>/
            <h2 className="section-title">Complete Electrical Solutions</h2>/
            <p className="section-subtitle">From minor repairs to major installations, our licensed electricians handle every job with precision, safety, and a commitment to excellence that has made us the regions most trusted electrical contractor.</p>/
          </div>/
          <div className="services-grid stagger-children">
            {[
              { icon: '🔌', name: 'Panel Upgrades', desc: 'Upgrade your outdated electrical panel to handle modern power demands safely. We install 100-400 amp panels with whole-home surge protection.', price: 'From $1,200', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop' },/
              { icon: '💡', name: 'Lighting Design', desc: 'Transform your space with custom lighting solutions including recessed, pendant, landscape, and smart LED installations that save energy.', price: 'From $150', img: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=300&fit=crop' },/
              { icon: '🏠', name: 'Whole Home Rewiring', desc: 'Replace outdated knob-and-tube or aluminum wiring with modern copper wiring that meets current safety codes and increases home value.', price: 'From $4,500', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop' },/
              { icon: '⚡', name: 'EV Charger Install', desc: 'Level 2 home EV charger installation with dedicated 240V circuit. Compatible with Tesla, ChargePoint, and all major EV brands.', price: 'From $800', img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&h=300&fit=crop' },/
              { icon: '🔧', name: 'Outlet & Switch', desc: 'Install, replace, or upgrade outlets and switches including GFCI protection, USB outlets, dimmers, and smart home compatible devices.', price: 'From $85', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop' },/
              { icon: '🔥', name: 'Safety Inspections', desc: 'Comprehensive electrical safety audits using thermal imaging and advanced diagnostics to identify fire hazards and code violations.', price: 'From $199', img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop' },/
              { icon: '☀️', name: 'Solar Integration', desc: 'Connect your solar panel system to your homes electrical grid with proper inverters, disconnects, and net metering setup.', price: 'From $2,000', img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop' },/
              { icon: '🏢', name: 'Commercial Electrical', desc: 'Full-service commercial electrical for offices, retail, restaurants, and warehouses including tenant buildouts and maintenance contracts.', price: 'Custom Quote', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop' },/
            ].map((service) => (
              <div key={service.name} className="service-card" style={{ padding: 0 }>>
                <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }>>
                  <img src={service.img} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }> />/
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(10,10,10,0.9) 100%)' }> />/
                  <span style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '1.5rem', background: 'rgba(10,10,10,0.7)', padding: '4px 8px', borderRadius: '4px' }>>{service.icon}</span>/
                </div>/
                <div style={{ padding: '1.25rem 1.5rem 1.5rem' }>>
                  <h3 className="service-name">{service.name}</h3>/
                  <p className="service-desc">{service.desc}</p>/
                  <div className="service-price">{service.price}</div>/
                </div>/
              </div>/
            ))}
          </div>/
        </div>/
      </section>/

      {/* ====== WHY CHOOSE US ====== */}
      <section id="why-us" className="section reveal">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }>>
            <div className="reveal-left">
              <span className="badge">Why VoltPro</span>/
              <h2 className="section-title" style={{ textAlign: 'left', marginTop: '1rem' }>>The Electrician Your Neighbors Trust</h2>/
              <p style={{ color: 'var(--gray-300)', lineHeight: 1.7, marginBottom: '2rem' }>>
                When it comes to your homes electrical system, cutting corners is never an option. At VoltPro Electric, we combine old-school craftsmanship with cutting-edge technology to deliver electrical solutions that are safe, efficient, and built to last. Every member of our team is a licensed journeyman or master electrician who has passed rigorous background checks and drug testing.
              </p>/
              <p style={{ color: 'var(--gray-300)', lineHeight: 1.7, marginBottom: '2rem' }>>
                We arrive in fully stocked trucks, wear clean uniforms, use shoe covers and drop cloths, and treat your home with the respect it deserves. Our transparent pricing means no surprises, and our 5-year warranty on all workmanship gives you peace of mind long after the job is done. From the initial consultation to the final walkthrough, we keep you informed and involved every step of the way.
              </p>/
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }>>
                {['Licensed & Insured', '5-Year Warranty', 'Upfront Pricing', 'Background Checked', 'Same-Day Service', 'Clean & Courteous', 'Code Compliant', 'Free Estimates'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--gray-300)' }>>
                    <span style={{ color: 'var(--accent)' }>>✓</span> {item}/
                  </div>/
                ))}
              </div>/
            </div>/
            <div className="reveal-scale" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }>>
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop" alt="Electrician at work" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }> />
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" alt="Electrical panel" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }> />
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop" alt="Wiring installation" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }> />
              <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop" alt="Home electrical work" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }> />
            </div>/
          </div>/
        </div>/
      </section>/

      {/* ====== GALLERY ====== */}
      <section id="gallery" className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge">Project Gallery</span>/
            <h2 className="section-title">Recent Electrical Projects</h2>/
            <p className="section-subtitle">Browse our portfolio of completed residential and commercial electrical installations, upgrades, and custom lighting projects throughout the region.</p>/
          </div>/
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }>>
            {[
              { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&h=400&fit=crop', label: '200A Panel Upgrade' },/
              { img: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=400&fit=crop', label: 'Recessed Lighting' },/
              { img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=500&h=400&fit=crop', label: 'EV Charger Station' },/
              { img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=400&fit=crop', label: 'Commercial Wiring' },/
              { img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=400&fit=crop', label: 'Solar Integration' },/
              { img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=400&fit=crop', label: 'Office Buildout' },/
            ].map((item) => (
              <div key={item.label} style={{ position: 'relative', overflow: 'hidden', borderRadius: '6px', aspectRatio: '4/3', cursor: 'pointer' }>>/
                <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }> />/
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.85) 100%)', display: 'flex', alignItems: 'flex-end', padding: '1rem' }>>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }>>{item.label}</span>/
                </div>/
              </div>/
            ))}
          </div>/
        </div>/
      </section>/

      {/* ====== PROCESS SECTION ====== */}
      <section className="section reveal">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge">Our Process</span>/
            <h2 className="section-title">How It Works</h2>/
            <p className="section-subtitle">Getting professional electrical service has never been easier. Our streamlined 4-step process ensures a hassle-free experience from start to finish.</p>/
          </div>/
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }>>
            {[
              { step: '01', title: 'Call or Book', desc: 'Contact us by phone or fill out our online form. We will schedule a convenient time for your free on-site consultation and estimate.' },
              { step: '02', title: 'Free Assessment', desc: 'Our licensed electrician arrives on time, inspects your electrical system, explains findings clearly, and provides an upfront written quote.' },
              { step: '03', title: 'Expert Service', desc: 'Once approved, we complete the work efficiently using premium materials, keeping your home clean and minimizing disruption to your day.' },
              { step: '04', title: 'Final Walkthrough', desc: 'We inspect every detail together, answer your questions, provide maintenance tips, and back everything with our 5-year workmanship warranty.' },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: 'center' }>>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,215,0,0.08)', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)' }>>{item.step}</div>/
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.75rem' }>>{item.title}</h3>/
                <p style={{ fontSize: '0.85rem', color: 'var(--gray-300)', lineHeight: 1.65 }>>{item.desc}</p>/
              </div>/
            ))}
          </div>/
        </div>/
      </section>/

      {/* ====== TESTIMONIALS ====== */}
      <section id="reviews" className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge">Testimonials</span>/
            <h2 className="section-title">What Our Customers Say</h2>/
            <p className="section-subtitle">With over 500 five-star reviews, our customers consistently praise our professionalism, punctuality, quality workmanship, and fair pricing.</p>/
          </div>/
          <div className="stagger-children" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }>>
            {[
              { name: 'Sarah M.', location: 'Westfield, NJ', text: 'VoltPro upgraded our entire panel and installed recessed lighting throughout our home. The electricians were incredibly professional, cleaned up perfectly, and the results exceeded our expectations. Our home has never looked better!' },
              { name: 'James T.', location: 'Princeton, NJ', text: 'Had an emergency at 11pm when our breaker kept tripping. VoltPro had someone at our door in 45 minutes. They diagnosed a dangerous loose connection, fixed it on the spot, and potentially saved our home from a fire. Cannot recommend them enough.' },
              { name: 'Linda K.', location: 'Summit, NJ', text: 'We hired VoltPro for our restaurant renovation and they were amazing. They handled all the commercial wiring, kitchen hood connections, and even helped us pass our health inspection by ensuring all GFCI outlets were properly installed. True professionals.' },
            ].map((review) => (
              <div key={review.name} className="service-card" style={{ padding: '2rem' }>>
                <div style={{ color: '#facc15', fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '1rem' }>>★★★★★</div>/
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-300)', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }>>{review.text}</p>/
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }>>{review.name}</div>/
                  <div style={{ fontSize: '0.8rem', color: 'var(--gray-300)' }>>{review.location}</div>/
                </div>/
              </div>/
            ))}
          </div>/
        </div>/
      </section>/

      {/* ====== SERVICE AREAS ====== */}
      <section className="section reveal">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }>>
            <div className="reveal-left">
              <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=450&fit=crop" alt="Service area map" style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '6px' }> />
            </div>/
            <div className="reveal">
              <span className="badge">Service Area</span>/
              <h2 className="section-title" style={{ textAlign: 'left', marginTop: '1rem' }>>Proudly Serving the Tri-State Area</h2>/
              <p style={{ color: 'var(--gray-300)', lineHeight: 1.7, marginBottom: '2rem' }>>
                VoltPro Electric provides comprehensive residential and commercial electrical services across New Jersey, New York, and Connecticut. Our fleet of fully equipped service vehicles ensures rapid response times and efficient service delivery to homes and businesses within a 50-mile radius of our central hub.
              </p>/
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }>>
                {['Westfield, NJ', 'Princeton, NJ', 'Summit, NJ', 'Morristown, NJ', 'Edison, NJ', 'New Brunswick, NJ', 'White Plains, NY', 'Stamford, CT'].map((area) => (
                  <div key={area} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--gray-300)' }>>
                    <span style={{ color: 'var(--accent)' }>>📍</span> {area}/
                  </div>/
                ))}
              </div>/
            </div>/
          </div>/
        </div>/
      </section>/

      {/* ====== CONTACT / BOOKING ====== */}/
      <section id="contact" className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }>>
            <div className="reveal-left">
              <span className="badge">Get In Touch</span>/
              <h2 className="section-title" style={{ textAlign: 'left', marginTop: '1rem' }>>Book Your Free Estimate</h2>/
              <p style={{ color: 'var(--gray-300)', lineHeight: 1.7, marginBottom: '2rem' }>>
                Ready to get started? Fill out the form and one of our certified electricians will contact you within 2 hours during business hours. For emergencies, call us directly at (800) 555-1234. We offer free estimates on all projects over $500 and our pricing is always transparent with no hidden fees.
              </p>/
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }>>
                {[
                  { icon: '📞', label: 'Phone', value: '(800) 555-1234' },
                  { icon: '✉️', label: 'Email', value: 'info@voltproelectric.com' },
                  { icon: '🕐', label: 'Hours', value: 'Mon-Fri 7am-7pm, Sat 8am-4pm' },
                  { icon: '🚨', label: 'Emergency', value: '24/7 Available' },/
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }>>
                    <span style={{ fontSize: '1.5rem' }>>{item.icon}</span>/
                    <div>
                      <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gray-500)', fontFamily: 'var(--font-heading)' }>>{item.label}</div>/
                      <div style={{ fontSize: '0.95rem', fontWeight: 500 }>>{item.value}</div>/
                    </div>/
                  </div>/
                ))}
              </div>/
              <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=300&fit=crop" alt="VoltPro team" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px', marginTop: '2rem' }> />
            </div>/
            <div className="reveal-scale">
              <div className="service-card" style={{ padding: '2rem' }>>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.5rem' }>>Request Service</h3>/
                {formSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem' }>>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }>>✅</div>/
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '0.5rem' }>>Thank You!</h4>/
                    <p style={{ color: 'var(--gray-300)', fontSize: '0.9rem' }>>We will contact you within 2 hours to confirm your appointment.</p>/
                  </div>/
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }>>
                    <input type="text" placeholder="Full Name" value={formData.name> onChange={(e) => setFormData({ ...formData, name: e.target.value })} style={{ background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '4px', padding: '0.75rem 1rem', color: 'var(--white)', fontSize: '0.9rem' }} required />/
                    <input type="tel" placeholder="Phone Number" value={formData.phone> onChange={(e) => setFormData({ ...formData, phone: e.target.value })} style={{ background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '4px', padding: '0.75rem 1rem', color: 'var(--white)', fontSize: '0.9rem' }} required />/
                    <input type="email" placeholder="Email Address" value={formData.email> onChange={(e) => setFormData({ ...formData, email: e.target.value })} style={{ background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '4px', padding: '0.75rem 1rem', color: 'var(--white)', fontSize: '0.9rem' }} />/
                    <select value={formData.service> onChange={(e) => setFormData({ ...formData, service: e.target.value })} style={{ background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '4px', padding: '0.75rem 1rem', color: 'var(--white)', fontSize: '0.9rem' }}>
                      <option value="">Select Service</option>/
                      <option>Panel Upgrade</option>/
                      <option>Lighting Installation</option>/
                      <option>Rewiring</option>/
                      <option>EV Charger</option>/
                      <option>Electrical Inspection</option>/
                      <option>Emergency Repair</option>/
                      <option>Other</option>/
                    </select>/
                    <textarea placeholder="Describe your project..." rows={4} value={formData.message> onChange={(e) => setFormData({ ...formData, message: e.target.value })} style={{ background: 'var(--dark)', border: '1px solid var(--dark-border)', borderRadius: '4px', padding: '0.75rem 1rem', color: 'var(--white)', fontSize: '0.9rem', resize: 'vertical' }} />/
                    <button type="submit" className="project-btn btn-primary project-btn-full">Submit Request</button>/
                  </form>/
                )}
              </div>/
            </div>/
          </div>/
        </div>/
      </section>/

      {/* ====== FOOTER ====== */}
      <footer style={{ background: 'var(--dark-surface)', borderTop: '1px solid var(--dark-border)', padding: '4rem 1.5rem 2rem' }>>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3rem' }>>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }>>VoltPro Electric</div>/
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-300)', lineHeight: 1.7, marginBottom: '1rem' }>>Professional residential and commercial electrical services. Licensed, insured, and committed to safety and excellence since 2003.</p>/
              <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)' }>>License #EL-2847193</p>/
            </div>/
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--accent)' }>>Services</h4>/
              {['Panel Upgrades', 'Lighting', 'Rewiring', 'EV Chargers', 'Safety Inspections', 'Commercial'].map((s) => (
                <div key={s} style={{ fontSize: '0.8rem', color: 'var(--gray-300)', marginBottom: '0.5rem', cursor: 'pointer' }>>{s}</div>/
              ))}
            </div>/
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--accent)' }>>Company</h4>/
              {['About Us', 'Careers', 'Blog', 'Financing', 'Warranty', 'Contact'].map((s) => (
                <div key={s} style={{ fontSize: '0.8rem', color: 'var(--gray-300)', marginBottom: '0.5rem', cursor: 'pointer' }>>{s}</div>/
              ))}
            </div>/
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--accent)' }>>Contact</h4>/
              <div style={{ fontSize: '0.8rem', color: 'var(--gray-300)', lineHeight: 2 }>>
                <div>(800) 555-1234</div>/
                <div>info@voltproelectric.com</div>/
                <div>123 Industrial Blvd<br />Westfield, NJ 07090</div>
              </div>/
            </div>/
          </div>/
          <div style={{ borderTop: '1px solid var(--dark-border)', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--gray-500)' }>>
            © 2026 VoltPro Electric. All rights reserved. | Privacy Policy | Terms of Service
          </div>/
        </div>/
      </footer>/
    </>/
  );
}

'use client';

import { useState, FormEvent } from 'react';

export default function Home() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

 const scrollToSection = (id: string) => {
 const element = document.getElementById(id);
 if (element) {
 element.scrollIntoView({ behavior: 'smooth' });
 }
 setMenuOpen(false);
 };

 const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 setFormStatus('sending');
 const form = e.currentTarget;
 const formData = new FormData(form);

 try {
 const response = await fetch('https://api.web3forms.com/submit', {
 method: 'POST',
 body: formData,
 });
 if (response.ok) {
 setFormStatus('sent');
 form.reset();
 } else {
 setFormStatus('error');
 }
 } catch {
 setFormStatus('error');
 }
 };

 const services = [
 { title: 'Residential Electrical', desc: 'Wiring, outlets, switches, lighting installation, and whole-home electrical solutions.', price: 'From $89', icon: '' },
 { title: 'Commercial Services', desc: 'Office buildouts, retail lighting, industrial wiring, and code compliance upgrades.', price: 'Custom Quote', icon: '' },
 { title: 'EV Charging Stations', desc: 'Level 2 home charger installation, commercial charging networks, and Tesla wall connectors.', price: 'From $799', icon: '' },
 { title: 'Panel Upgrades', desc: 'Electrical panel replacement, capacity upgrades, and fuse box to breaker conversions.', price: 'From $1,499', icon: '' },
 { title: 'Generator Installation', desc: 'Whole-home backup generators, transfer switches, and automatic standby systems.', price: 'From $3,999', icon: '' },
 { title: 'Emergency Repairs', desc: '24/7 emergency electrical service for power outages, sparking outlets, and safety hazards.', price: 'Call Now', icon: '' },
 ];

 const testimonials = [
 { name: 'Catherine Moore', role: 'Homeowner', text: 'VoltPro upgraded our 1960s electrical panel and installed a whole-home generator. The work was meticulous, clean, and passed inspection on the first try. True professionals.', rating: 5 },
 { name: 'Daniel Kim', role: 'Tesla Owner', text: "They installed my Tesla wall connector in under 3 hours. Clean routing, proper permits, and they even helped me set up the app scheduling. Couldn't be happier.", rating: 5 },
 { name: 'Rachel Stevens', role: 'Restaurant Owner', text: 'When our kitchen hood wiring failed during dinner service, VoltPro had someone there in 45 minutes. They diagnosed and fixed the issue without us losing a single order.', rating: 5 },
 ];

 const serviceAreas = [
 'Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville',
 'Lakeway', 'Leander', 'Kyle', 'Buda', 'San Marcos', 'Dripping Springs',
 'Bee Cave', 'West Lake Hills', 'Hutto', 'Taylor',
 ];

 const navItems = ['Services', 'About', 'Reviews', 'Contact'];

 return (
 <div className="min-h-screen">
 {/* Skip to content */}
 <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-dark px-4 py-2 rounded-lg z-[100] font-bold">
 Skip to main content
 </a>

 {/* Emergency Banner */}
 <div className="emergency-banner">
 <div className="emergency-pulse" aria-hidden="true" />
 <span className="emergency-icon" aria-hidden="true"></span>
 <span>24/7 Emergency Electrical Service</span>
 <span className="emergency-divider" aria-hidden="true">|</span>
 <a href="tel:[PHONE]" className="emergency-phone">[PHONE]</a>
 </div>

 <header>
 <nav role="navigation" aria-label="Main navigation" className="nav-bar">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" aria-hidden="true"></div>
 <div>
 <span className="nav-brand">VoltPro</span>
 <span className="nav-tagline">ELECTRIC</span>
 </div>
 </div>
 <div className="nav-links hidden md:flex items-center gap-6">
 {navItems.map(item => (
 <button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-label={`Navigate to ${item} section`} className="nav-link">
 {item}
 </button>
 ))}
 <button onClick={() => scrollToSection('contact')} className="btn-primary rounded-full px-6 py-2.5 text-sm font-bold">
 Free Estimate
 </button>
 </div>
 <button
 aria-label={menuOpen ? 'Close menu' : 'Open menu'}
 aria-expanded={menuOpen}
 className="md:hidden text-accent p-2"
 onClick={() => setMenuOpen(!menuOpen)}
 >
 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
 {menuOpen ? (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
 ) : (
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
 )}
 </svg>
 </button>
 </nav>
{menuOpen && (
 <div className="md:hidden fixed top-[57px] left-0 right-0 z-40 p-6 space-y-4 nav-mobile-menu">
 {navItems.map(item => (
 <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="nav-mobile-link">
 {item}
 </button>
 ))}
 <button onClick={() => scrollToSection('contact')} className="btn-primary w-full rounded-full py-3 font-bold text-sm min-h-[48px]">
 Free Estimate
 </button>
 </div>
)}
 </header>

 <main id="main-content" role="main">
 {/* Hero Section */}
 <section aria-labelledby="hero-heading" className="hero-section">
 <div className="hero-inner">
 <div className="hero-content">
 <span className="badge">Licensed Master Electricians</span>
 <h2 id="hero-heading" className="hero-title">
 Power Your Life<br />
 <span>With Confidence.</span>
 </h2>
 <p className="hero-desc">
 From simple outlet repairs to complete commercial buildouts, our master electricians deliver safe, code-compliant solutions every time.
 </p>
 <div className="hero-actions">
 <button onClick={() => scrollToSection('contact')} className="btn-primary rounded-full px-8 py-4 text-base font-bold">
 Get Free Estimate
 </button>
 <a href="tel:[PHONE]" className="btn-outline rounded-full px-8 py-4 text-base font-bold inline-block text-center">
 Call [PHONE]
 </a>
 </div>
 <div className="hero-stats">
 {[
 { num: '18K+', label: 'Jobs Completed' },
 { num: '100%', label: 'Code Compliant' },
 { num: '24/7', label: 'Emergency' },
 { num: '4.9', label: 'Google Rating' },
 ].map((s, i) => (
 <div key={i}>
 <div className="stat-number">{s.num}</div>
 <div className="stat-label">{s.label}</div>
 </div>
 ))}
 </div>
 </div>
 <div className="hero-image-wrap">
 <img
 src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80"
 alt="Licensed electrician working on electrical panel"
 className="hero-image"
 />
 <div className="hero-image-overlay" aria-hidden="true" />
 </div>
 </div>
 </section>

 {/* Services Section */}
 <section id="services" aria-labelledby="services-heading" className="section services-section">
 <div className="container">
 <div className="section-header">
 <span className="badge">What We Do</span>
 <h2 id="services-heading" className="section-title">Electrical Services</h2>
 <p className="section-subtitle">Comprehensive electrical solutions for homes and businesses. Licensed, insured, and guaranteed.</p>
 </div>
 <div className="services-grid">
 {services.map((s, i) => (
 <article key={i} className="service-card reveal hover-lift">
 <div className="service-icon" aria-hidden="true">{s.icon}</div>
 <h3 className="service-name">{s.title}</h3>
 <p className="service-desc">{s.desc}</p>
 <div className="service-price">{s.price}</div>
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* Before / After Section */}
 <section aria-labelledby="ba-heading" className="section">
 <div className="container">
 <div className="section-header">
 <span className="badge">Our Work</span>
 <h2 id="ba-heading" className="section-title">Before &amp; After</h2>
 <p className="section-subtitle">See the VoltPro difference. Real projects, real results.</p>
 </div>
 <div className="grid md:grid-cols-2 gap-8">
 <div className="reveal">
 <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Outdated electrical panel before upgrade" />
 <div>
 <span>Before</span>
 <p>Outdated 100-amp fuse box with overloaded circuits and no GFCI protection.</p>
 </div>
 </div>
 <div className="reveal">
 <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80" alt="Modern 200-amp panel after upgrade" />
 <div>
 <span>After</span>
 <p>Brand-new 200-amp panel with arc-fault breakers, whole-home surge protection, and room for expansion.</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* About Section */}
 <section id="about" aria-labelledby="about-heading" className="section">
 <div className="container">
 <div className="grid md:grid-cols-2 gap-16 items-center">
 <div className="reveal">
 <img
 src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80"
 alt="VoltPro Electric certified team"

 />
 </div>
 <div className="reveal">
 <span className="badge">Why VoltPro</span>
 <h2 id="about-heading" className="section-title">18,000+ Jobs Done Right</h2>
 <p>
 VoltPro Electric has been powering homes and businesses since 2007. Our team of licensed master electricians brings decades of combined experience to every project.
 </p>
 <div className="grid grid-cols-2 gap-4">
 {[
 { icon: '', text: 'Master Electricians' },
 { icon: '', text: 'Licensed & Insured' },
 { icon: '', text: 'Code Compliant' },
 { icon: '', text: 'Free Estimates' },
 { icon: '', text: 'Lifetime Warranty' },
 { icon: '', text: 'EV Certified' },
 ].map((item, i) => (
 <div key={i} className="flex items-center gap-2">
 <span aria-hidden="true">{item.icon}</span>
 <span>{item.text}</span>
 </div>
 ))}
 </div>

 {/* Licensing Badges */}
 <div>
 {['Licensed #EL-2007-8921', 'BBB A+ Rated', 'ESA Member', 'NEC Compliant'].map((badge, i) => (
 <span key={i}>
 {badge}
 </span>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Business Hours */}
 <section aria-labelledby="hours-heading" className="section">
 <div className="container">
 <div className="section-header">
 <span className="badge">Availability</span>
 <h2 id="hours-heading" className="section-title">Business Hours</h2>
 </div>
 <div className="reveal">
 <div>
 {[
 { day: 'Monday - Friday', hours: '7:00 AM - 7:00 PM' },
 { day: 'Saturday', hours: '8:00 AM - 4:00 PM' },
 { day: 'Sunday', hours: 'Closed' },
 ].map((row, i) => (
 <div key={i}>
 <span>{row.day}</span>
 <span>{row.hours}</span>
 </div>
 ))}
 </div>
 <div>
 <p>
 24/7 Emergency Service Available
 </p>
 <p>
 Power outage? Sparking wires? Call us anytime — day or night.
 </p>
 <a href="tel:[PHONE]">
 [PHONE]
 </a>
 </div>
 </div>
 </div>
 </section>

 {/* Service Area */}
 <section aria-labelledby="area-heading" className="section">
 <div className="container">
 <div className="section-header">
 <span className="badge">Coverage</span>
 <h2 id="area-heading" className="section-title">Service Area</h2>
 <p className="section-subtitle">Proudly serving the greater Austin metro and surrounding communities.</p>
 </div>
 <div className="areas-grid reveal">
 {serviceAreas.map((area, i) => (
 <span key={i} className="area-tag">{area}</span>
 ))}
 </div>
 <p className="areas-counties">Travis County &bull; Williamson County &bull; Hays County &bull; Bastrop County</p>

 {/* Google Maps Embed */}
 <div className="reveal">
 <iframe
 src="[WEBSITE]/maps/embed?pb=!1m18!1m12!1m3!1d110771.66236885537!2d-97.807658!3d30.267153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000"
 width="100%"
 height="350"

 allowFullScreen
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 title="VoltPro Electric service area map — Austin, TX"
 />
 </div>
 </div>
 </section>

 {/* Reviews */}
 <section id="reviews" aria-labelledby="reviews-heading" className="section">
 <div className="container">
 <div className="section-header">
 <span className="badge">Testimonials</span>
 <h2 id="reviews-heading" className="section-title">What Our Clients Say</h2>
 </div>
 <div className="testimonials-grid">
 {testimonials.map((t, i) => (
 <article key={i} className="testimonial-card reveal">
 <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
 {[...Array(t.rating)].map((_, j) => (
 <span key={j} aria-hidden="true"></span>
 ))}
 </div>
 <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
 <div className="testimonial-author">
 <p className="testimonial-name">{t.name}</p>
 <p className="testimonial-location">{t.role}</p>
 </div>
 </article>
 ))}
 </div>
 </div>
 </section>

 {/* Contact Section */}
 <section id="contact" aria-labelledby="contact-heading" className="section contact-section">
 <div className="container">
 <div className="section-header">
 <span className="badge">Get Started</span>
 <h2 id="contact-heading" className="section-title">Request Your Free Estimate</h2>
 <p className="section-subtitle">Tell us about your electrical needs and we&apos;ll provide a detailed estimate. No obligations, no surprises.</p>
 </div>
 <div className="contact-grid">
 {/* Contact Info */}
 <div className="reveal">
 <div className="contact-details">
 <div className="contact-item">
 <div className="contact-icon" aria-hidden="true"></div>
 <div>
 <p className="contact-label">Call Us</p>
 <a href="tel:[PHONE]" className="contact-value">[PHONE]</a>
 </div>
 </div>
 <div className="contact-item">
 <div className="contact-icon" aria-hidden="true"></div>
 <div>
 <p className="contact-label">Email Us</p>
 <a href="mailto:[EMAIL]" className="contact-value">[EMAIL]</a>
 </div>
 </div>
 <div className="contact-item">
 <div className="contact-icon" aria-hidden="true"></div>
 <div>
 <p className="contact-label">Visit Us</p>
 <p className="contact-value-muted">[ADDRESS]</p>
 </div>
 </div>
 <div className="contact-item">
 <div className="contact-icon" aria-hidden="true"></div>
 <div>
 <p className="contact-label">WhatsApp</p>
 <a href="https://wa.me/[PHONE]" target="_blank" rel="noopener noreferrer" className="contact-value">Chat on WhatsApp</a>
 </div>
 </div>
 </div>

 {/* Social Links */}
 <div>
 <p className="contact-label">Follow Us</p>
 <div>
 {[
 { label: 'Facebook', href: '[FACEBOOK_URL]', icon: 'f' },
 { label: 'Instagram', href: '[INSTAGRAM_URL]', icon: 'ig' },
 { label: 'Google', href: '[WEBSITE]/maps?cid=voltproelectric', icon: 'G' },
 { label: 'Yelp', href: '[YELP_URL]/voltproelectric', icon: 'y' },
 ].map((social, i) => (
 <a
 key={i}
 href={social.href}
 target="_blank"
 rel="noopener noreferrer"
 aria-label={`Follow us on ${social.label}`}
 >
 {social.icon}
 </a>
 ))}
 </div>
 </div>
 </div>

 {/* Contact Form with Web3Forms */}
 <div className="estimate-form reveal">
 {formStatus === 'sent' ? (
 <div className="form-success">
 <div className="form-success-icon" aria-hidden="true"></div>
 <h3 className="form-success-title">Request Sent!</h3>
 <p className="form-success-text">We&apos;ll get back to you within 1 business day. For emergencies, call [PHONE].</p>
 <button onClick={() => setFormStatus('idle')} className="btn-primary rounded-full px-6 py-3 font-bold">
 Send Another Request
 </button>
 </div>
 ) : (
 <form onSubmit={handleFormSubmit} noValidate>
 <input type="hidden" name="access_key" value="[WEB3FORMS_KEY]" />
 <input type="hidden" name="subject" value="New Estimate Request - VoltPro Electric" />
 <input type="checkbox" name="botcheck" />

 <div className="form-row">
 <div>
 <label htmlFor="name" className="contact-label">Your Name *</label>
 <input id="name" name="name" type="text" required placeholder="John Smith" />
 </div>
 <div>
 <label htmlFor="email" className="contact-label">Email *</label>
 <input id="email" name="email" type="email" required placeholder="john@example.com" />
 </div>
 </div>
 <div className="form-row">
 <div>
 <label htmlFor="phone" className="contact-label">Phone *</label>
 <input id="phone" name="phone" type="tel" required placeholder="[PHONE]" />
 </div>
 <div>
 <label htmlFor="service-type" className="contact-label">Service Needed</label>
 <select id="service-type" name="service">
 <option value="">Select service</option>
 <option value="residential">Residential</option>
 <option value="commercial">Commercial</option>
 <option value="ev-charging">EV Charging</option>
 <option value="panel-upgrade">Panel Upgrade</option>
 <option value="generator">Generator</option>
 <option value="emergency">Emergency</option>
 </select>
 </div>
 </div>
 <div>
 <label htmlFor="details" className="contact-label">Describe Your Needs</label>
 <textarea id="details" name="message" rows={4} placeholder="Tell us about your electrical project..." className="form-textarea" />
 </div>
 <button
 type="submit"
 disabled={formStatus === 'sending'}
 className="btn-primary w-full py-4 rounded-xl font-bold text-base"

 >
 {formStatus === 'sending' ? 'Sending...' : 'Get Free Estimate'}
 </button>
 {formStatus === 'error' && (
 <p>
 Something went wrong. Please try again or call us directly.
 </p>
 )}
 <p className="form-note">No obligation. We respond within 1 business day.</p>
 </form>
 )}
 </div>
 </div>
 </div>
 </section>
 </main>

 {/* Footer */}
 <footer role="contentinfo" className="footer">
 <div className="container">
 <div>
 <div className="flex items-center gap-3">
 <div className="w-8 h-8 rounded-lg flex items-center justify-center" aria-hidden="true"></div>
 <span>VoltPro Electric</span>
 </div>
 <div>
 <a href="tel:[PHONE]">[PHONE]</a>
 <span>|</span>
 <a href="mailto:[EMAIL]">[EMAIL]</a>
 </div>
 </div>
 <div className="footer-badges">
 {['Licensed #EL-2007-8921', 'BBB A+ Rated', 'ESA Member', 'NEC 2023 Compliant', 'EVITP Certified'].map((b, i) => (
 <span key={i}>{b}</span>
 ))}
 </div>
 <p className="footer-copy">&copy; 2024 VoltPro Electric. All rights reserved.</p>
<div className="text-center py-3 text-xs opacity-50 hover:opacity-80 transition-opacity"><span>Designed by </span><a href="https://adeshpreet.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline">Adeshpreet Singh</a></div>
 </div>
 </footer>
 </div>
 );
}

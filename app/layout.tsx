import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoltPro Electric | Licensed Electrical Services | 24/7 Emergency",
  description:
    "VoltPro Electric - Residential and commercial electrical services, EV charging installation, panel upgrades, and 24/7 emergency repairs. Licensed master electricians. Free estimates.",
  keywords:
    "electrician, electrical services, EV charger installation, panel upgrade, emergency electrician, residential wiring, commercial electrical",
  openGraph: {
    title: "VoltPro Electric | Licensed Electrical Services",
    description:
      "Residential and commercial electrical services, EV charging installation, panel upgrades, and 24/7 emergency repairs. Free estimates.",
    type: "website",
    locale: "en_US",
    siteName: "VoltPro Electric",
    url: "https://voltproelectric.com",
    images: [
      {
        url: "/images/photo-1621905252507-b35492cc74b4.jpg",
        width: 1200,
        height: 630,
        alt: "VoltPro Electric - Licensed Master Electricians",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VoltPro Electric | Licensed Electrical Services",
    description:
      "Residential and commercial electrical services, EV charging installation, panel upgrades, and 24/7 emergency repairs.",
    images: [
      "/images/photo-1621905252507-b35492cc74b4.jpg",
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Electrician",
              name: "VoltPro Electric",
              telephone: "+15555678658",
              email: "info@voltproelectric.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1234 Electric Ave",
                addressLocality: "Austin",
                addressRegion: "TX",
                postalCode: "78701",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 30.2672,
                longitude: -97.7431,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "08:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "320",
              },
              areaServed: [
                "Austin",
                "Round Rock",
                "Cedar Park",
                "Georgetown",
                "Pflugerville",
                "Lakeway",
                "Leander",
                "Kyle",
                "Buda",
                "San Marcos",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const obs = new IntersectionObserver((entries) => {
                  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
                }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
                document.addEventListener('DOMContentLoaded', () => {
                  document.querySelectorAll('.reveal,.reveal-left,.reveal-scale').forEach(el => obs.observe(el));
                });
                const mo = new MutationObserver(() => {
                  document.querySelectorAll('.reveal:not(.visible),.reveal-left:not(.visible),.reveal-scale:not(.visible)').forEach(el => obs.observe(el));
                });
                mo.observe(document.body, { childList: true, subtree: true });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
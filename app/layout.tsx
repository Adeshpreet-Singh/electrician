import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VoltPro Electric | Licensed Electrical Services",
  description: "VoltPro Electric - Residential and commercial electrical services, EV charging installation, panel upgrades. Licensed master electricians.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
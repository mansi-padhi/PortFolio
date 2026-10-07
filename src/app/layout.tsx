import type { Metadata, Viewport } from "next";
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter_Tight({ subsets: ["latin"], variable: "--font-inter-tight", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

const description = `${profile.name} — ${profile.title} and ${profile.currentRole.title} at ${profile.currentRole.company}. ${profile.tagline}`;

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description,
    type: "website",
  },
  icons: {
    icon: `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0d0d0d"/><text x="32" y="41" font-family="Arial,sans-serif" font-size="24" font-weight="600" fill="#f4f2ee" text-anchor="middle">${profile.initials}</text></svg>`,
    )}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f2ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

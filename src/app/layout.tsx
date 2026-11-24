import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800"],
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Divya Salvi — UI UX Designer",
  description:
    "Divya Salvi is a UI UX Designer from Rajasthan, India, designing user-centred apps and websites in Figma: research, wireframes, prototypes and design systems. Open to full-time roles.",
  authors: [{ name: "Divya Salvi" }],
  openGraph: {
    title: "Divya Salvi — UI UX Designer",
    description:
      "A designer's mind, inside a Figma workspace. Selected work: Evently, LinguaNest, PATS and TripMate.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F5F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

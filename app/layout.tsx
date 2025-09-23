import "./globals.css";
import type { Metadata } from "next";
import { clsx } from "clsx";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdarwish-portfolio.vercel.app"),
  title: {
    default: "Ahmed B. Darwish — AI Strategy Leader",
    template: "%s — Ahmed B. Darwish"
  },
  description: "AI Strategy Leader | Multi-AI Agents Expert | GenAI Business Strategist. Portfolio of projects, patents, and achievements.",
  openGraph: {
    title: "Ahmed B. Darwish — AI Strategy Leader",
    description: "AI Strategy Leader | Multi-AI Agents Expert | GenAI Business Strategist.",
    url: "https://abdarwish-portfolio.vercel.app",
    siteName: "Ahmed Darwish Portfolio",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed B. Darwish — AI Strategy Leader",
    description: "AI Strategy Leader | Multi-AI Agents Expert | GenAI Business Strategist.",
    creator: "@abdarwish",
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx("h-full bg-[#0b0f19]")}> 
      <body className={clsx("min-h-full text-foreground")}>{children}</body>
    </html>
  );
}

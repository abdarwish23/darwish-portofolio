import "./globals.css";
import type { Metadata } from "next";
import { clsx } from "clsx";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abdarwish.com"),
  title: {
    default: "Ahmed B. Darwish — AI Strategy Leader | Multi-AI Agents Expert",
    template: "%s — Ahmed B. Darwish"
  },
  description: "AI Strategy Leader with 16+ years in telecommunications, specializing in Multi-AI Agent systems, GenAI, and enterprise AI transformation. 2 USPTO patents, proven track record in telecom innovation.",
  keywords: ["AI Strategy", "Multi-AI Agents", "GenAI", "LangGraph", "Generative AI", "Telecommunications", "AI Innovation", "Machine Learning", "Enterprise AI", "AI Product Strategy", "Tokyo", "Ahmed Darwish"],
  authors: [{ name: "Ahmed Bahaaeldin Darwish" }],
  creator: "Ahmed Bahaaeldin Darwish",
  openGraph: {
    title: "Ahmed B. Darwish — AI Strategy Leader | Multi-AI Agents Expert",
    description: "AI Strategy Leader with 16+ years in telecommunications, specializing in Multi-AI Agent systems, GenAI, and enterprise AI transformation.",
    url: "https://www.abdarwish.com",
    siteName: "Ahmed Darwish Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed B. Darwish - AI Strategy Leader"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed B. Darwish — AI Strategy Leader",
    description: "AI Strategy Leader specializing in Multi-AI Agents, GenAI, and enterprise AI transformation.",
    creator: "@abdarwish",
    images: ["/opengraph-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx("h-full bg-[#0b0f19]")}>
      <head>
        <StructuredData />
      </head>
      <body className={clsx("min-h-full text-foreground")}>{children}</body>
    </html>
  );
}

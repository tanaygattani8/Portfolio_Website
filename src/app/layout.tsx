import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tanay Gattani - Data Analyst & AI Agent Builder",
  description:
    "Portfolio of Tanay Gattani, a data analyst specializing in scalable analytics pipelines, predictive modeling, and multi-agent AI systems. MS in Information Science at UW-Madison.",
  keywords: [
    "Tanay Gattani",
    "Data Analyst",
    "Data Analytics",
    "AI Agents",
    "Machine Learning",
    "Portfolio",
    "UW-Madison",
  ],
  authors: [{ name: "Tanay Gattani" }],
  openGraph: {
    title: "Tanay Gattani - Data Analyst & AI Agent Builder",
    description:
      "Portfolio showcasing data analytics, engineering, and AI agent systems.",
    type: "website",
  },
};

import BackgroundEffects from "@/components/atoms/BackgroundEffects";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased text-foreground bg-background`}
    >
      <body className="min-h-full flex flex-col relative">
        <BackgroundEffects />
        {children}
      </body>
    </html>
  );
}

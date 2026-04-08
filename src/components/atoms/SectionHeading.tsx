"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  delay?: number;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  delay = 0,
}: SectionHeadingProps) {
  return (
    <ScrollReveal delay={delay} className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-foreground font-heading">
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-20 bg-accent rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="mt-4 text-secondary text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </ScrollReveal>
  );
}

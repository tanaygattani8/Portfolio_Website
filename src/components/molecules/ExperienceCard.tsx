"use client";

import GlowCard from "../atoms/GlowCard";
import ScrollReveal from "../atoms/ScrollReveal";

interface ExperienceCardProps {
  company: string;
  title: string;
  dates: string;
  location: string;
  bullets: string[];
  index: number;
  side: "left" | "right";
}

export default function ExperienceCard({
  company,
  title,
  dates,
  location,
  bullets,
  index,
  side,
}: ExperienceCardProps) {
  return (
    <ScrollReveal delay={index * 0.15} direction={side === "left" ? "left" : "right"}>
      <GlowCard className="p-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-accent/20 text-accent border border-accent/30">
            {dates}
          </span>
        </div>
        <h3 className="text-base font-bold text-accent uppercase tracking-wide mb-1">
          {title} | {company}
        </h3>
        <p className="text-secondary text-xs italic mb-3">{location}</p>
        <ul className="space-y-2">
          {bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-secondary text-sm leading-relaxed flex gap-2"
            >
              <span className="text-accent mt-1.5 shrink-0">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </GlowCard>
    </ScrollReveal>
  );
}

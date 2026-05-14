"use client";

import { useState } from "react";
import SectionHeading from "../atoms/SectionHeading";
import ScrollReveal from "../atoms/ScrollReveal";
import GlowCard from "../atoms/GlowCard";
import { recommendations } from "@/data/recommendations";

export default function RecommendationsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="recommendations" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Recommendations"
          subtitle="What colleagues and mentors say about working with me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {recommendations.map((rec, i) => {
            const isExpanded = expandedId === rec.id;
            const previewLength = 280;
            const needsTruncation = rec.text.length > previewLength;
            const displayText =
              isExpanded || !needsTruncation
                ? rec.text
                : rec.text.slice(0, previewLength).trimEnd() + "…";

            return (
              <ScrollReveal key={rec.id} delay={i * 0.15}>
                <GlowCard className="p-8 h-full flex flex-col">
                  {/* LinkedIn badge */}
                  <div className="flex items-center gap-1 mb-6">
                    <svg
                      className="w-5 h-5 text-[#0A66C2]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-xs font-medium text-[#0A66C2] uppercase tracking-wider">
                      LinkedIn
                    </span>
                  </div>

                  {/* Quote icon */}
                  <svg
                    className="w-8 h-8 text-accent/15 mb-4 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                  </svg>

                  {/* Recommendation text */}
                  <div className="flex-1 mb-6">
                    <p className="text-secondary text-sm leading-relaxed whitespace-pre-line">
                      {displayText}
                    </p>
                    {needsTruncation && (
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : rec.id)
                        }
                        className="mt-3 text-accent text-xs font-semibold uppercase tracking-wider hover:underline cursor-pointer transition-colors"
                      >
                        {isExpanded ? "Show less" : "Read more"}
                      </button>
                    )}
                  </div>

                  {/* Recommender info */}
                  <div className="border-t border-border pt-5 mt-auto">
                    <div className="flex items-center gap-4">
                      {/* Avatar placeholder with initials */}
                      <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <span className="text-accent font-bold text-sm">
                          {rec.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-foreground font-semibold text-sm truncate">
                          {rec.name}
                        </p>
                        <p className="text-secondary text-xs leading-snug mt-0.5">
                          {rec.title}
                        </p>
                        <p className="text-secondary/60 text-xs mt-1 italic">
                          {rec.relationship} · {rec.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import SectionHeading from "../atoms/SectionHeading";
import ScrollReveal from "../atoms/ScrollReveal";
import Badge from "../atoms/Badge";
import { skills } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Skills" subtitle="The tools I reach for across the data + AI stack." />

        <div className="mt-12 space-y-8">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h3 className="md:w-56 shrink-0 text-xs font-bold uppercase tracking-[0.3em] text-accent">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} label={item} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

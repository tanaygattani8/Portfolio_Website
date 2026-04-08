"use client";

import SectionHeading from "../atoms/SectionHeading";
import ExperienceCard from "../molecules/ExperienceCard";
import ScrollReveal from "../atoms/ScrollReveal";
import { profile } from "@/data/profile";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Journey" subtitle="My professional and academic path." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-border via-accent/30 to-border" />

          {/* Left Column: Experience */}
          <div className="space-y-8">
            <ScrollReveal>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
                Experience
              </h3>
            </ScrollReveal>
            {profile.experience.map((exp, i) => (
              <ExperienceCard
                key={`${exp.company}-${exp.title}`}
                company={exp.company}
                title={exp.title}
                dates={exp.dates}
                location={exp.location}
                bullets={exp.bullets}
                index={i}
                side="left"
              />
            ))}
          </div>

          {/* Right Column: Education */}
          <div className="space-y-8">
            <ScrollReveal>
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
                Education
              </h3>
            </ScrollReveal>
            {profile.education.map((edu, i) => (
              <ExperienceCard
                key={edu.institution}
                company={edu.institution}
                title={edu.degree}
                dates={edu.dates}
                location=""
                bullets={[
                  `Coursework: ${edu.coursework}`,
                ]}
                index={i}
                side="right"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import SectionHeading from "../atoms/SectionHeading";
import ScrollReveal from "../atoms/ScrollReveal";
import { profile } from "@/data/profile";

export default function CertificationsSection() {
  if (!profile.certifications || profile.certifications.length === 0) {
    return null;
  }

  return (
    <section id="certifications" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Certifications" />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-4">
              {profile.certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-6 py-3 rounded-xl text-sm md:text-base text-secondary bg-surface border border-border hover:border-accent/40 hover:text-foreground transition-all shadow-sm"
                >
                  🏆 {cert}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

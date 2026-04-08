"use client";

import Image from "next/image";
import SectionHeading from "../atoms/SectionHeading";
import ScrollReveal from "../atoms/ScrollReveal";
import { profile } from "@/data/profile";

export default function SummarySection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About" />

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-12 bg-surface border border-border rounded-3xl p-8 md:p-12">
          {/* About Text */}
          <ScrollReveal delay={0.2} className="flex-1 space-y-6">
            <p className="text-secondary text-lg leading-relaxed text-center lg:text-left">
              {profile.aboutIntro}
            </p>
            {profile.aboutBullets.map((paragraph, index) => (
              <p key={index} className="text-secondary text-lg leading-relaxed text-center lg:text-left">
                {paragraph}
              </p>
            ))}
            <p className="text-secondary text-lg leading-relaxed text-center lg:text-left">
              {profile.aboutOutro}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import SectionHeading from "../atoms/SectionHeading";
import ScrollReveal from "../atoms/ScrollReveal";
import ProjectCard from "../molecules/ProjectCard";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="A few highlights across data engineering, ML, and AI agent systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all"
          >
            View all {projects.length} projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

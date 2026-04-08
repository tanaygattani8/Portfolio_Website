"use client";

import Image from "next/image";
import GlowCard from "../atoms/GlowCard";
import Badge from "../atoms/Badge";
import ScrollReveal from "../atoms/ScrollReveal";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <GlowCard className="group h-full">
        <div className="relative h-52 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-white text-foreground border border-white/60 shadow-sm backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-secondary text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
            >
              View on GitHub
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </GlowCard>
    </ScrollReveal>
  );
}

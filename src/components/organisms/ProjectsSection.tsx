"use client";

import { useState, useEffect, useCallback } from "react";
import SectionHeading from "../atoms/SectionHeading";
import ProjectCard from "../molecules/ProjectCard";
import { projects } from "@/data/projects";

const CARDS_PER_SLIDE = 3;
const AUTO_ADVANCE_MS = 10000;

export default function ProjectsSection() {
  const totalSlides = Math.ceil(projects.length / CARDS_PER_SLIDE);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
  }, [currentSlide, totalSlides, goToSlide]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const startIndex = currentSlide * CARDS_PER_SLIDE;
  const visibleProjects = projects.slice(startIndex, startIndex + CARDS_PER_SLIDE);

  return (
    <section id="projects" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Selected work across data analytics, engineering, and AI agent systems."
        />

        {/* Carousel */}
        <div className="relative">
          {/* Cards grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-400"
            style={{ opacity: isAnimating ? 0 : 1 }}
          >
            {visibleProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous projects"
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 text-foreground z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next projects"
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 text-foreground z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "w-7 h-2.5 bg-accent"
                  : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <p className="text-center text-sm text-secondary mt-3">
          {currentSlide + 1} / {totalSlides} &mdash; {projects.length} projects total
        </p>
      </div>
    </section>
  );
}

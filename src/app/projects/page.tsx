import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import SectionHeading from "@/components/atoms/SectionHeading";
import ProjectsExplorer from "@/components/organisms/ProjectsExplorer";

export const metadata: Metadata = {
  title: "Projects | Tanay Gattani",
  description:
    "Data engineering, analytics, machine learning, and AI agent projects by Tanay Gattani, with case studies.",
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Projects"
            subtitle="Filter by discipline, then open any project for the full case study."
          />
          <Suspense fallback={null}>
            <ProjectsExplorer />
          </Suspense>
        </div>
      </section>
    </main>
  );
}

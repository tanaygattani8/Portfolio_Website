"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../molecules/ProjectCard";
import Badge from "../atoms/Badge";
import { projects } from "@/data/projects";

const CATEGORIES = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsExplorer() {
  const router = useRouter();
  const params = useSearchParams();
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState<string | null>(params.get("p"));

  const open = useCallback(
    (id: string) => {
      setOpenId(id);
      router.replace(`/projects?p=${id}`, { scroll: false });
    },
    [router]
  );

  const close = useCallback(() => {
    setOpenId(null);
    router.replace("/projects", { scroll: false });
  }, [router]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const active = projects.find((p) => p.id === openId);

  return (
    <>
      {/* Filter chips */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all cursor-pointer ${
              filter === cat
                ? "bg-accent text-white border-accent"
                : "bg-surface text-secondary border-border hover:border-accent/40 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            onCaseStudy={() => open(project.id)}
          />
        ))}
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {active?.caseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${active.title} case study`}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-background border border-border rounded-2xl shadow-2xl max-w-2xl w-full my-8 p-8"
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-secondary hover:bg-surface hover:text-foreground transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                {active.category}
              </span>
              <h2 className="mt-2 text-2xl font-bold font-heading text-foreground pr-8">
                {active.title}
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {active.techStack.map((t) => (
                  <Badge key={t} label={t} />
                ))}
              </div>

              <div className="mt-6 space-y-5">
                {(
                  [
                    ["The problem", active.caseStudy.problem],
                    ["Approach", active.caseStudy.approach],
                    ["My contribution", active.caseStudy.contribution],
                    ["Results", active.caseStudy.results],
                  ] as const
                ).map(([label, body]) => (
                  <div key={label}>
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-1.5">
                      {label}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {active.githubUrl && (
                  <a
                    href={active.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-accent text-white hover:bg-black transition-colors"
                  >
                    View on GitHub
                  </a>
                )}
                {active.demoUrl && (
                  <a
                    href={active.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-border text-foreground hover:border-accent transition-colors"
                  >
                    Live demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

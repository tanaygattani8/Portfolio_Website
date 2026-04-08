"use client";

import { motion } from "framer-motion";
import ScrollReveal from "../atoms/ScrollReveal";

interface CareerStepProps {
  title: string;
  description: string;
  isCurrent: boolean;
  index: number;
}

export default function CareerStep({
  title,
  description,
  isCurrent,
  index,
}: CareerStepProps) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        whileHover={{ y: -4 }}
        className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
          isCurrent
            ? "border-accent bg-accent/5 shadow-lg shadow-accent/10"
            : "border-dashed border-border bg-surface hover:border-secondary"
        }`}
      >
        {isCurrent && (
          <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full text-xs font-bold bg-accent text-black">
            I am here! ▼
          </div>
        )}
        <h3
          className={`text-sm font-bold uppercase tracking-wider mb-2 ${
            isCurrent ? "text-accent" : "text-white"
          }`}
        >
          {title}
        </h3>
        <p className="text-secondary text-sm leading-relaxed">{description}</p>
      </motion.div>
    </ScrollReveal>
  );
}

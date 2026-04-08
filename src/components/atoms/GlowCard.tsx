"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "rgba(245, 166, 35, 0.15)",
}: GlowCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        boxShadow: `0 20px 60px ${glowColor}, 0 0 0 1px rgba(245, 166, 35, 0.3)`,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative bg-surface border border-border rounded-2xl overflow-hidden backdrop-blur-sm transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GoldButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "filled" | "outlined";
  onClick?: () => void;
  className?: string;
}

export default function GoldButton({
  children,
  href,
  variant = "filled",
  onClick,
  className = "",
}: GoldButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer";

  const variants = {
    filled:
      "bg-[#111827] text-white hover:bg-black shadow-xl shadow-black/10 border border-black",
    outlined:
      "border-2 border-[#111827]/10 text-[#111827] hover:bg-[#111827]/5 hover:border-[#111827] shadow-sm backdrop-blur-md",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}

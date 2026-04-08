"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Problem Solver",
  "AI Product Developer",
  "Data Analyst",
  "Data Engineer",
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    // End of typing
    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2500);
      return;
    }

    // End of deleting
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 40 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <div className="flex items-center justify-center min-h-[1.5em]">
      <span className="text-secondary font-medium tracking-widest uppercase text-base sm:text-lg md:text-xl">
        {roles[index].substring(0, subIndex)}
      </span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="w-[2px] h-5 sm:h-6 bg-blue-600 ml-1.5"
      />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/20" />
      
      {/* Pulsing Ripples / Waves */}
      {[0, 3, 6, 9].map((delay) => (
        <motion.div
          key={delay}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ 
            scale: [1, 5], 
            opacity: [0, 0.08, 0] 
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-500/10 rounded-full"
        />
      ))}

      {/* Side Glow Vignettes */}
      <div className="absolute top-1/2 -left-64 -translate-y-1/2 w-[800px] h-[1000px] bg-blue-400/5 blur-[160px] rounded-full" />
      <div className="absolute top-1/2 -right-64 -translate-y-1/2 w-[800px] h-[1000px] bg-sky-500/5 blur-[160px] rounded-full" />
    </div>
  );
}

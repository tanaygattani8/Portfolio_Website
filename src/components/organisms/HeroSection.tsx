"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GoldButton from "../atoms/GoldButton";
import { profile } from "@/data/profile";
import Typewriter from "../atoms/Typewriter";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroSection() {
  const [imgOk, setImgOk] = useState(true);
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
        {/* Left: text */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.h1
            {...fade(0.15)}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading tracking-tight text-foreground leading-[1.05]"
          >
            {profile.name}
          </motion.h1>

          <motion.div {...fade(0.3)} className="mt-5 flex justify-center lg:justify-start">
            <Typewriter />
          </motion.div>

          <motion.p
            {...fade(0.45)}
            className="mt-6 text-secondary text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            {profile.heroAbout}
          </motion.p>

          <motion.div
            {...fade(0.6)}
            className="mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start items-center"
          >
            <GoldButton variant="filled" href="/projects">
              View Projects
            </GoldButton>
            <GoldButton variant="outlined" href={profile.resumeUrl} download>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </GoldButton>
            <GoldButton variant="outlined" href="#contact">
              Get in Touch
            </GoldButton>
          </motion.div>

          {/* Highlights */}
          <motion.ul
            {...fade(0.75)}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-secondary"
          >
            {profile.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {h}
              </li>
            ))}
          </motion.ul>

          {/* Social links */}
          <motion.div
            {...fade(0.9)}
            className="mt-6 flex gap-5 justify-center lg:justify-start text-secondary"
          >
            <a href={profile.linkedin} aria-label="LinkedIn" className="hover:text-accent transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href={profile.github} aria-label="GitHub" className="hover:text-accent transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right: photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 h-[24rem] sm:w-80 sm:h-[26rem] lg:w-[27rem] lg:h-[33rem]">
            <div className="absolute -inset-6 bg-blue-400/10 blur-3xl rounded-full" />
            {imgOk ? (
              <Image
                src={profile.headshot}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 20rem, 27rem"
                onError={() => setImgOk(false)}
                className="relative object-cover rounded-3xl border border-border shadow-2xl shadow-black/10"
              />
            ) : (
              <div className="relative w-full h-full rounded-3xl border border-border shadow-2xl shadow-black/10 bg-surface flex items-center justify-center">
                <span className="text-7xl font-bold font-heading text-accent">{initials}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex justify-center pt-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </a>
    </section>
  );
}

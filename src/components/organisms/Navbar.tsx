"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold font-heading tracking-wider text-accent cursor-pointer"
          >
            {initials}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-widest text-secondary hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white bg-accent px-4 py-2 rounded-full hover:bg-black transition-colors cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-foreground block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-foreground block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-foreground block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium uppercase tracking-widest text-secondary hover:text-accent transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href={profile.resumeUrl}
              download
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="inline-flex items-center gap-2 text-base font-semibold uppercase tracking-widest text-white bg-accent px-6 py-2.5 rounded-full hover:bg-black transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

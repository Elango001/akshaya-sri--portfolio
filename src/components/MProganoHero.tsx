"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

export function MProganoHero() {

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.04,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" }
    },
  };

  return (
    <section id="home" className="scroll-mt-24 pt-4 sm:pt-6 pb-12 sm:pb-16 border-b border-[var(--border-subtle)] bg-transparent sq-dot-grid relative overflow-hidden">
      {/* Very mild S-shaped flowing ambient wave blending soft grey with white */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden select-none">
        <svg
          className="w-full h-full object-cover opacity-65 dark:opacity-15"
          viewBox="0 0 1440 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="mild-s-curve" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e2e8f2" stopOpacity="0.65" />
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#dbe3ef" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </linearGradient>
            <filter id="soft-blur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="80" />
            </filter>
          </defs>
          <path
            d="M-80,40 C320,180 480,-60 820,160 C1160,340 1280,120 1520,280 L1520,540 C1240,380 1080,560 760,380 C440,200 240,440 -80,280 Z"
            fill="url(#mild-s-curve)"
            filter="url(#soft-blur)"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-7 sm:space-y-8"
        >
          {/* Top Squared Status Eyebrow */}
          <motion.div variants={item} className="flex items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-[var(--border-subtle)] text-xs font-mono tracking-[0.16em] uppercase text-[var(--text-muted)]">
              <span className="w-2 h-2 rounded-full bg-[#ff4500] animate-pulse shrink-0 shadow-[0_0_10px_#ff4500]" />
              <span>AI Systems &amp; Product Management • Salem, India</span>
            </div>
          </motion.div>

          {/* Headline: Space Grotesk Display, deep ink in light mode, pure bone in dark mode, with complex systems & tools blended */}
          <motion.h1
            variants={item}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[4.65rem] font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] max-w-5xl break-words"
          >
            I shape{" "}
            <span className="text-blend-grey-white font-extrabold">
              complex systems
            </span>{" "}
            into{" "}
            <span className="text-blend-grey-white font-extrabold">
              tools
            </span>{" "}
            people actually use.
          </motion.h1>

          {/* Personal Intro Bento Card: Squared Media Style */}
          <motion.div
            variants={item}
            className="sq-card p-6 sm:p-8 lg:p-10 space-y-7"
          >
            <div className="space-y-3.5 max-w-5xl">
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[var(--text-primary)] tracking-tight text-balance">
                Akshaya Sri B: Product Builder at the intersection of AI and real user problems.
              </h2>
              <p className="font-sans text-base sm:text-lg font-normal text-[var(--text-secondary)] leading-relaxed">
                I find problems worth solving, define what to build, and build it hands-on with the people who’ll use it. My work spans AI-powered discovery for everyday users and workflow automation for staff and businesses.
              </p>
            </div>

            {/* Three pillars in Bento Inset Cells */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 pt-6 border-t border-[var(--border-subtle)] items-stretch">
              <div className="sq-card-inset p-5 space-y-2 flex flex-col justify-start">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#ff4500]">01 //</span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Product Builder
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm font-normal text-[var(--text-secondary)] leading-relaxed">
                  I start with the user’s problem, then write the PRD, set the MVP scope and ship a working prototype. LocalLens AI, a Gemini-powered Google Maps discovery layer, started from a problem I faced myself.
                </p>
              </div>

              <div className="sq-card-inset p-5 space-y-2 flex flex-col justify-start">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#ff4500]">02 //</span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Technical Translator
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm font-normal text-[var(--text-secondary)] leading-relaxed">
                  I connect how teams actually work to machine learning and API choices, so engineers, users and stakeholders all understand what we’re deciding and why.
                </p>
              </div>

              <div className="sq-card-inset p-5 space-y-2 flex flex-col justify-start">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold tracking-wider text-[#ff4500]">03 //</span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[var(--text-primary)]">
                    Detail-Oriented
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm font-normal text-[var(--text-secondary)] leading-relaxed">
                  I design for trust: clear interfaces, source attribution and verification status on every result, so users know what to rely on.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

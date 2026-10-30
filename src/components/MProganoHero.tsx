"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export function MProganoHero() {
  const { personal } = PORTFOLIO_DATA;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section id="home" className="pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[var(--border-subtle)] framer-dot-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8 sm:space-y-10"
        >
          {/* Top descriptor */}
          <motion.div variants={item} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-[var(--text-muted)] tracking-wide">
              AI Systems & Product Management • Salem, India
            </p>
          </motion.div>

          {/* Headline (Responsive font sizes preventing any horizontal overflow) */}
          <motion.h1
            variants={item}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-semibold tracking-tight text-[var(--text-secondary)] leading-[1.12] max-w-5xl break-words"
          >
            I shape{" "}
            <span className="text-[var(--text-primary)] font-bold">
              complex systems
            </span>{" "}
            into{" "}
            <span className="text-[var(--text-primary)] font-bold">
              tools
            </span>{" "}
            people actually use.
          </motion.h1>

          {/* Action Pills: Clean, minimal (Go on button removed) */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#connect"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Ways to Connect
            </a>
            <a
              href="/Akshaya_Sri_B_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-1.5 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Resume (PDF)
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </motion.div>

          {/* Personal Intro Card */}
          <motion.div
            variants={item}
            className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-10 lg:p-12 shadow-[var(--card-shadow)] space-y-8"
          >
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                Hello 👋 I’m {personal.name}.
              </h2>
              <p className="text-sm sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                I help when your team needs a tool that doesn’t exist yet, or the software you rely on no longer fits the work.
              </p>
              <p className="text-xs sm:text-base text-[var(--text-muted)] leading-relaxed">
                I work out what would help, then design and build the software with the people using it—whether it’s multimodal discovery for everyday users or operational automation for enterprise workflows.
              </p>
            </div>

            {/* 3 Pillar Traits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-[var(--border-subtle)]">
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  Product Builder
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  I work out what’s worth building, then build hands-on. The aim is a tool people can actually use.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  Technical Translator
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  I connect how teams work with machine learning and API choices, so everyone sees what we’re deciding and why.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)]">
                  Detail-Oriented
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  I make interfaces clear to use, with the exact source attribution and recovery paths people need.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            variants={item}
            className="rounded-2xl sm:rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/60 p-6 sm:p-8"
          >
            <blockquote className="text-sm sm:text-base md:text-lg text-[var(--text-primary)] font-medium italic leading-relaxed">
              “Consistently demonstrated exceptional technical prowess and an innate ability to find ingenious solutions to complex problems.”
            </blockquote>
            <div className="mt-3 text-xs font-mono text-[var(--text-muted)]">
              – Smart India Hackathon Evaluation Jury & Academic Mentors
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export function MProganoHero() {
  const { personal, stats } = PORTFOLIO_DATA;

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section id="home" className="pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[var(--border-subtle)] framer-dot-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-10"
        >
          {/* Top small descriptor */}
          <motion.div variants={item} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs sm:text-sm font-medium text-[var(--text-muted)] tracking-wide">
              AI Systems & Product Management • Salem, India
            </p>
          </motion.div>

          {/* The Signature mprogano Headline */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold tracking-tight text-[var(--text-secondary)] leading-[1.08] max-w-5xl"
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

          {/* Action Pills */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#connect"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              Ways to Connect
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full text-sm font-semibold border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Go on.. <ArrowDown className="w-3.5 h-3.5" />
            </a>
            <a
              href="/Akshaya_Sri_B_Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-full text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Download Resume (PDF)
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </motion.div>

          {/* The Personal Intro Panel (Full width, expansive, mprogano signature card) */}
          <motion.div
            variants={item}
            className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-[var(--card-shadow)] space-y-8"
          >
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Hello 👋 I’m {personal.name}.
              </h2>
              <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed">
                I help when your team needs a tool that doesn’t exist yet, or the software you rely on no longer fits the work.
              </p>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                I work out what would help, then design and build the software with the people using it—whether it’s multimodal discovery for everyday users or operational automation for enterprise workflows.
              </p>
            </div>

            {/* 3 Pillar Traits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[var(--border-subtle)]">
              <div className="space-y-2.5">
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  Product Builder
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  I work out what’s worth building, then build hands-on. The aim is a tool people can actually use.
                </p>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  Technical Translator
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  I connect how teams work with machine learning and API choices, so everyone sees what we’re deciding and why.
                </p>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-base font-bold text-[var(--text-primary)]">
                  Detail-Oriented
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  I make interfaces clear to use, with the exact source attribution and recovery paths people need.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quote Endorsement Card */}
          <motion.div
            variants={item}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/60 p-8 sm:p-10"
          >
            <blockquote className="text-lg sm:text-xl text-[var(--text-primary)] font-medium italic leading-relaxed">
              “Consistently demonstrated exceptional technical prowess and an innate ability to find ingenious solutions to complex problems.”
            </blockquote>
            <div className="mt-4 text-xs font-mono text-[var(--text-muted)]">
              – Smart India Hackathon Evaluation Jury & Academic Mentors
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

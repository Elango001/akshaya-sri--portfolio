"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowDown, ArrowUpRight, FileText, Terminal } from "lucide-react";
import { motion, type Variants } from "framer-motion";

export function HeroSection() {
  const { personal, stats } = PORTFOLIO_DATA;

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
    hidden: { opacity: 0, y: 16 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-28 md:pb-28 border-b border-[var(--border-subtle)] tech-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          {/* Subtle status tag */}
          <motion.div variants={item} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              Product Builder • Salem, India
            </span>
          </motion.div>

          {/* Core Headline */}
          <motion.h1
            variants={item}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.12] max-w-4xl"
          >
            Turning machine learning systems into products people actually use.
          </motion.h1>

          {/* Lead Narrative */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] font-normal leading-relaxed max-w-3xl"
          >
            I’m <span className="text-[var(--text-primary)] font-medium">{personal.name}</span>, a final-year AI & Data Science engineer with a track record of identifying unaddressed user needs and driving 0-to-1 delivery. 
            I wrote the PRD and led delivery of <strong className="text-[var(--text-primary)] font-medium">LocalLens AI</strong> (a multimodal search layer), 
            automated academic follow-up workflows saving <strong className="text-[var(--text-primary)] font-medium">40%+ faculty hours</strong>, 
            and digitized family manufacturing operations.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={item}
            className="pt-2 flex flex-wrap items-center gap-4 text-sm font-medium"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-opacity"
            >
              View Selected Work
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#prd-specs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] transition-colors"
            >
              <Terminal className="w-4 h-4 text-sky-500" />
              Explore PRD Specs
            </a>

            <a
              href="/Akshaya_Sri_B_Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <FileText className="w-4 h-4" />
              Download Resume
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </motion.div>

          {/* Quiet Ledger Stats */}
          <motion.div
            variants={item}
            className="pt-10 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]/70 hover:border-[var(--border-strong)] transition-all"
              >
                <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-[var(--text-primary)] mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5 leading-snug">
                  {stat.context}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

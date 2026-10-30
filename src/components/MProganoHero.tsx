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
    <section id="home" className="pt-8 pb-10 sm:pt-12 sm:pb-14 border-b border-[var(--border-subtle)] bg-transparent framer-dot-grid relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6 sm:space-y-7"
        >
          {/* Top descriptor */}
          <motion.div variants={item} className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p className="text-xs sm:text-sm font-medium text-[var(--text-muted)] tracking-wide">
              AI Systems & Product Management • Salem, India
            </p>
          </motion.div>

          {/* Headline in bold high-contrast aesthetic floating on background */}
          <motion.h1
            variants={item}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[var(--text-primary)] leading-[1.12] max-w-5xl break-words"
          >
            I shape complex systems into tools people actually use.
          </motion.h1>

          {/* Personal Intro Card: Ultra-Sheer Glass */}
          <motion.div
            variants={item}
            className="rounded-3xl sheer-glass p-6 sm:p-8 lg:p-9 space-y-6 hover:border-white/25 transition-all mt-4"
          >
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                Hello 👋 I’m {personal.name}.
              </h2>
              <p className="text-base sm:text-lg md:text-xl font-medium text-[var(--text-primary)] leading-relaxed">
                I help when your team needs a tool that doesn’t exist yet, or the software you rely on no longer fits the work.
              </p>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                I work out what would help, then design and build the software with the people using it, whether it’s multimodal discovery for everyday users or operational automation for enterprise workflows.
              </p>
            </div>

            {/* 3 Pillar Traits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-5 sm:pt-6 border-t border-[var(--border-subtle)]">
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  Product Builder
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] leading-relaxed">
                  I work out what’s worth building, then build hands on. The aim is a tool people can actually use.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  Technical Translator
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] leading-relaxed">
                  I connect how teams work with machine learning and API choices, so everyone sees what we’re deciding and why.
                </p>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
                  Detail Oriented
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[var(--text-secondary)] leading-relaxed">
                  I make interfaces clear to use, with the exact source attribution and recovery paths people need.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

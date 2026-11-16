"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SelectedWorksSection() {
  const { caseStudies } = PORTFOLIO_DATA;
  const [activeProject, setActiveProject] = useState(0);

  const current = caseStudies[activeProject];

  return (
    <section id="works" className="scroll-mt-24 py-12 md:py-16 border-b border-[var(--border-subtle)] bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-muted)] block font-semibold">
            Selected Works
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            What this looks like in practice.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Tools for consumer discovery, academic workflows, and enterprise operations. Each example explains the problem and my role.
          </p>
        </div>

        {/* Project Selector with Bouncy Spring Slider */}
        <div className="flex overflow-x-auto pb-2 gap-2 mb-7 no-scrollbar p-1 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-[var(--border-subtle)] w-fit max-w-full">
          {caseStudies.map((item, idx) => {
            const isSelected = activeProject === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveProject(idx)}
                className={`relative px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-display whitespace-nowrap transition-colors cursor-pointer ${
                  isSelected
                    ? "text-[var(--text-primary)] font-bold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="squared-work-active-pill"
                    className="absolute inset-0 rounded-xl bg-white dark:bg-white/[0.1] border border-black/10 dark:border-white/15 -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <span className="flex items-center gap-2">
                  <span>{item.title.split(":")[0]}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff4500]" />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bento Case Study Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="sq-card p-6 sm:p-8 lg:p-10 space-y-7"
          >
            {/* Title & Domain Meta */}
            <div className="space-y-3 pb-6 border-b border-[var(--border-subtle)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                  {current.domain} • {current.timeline}
                </span>
                <span className="text-xs font-mono px-3.5 py-1.5 rounded-full sq-card-inset text-[#ff4500] font-bold border border-[#ff4500]/25 shadow-xs">
                  {current.heroMetric.value} {current.heroMetric.label}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                {current.title}
              </h3>
              <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                {current.subtitle}
              </p>
            </div>

            {/* 2-Column Responsive Body */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column: Context & What was needed */}
              <div className="space-y-6">
                {/* 1. Context */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] font-bold">
                    Context
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {current.problemStatement.overview}
                  </p>
                </div>

                {/* 2. What was needed */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] font-bold">
                    What was needed
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[var(--text-primary)] font-semibold leading-relaxed">
                    {current.userResearch.coreInsight}
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--text-secondary)] font-sans pt-1">
                    {current.problemStatement.keyFrictions.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#ff4500] font-bold">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Work I did & What Changed */}
              <div className="space-y-6">
                {/* 3. Work I did */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-[var(--text-muted)] font-bold">
                    Work I did
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {current.solutionStrategy.approach}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {current.productArtifacts.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-medium sq-card-inset text-[var(--text-primary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. What Changed (Squared Inset) */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400 font-bold">
                    What Changed
                  </h4>
                  <div className="p-5 rounded-2xl sq-card-inset space-y-3">
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[var(--text-primary)] font-medium font-sans">
                      {current.outcomes.quantitative.map((out, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)] italic font-sans font-medium">
                      "{current.retrospective.whatWorked}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 flex flex-wrap items-center justify-between border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] gap-3">
              <span className="font-mono">Role: <strong className="text-[var(--text-primary)] font-semibold font-display">{current.role}</strong></span>
              <a
                href="#connect"
                className="inline-flex items-center gap-1.5 font-display font-semibold text-xs sm:text-sm text-[#ff4500] hover:text-[#ff5714] transition-colors"
              >
                <span>Discuss this project</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

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
    <section id="works" className="py-10 md:py-14 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-5 space-y-1.5">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
            Selected Works
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            What this looks like in practice.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Tools for consumer discovery, academic workflows, and enterprise operations. Each example explains the problem and my role.
          </p>
        </div>

        {/* Project Selector Pills with Animated Sliding Pill */}
        <div className="flex overflow-x-auto pb-2 gap-2 mb-6 no-scrollbar">
          {caseStudies.map((item, idx) => {
            const isSelected = activeProject === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveProject(idx)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  isSelected
                    ? "text-[var(--text-primary)] font-bold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] bg-[var(--bg-surface)]"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="active-work-pill"
                    className="absolute inset-0 rounded-full bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.title.split(":")[0]}
              </button>
            );
          })}
        </div>

        {/* Expansive Case Study Card with Tightened Internal Spacing */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 lg:p-9 shadow-[var(--card-shadow)] space-y-6"
          >
            {/* Title & Domain Meta */}
            <div className="space-y-2 pb-5 border-b border-[var(--border-subtle)]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                  {current.domain} • {current.timeline}
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)] font-semibold">
                  {current.heroMetric.value} {current.heroMetric.label}
                </span>
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                {current.subtitle}
              </p>
            </div>

            {/* 2-Column Responsive Body */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column: Context & What was needed */}
              <div className="space-y-5">
                {/* 1. Context */}
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    Context
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {current.problemStatement.overview}
                  </p>
                </div>

                {/* 2. What was needed */}
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    What was needed
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-primary)] font-medium leading-relaxed">
                    {current.userResearch.coreInsight}
                  </p>
                  <ul className="space-y-1 text-xs text-[var(--text-muted)] pt-1">
                    {current.problemStatement.keyFrictions.map((f, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[var(--text-primary)]">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Work I did & What Changed */}
              <div className="space-y-5">
                {/* 3. Work I did */}
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    Work I did
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {current.solutionStrategy.approach}
                  </p>
                  <div className="pt-1.5 flex flex-wrap gap-1.5">
                    {current.productArtifacts.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. What Changed */}
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold">
                    What Changed
                  </h4>
                  <div className="p-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/60 space-y-2">
                    <ul className="space-y-1.5 text-xs text-[var(--text-primary)] font-medium">
                      {current.outcomes.quantitative.map((out, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-[var(--text-muted)] pt-1.5 border-t border-[var(--border-subtle)] italic">
                      "{current.retrospective.whatWorked}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 flex flex-wrap items-center justify-between border-t border-[var(--border-subtle)] text-xs text-[var(--text-muted)] gap-3">
              <span>My Role: <strong className="text-[var(--text-primary)] font-medium">{current.role}</strong></span>
              <a
                href="#connect"
                className="inline-flex items-center gap-1 text-[var(--text-primary)] font-semibold hover:underline"
              >
                Discuss this project <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

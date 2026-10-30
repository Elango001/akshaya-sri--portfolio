"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  Lightbulb, 
  AlertCircle, 
  TrendingUp, 
  ArrowUpRight 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CaseStudiesSection() {
  const { caseStudies } = PORTFOLIO_DATA;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"strategy" | "problem" | "artifacts" | "outcomes">("strategy");

  const study = caseStudies[selectedIndex];

  return (
    <section id="work" className="py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2">
            Selected Work
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Case Studies in Product Execution
          </h2>
          <p className="mt-2 text-base text-[var(--text-secondary)]">
            From discovering unaddressed user friction to authoring PRDs, making architectural trade-offs, and shipping working software.
          </p>
        </div>

        {/* Project Selector with Framer Motion Animated Pill */}
        <div className="flex overflow-x-auto pb-3 gap-2 border-b border-[var(--border-subtle)] mb-8">
          {caseStudies.map((item, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedIndex(idx);
                  setActiveTab("strategy");
                }}
                className={`relative px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  isSelected
                    ? "text-[var(--text-primary)] font-semibold"
                    : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCaseTab"
                    className="absolute inset-0 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span>{item.title.split(":")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Main Case Study Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xs overflow-hidden"
          >
            {/* Header info */}
            <div className="p-6 sm:p-10 border-b border-[var(--border-subtle)]">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                  <span className="px-2.5 py-1 rounded bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                    {study.domain}
                  </span>
                  <span>•</span>
                  <span>{study.role}</span>
                  <span>•</span>
                  <span>{study.timeline}</span>
                </div>

                {/* Hero Metric badge */}
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)]">
                  <span className="font-mono text-base font-bold text-emerald-600 dark:text-emerald-400">
                    {study.heroMetric.value}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)]">
                    {study.heroMetric.label}
                  </span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
                {study.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-4xl">
                {study.summary}
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex overflow-x-auto border-b border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/40 px-6 sm:px-10 text-xs sm:text-sm font-medium gap-6">
              {[
                { key: "strategy", label: "Strategy & Trade-offs", icon: Lightbulb },
                { key: "problem", label: "Problem & Research", icon: AlertCircle },
                { key: "artifacts", label: "Architecture & Stack", icon: Users },
                { key: "outcomes", label: "Outcomes & Retrospective", icon: TrendingUp },
              ].map(({ key, label, icon: TabIcon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as any)}
                  className={`py-3.5 border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
                    activeTab === key
                      ? "border-[var(--text-primary)] text-[var(--text-primary)] font-semibold"
                      : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                  }`}
                >
                  <TabIcon className="w-3.5 h-3.5" />
                  {label}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="p-6 sm:p-10 text-sm leading-relaxed text-[var(--text-secondary)]">
              {/* TAB 1: STRATEGY & TRADEOFFS */}
              {activeTab === "strategy" && (
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Approach & System Thesis
                    </h4>
                    <p className="text-[var(--text-primary)] text-base leading-relaxed">
                      {study.solutionStrategy.approach}
                    </p>
                  </div>

                  {/* Trade-offs */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
                      Key Engineering & Product Trade-Offs
                    </h4>
                    <div className="space-y-3">
                      {study.solutionStrategy.tradeoffs.map((t, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/60 grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                          <div>
                            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 block font-semibold mb-1">
                              Chosen Direction: {t.choice}
                            </span>
                            <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                              {t.why}
                            </p>
                          </div>
                          <div className="border-t md:border-t-0 md:border-l border-[var(--border-subtle)] pt-3 md:pt-0 md:pl-4">
                            <span className="text-xs font-mono text-rose-500 block font-semibold mb-1">
                              Rejected Alternative:
                            </span>
                            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                              {t.rejectedAlternative}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* MVP vs Out of Scope */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/30">
                      <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 block font-semibold mb-2">
                        In Scope for V1 Delivery:
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-sm">
                        {study.solutionStrategy.mvpScope.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-500">✓</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/30">
                      <span className="text-xs font-mono text-[var(--text-muted)] block font-semibold mb-2">
                        Deferred Out of Scope:
                      </span>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-[var(--text-muted)]">
                        {study.solutionStrategy.outOfScope.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span>✕</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PROBLEM & RESEARCH */}
              {activeTab === "problem" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      The Underlying Friction
                    </h4>
                    <p className="text-[var(--text-primary)] text-base">
                      {study.problemStatement.overview}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {study.problemStatement.keyFrictions.map((f, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/50 text-xs sm:text-sm"
                      >
                        <span className="font-mono text-xs text-[var(--text-muted)] block mb-1">
                          Friction Point 0{i + 1}
                        </span>
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/40 text-xs sm:text-sm">
                    <span className="font-mono text-xs text-[var(--text-muted)] block mb-1">
                      Target User & Core Insight:
                    </span>
                    <p className="text-[var(--text-primary)] font-medium">
                      {study.userResearch.coreInsight}
                    </p>
                    <p className="text-xs text-[var(--text-muted)] mt-1">
                      {study.userResearch.targetUsers}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: ARCHITECTURE & STACK */}
              {activeTab === "artifacts" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      System Architecture Flow
                    </h4>
                    <div className="p-4 rounded-xl font-mono text-xs sm:text-sm bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-primary)]">
                      {study.productArtifacts.architectureDescription}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {study.productArtifacts.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-md text-xs font-mono bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: OUTCOMES & RETROSPECTIVE */}
              {activeTab === "outcomes" && (
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-3">
                      Measurable Results
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.outcomes.quantitative.map((out, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/60 text-xs sm:text-sm text-[var(--text-primary)] font-medium"
                        >
                          <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block mb-1">
                            Result 0{i + 1}
                          </span>
                          {out}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/30">
                      <span className="text-xs font-mono text-[var(--text-muted)] block mb-1">
                        What Worked:
                      </span>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                        {study.retrospective.whatWorked}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/30">
                      <span className="text-xs font-mono text-[var(--text-muted)] block mb-1">
                        V2 Next Steps:
                      </span>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                        {study.retrospective.whatNextV2}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

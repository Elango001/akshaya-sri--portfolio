"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  FileText, 
  Copy, 
  Check, 
  Target, 
  AlertCircle 
} from "lucide-react";
import { motion } from "framer-motion";

export function InteractivePrdViewer() {
  const { prds } = PORTFOLIO_DATA;
  const [selectedPrdIndex, setSelectedPrdIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"goals" | "stories" | "specs" | "metrics" | "risks">("goals");
  const [copied, setCopied] = useState(false);

  const currentPrd = prds[selectedPrdIndex];

  const copyPrdSummary = () => {
    navigator.clipboard.writeText(
      `${currentPrd.title}\n\nProblem:\n${currentPrd.content.problem}\n\nGoals:\n${currentPrd.content.goals.join("\n")}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="prd-specs" className="py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2">
              Artifacts & Specifications
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              Production PRD Explorer
            </h2>
            <p className="mt-2 text-base text-[var(--text-secondary)]">
              Live Product Requirements Documents authored for shipped systems, covering user stories, functional specs, non-goals, and defensive risk mitigation.
            </p>
          </div>

          {/* Document Switcher */}
          <div className="flex gap-2">
            {prds.map((prd, i) => (
              <button
                key={prd.id}
                onClick={() => setSelectedPrdIndex(i)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors border ${
                  selectedPrdIndex === i
                    ? "bg-[var(--text-primary)] text-[var(--bg-base)] border-transparent font-medium"
                    : "bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {prd.product}
              </button>
            ))}
          </div>
        </div>

        {/* Document Console */}
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] shadow-xs overflow-hidden">
          {/* Top Header */}
          <div className="px-5 py-3 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 opacity-60">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--text-muted)] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--text-muted)] inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--text-muted)] inline-block" />
              </div>
              <span className="text-xs font-mono text-[var(--text-muted)] pl-2 border-l border-[var(--border-subtle)]">
                specifications/{currentPrd.id}.md
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded border border-[var(--border-subtle)] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
                {currentPrd.status}
              </span>
            </div>

            <button
              onClick={copyPrdSummary}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
              {copied ? "Copied" : "Copy Brief"}
            </button>
          </div>

          {/* Sub Navigation */}
          <div className="flex overflow-x-auto border-b border-[var(--border-subtle)] bg-[var(--bg-surface)] px-5 text-xs font-mono gap-6">
            {[
              { key: "goals", label: "01. Problem & Goals" },
              { key: "stories", label: "02. User Stories" },
              { key: "specs", label: "03. Functional Specs" },
              { key: "metrics", label: "04. Success Metrics" },
              { key: "risks", label: "05. Risk Mitigation" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key as any)}
                className={`py-3 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === key
                    ? "border-[var(--text-primary)] text-[var(--text-primary)] font-semibold"
                    : "border-transparent text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Body */}
          <div className="p-6 sm:p-9 text-[var(--text-secondary)] text-sm leading-relaxed min-h-[340px]">
            {activeTab === "goals" && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2">
                    Problem Definition
                  </h4>
                  <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/40 text-[var(--text-primary)]">
                    {currentPrd.content.problem}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/20">
                    <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 block font-semibold mb-3">
                      Goals (In Scope)
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      {currentPrd.content.goals.map((g, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-500">✓</span>
                          <span>{g}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/20">
                    <span className="font-mono text-xs text-rose-500 block font-semibold mb-3">
                      Non-Goals (Out of Scope)
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-muted)]">
                      {currentPrd.content.nonGoals.map((ng, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span>✕</span>
                          <span>{ng}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "stories" && (
              <div className="space-y-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  User Stories & Friction Scenarios
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentPrd.content.userStories.map((s, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/40 space-y-1.5 text-xs sm:text-sm"
                    >
                      <div className="font-mono text-xs text-[var(--text-muted)]">
                        Story 0{i + 1}
                      </div>
                      <p>
                        <span className="text-[var(--text-muted)]">As a </span>
                        <span className="text-[var(--text-primary)] font-medium">{s.asA}</span>
                      </p>
                      <p>
                        <span className="text-[var(--text-muted)]">I want to </span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium">{s.iWantTo}</span>
                      </p>
                      <p>
                        <span className="text-[var(--text-muted)]">So that </span>
                        <span className="text-[var(--text-secondary)]">{s.soThat}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="space-y-3 font-mono text-xs sm:text-sm">
                <h4 className="uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  Functional Requirements
                </h4>
                {currentPrd.content.functionalReqs.map((req, i) => {
                  const [code, ...rest] = req.split(":");
                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/40 flex items-start gap-3"
                    >
                      <span className="px-2 py-0.5 rounded bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold shrink-0">
                        {code}
                      </span>
                      <span className="text-[var(--text-secondary)] font-sans mt-0.5">
                        {rest.join(":")}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === "metrics" && (
              <div className="space-y-4">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  North Star Metrics & Guardrails
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {currentPrd.content.successMetrics.map((sm, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/40 space-y-1"
                    >
                      <div className="text-xs font-mono text-[var(--text-muted)]">
                        {sm.metric}
                      </div>
                      <div className="font-mono text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                        {sm.target}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] leading-relaxed">
                        {sm.rationale}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "risks" && (
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  Defensive Engineering & Edge Cases
                </h4>
                {currentPrd.content.risksAndMitigations.map((rm, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/40 space-y-1.5 text-xs sm:text-sm"
                  >
                    <div className="text-rose-500 font-mono text-xs font-medium">
                      Risk: {rm.risk}
                    </div>
                    <div className="text-[var(--text-secondary)] pl-3 border-l-2 border-emerald-500/50">
                      <span className="text-[var(--text-muted)] text-xs block">Mitigation:</span>
                      {rm.mitigation}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

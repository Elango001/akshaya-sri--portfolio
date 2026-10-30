"use client";

import React from "react";
import { motion } from "framer-motion";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-10 md:py-14 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-6 sm:mb-8 space-y-1.5">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Where I’m most useful.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            I help work out what custom software would be useful, then stay hands-on through PRDs, user discovery, and engineering delivery.
          </p>
        </div>

        {/* 2 Symmetrical, Equal-Height Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
          {/* Capability 1 */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-[var(--card-shadow)] flex flex-col justify-between h-full"
          >
            {/* Top info with consistent min-heights for baseline alignment */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                01 • ZERO TO ONE DELIVERY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] min-h-[2.5rem] sm:min-h-[3.25rem] flex items-center">
                Build the tool you’re missing
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed min-h-[3rem] sm:min-h-[3.5rem]">
                I help you work out what a useful first version needs to do, so you can start without trying to build everything at once.
              </p>
            </div>

            {/* Bottom Inner Card with Matching Min-Height and Top-Aligned Content */}
            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/60 flex flex-col justify-start gap-2 min-h-[160px] sm:min-h-[180px]">
              <div className="text-xs font-mono font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                EXAMPLE IN PRACTICE: LOCALLENS AI
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Identified that temporal local promotions are invisible on Google Maps. Wrote the PRD, defined MVP boundaries, and co-built a working prototype with Gemini API and FastAPI that delivers grounded, attributed answers in under 800ms.
              </p>
            </div>
          </motion.div>

          {/* Capability 2 */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-8 shadow-[var(--card-shadow)] flex flex-col justify-between h-full"
          >
            {/* Top info with consistent min-heights for baseline alignment */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                02 • WORKFLOW MODERNIZATION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] min-h-[2.5rem] sm:min-h-[3.25rem] flex items-center">
                Improve the systems you rely on
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed min-h-[3rem] sm:min-h-[3.5rem]">
                I trace the workarounds with your team, then design and build around the rules and exceptions that existing manual systems miss.
              </p>
            </div>

            {/* Bottom Inner Card with Matching Min-Height and Top-Aligned Content */}
            <div className="p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/60 flex flex-col justify-start gap-2 min-h-[160px] sm:min-h-[180px]">
              <div className="text-xs font-mono font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                EXAMPLE IN PRACTICE: SONA SCHEDULER
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Automated student counseling follow-ups across departments, cutting administrative hours by over 40%. Digitized traditional lumber cubic math into a single-screen POS, slashing checkout time from 15 minutes to under 2 minutes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { motion } from "framer-motion";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 md:py-28 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag & Heading */}
        <div className="mb-14 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
            Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Where I’m most useful.
          </h2>
          <p className="text-base sm:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            I help work out what custom software would be useful, then stay hands-on through PRDs, user discovery, and engineering delivery.
          </p>
        </div>

        {/* 2 Expansive Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Capability 1 */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 sm:p-10 shadow-[var(--card-shadow)] flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                01 • Zero to One Delivery
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Build the tool you’re missing
              </h3>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                I help you work out what a useful first version needs to do, so you can start without trying to build everything at once.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/60 space-y-2">
              <div className="text-xs font-mono font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                Example in practice: LocalLens AI
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Identified that temporal local promotions are invisible on Google Maps. Wrote the PRD, defined MVP boundaries, and co-built a working prototype with Gemini API and FastAPI that delivers grounded, attributed answers in under 800ms.
              </p>
            </div>
          </motion.div>

          {/* Capability 2 */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 sm:p-10 shadow-[var(--card-shadow)] flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                02 • Workflow Modernization
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Improve the system you rely on
              </h3>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                I trace the workarounds with your team, then design and build around the rules and exceptions the current system keeps missing.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/60 space-y-2">
              <div className="text-xs font-mono font-semibold text-[var(--text-primary)] uppercase tracking-wider">
                Example in practice: SONA Scheduler & Manufacturing
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Interviewed professors struggling with manual student counseling spreadsheets, building an automated tool that cut administrative time by over 40%. In our family business, digitized volumetric lumber math into a single-screen POS that reduced order processing from 15 minutes to under 2 minutes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

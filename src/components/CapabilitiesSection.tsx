"use client";

import React from "react";
import { motion } from "framer-motion";

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="scroll-mt-24 py-12 md:py-16 border-b border-[var(--border-subtle)] bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-muted)] block font-semibold">
            Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            Where I’m most useful.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            I help work out what custom software would be useful, then stay hands on through PRDs, user discovery, and engineering delivery.
          </p>
        </div>

        {/* 2 Symmetrical, Equal-Height Squared Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Capability 1 */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.22 }}
            className="sq-card p-6 sm:p-8 flex flex-col justify-between h-full hover:border-[#ff4500]/40 transition-all group"
          >
            {/* Top info */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-mono text-[#ff4500] uppercase tracking-wider block font-bold">
                01 // ZERO TO ONE DELIVERY
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Build the tool you’re missing
              </h3>
              <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                I help you work out what a useful first version needs to do, so you can start without trying to build everything at once.
              </p>
            </div>

            {/* Bottom Squared Inset Card */}
            <div className="p-5 sq-card-inset flex flex-col justify-start gap-2">
              <div className="text-xs font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4500]" />
                <span>Example in Practice: LocalLens AI</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Identified that temporal local promotions are invisible on Google Maps. Wrote the PRD, defined MVP boundaries, and co-built a working prototype with Gemini API and FastAPI that delivers grounded, attributed answers in under 800ms.
              </p>
            </div>
          </motion.div>

          {/* Capability 2 */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.22 }}
            className="sq-card p-6 sm:p-8 flex flex-col justify-between h-full hover:border-[#ff4500]/40 transition-all group"
          >
            {/* Top info */}
            <div className="space-y-3 mb-6">
              <span className="text-xs font-mono text-[#ff4500] uppercase tracking-wider block font-bold">
                02 // WORKFLOW MODERNIZATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                Improve the systems you rely on
              </h3>
              <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                I trace the workarounds with your team, then design and build around the rules and exceptions that existing manual systems miss.
              </p>
            </div>

            {/* Bottom Squared Inset Card */}
            <div className="p-5 sq-card-inset flex flex-col justify-start gap-2">
              <div className="text-xs font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4500]" />
                <span>Example in Practice: SONA Scheduler</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Automated student counseling follow-ups across departments, cutting administrative hours by over 40%. Digitized traditional lumber cubic math into a single-screen POS, slashing checkout time from 15 minutes to under 2 minutes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

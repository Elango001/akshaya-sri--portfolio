"use client";

import React from "react";
import { motion } from "framer-motion";

export function HeuristicsSection() {
  const heuristics = [
    {
      title: "Clarity on Metrics",
      text: "Make clear what a number measures, where it comes from, and what decision it supports.",
    },
    {
      title: "Intentional AI Use",
      text: "Use AI where the task calls for it. In discovery tools, retrieval leads people to source passages they can read and verify.",
    },
    {
      title: "Repetitive Tasks",
      text: "Design for the work people need to do repeatedly. Make each next action and the information behind it clear.",
    },
    {
      title: "Low Barrier to Start",
      text: "Make the essential work easy to start. Avoid multistep forms when a single focused input suffices.",
    },
    {
      title: "Defensive Recovery",
      text: "Show what happened, what is still safe, and what someone can do next when the usual path breaks.",
    },
    {
      title: "Shared Language",
      text: "Use names and classifications that match the work, so everyone shares a clear understanding.",
    },
  ];

  return (
    <section id="heuristics" className="scroll-mt-24 py-12 md:py-16 border-b border-[var(--border-subtle)] bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-muted)] block font-semibold">
            Heuristics
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            How I think about software.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            A few practical guidelines that keep interfaces and product decisions grounded in reality.
          </p>
        </div>

        {/* 6 Squared Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {heuristics.map((h, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.22 }}
              className="p-6 rounded-2xl sq-card hover:border-[#ff4500]/40 flex flex-col justify-start gap-2.5 h-full transition-all group"
            >
              <div className="font-mono text-xs text-[#ff4500] uppercase tracking-wider font-bold">
                0{i + 1} // {h.title}
              </div>
              <p className="font-sans text-sm sm:text-base text-[var(--text-primary)] leading-relaxed font-semibold">
                {h.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

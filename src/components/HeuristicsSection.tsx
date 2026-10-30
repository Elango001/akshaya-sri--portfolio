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
      text: "Make the essential work easy to start. Avoid multi-step forms when a single focused input suffices.",
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
    <section className="py-10 md:py-14 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 space-y-1.5">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
            Heuristics
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            How I think about software.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            A few practical guidelines that keep interfaces and product decisions grounded in reality.
          </p>
        </div>

        {/* 6 Cards with uniform top alignment and consistent baselines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {heuristics.map((h, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-5 sm:p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] shadow-xs flex flex-col justify-start gap-2.5 h-full transition-colors"
            >
              <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">
                0{i + 1} • {h.title}
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed font-medium">
                {h.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

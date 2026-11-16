"use client";

import React from "react";
import { motion } from "framer-motion";

export function ApproachSection() {
  const steps = [
    {
      step: "01",
      title: "Understand the work",
      description:
        "Show me what you’re trying to achieve and how things work today. I talk with the people closest to the problem, understand the constraints, and help decide what would be worth changing.",
    },
    {
      step: "02",
      title: "Choose a useful first version",
      description:
        "I turn that understanding into a direction we can test: a flow, a PRD, or a working prototype. We make the tradeoffs understandable and choose enough scope to learn without trying to build everything at once.",
    },
    {
      step: "03",
      title: "Build and learn",
      description:
        "I build hands on or collaborate with engineering teams through delivery. We test with real users, refine what matters, and ensure the resulting system is maintainable and resilient.",
    },
  ];

  return (
    <section id="approach" className="scroll-mt-24 py-12 md:py-16 border-b border-[var(--border-subtle)] bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-muted)] block font-semibold">
            Working Together
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            From understanding to delivery.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            We agree on the problem, a useful first version, and who owns what along the way.
          </p>
        </div>

        {/* 3 Step Cards in Squared Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.22 }}
              className="sq-card p-6 sm:p-8 flex flex-col justify-start gap-3 h-full hover:border-[#ff4500]/40 transition-all group"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#ff4500] uppercase tracking-wider">
                  Step {s.step} //
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                {s.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

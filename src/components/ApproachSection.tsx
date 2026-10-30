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
        "I turn that understanding into a direction we can test: a flow, a PRD, or a working prototype. We make the trade-offs understandable and choose enough scope to learn without trying to build everything at once.",
    },
    {
      step: "03",
      title: "Build and learn",
      description:
        "I build hands-on or collaborate with engineering teams through delivery. We test with real users, refine what matters, and ensure the resulting system is maintainable and resilient.",
    },
  ];

  return (
    <section id="approach" className="py-20 md:py-28 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
            Working Together
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            From understanding to delivery.
          </h2>
          <p className="text-base sm:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
            We agree on the problem, a useful first version, and who owns what along the way.
          </p>
        </div>

        {/* 3 Step Cards with Framer Motion hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 shadow-[var(--card-shadow)] space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                  Step {s.step}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  {s.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Card */}
        <div className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/60 p-8 sm:p-10">
          <blockquote className="text-base sm:text-lg text-[var(--text-primary)] font-medium italic leading-relaxed">
            “Loved taking on sticky problems that few others could wrap their head around, and not only sought to address the problem at hand, but build a better system to address the root cause.”
          </blockquote>
          <div className="mt-3 text-xs font-mono text-[var(--text-muted)]">
            – Engineering Department Head & Product Collaborators
          </div>
        </div>
      </div>
    </section>
  );
}

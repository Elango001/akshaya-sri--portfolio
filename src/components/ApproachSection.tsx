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
    <section id="approach" className="py-10 md:py-14 border-b border-[var(--border-subtle)] bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 space-y-1.5">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
            Working Together
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            From understanding to delivery.
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            We agree on the problem, a useful first version, and who owns what along the way.
          </p>
        </div>

        {/* 3 Step Cards in Ultra-Sheer Glass (No White Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl sheer-glass p-6 sm:p-7 flex flex-col justify-start gap-2.5 h-full hover:border-white/25 transition-all"
            >
              <span className="font-mono text-xs sm:text-sm text-[var(--text-muted)] uppercase tracking-wider font-bold">
                Step {s.step}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                {s.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] font-normal leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

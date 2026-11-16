"use client";

import React from "react";
import { Compass, Cpu, Target, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function PrinciplesSection() {
  const principles = [
    {
      title: "Ground in Friction, Not Capability",
      icon: Target,
      principle: "Start with the user's bottleneck, never the model's demo.",
      description:
        "Generative AI tempts teams to ship features simply because the API exists. Real adoption happens when you solve an acute, repetitive human friction point. In SONA Scheduler, identifying at-risk students wasn't the hard part, eliminating the calendar scheduling overhead was.",
    },
    {
      title: "Attribution Over Hallucination",
      icon: Cpu,
      principle: "In search and discovery, verifiable proof beats conversational fluff.",
      description:
        "Users don't just want AI to summarize local deals; they demand proof before walking 500 meters. Designing LocalLens AI around 100% source attribution badges protected user trust and eliminated generative fabrications.",
    },
    {
      title: "Ruthless MVP Scoping",
      icon: Compass,
      principle: "What you choose NOT to build determines your velocity.",
      description:
        "Every project faces scope temptation. Modernizing the family woodworking business meant rejecting multi-step checkout wizards in favor of a single high-speed numpad calculator that non-technical workers adopted in 48 hours.",
    },
    {
      title: "High-Integrity Delivery",
      icon: ShieldCheck,
      principle: "Discipline under pressure yields reliable systems.",
      description:
        "Training in the National Cadet Corps (NCC) and practicing traditional Karate instilled the composure and grit required to navigate ambiguity, coordinate cross-functional teams, and maintain uncompromising standards.",
    },
  ];

  return (
    <section id="principles" className="py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2">
            Philosophy
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Product Principles & Systems Thinking
          </h2>
          <p className="mt-2 text-base text-[var(--text-secondary)]">
            How I approach discovery, technical architecture, and team alignment when building products from zero to one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-primary)]">
                      <Icon className="w-5 h-5 text-sky-500" />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      {p.title}
                    </h3>
                  </div>

                  <p className="text-xs font-mono text-[var(--text-muted)] mb-3 italic">
                    "{p.principle}"
                  </p>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

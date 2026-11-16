"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "When does working together make sense?",
      a: "When you have a product, feature, or workflow problem that lives at the intersection of AI capabilities and messy human behavior. I excel when you need someone who can conduct user discovery, write unambiguous PRDs, talk engineering language with developers, and stay hands on through shipping.",
    },
    {
      q: "What domains have you worked with?",
      a: "Consumer multimodal geo search (LocalLens AI), higher education workflow optimization (SONA Scheduler), supply chain and manufacturing billing (family timber enterprise), and enterprise cybersecurity compliance (Smart India Hackathon national pitch finalist).",
    },
    {
      q: "How do you approach AI product management?",
      a: "I treat AI models as functional components, not magic tricks. That means obsessing over source grounding, hallucination boundaries, latency budgets, and fallback states. If an AI output cannot be attributed to a verifiable source, it doesn't belong in high-trust user interfaces.",
    },
    {
      q: "Can you go into more detail with your selected works?",
      a: "Yes. Every project listed here is backed by written PRDs, feature prioritization matrices, and working software. I am happy to walk through the technical architecture, user interview findings, or tradeoffs over a quick video call.",
    },
    {
      q: "How do your discipline and leadership outside tech help?",
      a: "Training in the National Cadet Corps (NCC) and practicing traditional Karate taught me situational composure, high stakes communication, and mental stamina under pressure. In fast paced product development, that translates to disciplined execution and steady cross functional leadership.",
    },
  ];

  return (
    <section id="faqs" className="scroll-mt-24 py-12 md:py-16 border-b border-[var(--border-subtle)] bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--text-muted)] block font-semibold">
            FAQs
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            A few questions people usually ask.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Straight answers about my background, working style, and product thinking.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`sq-card overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-[#ff4500]/30 shadow-md" : "hover:border-[#ff4500]/25"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 font-display font-bold text-[var(--text-primary)] text-base sm:text-lg cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#ff4500] font-bold">0{idx + 1} //</span>
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[var(--text-muted)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#ff4500]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed border-t border-[var(--border-subtle)] pt-5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

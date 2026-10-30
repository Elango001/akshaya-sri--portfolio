"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export function MProganoFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-20 border-t border-[var(--border-subtle)] bg-[var(--bg-base)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* The mprogano punchline banner (Full width, expansive) */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 sm:p-14 shadow-[var(--card-shadow)] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              You're right...
            </h3>
            <p className="text-lg sm:text-xl text-[var(--text-secondary)]">
              we should connect!
            </p>
          </div>

          <a
            href="#connect"
            className="px-8 py-3.5 rounded-full text-sm font-semibold bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all whitespace-nowrap shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Footer credits row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)] pt-8 border-t border-[var(--border-subtle)]">
          <div className="flex items-center gap-3">
            <span>© All Rights Reserved.</span>
            <span>•</span>
            <span className="text-[var(--text-primary)] font-semibold">Akshaya Sri B</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Product Manager • AI Systems</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-primary)] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

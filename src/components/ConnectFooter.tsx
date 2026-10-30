"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Mail, ArrowUpRight, FileText, Check, Copy, ArrowUp, Send } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { motion } from "framer-motion";

export function ConnectFooter() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);
  const [quickNote, setQuickNote] = useState("");
  const [senderContact, setSenderContact] = useState("");
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuickSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    const subject = encodeURIComponent("Connecting with Akshaya Sri B");
    const body = encodeURIComponent(
      `Hi Akshaya,\n\nFrom: ${senderContact}\n\nNote:\n${quickNote}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="connect" className="pt-20 pb-16 bg-[var(--bg-base)] border-t border-[var(--border-subtle)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Minimal Consolidated Contact Card */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 sm:p-10 lg:p-12 shadow-[var(--card-shadow)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
                Let's Connect 👋
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
                You're right... <br className="hidden sm:inline" />
                we should connect!
              </h2>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-xl">
                Open to product management opportunities and technical collaborations. Whether you want to discuss LocalLens AI, review PRD trade-offs, or explore roles—my inbox is always open.
              </p>

              {/* Direct Instant Action Pills */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5">
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-all shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email Me
                </a>

                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-mono border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-[var(--text-muted)]" />}
                  {copied ? "Copied!" : personal.email}
                </button>

                <a
                  href="https://www.linkedin.com/in/akshaya-sri-balan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href="/Akshaya_Sri_B_Resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-[var(--border-strong)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Resume (PDF)
                </a>
              </div>
            </div>

            {/* Right Quick Note Box (5 cols) - Minimal & zero overwhelm */}
            <div className="lg:col-span-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/50 p-5 sm:p-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                Drop a quick note
              </div>

              {sent ? (
                <div className="p-4 rounded-xl bg-[var(--bg-surface)] text-center space-y-1.5">
                  <div className="text-emerald-500 font-semibold text-xs flex items-center justify-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Opening mail client...
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)]">
                    Thanks for reaching out!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickSend} className="space-y-3">
                  <input
                    type="text"
                    required
                    placeholder="Your name or email"
                    value={senderContact}
                    onChange={(e) => setSenderContact(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--border-strong)] transition-colors"
                  />
                  <textarea
                    rows={2}
                    required
                    placeholder="Quick note or opportunity..."
                    value={quickNote}
                    onChange={(e) => setQuickNote(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl text-xs sm:text-sm border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--border-strong)] transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-xs font-semibold bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-3 h-3" />
                    Send Note
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>

        {/* Quiet Minimal Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)] pt-6 border-t border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <span>© All Rights Reserved.</span>
            <span>•</span>
            <span className="text-[var(--text-primary)] font-medium">Akshaya Sri B</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Salem, India</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Product Manager • AI Systems</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-full border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--text-primary)] transition-colors"
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

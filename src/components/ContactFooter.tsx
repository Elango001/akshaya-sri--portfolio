"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  Mail, 
  FileText, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MapPin 
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export function ContactFooter() {
  const { personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-20 bg-[var(--bg-surface-elevated)]/40 border-t border-[var(--border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Let’s build together.
          </h2>
          <p className="mt-2 text-base text-[var(--text-secondary)]">
            Open to product management opportunities where technical depth, rigorous user discovery, and delivery discipline move the needle.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-opacity"
            >
              <Mail className="w-4 h-4" />
              Email Me Directly
            </a>

            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-[var(--text-muted)]" />}
              {copied ? "Copied to clipboard" : personal.email}
            </button>

            <a
              href="https://www.linkedin.com/in/akshaya-sri-balan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="/Akshaya_Sri_B_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resume (PDF)
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)] pt-8 border-t border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <span>{personal.name}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {personal.location}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span>Next.js 15 + React 19</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Mail, ArrowUpRight, FileText, Check, Send } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export function ConnectSection() {
  const { personal } = PORTFOLIO_DATA;
  const [preference, setPreference] = useState<"email" | "linkedin">("email");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    purpose: "",
    outcome: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const subject = encodeURIComponent(`Product Connection: ${formData.purpose || "Connecting with Akshaya"}`);
    const body = encodeURIComponent(
      `Hi Akshaya,\n\nName: ${formData.name}\nContact: ${formData.contact}\nPreferred via: ${preference}\n\nWhat brings me here:\n${formData.purpose}\n\nWhat a useful outcome looks like:\n${formData.outcome}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="connect" className="py-20 md:py-28 bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
            Let's Connect 👋
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
            What are you trying to make work?
          </h2>
          <p className="text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            A short conversation is usually enough to see if there’s a fit.
          </p>
        </div>

        {/* 2-Column Form + Direct Options (8 cols : 4 cols on wide grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-8 sm:p-12 shadow-[var(--card-shadow)]">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
              Let's start simple…
            </h3>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-[var(--text-primary)] text-lg">
                  Opening your email client...
                </h4>
                <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                  Thank you! If your email client didn't open automatically, feel free to email me directly at{" "}
                  <a href={`mailto:${personal.email}`} className="underline font-mono font-medium">
                    {personal.email}
                  </a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Preference Pills */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2 font-medium">
                    Contact Preference
                  </label>
                  <div className="flex gap-2">
                    {(["email", "linkedin"] as const).map((pref) => (
                      <button
                        key={pref}
                        type="button"
                        onClick={() => setPreference(pref)}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold capitalize transition-colors border ${
                          preference === pref
                            ? "bg-[var(--text-primary)] text-[var(--bg-base)] border-transparent"
                            : "bg-[var(--bg-surface)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:border-[var(--border-strong)]"
                        }`}
                      >
                        {pref === "email" ? "Email Me" : "LinkedIn"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/50 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--border-strong)] transition-colors"
                  />
                </div>

                {/* Contact Info */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2 font-medium">
                    Your {preference === "linkedin" ? "LinkedIn Profile URL" : "Email Address"}
                  </label>
                  <input
                    type={preference === "email" ? "email" : "text"}
                    required
                    placeholder={preference === "linkedin" ? "linkedin.com/in/username" : "name@company.com"}
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/50 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--border-strong)] transition-colors"
                  />
                </div>

                {/* Purpose */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2 font-medium">
                    What’s bringing you here?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Product hiring, discussing an early-stage product idea, or reviewing your LocalLens AI prototype"
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/50 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--border-strong)] transition-colors resize-none"
                  />
                </div>

                {/* Outcome */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2 font-medium">
                    What would a useful outcome look like?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. A 20-minute intro call or an exchange of ideas on AI discovery"
                    value={formData.outcome}
                    onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)]/50 text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--border-strong)] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-opacity shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Send message
                  </button>
                  <p className="text-xs text-[var(--text-muted)]">
                    I read every message myself and reply personally.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Direct Options (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold mb-2">
              Otherwise, choose your own adventure…
            </h3>

            {/* Email Card */}
            <a
              href={`mailto:${personal.email}`}
              className="p-6 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] block hover:border-[var(--border-strong)] transition-all shadow-xs group"
            >
              <span className="text-xs font-mono text-[var(--text-muted)] block mb-1">
                Direct Email
              </span>
              <span className="font-semibold text-[var(--text-primary)] text-sm truncate block group-hover:text-sky-500 transition-colors">
                {personal.email}
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/akshaya-sri-balan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] block hover:border-[var(--border-strong)] transition-all shadow-xs group"
            >
              <span className="text-xs font-mono text-[var(--text-muted)] block mb-1">
                Professional Profile
              </span>
              <span className="font-semibold text-[var(--text-primary)] text-sm flex items-center justify-between group-hover:text-sky-500 transition-colors">
                LinkedIn Profile <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>

            {/* Resume Card */}
            <a
              href="/Akshaya_Sri_B_Resume.pdf"
              download
              className="p-6 rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] block hover:border-[var(--border-strong)] transition-all shadow-xs group"
            >
              <span className="text-xs font-mono text-[var(--text-muted)] block mb-1">
                Complete Résumé
              </span>
              <span className="font-semibold text-[var(--text-primary)] text-sm flex items-center justify-between group-hover:text-sky-500 transition-colors">
                Download PDF Resume <FileText className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

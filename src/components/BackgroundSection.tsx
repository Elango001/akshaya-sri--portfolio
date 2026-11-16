"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { 
  GraduationCap, 
  Award, 
  Code2, 
  ShieldCheck, 
  Flame, 
  Users 
} from "lucide-react";

export function BackgroundSection() {
  const { education, certifications, leadershipAndActivities } = PORTFOLIO_DATA;

  const leadershipIcons = [ShieldCheck, Flame, Users, GraduationCap];

  const skillGroups = [
    {
      name: "Product & Discovery",
      skills: [
        "PRD Writing & Scoping",
        "Product Roadmaps",
        "RICE Prioritization",
        "User Interview Synthesis",
        "Agile Prototyping",
        "Hypothesis Validation",
      ],
    },
    {
      name: "Technical & AI Stack",
      skills: [
        "Gemini API & LLMs",
        "Source Grounding & Attribution",
        "FastAPI & Python",
        "React & TypeScript",
        "Computer Vision",
        "SQL & Data Pipelines",
      ],
    },
  ];

  return (
    <section id="background" className="py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-base)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block mb-2">
            Background & Leadership
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)]">
            Education, Foundation & Discipline
          </h2>
          <p className="mt-2 text-base text-[var(--text-secondary)]">
            Engineering rigor in AI and Data Science combined with leadership forged through National Cadet Corps military training and martial arts.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education & Skills (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-sky-500" />
                Academic Trajectory
              </h3>

              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-[var(--text-primary)] text-sm sm:text-base">
                        {edu.degree}
                      </h4>
                      <span className="font-mono text-xs px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-emerald-600 dark:text-emerald-400 font-semibold shrink-0">
                        {edu.grade}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-[var(--text-muted)] mb-2">
                      {edu.institution} • {edu.period}
                    </div>
                    <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[var(--text-muted)]">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Competencies */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-500" />
                Competencies
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skillGroups.map((group, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] space-y-2"
                  >
                    <div className="text-xs font-semibold text-[var(--text-primary)]">
                      {group.name}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Leadership & Certifications (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Leadership & Activities */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                Leadership & Discipline
              </h3>

              <div className="space-y-3">
                {leadershipAndActivities.map((act, idx) => {
                  const Icon = leadershipIcons[idx] || ShieldCheck;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[var(--text-muted)]" />
                          <h4 className="font-semibold text-[var(--text-primary)] text-sm">
                            {act.role}
                          </h4>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-muted)]">
                          {act.badge}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-[var(--text-muted)] mb-2">
                        {act.organization}
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-500" />
                Certifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {certifications.map((c, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-surface)]"
                  >
                    <div className="text-[10px] font-mono text-sky-600 dark:text-sky-400 font-semibold mb-0.5">
                      {c.issuer}
                    </div>
                    <div className="text-xs font-semibold text-[var(--text-primary)]">
                      {c.title}
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] mt-1.5 leading-snug">
                      {c.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

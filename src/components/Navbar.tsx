"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { 
  FileText, 
  Mail, 
  Moon, 
  Sun, 
  ArrowUpRight,
  Menu,
  X 
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md transition-colors border-b border-[var(--border-subtle)] bg-[var(--bg-base)]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-semibold text-[var(--text-primary)] tracking-tight text-base group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
              Akshaya Sri B
            </span>
            <span className="hidden sm:inline-block text-xs font-mono px-2 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] text-[var(--text-muted)]">
              Product • AI Systems
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)]">
            <a 
              href="#work" 
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Selected Work
            </a>
            <a 
              href="#prd-specs" 
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              PRD Specs
            </a>
            <a 
              href="#principles" 
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Principles
            </a>
            <a 
              href="#background" 
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              Background
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Switcher Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors shadow-xs"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-4 h-4 text-indigo-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <a
              href="https://www.linkedin.com/in/akshaya-sri-balan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href="/Akshaya_Sri_B_Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-opacity"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)]"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-[var(--border-subtle)] space-y-2 overflow-hidden"
            >
              <a 
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-lg"
              >
                Selected Work
              </a>
              <a 
                href="#prd-specs"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-lg"
              >
                PRD Specs
              </a>
              <a 
                href="#principles"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-lg"
              >
                Principles
              </a>
              <a 
                href="#background"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] rounded-lg"
              >
                Background
              </a>
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="/Akshaya_Sri_B_Resume.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[var(--text-primary)] text-[var(--bg-base)]"
                >
                  <FileText className="w-4 h-4" /> Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/akshaya-sri-balan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-secondary)]"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

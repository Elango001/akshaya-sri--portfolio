"use client";

import React, { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { 
  FileText, 
  Moon, 
  Sun, 
  Menu, 
  X 
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { motion, AnimatePresence } from "framer-motion";

export function MProganoNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Works", href: "#works" },
    { name: "Approach", href: "#approach" },
    { name: "FAQs", href: "#faqs" },
    { name: "Connect", href: "#connect" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    e.preventDefault();
    setActiveNav(name);
    setMobileMenuOpen(false);

    const targetId = href.replace(/^#/, "");
    const target = document.getElementById(targetId);
    if (target) {
      setTimeout(() => {
        const navHeight = 70;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + (window.scrollY || window.pageYOffset || 0) - navHeight;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });

        window.history.pushState(null, "", href);
      }, 50);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = (window.scrollY || window.pageYOffset || 0) + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const el = document.getElementById(link.href.replace(/^#/, ""));
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveNav(link.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-white/40 dark:bg-black/35 border-b border-[var(--border-subtle)] transition-colors relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "Home", "#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-bold text-[var(--text-primary)] text-base tracking-tight group-hover:opacity-80 transition-opacity">
              Akshaya Sri B
            </span>
          </a>

          {/* Center Links with Sliding Pill Animation on Sheer Glass */}
          <nav className="hidden md:flex items-center p-1 rounded-full sheer-glass">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.name, link.href)}
                  className={`relative px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-sliding-pill"
                      className="absolute inset-0 rounded-full bg-white/30 dark:bg-white/[0.08] border border-[var(--border-strong)] -z-10 shadow-xs"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-2 rounded-full sheer-glass hover:bg-white/20 dark:hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-4 h-4 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
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
              className="p-2 rounded-full sheer-glass hover:bg-white/20 dark:hover:bg-white/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href="/Akshaya_Sri_B_Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold sheer-glass text-[var(--text-primary)] hover:bg-white/20 dark:hover:bg-white/10 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              Resume
            </a>

            <a
              href="#connect"
              onClick={(e) => handleNavClick(e, "Connect", "#connect")}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--text-primary)] text-[var(--bg-base)] hover:opacity-90 transition-opacity shadow-xs"
            >
              Ways to Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full sheer-glass text-[var(--text-secondary)]"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-500" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg sheer-glass text-[var(--text-secondary)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown (Absolute overlay to prevent layout shifts & scroll bugs) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 right-0 w-full px-4 py-3 bg-[var(--bg-base)]/95 dark:bg-[#05070e]/95 backdrop-blur-2xl border-b border-[var(--border-subtle)] shadow-2xl z-50"
          >
            <div className="max-w-6xl mx-auto space-y-1">
              {navLinks.map((link) => {
                const isActive = activeNav === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.name, link.href)}
                    className={`block px-4 py-2.5 text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                      isActive
                        ? "text-[var(--text-primary)] sheer-glass-inset font-bold"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/15 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2 pb-1 flex items-center gap-2 border-t border-[var(--border-subtle)]">
                <a
                  href="/Akshaya_Sri_B_Resume.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold sheer-glass text-[var(--text-primary)]"
                >
                  <FileText className="w-4 h-4" /> Resume (PDF)
                </a>
                <a
                  href="#connect"
                  onClick={(e) => handleNavClick(e, "Connect", "#connect")}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-[var(--text-primary)] text-[var(--bg-base)] shadow-xs cursor-pointer"
                >
                  Ways to Connect
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { 
  FileText, 
  Moon, 
  Sun, 
  ArrowUpRight 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SquaredNavbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Works", href: "#works" },
    { name: "Approach", href: "#approach" },
    { name: "Heuristics", href: "#heuristics" },
    { name: "FAQs", href: "#faqs" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    e.preventDefault();
    setActiveNav(name);
    setMobileMenuOpen(false);

    const targetId = href.replace(/^#/, "");
    const target = document.getElementById(targetId);
    if (target) {
      setTimeout(() => {
        const navHeight = 90;
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPosition = (window.scrollY || window.pageYOffset || 0) + 140;
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
    <div className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto relative">
        <header 
          className={`sq-nav-island transition-all duration-300 ${
            scrolled ? "py-2 sm:py-2.5 px-3.5 sm:px-5 shadow-2xl" : "py-2.5 sm:py-3 px-4 sm:px-6"
          } flex items-center justify-between`}
        >
          {/* Left Brand with Squared Logo Mark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "Home", "#home")}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            {/* Squared geometric dual-pill mark */}
            <div className="relative w-6 h-6 flex items-center justify-center shrink-0">
              <svg 
                viewBox="-146 -145 292 290" 
                className="w-5 h-5 text-[#ff4500] group-hover:scale-105 transition-transform duration-200" 
                fill="currentColor" 
                aria-hidden="true"
              >
                <rect x="-88" y="-135" width="52" height="270" rx="26" transform="rotate(21.77 -62 0)" />
                <rect x="36" y="-135" width="52" height="270" rx="26" transform="rotate(21.77 62 0)" />
              </svg>
            </div>
            <span className="font-display font-bold text-sm sm:text-base tracking-[0.05em] uppercase text-[var(--text-primary)] group-hover:text-[#ff4500] transition-colors">
              Akshaya Sri B
            </span>
          </a>

          {/* Center Navigation Links with Bouncy Pill Slider */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-[var(--border-subtle)]">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.name, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium transition-colors font-sans rounded-lg ${
                    isActive
                      ? "text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="squared-nav-active-pill"
                      className="absolute inset-0 rounded-lg bg-black/[0.07] dark:bg-white/[0.12] border border-black/10 dark:border-white/15 -z-10 shadow-xs"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Theme Toggle Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 sm:p-2.5 rounded-xl border border-[var(--border-subtle)] bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer"
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
                    <Moon className="w-4 h-4 text-orange-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Resume PDF Button (Desktop) */}
            <a
              href="/Akshaya_Sri_B_Resume.pdf"
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold font-sans border border-[var(--border-subtle)] bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-[var(--text-primary)] transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span>Resume</span>
            </a>

            {/* Signature Squared Media Flame CTA Button */}
            <a
              href="#connect"
              onClick={(e) => handleNavClick(e, "Connect", "#connect")}
              className="group relative inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold font-display tracking-tight text-white bg-[#ff4500] hover:bg-[#ff5714] shadow-[0_0_22px_rgba(255,69,0,0.38)] hover:shadow-[0_0_30px_rgba(255,69,0,0.58)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1">
                <span>Plan a Call</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />
            </a>

            {/* Mobile Minimalist Burger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-xl border border-[var(--border-subtle)] bg-black/[0.03] dark:bg-white/[0.05] text-[var(--text-primary)] cursor-pointer flex flex-col justify-center items-center gap-1.5 w-10 h-10"
            >
              <span 
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`} 
              />
              <span 
                className={`w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-0" : ""
                }`} 
              />
            </button>
          </div>
        </header>

        {/* Mobile Dropdown Panel in Squared Media Glass Aesthetics */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="lg:hidden mt-2 sq-nav-island p-3.5 sm:p-5 shadow-2xl space-y-2"
            >
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeNav === link.name;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.name, link.href)}
                      className={`px-3.5 py-2.5 text-sm font-semibold rounded-xl transition-all font-display ${
                        isActive
                          ? "text-[#ff4500] bg-[#ff4500]/10 border border-[#ff4500]/25"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center gap-2">
                <a
                  href="/Akshaya_Sri_B_Resume.pdf"
                  download
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-[var(--border-subtle)] bg-white/5 text-[var(--text-primary)]"
                >
                  <FileText className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                  <span>Resume (PDF)</span>
                </a>
                <a
                  href="#connect"
                  onClick={(e) => handleNavClick(e, "Connect", "#connect")}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold font-display text-white bg-[#ff4500] shadow-[0_0_20px_rgba(255,69,0,0.35)]"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

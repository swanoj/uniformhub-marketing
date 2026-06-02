"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, GraduationCap } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky nav
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "px-1 py-2 sm:px-3"
          : "px-0 py-3"
      }`}
    >
      <nav
        id="navbar-main"
        className={`mx-auto flex h-16 w-full items-center justify-between px-4 transition-all duration-300 rounded-2xl ${
          isScrolled
            ? "glass border border-black/[0.06] shadow-subtle bg-white/80"
            : "bg-brand-canvas"
        }`}
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleAnchorClick(e, "hero")}
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-brand-teal select-none"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span>UniformHub</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex lg:gap-2">
          <a
            href="#how-it-works"
            onClick={(e) => handleAnchorClick(e, "how-it-works")}
            className="rounded-lg px-3 py-2 text-sm font-medium text-brand-textMuted transition hover:bg-black/[0.04] hover:text-brand-text"
          >
            How it works
          </a>
          <a
            href="#value-story"
            onClick={(e) => handleAnchorClick(e, "value-story")}
            className="rounded-lg px-3 py-2 text-sm font-medium text-brand-textMuted transition hover:bg-black/[0.04] hover:text-brand-text"
          >
            Why UniformHub
          </a>
          <a
            href="#features"
            onClick={(e) => handleAnchorClick(e, "features")}
            className="rounded-lg px-3 py-2 text-sm font-medium text-brand-textMuted transition hover:bg-black/[0.04] hover:text-brand-text"
          >
            Features
          </a>
          <a
            href="#trust"
            onClick={(e) => handleAnchorClick(e, "trust")}
            className="rounded-lg px-3 py-2 text-sm font-medium text-brand-textMuted transition hover:bg-black/[0.04] hover:text-brand-text"
          >
            Schools Supported
          </a>
          <a
            href="#faq"
            onClick={(e) => handleAnchorClick(e, "faq")}
            className="rounded-lg px-3 py-2 text-sm font-medium text-brand-textMuted transition hover:bg-black/[0.04] hover:text-brand-text"
          >
            FAQ
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            id="nav-btn-download"
            href="#final-cta"
            onClick={(e) => handleAnchorClick(e, "final-cta")}
            className="group/nav-btn relative overflow-hidden inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#0D6E6E] to-[#0A5757] px-4.5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,110,110,0.4)] hover:-translate-y-0.5 active:scale-95 shadow-subtle"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover/nav-btn:animate-shimmer pointer-events-none" />
            <span className="relative z-10">Get the app</span>
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover/nav-btn:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-brand-text transition hover:bg-black/[0.06] active:scale-95"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (with slide transition) */}
      <div
        className={`fixed inset-x-3 top-20 z-40 md:hidden transition-all duration-300 origin-top transform ${
          isMobileMenuOpen
            ? "opacity-100 scale-y-100 translate-y-0"
            : "opacity-0 scale-y-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl border border-black/[0.06] bg-white p-5 shadow-premium">
          <div className="flex flex-col gap-4">
            <a
              href="#how-it-works"
              onClick={(e) => handleAnchorClick(e, "how-it-works")}
              className="rounded-xl px-3 py-2 text-base font-semibold text-brand-text hover:bg-black/[0.04]"
            >
              How it works
            </a>
            <a
              href="#value-story"
              onClick={(e) => handleAnchorClick(e, "value-story")}
              className="rounded-xl px-3 py-2 text-base font-semibold text-brand-text hover:bg-black/[0.04]"
            >
              Why UniformHub
            </a>
            <a
              href="#features"
              onClick={(e) => handleAnchorClick(e, "features")}
              className="rounded-xl px-3 py-2 text-base font-semibold text-brand-text hover:bg-black/[0.04]"
            >
              Features
            </a>
            <a
              href="#trust"
              onClick={(e) => handleAnchorClick(e, "trust")}
              className="rounded-xl px-3 py-2 text-base font-semibold text-brand-text hover:bg-black/[0.04]"
            >
              Schools Supported
            </a>
            <a
              href="#faq"
              onClick={(e) => handleAnchorClick(e, "faq")}
              className="rounded-xl px-3 py-2 text-base font-semibold text-brand-text hover:bg-black/[0.04]"
            >
              FAQ
            </a>
            <hr className="border-black/[0.06] my-1" />
            <a
              id="mobile-nav-btn-download"
              href="#final-cta"
              onClick={(e) => handleAnchorClick(e, "final-cta")}
              className="group/mob-btn relative overflow-hidden flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0D6E6E] to-[#0A5757] py-3 text-base font-bold text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(13,110,110,0.35)] active:scale-98 shadow-subtle"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent group-hover/mob-btn:animate-shimmer pointer-events-none" />
              <span className="relative z-10">Download UniformHub</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-200 group-hover/mob-btn:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

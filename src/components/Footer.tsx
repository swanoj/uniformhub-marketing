"use client";

import React from "react";
import { GraduationCap, Mail, Shield, CheckCircle2, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative w-full min-w-0 shrink-0 rounded-3xl bg-brand-panel border border-black/[0.06] px-6 py-12 sm:px-12 sm:py-16 overflow-hidden shadow-subtle"
      aria-label="Footer"
    >
      <div className="mx-auto w-full max-w-5xl">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          
          {/* Column 1 — Brand and Pitch */}
          <div className="flex flex-col gap-4">
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
            <p className="text-xs leading-relaxed text-brand-textMuted max-w-[240px]">
              Providing school communities with an easy, safe, and entirely free second-hand uniform marketplace. Saving parents money while keeping fabrics in circulation.
            </p>
            <div className="flex flex-col gap-1.5 mt-2">
              <div className="flex items-center gap-2 text-[10px] text-brand-textMuted">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal shrink-0" />
                <span>Active in all States & Territories</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-brand-textMuted">
                <Shield className="h-3.5 w-3.5 text-brand-teal shrink-0" />
                <span>100% SECURE & PRIVATE CHAT</span>
              </div>
            </div>
          </div>

          {/* Column 2 — Platform */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text">
              Platform
            </h3>
            <div className="flex flex-col gap-2.5 text-xs font-medium">
              <a
                href="#how-it-works"
                onClick={(e) => handleAnchorClick(e, "how-it-works")}
                className="text-brand-textMuted hover:text-brand-teal transition-colors"
              >
                How it works
              </a>
              <a
                href="#value-story"
                onClick={(e) => handleAnchorClick(e, "value-story")}
                className="text-brand-textMuted hover:text-brand-teal transition-colors"
              >
                Why UniformHub
              </a>
              <a
                href="#features"
                onClick={(e) => handleAnchorClick(e, "features")}
                className="text-brand-textMuted hover:text-brand-teal transition-colors"
              >
                Marketplace Features
              </a>
              <a
                href="#trust"
                onClick={(e) => handleAnchorClick(e, "trust")}
                className="text-brand-textMuted hover:text-brand-teal transition-colors"
              >
                Supported Schools
              </a>
            </div>
          </div>

          {/* Column 3 — Trust & Legal */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text">
              Trust & Safety
            </h3>
            <div className="flex flex-col gap-2.5 text-xs font-medium">
              <a
                href="#faq"
                onClick={(e) => handleAnchorClick(e, "faq")}
                className="text-brand-textMuted hover:text-brand-teal transition-colors"
              >
                Frequently Asked Questions
              </a>
              <a
                href="/privacy-policy"
                className="text-brand-textMuted hover:text-brand-teal transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-brand-textMuted hover:text-brand-teal transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/community-guidelines"
                className="text-brand-textMuted hover:text-brand-teal transition-colors"
              >
                Community Guidelines
              </a>
            </div>
          </div>

          {/* Column 4 — Contact & Connection */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-text">
              Get in touch
            </h3>
            <p className="text-xs leading-relaxed text-brand-textMuted">
              Have questions, feedback, or want to discuss school-wide partnerships? Reach out directly.
            </p>
            <div className="flex flex-col gap-2.5 text-xs font-medium mt-1">
              <a
                href="mailto:hello@uniformhub.com.au"
                className="flex items-center gap-2 text-brand-text hover:text-brand-teal transition-colors"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-teal/5 text-brand-teal">
                  <Mail className="h-4 w-4" />
                </div>
                <span>hello@uniformhub.com.au</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-black/[0.06] my-8 sm:my-10" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[11px] text-brand-textMuted font-medium">
          
          {/* Copyright & ABN */}
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <span>&copy; {currentYear} UniformHub Pty Ltd. All rights reserved.</span>
            <span className="hidden sm:inline text-black/10">|</span>
            <span>ABN 84 621 598 437</span>
          </div>

          {/* Melbourne Credit */}
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-current animate-pulse" />
            <span>for Aussie families in Melbourne, VIC</span>
          </div>

        </div>

      </div>
    </footer>
  );
}

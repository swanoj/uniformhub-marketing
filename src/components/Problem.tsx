"use client";

import React from "react";
import { ShieldCheck, Lock, Trophy } from "lucide-react";

export default function Problem() {
  return (
    <section
      id="value-story"
      className="relative w-full min-w-0 shrink-0 border-y border-black/[0.06] bg-brand-panelAlt/40 px-6 py-16 sm:px-12 sm:py-20 lg:py-24"
      aria-labelledby="problem-heading"
    >
      {/* Decorative radial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-coral/5 blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-5xl text-center">
        
        {/* H2 Title */}
        <h2
          id="problem-heading"
          className="mx-auto max-w-3xl font-display text-2xl font-bold leading-tight tracking-tight text-brand-text sm:text-3xl lg:text-[2.25rem] lg:leading-[1.2]"
        >
          A simple, secure marketplace built exclusively for your{" "}
          <span className="text-brand-teal font-extrabold">school's community.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-textMuted sm:text-base">
          No sketchy general marketplace meetups, no messy Facebook comments. Just a verified community of local parents.
        </p>

        {/* 3 Stat Tiles Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          
          {/* Card 1 - Verified Parents */}
          <div className="relative rounded-2xl border border-black/[0.05] bg-white p-6 shadow-subtle flex flex-col items-center justify-between text-center group hover:shadow-medium transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="mt-5 font-display text-4xl font-black tracking-tight text-brand-coral">
              Verified
            </p>
            <h3 className="mt-3 text-sm font-bold text-brand-text uppercase tracking-wider">Parents & Users</h3>
            <p className="mt-1 text-sm text-brand-textMuted leading-relaxed">
              Every single user is verified to belong to your specific school community for absolute safety.
            </p>
          </div>

          {/* Card 2 - Secure Payments */}
          <div className="relative rounded-2xl border border-black/[0.05] bg-white p-6 shadow-subtle flex flex-col items-center justify-between text-center group hover:shadow-medium transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
              <Lock className="h-6 w-6" />
            </div>
            <p className="mt-5 font-display text-4xl font-black tracking-tight text-brand-teal">
              Secure
            </p>
            <h3 className="mt-3 text-sm font-bold text-brand-text uppercase tracking-wider">Escrow Payments</h3>
            <p className="mt-1 text-sm text-brand-textMuted leading-relaxed">
              Stripe checkout holds the funds safely. Money is only released after you swap items at school gates.
            </p>
          </div>

          {/* Card 3 - Uniforms & Sports */}
          <div className="relative rounded-2xl border border-[#0D6E6E]/20 bg-[#F0FAF4]/30 p-6 shadow-subtle flex flex-col items-center justify-between text-center group hover:shadow-medium hover:border-brand-teal/30 transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700">
              <Trophy className="h-6 w-6" />
            </div>
            <p className="mt-5 font-display text-4xl font-black tracking-tight text-emerald-700">
              Complete
            </p>
            <h3 className="mt-3 text-sm font-bold text-emerald-800 uppercase tracking-wider">Uniforms & Sports</h3>
            <p className="mt-1 text-sm text-brand-textMuted leading-relaxed">
              List formal dresses, winter blazers, hats, house polos, tracksuits, or school sports gear.
            </p>
          </div>

        </div>

        {/* Subhead Caption */}
        <p className="mt-12 text-base font-medium italic text-brand-textMuted sm:text-lg">
          "The easiest way for Aussie parents to swap pre-loved uniforms and sports gear." 🇦🇺
        </p>

      </div>
    </section>
  );
}

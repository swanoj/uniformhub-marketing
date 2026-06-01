"use client";

import React from "react";
import { TrendingUp, Coins, Zap } from "lucide-react";

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
          "The average Aussie family spends{" "}
          <span className="text-brand-coral font-extrabold">$1,800+ per year</span>{" "}
          on school uniforms."
        </h2>

        {/* 3 Stat Tiles Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          
          {/* Card 1 - 70% */}
          <div className="relative rounded-2xl border border-black/[0.05] bg-white p-6 shadow-subtle flex flex-col items-center justify-between text-center group hover:shadow-medium transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral">
              <TrendingUp className="h-6 w-6" />
            </div>
            <p className="mt-5 font-display text-5xl font-black tracking-tight text-brand-coral">
              70%
            </p>
            <h3 className="mt-3 text-sm font-bold text-brand-text uppercase tracking-wider">Worn briefly</h3>
            <p className="mt-1 text-sm text-brand-textMuted leading-relaxed">
              of school uniform items are worn for less than 12 months.
            </p>
          </div>

          {/* Card 2 - $0 */}
          <div className="relative rounded-2xl border border-black/[0.05] bg-white p-6 shadow-subtle flex flex-col items-center justify-between text-center group hover:shadow-medium transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
              <Coins className="h-6 w-6" />
            </div>
            <p className="mt-5 font-display text-5xl font-black tracking-tight text-brand-teal">
              $0
            </p>
            <h3 className="mt-3 text-sm font-bold text-brand-text uppercase tracking-wider">Wasted value</h3>
            <p className="mt-1 text-sm text-brand-textMuted leading-relaxed">
              is what most families get back when their kids outgrow them.
            </p>
          </div>

          {/* Card 3 - 3 min */}
          <div className="relative rounded-2xl border border-[#0D6E6E]/20 bg-[#F0FAF4]/30 p-6 shadow-subtle flex flex-col items-center justify-between text-center group hover:shadow-medium hover:border-brand-teal/30 transition-all duration-300">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700">
              <Zap className="h-6 w-6" />
            </div>
            <p className="mt-5 font-display text-5xl font-black tracking-tight text-brand-teal">
              3 min
            </p>
            <h3 className="mt-3 text-sm font-bold text-emerald-800 uppercase tracking-wider">Lightning fast</h3>
            <p className="mt-1 text-sm text-brand-textMuted leading-relaxed">
              average time to snap a photo and list an item on UniformHub.
            </p>
          </div>

        </div>

        {/* Subhead Caption */}
        <p className="mt-12 text-base font-medium italic text-brand-textMuted sm:text-lg">
          "There's a better way. Your kids' old uniforms are someone else's first day of school." 🇦🇺
        </p>

      </div>
    </section>
  );
}

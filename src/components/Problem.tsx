"use client";

import React, { useState } from "react";
import { TrendingUp, Coins, Zap, Calculator, Sparkles, Check, HelpCircle } from "lucide-react";

export default function Problem() {
  const [numKids, setNumKids] = useState<number>(2);
  const [schoolLevel, setSchoolLevel] = useState<"primary" | "secondary">("primary");

  // Aussie pricing logic:
  // Primary school uniform starter kit + winter pack is approx $650 retail.
  // Secondary high school uniform starter kit (blazer, tie, kilt/trousers, tracksuits, sports pack) is approx $1,250 retail.
  const retailPerKid = schoolLevel === "primary" ? 650 : 1250;
  const retailTotal = numKids * retailPerKid;
  
  // UniformHub keeps listings 70% to 80% off. Let's assume an average 75% savings.
  const uniformHubTotal = Math.round(retailTotal * 0.24);
  const savingsTotal = retailTotal - uniformHubTotal;

  // Contextual savings rewards:
  const getSavingsReward = (savings: number) => {
    if (savings >= 2500) {
      return "✈️ Return flights from Melbourne to Gold Coast + theme park passes for the whole family!";
    } else if (savings >= 1800) {
      return "🛒 Over 6 weeks of full family groceries at Coles or Woolies!";
    } else if (savings >= 1200) {
      return "🏊‍♂️ A whole year of private swimming lessons and basketball fees for your kids!";
    } else if (savings >= 800) {
      return "🚲 Two brand new kids' bikes with helmets for Christmas!";
    } else if (savings >= 400) {
      return "⚽ Two terms of local junior soccer registration and new boots!";
    } else {
      return "🍕 8 massive family woodfired pizza nights with garlic bread!";
    }
  };

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

        {/* INTERACTIVE AUSSIE SAVINGS CALCULATOR */}
        <div className="mt-16 mx-auto max-w-4xl rounded-3xl border border-black/[0.06] bg-white p-6 sm:p-10 shadow-medium text-left relative overflow-hidden">
          {/* Subtle top bar styling */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-right bg-brand-teal" />
          
          <div className="flex flex-col gap-8 md:grid md:grid-cols-[1fr_1.1fr] md:items-center md:gap-12">
            
            {/* Left Box: Input selectors */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-text">Aussie Savings Calculator</h3>
                  <p className="text-xs text-brand-textMuted">Estimate your family's yearly out-of-pocket savings.</p>
                </div>
              </div>

              {/* Selector 1: Num Kids */}
              <div>
                <label className="text-xs font-bold text-brand-text uppercase tracking-wider block mb-2.5">
                  How many school-aged kids?
                </label>
                <div className="flex gap-2.5">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setNumKids(num)}
                      className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all border ${
                        numKids === num
                          ? "bg-brand-teal border-brand-teal text-white shadow-subtle scale-102"
                          : "bg-brand-canvas/60 hover:bg-brand-teal/5 border-black/[0.06] text-brand-textMuted"
                      }`}
                    >
                      {num === 5 ? "5+" : num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Selector 2: School Level */}
              <div>
                <label className="text-xs font-bold text-brand-text uppercase tracking-wider block mb-2.5">
                  Average school level
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSchoolLevel("primary")}
                    className={`flex-1 py-3.5 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all border flex items-center justify-center gap-2 ${
                      schoolLevel === "primary"
                        ? "bg-brand-teal border-brand-teal text-white shadow-subtle scale-101"
                        : "bg-brand-canvas/60 hover:bg-brand-teal/5 border-black/[0.06] text-brand-textMuted"
                    }`}
                  >
                    <span>🎒</span>
                    <span>Primary School</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSchoolLevel("secondary")}
                    className={`flex-1 py-3.5 px-4 text-xs sm:text-sm font-bold rounded-xl transition-all border flex items-center justify-center gap-2 ${
                      schoolLevel === "secondary"
                        ? "bg-brand-teal border-brand-teal text-white shadow-subtle scale-101"
                        : "bg-brand-canvas/60 hover:bg-brand-teal/5 border-black/[0.06] text-brand-textMuted"
                    }`}
                  >
                    <span>🎓</span>
                    <span>High School</span>
                  </button>
                </div>
                <p className="text-[10px] text-brand-textMuted mt-2.5 leading-relaxed italic">
                  *High school estimates include standard Blazers, winter formal packs, house gear & sports polo bundles based on official school supply lists.
                </p>
              </div>
            </div>

            {/* Right Box: Live calculations screen */}
            <div className="rounded-2xl border border-brand-teal/10 bg-brand-teal/[0.02] p-6 sm:p-8 flex flex-col justify-between h-full relative">
              
              {/* Calculations Stack */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-medium text-brand-textMuted pb-2.5 border-b border-black/[0.04]">
                  <span>Estimated Shop Retail Price:</span>
                  <span className="text-red-600 line-through font-semibold">${retailTotal}</span>
                </div>
                <div className="flex items-center justify-between text-xs font-medium text-brand-textMuted pb-2.5 border-b border-black/[0.04]">
                  <span>UniformHub Second-Hand Price:</span>
                  <span className="text-brand-teal font-extrabold">${uniformHubTotal}</span>
                </div>
                
                {/* Total savings */}
                <div className="py-2 flex flex-col items-start">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-coral flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5 fill-current" />
                    Yearly Budget Saved
                  </span>
                  <p className="text-4xl sm:text-5xl font-black text-brand-teal mt-1 tracking-tight">
                    ${savingsTotal}
                  </p>
                  <span className="text-xs font-bold text-brand-text mt-1">saved every year!</span>
                </div>
              </div>

              {/* Dynamic physical reward tagline */}
              <div className="mt-6 pt-4 border-t border-brand-teal/10 flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-brand-text block">What this buys in real life:</span>
                  <p className="text-xs font-medium leading-relaxed text-brand-textMuted mt-0.5">
                    {getSavingsReward(savingsTotal)}
                  </p>
                </div>
              </div>

            </div>

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

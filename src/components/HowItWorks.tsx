"use client";

import React from "react";
import { School, Shirt, Handshake, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative w-full min-w-0 shrink-0 bg-brand-canvas px-6 py-16 sm:px-12 sm:py-20 lg:py-24"
      aria-labelledby="how-it-works-heading"
    >
      <div className="mx-auto w-full max-w-5xl text-center">
        
        {/* Title */}
        <h2
          id="how-it-works-heading"
          className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-brand-text sm:text-4xl"
        >
          Saving on uniforms is as easy as{" "}
          <span className="text-brand-teal">drop-off & pick-up</span>.
        </h2>
        <p className="mt-4 text-base text-brand-textMuted sm:text-lg">
          No shipping fees, no strangers at your front door. Fully local school circles.
        </p>

        {/* 3 Step Cards Wrapper */}
        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6 md:gap-8">
          
          {/* Subtle Connecting Line for Desktop */}
          <div className="absolute top-[52px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-brand-teal/20 hidden sm:block" aria-hidden="true" />

          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center group">
            {/* Step Badge */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-teal bg-white font-display text-lg font-black text-brand-teal shadow-subtle transition-all duration-300 group-hover:bg-brand-teal group-hover:text-white">
              01
            </div>
            
            {/* Icon Card */}
            <div className="mt-6 flex flex-col items-center rounded-2xl border border-black/[0.05] bg-white p-6 shadow-subtle transition-all duration-300 hover:shadow-medium">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <School className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-brand-text">Add your school</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-textMuted">
                Pick from 10,000+ Australian schools. Add multiple schools if you have children at different campuses.
              </p>
              
              {/* Mini UI Demonstration */}
              <div className="mt-5 w-full rounded-xl bg-[#FAFAF8] p-2.5 border border-black/[0.04] shadow-subtle transition-all duration-300 group-hover:bg-white group-hover:shadow-medium group-hover:scale-[1.02]">
                <div className="flex items-center gap-2 text-left">
                  <span className="text-lg">🏫</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold text-brand-text truncate">St Kevin's College</div>
                    <div className="text-[8px] text-brand-textMuted">Toorak VIC</div>
                  </div>
                  <span className="rounded-full bg-brand-teal/10 px-1.5 py-0.5 text-[8px] font-bold text-brand-teal">Added</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center group">
            {/* Step Badge */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-teal bg-white font-display text-lg font-black text-brand-teal shadow-subtle transition-all duration-300 group-hover:bg-brand-teal group-hover:text-white">
              02
            </div>

            {/* Icon Card */}
            <div className="mt-6 flex flex-col items-center rounded-2xl border border-black/[0.05] bg-white p-6 shadow-subtle transition-all duration-300 hover:shadow-medium">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
                <Shirt className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-brand-text">Buy or sell</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-textMuted">
                List an item in 3 minutes with a photo and price, or browse what other families at your school have available.
              </p>

              {/* Mini UI Demonstration */}
              <div className="mt-5 w-full rounded-xl bg-[#FAFAF8] p-2.5 border border-black/[0.04] flex items-center justify-between shadow-subtle transition-all duration-300 group-hover:bg-white group-hover:shadow-medium group-hover:scale-[1.02]">
                <div className="flex items-center gap-1.5 text-left">
                  <span className="text-sm">🧥</span>
                  <div className="min-w-0">
                    <div className="text-[9px] font-bold text-brand-text truncate">Rain Jacket</div>
                    <div className="text-[7px] text-brand-textMuted">Size 12 • $35</div>
                  </div>
                </div>
                <button type="button" className="rounded-lg bg-brand-teal px-2 py-1 text-[8px] font-black text-white uppercase">
                  Buy
                </button>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center group">
            {/* Step Badge */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-teal bg-white font-display text-lg font-black text-brand-teal shadow-subtle transition-all duration-300 group-hover:bg-brand-teal group-hover:text-white">
              03
            </div>

            {/* Icon Card */}
            <div className="mt-6 flex flex-col items-center rounded-2xl border border-[#0D6E6E]/20 bg-[#F0FAF4]/30 p-6 shadow-subtle transition-all duration-300 hover:shadow-medium hover:border-brand-teal/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700">
                <Handshake className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-brand-text">Meet at pick-up</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-textMuted">
                Chat securely in-app, then arrange a quick swap at school drop-off or pickup. No phone numbers shared, ever.
              </p>

              {/* Mini UI Demonstration */}
              <div className="mt-5 w-full rounded-xl bg-white p-2 border border-black/[0.04] text-left shadow-subtle transition-all duration-300 group-hover:shadow-medium group-hover:scale-[1.02]">
                <div className="text-[8px] bg-brand-teal/5 text-brand-teal px-1.5 py-0.5 rounded-md inline-block font-bold">
                  Active Chat
                </div>
                <p className="text-[8px] font-medium text-brand-text mt-1 italic">"Perfect, see you at the school gates tomorrow!"</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

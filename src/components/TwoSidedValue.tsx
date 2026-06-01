"use client";

import React from "react";
import { Check, ShoppingBag, DollarSign, Sparkles } from "lucide-react";

export default function TwoSidedValue() {
  return (
    <section
      id="two-sided-value"
      className="relative w-full min-w-0 shrink-0 border-y border-black/[0.06] overflow-hidden"
      aria-label="Buyer and Seller value"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:items-stretch">
        
        {/* Left Column — Buyers (Light Cream Bg) */}
        <div className="bg-brand-canvas px-6 py-16 sm:px-12 sm:py-20 lg:py-24 flex flex-col justify-center border-b border-black/[0.06] md:border-b-0 md:border-r md:border-black/[0.06]">
          <div className="mx-auto max-w-lg text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal mb-6">
              <ShoppingBag className="h-6 w-6" />
            </div>
            
            <h3 className="font-display text-2xl font-bold leading-tight text-brand-text sm:text-3xl">
              🛍️ For Parents Buying
            </h3>
            <p className="mt-3 text-base text-brand-textMuted">
              Skip the expensive school retail shop and discover pristine uniforms right in your community.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <span className="font-bold text-brand-text">Find your school's exact uniform</span>
                  <span className="text-sm text-brand-textMuted block">Not generic "navy polos", but official school branded gear.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <span className="font-bold text-brand-text">Search by size, condition, and distance</span>
                  <span className="text-sm text-brand-textMuted block">Filter instantly to locate what you need, right down the street.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <span className="font-bold text-brand-text">Pay securely in the app</span>
                  <span className="text-sm text-brand-textMuted block">Stripe checkout holds funds safely until you pick up and confirm.</span>
                </div>
              </li>
            </ul>

            {/* Savings Callout Tag */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#F0FAF4] border border-emerald-500/10 px-4 py-2.5 text-emerald-800 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span>Average savings: 60% – 80% off retail prices!</span>
            </div>
          </div>
        </div>

        {/* Right Column — Sellers (Crisp White Bg) */}
        <div className="bg-white px-6 py-16 sm:px-12 sm:py-20 lg:py-24 flex flex-col justify-center">
          <div className="mx-auto max-w-lg text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral mb-6">
              <DollarSign className="h-6 w-6" />
            </div>

            <h3 className="font-display text-2xl font-bold leading-tight text-brand-text sm:text-3xl">
              💰 For Parents Selling
            </h3>
            <p className="mt-3 text-base text-brand-textMuted">
              Turn that pile of outgrown blazers and sports tops in the laundry into next term's school supplies.
            </p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-coral/10 text-brand-coral">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <span className="font-bold text-brand-text">List in 3 minutes from your phone</span>
                  <span className="text-sm text-brand-textMuted block">Just snap a photo, pick your school, set your price, and list.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-coral/10 text-brand-coral">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <span className="font-bold text-brand-text">Always free to list</span>
                  <span className="text-sm text-brand-textMuted block">No upfront costs. We only charge a small processing fee when sold.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-coral/10 text-brand-coral">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <span className="font-bold text-brand-text">Buyers come straight to you</span>
                  <span className="text-sm text-brand-textMuted block">No messy marketplace coordinates. Swap easily at the school drop-off gates.</span>
                </div>
              </li>
            </ul>

            {/* Savings Callout Tag */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-coral/5 border border-brand-coral/10 px-4 py-2.5 text-brand-coral font-semibold text-sm">
              <Sparkles className="h-4 w-4 text-brand-coral" />
              <span>Most items sell within 7 days during back-to-school.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

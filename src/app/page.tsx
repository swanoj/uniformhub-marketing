"use client";

import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import TwoSidedValue from "@/components/TwoSidedValue";
import FeaturesGrid from "@/components/FeaturesGrid";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Floating Glassmorphic Navigation Capsule */}
      <Navigation />

      {/* Main Container Stack - aqryl.app physical card wrapping layout */}
      <main className="flex flex-col gap-3 md:gap-4 flex-1">
        {/* Section 1: Hero (Animates immediately on page load above fold) */}
        <Hero />

        {/* Section 2: Problem / Aussie Stats */}
        <ScrollReveal>
          <Problem />
        </ScrollReveal>

        {/* Section 3: How It Works */}
        <ScrollReveal>
          <HowItWorks />
        </ScrollReveal>

        {/* Section 4: Two-Sided Value Story */}
        <ScrollReveal>
          <TwoSidedValue />
        </ScrollReveal>

        {/* Section 5: Features Bento Grid */}
        <ScrollReveal>
          <FeaturesGrid />
        </ScrollReveal>

        {/* Section 6: Social Proof & School Logos */}
        <ScrollReveal>
          <Trust />
        </ScrollReveal>

        {/* Section 7: Parent FAQ Accordion */}
        <ScrollReveal>
          <FAQ />
        </ScrollReveal>

        {/* Section 8: High Converting Deep Teal CTA */}
        <ScrollReveal>
          <FinalCTA />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  );
}

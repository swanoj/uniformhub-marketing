"use client";

import React from "react";
import { School, MapPin, MessageSquare, CreditCard, Bell, ShieldAlert } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      icon: <School className="h-6 w-6 text-brand-teal" />,
      title: "School-specific feeds",
      desc: "Only see uniforms from your kids' schools — not random listings from across the country. Pure, filtered circles.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-brand-teal" />,
      title: "Local first listings",
      desc: "An intelligent distance slider so you only see uniforms within convenient school run or pickup range.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-brand-teal" />,
      title: "In-app secure chat",
      desc: "Message sellers safely and discuss items directly in our secure inbox. No phone numbers or emails shared.",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-brand-teal" />,
      title: "Secure payments",
      desc: "Integrated Stripe checkout with full buyer protection. Funds are held and only released once pickup is confirmed.",
    },
    {
      icon: <Bell className="h-6 w-6 text-brand-teal" />,
      title: "Instant size alerts",
      desc: "Get notified immediately on your phone the moment a parent uploads items matching your exact sizes & schools.",
    },
    {
      icon: <ShieldAlert className="h-6 w-6 text-brand-teal" />,
      title: "Verified families",
      desc: "School-linked parent accounts. All listings undergo automatic checks and community-flagged items are reviewed in 24h.",
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full min-w-0 shrink-0 bg-brand-canvas px-6 py-16 sm:px-12 sm:py-20 lg:py-24"
      aria-labelledby="features-heading"
    >
      <div className="mx-auto w-full max-w-5xl text-center">
        {/* Title */}
        <h2
          id="features-heading"
          className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-brand-text sm:text-4xl"
        >
          Built for Aussie parents,{" "}
          <span className="text-brand-teal">not generic shoppers</span>.
        </h2>
        <p className="mt-4 text-base text-brand-textMuted sm:text-lg">
          We designed every screen from scratch with school routines and security in mind.
        </p>

        {/* 3x2 Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative text-left rounded-2xl border border-black/[0.04] bg-[#F3F3EF]/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/30 hover:bg-white hover:shadow-medium group"
            >
              {/* Icon Panel */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-black/[0.04] shadow-subtle group-hover:bg-brand-teal/10 transition-colors">
                {feature.icon}
              </div>
              
              {/* Title & Desc */}
              <h3 className="mt-5 font-display text-base font-bold text-brand-text">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-textMuted">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

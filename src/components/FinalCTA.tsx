"use client";

import React from "react";
import { GraduationCap, ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative w-full min-w-0 shrink-0 overflow-hidden rounded-3xl bg-brand-teal px-6 py-16 sm:px-12 sm:py-20 lg:py-24 border border-brand-teal-dark/20"
      aria-labelledby="cta-heading"
    >
      {/* Decorative Blob Gradients */}
      <div className="absolute -left-1/4 -top-1/4 h-[350px] w-[350px] rounded-full bg-brand-coral/20 blur-[100px] pointer-events-none" />
      <div className="absolute -right-1/4 -bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#084B4B] blur-[90px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bento-pattern opacity-[0.08] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-4xl text-center z-10">
        
        {/* Logo Icon */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md text-white border border-white/10 mb-6 animate-bounce [animation-duration:3s]">
          <GraduationCap className="h-7 w-7 text-white" />
        </div>

        {/* Content */}
        <h2
          id="cta-heading"
          className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Ready to clear out the laundry pile?
        </h2>
        
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
          Join thousands of Australian moms and dads who are bypassing Facebook group chaos and buying/selling uniforms safely within their own school gates.
        </p>

        {/* Dynamic statistics */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-white/90">
          <div className="flex items-center gap-1.5">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-coral" />
            <span>Under 3 mins to list</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-coral" />
            <span>100% Free — No listing fees</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-coral" />
            <span>Safe, secure school pickups</span>
          </div>
        </div>

        {/* Premium Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          
          {/* iOS App Store Badge */}
          <a
            id="download-btn-appstore"
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-premium rounded-lg overflow-hidden"
            aria-label="Download UniformHub on the Apple App Store"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="h-[46px] w-auto select-none"
            />
          </a>

          {/* Google Play Badge */}
          <a
            id="download-btn-googleplay"
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-premium rounded-lg overflow-hidden"
            aria-label="Download UniformHub on the Google Play Store"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-[46px] w-auto select-none"
            />
          </a>

        </div>

        {/* Web App Secondary Link */}
        <div className="mt-8">
          <a
            id="pwa-secondary-link"
            href="https://app.uniformhub.com.au"
            className="inline-flex items-center gap-1 text-xs font-semibold text-white/80 hover:text-white transition-colors border-b border-white/20 pb-0.5 hover:border-white"
          >
            <span>Or launch the PWA directly on your device</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}

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
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          
          {/* iOS App Store Badge */}
          <a
            id="download-btn-appstore"
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full max-w-[200px] cursor-pointer items-center gap-3 rounded-xl border border-white/15 bg-black/90 px-4.5 py-3 text-left text-white transition-all duration-300 hover:border-white/35 hover:bg-black hover:shadow-premium transform active:scale-95"
            aria-label="Download UniformHub on the Apple App Store"
          >
            {/* Apple Logo SVG */}
            <svg
              className="h-6 w-6 shrink-0 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.07 2.47.3 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 2.02 1.65 2.73 1.67 2.74-.01.05-.26.89-.88 1.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94.12.02.24.03.36.03.9 0 2-.55 2.45-1.36z" />
            </svg>
            <div className="min-w-0">
              <p className="text-[10px] font-medium tracking-wide text-white/60 uppercase leading-none">
                Download on the
              </p>
              <p className="text-sm font-semibold tracking-tight text-white mt-1 leading-none">
                App Store
              </p>
            </div>
          </a>

          {/* Google Play Badge */}
          <a
            id="download-btn-googleplay"
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full max-w-[200px] cursor-pointer items-center gap-3 rounded-xl border border-white/15 bg-black/90 px-4.5 py-3 text-left text-white transition-all duration-300 hover:border-white/35 hover:bg-black hover:shadow-premium transform active:scale-95"
            aria-label="Download UniformHub on the Google Play Store"
          >
            {/* Google Play Logo SVG */}
            <svg
              className="h-6 w-6 shrink-0 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5.27c0-.23.11-.44.29-.58l10.15 10.15-10.15 10.15c-.18-.14-.29-.35-.29-.58V5.27zm11.16 8.87L4.01 4c.18-.08.38-.12.61-.12.44 0 .84.17 1.14.45l11.45 6.6c.55.32.84.86.84 1.4s-.29 1.08-.84 1.4l-11.45 6.6c-.3.28-.7.45-1.14.45-.23 0-.43-.04-.61-.12l10.15-10.14z" />
            </svg>
            <div className="min-w-0">
              <p className="text-[10px] font-medium tracking-wide text-white/60 uppercase leading-none">
                GET IT ON
              </p>
              <p className="text-sm font-semibold tracking-tight text-white mt-1 leading-none">
                Google Play
              </p>
            </div>
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

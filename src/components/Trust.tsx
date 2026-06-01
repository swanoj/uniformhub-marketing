"use client";

import React from "react";
import { Star, School, Quote } from "lucide-react";

export default function Trust() {
  const schools = [
    "Melbourne Grammar",
    "Scotch College",
    "Methodist Ladies College",
    "Knox Grammar",
    "Sydney Grammar",
    "Brisbane State High",
    "St Kevin's College",
    "Caulfield Grammar",
    "Adelaide High School",
    "Hale School",
    "Ormiston College",
    "Balwyn High School",
    "Albert Park College",
    "Swanbourne Primary",
    "James Ruse Agricultural",
  ];

  const testimonials = [
    {
      quote:
        "Saved $400 on my Year 7 starter kit and got it all in one weekend. Felt like a school garage sale that came straight to me.",
      author: "Em",
      suburb: "mum of 3, Mount Waverley VIC",
      avatar: "E",
    },
    {
      quote:
        "I had a pile of uniforms in the laundry for 2 years. Listed them on a Sunday afternoon, sold 7 items by Friday pickup.",
      author: "Renee",
      suburb: "mum of 2, Swanbourne WA",
      avatar: "R",
    },
    {
      quote:
        "So much faster than trying to coordinate pickups on chaotic Facebook groups. It's safe, structured, and entirely focused on our school.",
      author: "David",
      suburb: "dad of 2, Chatswood NSW",
      avatar: "D",
    },
  ];

  return (
    <section
      id="trust"
      className="relative w-full min-w-0 shrink-0 border-y border-black/[0.06] bg-[#F4F4F0]/30 px-6 py-16 sm:px-12 sm:py-20 lg:py-24 overflow-hidden"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto w-full max-w-5xl">
        
        {/* ROW A — Schools supported */}
        <div className="text-center">
          <h2
            id="trust-heading"
            className="font-display text-2xl font-bold leading-tight tracking-tight text-brand-text sm:text-3xl"
          >
            Active at schools across Australia 🇦🇺
          </h2>
          <p className="mt-2 text-sm text-brand-textMuted sm:text-base">
            We support second-hand circular economies in school zones nationwide.
          </p>

          {/* INFINITE RUNNING MARQUEE PANEL */}
          <div className="group relative mt-8 flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="flex animate-marquee gap-3 py-1.5 whitespace-nowrap group-hover:[animation-play-state:paused] cursor-pointer">
              
              {/* First Half of Marquee */}
              {schools.map((school, i) => (
                <span
                  key={`sch-1-${i}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-text shadow-subtle border border-black/[0.04]"
                >
                  <School className="h-3.5 w-3.5 text-brand-teal" />
                  {school}
                </span>
              ))}

              {/* Duplicate Half for Infinite Loop */}
              {schools.map((school, i) => (
                <span
                  key={`sch-2-${i}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-brand-text shadow-subtle border border-black/[0.04]"
                >
                  <School className="h-3.5 w-3.5 text-brand-teal" />
                  {school}
                </span>
              ))}

            </div>
          </div>

          <p className="mt-6 text-xs text-brand-textMuted">
            Don't see your school? Add it in 30 seconds when you download. We support all{" "}
            <span className="font-bold text-brand-text">10,913 ACARA-registered schools</span>.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-black/[0.06] my-16 max-w-md mx-auto" />

        {/* ROW B — Testimonials */}
        <div className="mt-6">
          <div className="text-center">
            <h3 className="font-display text-xl font-bold tracking-tight text-brand-text sm:text-2xl">
              What Aussie parents are saying
            </h3>
            <p className="mt-1 text-sm text-brand-textMuted">
              Hear from moms and dads who have cleared the clutter and saved hundreds.
            </p>
          </div>

          {/* Testimonial Cards Row */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {testimonials.map((test, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-[#0D6E6E]/10 bg-brand-teal/5 p-6 text-left flex flex-col justify-between shadow-subtle transition-all hover:shadow-medium duration-300"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-teal/10 rotate-180" aria-hidden="true" />
                
                <div>
                  {/* Star rating */}
                  <div className="flex text-yellow-500 gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="text-sm font-medium leading-relaxed text-brand-text italic">
                    "{test.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 flex items-center gap-3 border-t border-black/[0.05] pt-4">
                  {/* Avatar Bubble */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-teal text-xs font-black text-white uppercase select-none">
                    {test.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-brand-text leading-tight">{test.author}</p>
                    <p className="text-[10px] text-brand-textMuted leading-normal truncate">{test.suburb}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is UniformHub really free? How do you make money?",
      answer: "Yes, it is 100% free to list, buy, and sell. There are no listing fees, no transaction commissions, and no hidden costs. Down the track, we may introduce optional premium features (like bumping your listing to the top), but basic school-to-school trading will always remain free for Aussie families.",
    },
    {
      question: "How do I know the buyer or seller is trustworthy?",
      answer: "UniformHub is designed strictly for school communities. When registering, parents map their profiles to their kids' schools. Because exchanges are arranged through our secure in-app chat and take place during school pick-up, drop-off, or weekend sport, you are always trading with other parents from your own local school yard.",
    },
    {
      question: "What if my school isn't listed yet?",
      answer: "We support all 10,913 ACARA-registered schools across Australia. If a community hub hasn't been activated for your school yet, you can create it in under 30 seconds during app setup. All you need is the school name and suburb to start listing and invite other parents from your school's WhatsApp groups.",
    },
    {
      question: "How do I get paid for uniform sales?",
      answer: "To keep our platform completely free of processing fees, parents arrange payments directly. Most Aussie parents use PayID, bank transfer, or cash during the face-to-face handoff. Because you're exchanging items in person at school, you inspect the uniforms before any money changes hands.",
    },
    {
      question: "What types of items can I list on UniformHub?",
      answer: "UniformHub is focused strictly on school wear and school sports gear. You can buy or sell official everyday uniforms, formal blazers, house sports jerseys, school bags, approved school shoes, and any protective or sporting gear required for school sports. Keeping our marketplace specialized ensures you find exactly what you need quickly and reliably.",
    },
    {
      question: "How is my personal privacy protected?",
      answer: "We take your privacy very seriously. We never publish your home address, email, or phone number. All parent-to-parent communication is kept strictly within our secure in-app chat. You only coordinate the pickup time and spot (like the front gate or sports pavilion) when you are comfortable.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full min-w-0 shrink-0 border-y border-black/[0.06] bg-[#FFFFFF] px-6 py-16 sm:px-12 sm:py-20 lg:py-24"
      aria-labelledby="faq-heading"
    >
      {/* Subtle Background Radial Pattern for bento touch */}
      <div className="absolute inset-0 bento-pattern opacity-[0.4] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-3xl z-10">
        
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-teal/10 text-brand-teal mb-4">
            <HelpCircle className="h-6 w-6" />
          </div>
          <h2
            id="faq-heading"
            className="font-display text-2xl font-bold leading-tight tracking-tight text-brand-text sm:text-3xl lg:text-4xl"
          >
            Got questions? We've got answers.
          </h2>
          <p className="mt-3 text-sm text-brand-textMuted sm:text-base">
            Everything Aussie parents need to know about buying, selling, and staying safe.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-12 flex flex-col gap-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`group rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-brand-teal/20 bg-brand-teal/[0.02] shadow-subtle"
                    : "border-black/[0.06] bg-brand-canvas/30 hover:border-brand-teal/10 hover:bg-brand-teal/[0.01]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-5 py-4.5 text-left transition-all duration-300 sm:px-6 sm:py-5 group/btn"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold leading-snug text-brand-text sm:text-base pr-4 transition-transform duration-300 group-hover/btn:translate-x-1">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
                      isOpen
                        ? "border-brand-teal/20 bg-brand-teal text-white"
                        : "border-black/[0.06] bg-white text-brand-textMuted group-hover/btn:border-brand-teal/20 group-hover/btn:bg-brand-teal/5 group-hover/btn:text-brand-teal"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Content Panel */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-xs leading-relaxed text-brand-textMuted sm:px-6 sm:pb-6 sm:text-sm">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-brand-textMuted">
            Still have a question? Drop our Melb-based support team a line at{" "}
            <a
              href="mailto:hello@uniformhub.com.au"
              className="font-semibold text-brand-teal hover:underline underline-offset-2"
            >
              hello@uniformhub.com.au
            </a>
            . We typically reply within a couple of hours.
          </p>
        </div>

      </div>
    </section>
  );
}

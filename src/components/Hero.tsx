"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Star, ShieldCheck, Check, Send, Sparkles } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"feed" | "mylist" | "chat">("feed");
  const [isBlazerListed, setIsBlazerListed] = useState(false);
  const [isListingLoading, setIsListingLoading] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { sender: "sarah", text: "Hi there! Is the Blazer (Size 12) still available?", time: "3:14 PM" },
    { sender: "you", text: "Hi Sarah! Yes, it is. Cleaned and like-new condition.", time: "3:15 PM" },
    { sender: "sarah", text: "Amazing! Can we meet at the school gates near the sports pavilion at 3:15 tomorrow?", time: "3:16 PM" }
  ]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!typedMessage.trim()) return;
    
    const newMsg = { sender: "you", text: typedMessage, time: "Just now" };
    setChatMessages([...chatMessages, newMsg]);
    setTypedMessage("");

    // Simulate auto-reply from Sarah
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { sender: "sarah", text: "Brilliant! I just processed the Stripe deposit. See you tomorrow!", time: "Just now" }
      ]);
    }, 1500);
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-0 w-full min-w-0 flex-1 flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-brand-canvas px-6 py-12 sm:px-12 sm:py-16 md:py-20 lg:py-24"
      aria-label="Welcome to UniformHub"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-brand-teal/5 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-brand-coral/5 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:gap-16">
        
        {/* Left Column - Content */}
        <div className="flex flex-col items-start text-left animate-fade-in-up">
          {/* Eyebrow Pill */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-teal/10 px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase text-brand-teal">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-teal animate-pulse" />
            Built for Aussie school families
          </span>

          {/* Headline H1 */}
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-brand-text sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
            Safe, reliable{" "}
            <span className="relative inline-block text-brand-teal">
              secondhand school uniforms.
              <span className="absolute bottom-1.5 left-0 h-[3px] w-full rounded-full bg-brand-coral/30" />
            </span>
          </h1>

          {/* Subhead Description */}
          <p className="mt-5 text-base leading-relaxed text-brand-textMuted sm:text-lg md:text-[1.125rem]">
            Buy and sell pre-loved uniforms from families at your kids' school. 
            Faster than Facebook Marketplace, safer than Gumtree, and completely free to list.
          </p>

          {/* CTA Buttons Row */}
          <div className="mt-8 flex w-full flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              id="hero-btn-primary"
              href="#final-cta"
              onClick={(e) => handleScrollTo(e, "final-cta")}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-base font-bold text-white transition-all duration-200 hover:bg-brand-teal-hover hover:shadow-medium transform active:scale-98 shadow-subtle"
            >
              <span>Get the app for free</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              id="hero-btn-secondary"
              href="#how-it-works"
              onClick={(e) => handleScrollTo(e, "how-it-works")}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-black/[0.1] bg-white px-5 py-3.5 text-base font-bold text-brand-text transition hover:bg-black/[0.02] active:scale-98"
            >
              See how it works
            </a>
          </div>

          {/* Rating / Social Proof */}
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-brand-text">4.8 out of 5 stars</span>
              <span className="text-xs text-brand-textMuted">from 200+ Aussie parents</span>
            </div>
            <div className="h-8 w-px bg-black/[0.08] hidden sm:block" aria-hidden="true" />
            <div className="flex items-center gap-1.5 text-brand-textMuted text-xs font-medium bg-white px-3 py-1.5 rounded-full border border-black/[0.04]">
              <ShieldCheck className="h-4 w-4 text-brand-teal" />
              <span>ACARA Supported</span>
            </div>
          </div>
        </div>

        {/* Right Column - iPhone Mockup with Halo glow */}
        <div className="relative flex items-center justify-center md:justify-end animate-fade-in-up delay-200">
          {/* Radial Teal Halo behind phone */}
          <div className="absolute top-1/2 left-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-teal/12 blur-[64px]" aria-hidden="true" />

          {/* physical tilted iPhone mockup container */}
          <div className="relative shrink-0 select-none overflow-visible transition-transform duration-500 hover:rotate-2" style={{ transform: "rotate(-5.5deg)" }}>
            
            {/* Real CSS iPhone 15 Pro Body */}
            <div className="relative mx-auto h-[580px] w-[280px] rounded-[48px] border-[10px] border-[#1D1E22] bg-[#1A1A1A] p-1.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)]">
              {/* Speaker & Ear Piece */}
              <div className="absolute top-0.5 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-black/60 z-30" />
              {/* Dynamic Island */}
              <div className="absolute top-2.5 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-black z-30 flex items-center justify-between px-2 text-[8px] text-white font-medium">
                <span>9:41</span>
                <span className="h-2 w-2 rounded-full bg-brand-teal" />
              </div>

              {/* Screen Content Wrapper */}
              <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-neutral-50 flex flex-col pt-9 pb-3 text-brand-text">
                
                {/* App Inner Header */}
                <div className="px-3 pb-2 border-b border-black/[0.04] bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col text-left">
                      <span className="text-[9px] text-brand-textMuted font-semibold uppercase tracking-wider">Your school</span>
                      <span className="text-[11px] font-extrabold text-brand-teal flex items-center gap-0.5">
                        Balwyn High School 🎓
                      </span>
                    </div>
                    <div className="h-5.5 w-5.5 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center text-[9px] font-bold">
                      OM
                    </div>
                  </div>
                </div>

                {/* Simulated Content Area based on Active Tab */}
                <div className="flex-1 overflow-hidden p-2.5">
                  
                  {/* FEED TAB */}
                  {activeTab === "feed" && (
                    <div className="flex flex-col h-full space-y-2.5 animate-fade-in-up">
                      {/* Active Feed Stats Card */}
                      <div className="rounded-xl bg-brand-teal/5 p-2 border border-brand-teal/10 text-left">
                        <div className="flex justify-between items-center">
                          <span className="text-[8px] font-bold text-brand-teal uppercase tracking-wider">ACTIVE LISTINGS</span>
                          <span className="rounded bg-brand-teal px-1 text-[7px] font-bold text-white uppercase">New today</span>
                        </div>
                        <p className="text-[10px] font-semibold mt-1 text-brand-text">
                          {isBlazerListed ? "148 items matching your sizes" : "147 items matching your sizes"}
                        </p>
                      </div>

                      {/* Listing Cards Container (Scrollable) */}
                      <div className="flex-1 overflow-y-auto space-y-2 pr-0.5 max-h-[300px]">
                        
                        {/* Dynamic Blazer Listing Card */}
                        {isBlazerListed && (
                          <div className="rounded-xl bg-emerald-50/70 border border-emerald-500/25 p-2 text-left relative overflow-hidden shadow-subtle animate-fade-in-up">
                            <span className="absolute top-1 right-1 rounded bg-emerald-600 px-1 py-0.2 text-[6px] font-black text-white uppercase tracking-wider">
                              Just listed!
                            </span>
                            <div className="flex items-stretch gap-2.5">
                              <div className="h-14 w-14 shrink-0 rounded-lg bg-white border border-emerald-500/10 flex items-center justify-center relative shadow-sm">
                                <span className="text-xl">👕</span>
                                <span className="absolute bottom-0.5 right-0.5 rounded-full bg-emerald-500 p-0.5 text-white">
                                  <Check className="h-1.5 w-1.5 stroke-[3]" />
                                </span>
                              </div>
                              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                                <div>
                                  <span className="text-[9px] font-bold truncate text-brand-text block">Girls Winter Blazer</span>
                                  <p className="text-[7px] text-brand-textMuted">Size 12 • Like New</p>
                                </div>
                                <div className="flex items-baseline gap-1">
                                  <span className="text-[10px] font-extrabold text-brand-teal">$120</span>
                                  <span className="text-[7px] text-brand-textMuted line-through">$340 retail</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Listing Card 1 */}
                        <div className="rounded-xl bg-white border border-black/[0.05] p-2 text-left relative overflow-hidden shadow-subtle">
                          <div className="flex items-stretch gap-2.5">
                            <div className="h-14 w-14 shrink-0 rounded-lg bg-neutral-100 flex items-center justify-center relative">
                              <span className="text-xl">👕</span>
                              <span className="absolute bottom-0.5 right-0.5 rounded-full bg-emerald-500 p-0.5 text-white">
                                <Check className="h-1.5 w-1.5 stroke-[3]" />
                              </span>
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                              <div>
                                <span className="text-[9px] font-bold truncate text-brand-text block">Sports Polo Short Sleeve</span>
                                <p className="text-[7px] text-brand-textMuted">Size 12 • Excellent Condition</p>
                              </div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-[10px] font-extrabold text-brand-teal">$25</span>
                                <span className="text-[7px] text-brand-textMuted line-through">$65 retail</span>
                                <span className="rounded bg-emerald-100 text-emerald-800 text-[6px] font-bold px-1 py-0.2">Save 60%</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Listing Card 2 (SOLD tag demo) */}
                        <div className="rounded-xl bg-white border border-black/[0.05] p-2 text-left relative overflow-hidden shadow-subtle">
                          <div className="absolute inset-0 bg-white/75 z-10 flex items-center justify-center">
                            <span className="rotate-12 transform rounded border border-brand-coral bg-brand-coral-light px-2 py-0.5 text-[8px] font-black text-brand-coral tracking-widest uppercase">
                              Sold in 4 hrs
                            </span>
                          </div>
                          <div className="flex items-stretch gap-2.5">
                            <div className="h-14 w-14 shrink-0 rounded-lg bg-neutral-100 flex items-center justify-center">
                              <span className="text-xl">👟</span>
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                              <div>
                                <span className="text-[9px] font-bold truncate text-brand-text block">Asics Black School Shoes</span>
                                <p className="text-[7px] text-brand-textMuted">Size 7 US • Great Condition</p>
                              </div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-[10px] font-extrabold text-brand-teal">$30</span>
                                <span className="text-[7px] text-brand-textMuted line-through">$120 retail</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Listing Card 3 */}
                        <div className="rounded-xl bg-white border border-black/[0.05] p-2 text-left shadow-subtle">
                          <div className="flex items-stretch gap-2.5">
                            <div className="h-14 w-14 shrink-0 rounded-lg bg-neutral-100 flex items-center justify-center">
                              <span className="text-xl">🎒</span>
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                              <div>
                                <span className="text-[9px] font-bold truncate text-brand-text block">Heavy Duty School Bag</span>
                                <p className="text-[7px] text-brand-textMuted">One Size • Good Condition</p>
                              </div>
                              <div className="flex items-baseline gap-1">
                                <span className="text-[10px] font-extrabold text-brand-teal">$45</span>
                                <span className="text-[7px] text-brand-textMuted line-through">$110 retail</span>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* MY LIST / UPLOAD FORM TAB */}
                  {activeTab === "mylist" && (
                    <div className="flex flex-col h-full justify-between animate-fade-in-up text-left">
                      {isBlazerListed ? (
                        <div className="flex flex-col h-full justify-center items-center text-center p-3">
                          <div className="h-11 w-11 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-lg mb-2 shadow-subtle">
                            ✓
                          </div>
                          <span className="text-xs font-bold text-brand-text block">Item is Active!</span>
                          <p className="text-[9px] leading-relaxed text-brand-textMuted mt-1">
                            Your Girls Winter Blazer is live and visible to 1,240 Balwyn High families.
                          </p>
                          <button
                            type="button"
                            onClick={() => setIsBlazerListed(false)}
                            className="mt-4 rounded-lg bg-neutral-200/70 hover:bg-neutral-200 border border-black/[0.04] px-3 py-1.5 text-[8px] font-bold text-brand-text transition active:scale-95"
                          >
                            Reset Demo
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col h-full justify-between py-0.5">
                          <div>
                            <span className="text-[11px] font-bold text-brand-text block">List a Pre-loved Item</span>
                            <p className="text-[8px] text-brand-textMuted mb-2">Instant listing without hassle.</p>
                            
                            <div className="space-y-1.5">
                              <div className="rounded-lg border border-black/[0.04] bg-white p-1.5 flex flex-col">
                                <span className="text-[6.5px] font-bold uppercase tracking-wider text-brand-textMuted leading-none">School</span>
                                <span className="text-[9.5px] font-semibold text-brand-text mt-0.5 leading-none">Balwyn High School 🎓</span>
                              </div>
                              <div className="rounded-lg border border-black/[0.04] bg-white p-1.5 flex flex-col">
                                <span className="text-[6.5px] font-bold uppercase tracking-wider text-brand-textMuted leading-none">Category & Size</span>
                                <span className="text-[9.5px] font-semibold text-brand-text mt-0.5 leading-none">Girls Winter Blazer • Size 12</span>
                              </div>
                              <div className="rounded-lg border border-black/[0.04] bg-white p-1.5 flex flex-col">
                                <span className="text-[6.5px] font-bold uppercase tracking-wider text-brand-textMuted leading-none">Condition</span>
                                <span className="text-[9.5px] font-semibold text-emerald-700 mt-0.5 leading-none">Excellent Condition ✨</span>
                              </div>
                              <div className="rounded-lg border border-black/[0.04] bg-white p-1.5 flex flex-col">
                                <span className="text-[6.5px] font-bold uppercase tracking-wider text-brand-textMuted leading-none">Your Price</span>
                                <span className="text-[9.5px] font-black text-brand-teal mt-0.5 leading-none">$120 <span className="text-[7.5px] text-brand-textMuted font-normal line-through">($340 retail)</span></span>
                              </div>
                            </div>
                          </div>

                          <button
                            type="button"
                            onClick={() => {
                              setIsListingLoading(true);
                              setTimeout(() => {
                                setIsListingLoading(false);
                                setIsBlazerListed(true);
                                setActiveTab("feed");
                              }, 1000);
                            }}
                            disabled={isListingLoading}
                            className="w-full mt-2 rounded-xl bg-brand-coral py-2 text-[10px] font-bold text-white shadow-subtle hover:bg-brand-coral/95 transition flex items-center justify-center gap-1 active:scale-98"
                          >
                            {isListingLoading ? (
                              <span className="flex h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            ) : (
                              <>
                                <span>Publish to Feed</span>
                                <ArrowRight className="h-3 w-3" />
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* CHAT TAB */}
                  {activeTab === "chat" && (
                    <div className="flex flex-col h-full justify-between animate-fade-in-up text-left">
                      {/* Chat Header */}
                      <div className="flex items-center gap-1.5 pb-1 border-b border-black/[0.03] bg-white">
                        <div className="h-5.5 w-5.5 rounded-full bg-brand-coral/10 text-brand-coral flex items-center justify-center text-[9px] font-black">
                          S
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-[9.5px] font-bold text-brand-text truncate leading-none">Sarah (Year 7 parent)</h5>
                          <span className="text-[7px] text-emerald-600 font-semibold block leading-none mt-0.5">Online • Balwyn High</span>
                        </div>
                      </div>

                      {/* Messages Box */}
                      <div className="flex-1 overflow-y-auto py-1.5 space-y-1.5 max-h-[175px] pr-0.5 my-1 text-[8.5px]">
                        {chatMessages.map((msg, idx) => (
                          <div
                            key={idx}
                            className={`flex flex-col max-w-[85%] rounded-xl p-1.5 leading-tight ${
                              msg.sender === "you"
                                ? "bg-brand-teal text-white ml-auto"
                                : "bg-white border border-black/[0.04] text-brand-text"
                            }`}
                          >
                            <p>{msg.text}</p>
                            <span className={`text-[6px] mt-0.5 text-right block ${msg.sender === "you" ? "text-white/70" : "text-brand-textMuted"}`}>
                              {msg.time}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Chat Input form */}
                      <form onSubmit={handleSendMessage} className="pt-1.5 border-t border-black/[0.03] bg-white space-y-1">
                        <div className="flex items-center gap-1">
                          <input
                            type="text"
                            value={typedMessage}
                            onChange={(e) => setTypedMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 rounded-lg border border-black/[0.06] bg-neutral-50 px-2 py-1 text-[9px] focus:outline-none focus:border-brand-teal focus:bg-white text-brand-text"
                          />
                          <button
                            type="submit"
                            className="p-1 rounded-lg bg-brand-teal text-white hover:bg-brand-teal-hover transition active:scale-90"
                          >
                            <Send className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="flex items-center justify-center gap-0.5 rounded bg-emerald-50 px-1 py-0.5 text-[6.5px] font-bold text-emerald-800 border border-emerald-500/10">
                          <Sparkles className="h-2 w-2 text-emerald-600" />
                          <span>Stripe Escrow: $120 secured safely</span>
                        </div>
                      </form>
                    </div>
                  )}

                </div>

                {/* App Bottom Sticky Menu */}
                <div className="px-3 pt-2 pb-1 border-t border-black/[0.04] bg-white flex justify-around items-center">
                  <button
                    type="button"
                    onClick={() => setActiveTab("feed")}
                    className={`text-[9px] font-bold flex flex-col items-center transition-colors focus:outline-none ${
                      activeTab === "feed" ? "text-brand-teal" : "text-brand-textMuted opacity-65 hover:opacity-100"
                    }`}
                  >
                    <span>🏠</span>
                    <span className="scale-75 origin-top mt-0.5 leading-none">Feed</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("mylist")}
                    className={`text-[9px] font-bold flex flex-col items-center transition-colors focus:outline-none ${
                      activeTab === "mylist" ? "text-brand-teal" : "text-brand-textMuted opacity-65 hover:opacity-100"
                    }`}
                  >
                    <span>👕</span>
                    <span className="scale-75 origin-top mt-0.5 leading-none">List Item</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("chat")}
                    className={`text-[9px] font-bold flex flex-col items-center transition-colors focus:outline-none ${
                      activeTab === "chat" ? "text-brand-teal" : "text-brand-textMuted opacity-65 hover:opacity-100"
                    }`}
                  >
                    <span>💬</span>
                    <span className="scale-75 origin-top mt-0.5 leading-none">Chat</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Custom overlay pills to add physical layer depth */}
            <div 
              onClick={() => setActiveTab("mylist")}
              className="absolute -left-12 bottom-1/4 z-30 rounded-2xl bg-white/95 border border-black/[0.05] p-3 shadow-premium text-left max-w-[130px] backdrop-blur-md transform hover:scale-105 hover:-rotate-1 transition-all duration-300 cursor-pointer"
            >
              <span className="text-xs font-extrabold text-brand-text flex items-center gap-1">
                <span>💰</span> List Gear
              </span>
              <span className="text-[10px] font-medium text-brand-textMuted mt-0.5 block">Click to see how easy listing is!</span>
            </div>
            
            <div 
              onClick={() => setActiveTab("chat")}
              className="absolute -right-8 top-1/4 z-30 rounded-2xl bg-brand-teal border border-brand-teal-dark p-3 shadow-premium text-left max-w-[120px] text-white transform hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer"
            >
              <span className="text-xs font-black flex items-center gap-1">
                <span>💬</span> Secure Chat
              </span>
              <span className="text-[9px] text-white/80 mt-0.5 block">Tap to try the secure coordinate swap!</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

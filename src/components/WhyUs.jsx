import React from "react";
import { Check, ShieldCheck, Sparkles, Building2, Wrench, Users, ArrowRight } from "lucide-react";
import { TRUST_PILLARS } from "../data/content";

export default function WhyUs({ onOpenBooking }) {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[#09090c] relative border-b border-white/10">
      {/* Background Subtle Hex Light Motif */}
      <div className="absolute top-0 right-0 w-1/3 h-full hex-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#ff1a2b]/30 text-xs font-mono text-[#ff4d5a] uppercase tracking-widest mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a2b]" />
            Trust & Craftsmanship Standards
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase font-['Outfit'] leading-tight">
            DETAILING DONE <span className="text-[#ff1a2b]">DIFFERENTLY.</span>
          </h2>

          <p className="mt-2 text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
            We rejected the high-volume car wash model. Aurum Shine Detailing is built around single-vehicle obsessive focus.
          </p>
        </div>

        {/* 5 Reasons Grid - Compact & Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {TRUST_PILLARS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-xl bg-zinc-900/60 border border-white/10 hover:border-[#ff1a2b]/40 hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl sm:text-2xl font-black font-['Space_Grotesk'] text-zinc-600 group-hover:text-[#ff1a2b] transition-colors">
                    {item.num}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#ff1a2b] transition-colors" />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white font-['Outfit'] tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-xs text-zinc-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-[#ff4d5a]">
                <span>The Aurum Shine Standard</span>
                <Check className="w-3 h-3" />
              </div>
            </div>
          ))}

          {/* 6th Card: Direct Studio Callout */}
          <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-[#1b0507] via-zinc-950 to-[#0e0405] border border-[#ff1a2b]/40 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff4d5a] font-bold">
                Jaipur Flagship Studio
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white font-['Outfit'] mt-1">
                "Your Car. Our Obsession."
              </h3>
              <p className="mt-1.5 text-xs text-zinc-300 font-light leading-relaxed">
                Experience the studio difference in person. Book a complimentary vehicle condition assessment.
              </p>
            </div>

            <div className="mt-4">
              <button
                onClick={() => onOpenBooking()}
                data-cursor="ASSESS"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#ff1a2b] hover:bg-[#d61323] transition-colors shadow-md shadow-red-950/40 cursor-pointer"
              >
                <span>Schedule Assessment</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

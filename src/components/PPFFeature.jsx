import React, { useState } from "react";
import { Shield, Sparkles, ArrowRight, ShieldCheck, Sun, Zap, Check } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function PPFFeature({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState("full");

  const packages = {
    full: {
      name: "Full Body PPF Wrap",
      desc: "Complete, edge-tucked bumper-to-bumper wrap covering every painted panel. Zero exposed edges, maximum rock-chip and vandalism defense.",
      coverage: ["Front & Rear Bumpers", "Full Bonnet / Hood", "Front & Rear Fenders", "All Doors & Rocker Panels", "Roof & Rear Quarter Panels", "Side Mirrors & Headlights"],
      warranty: "7–10 Years Warranty",
    },
    front: {
      name: "Front Impact Armor",
      desc: "Concentrated protection on all high-strike highway zones prone to flying gravel, stone chips, bug acids, and road sandblasting.",
      coverage: ["Full Front Bumper", "Complete Bonnet / Hood", "Both Front Fenders", "Headlight Assemblies", "Wing Mirrors & A-Pillars"],
      warranty: "5–7 Years Warranty",
    },
    wear: {
      name: "High-Wear Track Pack",
      desc: "Targeted coverage for daily wear zones that suffer shoe scuffs, fingernail scratches, and luggage rash.",
      coverage: ["Door Cups & Edges", "Luggage Trunk Ledge", "Door Sills & Steps", "Rocker Panel Lower Strips", "Fuel Flap Area"],
      warranty: "5 Years Warranty",
    },
  };

  const featurePillars = [
    { label: "SELF HEALING", desc: "Elastomeric memory topcoat clears micro-swirls in ambient heat" },
    { label: "SCRATCH RESISTANCE", desc: "200+ micron thick TPU absorbs highway rock chips & debris" },
    { label: "UV PROTECTION", desc: "Non-yellowing optical clarity protects paint from Jaipur sun" },
    { label: "LONG LASTING FINISH", desc: "Up to 10 years warrantied gloss or satin stealth barrier" },
  ];

  return (
    <section id="ppf" className="py-24 lg:py-32 bg-[#060608] relative border-b border-white/10 overflow-hidden">
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#ff1a2b]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Large Immersive Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: Real PPF Installation Showcase - Fully visible with zero cropping */}
          <div className="lg:col-span-7 relative w-full min-w-0">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl shadow-black/80 flex flex-col group">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[600px] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/images/aurum-ppf-installation.jpg"
                  alt="Aurum Shine Detailing Master Technicians Installing Paint Protection Film"
                  className="w-full h-full object-contain sm:object-cover object-top transition-transform duration-700 group-hover:scale-102"
                />
                {/* Subtle base gradient for clean contrast */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

                {/* Top Clean Badge Pill */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-200 flex items-center gap-1.5 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#ff1a2b]" />
                    <span>Real Studio PPF Installation</span>
                  </span>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-[#ff1a2b]/20 border border-[#ff1a2b]/40 text-[10px] font-mono text-[#ff808b] uppercase">
                    Self-Healing TPU
                  </span>
                </div>
              </div>

              {/* Integrated Bottom Info Bar */}
              <div className="p-4 bg-zinc-900/90 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff1a2b] font-bold">
                    AURUM SHINE STUDIO • JAIPUR
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    TPU Edge-Wrapping & Precision Installation
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ff1a2b]/15 border border-[#ff1a2b]/30 text-white text-xs font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#ff1a2b]" />
                  <span>Certified TPU Film</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Narrative & Features */}
          <div className="lg:col-span-5 space-y-6 w-full min-w-0">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#ff1a2b]/30 text-xs font-mono text-[#ff4d5a] uppercase tracking-widest mb-3">
                <Shield className="w-3.5 h-3.5" />
                Physical Defense Architecture
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase font-['Outfit'] leading-tight">
                PROTECT THE FINISH. <br />
                <span className="text-[#ff1a2b]">PRESERVE THE LOOK.</span>
              </h2>

              {/* Animated Red Line */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#ff1a2b] to-transparent shadow-[0_0_10px_#ff1a2b] my-4" />

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                Our thermoplastic polyurethane (TPU) film is an invisible, optically clear sacrificial armor over your factory clear coat. Edge-wrapped with surgical precision for a virtually undetectable fit.
              </p>
            </div>

            {/* 4 Exact Feature Items */}
            <div className="space-y-3 pt-2">
              {featurePillars.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-[#ff1a2b]/30 transition-colors flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-md bg-[#ff1a2b]/20 border border-[#ff1a2b]/40 flex items-center justify-center text-[#ff1a2b] shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                      {feat.label}
                    </h4>
                    <p className="text-xs text-zinc-400 font-light mt-0.5">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Package Selector Tabs */}
            <div className="pt-3 border-t border-white/10 space-y-3 w-full min-w-0">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scrollbar-none">
                {Object.keys(packages).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    data-cursor="SELECT"
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === key
                        ? "bg-[#ff1a2b] text-white font-bold shadow-md shadow-red-950/50"
                        : "bg-zinc-900 text-zinc-400 hover:text-white border border-white/5"
                    }`}
                  >
                    {packages[key].name}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-bold">{packages[activeTab].name}</span>
                  <span className="text-[#ff4d5a] font-semibold">{packages[activeTab].warranty}</span>
                </div>
                <p className="text-xs text-zinc-400 font-light">
                  {packages[activeTab].desc}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {packages[activeTab].coverage.map((c, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-white/5 text-zinc-300">
                      ✓ {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenBooking(`PPF - ${packages[activeTab].name}`)}
                data-cursor="BOOK"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#ff1a2b] hover:bg-[#d61323] transition-colors shadow-lg shadow-red-950/40"
              >
                <span>Book PPF Inspection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Aurum%20Shine%20Detailing%20Jaipur,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(packages[activeTab].name)}`}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="CHAT"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              >
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

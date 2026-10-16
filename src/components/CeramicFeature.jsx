import React, { useState } from "react";
import { Sparkles, Droplets, Shield, Award, ArrowRight, CheckCircle2, Flame, Sun, Layers } from "lucide-react";

export default function CeramicFeature({ onOpenBooking }) {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    {
      label: "10H Diamond Hardness",
      detail: "Creates a permanent inorganic quartz matrix bonding to clear coat, dramatically resisting wash-induced micro-marring.",
      stat: "10H",
      icon: Shield,
    },
    {
      label: "115° Hydrophobic Angle",
      detail: "High surface tension causes rainwater and road liquids to bead into spherical droplets and roll off at highway speeds.",
      stat: "115°",
      icon: Droplets,
    },
    {
      label: "Chemical Defense (pH 2–13)",
      detail: "Impervious to bird droppings, road salt, industrial fallout, and alkaline highway water common in Rajasthan.",
      stat: "pH 2–13",
      icon: Flame,
    },
    {
      label: "Permanent Wet-Look Depth",
      detail: "Increases optical refraction index, magnifying the vehicle's metallic flake and producing an intense wet candy gloss.",
      stat: "99.8%",
      icon: Sparkles,
    },
  ];

  return (
    <section id="ceramic" className="py-24 lg:py-32 bg-[#060608] relative border-b border-white/10 overflow-hidden">
      {/* Ambient Red Studio Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff1a2b]/60 to-transparent" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#ff1a2b]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#ff1a2b]/30 text-xs font-mono text-[#ff4d5a] uppercase tracking-widest mb-3">
            <Droplets className="w-3.5 h-3.5" />
            Molecular Nano-Ceramic Shield
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-['Outfit'] leading-none">
            DEEP GLOSS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1a2b] via-[#ff4d5a] to-white">
              SERIOUS PROTECTION.
            </span>
          </h2>

          <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
            Engineered nano-ceramic coatings that penetrate and cross-link with factory clear coats. Unrivaled hydrophobic water repellent performance, mirror reflections, and long-lasting protection against Jaipur's extreme heat and dust.
          </p>
        </div>

        {/* Hero Visual Display */}
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl mb-12 group">
          <img
            src="/images/ceramic-beading.jpg"
            alt="Ceramic coating water beading and hexagon light reflections at Aurum Shine Detailing Studio"
            className="w-full h-[400px] sm:h-[520px] object-cover object-center transition-transform duration-1000 group-hover:scale-102"
          />

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80" />

          {/* Floating Data Overlay */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <span className="px-3 py-1 rounded-md text-[11px] font-mono uppercase bg-black/80 backdrop-blur-md border border-white/15 text-zinc-200">
              10H NANO-CERAMIC MATRIX • SHORTWAVE IR CURED
            </span>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono bg-[#ff1a2b]/20 border border-[#ff1a2b]/40 text-[#ff7580]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a2b] animate-ping" />
              Hydrophobic Contact Angle: 115°
            </span>
          </div>

          {/* Bottom Card Bar */}
          <div className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#ff1a2b]/20 border border-[#ff1a2b]/40 flex items-center justify-center text-[#ff1a2b] shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-bold text-base font-['Outfit']">
                  True Ceramic Crystallization
                </h4>
                <p className="text-xs text-zinc-400 font-light mt-0.5">
                  Multi-layer application with dedicated topcoat gloss booster and IR heat baking.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => onOpenBooking("Ceramic Coating")}
                data-cursor="BOOK"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider uppercase text-white bg-[#ff1a2b] hover:bg-[#d61323] transition-colors"
              >
                <span>Book Ceramic Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://wa.me/919509454982?text=Hello%20Aurum%20Shine%20Detailing%20Jaipur,%20I%20would%20like%20to%20inquire%20about%20your%2010H%20Ceramic%20Coating%20packages."
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="CHAT"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                onClick={() => setActiveMetric(idx)}
                className={`p-5 rounded-xl border transition-all cursor-pointer ${
                  activeMetric === idx
                    ? "bg-zinc-900 border-[#ff1a2b] shadow-lg shadow-red-950/40"
                    : "bg-zinc-950/70 border-white/10 hover:border-white/20 hover:bg-zinc-900/60"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black font-['Space_Grotesk'] text-white">
                    {item.stat}
                  </span>
                  <div className={`p-2 rounded-lg ${activeMetric === idx ? "bg-[#ff1a2b] text-white" : "bg-zinc-900 text-zinc-400"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-sm font-bold text-white font-['Outfit']">
                  {item.label}
                </h4>

                <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

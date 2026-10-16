import React, { useState } from "react";
import { Sparkles, Droplets, Shield, Award, ArrowRight, CheckCircle2, Flame, Sun, Layers, Check } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

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

  const highlights = [
    {
      title: "10H Nano-Ceramic Matrix",
      desc: "Permanent covalent bond that hardens over 48 hours to resist micro-marring and swirl marks.",
    },
    {
      title: "Shortwave IR Heat Cured",
      desc: "Industrial infrared heat baking lamps ensure 100% molecular cross-linking before delivery.",
    },
    {
      title: "Self-Cleaning Hydrophobic Surface",
      desc: "Super-slick tension angle repels mud, road grime, bird acids, and hard tap water stains.",
    },
  ];

  return (
    <section id="ceramic" className="py-24 lg:py-32 bg-[#060608] relative border-b border-white/10 overflow-hidden">
      {/* Ambient Red Studio Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff1a2b]/60 to-transparent" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#ff1a2b]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        {/* Immersive Split Showcase: Left Photo, Right Technical Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          {/* Left: The Aurum Shine Ceramic Vehicle - Zero Cropping */}
          <div className="lg:col-span-6 relative w-full min-w-0">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl flex flex-col group">
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[600px] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="/images/aurum-ceramic-gloss.jpg"
                  alt="Aurum Shine Detailing BE Concept Electric SUV with 10H Ceramic Coating Liquid Mirror Gloss"
                  className="w-full h-full object-contain sm:object-cover object-center transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

                {/* Floating Clean Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-200 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff1a2b]" />
                    <span>Real Client Car at Aurum Shine</span>
                  </span>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-[#ff1a2b]/20 border border-[#ff1a2b]/40 text-[10px] font-mono text-[#ff808b] uppercase">
                    10H Mirror Depth
                  </span>
                </div>
              </div>

              {/* Integrated Bottom Bar */}
              <div className="p-4 bg-zinc-900/95 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff1a2b] font-bold">
                    AURUM SHINE STUDIO • JAIPUR
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                    Permanent Glass Shield & Paint Correction
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#ff1a2b]/15 border border-[#ff1a2b]/30 text-white text-xs font-mono">
                  <Shield className="w-3.5 h-3.5 text-[#ff1a2b]" />
                  <span>10H Hardness</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Narrative & Actions */}
          <div className="lg:col-span-6 space-y-6 w-full min-w-0">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-white/10 shadow-xl space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#ff1a2b]/20 border border-[#ff1a2b]/40 flex items-center justify-center text-[#ff1a2b] shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-['Outfit'] uppercase">
                    True Ceramic Crystallization
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    Multi-layer formulation with dedicated topcoat gloss booster and IR curing.
                  </p>
                </div>
              </div>

              {/* Highlight List */}
              <div className="space-y-3 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-white/5">
                    <div className="w-5 h-5 rounded-md bg-[#ff1a2b]/20 border border-[#ff1a2b]/40 flex items-center justify-center text-[#ff1a2b] shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-light mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenBooking("Ceramic Coating")}
                  data-cursor="BOOK"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold tracking-wider uppercase text-white bg-[#ff1a2b] hover:bg-[#d61323] transition-colors shadow-lg shadow-red-950/50"
                >
                  <span>Book Ceramic Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Aurum Shine Detailing Jaipur, I would like to inquire about your 10H Ceramic Coating packages.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="CHAT"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  WhatsApp Inquiry
                </a>
              </div>
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

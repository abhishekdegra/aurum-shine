import React, { useState } from "react";
import { Sparkles, ArrowRight, X, ShieldAlert } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function OfferBanner({ onOpenBooking }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <aside aria-label="Celebration Offer" className="relative z-30 bg-gradient-to-r from-[#1a0507] via-[#2d090d] to-[#120406] border-b border-[#ff1a2b]/30 py-1.5 px-4 text-[11px] sm:text-xs font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#ff1a2b] text-white font-bold text-[10px] uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3 h-3" />
            1st Year Anniversary
          </span>
          <p className="text-zinc-200">
            <strong className="text-white font-semibold">15% FLAT BENEFIT</strong> on All Detailing & Ceramic Packages this month in Jaipur.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking("PPF")}
            className="hidden sm:inline-flex items-center gap-1 text-[#ff5260] hover:text-white transition-colors underline underline-offset-4 font-semibold"
          >
            Claim 15% Benefit
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => setVisible(false)}
            className="text-zinc-400 hover:text-white p-1 rounded transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}

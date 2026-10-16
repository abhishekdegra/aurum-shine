import React, { useState, useRef, useCallback } from "react";
import { Sparkles, SlidersHorizontal, CheckCircle2, ArrowLeftRight, Eye } from "lucide-react";

export default function BeforeAfter({ onOpenBooking }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback(
    (clientX) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const positionPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(positionPercentage);
    },
    []
  );

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="py-24 lg:py-32 bg-[#08080a] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#ff1a2b]/30 text-xs font-mono text-[#ff4d5a] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Flawless Paint Restoration
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-['Outfit']">
            BEFORE & AFTER TRANSFORMATION
          </h2>

          <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Drag the interactive slider to inspect our multi-stage paint correction under laboratory-grade swirl inspection lighting. We permanently eliminate micro-marring, spiderweb scratches, and hazing without artificial fillers.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-[360px] sm:h-[480px] md:h-[540px] rounded-2xl overflow-hidden border border-white/15 select-none cursor-ew-resize bg-zinc-950 shadow-2xl shadow-black/90"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={(e) => handleMove(e.touches[0].clientX)}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
          >
            {/* AFTER Image (Full background) */}
            <div className="absolute inset-0">
              <img
                src="/images/after-hood.jpg"
                alt="Flawless mirror finish after multi-stage paint correction"
                className="w-full h-full object-cover object-center pointer-events-none"
              />
              {/* After Badge */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-[#ff1a2b]/40 text-[11px] sm:text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="hidden sm:inline">AFTER: 100% Mirror Correction</span>
                <span className="sm:hidden">AFTER</span>
              </div>
            </div>

            {/* BEFORE Image (Clipped with hardware-accelerated clipPath) */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="/images/before-hood.jpg"
                alt="Swirled and scratched car hood before paint correction"
                className="w-full h-full object-cover object-center pointer-events-none"
              />
              {/* Before Badge */}
              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-mono font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span className="hidden sm:inline">BEFORE: Heavy Swirls</span>
                <span className="sm:hidden">BEFORE</span>
              </div>
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,26,43,0.8)] cursor-ew-resize"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              {/* Slider Center Circular Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#ff1a2b] border-2 border-white shadow-xl shadow-red-950 flex items-center justify-center text-white cursor-ew-resize">
                <ArrowLeftRight className="w-5 h-5 animate-pulse" />
              </div>
            </div>

            {/* Bottom Slider Control Tip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300 flex items-center gap-2 pointer-events-none">
              <Eye className="w-3.5 h-3.5 text-[#ff1a2b]" />
              <span>Drag or slide horizontally to compare paint finish</span>
            </div>
          </div>

          {/* Accessible HTML Range Input underneath */}
          <div className="mt-4 px-2 flex items-center gap-4">
            <span className="text-xs font-mono text-rose-400 font-semibold uppercase">Before</span>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#ff1a2b]"
              aria-label="Before after image comparison slider"
            />
            <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">After</span>
          </div>

          {/* Explanation Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5">
              <h4 className="text-sm font-bold text-white font-['Outfit'] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff1a2b]" />
                Zero Filler Formula
              </h4>
              <p className="mt-1.5 text-xs text-zinc-400 font-light leading-relaxed">
                Cheap workshops mask scratches with silicon glazes that wash away in 2 rains. We level the clear coat permanently.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5">
              <h4 className="text-sm font-bold text-white font-['Outfit'] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff1a2b]" />
                Paint Thickness Preserved
              </h4>
              <p className="mt-1.5 text-xs text-zinc-400 font-light leading-relaxed">
                Digital ultrasonic depth gauge measurements before, during, and after to ensure clear coat integrity is never compromised.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/5">
              <h4 className="text-sm font-bold text-white font-['Outfit'] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ff1a2b]" />
                Prepared for PPF & Ceramic
              </h4>
              <p className="mt-1.5 text-xs text-zinc-400 font-light leading-relaxed">
                A pristine, defect-free surface allows protective films and ceramic coatings to form a permanent covalent bond.
              </p>
            </div>
          </div>

          {/* Booking CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={() => onOpenBooking("Car Detailing (Paint Correction)")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#ff1a2b] to-[#c70f1e] hover:from-[#ff3344] hover:to-[#d61323] shadow-lg shadow-red-950/50 transition-all"
            >
              <span>Restore Your Car's Finish</span>
              <Sparkles className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

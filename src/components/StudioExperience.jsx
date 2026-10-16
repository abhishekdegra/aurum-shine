import React, { useState, useEffect, useRef } from "react";
import { Building2, Sparkles, MapPin, Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function StudioExperience({ onOpenBooking }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [trackHeight, setTrackHeight] = useState(480);

  // 5 Concise, High-Impact Studio Milestones
  const milestones = [
    {
      step: "01",
      title: "Dust-Free Cleanroom Bays",
      badge: "ISO Standard",
      desc: "Positive-pressure micro-filtered air prevents floating dust during TPU film laying and ceramic curing.",
    },
    {
      step: "02",
      title: "6500K CRI Hexagonal Light Canopy",
      badge: "True-Color",
      desc: "Daylight spectrum lighting array exposes micro-scratches, buffer swirls, and hazing invisible to sunlight.",
    },
    {
      step: "03",
      title: "Low-Profile Hydraulic Scissor Lifts",
      badge: "Chassis Access",
      desc: "Unobstructed 360° access for wheel barrel degreasing, lower rocker panel PPF, and underbody care.",
    },
    {
      step: "04",
      title: "Certified Master Craftsmen",
      badge: "Elite Team",
      desc: "Specialists trained in multi-stage rotary compounding, paint depth preservation, and seamless edge-wraps.",
    },
    {
      step: "05",
      title: "Executive Customer Lounge",
      badge: "VIP Comfort",
      desc: "Air-conditioned workspace with high-speed Wi-Fi, artisan espresso, and live studio bay viewing.",
    },
  ];

  // Measure track height and calculate scroll position
  useEffect(() => {
    const updateProgress = () => {
      if (!containerRef.current || !trackRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Track height
      setTrackHeight(trackRef.current.clientHeight);

      // Start when container top reaches 70% of viewport, end when bottom reaches 30%
      const start = windowHeight * 0.75;
      const end = -rect.height + windowHeight * 0.25;
      const current = rect.top;

      let progress = (start - current) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const activeIndex = Math.min(
    milestones.length - 1,
    Math.floor(scrollProgress * milestones.length)
  );

  // BMW car position in pixels along track
  const carY = scrollProgress * Math.max(0, trackHeight - 70);

  return (
    <section id="studio" className="py-16 lg:py-28 bg-[#060608] relative border-b border-white/10 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff1a2b]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#ff1a2b]/30 text-xs font-mono text-[#ff4d5a] uppercase tracking-widest mb-2.5">
            <Building2 className="w-3.5 h-3.5" />
            Jaipur Flagship Studio Standards
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase font-['Outfit'] leading-tight">
            MORE THAN A <span className="text-[#ff1a2b]">CAR WASH.</span>
          </h2>

          <p className="mt-1.5 text-base sm:text-lg font-medium text-zinc-300 italic font-['Space_Grotesk']">
            "Every detail matters."
          </p>
        </div>

        {/* Dual Real Studio Image Showcase - Framed perfectly to prevent awkward cropping */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch">
          {/* Main Panoramic Studio Bay Shot (1024x466) in wide col-span-7 */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl group">
            <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] bg-black overflow-hidden flex items-center justify-center">
              <img
                src="/images/aurum-studio-bay.jpg"
                alt="Aurum Shine Detailing Studio Bay with BMW 740d and Audi Sedans"
                className="w-full h-full object-contain sm:object-cover object-center transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-200">
                  FLAGSHIP WORKSHOP BAY
                </span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 bg-zinc-900/95 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff1a2b] font-bold">
                  AURUM SHINE DETAILING BAY
                </span>
                <p className="text-xs sm:text-sm font-bold text-white font-['Outfit'] mt-0.5">
                  BMW 740d & Audi Precision Detailing Station
                </p>
              </div>
              <span className="text-[11px] text-zinc-400 font-mono hidden sm:inline">
                Dual Active Bays • Dust-Free
              </span>
            </div>
          </div>

          {/* Exterior Studio Facade Shot in col-span-5 */}
          <div className="lg:col-span-5 flex flex-col rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl group">
            <div className="relative w-full aspect-[4/3] sm:aspect-[2/1] lg:aspect-[16/11] bg-black overflow-hidden flex items-center justify-center">
              <img
                src="/images/aurum-studio-facade.jpg"
                alt="Aurum Shine Detailing Studio Jaipur Exterior Facade"
                className="w-full h-full object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-zinc-200">
                  STUDIO EXTERIOR
                </span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 bg-zinc-900/95 border-t border-white/10 flex items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff1a2b] font-bold">
                  FLAGSHIP FACADE • JAIPUR
                </span>
                <p className="text-xs sm:text-sm font-bold text-white font-['Outfit'] mt-0.5">
                  Aurum Shine Detailing Studio
                </p>
              </div>

              <a
                href={STUDIO_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-white/10 text-xs font-mono text-zinc-200 hover:text-white hover:border-[#ff1a2b]/50 transition-colors shrink-0"
              >
                <MapPin className="w-3.5 h-3.5 text-[#ff1a2b]" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* 🚗 INTERACTIVE BMW SCROLL ROAD ANIMATION & CONCISE 5 POINTS */}
        <div ref={containerRef} className="relative rounded-2xl bg-zinc-950/70 border border-white/10 p-4 sm:p-6 lg:p-8">
          {/* Section Sub-heading */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#ff1a2b] font-bold">
                CRAFTSMANSHIP ROADMAP
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white font-['Outfit'] mt-0.5">
                5 STUDIO ENGINEERING PILLARS
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
                Scroll to steer BMW •{" "}
              </span>
              <span className="text-xs font-mono font-bold text-[#ff1a2b]">
                {Math.round(scrollProgress * 100)}% Journey
              </span>
            </div>
          </div>

          {/* Grid Layout: BMW Vertical Road Track + 5 Concise Cards */}
          <div className="grid grid-cols-[48px_1fr] sm:grid-cols-[64px_1fr] gap-3 sm:gap-6 items-start relative">
            {/* The Vertical Road Runway Track */}
            <div ref={trackRef} className="relative w-full h-full min-h-[460px] flex justify-center py-2 select-none">
              {/* Road Asphalt Background Strip */}
              <div className="absolute inset-y-0 w-8 sm:w-10 bg-zinc-900/90 rounded-full border border-white/10 overflow-hidden shadow-inner">
                {/* Center Road Dash Line */}
                <div
                  className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5"
                  style={{
                    backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.4) 50%, transparent 50%)",
                    backgroundSize: "2px 14px",
                  }}
                />

                {/* Red Laser Progress Tracer Trail behind vehicle */}
                <div
                  className="absolute top-0 inset-x-0 bg-gradient-to-b from-[#ff1a2b]/30 via-[#ff1a2b] to-[#ff4d5a] shadow-[0_0_12px_#ff1a2b] transition-all duration-75"
                  style={{
                    height: `${carY + 8}px`,
                  }}
                />
              </div>

              {/* 🏎️ BMW M SPORTS CAR VECTOR (Driving Down/Up with Scroll) */}
              <div
                className="absolute left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-transform duration-75 ease-out"
                style={{
                  top: `${carY}px`,
                }}
              >
                {/* BMW M-Coupe Top-Down Silhouette Vector - Facing Forward Downwards */}
                <div className="relative w-9 h-[54px] sm:w-11 sm:h-[62px] filter drop-shadow-[0_4px_14px_rgba(255,26,43,0.8)] rotate-180">
                  {/* Headlight Glowing Light Beams (Projecting Forward onto Road Ahead) */}
                  <div className="absolute top-[82%] left-1/2 -translate-x-1/2 w-16 sm:w-20 h-16 bg-gradient-to-b from-white/75 via-red-500/25 to-transparent blur-[3px] pointer-events-none" />

                  <svg
                    viewBox="0 0 48 84"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full relative z-10"
                  >
                    {/* Rear Quad Exhaust & Diffuser */}
                    <rect x="14" y="80" width="4" height="3" rx="1" fill="#71717a" />
                    <rect x="20" y="80" width="4" height="3" rx="1" fill="#71717a" />
                    <rect x="24" y="80" width="4" height="3" rx="1" fill="#71717a" />
                    <rect x="30" y="80" width="4" height="3" rx="1" fill="#71717a" />
                    <rect x="12" y="77" width="24" height="4" rx="1.5" fill="#18181b" />

                    {/* Main Aerodynamic Car Body */}
                    <path
                      d="M12 20 C12 10, 16 3, 24 3 C32 3, 36 10, 36 20 L38 38 C41 42, 42 56, 39 74 C38 78, 34 79, 24 79 C14 79, 10 78, 9 74 C6 56, 7 42, 10 38 Z"
                      fill="#0e0e12"
                      stroke="#ff1a2b"
                      strokeWidth="1.5"
                    />

                    {/* Carbon Fiber Roof & Rear Deck */}
                    <path
                      d="M14 26 C15 22, 18 19, 24 19 C30 19, 33 22, 34 26 L35 56 C34 60, 31 63, 24 63 C17 63, 14 60, 13 56 Z"
                      fill="#1a1a22"
                      stroke="rgba(255,255,255,0.15)"
                      strokeWidth="1"
                    />

                    {/* Front Windshield (Glass reflection) */}
                    <path
                      d="M15 26 C17 22, 20 20, 24 20 C28 20, 31 22, 33 26 L34 35 L14 35 Z"
                      fill="#27272a"
                      stroke="#ffffff"
                      strokeWidth="0.75"
                    />

                    {/* Rear Windshield */}
                    <path
                      d="M15 50 L33 50 L34 58 C31 61, 28 62, 24 62 C20 62, 17 61, 14 58 Z"
                      fill="#27272a"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="0.75"
                    />

                    {/* Side Mirrors */}
                    <rect x="4" y="30" width="5" height="3" rx="1.5" fill="#ff1a2b" />
                    <rect x="39" y="30" width="5" height="3" rx="1.5" fill="#ff1a2b" />

                    {/* BMW Hood Power Dome & Twin Accent Lines */}
                    <path d="M21 7 L21 18" stroke="#ff1a2b" strokeWidth="1" strokeLinecap="round" />
                    <path d="M27 7 L27 18" stroke="#ff1a2b" strokeWidth="1" strokeLinecap="round" />

                    {/* Iconic BMW Twin Kidney Grille */}
                    <rect x="18" y="3" width="5" height="2" rx="1" fill="#ff1a2b" />
                    <rect x="25" y="3" width="5" height="2" rx="1" fill="#ff1a2b" />

                    {/* Sharp BMW Twin Laser Headlights (Glowing) */}
                    <polygon points="12,5 16,4 17,7 13,8" fill="#ffffff" />
                    <polygon points="36,5 32,4 31,7 35,8" fill="#ffffff" />

                    {/* Rear LED L-Shaped Taillights */}
                    <path d="M12 75 L18 75 L18 77 L11 77 Z" fill="#ff1a2b" />
                    <path d="M36 75 L30 75 L30 77 L37 77 Z" fill="#ff1a2b" />

                    {/* M Power Tricolor Accent Decal on Roof */}
                    <rect x="22" y="38" width="1.5" height="12" fill="#0080ff" />
                    <rect x="23.5" y="38" width="1.5" height="12" fill="#1e293b" />
                    <rect x="25" y="38" width="1.5" height="12" fill="#ff1a2b" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 5 Concise Milestone Cards */}
            <div className="space-y-3 sm:space-y-3.5">
              {milestones.map((m, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div
                    key={m.step}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 relative ${
                      isActive
                        ? "bg-zinc-900 border-[#ff1a2b] shadow-lg shadow-red-950/30 scale-[1.01]"
                        : "bg-zinc-950/80 border-white/5 opacity-85 hover:opacity-100 hover:border-white/15"
                    }`}
                  >
                    {/* Active Indicator Strip */}
                    {isActive && (
                      <div className="absolute left-0 inset-y-0 w-1 bg-[#ff1a2b] rounded-l-xl shadow-[0_0_8px_#ff1a2b]" />
                    )}

                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                            isActive
                              ? "bg-[#ff1a2b] text-white"
                              : "bg-zinc-900 text-zinc-400 border border-white/5"
                          }`}
                        >
                          {m.step}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-white font-['Outfit']">
                          {m.title}
                        </h4>
                      </div>

                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-white/5 shrink-0">
                        {m.badge}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-zinc-300 font-light leading-relaxed pl-1">
                      {m.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compact Bottom Studio Action */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-[#ff1a2b] animate-ping shrink-0" />
              <span>Free 36-point paint depth gauge inspection with every visit</span>
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#ff1a2b] hover:bg-[#d61323] text-xs font-mono font-bold text-white uppercase transition-colors"
            >
              <span>Book Studio Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

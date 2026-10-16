import React, { useState, useEffect } from "react";
import { Calendar, MessageCircle, ChevronDown, Sparkles, Shield, Droplets, Camera } from "lucide-react";
import { STUDIO_INFO } from "../data/content";
import HeroWaterCanvas from "./HeroWaterCanvas";

export default function Hero({ onOpenBooking }) {
  // Default to the energetic snow foam wash action requested by user
  const [activeHeroImg, setActiveHeroImg] = useState("/images/snow-foam-wash.jpg");
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Parallax tracking only on desktop
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 16;
      const y = (e.clientY / innerHeight - 0.5) * 16;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const heroStats = [
    { label: "Dust-Free", value: "100%", sub: "Sealed Detailing Bays" },
    { label: "Surface Hardness", value: "10H", sub: "Nano-Ceramic Bond" },
    { label: "PPF Warranty", value: "5–10 Yrs", sub: "Self-Healing TPU" },
    { label: "Studio Standard", value: "6500K", sub: "True-Color CRI Lights" },
  ];

  const studioViews = [
    { id: "foam", label: "🌊 Foam Wash", src: "/images/snow-foam-wash.jpg" },
    { id: "bay", label: "🏎️ Studio Bay", src: "/images/aurum-studio-bay.jpg" },
    { id: "ceramic", label: "✨ Mirror BE", src: "/images/aurum-ceramic-gloss.jpg" },
    { id: "facade", label: "🏢 Facade", src: "/images/aurum-studio-facade.jpg" },
  ];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-x-hidden border-b border-white/10 bg-[#060608] pb-24 lg:pb-0 w-full">
      {/* Background Cinematic Visual Stage with Parallax */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-transform duration-300 ease-out"
        style={
          isDesktop
            ? {
                transform: `translate3d(${-mouseOffset.x * 0.8}px, ${-mouseOffset.y * 0.8}px, 0) scale(1.05)`,
              }
            : undefined
        }
      >
        <img
          src={activeHeroImg}
          alt="Aurum Shine Detailing Studio Jaipur - Luxury Automotive Detailing"
          className={`w-full h-full object-cover ${
            activeHeroImg.includes("ceramic")
              ? "object-[center_35%]"
              : activeHeroImg.includes("facade")
              ? "object-[center_25%]"
              : activeHeroImg.includes("foam")
              ? "object-[center_40%]"
              : "object-center"
          } transition-all duration-1000 ease-out`}
        />

        {/* Dynamic Water Mist, Snow Foam Bubbles & Laser Scan Canvas */}
        <HeroWaterCanvas isFoamMode={activeHeroImg.includes("foam")} />

        {/* High-End Cinematic Translucent Vignettes (Car remains 100% visible & bright) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-black/25 to-[#060608]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060608]/70 via-transparent to-[#060608]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#060608_95%)]" />

        {/* Ambient Pulsing Studio Red Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#ff1a2b]/15 rounded-full blur-[140px] transition-transform duration-500 ease-out pointer-events-none"
          style={
            isDesktop
              ? {
                  transform: `translate3d(calc(-50% + ${mouseOffset.x * 2}px), ${mouseOffset.y * 2}px, 0)`,
                }
              : undefined
          }
        />
      </div>

      {/* Hexagonal Detailing Bay Ceiling Grid Pattern */}
      <div className="absolute inset-0 hex-pattern opacity-25 pointer-events-none z-0" />

      {/* Top Red Laser Horizon Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff1a2b]/60 to-transparent" />

      {/* Hero Content Overlay */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-24 flex flex-col items-center text-center overflow-hidden min-w-0"
        style={
          isDesktop
            ? {
                transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
              }
            : undefined
        }
      >
        {/* Live Studio Camera Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/75 border border-white/15 backdrop-blur-md mb-4 sm:mb-6 shadow-2xl max-w-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-200 font-semibold truncate flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-[#ff1a2b] shrink-0" />
            <span>BAY 01 • ACTIVE SNOW FOAM & PPF</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase font-['Outfit'] w-full max-w-5xl leading-[1.0] sm:leading-[0.92] break-words">
          YOUR CAR. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            OUR{" "}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1a2b] via-[#ff3b4b] to-[#e60012] text-glow">
            OBSESSION.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-3 sm:mt-5 text-xs sm:text-base md:text-lg text-zinc-300 w-full max-w-2xl font-light leading-relaxed px-1 sm:px-2 break-words">
          Precision snow foam washes, computer-cut TPU paint armor, and 10H ceramic crystallization engineered for car connoisseurs who expect absolute perfection.
        </p>

        {/* Key Feature Badges with Glassmorphic Design */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-zinc-200 w-full max-w-full px-1">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#ff1a2b]" />
            Active Snow Foam
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md shadow-sm">
            <Shield className="w-3.5 h-3.5 text-[#ff1a2b]" />
            Self-Healing TPU
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/15 backdrop-blur-md shadow-sm">
            <Droplets className="w-3.5 h-3.5 text-[#ff1a2b]" />
            10H Ceramic Gloss
          </span>
        </div>

        {/* CTA Buttons - Compact & Sleek for Mobile & Desktop */}
        <div className="mt-5 sm:mt-7 flex flex-row items-center justify-center gap-2.5 sm:gap-3 w-full max-w-sm sm:max-w-none sm:w-auto px-1 sm:px-0">
          <button
            onClick={() => onOpenBooking()}
            data-cursor="BOOK"
            className="flex-1 sm:flex-initial group relative inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-8 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r from-[#ff1a2b] via-[#e61222] to-[#b30816] hover:from-[#ff3344] hover:to-[#d61323] shadow-lg shadow-red-950/60 transition-all active:scale-95 cursor-pointer overflow-hidden whitespace-nowrap"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10" />
            <span className="relative z-10">Book Detailing</span>
          </button>

          <a
            href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Aurum Shine Detailing Jaipur, I would like to inquire about detailing my car.")}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="CHAT"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold font-mono tracking-wider uppercase text-zinc-100 bg-black/75 hover:bg-zinc-900 border border-white/20 hover:border-emerald-500/50 hover:text-emerald-400 backdrop-blur-md transition-all active:scale-95 whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Interactive Studio Camera View Switcher - 2x2 Grid on Mobile, Flex on Desktop */}
        <div className="mt-5 sm:mt-7 w-full max-w-md mx-auto grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-1.5 p-1.5 rounded-2xl sm:rounded-full bg-black/80 border border-white/15 backdrop-blur-md shadow-2xl">
          {studioViews.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveHeroImg(item.src)}
              data-cursor="SWITCH"
              className={`px-2.5 sm:px-3 py-2 sm:py-1.5 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-mono transition-all cursor-pointer flex items-center justify-center gap-1.5 text-center ${
                activeHeroImg === item.src
                  ? "bg-[#ff1a2b] text-white font-bold shadow-md shadow-red-950/80 scale-102"
                  : "text-zinc-400 hover:text-white bg-zinc-900/40 sm:bg-transparent"
              }`}
            >
              <span>{item.label}</span>
              {activeHeroImg === item.src && (
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping hidden sm:inline-block" />
              )}
            </button>
          ))}
        </div>

        {/* Micro-Interaction Hint */}
        <div className="mt-2 text-[10px] font-mono text-zinc-400 flex items-center justify-center gap-1.5 opacity-80">
          <span className="text-cyan-400">💧</span>
          <span>Move cursor or tap screen to spray detailing mist</span>
        </div>

        {/* Bottom Trust Stat Bar - Clean 2x2 on Mobile, 4 Cols on Desktop */}
        <div className="mt-8 sm:mt-12 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 pt-6 sm:pt-8 border-t border-white/10 px-1 sm:px-0">
          {heroStats.map((stat, i) => (
            <div
              key={i}
              className="p-2.5 sm:p-3.5 rounded-xl bg-black/60 border border-white/5 backdrop-blur-md flex flex-col items-center text-center group hover:border-[#ff1a2b]/30 transition-colors"
            >
              <span className="text-base sm:text-2xl font-black text-white font-['Space_Grotesk'] tracking-tight group-hover:text-[#ff1a2b] transition-colors">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-zinc-300 uppercase tracking-wider mt-0.5">
                {stat.label}
              </span>
              <span className="text-[9px] sm:text-[10px] text-zinc-400 font-mono mt-0.5 truncate w-full">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>

        {/* Minimal Scroll Indicator */}
        <a
          href="#services"
          data-cursor="EXPLORE"
          className="mt-6 sm:mt-10 inline-flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 group-hover:text-zinc-200">
            SCROLL TO EXPLORE ↓
          </span>
          <ChevronDown className="w-4 h-4 text-[#ff1a2b] animate-bounce" />
        </a>
      </div>
    </section>
  );
}

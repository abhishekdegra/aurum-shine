import React, { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, ArrowUpRight, ShieldCheck, MessageCircle } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "PPF", href: "#ppf" },
    { label: "Ceramic", href: "#ceramic" },
    { label: "Before/After", href: "#before-after" },
    { label: "Studio", href: "#studio" },
    { label: "Process", href: "#process" },
    { label: "Why Us", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Quick Info Bar */}
      <div className="bg-[#050507] border-b border-white/5 py-1.5 px-4 text-xs font-mono text-zinc-400 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#ff1a2b] animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a2b] -ml-2.5" />
              Jaipur's Premier Automotive Detailing Studio
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">Dust-Free Bays • Certified TPU Installers • 10H Ceramic</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff1a2b]" />
              <span>{STUDIO_INFO.phone}</span>
            </a>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Mon - Sun: 9:30 AM – 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090c]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-2 sm:py-2.5"
            : "bg-gradient-to-b from-[#09090c]/90 to-transparent py-2.5 md:py-3 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Provided Aurum Shine Detailing Logo */}
            <img
              src="/images/aurum-shine-logo.jpg"
              alt="Aurum Shine Detailing Logo"
              className="h-10 md:h-11 w-auto max-w-[56px] object-contain rounded-lg border border-white/15 bg-black/40 group-hover:border-[#ff1a2b]/60 transition-colors shadow-sm"
            />

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-wider text-lg md:text-xl text-white font-['Outfit'] group-hover:text-[#ff1a2b] transition-colors">
                  AURUM SHINE
                </span>
                <span className="font-black tracking-wider text-lg md:text-xl text-[#ff1a2b] font-['Outfit']">
                  DETAILING
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-zinc-400">
                  JAIPUR • STUDIO
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs 2xl:text-sm font-medium text-zinc-300 hover:text-white transition-colors relative py-1 group whitespace-nowrap"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff1a2b] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Area with dedicated left border and margin separation */}
          <div className="hidden lg:flex items-center gap-2.5 2xl:gap-3 shrink-0 ml-4 pl-4 border-l border-white/10">
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Aurum%20Shine%20Detailing%20Jaipur,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 2xl:px-3.5 2xl:py-2 rounded-md bg-zinc-900/90 border border-white/15 hover:border-emerald-500/50 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-emerald-400 transition-all shrink-0 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 2xl:px-4 2xl:py-2 rounded-md text-xs font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r from-[#ff1a2b] to-[#c70f1e] hover:from-[#ff3344] hover:to-[#e11d28] shadow-md shadow-red-950/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shrink-0 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Detailing</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:inline-flex hidden items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold font-mono uppercase bg-[#ff1a2b] text-white"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>

            <a
              href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-[#ff1a2b] hover:bg-zinc-800 transition-colors"
              aria-label="Call Studio"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0c0c10] border-b border-white/10 px-5 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            {/* Mobile Drawer Brand Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <img
                src="/images/aurum-shine-logo.jpg"
                alt="Aurum Shine Detailing Logo"
                className="h-10 w-auto object-contain rounded-lg border border-white/10 bg-black/40"
              />
              <div className="flex flex-col">
                <span className="font-bold tracking-wider text-base text-white font-['Outfit']">
                  AURUM SHINE <span className="text-[#ff1a2b]">DETAILING</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-zinc-400">
                  JAIPUR • STUDIO
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md bg-zinc-900/60 border border-white/5 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r from-[#ff1a2b] to-[#c70f1e] shadow-lg shadow-red-950/40"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Detailing</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-200"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ff1a2b]" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Aurum%20Shine%20Detailing%20Jaipur,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

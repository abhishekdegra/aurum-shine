import React, { useState } from "react";
import { Shield, Sparkles, Disc, Armchair, Droplets, Wrench, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { SERVICES, STUDIO_INFO } from "../data/content";

const serviceIcons = {
  ppf: Shield,
  ceramic: Sparkles,
  detailing: Disc,
  interior: Armchair,
  wash: Droplets,
  accessories: Wrench,
};

const getServiceObjPosition = (id) => {
  if (id === "ppf") return "object-top";
  if (id === "ceramic") return "object-[center_35%]";
  return "object-center";
};

export default function Services({ onOpenBooking }) {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#08080a] relative border-b border-white/10 carbon-mesh overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ff1a2b]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#ff1a2b]/30 text-xs font-mono text-[#ff4d5a] uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a2b]" />
              Precision Automotive Care
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-['Outfit']">
              STUDIO SERVICES
            </h2>
            <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Hover over each discipline to inspect our studio methods, optical standards, and warranty coverage.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              data-cursor="QUOTE"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-[#ff1a2b] border border-white/10 hover:border-[#ff1a2b] text-xs font-mono font-bold uppercase text-white transition-all duration-200"
            >
              <span>Custom Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* DESKTOP: Large Interactive Service Panels (Split Master View) */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch min-h-[580px]">
          {/* Left Service Menu Panels */}
          <div className="col-span-5 flex flex-col justify-between space-y-2">
            {SERVICES.map((service, idx) => {
              const Icon = serviceIcons[service.id] || Shield;
              const isActive = activeServiceId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  data-cursor="EXPLORE"
                  className={`group relative p-4 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-zinc-900/90 border-[#ff1a2b] shadow-xl shadow-red-950/40 translate-x-2"
                      : "bg-zinc-950/60 border-white/5 hover:border-white/20 hover:bg-zinc-900/50"
                  }`}
                >
                  {/* Left Red Indicator Bar */}
                  {isActive && (
                    <div className="absolute left-0 inset-y-0 w-1 bg-[#ff1a2b] rounded-l-xl shadow-[0_0_12px_#ff1a2b]" />
                  )}

                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xl font-black font-['Space_Grotesk'] ${
                        isActive ? "text-[#ff1a2b]" : "text-zinc-600"
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    <div>
                      <h3
                        className={`text-base font-bold font-['Outfit'] tracking-wide transition-colors ${
                          isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                        }`}
                      >
                        {service.name.split("(")[0]}
                      </h3>
                      <p className="text-xs text-zinc-500 font-mono mt-0.5 line-clamp-1">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isActive ? "bg-[#ff1a2b] text-white" : "bg-zinc-900 text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isActive ? "translate-x-1 text-[#ff1a2b]" : "opacity-0 group-hover:opacity-100 text-zinc-500"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Immersive Expanded Panel */}
          <div className="col-span-7 relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl flex flex-col justify-end p-8 group">
            {/* Background Image with Dynamic Fade */}
            <img
              key={activeService.id}
              src={activeService.image}
              alt={activeService.name}
              className={`absolute inset-0 w-full h-full object-cover ${getServiceObjPosition(activeService.id)} transition-all duration-700 scale-102 group-hover:scale-105`}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[#060608]/70 to-[#060608]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060608]/80 via-transparent to-[#060608]/60" />

            {/* Top Badges */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md border border-white/15 text-zinc-200 font-bold">
                {activeService.badge}
              </span>
              <span className="px-3 py-1 rounded-md text-[11px] font-mono text-[#ff4d5a] bg-zinc-950/80 border border-[#ff1a2b]/30 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {activeService.duration}
              </span>
            </div>

            {/* Bottom Content Presentation */}
            <div className="relative z-10 space-y-4">
              <div className="inline-block">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#ff1a2b] font-bold">
                  STUDIO DISCIPLINE
                </span>
                <h3 className="text-3xl font-black text-white font-['Outfit'] mt-1">
                  {activeService.name}
                </h3>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed max-w-xl font-light">
                {activeService.longDesc}
              </p>

              {/* Feature Tags */}
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                {activeService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff1a2b] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => onOpenBooking(activeService.name)}
                  data-cursor="BOOK"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#ff1a2b] hover:bg-[#d61323] transition-colors shadow-lg shadow-red-950/50"
                >
                  <span>Book {activeService.name.split("(")[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Aurum%20Shine%20Detailing%20Jaipur,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(activeService.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="WHATSAPP"
                  className="px-4 py-3 rounded-lg bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET: Stacked Interactive Cards */}
        <div className="lg:hidden space-y-5">
          {SERVICES.map((service, idx) => {
            const Icon = serviceIcons[service.id] || Shield;
            const isExpanded = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                className="rounded-xl bg-zinc-900/70 border border-white/10 overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-48 w-full bg-zinc-950">
                  <img
                    src={service.image}
                    alt={service.name}
                    className={`w-full h-full object-cover ${getServiceObjPosition(service.id)}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-200">
                      0{idx + 1} • {service.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-[#ff1a2b] text-white">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-bold text-white font-['Outfit']">
                    {service.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    {service.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff1a2b] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center gap-2">
                    <button
                      onClick={() => onOpenBooking(service.name)}
                      className="flex-1 py-2.5 rounded-lg bg-[#ff1a2b] text-white text-xs font-mono font-bold uppercase tracking-wider text-center"
                    >
                      Book Service
                    </button>
                    <a
                      href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Aurum%20Shine%20Detailing%20Jaipur,%20I%20want%20to%20inquire%20about%20${encodeURIComponent(service.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2.5 rounded-lg bg-zinc-800 text-xs font-mono text-emerald-400 border border-white/5"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

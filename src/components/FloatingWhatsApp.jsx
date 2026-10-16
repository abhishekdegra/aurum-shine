import React from "react";
import { MessageCircle, Calendar } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function FloatingWhatsApp({ onOpenBooking }) {
  return (
    <aside aria-label="Quick Booking" className="fixed bottom-7 right-7 z-40 hidden md:flex items-center gap-2 group">
      {/* Primary WhatsApp / Book Pill */}
      <button
        onClick={() => onOpenBooking()}
        data-cursor="BOOK"
        className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-zinc-950/90 hover:bg-zinc-900 border border-white/15 hover:border-emerald-500/50 backdrop-blur-md shadow-2xl shadow-black transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-950/40"
      >
        {/* Pulsing Status Dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>

        <div className="flex flex-col text-left">
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1">
            <MessageCircle className="w-3 h-3 text-emerald-500" />
            WhatsApp Studio
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
            Book Your Detailing
          </span>
        </div>
      </button>

      {/* Quick Direct Link to WA */}
      <a
        href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Aurum%20Shine%20Detailing%20Jaipur,%20I%20would%20like%20to%20book%20a%20detailing%20slot.`}
        target="_blank"
        rel="noopener noreferrer"
        data-cursor="CHAT"
        className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-950/50 hover:scale-105 transition-all"
        aria-label="Direct WhatsApp Chat"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>
    </aside>
  );
}

import React, { useState } from "react";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { GALLERY_ITEMS } from "../data/content";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = [
    "All",
    "PPF Protection",
    "Ceramic Gloss",
    "Studio Bay",
    "Paint Correction",
    "Interior Detailing",
    "Cockpit & Wheels",
  ];

  const filteredItems =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setActiveLightboxIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const getObjectPosition = (image) => {
    if (image.includes("facade")) return "object-[center_20%]";
    if (image.includes("ppf-installation")) return "object-top";
    if (image.includes("ceramic-gloss")) return "object-[center_35%]";
    return "object-center";
  };

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#08080a] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#ff1a2b]/30 text-xs font-mono text-[#ff4d5a] uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Craftsmanship Showcase
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-['Outfit']">
              EDITORIAL GALLERY
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base font-light">
              Real cars, authentic studio craft, and unedited optical clarity captured inside Aurum Shine Detailing Jaipur.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
                  filter === cat
                    ? "bg-[#ff1a2b] text-white font-bold shadow-md shadow-red-950/40"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry-Inspired Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => {
            const isFeatured = index === 0 || index === 4;

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-xl overflow-hidden border border-white/10 bg-zinc-950 cursor-pointer transition-all duration-300 hover:border-[#ff1a2b]/60 hover:shadow-2xl hover:shadow-black ${
                  isFeatured ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative w-full ${isFeatured ? "h-72 sm:h-96" : "h-72 sm:h-80"} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover ${getObjectPosition(item.image)} transition-transform duration-700 ease-out group-hover:scale-105`}
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Tag */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase text-zinc-300">
                      {item.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#ff1a2b]/30 border border-[#ff1a2b]/50 text-[10px] font-mono text-[#ff808b]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Center Zoom Icon on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-[#ff1a2b] text-white flex items-center justify-center shadow-xl shadow-black/80 scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Captions */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit'] group-hover:text-[#ff1a2b] transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-400 font-light line-clamp-1">
                        {item.desc}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-[#ff4d5a] opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>VIEW IMAGE</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {activeLightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900/80 text-zinc-300 hover:text-white border border-white/10 z-50 transition-colors"
              aria-label="Close image preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav */}
            <button
              onClick={prevLightbox}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 text-white border border-white/10 hover:bg-[#ff1a2b] transition-colors z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav */}
            <button
              onClick={nextLightbox}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 text-white border border-white/10 hover:bg-[#ff1a2b] transition-colors z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content */}
            <div
              className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 max-h-[75vh] flex items-center justify-center">
                <img
                  src={filteredItems[activeLightboxIndex].image}
                  alt={filteredItems[activeLightboxIndex].title}
                  className="max-w-full max-h-[75vh] object-contain"
                />
              </div>

              <div className="mt-4 w-full flex flex-col sm:flex-row sm:items-center justify-between text-left gap-2 bg-zinc-900/80 p-4 rounded-xl border border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff1a2b] font-bold">
                    {filteredItems[activeLightboxIndex].category} • {filteredItems[activeLightboxIndex].tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                    {filteredItems[activeLightboxIndex].title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">
                    {filteredItems[activeLightboxIndex].desc}
                  </p>
                </div>

                <div className="text-xs font-mono text-zinc-500 shrink-0">
                  {activeLightboxIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

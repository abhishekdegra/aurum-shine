import React, { useState } from "react";
import CinematicIntro from "./components/CinematicIntro";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import OfferBanner from "./components/OfferBanner";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PPFFeature from "./components/PPFFeature";
import CeramicFeature from "./components/CeramicFeature";
import BeforeAfter from "./components/BeforeAfter";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import StudioExperience from "./components/StudioExperience";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const handleOpenBooking = (service = "") => {
    setPreselectedService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedService("");
  };

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col font-['Inter'] relative selection:bg-[#ff1a2b] selection:text-white">
      {/* 1. Cinematic Opening Intro Animation */}
      {showIntro && <CinematicIntro onComplete={() => setShowIntro(false)} />}

      {/* 2. Desktop Precision Custom Cursor */}
      <CustomCursor />

      {/* 3. Top Special Offer Ribbon */}
      <OfferBanner onOpenBooking={handleOpenBooking} />

      {/* 4. Sticky Header & Glass Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 5. Main Cinematic Sections Flow */}
      <main className="flex-1">
        {/* Full-Screen Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 6 Large Interactive Service Panels */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* PPF Military-Grade Armor Split Showcase */}
        <PPFFeature onOpenBooking={handleOpenBooking} />

        {/* 10H Ceramic Hydrophobic Feature Section */}
        <CeramicFeature onOpenBooking={handleOpenBooking} />

        {/* Interactive Before & After Paint Correction Slider */}
        <BeforeAfter onOpenBooking={handleOpenBooking} />

        {/* Why Aurum Shine Detailing (Trust & Standards) */}
        <WhyUs onOpenBooking={handleOpenBooking} />

        {/* 4-Step Systematic Protocol Timeline */}
        <Process onOpenBooking={handleOpenBooking} />

        {/* Real Studio Facility Experience (Jaipur) */}
        <StudioExperience onOpenBooking={handleOpenBooking} />

        {/* Editorial Automotive Gallery & Full Lightbox */}
        <Gallery />

        {/* Authentic Customer Feedback & Google Reviews */}
        <Reviews />

        {/* Contact, Call & Studio Location */}
        <Contact onOpenBooking={handleOpenBooking} />
      </main>

      {/* Premium Dark Automotive Footer */}
      <Footer onOpenBooking={handleOpenBooking} onReplayIntro={handleReplayIntro} />

      {/* Desktop Floating WhatsApp Studio Widget */}
      <FloatingWhatsApp onOpenBooking={handleOpenBooking} />

      {/* Fixed Bottom Mobile WhatsApp Action Bar */}
      <MobileBottomBar onOpenBooking={handleOpenBooking} />

      {/* Interactive WhatsApp Booking System Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={preselectedService}
      />
    </div>
  );
}

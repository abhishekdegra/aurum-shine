import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, Car, User, Phone, MessageSquare, Shield, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { STUDIO_INFO, SERVICES } from "../data/content";

export default function BookingModal({ isOpen, onClose, initialService = "" }) {
  // Form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [carModel, setCarModel] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("10:00 AM - Morning Slot");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialService) {
      // Find matching service name
      const found = SERVICES.find(
        (s) => s.name.toLowerCase().includes(initialService.toLowerCase()) ||
               s.id.toLowerCase().includes(initialService.toLowerCase())
      );
      if (found) {
        setService(found.name);
      } else {
        setService(initialService);
      }
    } else if (!service) {
      setService("PPF (Paint Protection Film)");
    }
  }, [initialService]);

  useEffect(() => {
    // Default to tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setError("Please enter a valid phone number");
      return;
    }
    if (!carModel.trim()) {
      setError("Please enter your car make and model (e.g. Mercedes C-Class, Thar, Fortuner)");
      return;
    }

    setError("");

    const formattedDate = date
      ? new Date(date).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
      : "Flexible";

    const messageLines = [
      "*AURUM SHINE DETAILING — JAIPUR*",
      "_Premium Automotive Detailing Studio_",
      "━━━━━━━━━━━━━━━━━━━━━",
      "*STUDIO BOOKING ENQUIRY*",
      "",
      `• *Client Name:* ${name.trim()}`,
      `• *Contact:* ${phone.trim()}`,
      `• *Vehicle:* ${carModel.trim()}`,
      `• *Service:* ${service.trim()}`,
      `• *Preferred Date:* ${formattedDate}`,
      `• *Preferred Slot:* ${time.trim()}`,
    ];

    if (message && message.trim()) {
      messageLines.push(`• *Notes:* ${message.trim()}`);
    }

    messageLines.push(
      "━━━━━━━━━━━━━━━━━━━━━",
      "Hello Team, please check slot availability for my vehicle at your Jaipur studio."
    );

    const text = messageLines.join("\n");
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodedText}`;

    // Confetti celebration
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#ff1a2b", "#ffffff", "#34d399"],
      });
    } catch (err) {
      // ignore
    }

    setSubmitted(true);

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl rounded-2xl bg-[#0e0e13] border border-white/15 shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#ff1a2b]/20 border border-[#ff1a2b]/40 flex items-center justify-center text-[#ff1a2b]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff4d5a] font-bold">
                Aurum Shine Detailing • Jaipur Studio
              </span>
              <h3 className="text-xl font-black text-white font-['Outfit'] uppercase">
                BOOK YOUR DETAILING
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-lg bg-red-950/70 border border-red-500/50 text-red-200 text-xs font-mono">
                  ⚠ {error}
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arjun Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-[#ff1a2b] focus:outline-none focus:ring-1 focus:ring-[#ff1a2b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 95094 54982"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-[#ff1a2b] focus:outline-none focus:ring-1 focus:ring-[#ff1a2b]"
                    />
                  </div>
                </div>
              </div>

              {/* Car Model */}
              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                  Car Make & Model *
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mercedes E-Class / Thar 4x4 / Fortuner / BMW 330i"
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-[#ff1a2b] focus:outline-none focus:ring-1 focus:ring-[#ff1a2b]"
                  />
                </div>
              </div>

              {/* Select Service */}
              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                  Select Detailing Service *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-lg bg-zinc-900/90 border border-white/10 text-white text-sm focus:border-[#ff1a2b] focus:outline-none focus:ring-1 focus:ring-[#ff1a2b]"
                >
                  <option value="PPF (Paint Protection Film)">PPF (Paint Protection Film)</option>
                  <option value="Ceramic Coating (Nano Ceramic)">Ceramic Coating (Nano Ceramic 10H)</option>
                  <option value="Car Detailing (Paint Correction)">Car Detailing (Multi-Stage Paint Correction)</option>
                  <option value="Deep Interior Cleaning & Spa">Deep Interior Cleaning & Sanitization</option>
                  <option value="Premium Snow Foam Car Wash">Premium Snow Foam Car Wash</option>
                  <option value="Car Accessories & Styling">Car Accessories & Custom Styling</option>
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-zinc-900/90 border border-white/10 text-white text-sm focus:border-[#ff1a2b] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg bg-zinc-900/90 border border-white/10 text-white text-sm focus:border-[#ff1a2b] focus:outline-none"
                  >
                    <option value="10:00 AM - Morning Slot">10:00 AM (Morning Slot)</option>
                    <option value="01:00 PM - Afternoon Slot">01:00 PM (Afternoon Slot)</option>
                    <option value="04:00 PM - Evening Slot">04:00 PM (Evening Slot)</option>
                    <option value="Flexible / Studio Consultation">Flexible / Need Studio Consultation</option>
                  </select>
                </div>
              </div>

              {/* Custom Message */}
              <div>
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider mb-1.5">
                  Special Notes / Current Paint Condition (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Mention any existing scratches, brand new car delivery date, or specific areas of concern..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-sm focus:border-[#ff1a2b] focus:outline-none"
                />
              </div>

              {/* Live WhatsApp Format Preview */}
              <div className="p-3.5 rounded-xl bg-[#0b141a] border border-[#202c33] text-left">
                <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 mb-2">
                  <span className="flex items-center gap-1.5 font-bold">
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp Format Preview
                  </span>
                  <span className="text-[10px] text-zinc-500">Auto-formatted</span>
                </div>
                <div className="p-3 rounded-lg bg-[#111b21] text-xs font-mono text-zinc-200 space-y-1 border-l-2 border-emerald-500">
                  <div className="text-white font-bold">AURUM SHINE DETAILING — JAIPUR</div>
                  <div className="text-zinc-400 italic text-[11px]">Premium Automotive Detailing Studio</div>
                  <div className="text-zinc-600 text-[10px]">───────────────────────</div>
                  <div>• <strong className="text-white">Customer:</strong> {name || "Your Name"}</div>
                  <div>• <strong className="text-white">Phone:</strong> {phone || "+91 95094 54982"}</div>
                  <div>• <strong className="text-white">Vehicle:</strong> {carModel || "Your Car Make & Model"}</div>
                  <div>• <strong className="text-white">Service:</strong> {service}</div>
                  <div>• <strong className="text-white">Date:</strong> {date || "Preferred Date"} ({time.split("-")[0].trim()})</div>
                  {message && <div>• <strong className="text-white">Notes:</strong> {message}</div>}
                </div>
              </div>

              {/* Submission Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-lg text-sm font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r from-[#ff1a2b] via-[#e61222] to-[#b30816] hover:from-[#ff3344] hover:to-[#d61323] shadow-xl shadow-red-950/60 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Continue on WhatsApp</span>
              </button>

              <p className="text-[11px] text-zinc-500 text-center font-mono">
                Your request details will be opened directly in WhatsApp with our Jaipur Studio coordinator. No spam guaranteed.
              </p>
            </form>
          ) : (
            /* Post-Submit Confirmation Box */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-2xl font-bold text-white font-['Outfit']">
                WhatsApp Link Prepared!
              </h4>

              <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you <strong className="text-white">{name}</strong>. Your detailing request for your <strong className="text-white">{carModel}</strong> has opened in WhatsApp.
              </p>

              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 text-left text-xs font-mono space-y-1.5 max-w-md mx-auto">
                <div className="text-zinc-400">Recipient: <span className="text-white">Aurum Shine Detailing Jaipur ({STUDIO_INFO.phone})</span></div>
                <div className="text-zinc-400">Service: <span className="text-[#ff4d5a]">{service}</span></div>
                <div className="text-zinc-400">Slot Request: <span className="text-white">{date} ({time})</span></div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold uppercase transition-colors"
                >
                  Re-Open WhatsApp
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono uppercase transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Call Backup */}
        <div className="p-4 bg-zinc-950 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
          <span>Prefer direct call?</span>
          <a
            href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
            className="text-[#ff4d5a] hover:text-white font-bold flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            {STUDIO_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

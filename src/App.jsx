import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LearningTracks } from "@/components/LearningTracks";
import { PricingSection } from "@/components/PricingSection";
import { TeachersSection } from "@/components/TeachersSection";
import { SafeguardingSection } from "@/components/SafeguardingSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { Toaster } from "sonner";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [lang, setLang] = useState("en");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Sonner Toast Notification Provider */}
      <Toaster position="top-right" richColors />

      {/* Navigation Header */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        currentLang={lang}
        setLang={setLang}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />
        <LearningTracks onOpenBooking={() => setIsBookingOpen(true)} />
        <PricingSection onOpenBooking={() => setIsBookingOpen(true)} />
        <TeachersSection />
        <SafeguardingSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Booking Dialog Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}

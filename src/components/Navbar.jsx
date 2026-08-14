import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Menu, X, Sparkles, BookOpen, ShieldCheck } from "lucide-react";

export function Navbar({ onOpenBooking, currentLang, setLang }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 glass-panel shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo with Official Garaad Logo Image */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/garaad-logo.jpg"
            alt="Garaad Somali Language Learning Logo"
            className="h-12 w-auto object-contain rounded-xl shadow-xs group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-2xl text-slate-900 tracking-tight">Garaad</span>
              <Badge variant="gold" className="text-[10px] px-2 py-0">Diaspora Hub</Badge>
            </div>
            <span className="text-xs text-slate-500 font-medium">Somaliland Diaspora Learning Centre</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#tracks" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-indigo-500" />
            Learning Tracks
          </a>
          <a href="#pricing" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
            Tuition & Pricing
          </a>
          <a href="#teachers" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
            Our Teachers
          </a>
          <a href="#safeguarding" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Safeguarding
          </a>
          <a href="#faq" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right CTA & Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(currentLang === 'en' ? 'so' : 'en')}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            title="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-indigo-600" />
            <span>{currentLang === 'en' ? 'English (EN)' : 'Af-Somali (SO)'}</span>
          </button>

          <Button variant="accent" size="default" onClick={onOpenBooking} className="shadow-md">
            <Sparkles className="w-4 h-4" />
            Book Free Assessment
          </Button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2">
          <a
            href="#tracks"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 py-2 border-b border-slate-100"
          >
            Learning Tracks
          </a>
          <a
            href="#pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 py-2 border-b border-slate-100"
          >
            Tuition & Pricing
          </a>
          <a
            href="#teachers"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 py-2 border-b border-slate-100"
          >
            Our Teachers
          </a>
          <a
            href="#safeguarding"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 py-2 border-b border-slate-100"
          >
            Safeguarding
          </a>
          <a
            href="#faq"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 py-2 border-b border-slate-100"
          >
            FAQ
          </a>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => setLang(currentLang === 'en' ? 'so' : 'en')}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm"
            >
              <Globe className="w-4 h-4 text-indigo-600" />
              Switch Language ({currentLang === 'en' ? 'Af-Somali' : 'English'})
            </button>
            <Button variant="accent" size="lg" onClick={() => { setIsMobileMenuOpen(false); onOpenBooking(); }}>
              <Sparkles className="w-4 h-4" />
              Book Free Assessment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

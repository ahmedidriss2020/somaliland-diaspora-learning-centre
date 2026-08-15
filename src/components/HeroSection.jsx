import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Shield, Star, Users, Video, Award, CheckCircle2, ArrowRight, Volume2, RotateCw, Globe } from "lucide-react";

export function HeroSection({ onOpenBooking }) {
  // Interactive 3D Somali Vocabulary Flashcard state
  const vocabularyCards = [
    { somali: "Kusoo Dhawoow", english: "Welcome", pronunciation: "Koo-soo Dha-woow", track: "Af-Somali" },
    { somali: "Dhaqan iyo Hadaf", english: "Culture & Purpose", pronunciation: "Dha-qan ee-yo Ha-daf", track: "Heritage" },
    { somali: "Hoy & Reer", english: "Home & Family", pronunciation: "Hoy & Reer", track: "Community" },
    { somali: "Af-Hooyo", english: "Mother Tongue", pronunciation: "Af-Hoo-yo", track: "Language" },
  ];

  const [activeFlashcardIndex, setActiveFlashcardIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = vocabularyCards[activeFlashcardIndex];

  const handleNextFlashcard = () => {
    setIsFlipped(false);
    setActiveFlashcardIndex((prev) => (prev + 1) % vocabularyCards.length);
  };

  const handlePlayAudioSim = () => {
    setIsPlayingAudio(true);
    setTimeout(() => setIsPlayingAudio(false), 1200);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800 min-h-[88vh] flex items-center bg-slate-950">
      
      {/* Heritage Background Picture of Somali Camels Sunset with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-hero-camels.jpg"
          alt="Somali Camels Sunset Background"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
        />
        {/* Crisp high-contrast backdrop overlay (NO glowing blur blobs) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-indigo-950/75"></div>
        <div className="absolute inset-0 somali-pattern-bg opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-bold shadow-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Live 1-on-1 & Small Group Interactive Classes</span>
              <Badge variant="gold" className="ml-1 text-[10px]">2026 Cohort Open</Badge>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Keep Somali Diaspora Youth Connected to Their <span className="somali-gradient-text">Heritage & Language</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Garaad provides structured, engaging online learning for children and young adults across the UK, Europe, North America, and Gulf. Master <strong className="text-amber-300 font-semibold">Af-Somali</strong> and <strong className="text-emerald-300 font-semibold">Dhaqan culture</strong> with certified native tutors.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UK DBS & Background Checked Tutors</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UK, EU, USA & Gulf Timezone Schedules</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Age-Appropriate Curriculum (Ages 5-18+)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Placement & Parent Consultation</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button variant="accent" size="lg" onClick={onOpenBooking} className="w-full sm:w-auto shadow-3d-button text-base font-extrabold">
                Book Free Trial Lesson
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <a href="#tracks">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
                  Explore Learning Tracks
                </Button>
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center border-2 border-slate-900 shadow-md">AH</div>
                  <div className="w-9 h-9 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center border-2 border-slate-900 shadow-md">FA</div>
                  <div className="w-9 h-9 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center border-2 border-slate-900 shadow-md">MO</div>
                </div>
                <span className="font-bold text-white">500+ Diaspora Families Enrolled</span>
              </div>

              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-100">4.9/5 Parent Rating</span>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive 3D Card Showcase (Clean 3D shadows, NO glowing blur blobs) */}
          <div className="lg:col-span-5 relative perspective-1000">
            
            <div className="relative rounded-3xl border border-white/20 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-7 shadow-3d-card shadow-3d-card-hover preserve-3d text-slate-100 space-y-6">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 translate-z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base">Live Virtual Classroom</h3>
                    <p className="text-xs text-slate-400">Interactive HD Tutors Studio</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Live Demo
                </span>
              </div>

              {/* Classroom Interactive Graphic Box */}
              <div className="rounded-2xl bg-slate-950/90 border border-white/10 p-5 space-y-4 shadow-inner relative overflow-hidden translate-z-20">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-bold text-emerald-400">● Track: Af-Somali Beginner</span>
                  <span>Tutor: Ustadh Mohamed</span>
                </div>

                {/* Interactive 3D Word Flashcard Widget */}
                <div 
                  className="text-center py-5 px-4 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-amber-500/30 cursor-pointer transition-all duration-300 hover:border-amber-400 group relative"
                  onClick={() => setIsFlipped(!isFlipped)}
                >
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1 flex items-center justify-center gap-1">
                    <span>Interactive Somali Flashcard</span>
                    <RotateCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                  </div>

                  {!isFlipped ? (
                    <div>
                      <span className="text-2xl sm:text-3xl font-arabic text-amber-300 font-bold block mb-1">
                        "{currentCard.somali}"
                      </span>
                      <span className="text-xs text-slate-400 font-mono">[{currentCard.pronunciation}]</span>
                      <p className="text-[11px] text-indigo-300 mt-1 font-semibold">Click to reveal English meaning ➔</p>
                    </div>
                  ) : (
                    <div>
                      <span className="text-xl sm:text-2xl font-heading text-emerald-300 font-bold block mb-1">
                        "{currentCard.english}"
                      </span>
                      <span className="text-xs text-amber-300 font-mono">Track: {currentCard.track}</span>
                      <p className="text-[11px] text-teal-300 mt-1 font-semibold">Click to flip back ↺</p>
                    </div>
                  )}
                </div>

                {/* Audio simulation & Flashcard Switcher */}
                <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                  <button 
                    onClick={handlePlayAudioSim} 
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white font-bold transition-colors cursor-pointer"
                  >
                    <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-bounce text-amber-300' : ''}`} />
                    <span>{isPlayingAudio ? "Playing Pronunciation..." : "Audio Preview"}</span>
                  </button>

                  <button 
                    onClick={handleNextFlashcard}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 font-semibold cursor-pointer"
                  >
                    <span>Next Word</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* 3D Floating Stat Highlights */}
              <div className="grid grid-cols-3 gap-3 text-center translate-z-30">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="font-heading font-extrabold text-amber-400 text-xl">100%</div>
                  <div className="text-[11px] text-slate-300 font-semibold">Native Tutors</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="font-heading font-extrabold text-emerald-400 text-xl">Max 6</div>
                  <div className="text-[11px] text-slate-300 font-semibold">Students/Class</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="font-heading font-extrabold text-orange-400 text-xl">Flex</div>
                  <div className="text-[11px] text-slate-300 font-semibold">Weekend/Evg</div>
                </div>
              </div>

              {/* Bottom Callout Button */}
              <Button variant="accent" className="w-full h-12 text-sm font-extrabold shadow-3d-button" onClick={onOpenBooking}>
                Reserve Your Child's Spot Now
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}


import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Shield, Star, Users, Video, Award, CheckCircle2, ArrowRight } from "lucide-react";

export function HeroSection({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200/60 min-h-[85vh] flex items-center">
      
      {/* Background Image of Somali Camels Sunset with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-hero-camels.jpg"
          alt="Somali Camels Sunset Background"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 hover:scale-100"
        />
        {/* Soft overlay gradient for high contrast text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/85 to-indigo-950/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-semibold shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              <span>Live 1-on-1 & Small Group Interactive Classes</span>
              <Badge variant="gold" className="ml-1 text-[10px] bg-amber-400 text-slate-950">New 2026 Cohort</Badge>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
              Keep Somali Diaspora Youth Connected to Their <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-emerald-400 bg-clip-text text-transparent">Heritage & Language</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Garaad provides structured, engaging online learning for children and young adults across the UK, Europe, North America, and Gulf. Master <strong className="text-amber-300 font-semibold">Af-Somali</strong>, <strong className="text-emerald-300 font-semibold">Dhaqan culture</strong>, and <strong className="text-orange-300 font-semibold">Tarbiyah Islamic studies</strong> with certified native tutors.
            </p>

            {/* Quick Benefits Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UK DBS & Background Checked Tutors</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UK, EU, USA & Gulf Timezone Schedules</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Age-Appropriate Curriculum (Ages 5-18+)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free Placement & Parent Consultation</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button variant="accent" size="lg" onClick={onOpenBooking} className="w-full sm:w-auto shadow-xl shadow-orange-500/30 text-base font-bold">
                Book Free Trial Lesson
                <ArrowRight className="w-4 h-4" />
              </Button>
              <a href="#tracks">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Explore Learning Tracks
                </Button>
              </a>
            </div>

            {/* Social Trust Metrics */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center border-2 border-slate-900">AH</div>
                  <div className="w-8 h-8 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center border-2 border-slate-900">FA</div>
                  <div className="w-8 h-8 rounded-full bg-orange-600 text-white font-bold text-xs flex items-center justify-center border-2 border-slate-900">MO</div>
                </div>
                <span className="font-semibold text-white">500+ Families Enrolled</span>
              </div>

              <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-100">4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 opacity-30 blur-xl animate-pulse-subtle"></div>
            
            <div className="relative rounded-3xl border border-white/20 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6 text-slate-100">
              
              {/* Card Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base">Live Virtual Classroom</h3>
                    <p className="text-xs text-slate-400">Interactive HD Studio Session</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold animate-pulse border border-emerald-500/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Live Demo
                </span>
              </div>

              {/* Classroom Preview Graphic */}
              <div className="rounded-2xl bg-slate-950/80 border border-white/10 p-5 space-y-4 shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-emerald-400">● Track: Af-Somali Beginner</span>
                  <span>Tutor: Ustadh Mohamed</span>
                </div>

                <div className="text-center py-4 bg-slate-900/90 rounded-xl border border-white/10">
                  <span className="text-2xl font-arabic text-amber-300 font-bold block mb-1">
                    "Kusoo dhawoow Xarunta Garaad"
                  </span>
                  <span className="text-xs text-slate-400">"Welcome to the Garaad Diaspora Centre"</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                  <span className="bg-slate-800 px-2.5 py-1 rounded-md text-amber-200">Vocabulary: Reer, Dhaqan, Hoy</span>
                  <span className="bg-indigo-900/80 text-indigo-200 px-2.5 py-1 rounded-md font-medium">Interactive Quiz Active</span>
                </div>
              </div>

              {/* Stat Highlights */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-heading font-bold text-amber-400 text-xl">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Native Speakers</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-heading font-bold text-emerald-400 text-xl">Max 6</div>
                  <div className="text-[11px] text-slate-400 font-medium">Students/Class</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-heading font-bold text-orange-400 text-xl">Flex</div>
                  <div className="text-[11px] text-slate-400 font-medium">Weekend & Evg</div>
                </div>
              </div>

              {/* Bottom Quick Callout */}
              <Button variant="accent" className="w-full h-12 text-sm font-bold shadow-lg shadow-orange-500/30" onClick={onOpenBooking}>
                Reserve Your Child's Spot Now
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

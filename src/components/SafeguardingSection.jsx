import React from "react";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, Eye, Video, FileCheck, CheckCircle } from "lucide-react";

export function SafeguardingSection() {
  return (
    <section id="safeguarding" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Child Safety First Standard</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Our 100% Safeguarding & Parent Peace-of-Mind Guarantee
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As parents ourselves in the diaspora, we hold child safety to the absolute highest UK & international standards. Your child’s online environment is monitored, secure, and respectful.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Enhanced DBS & Background Vetting</h4>
                    <p className="text-xs text-slate-300">All teachers undergo mandatory police background checks and identity verification.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Recorded & Audited Sessions</h4>
                    <p className="text-xs text-slate-300">Classroom sessions are securely recorded for quality control and parent review upon request.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Open Door Parent Portal Access</h4>
                    <p className="text-xs text-slate-300">Parents are welcome to drop in and observe live classes anytime with zero prior notice.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="font-heading font-bold text-xl text-white border-b border-white/10 pb-4">
                Parent Safety Checklist
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No private 1-on-1 unmonitored messaging between students & tutors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Encrypted Zoom Enterprise HD learning room infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict anti-bullying and respectful discourse policies</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dedicated Safeguarding Lead Officer available 7 days a week</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Safeguarding Officer Contact:</span>
                <span className="font-bold text-emerald-300">safeguarding@garaadlearning.com</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

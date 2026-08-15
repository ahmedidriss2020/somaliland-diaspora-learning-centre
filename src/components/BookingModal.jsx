import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Sparkles, Calendar, User, Mail, Phone, BookOpen, Clock, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck } from "lucide-react";

export function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "8-11",
    track: "af-somali",
    format: "1-on-1",
    timezone: "UK (GMT/BST)",
    preferredTime: "Weekend Morning",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Free Assessment Reserved Successfully!", {
      description: `Thank you ${formData.parentName || 'Parent'}. We've sent details to ${formData.email} to confirm ${formData.childName || 'your child'}'s trial slot.`,
      duration: 6000,
    });
    onClose();
    setStep(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-xl bg-slate-950 border-slate-800 text-white shadow-3d-card p-6 sm:p-8">
        
        {/* Modal Header */}
        <DialogHeader className="space-y-2 text-left">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="gold" className="text-[10px]">Free Trial Lesson</Badge>
              <span className="text-xs text-slate-400 font-semibold">• No Credit Card Needed</span>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 1 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'}`}>1</span>
              <span>—</span>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 2 ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'}`}>2</span>
            </div>
          </div>

          <DialogTitle className="font-heading font-extrabold text-2xl text-white">
            Book Free Child Placement & Assessment
          </DialogTitle>
          <DialogDescription className="text-slate-300 text-xs sm:text-sm">
            Meet a senior tutor, assess your child's starting level, and test out our live virtual classroom environment.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-3">
          
          {step === 1 ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Parent / Guardian Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hodan Ahmed"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium placeholder:text-slate-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="hodan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+44 7123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Child's First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Liban"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Child's Age Group
                  </label>
                  <select
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  >
                    <option value="5-7">5 - 7 years old</option>
                    <option value="8-11">8 - 11 years old</option>
                    <option value="12-14">12 - 14 years old</option>
                    <option value="15-18">15 - 18 years old</option>
                    <option value="Adult">Adult Learner</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex justify-end">
                <Button type="button" variant="default" className="shadow-3d-button font-extrabold" onClick={() => setStep(2)}>
                  Next: Schedule Preference
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Primary Track Interest
                  </label>
                  <select
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  >
                    <option value="af-somali">Af-Somali Language</option>
                    <option value="dhaqan">Dhaqan & Heritage Culture</option>
                    <option value="combo">All Tracks Combined</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Class Format Preference
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  >
                    <option value="1-on-1">1-on-1 Private Tuition</option>
                    <option value="small-group">Small Group (Max 6)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Location / Timezone
                  </label>
                  <select
                    value={formData.timezone}
                    onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  >
                    <option value="UK">United Kingdom (GMT/BST)</option>
                    <option value="EU">Europe (CET)</option>
                    <option value="US-East">US & Canada East (EST)</option>
                    <option value="US-West">US & Canada West (PST)</option>
                    <option value="Gulf">Gulf / Middle East (GST)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  >
                    <option value="Weekend Morning">Weekend Morning</option>
                    <option value="Weekend Afternoon">Weekend Afternoon</option>
                    <option value="Weekday Evening">Weekday Evening (After School)</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 bg-indigo-950/80 rounded-xl border border-indigo-500/30 text-xs text-indigo-200 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Our coordinator will WhatsApp/email you within 2 hours to confirm your tutor assignment.</span>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <Button type="button" variant="outline" className="bg-slate-900 text-white border-slate-700 hover:bg-slate-800 hover:text-white" onClick={() => setStep(1)}>
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
                <Button type="submit" variant="accent" className="shadow-3d-button font-extrabold">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Confirm Free Trial Booking
                </Button>
              </div>
            </div>
          )}

        </form>
      </DialogContent>
    </Dialog>
  );
}


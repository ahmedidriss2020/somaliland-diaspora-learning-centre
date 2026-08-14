import React from "react";
import { Badge } from "@/components/ui/badge";
import { Globe, Heart, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function Footer({ onOpenBooking }) {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Col with Garaad official logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/garaad-logo.jpg"
                alt="Garaad Somali Language Learning Logo"
                className="h-12 w-auto object-contain rounded-xl bg-white p-1"
              />
              <div>
                <span className="font-heading font-extrabold text-2xl text-white tracking-tight block">Garaad</span>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Somali Language Learning</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Somaliland Diaspora Learning Centre — Empowering diaspora youth across the UK, Europe, North America & Gulf to embrace their language, culture, and Islamic heritage.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Badge variant="outline" className="text-slate-300 border-slate-700">
                UK Registered Safeguarding
              </Badge>
              <Badge variant="outline" className="text-slate-300 border-slate-700">
                Native Somali Tutors
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-base text-slate-200">Learning Tracks</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#tracks" className="hover:text-indigo-400 transition-colors">Af-Somali Language</a></li>
              <li><a href="#tracks" className="hover:text-teal-400 transition-colors">Dhaqan Culture</a></li>
              <li><a href="#tracks" className="hover:text-orange-400 transition-colors">Tarbiyah & Deen</a></li>
              <li><a href="#tracks" className="hover:text-white transition-colors">Youth Literature</a></li>
            </ul>
          </div>

          {/* Tuition Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-base text-slate-200">Information</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#pricing" className="hover:text-white transition-colors">Tuition & Plans</a></li>
              <li><a href="#teachers" className="hover:text-white transition-colors">Our Teachers</a></li>
              <li><a href="#safeguarding" className="hover:text-white transition-colors">Safeguarding</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-base text-slate-200">Contact Diaspora Hub</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>support@garaadlearning.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+44 20 7946 0912 (UK Hub)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>London, UK & Hargeysa, Somaliland</span>
              </div>
            </div>
            <button
              onClick={onOpenBooking}
              className="mt-2 text-xs font-bold text-amber-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              Book Placement Assessment →
            </button>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Garaad — Somaliland Diaspora Learning Centre. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> for Somali youth worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}

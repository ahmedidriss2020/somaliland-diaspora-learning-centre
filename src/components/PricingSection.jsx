import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, ShieldCheck, HelpCircle } from "lucide-react";

export function PricingSection({ onOpenBooking }) {
  const [currency, setCurrency] = useState("GBP");

  const pricingData = {
    GBP: { symbol: "£", cheap: "45", middle: "70", threeKids: "40", threeKidsTotal: "120" },
    USD: { symbol: "$", cheap: "60", middle: "90", threeKids: "50", threeKidsTotal: "150" },
    EUR: { symbol: "€", cheap: "55", middle: "80", threeKids: "45", threeKidsTotal: "135" },
    CAD: { symbol: "CA$", cheap: "75", middle: "115", threeKids: "65", threeKidsTotal: "195" },
  };

  const rates = pricingData[currency];

  return (
    <section id="pricing" className="py-20 bg-slate-50 relative overflow-hidden border-b border-slate-200/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="accent" className="px-3.5 py-1 text-xs">
            <Sparkles className="w-3.5 h-3.5 mr-1 text-orange-600" />
            Simple & Transparent Tuition
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Flexible Monthly Tuition Plans
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No long-term contracts. Cancel or adjust your plan anytime. 1-on-1 private tuition with certified native tutors.
          </p>

          {/* Currency Switcher ToggleGroup */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Select Currency:</span>
            <ToggleGroup type="single" value={currency} onValueChange={(val) => val && setCurrency(val)} className="bg-white p-1 rounded-2xl border border-slate-300 shadow-sm">
              <ToggleGroupItem value="GBP" className="px-4 py-2 text-xs font-bold rounded-xl data-[state=on]:bg-indigo-600 data-[state=on]:text-white">£ GBP (UK)</ToggleGroupItem>
              <ToggleGroupItem value="USD" className="px-4 py-2 text-xs font-bold rounded-xl data-[state=on]:bg-indigo-600 data-[state=on]:text-white">$ USD (US/Global)</ToggleGroupItem>
              <ToggleGroupItem value="EUR" className="px-4 py-2 text-xs font-bold rounded-xl data-[state=on]:bg-indigo-600 data-[state=on]:text-white">€ EUR (Europe)</ToggleGroupItem>
              <ToggleGroupItem value="CAD" className="px-4 py-2 text-xs font-bold rounded-xl data-[state=on]:bg-indigo-600 data-[state=on]:text-white">CA$ CAD (Canada)</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        {/* Pricing Cards Grid (3 Plans) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Plan 1: Cheap / Lite 1-on-1 (£45 / month) */}
          <Card className="flex flex-col justify-between border-slate-200/90 shadow-3d-card shadow-3d-card-hover bg-white">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2 border-indigo-200 text-indigo-700 bg-indigo-50 font-bold">1-on-1 Lite</Badge>
              <CardTitle>Lite 1-on-1 Plan</CardTitle>
              <CardDescription>Essential private 1-on-1 tuition for steady weekly progress.</CardDescription>
              <div className="pt-4">
                <span className="font-heading font-extrabold text-5xl text-slate-900">{rates.symbol}{rates.cheap}</span>
                <span className="text-slate-500 text-sm font-semibold"> / month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 flex-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">What's included:</div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5 font-bold text-slate-900">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1 Hour per week 1-on-1 online lesson</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1 Hour weekly homework + Online tracking</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Digital Worksheets & Vocabulary PDF</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Monthly Parent Progress Report</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full font-extrabold border-slate-300 hover:bg-slate-100" onClick={onOpenBooking}>
                Select Lite Plan
              </Button>
            </CardFooter>
          </Card>

          {/* Plan 2: Middle / Standard 1-on-1 (£70 / month) - Most Popular */}
          <Card className="flex flex-col justify-between border-2 border-indigo-500 shadow-3d-card shadow-3d-card-hover relative scale-105 bg-gradient-to-b from-indigo-50/60 via-white to-white z-20">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <Badge variant="gold" className="shadow-md px-3.5 py-1">
                ★ Most Popular
              </Badge>
            </div>
            <CardHeader className="pt-8">
              <Badge variant="default" className="w-fit mb-2 bg-indigo-600 text-white">Dedicated Tutor</Badge>
              <CardTitle>Standard 1-on-1 Plan</CardTitle>
              <CardDescription>Accelerated learning with dedicated 1-on-1 private instruction.</CardDescription>
              <div className="pt-4">
                <span className="font-heading font-extrabold text-5xl text-indigo-700">{rates.symbol}{rates.middle}</span>
                <span className="text-slate-500 text-sm font-semibold"> / child / month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 flex-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-700">What's included:</div>
              <ul className="space-y-3 text-sm text-slate-800">
                <li className="flex items-center gap-2.5 font-bold text-slate-900">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>2 Hours per week Live 1-on-1 lessons</span>
                </li>
                <li className="flex items-center gap-2.5 font-bold text-slate-900">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>1 Hour weekly guided homework</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Custom Pace & Personal Curriculum</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Flexible Rescheduling & WhatsApp Updates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="default" size="lg" className="w-full shadow-3d-button" onClick={onOpenBooking}>
                Book Free Trial Lesson
              </Button>
            </CardFooter>
          </Card>

          {/* Plan 3: 3 Kids Family Pass (£40 / child = £120 / month total) */}
          <Card className="flex flex-col justify-between border-slate-200/90 shadow-3d-card shadow-3d-card-hover bg-white">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2 bg-teal-100 text-teal-800 border-teal-300">3-Sibling Value</Badge>
              <CardTitle>3-Child Family Pass</CardTitle>
              <CardDescription>Private 1-on-1 tuition for up to 3 siblings in your family.</CardDescription>
              <div className="pt-4">
                <span className="font-heading font-extrabold text-5xl text-slate-900">{rates.symbol}{rates.threeKids}</span>
                <span className="text-slate-500 text-sm font-semibold"> / child / month</span>
                <div className="text-xs font-bold text-teal-700 mt-1">({rates.symbol}{rates.threeKidsTotal} total per month for 3 kids)</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 flex-1">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Best value for 3 children:</div>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2.5 font-bold text-slate-900">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>1 Hour 1-on-1 private lesson per child / week</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>3 Children Included in 1 Family Account</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Mix Af-Somali & Dhaqan Culture</span>
                </li>
                <li className="flex items-center gap-2.5 font-medium">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Priority Weekend & Evening Booking</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" size="lg" className="w-full font-extrabold shadow-3d-button" onClick={onOpenBooking}>
                Get 3-Child Family Pass
              </Button>
            </CardFooter>
          </Card>

        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 max-w-3xl mx-auto p-5 rounded-2xl bg-white border border-indigo-200 shadow-md flex items-center gap-4 text-sm text-indigo-950">
          <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <strong className="font-extrabold text-slate-900 block text-base mb-0.5">100% Risk-Free Trial Guarantee:</strong>
            <span className="text-slate-600">If your child is not completely delighted after their first trial lesson, there is zero obligation and zero cost.</span>
          </div>
        </div>

      </div>
    </section>
  );
}


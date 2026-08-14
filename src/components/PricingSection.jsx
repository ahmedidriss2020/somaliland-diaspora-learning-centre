import React, { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, ShieldCheck, HelpCircle } from "lucide-react";

export function PricingSection({ onOpenBooking }) {
  const [currency, setCurrency] = useState("GBP");

  const pricingData = {
    GBP: { symbol: "£", basic: "45", standard: "85", premium: "150" },
    USD: { symbol: "$", basic: "60", standard: "110", premium: "195" },
    EUR: { symbol: "€", basic: "55", standard: "100", premium: "175" },
    CAD: { symbol: "CA$", basic: "80", standard: "150", premium: "260" },
  };

  const rates = pricingData[currency];

  return (
    <section id="pricing" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <Badge variant="accent">Simple & Transparent Tuition</Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Flexible Monthly Pricing for Diaspora Families
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No long-term contracts. Cancel or adjust your plan anytime. Family discounts available for 2+ children.
          </p>

          {/* Currency Switcher ToggleGroup */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Select Currency:</span>
            <ToggleGroup type="single" value={currency} onValueChange={(val) => val && setCurrency(val)}>
              <ToggleGroupItem value="GBP" className="px-4">£ GBP (UK)</ToggleGroupItem>
              <ToggleGroupItem value="USD" className="px-4">$ USD (US/Global)</ToggleGroupItem>
              <ToggleGroupItem value="EUR" className="px-4">€ EUR (Europe)</ToggleGroupItem>
              <ToggleGroupItem value="CAD" className="px-4">CA$ CAD (Canada)</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Card 1: Small Group Basic */}
          <Card className="flex flex-col justify-between border-slate-200">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">Group Track</Badge>
              <CardTitle>Small Group Lessons</CardTitle>
              <CardDescription>Ideal for interactive peer learning in small groups (max 6 students).</CardDescription>
              <div className="pt-4">
                <span className="font-heading font-extrabold text-4xl text-slate-900">{rates.symbol}{rates.basic}</span>
                <span className="text-slate-500 text-sm font-medium"> / month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 flex-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">What's included:</div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>2 Live Classes per week (60 mins)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Small cohort (Max 6 students)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Digital Worksheets & Vocabulary PDF</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Monthly Parent Progress Report</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={onOpenBooking}>
                Select Group Plan
              </Button>
            </CardFooter>
          </Card>

          {/* Card 2: Most Popular 1-on-1 Standard */}
          <Card className="flex flex-col justify-between border-2 border-indigo-500 shadow-xl relative scale-102 bg-gradient-to-b from-indigo-50/40 to-white">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <Badge variant="default" className="shadow-md font-bold px-3 py-1 bg-indigo-600 text-white">
                ★ Most Popular for Families
              </Badge>
            </div>
            <CardHeader className="pt-8">
              <Badge variant="default" className="w-fit mb-2">Dedicated Tutor</Badge>
              <CardTitle>1-on-1 Private Tuition</CardTitle>
              <CardDescription>Fast-track progress with a dedicated native tutor customized for your child.</CardDescription>
              <div className="pt-4">
                <span className="font-heading font-extrabold text-4xl text-indigo-700">{rates.symbol}{rates.standard}</span>
                <span className="text-slate-500 text-sm font-medium"> / month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 flex-1">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-700">Everything in Group +</div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2 font-medium text-slate-900">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>2 Private 1-on-1 Sessions weekly</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Custom Pace & Personal Curriculum</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Flexible Rescheduling Policy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Direct WhatsApp Tutor Updates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="default" size="lg" className="w-full shadow-lg shadow-indigo-500/20" onClick={onOpenBooking}>
                Book Free Trial Lesson
              </Button>
            </CardFooter>
          </Card>

          {/* Card 3: Family Multi-Child Bundle */}
          <Card className="flex flex-col justify-between border-slate-200">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">Family Package</Badge>
              <CardTitle>Multi-Child Family Pass</CardTitle>
              <CardDescription>Full access for up to 3 siblings across all learning tracks.</CardDescription>
              <div className="pt-4">
                <span className="font-heading font-extrabold text-4xl text-slate-900">{rates.symbol}{rates.premium}</span>
                <span className="text-slate-500 text-sm font-medium"> / month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 flex-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Best value for multi-kids:</div>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Up to 3 Children Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Mix Af-Somali, Dhaqan & Tarbiyah</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Unlimited Homework Review</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Priority Weekend Slot Booking</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full" onClick={onOpenBooking}>
                Get Family Pass
              </Button>
            </CardFooter>
          </Card>

        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200/80 flex items-center gap-4 text-sm text-indigo-900">
          <ShieldCheck className="w-8 h-8 text-indigo-600 shrink-0" />
          <div>
            <strong className="font-bold">100% Risk-Free Trial Guarantee:</strong> If your child is not completely delighted after their first trial lesson, there is zero obligation and zero cost.
          </div>
        </div>

      </div>
    </section>
  );
}

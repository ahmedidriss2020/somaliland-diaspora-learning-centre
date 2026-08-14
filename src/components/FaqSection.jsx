import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  const faqs = [
    {
      q: "My child was born in the UK/US and speaks zero Somali. Can they still join?",
      a: "Yes, absolutely! Over 80% of our new students start with zero prior knowledge. Our tutors speak fluent English and use visual cards, phonics, and diaspora-tailored teaching methods to build confidence without pressure."
    },
    {
      q: "How are classes scheduled across different timezones?",
      a: "We offer dedicated class slots aligned with UK (GMT/BST), European (CET), North American (EST/PST), and Gulf (GST) evening and weekend hours so lessons fit comfortably around regular school."
    },
    {
      q: "What age groups do you accommodate?",
      a: "Our curriculum is divided into three distinct age brackets: Foundation Kids (Ages 5–8), Juniors (Ages 9–13), and Diaspora Youth & Teenagers (Ages 14–18+)."
    },
    {
      q: "What equipment or software is needed for classes?",
      a: "All you need is a laptop, iPad/tablet, or computer with a webcam, microphone, and stable internet connection. Lessons take place on our secure Zoom classroom link."
    },
    {
      q: "What happens if we need to miss a class or cancel?",
      a: "1-on-1 private tuition lessons can be rescheduled with 24 hours notice. For small group classes, session recordings and homework notes are uploaded to your parent dashboard."
    },
    {
      q: "Is there a discount for multiple siblings?",
      a: "Yes! We offer a 15% discount for the second child and our Multi-Child Family Pass for families enrolling 3 or more siblings."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <Badge variant="outline" className="text-xs font-semibold">Frequently Asked Questions</Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="text-slate-600 text-base">
            Have questions about how Garaad works for your child? Find answers below or contact our team directly.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-base text-slate-900 font-bold font-heading">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}

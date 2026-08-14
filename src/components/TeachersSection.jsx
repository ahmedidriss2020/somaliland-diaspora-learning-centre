import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ShieldCheck, Award, Star, BookOpen, Heart } from "lucide-react";

export function TeachersSection() {
  const teachers = [
    {
      name: "Ustadh Mohamed Abdi",
      role: "Lead Af-Somali & Literature Instructor",
      credentials: "BA Somali Linguistics (Amoud Univ) • 8+ Yrs UK Diaspora Teaching",
      bio: "Specializes in helping diaspora children born in London & Birmingham transition from basic words to fluid conversational Somali.",
      badges: ["Native Speaker", "DBS Cleared", "UK Timezone"],
      initials: "MA",
      color: "bg-indigo-600",
    },
    {
      name: "Ustadha Fadumo Hassan",
      role: "Tarbiyah & Quranic Tajweed Specialist",
      credentials: "Ijazah in Hafs Recitation • Al-Azhar Trained • 10+ Yrs Experience",
      bio: "Patient and encouraging, Ustadha Fadumo makes Tajweed rules simple and builds strong moral character in young girls and boys.",
      badges: ["Certified Ijazah", "Female Tutor", "Small Groups"],
      initials: "FH",
      color: "bg-teal-600",
    },
    {
      name: "Ustadh Ahmed Liban",
      role: "Dhaqan Heritage & History Educator",
      credentials: "Historian & Cultural Archivist • Author of Diaspora Heritage Curriculum",
      bio: "Brings Somaliland history to life with rich visual presentations, traditional proverbs, and engaging cultural quizzes.",
      badges: ["Heritage Expert", "Interactive Visuals", "All Ages"],
      initials: "AL",
      color: "bg-orange-600",
    },
  ];

  return (
    <section id="teachers" className="py-20 bg-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <Badge variant="secondary">Expert Native Tutors</Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Meet Our Certified Diaspora Educators
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Every tutor undergoes rigorous background screening, child safeguarding training, and pedagogical coaching to teach diaspora children with empathy and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, idx) => (
            <Card key={idx} className="hover:-translate-y-1 transition-transform border-slate-200 shadow-md">
              <CardHeader className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${teacher.color} text-white font-heading font-bold text-xl flex items-center justify-center shadow-md shrink-0`}>
                    {teacher.initials}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{teacher.name}</CardTitle>
                    <p className="text-xs font-semibold text-indigo-600 mt-0.5">{teacher.role}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {teacher.badges.map((b, i) => (
                    <Badge key={i} variant="outline" className="text-[11px] bg-slate-50">
                      {b}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-xs text-slate-500 font-medium border-l-2 border-indigo-400 pl-3 italic">
                  "{teacher.credentials}"
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {teacher.bio}
                </p>
                
                <div className="pt-2 flex items-center gap-1 text-amber-500 text-xs font-semibold">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-slate-700 ml-1">5.0 Parent Review Rating</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

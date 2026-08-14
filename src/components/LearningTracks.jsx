import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Compass, HeartHandshake, CheckCircle, ArrowRight, Award } from "lucide-react";

export function LearningTracks({ onOpenBooking }) {
  return (
    <section id="tracks" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background Graphic Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="gold" className="text-xs font-semibold px-3 py-1 bg-amber-400 text-slate-950">
            Tailored Diaspora Curriculum
          </Badge>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Our 3 Core Learning Tracks
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Designed specifically for children and youth growing up in the diaspora to gain fluency, pride, and moral grounding.
          </p>
        </div>

        {/* Interactive Radix Tabs */}
        <Tabs defaultValue="af-somali" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-xl bg-slate-800 border-slate-700">
              <TabsTrigger value="af-somali" className="flex items-center gap-2 data-[state=active]:bg-indigo-600 data-[state=active]:text-white">
                <BookOpen className="w-4 h-4" />
                <span>Af-Somali</span>
              </TabsTrigger>
              <TabsTrigger value="dhaqan" className="flex items-center gap-2 data-[state=active]:bg-teal-600 data-[state=active]:text-white">
                <Compass className="w-4 h-4" />
                <span>Dhaqan & Culture</span>
              </TabsTrigger>
              <TabsTrigger value="tarbiyah" className="flex items-center gap-2 data-[state=active]:bg-orange-600 data-[state=active]:text-white">
                <HeartHandshake className="w-4 h-4" />
                <span>Tarbiyah & Deen</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* TAB 1: Af-Somali Language */}
          <TabsContent value="af-somali">
            <Card className="border-indigo-500/40 bg-slate-900/90 text-white shadow-2xl overflow-hidden backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center justify-center font-bold">
                      <BookOpen className="w-6 h-6" />
                    </div>
                    <div>
                      <Badge variant="default" className="bg-indigo-600 text-white">Track 01</Badge>
                      <h3 className="font-heading font-bold text-2xl text-white">Af-Somali Language Fluency</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    From absolute beginner alphabet recognition to natural conversational fluency, reading Somali literature, and writing. Our tutors use diaspora-friendly pedagogy that connects English/European concepts to Somali vocabulary.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-heading font-bold text-sm text-indigo-300">What Students Learn:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Alphabet & Phonics (Ha-Ya)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Conversational Family Vocabulary</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Somali Grammar & Sentence Building</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Reading Traditional Stories & Poetry</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700" onClick={onOpenBooking}>
                      Enrol in Af-Somali Track
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <span className="text-xs text-slate-400 font-medium">Ages 5–18+ • Level Placement Included</span>
                  </div>
                </div>

                {/* Right Column with Pastoral Sunrise Camel Background */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden flex flex-col justify-between p-8 text-white">
                  <img
                    src="/bg-dhaqan-pastoral.jpg"
                    alt="Somaliland pastoral countryside"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30"></div>
                  
                  <div className="relative z-10 space-y-4">
                    <Badge variant="gold" className="bg-amber-400 text-slate-950">Level Pathway</Badge>
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                        <div className="font-bold text-sm text-amber-300">Level 1: Foundation (Ages 5-8)</div>
                        <div className="text-xs text-slate-300">Letters, numbers, colors, daily greetings</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10">
                        <div className="font-bold text-sm text-amber-300">Level 2: Intermediate (Ages 9-14)</div>
                        <div className="text-xs text-slate-300">Storytelling, comprehension, family dialogue</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/20 text-xs text-amber-200 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Completion Certificate awarded at each level</span>
                  </div>
                </div>

              </div>
            </Card>
          </TabsContent>

          {/* TAB 2: Dhaqan & Culture with Traditional Equipment Background */}
          <TabsContent value="dhaqan">
            <Card className="border-teal-500/40 bg-slate-900/90 text-white shadow-2xl overflow-hidden backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center font-bold">
                      <Compass className="w-6 h-6" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="bg-teal-600 text-white">Track 02</Badge>
                      <h3 className="font-heading font-bold text-2xl text-white">Dhaqan & Heritage Culture</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Inspire deep pride in Somaliland history, nomad traditions, geography, traditional art, proverbs (Maahmaahyo), and civic history. Taught through interactive visual storytelling, virtual tours, and creative projects.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-heading font-bold text-sm text-teal-300">What Students Learn:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                        <span>Somaliland Geography & Landmarks</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                        <span>Traditional Arts, Crafts & Artifacts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                        <span>Somali Proverbs (Maahmaahyo)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                        <span>Nomadic Heritage & Pastoral Life</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <Button variant="secondary" className="bg-teal-600 hover:bg-teal-700" onClick={onOpenBooking}>
                      Enrol in Dhaqan Track
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <span className="text-xs text-slate-400 font-medium">Interactive Visual Modules</span>
                  </div>
                </div>

                {/* Right Column featuring Heritage Equipment Image */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden flex flex-col justify-between p-8 text-white">
                  <img
                    src="/bg-heritage-equipment.jpg"
                    alt="Somali nomadic heritage equipment Dhiil and Kebed"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40"></div>

                  <div className="relative z-10 space-y-4">
                    <Badge variant="secondary" className="bg-teal-500 text-slate-950">Cultural Artifacts</Badge>
                    <div className="space-y-3 text-xs text-teal-100">
                      <p className="p-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/10">
                        "Rag waa kii resigned, dumar waa kii samra" — Explore rich wisdom from classic Somali oral literature and poetry.
                      </p>
                      <div className="p-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-white/10 space-y-1">
                        <div className="font-bold text-teal-300">Traditional Items Studied:</div>
                        <div>Carved Dhiil milk vessels, Dabqaad incense burners, Kebed weaving, Hanbal nomadic saddle crafts.</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/20 text-xs text-teal-200">
                    Includes annual Diaspora Heritage Competition & Showcase.
                  </div>
                </div>

              </div>
            </Card>
          </TabsContent>

          {/* TAB 3: Tarbiyah & Islamic Studies */}
          <TabsContent value="tarbiyah">
            <Card className="border-orange-500/40 bg-slate-900/90 text-white shadow-2xl overflow-hidden backdrop-blur-md">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-300 border border-orange-500/30 flex items-center justify-center font-bold">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <div>
                      <Badge variant="accent" className="bg-orange-600 text-white">Track 03</Badge>
                      <h3 className="font-heading font-bold text-2xl text-white">Tarbiyah & Moral Character</h3>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Nurture strong Islamic ethics, Akhlaaq (manners), Quranic recitation with Tajweed, and practical Islamic guidance tailored for diaspora youth navigating modern society.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-heading font-bold text-sm text-orange-300">What Students Learn:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                        <span>Quran Recitation & Tajweed Rules</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                        <span>Prophetic Stories & Seerah Lessons</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                        <span>Akhlaaq & Respect for Parents</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 shrink-0" />
                        <span>Daily Duas & Practical Worship</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <Button variant="accent" className="bg-orange-600 hover:bg-orange-700" onClick={onOpenBooking}>
                      Enrol in Tarbiyah Track
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <span className="text-xs text-slate-400 font-medium">Male & Female Qualified Tutors</span>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-gradient-to-br from-orange-950 via-slate-950 to-slate-900 p-8 text-white flex flex-col justify-between">
                  <div className="space-y-4">
                    <Badge variant="accent" className="bg-orange-500 text-slate-950">Youth Guidance</Badge>
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs">
                        <div className="font-bold text-orange-300 mb-1">Tajweed & Memorization</div>
                        <div className="text-slate-300">Structured Juz Amma & Surah memorization plans with 1-on-1 recitation correction.</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/10 border border-white/10 text-xs">
                        <div className="font-bold text-orange-300 mb-1">Character Building</div>
                        <div className="text-slate-300">Weekly discussions on resilience, identity, and standing strong in Islamic values.</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs text-orange-200">
                    Separate classes available for boys and girls upon request.
                  </div>
                </div>

              </div>
            </Card>
          </TabsContent>
        </Tabs>

      </div>
    </section>
  );
}

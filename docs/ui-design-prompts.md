# UI Design Prompts — Somali Diaspora Learning Centre

Copy-paste prompts for building the **public-facing front-end web app**: the site that explains what we do, sells the packages, and books the free first lesson.

Written for AI design/build tools (v0, Lovable, Bolt, Figma Make, Claude Artifacts, Cursor) — but they read as a normal design brief, so a human designer can use them too.

**Working name used throughout:** *Barwaaqo* — swap for the final brand name before pasting.

---

## How to use this document

| Step | Prompt | When |
|---|---|---|
| 1 | **Prompt 0 — Locked facts** | Paste at the top of every session. Never let the tool invent pricing. |
| 2 | **Prompt 1 — Design system** | Second. Establishes colour, type, spacing, motion. |
| 3 | **Prompt 2 — Master one-shot** | Generates the whole page in one go. |
| 4 | **Prompts 3–14** | Refine section by section when the one-shot gets something wrong. |
| 5 | **Prompt 15 — The glowing CTA** | The most important one. Use verbatim. |
| 6 | **Prompts 16–19** | Cross-cutting: RTL, accessibility, responsive, copy. |
| 7 | **Appendix A/B** | Tool-specific rewrites and a visual mood prompt for image generators. |

Rule of thumb: **one-shot first, then refine.** Never ask a tool to redesign the whole page to fix one section.

---

## Prompt 0 — Locked facts (paste into every prompt)

```
LOCKED FACTS — do not change, invent, or "improve" any number or claim below.

PRODUCT
Barwaaqo is an online learning centre connecting Somali diaspora families with
verified Somali teachers. Live one-to-one lessons over video. Three tracks:
Somali language, Arabic, and Qur'aan. Students are children aged 5–15.
The parent owns the account and the payment method; the child gets a supervised
profile inside it, never their own login.

THE FREE FIRST LESSON
The first lesson is completely free — a real trial lesson with a real verified
teacher, not a demo or a sales call. 1 hour. No charge until after the free
session. This is the single most important call to action on the entire site.

PACKAGES (monthly, billed per month, cancel any time)
All packages = 2 x 1-hour live sessions per week (about 8 one-hour sessions a month).

1. ONE CHILD          $80 / €70 / £60   per month
                      2 x 1-hour sessions per week, for 1 child

2. TWO CHILDREN       $70 / €60 / £50   per child, per month
                      (= $140 / €120 / £100 total for two children)
                      Each child gets their own 2 x 1-hour sessions per week

3. THREE OR MORE      Custom pricing — a genuinely generous discount.
   CHILDREN           No price shown. CTA is "Get your family price", not "Buy".

CURRENCY
Three currencies: USD ($), EUR (€), GBP (£). A visible currency switcher.
Auto-detect the visitor's likely currency, always let them override, remember
the choice. Never show two currencies in the same price line.

WHAT EVERY PACKAGE INCLUDES
Verified Somali teacher, matched to the child. Live one-to-one video lessons.
Homework set and marked by the teacher. AI study buddy for practice between
lessons (supervised — parent and teacher can see every conversation).
A monthly progress report for the parent. Free re-match within 48 hours if a
teacher leaves.

TRUST
Every teacher passes: ID check, two references, background check where
available, an observed trial lesson, and safeguarding training. This standard
is published openly on the site. Trust is the first thing a parent buys —
show verification before price, everywhere.

TONE
Warm, calm, plain-spoken, confident. Family app, not school portal. Never
corporate, never salesy, never childish on the parent-facing pages. Somali
greetings used naturally ("Soo dhawoow", "Salaan"), never as decoration.

DO NOT INVENT: student counts, star ratings, "as seen in" logos, fake
testimonials with real-looking full names, discount countdown timers, or any
statistic not given above. Use clearly-labelled placeholders instead.
```

---

## Prompt 1 — Design system

```
Set up the design system for Barwaaqo before building any screen.

COLOUR TOKENS (exact hex — these are the brand)
--blue-primary   #1E6BD6   primary actions, links
--navy-deep      #082A55   headings, dark sections, nav
--teal-teacher   #0E8C6F   anything belonging to teachers, success states
--gold-star      #EFA51B   rewards, Qur'aan progress, the free-trial CTA glow
--violet-ai      #6C4BD1   RESERVED — the AI study buddy and nothing else
--coral-alert    #DC4B33   errors, safeguarding
--paper          #F6F9FC   page background, cards
--ink            #0A1B2E   body text

Colour discipline: violet appears ONLY where the AI assistant is discussed, so
a family always knows when they are looking at a machine rather than a person.
Teal means teacher. Gold means achievement and the free first lesson. Do not
use gold for ordinary buttons — it must stay special.

TYPE
Humanist sans with excellent Latin + Arabic coverage. First choice: Plus Jakarta
Sans or Inter for Latin, paired with IBM Plex Sans Arabic or Noto Sans Arabic
for Arabic text. Scale (desktop): display 56/1.05, h1 40/1.15, h2 30/1.25,
h3 22/1.3, body-lg 18/1.6, body 16/1.6, caption 14/1.5, label 13/1.4 uppercase
tracking 0.06em. Mobile: display 36, h1 30, h2 24, body 16. Body copy max 68
characters per line. Headings tight, body generous.

SPACE + SHAPE
8pt spacing scale. Section vertical rhythm: 96px desktop / 64px mobile.
Container max-width 1200px, 24px gutters (16px on mobile).
Card radius 16px, button radius 12px, pill radius 999px.
ONE elevation level for resting cards: 0 1px 2px rgba(8,42,85,.06),
0 8px 24px rgba(8,42,85,.08). Hover adds lift, never a second shadow style.
Borders: 1px rgba(8,42,85,.08). Avoid heavy outlines.

SURFACES
Alternate between paper (#F6F9FC) and white sections for rhythm. Use one or two
deep navy sections maximum, for trust and for the closing CTA. Never a full
page of dark.

MOTION
Motion only to explain a change. Durations 150–250ms, ease-out
cubic-bezier(.2,.8,.2,1). Scroll reveals: 12px rise + fade, staggered 60ms,
fire once, never on the hero. Everything must respect
prefers-reduced-motion: reduce — under that query, disable transforms and
looping animations and keep only opacity changes.

IMAGERY
Real photographs of Somali and Somali-diaspora families and teachers, warm
natural light, home settings — kitchen tables, sofas, a laptop on a desk. No
stock-photo classrooms, no generic globe/flag illustrations, no cartoon
mascots on parent-facing pages. Where photography is not available use warm
duotone placeholders in navy/gold, labelled as placeholders.

DELIVER
CSS custom properties (or Tailwind theme extension) for every token above,
plus dark-mode token overrides. Ship the tokens before the components.
```

---

## Prompt 2 — Master one-shot (the whole page)

```
[PASTE PROMPT 0 — LOCKED FACTS]
[PASTE PROMPT 1 — DESIGN SYSTEM]

Build the Barwaaqo marketing and booking website: a responsive, accessible,
production-quality front end. React + TypeScript + Tailwind. Mobile-first.
Every section must work in English, Somali and Arabic, with Arabic mirrored
right-to-left (use logical properties — margin-inline-start, not margin-left).

PAGE ORDER — build in exactly this sequence:

1  Sticky header — logo, nav (How it works · What we teach · Teachers ·
   Pricing · Safeguarding · FAQ), language switcher (EN / SO / AR), currency
   switcher ($ € £), and a compact "Book free lesson" button that only appears
   once the hero CTA scrolls out of view.

2  Hero — headline, one-sentence promise, and THE GLOWING FREE-LESSON CTA
   (see the dedicated CTA spec — this is the centrepiece of the page).
   Supporting trust line directly under the button. Warm photograph or short
   muted autoplay loop of a child in a video lesson, right side on desktop,
   below the fold copy on mobile.

3  Trust bar — a slim strip: "Every teacher ID-checked · References taken ·
   Background checked · Safeguarding trained · Observed trial lesson".
   Icons in teal. Understated, not a badge parade.

4  What we teach — three track cards: Somali language, Arabic, Qur'aan.
   Each: icon, one-line promise, three bullet outcomes, age range, "Start free"
   text link. Qur'aan card carries a subtle gold accent.

5  How it works — four numbered steps on a connecting line:
   1 Tell us about your child (2 minutes)
   2 We match you with a verified teacher
   3 Free 1-hour first lesson — no charge
   4 Choose a package and keep going
   Step 3 is visually emphasised — gold marker, slightly larger card.

6  Packages / Pricing — the three packages from the locked facts, with the
   currency switcher. See the dedicated pricing prompt.

7  Meet the teachers — 3–4 teacher cards: photo, name, tracks taught, years
   of experience, languages, verified badge in teal, "Book a free lesson with
   [name]". Cards are horizontally scrollable on mobile with visible edge peek.

8  How we verify teachers — dark navy section. The five vetting steps as a
   horizontal timeline, plus a link to the full published standard. Copy:
   "Parents are buying safety before they are buying Somali."

9  Between lessons — the AI study buddy. Violet accents only here. Explain the
   limits as a feature: it drills vocabulary and quizzes the child on what the
   teacher already taught; it never issues religious rulings, never assesses
   recitation, and every conversation is visible to parent and teacher.
   Include a small chat-bubble mock in violet.

10 The monthly report — the retention product. Show a mock report card:
   attendance, new words learned, Qur'aan progress, one line from the teacher.
   Copy angle: "The report you'll forward to their grandparents."

11 Parents' words — testimonial cards. Use clearly-labelled placeholder
   testimonials; never fabricate a named person.

12 FAQ — accordion. Questions: Is the first lesson really free? What happens
   after the free lesson? How long are lessons? What if my child doesn't get
   on with the teacher? Do you teach complete beginners? Which time zones do
   you cover? Can I pause or cancel? How do you keep my child safe online?
   What device do we need? How do I pay in my currency?

13 Closing CTA band — deep navy, the glowing button again, centred. One line:
   "Your child's first lesson is free. Find out what they can do in an hour."

14 Footer — brand, tracks, company, safeguarding policy, privacy notice,
   terms, contact, WhatsApp support link, language + currency switchers,
   "Registered in [X]" placeholder.

REQUIREMENTS
- Semantic HTML: one h1, landmark elements, real <button> and <a>.
- Keyboard operable end to end; visible focus rings on every interactive element.
- Lazy-load images below the fold; explicit width/height to prevent layout shift.
- No layout shift from the currency or language switcher.
- All copy in a single strings file keyed by locale (en, so, ar) — no hard-coded
  text inside components.
- Prices come from one config object keyed by currency — never hard-coded in JSX.
```

---

## Prompt 3 — Hero

```
Design the Barwaaqo hero section.

Single job: a parent who has never heard of us understands what this is and
books a free lesson within 15 seconds.

LAYOUT — asymmetric two-column on desktop (7 / 5), stacked on mobile with copy
first. Generous top space; the CTA must be above the fold on a 5-inch phone.

CONTENT LADDER
1  Eyebrow pill: "Live online lessons · Somali · Arabic · Qur'aan"
2  H1, warm and specific, not a slogan. Options to choose from:
   - "Your child, speaking Somali with confidence."
   - "Keep your child connected to Somali — without becoming the teacher."
   - "Somali, Arabic and Qur'aan — taught live by teachers you can trust."
3  Sub-headline, one sentence, max 22 words: verified Somali teachers, live
   one-to-one lessons, homework, and a monthly report so you can see progress.
4  THE GLOWING FREE-LESSON CTA — primary, unmissable. See the CTA spec.
5  Secondary, quiet text link beside it: "See packages and pricing".
6  Reassurance line under the buttons, 14px, muted:
   "1 full hour · With a verified teacher · No card charged until after"
7  Micro trust row: small avatar cluster + "Verified Somali teachers across the
   UK, Europe and North America".

VISUAL
Right column: a warm photograph of a child at a laptop mid-lesson, seen slightly
over the shoulder, plus one floating card overlapping the image — a small
"Next lesson today, 18:00 · Somali reading with Ustaad Yusuf" card with a teal
verified tick. The floating card sells the product better than the photo does.

BACKGROUND
Very soft radial wash: gold at 6% opacity top-left drifting to blue at 6%
bottom-right, over paper. No hard gradients, no mesh-gradient cliché, nothing
that competes with the glowing button.

RULES
- No autoplaying sound. If video, muted, looping, under 6 seconds, with a
  poster image and a pause control.
- No carousel.
- The hero must render legibly with images blocked.
```

---

## Prompt 4 — Packages / pricing section

```
Design the Barwaaqo packages section. Read the LOCKED FACTS pricing block and
reproduce it exactly.

HEADING
"Simple packages. The first lesson is always free."
Sub: "Every package is 2 one-hour live sessions a week — about 8 hours of
one-to-one teaching a month. Cancel any time."

CURRENCY SWITCHER
A segmented control above the cards: $ USD · € EUR · £ GBP. Auto-select from
the visitor's locale, allow override, persist to localStorage. Switching
animates the price digits with a 150ms cross-fade — no layout shift, no
counting-up animation.

THREE CARDS — equal height, middle one emphasised.

CARD 1 — "One child"
  $80 / €70 / £60  per month
  "2 x 1-hour sessions every week, for one child."
  Includes: matched verified teacher · live one-to-one lessons · homework set
  and marked · AI study buddy for practice · monthly progress report ·
  free re-match within 48 hours.
  CTA: "Start with a free lesson" (secondary button style)

CARD 2 — "Two children"  [MOST POPULAR — teal ribbon]
  $70 / €60 / £50  per child, per month
  Directly beneath, in smaller muted type: "$140 / €120 / £100 a month for two
  children — each child gets their own 2 x 1-hour sessions a week."
  A small savings pill in gold: "Save $10 per child, every month."
  Everything in One child, plus: siblings can be taught by the same teacher or
  different specialists · one invoice for the family · one monthly report per
  child.
  CTA: "Start with a free lesson" (primary button style)

CARD 3 — "Three or more children"
  No number. Show "Custom pricing" in the price slot, with the line
  "A genuinely generous discount — tell us about your family and we'll price it."
  Includes: everything above · a dedicated family schedule · flexible sibling
  timetabling · one point of contact.
  CTA: "Get your family price" — opens a short form (parent name, email/WhatsApp,
  number of children, ages, tracks, preferred times). Never a payment screen.

UNDER THE CARDS
- Reassurance strip: "First lesson free · No card charged until after your
  free session · Cancel any time · Prices shown in your currency"
- Transparency line — this is a differentiator, keep it:
  "We publish what teachers earn. A fair share of every payment goes directly
  to your child's teacher." Link: "How we pay teachers".
- A short "Not sure which to pick?" line with a WhatsApp support link.

RULES
- No countdown timers, no fake scarcity, no strikethrough anchor prices.
- Package 3 must never show a fabricated number.
- The word "free" appears in every card's CTA area.
- All three cards keyboard-navigable; the emphasised card must not be a
  z-index trap for focus order.
- On mobile, cards stack in the order 2, 1, 3 (most popular first).
```

---

## Prompt 5 — THE GLOWING FREE-LESSON CTA ★ (use verbatim)

```
Build the single most important element on the site: the "Book your FREE first
lesson" call to action. It must look premium and confident — the kind of button
a parent trusts — and it must glow. Eye-catching, but never gaudy, never a
gaming-site neon button, never a casino badge.

STRUCTURE (a composed element, not just a button)
  - A small pill sitting above the button, gold-tinted, uppercase, 12px,
    letter-spacing .08em: "FIRST LESSON FREE"
  - The button itself: label "Book your free first lesson", 17–18px, weight 600,
    generous padding (18px 36px desktop / 16px 28px mobile), radius 14px,
    minimum height 56px, with a right-facing arrow that nudges 3px on hover.
  - A caption under the button, 13–14px, muted:
    "1 full hour · With a verified teacher · No card needed to book"

THE GLOW — four layers, in this order

1. AURORA BLOOM (behind everything)
   An absolutely-positioned blurred ellipse behind the button, roughly 160% of
   its width and 220% of its height, blur 48px, opacity .45, built from a
   radial-gradient of gold #EFA51B fading into blue #1E6BD6. This is the soft
   light spill on the page — it should feel like the button is lit, not painted.

2. ROTATING CONIC BORDER
   A 2px border made from a conic-gradient that slowly rotates. Use the modern
   technique:
     @property --angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
   then animate --angle 0deg -> 360deg over 6s linear infinite on a pseudo-element
   holding conic-gradient(from var(--angle), #EFA51B, #1E6BD6, #6C4BD1, #EFA51B).
   The button face sits on top with its own solid background, so only a fine
   ring of moving light shows. Restrained — this is jewellery, not a lightshow.

3. BUTTON FACE + DEPTH
   Background: linear-gradient(135deg, #1E6BD6 0%, #0F53B4 100%).
   Text: pure white, and verify contrast is at least 4.5:1.
   Inner top highlight: inset 0 1px 0 rgba(255,255,255,.28).
   Outer bloom, layered:
     0 4px 12px rgba(30,107,214,.35),
     0 10px 32px rgba(239,165,27,.28),
     0 0 0 0 rgba(239,165,27,.45)   <- the pulse ring's resting state

4. IDLE PULSE + SHIMMER
   Pulse: the fourth shadow expands to 0 0 0 14px rgba(239,165,27,0) over 2.6s
   ease-out, infinite, with a 1.2s gap between pulses. One slow heartbeat —
   never fast, never bouncing.
   Shimmer: a 20%-wide white gradient band at 18% opacity sweeps left to right
   across the button face every 5 seconds, taking 900ms, with a generous pause
   between sweeps. Clip it to the button with overflow:hidden.

STATES
  hover     translateY(-2px), bloom opacity +25%, shimmer sweeps once
            immediately, arrow nudges right, cursor pointer. 180ms ease-out.
  active    translateY(0), scale .99, bloom dims — a physical press.
  focus-visible  3px solid #EFA51B ring at 3px offset, and the rotating border
            pauses so the focus ring is unambiguous. Never remove the outline.
  loading   label swaps to "Finding a time…", an inline 16px spinner replaces
            the arrow, button disabled, glow reduced to 40%, width does NOT change.
  success   background morphs to teal #0E8C6F, arrow becomes a checkmark drawn
            in 240ms, label "Lesson booked".

ACCESSIBILITY — non-negotiable
  - Real <button> (or <a> if it navigates). Never a clickable <div>.
  - @media (prefers-reduced-motion: reduce): remove the rotation, the pulse and
    the shimmer entirely. Keep a static gold-to-blue border and a soft static
    bloom. The button must still look premium when completely still — design
    that version first, then add motion.
  - Nothing flashes more than 3 times per second.
  - Minimum 48x48px touch target with 8px clear space around it.
  - Glow is decorative: it must not be the only thing signalling the button.
    The shape, colour and label carry the meaning on their own.

PERFORMANCE
  Animate only transform, opacity and the custom property. No animated
  box-shadow spread on the main thread if it drops frames — use a scaled
  pseudo-element instead. Add will-change: transform sparingly. The whole
  effect must hold 60fps on a three-year-old Android.

VARIANTS TO SHIP
  a) Hero — full composed version with pill and caption.
  b) Header — compact, 40px tall, glow reduced to a single soft bloom, no
     shimmer, appears only after the hero CTA scrolls out of view.
  c) Mobile sticky bar — full-width, fixed to the bottom, safe-area inset
     padding, subtle top border, glow softened so it does not smear over
     content behind it. Hides while the user scrolls up.
  d) Dark-section version — on deep navy #082A55 the gold bloom reads much
     brighter; drop bloom opacity to .3 and increase the border contrast.
  e) Inline text version — for use mid-copy, no glow, just a gold underline
     that thickens on hover.

Deliver as one reusable component with props: variant, size, label, loading,
onClick. All glow values as CSS custom properties so intensity is tunable in
one place.
```

---

## Prompt 6 — Booking flow (free first lesson)

```
Design the free-lesson booking flow. Every glowing CTA on the site opens this.

Format: a focused modal on desktop, a full-screen sheet on mobile. Four steps,
a slim progress bar, and a visible step counter ("Step 2 of 4"). Back is always
available. Nothing here asks for payment.

STEP 1 — About your child
  Child's first name (first name only — say why: "First name is all we need")
  Age band: 5–7 · 8–10 · 11–13 · 14–15  (chips, not a dropdown)
  Track: Somali · Arabic · Qur'aan  (multi-select chips)
  Level: Complete beginner · Understands some · Speaks a little · Confident
  Optional: "Anything the teacher should know?" free text, 200 chars.
  Add-another-child link — if tapped, repeat compactly and quietly note that
  siblings are priced lower.

STEP 2 — When suits you
  Time zone auto-detected with an obvious override.
  A simple week grid of time blocks — Weekday mornings / afternoons / evenings,
  Weekend — multi-select. Not a full calendar. We are collecting preference,
  not booking a slot yet.
  Note: "Lessons are 1 hour. Packages are 2 lessons a week — but today you're
  just booking the free one."

STEP 3 — Your details
  Parent first name, email, and WhatsApp number (optional, clearly labelled
  optional, with a note that most families prefer WhatsApp).
  Consent checkbox, unticked by default, plain language: "I'm this child's
  parent or guardian and I agree to the terms and privacy notice."
  Reassurance strip in teal: "No payment now. Nothing is charged until after
  your free lesson, and only if you choose a package."

STEP 4 — Confirmation
  Big teal checkmark, drawn not spun.
  "Waan ku faraxsanahay! Your free lesson request is in."
  Restate what happens next, numbered, with a real time commitment:
    1 We match your child with a verified teacher (within 24 hours)
    2 We message you two or three times that work
    3 Your child has a free 1-hour lesson
    4 Only then do you choose a package — or not
  Buttons: "Message us on WhatsApp" and "See packages while you wait".
  Small print: how to change or cancel.

FORM QUALITY
  - Labels above fields, always visible. No placeholder-as-label.
  - Validate on blur, never on keypress. Errors in coral, beneath the field,
    written as help not blame: "We need an email so we can send the lesson link."
  - Correct input types and autocomplete attributes; numeric keypad for phone.
  - Progress preserved if the modal is closed accidentally — restore on reopen.
  - Focus trapped in the modal, returned to the triggering button on close,
    Escape closes with a confirm if data has been entered.
  - Each step announced to screen readers via an aria-live region.
  - Whole flow completable in under 90 seconds on a phone.
```

---

## Prompt 7 — What we teach (three tracks)

```
Design the "What we teach" section: three cards, equal weight, no upsell.

SOMALI LANGUAGE — blue accent
  "Speaking, reading and writing Somali — from first words to full conversations."
  · Everyday conversation with family
  · Reading and writing the Somali alphabet
  · Somali stories, proverbs and poetry
  Ages 5–15 · Complete beginners welcome

ARABIC — blue accent
  "Modern Standard Arabic, taught right-to-left from day one."
  · The Arabic alphabet and letter forms
  · Reading fluency and vocabulary
  · Grammar foundations that support Qur'aan study
  Ages 6–15 · Beginner to intermediate

QUR'AAN — gold accent
  "Recitation, tajwiid and memorisation with a qualified teacher."
  · Correct recitation and tajwiid rules
  · Memorisation, tracked surah by surah
  · Meaning and reflection, age-appropriate
  Ages 5–15 · Assessed only by a human teacher, never by AI

Each card: icon in a soft tinted square, title, one-line promise, three bullets,
age line, and a quiet text link "Book a free lesson in [track]" that opens the
booking flow pre-filled with that track.

Under the three cards, one line: "Not sure where to start? The free first
lesson doubles as a friendly assessment — the teacher will tell you honestly
where your child is."
```

---

## Prompt 8 — Trust and safeguarding section

```
Design the trust section. Deep navy #082A55 background, paper-coloured text.
This is the section that converts cautious parents, so it must feel calm and
institutional, not promotional.

HEADLINE  "Parents are buying safety before they are buying Somali."
SUB  "Here is exactly how we verify every teacher — published, not promised."

FIVE STEPS as a horizontal timeline (vertical on mobile), each with a teal
icon, a title and one sentence:
  1  Identity verified — government ID and right to work checked.
  2  Two references taken — from previous teaching or community roles.
  3  Background check — where available in the teacher's country.
  4  Observed trial lesson — a senior teacher sits in and scores it.
  5  Safeguarding training — completed and a code of conduct signed.

BENEATH, three small reassurance cards:
  · "Your child never sees a price, a payment screen or an advert."
  · "Report anything, one tap. A human reviews it within 24 hours."
  · "The AI study buddy is supervised — you and the teacher see every message."

CTA: an outlined button "Read our full safeguarding standard" — outlined, not
glowing. The glow belongs to the free lesson only.

Tone rules: no shields, no padlocks, no fear-based copy, no "military-grade"
language. Quiet competence.
```

---

## Prompt 9 — Teachers section

```
Design the "Meet the teachers" section.

Grid of 3–4 teacher cards (horizontal scroll with edge-peek on mobile):
  · Real photograph, 4:5 portrait, warm and natural — not a corporate headshot
  · Name in the form used respectfully: "Ustaad Yusuf A.", "Macallin Farhia"
  · Teal verified badge with tick — ABOVE the name, before anything else
  · Tracks taught, as small chips
  · Years teaching · Languages spoken · Time zone
  · One sentence in the teacher's own voice, in quotes
  · Text link: "Book a free lesson with [first name]"

A "New teacher" state exists too — gold chip rather than teal, honest rather
than hidden, with the line "Fully vetted, newly joined".

Beneath the grid: "We match your child to a teacher, and if it isn't right we
re-match within 48 hours — at no cost, and your progress moves with you."

Photography and names must be clearly-labelled placeholders until real teachers
consent to being shown. Never generate a fake person presented as real.
```

---

## Prompt 10 — AI study buddy section

```
Design the "Between lessons" section, about the AI study buddy.
Violet #6C4BD1 appears here and NOWHERE else on the site.

HEADLINE  "A practice partner between lessons — with the teacher still in charge."

Two columns. Left: copy. Right: a small chat mock in violet showing three
exchanges — the buddy asking "Shall we practise this week's 10 words?", the
child answering, the buddy confirming and asking for a sentence. At the top of
the mock, a visible banner: "Your teacher and hooyo can see this chat."

FOUR LIMITS, presented as reassurances rather than restrictions:
  · It only practises what your child's teacher has already taught.
  · It never gives religious rulings, and never assesses recitation.
  · Every conversation is logged and visible to you and the teacher.
  · There's a daily time limit, so it stays practice — not a screen habit.

Closing line: "The AI helps your child remember. The teacher does the teaching."

Do not use robot imagery, glowing brains, sci-fi motifs, or the word "powered
by". Warm, small, clearly bounded.
```

---

## Prompt 11 — Monthly report section

```
Design the "See what they're learning" section, showing the monthly parent report.

This is the retention product — treat it as a hero-quality moment.

Left: copy.
  "Every month, a report you'll actually want to forward."
  "Attendance, new words learned, Qur'aan progress, and one honest note from
  your child's teacher. It takes a minute to read and it tells you exactly
  what you're paying for."

Right: a realistic mock report card, tilted 2 degrees with a soft shadow:
  Header: child's first name, month, teacher's name with teal tick
  Four stat tiles: Lessons attended 4/4 · New words 42 · Homework done 3/4 ·
  Qur'aan Juz Amma 60%
  A slim progress bar in gold for the Qur'aan line
  A quoted teacher's note: "Beautiful recitation this week. Slow down on the
  long vowels."
  Footer chip: "Sent to you on the 1st of every month"

Keep the mock legible at mobile width — if it must shrink, drop to two stat
tiles rather than shrinking the type below 12px.
```

---

## Prompt 12 — Header and navigation

```
Design the site header.

RESTING (top of page): transparent over the hero, 80px tall. Logo left. Nav
centre: How it works · What we teach · Teachers · Pricing · Safeguarding · FAQ.
Right: language switcher (EN / SO / AR), currency switcher ($ € £), and a quiet
outlined "Sign in" link.

SCROLLED (hero CTA out of view): compacts to 64px, gains a paper background at
92% opacity with backdrop-blur and a 1px bottom border, and the compact glowing
"Book free lesson" button fades in on the right. Transition 200ms, no jump.

MOBILE: logo + hamburger. The drawer slides from the inline-end side (so it
mirrors correctly in Arabic), full height, with nav links at 20px, the language
and currency switchers at the bottom, and the full glowing CTA pinned above the
safe area.

The language switcher must switch direction as well as words — choosing Arabic
sets dir="rtl" on the document and mirrors the entire layout.
```

---

## Prompt 13 — FAQ

```
Design the FAQ as a single-column accordion, max-width 760px, one item open at
a time is fine but never force-close on scroll.

Each item: question in h3 at 18px semibold, chevron that rotates 180 degrees,
answer in 16px with 1.65 line height. Use real <button> elements with
aria-expanded and aria-controls. Animate height with a max-height or grid-rows
transition, 200ms, disabled under reduced-motion.

Write the answers plainly, first person plural, no marketing language:

Is the first lesson really free?
  Yes — a full hour with a verified teacher, at no cost, with no card needed
  to book it. If it isn't right for your child, that's the end of it.

What happens after the free lesson?
  We'll ask what you thought. If you want to carry on, you pick a package and
  set a weekly time. If not, nothing is charged.

How long is each lesson, and how many do we get?
  One hour, twice a week — around eight hours of one-to-one teaching a month.

What does it cost?
  $80 / €70 / £60 a month for one child. For two children it's $70 / €60 / £50
  per child. For three or more, we'll price it for your family with a generous
  discount.

What if my child doesn't get on with their teacher?
  Tell us and we'll re-match within 48 hours, at no cost. Their progress moves
  with them.

Do you teach complete beginners?
  Yes — many of our children start with no Somali at all.

What time zones do you cover?
  Our teachers cover UK, European and North American evenings and weekends.
  Tell us when suits you and we'll match accordingly.

Can I pause or cancel?
  Yes, any time, from your account. No notice period, no cancellation fee.

How do you keep my child safe online?
  Every teacher is ID-checked, referenced, background-checked where available,
  observed teaching, and safeguarding-trained. You hold the account, your child
  never has their own login, and every AI conversation is visible to you.

What do we need to join a lesson?
  A phone, tablet or laptop with a camera, and an internet connection. We send
  a link — there's nothing to install.
```

---

## Prompt 14 — Footer and closing CTA band

```
CLOSING CTA BAND — deep navy #082A55, 200px tall, centred:
  H2: "Your child's first lesson is free."
  Sub: "Find out what they can do in an hour."
  The glowing CTA, dark-section variant (bloom reduced to .3 opacity).
  Under it: "No card needed · 1 full hour · With a verified teacher"

FOOTER — paper background, four columns collapsing to an accordion on mobile:
  Learn      Somali · Arabic · Qur'aan · Free first lesson · Pricing
  Trust      How we verify teachers · Safeguarding · Our AI rules · Privacy notice
  Company    About · Teach with us · Contact · WhatsApp support
  Family     Sign in · Help centre · Refund policy · Terms

Bottom bar: logo mark, "© [year] [Brand]. Registered in [country], no. [X]."
plus the language and currency switchers repeated.

A "Teach with us" link belongs in the footer, not the main nav — teacher supply
matters, but the header must stay pointed at parents.
```

---

## Prompt 15 — Bilingual, RTL and internationalisation

```
Make the Barwaaqo site genuinely trilingual: English, Somali, Arabic.

DIRECTION
Arabic is right-to-left. Do not retrofit this — build it in now.
  - Set dir on <html> from the active locale.
  - Use logical CSS properties everywhere: margin-inline-start, padding-inline-end,
    inset-inline-start, text-align: start. Never left/right.
  - Mirror directional icons (arrows, chevrons, progress) with a transform under
    [dir="rtl"]. Do NOT mirror logos, photographs, or the checkmark.
  - Flip the mobile drawer's entry side and the timeline's flow direction.
  - Numerals: keep Western Arabic numerals for prices in all locales; the
    currency symbol placement follows the locale's convention via Intl.NumberFormat.

TYPOGRAPHY
Arabic needs more line height than Latin — set 1.8 for Arabic body text and
increase font size by roughly 1px at equivalent levels. Somali uses Latin script
but produces longer strings than English: every button, chip and nav item must
survive a 40% text expansion without wrapping badly or clipping.

CONTENT
Every string lives in a locale file (en / so / ar). No text inside components.
Pluralisation handled by Intl.PluralRules — "1 child" / "2 children" /
Somali and Arabic plural rules are not the same as English.

CULTURAL DETAIL — this is the differentiator a global tutoring site can't copy:
  - Somali greetings used naturally: "Soo dhawoow", "Salaan", "Waan ku faraxsanahay".
  - Respectful teacher titles: Ustaad, Macallin, Sheekh.
  - "Hooyo" and "aabo" where the copy speaks about parents to a child.
  - Islamic-calendar awareness in scheduling copy (Ramadan timetable note).
  - Never translate the brand name.

TEST
Screenshot every section in all three locales at 360px and 1440px. If any
layout breaks in Arabic, the layout is wrong — not the language.
```

---

## Prompt 16 — Accessibility and quality pass

```
Audit and fix the Barwaaqo front end against this checklist. Report what you
changed.

CONTRAST
  All body text at least 4.5:1 against its background; large text 3:1.
  White on #1E6BD6 — verify. Navy on #EFA51B — verify. Muted caption greys —
  verify, these usually fail. Fix by darkening the text, never by removing it.

KEYBOARD
  Full journey — nav, currency switcher, language switcher, pricing cards, FAQ
  accordion, booking modal, all four steps — operable by keyboard alone.
  Visible focus ring on everything, minimum 3:1 against adjacent colour.
  Focus trapped inside the modal, restored to the trigger on close.
  Logical tab order; no positive tabindex anywhere.

SCREEN READERS
  One h1. Heading levels never skip. Landmarks: header, nav, main, footer.
  Every image has alt text, or alt="" if purely decorative.
  Icon-only buttons have aria-label.
  Accordion uses aria-expanded / aria-controls.
  Booking step changes announced via aria-live="polite".
  The currency switcher announces the new currency.

MOTION
  Everything respects prefers-reduced-motion: reduce — including the CTA glow,
  scroll reveals, the shimmer, and any video loop.
  Nothing flashes more than three times per second.

TARGETS
  Minimum 48x48px for every tap target, with 8px of clear space.
  Currency and language switchers are frequently mis-tapped — size them properly.

FORMS
  Every input has a persistent visible label and a programmatic association.
  Errors are announced, described in text, and never signalled by colour alone.
  Correct autocomplete and inputmode attributes.

PERFORMANCE
  Largest Contentful Paint under 2.5s on a simulated 4G connection.
  Cumulative Layout Shift under 0.1 — reserve space for images and for the
  price text when the currency changes.
  Fonts: preload the two primary weights, font-display: swap.
  The glowing CTA must hold 60fps on a mid-range Android.

RESILIENCE
  The page is legible and bookable with JavaScript disabled for content, images
  blocked, and at 200% browser zoom.
```

---

## Prompt 17 — Copy pass

```
Rewrite all Barwaaqo site copy to this voice.

VOICE
Warm, plain, specific, unhurried. Talk to one parent, not an audience. Short
sentences. British-neutral spelling. Confidence without hype.

RULES
  - Say what happens, not how great it is. "A verified teacher, twice a week"
    beats "world-class Somali education".
  - Never use: revolutionary, seamless, unlock, empower, journey, cutting-edge,
    game-changing, "powered by AI".
  - Numbers over adjectives: "1 hour", "twice a week", "within 48 hours",
    "on the 1st of every month".
  - Every claim on the page must be one we can keep on a Tuesday afternoon.
  - Address the real anxiety, which is not price. It is: will my child actually
    speak Somali, and is this person safe with my child?
  - Somali greetings used naturally, never as ornament.
  - No exclamation marks on parent-facing copy. They're fine on the child's side.

THE FREE LESSON — write six variants of the CTA label and pick the strongest:
  "Book your free first lesson"
  "Start with a free lesson"
  "Book a free 1-hour lesson"
  "Try your first lesson, free"
  "Book the free first lesson"
  "See what an hour can do — free"

MICROCOPY that carries a lot of weight:
  Under the CTA: "1 full hour · With a verified teacher · No card needed to book"
  In the pricing section: "Cancel any time. No notice period."
  In the booking form: "First name is all we need."
  On the confirmation: "Waan ku faraxsanahay! Your free lesson request is in."
  On an error: never show a code. "That didn't send. Try again, or message us
  on WhatsApp and we'll book it for you."
```

---

## Appendix A — Tool-specific variants

**v0 / Bolt / Lovable (code generators)**

```
Build this as a Next.js App Router project with TypeScript, Tailwind CSS and
shadcn/ui. One route (/) plus a /pricing anchor. Components in /components,
locale strings in /locales/{en,so,ar}.json, price config in /config/pricing.ts
keyed by currency. No backend — the booking form posts to a stubbed
/api/book route that logs and returns success after 800ms. Ship the glowing CTA
as components/free-lesson-cta.tsx with all glow values as CSS variables in
globals.css. Then: [PASTE PROMPT 0 + PROMPT 1 + PROMPT 2]
```

**Figma Make / Figma AI (design-first)**

```
Produce a Figma file with: a Tokens page (colour, type, spacing, elevation),
a Components page (button variants including all five glowing-CTA variants,
pricing card, teacher card, chip, input, accordion row, stat tile), and a
Screens page with desktop 1440 and mobile 390 frames for the full landing page,
plus the four booking-flow steps, plus an Arabic RTL version of the hero and
pricing sections. Use auto-layout everywhere with logical padding so RTL
mirroring works. Then: [PASTE PROMPT 0 + PROMPT 1 + PROMPT 2]
```

**Claude Artifacts (fast interactive prototype)**

```
Build this as a single self-contained HTML file with inline CSS and JavaScript
— no external requests of any kind. Use system fonts styled to feel close to
Plus Jakarta Sans. Include the working currency switcher, the working booking
modal with all four steps, the working FAQ accordion, and the full glowing CTA
with all its states. Use inline SVG for icons and CSS gradient placeholders,
labelled, in place of photographs. Then: [PASTE PROMPT 0 + PROMPT 1 + PROMPT 2]
```

---

## Appendix B — Visual mood prompt (Midjourney / image models)

```
Landing page design for a warm, trustworthy online learning service for Somali
diaspora families. Deep navy and clear blue with gold accents on a soft
off-white background. Generous white space, rounded 16px cards, one soft
shadow, large friendly sans-serif headings. A prominent glowing gold-and-blue
call-to-action button with a soft halo of light. A photograph of a Somali child
at a laptop in a warm home setting, natural evening light, seen slightly over
the shoulder. Calm, premium, family-oriented — closer to a modern healthcare
app than a school website. No clutter, no stock-photo classroom, no cartoon
mascots. Clean UI design, 1440x900, high detail.
```

---

## Appendix C — Component inventory

Build in this order — each item is reusable across the whole product later.

| # | Component | Notes |
|---|---|---|
| 1 | Design tokens | Colour, type, space, radius, shadow, motion; light + dark |
| 2 | `Button` | primary / secondary / outline / ghost / text, 3 sizes |
| 3 | **`FreeLessonCTA`** | 5 variants, 5 states — the highest-value component on the site |
| 4 | `CurrencySwitcher` | $ € £, auto-detect, persisted, no layout shift |
| 5 | `LocaleSwitcher` | EN / SO / AR, sets `dir` |
| 6 | `PricingCard` | standard / featured / custom-quote |
| 7 | `TeacherCard` | verified / new badge states |
| 8 | `TrackCard` | blue / blue / gold accents |
| 9 | `StepTimeline` | horizontal desktop, vertical mobile, RTL-aware |
| 10 | `Accordion` | FAQ, fully ARIA-compliant |
| 11 | `BookingModal` | 4 steps, progress, restore-on-reopen |
| 12 | `FormField` | label, hint, error, all input types |
| 13 | `Chip` | selectable and static |
| 14 | `StatTile` | for the monthly report mock |
| 15 | `VerifiedBadge` | teal tick, three sizes |
| 16 | `StickyMobileCTA` | safe-area aware, hide-on-scroll-up |

---

## Notes on the pricing

Two things worth confirming before this goes live, since the prompts encode them as fact:

1. **Two-children pricing is written as "per child, per month"** — $70/€60/£50 each, so $140/€120/£100 for two, with each child getting their own two sessions a week. If you meant $70 total for both children, or two children sharing one weekly pair of sessions, change the Package 2 block in Prompt 0 and the sub-line in Prompt 4 — everything else follows from those two places.

2. **The margin is tight at these rates.** $80/month buys roughly 8 teaching hours, which is about $10 per teaching hour gross before card fees and before the teacher's share. The proposal modelled $49/month for 4 × 30-minute lessons — around $24.50 per teaching hour — and still concluded that a 60/40 split left too little. At 8 one-hour sessions for $80 the teacher share lands near $5 per hour on a 55/45 split, which will make good teachers hard to keep. The prompts deliberately keep the "we publish what teachers earn" transparency line, because it's a real differentiator — but it only works if the number is one you're comfortable publishing. Worth pressure-testing in the two-week concierge pilot before the pricing goes on the site.

Neither changes the design work — both are a one-line edit in Prompt 0 if you revise them.

# Single Master Prompt — Somali Diaspora Learning Centre

Everything in one block. Copy from the first line of the code block to the last and paste it into v0, Lovable, Bolt, Cursor, Figma Make or Claude in one go.

Two edits before you paste: replace **Barwaaqo** with the final brand name, and check the Package 2 pricing line reads the way you intend.

---

```
Build the complete front-end for Barwaaqo, an online learning centre that connects
Somali diaspora families with verified Somali teachers for live one-to-one lessons
in Somali, Arabic and Qur'aan. This is the public marketing and booking website:
it explains what we do, sells the packages, and books the free first lesson.

Deliver a responsive, accessible, production-quality build in React + TypeScript +
Tailwind CSS, mobile-first, with all copy in locale files and all prices in one
config object. Follow every section below in order.

================================================================================
PART 1 — LOCKED FACTS. Do not change, invent or "improve" any number or claim.
================================================================================

WHAT WE ARE
An online learning centre. Verified Somali teachers. Live one-to-one video lessons.
Three tracks: Somali language, Arabic, and Qur'aan. Students are children aged 5-15.
The parent owns the account and the payment method; the child gets a supervised
profile inside it, never their own login with an email address.

THE FREE FIRST LESSON — the most important thing on the site
The first lesson is completely free. A real, full 1-hour lesson with a real
verified teacher — not a demo, not a sales call, not 20 minutes. No card is
needed to book it and nothing is charged until after it. Every route through the
site leads here.

PACKAGES — monthly, cancel any time
Every package is 2 x 1-hour live sessions per week (about 8 one-hour sessions a month).

  1. ONE CHILD           $80 / EUR 70 / GBP 60 per month
                         2 x 1-hour sessions per week, for one child.

  2. TWO CHILDREN        $70 / EUR 60 / GBP 50 per child, per month
                         (= $140 / EUR 120 / GBP 100 a month for two children)
                         Each child gets their own 2 x 1-hour sessions per week.
                         This is the "most popular" card.

  3. THREE OR MORE       Custom pricing, with a genuinely generous discount.
     CHILDREN            Show NO number. The call to action is
                         "Get your family price", never "Buy" or "Subscribe".

CURRENCY
Three currencies: USD ($), EUR, GBP. A visible currency switcher, auto-selected
from the visitor's locale, always overridable, remembered in localStorage. Never
show two currencies in the same price line.

INCLUDED IN EVERY PACKAGE
A verified Somali teacher matched to the child; live one-to-one video lessons;
homework set and marked by the teacher; an AI study buddy for practice between
lessons (supervised — parent and teacher can see every conversation); a monthly
progress report for the parent; a free re-match within 48 hours if a teacher leaves.

TRUST
Every teacher passes: identity check, two references, a background check where
available in their country, an observed trial lesson, and safeguarding training.
This standard is published openly. Show verification BEFORE price, everywhere.

NEVER INVENT: student counts, star ratings, "as seen in" logos, testimonials
attributed to real-looking full names, countdown timers, scarcity messages, or any
statistic not stated above. Use clearly-labelled placeholders instead.

================================================================================
PART 2 — DESIGN SYSTEM. Build the tokens before any component.
================================================================================

COLOUR — exact hex, these are the brand
  --blue-primary  #1E6BD6   primary actions, links
  --navy-deep     #082A55   headings, dark sections, nav
  --teal-teacher  #0E8C6F   teachers, verification, success
  --gold-star     #EFA51B   achievement, Qur'aan progress, the free-lesson glow
  --violet-ai     #6C4BD1   RESERVED for the AI study buddy and nothing else
  --coral-alert   #DC4B33   errors, safeguarding
  --paper         #F6F9FC   page background, cards
  --ink           #0A1B2E   body text

Colour discipline: violet appears ONLY where the AI assistant is discussed, so a
family always knows when they are looking at a machine rather than a person. Teal
means teacher. Gold means achievement and the free first lesson — do not spend it
on ordinary buttons.

TYPE
Humanist sans with strong Latin and Arabic coverage: Plus Jakarta Sans or Inter
for Latin, IBM Plex Sans Arabic or Noto Sans Arabic for Arabic.
Desktop scale: display 56/1.05, h1 40/1.15, h2 30/1.25, h3 22/1.3, body-lg 18/1.6,
body 16/1.6, caption 14/1.5, label 13/1.4 uppercase with 0.06em tracking.
Mobile: display 36, h1 30, h2 24, body 16. Body copy max 68 characters per line.

SPACE AND SHAPE
8pt spacing scale. Section rhythm 96px desktop / 64px mobile. Container 1200px max
with 24px gutters (16px mobile). Card radius 16px, button radius 12px, pill 999px.
ONE resting elevation: 0 1px 2px rgba(8,42,85,.06), 0 8px 24px rgba(8,42,85,.08).
Hover adds lift, never a second shadow style. Borders 1px rgba(8,42,85,.08).
Alternate paper and white sections for rhythm; at most two deep-navy sections.

MOTION
Motion only to explain a change. 150-250ms, cubic-bezier(.2,.8,.2,1). Scroll
reveals are a 12px rise plus fade, staggered 60ms, fired once, never on the hero.
Everything respects prefers-reduced-motion: reduce.

IMAGERY
Real photographs of Somali and Somali-diaspora families and teachers — warm natural
light, home settings, a laptop on a kitchen table. No stock classrooms, no globes
or flags, no cartoon mascots on parent-facing pages. Where photography is missing,
use warm navy/gold duotone blocks explicitly labelled as placeholders.

================================================================================
PART 3 — THE GLOWING FREE-LESSON CTA. The centrepiece. Build this first.
================================================================================

The "Book your free first lesson" call to action must look premium and confident —
the kind of button a cautious parent trusts — and it must glow. Eye-catching, never
gaudy: no neon gaming button, no casino badge.

STRUCTURE — a composed element, not just a button
  - A pill above it: gold-tinted, uppercase, 12px, .08em tracking, "FIRST LESSON FREE"
  - The button: label "Book your free first lesson", 17-18px, weight 600, padding
    18px 36px desktop / 16px 28px mobile, radius 14px, min-height 56px, with a
    right-facing arrow that nudges 3px on hover.
  - A caption beneath, 13-14px, muted:
    "1 full hour  ·  With a verified teacher  ·  No card needed to book"

THE GLOW — four layers
  1. AURORA BLOOM. An absolutely-positioned blurred ellipse behind the button,
     ~160% of its width and ~220% of its height, blur 48px, opacity .45, from a
     radial-gradient of gold #EFA51B fading into blue #1E6BD6. The page should look
     lit by the button, not painted around it.
  2. ROTATING CONIC BORDER. A 2px border from a slowly rotating conic-gradient:
       @property --angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
     animate --angle 0deg to 360deg over 6s linear infinite on a pseudo-element
     holding conic-gradient(from var(--angle), #EFA51B, #1E6BD6, #6C4BD1, #EFA51B).
     The button face sits on top with a solid background, so only a fine ring of
     moving light shows. This is jewellery, not a lightshow.
  3. FACE AND DEPTH. Background linear-gradient(135deg, #1E6BD6 0%, #0F53B4 100%),
     white text at 4.5:1 contrast minimum, inner highlight inset 0 1px 0
     rgba(255,255,255,.28), and a layered outer bloom:
       0 4px 12px rgba(30,107,214,.35),
       0 10px 32px rgba(239,165,27,.28),
       0 0 0 0 rgba(239,165,27,.45)      <- resting state of the pulse ring
  4. PULSE AND SHIMMER. The fourth shadow expands to 0 0 0 14px rgba(239,165,27,0)
     over 2.6s ease-out, infinite, with a 1.2s gap — one slow heartbeat, never fast,
     never bouncing. A 20%-wide white band at 18% opacity sweeps across the face
     every 5 seconds, taking 900ms, clipped with overflow:hidden.

STATES
  hover          translateY(-2px), bloom +25%, one immediate shimmer sweep, arrow
                 nudges right, 180ms ease-out
  active         translateY(0) scale(.99), bloom dims — a physical press
  focus-visible  3px solid #EFA51B ring at 3px offset, and the rotating border
                 PAUSES so the focus ring is unambiguous. Never remove the outline.
  loading        label becomes "Finding a time...", inline 16px spinner replaces the
                 arrow, disabled, glow at 40%, width does NOT change
  success        background morphs to teal #0E8C6F, arrow becomes a checkmark drawn
                 over 240ms, label "Lesson booked"

ACCESSIBILITY — non-negotiable
  - A real <button> (or <a> if it navigates). Never a clickable <div>.
  - Under prefers-reduced-motion: reduce, remove the rotation, pulse and shimmer
    entirely; keep a static gold-to-blue border and a soft static bloom. Design that
    still version FIRST and make it look premium, then add the motion on top.
  - Nothing flashes more than three times per second.
  - Minimum 48x48px target with 8px clear space.
  - The glow is decorative — shape, colour and label must carry the meaning alone.

PERFORMANCE
Animate only transform, opacity and the custom property. Hold 60fps on a
three-year-old Android. Expose every glow value as a CSS custom property so the
intensity can be tuned in one place.

SHIP FIVE VARIANTS of one component (props: variant, size, label, loading, onClick)
  a) Hero — the full composed version with pill and caption
  b) Header — compact 40px, single soft bloom, no shimmer, fades in only after the
     hero CTA scrolls out of view
  c) Mobile sticky bar — full-width, fixed bottom, safe-area padding, softened glow,
     hides while the user scrolls up
  d) Dark-section — on navy #082A55 drop the bloom to .3 and raise border contrast
  e) Inline text — no glow, a gold underline that thickens on hover

================================================================================
PART 4 — PAGE STRUCTURE. Build in exactly this order.
================================================================================

1. HEADER
Transparent over the hero at 80px. Logo left; nav centre (How it works · What we
teach · Teachers · Pricing · Safeguarding · FAQ); right: language switcher
(EN / SO / AR), currency switcher ($ EUR GBP), quiet outlined "Sign in".
On scroll past the hero CTA it compacts to 64px, gains paper at 92% opacity with
backdrop-blur and a 1px bottom border, and the compact glowing CTA fades in.
Mobile: hamburger opening a full-height drawer from the inline-end side, with the
switchers at the bottom and the full glowing CTA pinned above the safe area.

2. HERO — a parent must understand this and book within 15 seconds
Asymmetric 7/5 on desktop, stacked on mobile with copy first. The CTA must be above
the fold on a 5-inch phone.
  - Eyebrow pill: "Live online lessons · Somali · Arabic · Qur'aan"
  - H1, warm and specific: "Your child, speaking Somali with confidence."
  - One-sentence sub-headline, max 22 words, covering verified teachers, live
    one-to-one lessons, homework and a monthly progress report
  - THE GLOWING CTA
  - Quiet text link beside it: "See packages and pricing"
  - Reassurance line, 14px muted: "1 full hour · With a verified teacher · No card
    charged until after"
Right column: a warm photograph of a child at a laptop mid-lesson, seen slightly
over the shoulder, with one floating card overlapping it — "Next lesson today,
18:00 · Somali reading with Ustaad Yusuf" and a teal verified tick. That card sells
the product better than the photo does.
Background: a very soft radial wash, gold at 6% top-left to blue at 6% bottom-right
over paper. Nothing that competes with the button. No carousel, no autoplaying
sound. The hero must stay legible with images blocked.

3. TRUST BAR
A slim strip: "Every teacher ID-checked · References taken · Background checked ·
Safeguarding trained · Observed trial lesson". Teal icons. Understated.

4. WHAT WE TEACH — three cards, equal weight
  SOMALI (blue)  "Speaking, reading and writing Somali — from first words to full
                 conversations." Everyday conversation with family / reading and
                 writing the alphabet / stories, proverbs and poetry.
                 Ages 5-15 · Complete beginners welcome
  ARABIC (blue)  "Modern Standard Arabic, taught right-to-left from day one."
                 The alphabet and letter forms / reading fluency and vocabulary /
                 grammar foundations that support Qur'aan study.
                 Ages 6-15 · Beginner to intermediate
  QUR'AAN (gold) "Recitation, tajwiid and memorisation with a qualified teacher."
                 Correct recitation and tajwiid / memorisation tracked surah by
                 surah / meaning and reflection, age-appropriate.
                 Ages 5-15 · Assessed only by a human teacher, never by AI
Each card links "Book a free lesson in [track]", opening the booking flow with that
track pre-selected. Below: "Not sure where to start? The free first lesson doubles
as a friendly assessment — the teacher will tell you honestly where your child is."

5. HOW IT WORKS — four numbered steps on a connecting line
  1 Tell us about your child (2 minutes)
  2 We match you with a verified teacher
  3 Free 1-hour first lesson — no charge
  4 Choose a package and keep going
Step 3 is visually emphasised: gold marker, slightly larger card.

6. PACKAGES
Heading: "Simple packages. The first lesson is always free."
Sub: "Every package is 2 one-hour live sessions a week — about 8 hours of
one-to-one teaching a month. Cancel any time."
A segmented currency control above the cards ($ USD · EUR · GBP); switching
cross-fades the price digits over 150ms with no layout shift and no count-up.
Three equal-height cards; the middle one emphasised with a teal "Most popular"
ribbon; on mobile they stack in the order 2, 1, 3.
  CARD 1 "One child" — $80 / EUR 70 / GBP 60 per month. "2 x 1-hour sessions every
  week, for one child." Lists: matched verified teacher, live one-to-one lessons,
  homework set and marked, AI study buddy, monthly progress report, free re-match
  within 48 hours. CTA "Start with a free lesson" (secondary style).
  CARD 2 "Two children" — $70 / EUR 60 / GBP 50 per child, per month. Beneath, in
  smaller muted type: "$140 / EUR 120 / GBP 100 a month for two children — each
  child gets their own 2 x 1-hour sessions a week." A gold savings pill: "Save $10
  per child, every month." Adds: same teacher or different specialists for siblings,
  one invoice, one report per child. CTA "Start with a free lesson" (primary style).
  CARD 3 "Three or more children" — the price slot reads "Custom pricing", with
  "A genuinely generous discount — tell us about your family and we'll price it."
  Adds a dedicated family schedule, flexible sibling timetabling, one point of
  contact. CTA "Get your family price" opens a short form (parent name, email or
  WhatsApp, number of children, ages, tracks, preferred times). Never a payment screen.
Beneath the cards: "First lesson free · No card charged until after your free
session · Cancel any time · Prices shown in your currency", then the transparency
line "We publish what teachers earn. A fair share of every payment goes directly to
your child's teacher." with a "How we pay teachers" link, then a "Not sure which to
pick?" line with a WhatsApp support link.
No countdown timers, no fake scarcity, no strikethrough anchor prices.

7. MEET THE TEACHERS
Three or four cards, horizontally scrollable with edge-peek on mobile: a 4:5 warm
portrait, the teal verified badge ABOVE the name, respectful naming ("Ustaad Yusuf
A.", "Macallin Farhia", "Sheekh Cabdi"), track chips, years teaching, languages,
time zone, one sentence in the teacher's own voice, and "Book a free lesson with
[first name]". A "New teacher" state exists with a gold chip and the honest line
"Fully vetted, newly joined". Below: "We match your child to a teacher, and if it
isn't right we re-match within 48 hours — at no cost, and your progress moves with
you." All photographs and names are labelled placeholders until real teachers
consent; never present a generated person as real.

8. HOW WE VERIFY TEACHERS — deep navy #082A55 section, paper-coloured text
Headline: "Parents are buying safety before they are buying Somali."
Sub: "Here is exactly how we verify every teacher — published, not promised."
Five steps as a horizontal timeline (vertical on mobile), teal icons:
  1 Identity verified — government ID and right to work checked
  2 Two references taken — from previous teaching or community roles
  3 Background check — where available in the teacher's country
  4 Observed trial lesson — a senior teacher sits in and scores it
  5 Safeguarding training — completed and a code of conduct signed
Then three small reassurance cards: "Your child never sees a price, a payment
screen or an advert." / "Report anything, one tap. A human reviews it within 24
hours." / "The AI study buddy is supervised — you and the teacher see every
message." CTA: an OUTLINED button "Read our full safeguarding standard" — the glow
belongs to the free lesson alone. No shields, no padlocks, no fear-based copy.

9. BETWEEN LESSONS — the AI study buddy. Violet #6C4BD1 appears here and nowhere else
Headline: "A practice partner between lessons — with the teacher still in charge."
Left copy, right a small violet chat mock with a visible banner reading "Your
teacher and hooyo can see this chat", showing the buddy asking "Shall we practise
this week's 10 words?", the child answering, and the buddy asking for a sentence.
Four limits framed as reassurances: it only practises what the teacher has already
taught; it never gives religious rulings and never assesses recitation; every
conversation is logged and visible to you and the teacher; there is a daily time
limit so it stays practice, not a screen habit.
Closing line: "The AI helps your child remember. The teacher does the teaching."
No robots, no glowing brains, no "powered by".

10. THE MONTHLY REPORT — treat as a hero-quality moment
"Every month, a report you'll actually want to forward." Copy: attendance, new words
learned, Qur'aan progress and one honest note from the teacher; a minute to read and
it shows exactly what you're paying for.
Beside it, a realistic mock report card tilted 2 degrees with a soft shadow: child's
first name, month, teacher name with teal tick; four stat tiles (Lessons attended
4/4 · New words 42 · Homework done 3/4 · Qur'aan Juz Amma 60%); a slim gold progress
bar; a quoted teacher's note "Beautiful recitation this week. Slow down on the long
vowels."; and a footer chip "Sent to you on the 1st of every month". At mobile width
drop to two stat tiles rather than shrinking type below 12px.

11. PARENTS' WORDS
Testimonial cards using clearly-labelled placeholder content. Never fabricate a
named person.

12. FAQ — single column, max-width 760px, accordion built from real <button>
elements with aria-expanded and aria-controls, height animated over 200ms and
disabled under reduced-motion. Answers, plainly written:
  Is the first lesson really free? — Yes, a full hour with a verified teacher, at no
  cost, with no card needed to book it. If it isn't right for your child, that's the
  end of it.
  What happens after the free lesson? — We'll ask what you thought. If you want to
  carry on, you pick a package and set a weekly time. If not, nothing is charged.
  How long is each lesson, and how many do we get? — One hour, twice a week, around
  eight hours of one-to-one teaching a month.
  What does it cost? — $80 / EUR 70 / GBP 60 a month for one child. For two children
  it's $70 / EUR 60 / GBP 50 per child. For three or more we'll price it for your
  family with a generous discount.
  What if my child doesn't get on with their teacher? — Tell us and we'll re-match
  within 48 hours, at no cost. Their progress moves with them.
  Do you teach complete beginners? — Yes, many of our children start with no Somali
  at all.
  What time zones do you cover? — Our teachers cover UK, European and North American
  evenings and weekends.
  Can I pause or cancel? — Yes, any time, from your account. No notice period, no
  cancellation fee.
  How do you keep my child safe online? — Every teacher is ID-checked, referenced,
  background-checked where available, observed teaching and safeguarding-trained.
  You hold the account, your child never has their own login, and every AI
  conversation is visible to you.
  What do we need to join a lesson? — A phone, tablet or laptop with a camera and an
  internet connection. We send a link; there's nothing to install.

13. CLOSING CTA BAND — deep navy, ~200px, centred
H2 "Your child's first lesson is free." Sub "Find out what they can do in an hour."
The glowing CTA in its dark-section variant. Under it: "No card needed · 1 full hour
· With a verified teacher".

14. FOOTER — paper, four columns collapsing to an accordion on mobile
  Learn: Somali · Arabic · Qur'aan · Free first lesson · Pricing
  Trust: How we verify teachers · Safeguarding · Our AI rules · Privacy notice
  Company: About · Teach with us · Contact · WhatsApp support
  Family: Sign in · Help centre · Refund policy · Terms
Bottom bar: logo mark, "(c) [year] [Brand]. Registered in [country], no. [X]", and
the language and currency switchers repeated. "Teach with us" lives here, not in the
main nav — the header stays pointed at parents.

================================================================================
PART 5 — THE BOOKING FLOW. Every glowing CTA opens this.
================================================================================

A focused modal on desktop, a full-screen sheet on mobile. Four steps, a slim
progress bar, a visible "Step 2 of 4" counter, Back always available. Nothing here
asks for payment.

STEP 1 — About your child
  Child's first name, with the reason stated: "First name is all we need."
  Age band chips: 5-7 · 8-10 · 11-13 · 14-15 (chips, not a dropdown)
  Track chips, multi-select: Somali · Arabic · Qur'aan
  Level: Complete beginner · Understands some · Speaks a little · Confident
  Optional 200-character "Anything the teacher should know?"
  An "Add another child" link that repeats compactly and quietly notes that siblings
  are priced lower.

STEP 2 — When suits you
  Time zone auto-detected with an obvious override. A simple week grid of blocks
  (weekday mornings / afternoons / evenings, weekend), multi-select — a preference,
  not a calendar booking. Note: "Lessons are 1 hour. Packages are 2 lessons a week —
  but today you're just booking the free one."

STEP 3 — Your details
  Parent first name, email, and an explicitly optional WhatsApp number with a note
  that most families prefer WhatsApp. An unticked consent checkbox in plain language:
  "I'm this child's parent or guardian and I agree to the terms and privacy notice."
  A teal reassurance strip: "No payment now. Nothing is charged until after your free
  lesson, and only if you choose a package."

STEP 4 — Confirmation
  A large teal checkmark, drawn not spun. "Waan ku faraxsanahay! Your free lesson
  request is in." Then what happens next, numbered with real commitments:
    1 We match your child with a verified teacher (within 24 hours)
    2 We message you two or three times that work
    3 Your child has a free 1-hour lesson
    4 Only then do you choose a package — or not
  Buttons: "Message us on WhatsApp" and "See packages while you wait", plus small
  print on changing or cancelling.

FORM QUALITY
Labels above fields, always visible — never placeholder-as-label. Validate on blur,
never on keypress. Errors in coral beneath the field, written as help not blame:
"We need an email so we can send the lesson link." Correct input types, inputmode
and autocomplete attributes. Progress restored if the modal is closed accidentally.
Focus trapped inside, returned to the triggering button on close; Escape asks for
confirmation if data has been entered. Each step announced via an aria-live region.
The whole flow completable in under 90 seconds on a phone.

================================================================================
PART 6 — TRILINGUAL AND RIGHT-TO-LEFT. Build it in now, do not retrofit.
================================================================================

English, Somali and Arabic. Arabic is right-to-left.
  - Set dir on <html> from the active locale; the language switcher changes direction
    as well as words.
  - Use logical CSS properties everywhere — margin-inline-start, padding-inline-end,
    inset-inline-start, text-align: start. Never left/right.
  - Mirror directional icons (arrows, chevrons, progress, the mobile drawer's entry
    side, the timeline's flow) under [dir="rtl"]. Do NOT mirror logos, photographs or
    the checkmark.
  - Keep Western Arabic numerals for prices in all locales; let Intl.NumberFormat
    place the currency symbol.
  - Arabic body text takes 1.8 line height and about 1px more size at equivalent
    levels. Somali is Latin but runs long: every button, chip and nav item must
    survive 40% text expansion without clipping or ugly wrapping.
  - Every string lives in /locales/{en,so,ar}.json. No text inside components.
    Pluralisation via Intl.PluralRules — Somali and Arabic plurals are not English's.
  - Cultural detail, which is the thing a global tutoring site cannot copy: Somali
    greetings used naturally ("Soo dhawoow", "Salaan", "Waan ku faraxsanahay"),
    respectful titles (Ustaad, Macallin, Sheekh), "hooyo" and "aabo" where the copy
    speaks to a child about their parents, and Islamic-calendar awareness in
    scheduling copy. Never translate the brand name.
  - Screenshot every section in all three locales at 360px and 1440px. If a layout
    breaks in Arabic, the layout is wrong — not the language.

================================================================================
PART 7 — COPY VOICE
================================================================================

Warm, plain, specific, unhurried. Talk to one parent, not an audience. Short
sentences, British-neutral spelling, confidence without hype.
  - Say what happens, not how great it is. "A verified teacher, twice a week" beats
    "world-class Somali education".
  - Never use: revolutionary, seamless, unlock, empower, journey, cutting-edge,
    game-changing, "powered by AI".
  - Numbers over adjectives: "1 hour", "twice a week", "within 48 hours", "on the
    1st of every month".
  - Every claim must be one we can keep on a Tuesday afternoon.
  - Address the real anxiety, which is not price: will my child actually speak
    Somali, and is this person safe with my child?
  - No exclamation marks in parent-facing copy.
  - Never show a raw error code. "That didn't send. Try again, or message us on
    WhatsApp and we'll book it for you."

================================================================================
PART 8 — ACCESSIBILITY, PERFORMANCE AND RESILIENCE. Non-negotiable.
================================================================================

CONTRAST   Body text 4.5:1 minimum, large text 3:1. Verify white on #1E6BD6, navy on
           #EFA51B, and every muted grey caption — those usually fail. Fix by
           darkening text, never by deleting it.
KEYBOARD   The entire journey — nav, both switchers, pricing cards, FAQ, and all four
           booking steps — operable by keyboard alone, with a visible focus ring at
           3:1 against its surroundings. Logical tab order, no positive tabindex, and
           the emphasised pricing card must not trap focus order.
SEMANTICS  One h1, no skipped heading levels, header/nav/main/footer landmarks, alt
           text on every image (alt="" if decorative), aria-label on icon-only
           buttons, aria-live for booking step changes, and the currency switcher
           announcing its new value.
MOTION     Everything respects prefers-reduced-motion: reduce, including the CTA glow,
           the shimmer, scroll reveals and any video. Nothing flashes more than three
           times per second.
TARGETS    48x48px minimum with 8px clear space — the currency and language switchers
           especially, as they are the most mis-tapped elements on sites like this.
FORMS      Persistent visible labels, programmatic associations, errors announced and
           described in text, never signalled by colour alone.
PERF       LCP under 2.5s on simulated 4G. CLS under 0.1 — reserve space for images
           and for the price text when the currency changes. Preload two font weights
           with font-display: swap. Lazy-load below-the-fold images with explicit
           width and height. The glowing CTA holds 60fps on a mid-range Android.
RESILIENCE Legible and bookable with images blocked and at 200% browser zoom.

================================================================================
PART 9 — WHAT TO DELIVER
================================================================================

Build these components in this order; each is reusable across the wider product later:
  1  Design tokens (colour, type, space, radius, shadow, motion; light and dark)
  2  Button — primary / secondary / outline / ghost / text, three sizes
  3  FreeLessonCTA — five variants, five states (the highest-value component here)
  4  CurrencySwitcher — $ EUR GBP, auto-detect, persisted, no layout shift
  5  LocaleSwitcher — EN / SO / AR, sets dir
  6  PricingCard — standard / featured / custom-quote
  7  TeacherCard — verified and new states
  8  TrackCard — blue / blue / gold accents
  9  StepTimeline — horizontal desktop, vertical mobile, RTL-aware
  10 Accordion — fully ARIA-compliant
  11 BookingModal — four steps, progress, restore-on-reopen
  12 FormField — label, hint, error, all input types
  13 Chip — selectable and static
  14 StatTile — for the monthly report mock
  15 VerifiedBadge — teal tick, three sizes
  16 StickyMobileCTA — safe-area aware, hides on scroll-up

Project shape: components in /components, locale strings in /locales/{en,so,ar}.json,
prices in /config/pricing.ts keyed by currency (never hard-coded in JSX), glow values
as CSS custom properties in globals.css. The booking form posts to a stubbed
/api/book route that resolves successfully after 800ms — no real backend.

Start with the design tokens and the FreeLessonCTA component, show me those, then
build the full page.
```

---

## After the first generation

Point the tool at one thing at a time:

- "The glowing CTA is too much — halve the aurora bloom opacity and slow the shimmer to every 8 seconds."
- "Rebuild the pricing section only. Package 2 must show per-child pricing with the two-child total beneath it."
- "Show me every section in Arabic RTL at 390px."
- "Run the Part 8 accessibility checklist against what you built and fix what fails."

## Before it goes live

- Confirm Package 2 reads the way you mean: $70 **per child** (so $140 for two, each with their own two weekly sessions), not $70 total.
- Pressure-test the rate. $80/month buys about 8 teaching hours — roughly $10 per teaching hour gross, before card fees and the teacher's share. The prompt keeps the "we publish what teachers earn" line because it is a genuine differentiator, but that only works if the resulting number is one you are happy to publish.

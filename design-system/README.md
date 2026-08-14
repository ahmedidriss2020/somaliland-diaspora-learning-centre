# Garaad — Design System

Garaad is an online learning centre connecting Somali diaspora families with verified Somali teachers. Live one-to-one lessons over video, in three tracks: **Somali language, Arabic, and Qur'aan**. Students are children aged 5–15. The parent owns the account and the payment method; the child gets a supervised profile inside it, never their own login.

The product this design system serves is the **public-facing marketing and booking site**: it explains what we do, sells the packages, and books the free first lesson.

**The free first lesson is the centre of the whole design.** It is a real hour with a real verified teacher, free, with no card needed to book. Every visual decision — where the glow goes, where gold is allowed, what gets emphasis — protects that one call to action.

## Sources

- GitHub: <https://github.com/ahmedidriss2020/somaliland-diaspora-learning-centre> — read at the `main` branch. **The repository currently contains only a one-line README: no code, tokens, components or assets.** Everything here is therefore built from the written brand brief supplied with it (the "UI Design Prompts — Somali Diaspora Learning Centre" document, working name *Barwaaqo*, shipped here under the real brand name **Garaad**). If the repo gains an implementation, explore it and reconcile this system against the real code — see `github.md`.
- Brand brief: locked facts (product, free lesson, packages, currencies, vetting standard, tone), colour hexes, type scale, spacing, motion, imagery direction, and a component inventory (Appendix C). Locked numbers are reproduced verbatim in `ui_kits/marketing_site/site-data.js`.

## Locked facts (never change these in a design)

- All packages are **2 × 1-hour live sessions a week**, about 8 one-hour sessions a month, billed monthly, cancel any time.
- One child **$80 / €70 / £60** per month. Two children **$70 / €60 / £50 per child, per month** ($140 / €120 / £100 for two). Three or more: **custom pricing, no number shown**, CTA "Get your family price".
- Three currencies with a visible switcher; never two currencies in one price line.
- Every teacher passes: ID check, two references, background check where available, an observed trial lesson, and safeguarding training.
- Do not invent student counts, star ratings, "as seen in" logos, named testimonials, countdown timers, or any statistic. Use clearly-labelled placeholders.

## Index

| Path | What it is |
|---|---|
| `styles.css` | The single stylesheet consumers link. Imports only. |
| `tokens/` | `colors.css`, `typography.css`, `space.css`, `elevation.css`, `motion.css`, `animations.css`, `fonts.css`, `base.css` |
| `components/core/` | `Button`, `Chip`, `VerifiedBadge`, `StatTile`, `Icon` |
| `components/brand/` | `Motif` — camel, caravan, aqal Somali, alool weave |
| `components/cta/` | `FreeLessonCTA`, `StickyMobileCTA` |
| `components/switchers/` | `CurrencySwitcher`, `LocaleSwitcher` |
| `components/cards/` | `PricingCard`, `TeacherCard`, `TrackCard` |
| `components/content/` | `StepTimeline`, `Accordion` |
| `components/forms/` | `FormField` |
| `components/overlays/` | `BookingModal` |
| `guidelines/` | Foundation specimen cards (colour, type, spacing, brand) |
| `ui_kits/marketing_site/` | Full click-through landing page — see its `README.md` |
| `templates/landing-page/` | Starting-point template consuming projects can copy (`LandingPage.dc.html`) |
| `thumbnail.html` | Project tile |
| `SKILL.md` | Agent-skill entry point |
| `github.md` | Upstream repo association and sync record |

Every component ships `<Name>.jsx`, `<Name>.d.ts` (props + adherence contract) and `<Name>.prompt.md` (what & when, usage example, variants). Read the `.prompt.md` before using a component.

### Intentional additions

- **`Motif`** — the brief specifies photography but supplies none, and names no illustration. `Motif` fills that gap with four flat Somali marks — camel, camel caravan, aqal Somali, alool weave band — so a page can feel Somali before any photograph arrives. They are decorative and `aria-hidden`; they are not a logo and never replace the wordmark. See MOTIFS below.
- **`Icon`** — Appendix C lists no icon component, but every other component needs glyphs and no icon set shipped with the brief. `Icon` wraps a fixed set of Lucide-derived outlines so stroke weight and RTL mirroring stay consistent. See ICONOGRAPHY.

Appendix C's inventory is otherwise built in full: tokens, Button, FreeLessonCTA, CurrencySwitcher, LocaleSwitcher, PricingCard, TeacherCard, TrackCard, StepTimeline, Accordion, BookingModal, FormField, Chip, StatTile, VerifiedBadge, StickyMobileCTA.

## CONTENT FUNDAMENTALS

**Voice: warm, calm, plain-spoken, confident.** A family app, not a school portal. Talk to one parent, not an audience. Short sentences, British-neutral spelling, no hype.

- **Say what happens, not how great it is.** "A verified teacher, twice a week" beats "world-class Somali education". "Free 1-hour first lesson — no charge" beats "unmissable introductory offer".
- **Numbers instead of adjectives.** "1 hour", "twice a week", "within 24 hours", "within 48 hours", "on the 1st of every month", "about 8 hours of one-to-one teaching a month".
- **Address the real anxiety.** It is not price. It is: will my child actually speak Somali, and is this person safe with my child? So: "Parents are buying safety before they are buying Somali." And: "published, not promised".
- **Banned words:** revolutionary, seamless, unlock, empower, journey, cutting-edge, game-changing, "powered by AI". No "military-grade", no fear-based safeguarding copy.
- **Casing:** sentence case everywhere — headings, buttons, nav. Uppercase only in 12–13px labels and the CTA pill ("FIRST LESSON FREE", tracking .08em). Never uppercase a sentence.
- **Person:** first person plural for the company ("We match your child…", "We publish what teachers earn"), second person for the parent ("your child", "you hold the account"). Never "I".
- **Punctuation:** middot-separated reassurance runs are a house pattern — "1 full hour · With a verified teacher · No card needed to book". No exclamation marks on parent-facing copy; the one exception is the Somali greeting on the booking confirmation: "Waan ku faraxsanahay! Your free lesson request is in."
- **Somali used naturally, never as ornament:** "Soo dhawoow", "Salaan", "Waan ku faraxsanahay", "Bal aan bilowno", "hooyo" and "aabo" when speaking about parents to a child, and the respectful teacher titles **Ustaad, Macallin, Sheekh**. Never translate the brand name.
- **Somali word rules.** Gloss every Somali word in English on first use on a page ("Dhaqan · Culture", "taariikh, gabay and maahmaah"). A Somali word may never be the only label on a control, a nav item excepted where the section itself is named in Somali ("Dhaqan"). Keep the spellings fixed: *dhaqan* (culture), *taariikh* (history), *gabay* (poetry), *maahmaah* (proverb/saying, unchanged in the plural), *sheekooyin* (stories), *Shanta Soomaaliyeed*. Two to four Somali words per page section is warmth; ten is costume.
- **Shanta Soomaaliyeed is a promise, not a slogan.** We are for all five Somali lands and every family that left them, so the copy never favours one region, city, clan or accent, and never names one. Write it in full — "Waxaan u nahay Shanta Soomaaliyeed", glossed — and let the reassurance do the work: "same language, same dhaqan, same teaching, wherever you landed".
- **Culture is taught, so say what is taught.** Taariikh, gabay and maahmaah are named as content on the same footing as reading and writing, never as a vague "cultural enrichment". The house line: "Not only the language. The whole inheritance." The house maahmaah: *Aqoon la'aan waa iftiin la'aan* — to be without knowledge is to be without light.
- **Errors read as help, not blame:** "We need an email so we can send the lesson link." Never a code: "That didn't send. Try again, or message us on WhatsApp and we'll book it for you."
- **Emoji: never** on parent-facing pages. The child-facing side may loosen (exclamation marks are fine there), but nothing in this system uses emoji as an icon.
- **Placeholders are labelled out loud.** "Placeholder — teacher photograph", "Registered in [country], no. [X]". An honest gap beats an invented fact.

## VISUAL FOUNDATIONS

**The feel:** closer to a modern healthcare app than a school website. Calm, premium, family-oriented. Generous whitespace, one soft shadow, 16px cards, large friendly sans headings — and exactly one thing on the page that glows.

**Colour.** Six brand hexes, each with a job. `--blue-primary #1E6BD6` for primary actions and links. `--navy-deep #082A55` for headings and dark sections. `--teal-teacher #0E8C6F` for anything belonging to a teacher, and success. `--gold-star #EFA51B` for achievement, Qur'aan progress and the free first lesson. `--violet-ai #6C4BD1` **reserved for the AI study buddy and nothing else**, so a family always knows when they are looking at a machine rather than a person. `--coral-alert #DC4B33` for errors and safeguarding reports. On `--paper #F6F9FC` with `--ink #0A1B2E` body text.

Discipline: gold is never an ordinary button fill. Violet never appears outside the AI section. Teal never labels anything that isn't a teacher.

**Type.** Plus Jakarta Sans for Latin, IBM Plex Sans Arabic for Arabic. Headings tight (`-0.02em`, line-height 1.05–1.3), body generous (1.6), body measure capped at 68 characters. Desktop display 56 → h1 40 → h2 30 → h3 22 → body-lg 18 → body 16 → caption 14 → label 13 uppercase at 0.06em. Mobile: display 36, h1 30, h2 24. Arabic gets 1.8 line height and about 1px more size at equivalent levels; Somali is Latin script but runs ~40% longer than English, so nothing that holds a string is fixed-width.

**Space and shape.** 8pt scale. 96px section rhythm on desktop, 64px on mobile. 1200px container, 24px gutters (16px mobile). Radii: card 16, CTA 14, button/input/tile 12, small 8, pill 999.

**Surfaces and rhythm.** Alternate `paper` and `white` sections down the page. **At most two deep-navy sections** — the safeguarding section and the closing CTA band — never a full page of dark. Cards are white with a 1px `rgba(8,42,85,.08)` hairline; no heavy outlines, no coloured left-border accents.

**Elevation — one level.** Resting cards: `0 1px 2px rgba(8,42,85,.06), 0 8px 24px rgba(8,42,85,.08)`. Hover deepens the same shadow family and lifts 2px; it never introduces a second shadow style. Modals: `0 24px 64px rgba(6,29,59,.28)` over a 56% navy scrim with a 3px blur.

**The glow (the one exception to all the restraint).** The free-lesson CTA is built from four layers: an aurora bloom (blurred gold→blue ellipse, 160% × 220%, blur 48px, opacity .45 — .3 on navy), a 2px rotating conic ring (a spinning conic layer clipped by the button radius, 6s linear), the blue gradient face with a `inset 0 1px 0 rgba(255,255,255,.28)` top highlight, and an idle pulse (2.6s ease-out with a 1.2s rest) plus a shimmer band sweeping every 5s in 900ms. Jewellery, not a lightshow. Every value is a `--cta-*` custom property.

**Motion.** Only to explain a change. 150–250ms on `cubic-bezier(.2,.8,.2,1)`. Scroll reveals rise 12px and fade, staggered 60ms, fire once, never on the hero. Price changes cross-fade in 150ms — never count up. Under `prefers-reduced-motion: reduce` the rotation, pulse, shimmer and all transforms stop; the static version is designed first.

**States.** Hover: 2px lift + slightly deeper shadow (cards), a darker blue (`--action-primary-hover`) for primary buttons, a 3px-thick gold underline for text links, and a 3px nudge on the CTA arrow. Press: `translateY(0) scale(.99)` and a dimmed bloom — a physical press, never a colour flash. Focus-visible: 3px `--gold-star` ring at 3px offset, always present, and the CTA's rotating ring pauses so the focus ring is unambiguous. Disabled: 55% opacity, never a grey-on-grey mystery.

**Transparency and blur.** Sparing and functional: the scrolled header (paper at 92% + 12px backdrop blur), the mobile sticky CTA bar (94% + blur), and the modal scrim. Never blur for decoration.

**Backgrounds.** No mesh gradients, no hard gradients, no patterns. The hero uses a very soft radial wash — gold at ~6% top-start drifting to blue at ~6% bottom-end over paper — and nothing else competes with the button. Navy sections are flat.

**Imagery.** Real photographs of Somali and Somali-diaspora families and teachers: warm natural light, home settings, kitchen tables and sofas, seen slightly over the shoulder. Warm, not cool; no grain, no black and white. No stock classrooms, no globes or flags, no cartoon mascots on parent-facing pages. **No photography shipped with the brief**, so this system uses warm navy/gold duotone placeholders with a visible "Placeholder" caption (`guidelines/brand-imagery.card.html`). Teacher portraits are 4:5.

**Layout rules.** Sticky header (80px → 64px on scroll). Mobile sticky CTA bar fixed to the bottom with safe-area padding, hidden while scrolling up. Hero is asymmetric 7/5 on desktop, stacked copy-first on mobile, with one floating card overlapping the photograph — the floating card sells the product better than the photo does. Everything uses logical properties (`margin-inline-start`, `inset-inline-end`) so Arabic mirrors correctly; arrows and chevrons mirror, the checkmark and logos never do.

**Tap targets and forms.** 48×48px minimum with 8px clear space — the currency and language switchers are frequently mis-tapped and are sized properly. Labels sit above fields, always visible; never placeholder-as-label. Validate on blur. Errors are coral text beneath the field with `role="alert"`, never colour alone.

## MOTIFS

Four flat Somali marks, in `components/brand/Motif.jsx`. They give the pages a Somali register that type and colour alone cannot, and they are the only illustration in the system.

- **`caravan`** — three camels walking, front to back. The page's quiet baseline. Sits along the bottom edge of a band at 7–8% opacity, behind the text, never beside it. Once per page, twice at the very most.
- **`aqal`** — the nomadic dome hut. The mark for home, dhaqan and belonging. Works at 48–96px next to a heading. Its `lineColor` must be set to the surface behind it so the ribs and doorway read as cut-outs, not as strokes.
- **`camel`** — a single silhouette for small spots: beside a maahmaah, in the footer under the wordmark, on a divider.
- **`weave`** — the alool mat pattern as a 10–12px full-width rule in gold at ~45% opacity. Use it in place of a hairline border where a section change should feel warm rather than administrative.

**Rules.** Decorative only — every motif is `aria-hidden`, and nothing a sighted user learns from a motif is unavailable to a screen-reader user. Behind text: opacity ≤ .12. Beside text: full strength in navy or `--gold-700`. One motif family per section; a camel and an aqal in the same band compete. Never animate a motif, never rotate a camel, never fill one with a gradient, never outline one. And they stay decorative in scale: motifs support the design, they do not become the design — a page whose Somali identity rests on camels rather than on the language, the teachers and the dhaqan copy has got it backwards.

## ICONOGRAPHY

**Substitution flagged:** the repository shipped no icon set, sprite, icon font or SVGs, and the brief names none. Icons here are **Lucide-derived** 24×24 outlines at stroke width 2 with round caps and joins — the closest match to the brief's "icons in teal, understated, not a badge parade". They are inlined in `components/core/Icon.jsx` (no CDN request, no build step), which keeps the set small and deliberate: `check, arrow-right, chevron-down, x, menu, clock, globe, user-check, users, file-check, eye, heart, book-open, message-circle, calendar, sparkles, star, file-text`.

- **Usage:** icons are supporting, never decorative filler. Teal for trust and teacher signals, blue for track and navigation affordances, gold only for achievement, violet only inside the AI section, coral only for errors.
- **Size:** 15–18px inline with text, 20–24px in a soft tinted square (48px, radius 12) for section and track cards.
- **The vetting timeline** uses `user-check, file-check, globe, eye, heart` — one glyph per published step. The brief bans shields and padlocks: security is communicated with words and quiet competence, not badges.
- **Mirroring:** `mirrorRtl` flips directional glyphs under `[dir="rtl"]`. Never mirror the checkmark or a logo.
- **No emoji, anywhere.** No unicode characters standing in for icons — except the middot (·) used as a separator in reassurance runs, which is typography, not iconography.
- **Logo:** none supplied. The wordmark is set in type — Plus Jakarta Sans 700/800, `-0.02em`, with a gold full stop (`Garaad.`). See `guidelines/brand-wordmark.card.html`. **Do not draw or approximate a logo**; if a real mark arrives, drop it into `assets/logo.svg` and replace the wordmark.

## Assets

No logo, icon set, photography or font binaries were supplied. Consequently there is no `assets/` directory: fonts load from Google Fonts (the exact families the brief names), icons are inlined outlines, and imagery is labelled duotone placeholders. Each of these is a flagged substitution — see the ask at the end of this file.

## Accessibility contract

Body text ≥ 4.5:1, large text ≥ 3:1. One `h1`, heading levels never skip, landmark elements throughout. Keyboard-operable end to end with a visible focus ring on everything. Focus trapped in the booking modal and returned to the trigger on close; each step announced via `aria-live="polite"`. Accordion uses `aria-expanded`/`aria-controls`. Currency and language switchers are real radio groups that announce their new value. Nothing flashes more than three times per second. Reduced motion removes the glow's animation entirely and the button still has to look premium standing still.

## What we still need from you

1. **Font files.** Both families load from Google Fonts. If you hold licensed `Plus Jakarta Sans` / `IBM Plex Sans Arabic` binaries, drop them in and we will swap the import for local `@font-face` rules.
2. **A logo.** Nothing was supplied, so the wordmark is plain type. We will not draw one.
3. **Photography.** Duotone placeholders stand in for every image.
4. **Somali and Arabic copy.** The RTL and expansion rules are built in; the strings are English only.

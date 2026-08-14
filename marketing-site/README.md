# Marketing site UI kit — Garaad

The public-facing landing page: what we do, the packages, and the free first lesson.
Composed entirely from this design system's components; the kit adds only layout.

## Files
- `index.html` — mounts the page. Loads `styles.css`, React 18 + Babel, `_ds_bundle.js`, then the JSX below.
- `site-data.js` — all copy and the price config keyed by currency (`window.GaraadSite`). In production this becomes `locales/{en,so,ar}.json` plus `config/pricing.ts`.
- `Header.jsx` — sticky header (compacts at 64px on scroll and fades in the compact glowing CTA), hero, trust bar.
- `Sections.jsx` — `Section`/`Heading` layout helpers, What we teach, How it works, Pricing, Meet the teachers, safeguarding (navy).
- `Content.jsx` — AI study buddy (violet, only here), the monthly report mock, placeholder testimonials, FAQ, closing CTA band, footer.
- `App.jsx` — page state: currency (persisted), locale, scroll state, booking modal.

## What is interactive
Currency switcher rewrites every price and persists to localStorage · language switcher · header compacts on scroll and swaps Sign in for the compact glowing CTA · FAQ accordion · every CTA opens the four-step booking flow, and a track card pre-selects its track.

## Deliberately not built
Real photography (warm navy/gold duotone placeholders, labelled) · real testimonials · a Somali or Arabic translation of the copy (the RTL rules are in the tokens and components, but the strings here are English) · any payment screen — by design, this flow never asks for money.

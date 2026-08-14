# somaliland-diaspora-learning-centre

Garaad — design system and marketing site for the Somali diaspora learning
centre, exported from the Garaad design system. Nothing here needs a build step:
every page is plain HTML that loads React from a CDN and the compiled
design-system bundle from disk.

## Layout

| Path | What it is |
|---|---|
| `design-system/` | The design system itself. `styles.css` is the single entry point; `tokens/` holds colour, type, space, elevation, motion and font tokens; `components/` holds the 15 components, each with its `.jsx`, `.d.ts` prop contract and `.prompt.md` usage note; `guidelines/` holds the foundation specimen cards. |
| `design-system/_ds_bundle.js` | Compiled bundle exposing every component under the `GaraadDesignSystem_b60642` global. Load this and `styles.css` and you have the whole system. |
| `design-system/SKILL.md` | The written brand and usage guide: voice, colour discipline, the glow spec, motion, accessibility contract, locked pricing facts. Read this before designing a new page. |
| `landing-page/` | The starting-point landing page template. Open `LandingPage.dc.html` directly in a browser. |
| `marketing-site/` | The full click-through marketing site — hero, tracks, dhaqan band, pricing with currency switcher, teachers, safeguarding, FAQ, booking modal. Open `index.html`. |
| `docs/` | The UI design prompt sets the site was built from. |

## Using it in a page

```html
<link rel="stylesheet" href="design-system/styles.css">
<script src="design-system/_ds_bundle.js"></script>
```

Components are then available as `GaraadDesignSystem_b60642.Button`,
`.FreeLessonCTA`, `.PricingCard`, and so on. Each component folder's
`.prompt.md` documents its props and variants.

## Still outstanding

No logo, font binaries or photography were supplied with the brief. Fonts load
from Google Fonts, icons are inlined Lucide-derived outlines, and every image is
a labelled duotone placeholder. Somali and Arabic copy is not written yet — the
RTL and string-expansion rules are built in, but the strings are English only.

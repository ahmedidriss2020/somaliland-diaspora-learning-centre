The glowing "Book your free first lesson" CTA. Use it for the free lesson and nothing else — the glow is what makes the free lesson unmistakable, and a second glowing thing spends that.

```jsx
<FreeLessonCTA variant="hero" onClick={openBooking} />
<FreeLessonCTA variant="header" label="Book free lesson" />
<FreeLessonCTA variant="dark" caption="No card needed · 1 full hour · With a verified teacher" />
<FreeLessonCTA variant="inline" label="the free first lesson" />
```

Variants: `hero` (pill + caption), `header` (40px, appears once the hero CTA scrolls out of view), `sticky` (full-width mobile bar), `dark` (navy sections — bloom .3), `inline` (no glow, gold underline).

States: hover lifts 2px and brightens the bloom 25%; active presses to scale .99; focus-visible pauses the ring and shows a 3px gold ring at 3px offset; `loading`; `success`. Under `prefers-reduced-motion: reduce` the rotation, pulse and shimmer are removed and a static gold-to-blue ring remains — that still-version is the design of record.

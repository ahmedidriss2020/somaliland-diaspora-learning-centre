Outline icon wrapper for the Garaad glyph set — use it anywhere an icon is needed so stroke weight and RTL mirroring stay consistent.

```jsx
<Icon name="user-check" size={20} color="var(--accent-teacher)" />
<Icon name="arrow-right" size={18} mirrorRtl />
```

Notes: icons are Lucide-derived outlines at stroke 2 (see readme ICONOGRAPHY — flagged substitution, no icon set shipped with the brief). Set `mirrorRtl` on directional glyphs (`arrow-right`, `chevron-down` in inline flow) and never on `check`. Icon-only buttons must carry their own `aria-label`; the svg is `aria-hidden`.

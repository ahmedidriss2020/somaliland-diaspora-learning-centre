# Motif

Four Somali cultural marks: `camel`, `caravan`, `aqal`, `weave`.

## When to use

- **`caravan`** — a wide, quiet baseline mark. Sits along the bottom edge of a
  band at 6–10% opacity. Use once per page, at most twice.
- **`aqal`** — the Somali nomadic dome hut. Works at 48–96px beside a heading
  about home, dhaqan or belonging. `lineColor` must match the surface behind it
  so the ribs and doorway read as cut-outs.
- **`camel`** — a single silhouette for small spots: a card corner, a divider,
  the footer wordmark.
- **`weave`** — the alool mat pattern, as a 6–14px full-width rule. Use instead
  of a hairline border where a section change should feel warm.

## Rules

- Decorative, never informational. Every motif is `aria-hidden`.
- Behind text: opacity ≤ .12. Beside text: up to 1 in gold or navy.
- One motif family per section. A camel and an aqal in the same band competes.
- Never animate them. Never rotate a camel. Never tint one with a gradient.
- Not a logo. The wordmark is the logo.

## Examples

```jsx
<Motif name="caravan" height={92} color="var(--navy-deep)" opacity={0.07} />
<Motif name="aqal" height={72} color="var(--gold-star)" lineColor="var(--surface-page)" />
<Motif name="weave" height={10} color="var(--gold-star)" opacity={0.5} />
```

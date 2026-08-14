The FAQ accordion.

```jsx
<Accordion defaultOpen={0} items={[
  { q: 'Is the first lesson really free?', a: 'Yes — a full hour with a verified teacher…' },
]} />
```

Notes: real `<button>` with `aria-expanded` / `aria-controls`, chevron rotates 180°, 200ms height transition disabled under reduced motion. Answers are written plainly in the first person plural — no marketing language.

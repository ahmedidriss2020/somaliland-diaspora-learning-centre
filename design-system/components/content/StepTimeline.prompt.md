Steps on a connecting line — "How it works" (numbered, four steps) and "How we verify teachers" (icons, five steps, on navy).

```jsx
<StepTimeline emphasisIndex={2} steps={[
  { title: 'Tell us about your child', body: 'Two minutes.' }, …
]} />
<StepTimeline tone="dark" numbered={false} orientation="horizontal" steps={vettingSteps} />
```

Notes: `emphasisIndex={2}` marks the free first lesson in gold and enlarges its card — the only step that gets emphasis. Switch to `orientation="vertical"` below 768px. Markers are teal by default because vetting belongs to teachers.

The general-purpose action button — everything except the free-lesson call to action, which is `FreeLessonCTA`.

```jsx
<Button variant="primary" size="lg" label="See packages and pricing" iconEnd="arrow-right" />
<Button variant="outline" onDark label="Read our full safeguarding standard" />
<Button variant="text" label="How we pay teachers" />
```

Notes: five variants (primary / secondary / outline / ghost / text) × three sizes. `onDark` for navy sections. Gold is never a button fill — it belongs to achievement and the free lesson. `loading` swaps the label to "One moment…" and shows a spinner without changing width intent.

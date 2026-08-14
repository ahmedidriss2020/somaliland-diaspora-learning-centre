Pill-shaped label — static for metadata, selectable for the booking flow's age bands, tracks and levels.

```jsx
<Chip tone="blue" label="Somali" />
<Chip selectable selected={age === '8-10'} onChange={() => setAge('8-10')} label="8–10" />
```

Notes: tone carries meaning — teal for anything teacher, gold for achievement or a newly joined teacher, violet only for the AI study buddy. Selectable chips are real buttons with `role="checkbox"`; never use a chip where a link is meant.

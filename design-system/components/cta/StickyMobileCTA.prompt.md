Mobile-only sticky booking bar. Mount once at page level, below 768px.

```jsx
<StickyMobileCTA visible={scrollingDown} onClick={openBooking} />
```

Notes: `padding-block-end` includes `env(safe-area-inset-bottom)`. The glow is softened here so it does not smear over content scrolling behind it. Hide it while the booking modal is open.

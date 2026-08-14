Every glowing CTA on the site opens this. A focused modal on desktop, a full-screen sheet on mobile.

```jsx
<BookingModal open={booking} initialTrack="Somali" onClose={() => setBooking(false)} onSubmit={send} />
```

Steps: 1 about your child (name, age band, tracks, level, note) · 2 when suits you (time zone + week blocks, preference not a slot) · 3 your details (parent name, email, optional WhatsApp, unticked consent) · 4 confirmation with the drawn teal checkmark and "Waan ku faraxsanahay!".

Notes: progress restores on reopen from localStorage. `aria-modal`, focus moved to the panel and returned to the trigger on close, Escape closes. Each step is announced through an `aria-live="polite"` region. The whole flow should be completable in under 90 seconds on a phone. Never add a payment step.

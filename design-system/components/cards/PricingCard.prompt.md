A package card. Three per row on desktop, stacked 2·1·3 on mobile so the popular one leads.

```jsx
<PricingCard name="Two children" featured price="$70" unit="per child, per month"
  priceNote="$140 a month for two children — each child gets their own 2 × 1-hour sessions a week."
  savings="Save $10 per child, every month." features={[...]} onCta={openBooking} />
```

Notes: the featured card uses the glowing CTA, the others a secondary button — the glow still points at the free lesson. The custom-quote card shows "Custom pricing" and a "Get your family price" CTA that opens a form, never a payment screen. No countdown timers, no strikethrough anchor prices, no fake scarcity. The featured card must not trap focus order.

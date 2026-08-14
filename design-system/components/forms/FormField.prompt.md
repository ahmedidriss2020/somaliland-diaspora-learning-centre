Every input in the booking flow and the family-price form.

```jsx
<FormField label="Child's first name" name="child" hint="First name is all we need."
  value={v} onChange={e => set(e.target.value)} autoComplete="given-name" />
<FormField label="Email" name="email" type="email" error="We need an email so we can send the lesson link." />
```

Notes: validate on blur, never on keypress. Errors are text in coral with `role="alert"` — never colour alone. Pass `children` to wrap a chip group or the week grid in the same label/hint/error frame. Use correct `autoComplete` and `inputMode` (numeric keypad for phone).

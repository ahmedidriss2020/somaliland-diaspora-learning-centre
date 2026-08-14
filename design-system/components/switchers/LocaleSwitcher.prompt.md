Language switcher. It switches direction as well as words.

```jsx
<LocaleSwitcher value={locale} onChange={setLocale} applyToDocument />
```

Notes: 48×44px targets — this control is frequently mis-tapped. Arabic renders in `--font-arabic` and sets `dir="rtl"`; Somali is Latin script but ~40% longer than English, so never fix the width of anything holding a Somali string. Never translate the brand name.

Currency segmented control. Sits above the pricing cards and repeats in the header and footer.

```jsx
<CurrencySwitcher value={currency} onChange={setCurrency} />
```

Notes: a real `radiogroup` with `aria-checked` and `aria-label="Show prices in …"`. Switching cross-fades the price digits over 150ms — never count up, and never reflow: reserve the price line's width so there is no layout shift. Never show two currencies in one price line. Persist to localStorage.

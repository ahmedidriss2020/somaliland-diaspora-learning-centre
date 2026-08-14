/** Segmented $ USD · € EUR · £ GBP control. Auto-select from locale, always overridable, persist the choice. */
export interface CurrencySwitcherProps {
  value?: 'USD' | 'EUR' | 'GBP';
  onChange?: (code: 'USD' | 'EUR' | 'GBP') => void;
  /** sm = 36px (header) · md = 44px (pricing section). */
  size?: 'sm' | 'md';
  onDark?: boolean;
}
export function CurrencySwitcher(props: CurrencySwitcherProps): JSX.Element;

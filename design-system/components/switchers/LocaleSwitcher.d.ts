/** EN / SO / AR language switcher. Choosing Arabic sets dir="rtl" on the document and mirrors the whole layout. */
export interface LocaleSwitcherProps {
  value?: 'en' | 'so' | 'ar';
  onChange?: (code: 'en' | 'so' | 'ar') => void;
  onDark?: boolean;
  /** Also write lang + dir onto <html>. True on real pages. */
  applyToDocument?: boolean;
}
export function LocaleSwitcher(props: LocaleSwitcherProps): JSX.Element;

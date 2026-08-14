import React from 'react';

const LOCALES = [
  { code: 'en', short: 'EN', name: 'English', dir: 'ltr' },
  { code: 'so', short: 'SO', name: 'Somali', dir: 'ltr' },
  { code: 'ar', short: 'AR', name: 'العربية', dir: 'rtl' },
];

export function LocaleSwitcher({ value = 'en', onChange, onDark = false, applyToDocument = false, ...rest }) {
  const handle = (l) => {
    if (applyToDocument && typeof document !== 'undefined') {
      document.documentElement.lang = l.code;
      document.documentElement.dir = l.dir;
    }
    if (onChange) onChange(l.code);
  };
  return (
    <div role="radiogroup" aria-label="Language" style={{ display: 'inline-flex', gap: 2 }} {...rest}>
      {LOCALES.map((l) => {
        const active = l.code === value;
        return (
          <button key={l.code} type="button" role="radio" aria-checked={active} lang={l.code}
            aria-label={`Switch language to ${l.name}`} onClick={() => handle(l)}
            style={{
              minWidth: 48, minHeight: 44, padding: '10px 12px', border: 'none', cursor: 'pointer',
              borderRadius: 'var(--radius-sm)', background: active ? (onDark ? 'rgba(246,249,252,.12)' : 'var(--blue-50)') : 'transparent',
              color: active ? (onDark ? 'var(--paper-100)' : 'var(--blue-800)') : (onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'),
              fontFamily: l.code === 'ar' ? 'var(--font-arabic)' : 'var(--font-core)',
              fontSize: 14, fontWeight: 'var(--weight-semibold)', letterSpacing: '.02em',
              transition: 'background-color var(--dur-base) var(--ease-out)',
            }}>{l.short}</button>
        );
      })}
    </div>
  );
}

import React from 'react';

const CURRENCIES = [
  { code: 'USD', symbol: '$', label: 'US dollars' },
  { code: 'EUR', symbol: '€', label: 'Euros' },
  { code: 'GBP', symbol: '£', label: 'Pounds sterling' },
];

export function CurrencySwitcher({ value = 'USD', onChange, size = 'md', onDark = false, ...rest }) {
  const pad = size === 'sm' ? '8px 12px' : '12px 18px';
  return (
    <div role="radiogroup" aria-label="Currency" style={{
      display: 'inline-flex', gap: 4, padding: 4, borderRadius: 'var(--radius-pill)',
      background: onDark ? 'rgba(246,249,252,.08)' : 'var(--paper-200)',
      border: `1px solid ${onDark ? 'var(--border-on-dark)' : 'var(--border-hairline)'}`,
    }} {...rest}>
      {CURRENCIES.map((c) => {
        const active = c.code === value;
        return (
          <button key={c.code} type="button" role="radio" aria-checked={active}
            aria-label={`Show prices in ${c.label}`}
            onClick={() => onChange && onChange(c.code)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, minHeight: size === 'sm' ? 36 : 44,
              padding: pad, border: 'none', borderRadius: 'var(--radius-pill)', cursor: 'pointer',
              fontFamily: 'var(--font-core)', fontSize: size === 'sm' ? 14 : 15, fontWeight: 'var(--weight-semibold)',
              background: active ? (onDark ? 'var(--paper-100)' : 'var(--white)') : 'transparent',
              color: active ? 'var(--text-heading)' : (onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'),
              boxShadow: active ? '0 1px 2px rgba(8,42,85,.1)' : 'none',
              transition: 'background-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
            }}>
            <span aria-hidden="true" style={{ fontWeight: 'var(--weight-bold)' }}>{c.symbol}</span>
            <span>{c.code}</span>
          </button>
        );
      })}
    </div>
  );
}

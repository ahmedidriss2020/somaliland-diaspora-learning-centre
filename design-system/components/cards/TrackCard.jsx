import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

const ACCENTS = {
  blue: { tint: 'var(--blue-50)', fg: 'var(--blue-primary)', edge: 'rgba(30,107,214,.2)' },
  gold: { tint: 'var(--gold-50)', fg: 'var(--gold-700)', edge: 'rgba(239,165,27,.32)' },
};

export function TrackCard({ title, promise, bullets = [], ages, icon = 'book-open', accent = 'blue', ctaLabel, onCta, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const a = ACCENTS[accent] || ACCENTS.blue;
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', flexDirection: 'column', gap: 14, padding: 26,
      background: 'var(--surface-card)', borderRadius: 'var(--radius-card)',
      border: `1px solid ${accent === 'gold' ? a.edge : 'var(--border-hairline)'}`,
      boxShadow: hover ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
      transform: hover ? 'var(--lift-hover)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    }} {...rest}>
      <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-tile)', background: a.tint, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name={icon} size={24} color={a.fg} />
      </span>
      <h3 style={{ fontSize: 22 }}>{title}</h3>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink-700)' }}>{promise}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8 }}>
        {bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, lineHeight: 1.5, color: 'var(--ink-700)' }}>
            <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: a.fg, marginBlockStart: 8, flex: '0 0 auto' }} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {ages && <div className="g-caption" style={{ marginBlockStart: 2 }}>{ages}</div>}
      {ctaLabel && <div style={{ marginBlockStart: 'auto', paddingBlockStart: 6 }}><Button variant="text" label={ctaLabel} onClick={onCta} /></div>}
    </article>
  );
}

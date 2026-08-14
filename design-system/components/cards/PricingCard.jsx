import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';
import { FreeLessonCTA } from '../cta/FreeLessonCTA.jsx';

export function PricingCard({
  name, price, unit, priceNote, savings, features = [], ctaLabel = 'Start with a free lesson',
  featured = false, ribbon = 'Most popular', custom = false, customLine, onCta, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      position: 'relative', display: 'flex', flexDirection: 'column',
      background: 'var(--surface-card)', borderRadius: 'var(--radius-card)',
      border: featured ? '1.5px solid var(--teal-teacher)' : '1px solid var(--border-hairline)',
      boxShadow: hover ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
      transform: hover ? 'var(--lift-hover)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      padding: featured ? '32px 28px 28px' : '28px',
    }} {...rest}>
      {featured && (
        <span style={{
          position: 'absolute', insetBlockStart: -13, insetInlineStart: 28,
          background: 'var(--teal-teacher)', color: '#fff', borderRadius: 'var(--radius-pill)',
          padding: '5px 14px', fontSize: 12, fontWeight: 'var(--weight-bold)',
          letterSpacing: 'var(--tracking-pill)', textTransform: 'uppercase',
        }}>{ribbon}</span>
      )}
      <h3 style={{ fontSize: 22, marginBlockEnd: 12 }}>{name}</h3>

      <div style={{ minHeight: 62 }}>
        {custom ? (
          <div style={{ fontSize: 30, fontWeight: 'var(--weight-bold)', color: 'var(--text-heading)', letterSpacing: 'var(--tracking-tight)' }}>Custom pricing</div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
            <span key={price} style={{ fontSize: 44, lineHeight: 1, fontWeight: 'var(--weight-extrabold)', color: 'var(--text-heading)', letterSpacing: 'var(--tracking-tight)', animation: 'g-reveal var(--dur-fast) var(--ease-out)' }}>{price}</span>
            <span style={{ fontSize: 15, color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)' }}>{unit}</span>
          </div>
        )}
      </div>

      {(priceNote || customLine) && (
        <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBlockStart: 8, lineHeight: 1.5 }}>{custom ? customLine : priceNote}</p>
      )}

      {savings && (
        <span style={{
          alignSelf: 'flex-start', marginBlockStart: 12, background: 'var(--gold-50)',
          border: '1px solid rgba(239,165,27,.3)', color: '#7A5206', borderRadius: 'var(--radius-pill)',
          padding: '6px 12px', fontSize: 13, fontWeight: 'var(--weight-semibold)',
        }}>{savings}</span>
      )}

      <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 24px', display: 'grid', gap: 10 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5, color: 'var(--ink-700)' }}>
            <span style={{ marginBlockStart: 3 }}><Icon name="check" size={16} color="var(--teal-teacher)" strokeWidth={2.5} /></span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div style={{ marginBlockStart: 'auto' }}>
        {featured
          ? <FreeLessonCTA variant="sticky" fullWidth label={ctaLabel} onClick={onCta} />
          : <Button variant="secondary" size="md" fullWidth label={ctaLabel} iconEnd="arrow-right" onClick={onCta} />}
      </div>
    </article>
  );
}

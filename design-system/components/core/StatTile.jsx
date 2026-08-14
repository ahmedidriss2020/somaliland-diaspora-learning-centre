import React from 'react';

export function StatTile({ label, value, suffix, progress, tone = 'neutral', ...rest }) {
  const bar = tone === 'gold' ? 'var(--gold-star)' : tone === 'teal' ? 'var(--teal-teacher)' : 'var(--blue-primary)';
  return (
    <div style={{
      background: 'var(--surface-page)', border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-tile)', padding: '14px 16px', minWidth: 0,
    }} {...rest}>
      <div style={{ fontSize: 12, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', fontWeight: 'var(--weight-semibold)', color: 'var(--text-muted)' }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBlockStart: 6 }}>
        <span style={{ fontSize: 26, fontWeight: 'var(--weight-bold)', color: 'var(--text-heading)', letterSpacing: 'var(--tracking-tight)' }}>{value}</span>
        {suffix && <span style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: 'var(--weight-medium)' }}>{suffix}</span>}
      </div>
      {typeof progress === 'number' && (
        <div style={{ marginBlockStart: 10, height: 6, borderRadius: 999, background: 'var(--paper-200)', overflow: 'hidden' }}>
          <div style={{ width: `${Math.max(0, Math.min(100, progress))}%`, height: '100%', background: bar, borderRadius: 999 }} />
        </div>
      )}
    </div>
  );
}

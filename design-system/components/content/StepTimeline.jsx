import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function StepTimeline({ steps = [], orientation = 'horizontal', tone = 'light', emphasisIndex = -1, numbered = true, ...rest }) {
  const dark = tone === 'dark';
  const horizontal = orientation === 'horizontal';
  return (
    <ol style={{
      listStyle: 'none', margin: 0, padding: 0, display: 'grid', position: 'relative',
      gridTemplateColumns: horizontal ? `repeat(${steps.length}, minmax(0,1fr))` : '1fr',
      gap: horizontal ? 20 : 0,
    }} {...rest}>
      {steps.map((s, i) => {
        const emphasised = i === emphasisIndex;
        const markerBg = emphasised ? 'var(--gold-star)' : dark ? 'rgba(14,140,111,.16)' : 'var(--teal-50)';
        const markerFg = emphasised ? '#3D2903' : 'var(--teal-teacher)';
        const size = emphasised ? 48 : 40;
        return (
          <li key={i} style={{
            position: 'relative', display: 'flex',
            flexDirection: horizontal ? 'column' : 'row',
            gap: horizontal ? 14 : 16,
            paddingBlockEnd: horizontal ? 0 : 28,
            paddingInlineEnd: horizontal ? 8 : 0,
          }}>
            {/* connecting line */}
            {i < steps.length - 1 && (
              <span aria-hidden="true" style={horizontal ? {
                position: 'absolute', insetBlockStart: size / 2 - 1, insetInlineStart: size + 8, insetInlineEnd: -20,
                height: 2, background: dark ? 'var(--border-on-dark)' : 'var(--line-100)',
              } : {
                position: 'absolute', insetInlineStart: size / 2 - 1, insetBlockStart: size + 6, insetBlockEnd: 6,
                width: 2, background: dark ? 'var(--border-on-dark)' : 'var(--line-100)',
              }} />
            )}
            <span style={{
              width: size, height: size, borderRadius: '50%', background: markerBg, color: markerFg,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto',
              fontWeight: 'var(--weight-bold)', fontSize: emphasised ? 19 : 16, position: 'relative', zIndex: 1,
              boxShadow: emphasised ? '0 6px 18px rgba(239,165,27,.35)' : 'none',
            }}>
              {s.icon && !numbered ? <Icon name={s.icon} size={20} color={markerFg} /> : (numbered ? i + 1 : <Icon name={s.icon || 'check'} size={20} color={markerFg} />)}
            </span>
            <div style={{
              background: emphasised ? (dark ? 'rgba(239,165,27,.08)' : 'var(--gold-50)') : 'transparent',
              border: emphasised ? '1px solid rgba(239,165,27,.28)' : '1px solid transparent',
              borderRadius: emphasised ? 'var(--radius-card)' : 0,
              padding: emphasised ? '14px 16px' : 0, minWidth: 0,
            }}>
              <h3 style={{
                fontSize: emphasised ? 19 : 17, marginBlockEnd: 6,
                color: dark ? 'var(--text-on-dark)' : 'var(--text-heading)',
              }}>{s.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)' }}>{s.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

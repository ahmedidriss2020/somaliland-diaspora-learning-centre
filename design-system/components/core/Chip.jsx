import React from 'react';
import { Icon } from './Icon.jsx';

const TONES = {
  neutral: { bg: 'var(--paper-200)', fg: 'var(--ink-700)', border: 'var(--border-hairline)' },
  blue: { bg: 'var(--blue-50)', fg: 'var(--blue-800)', border: 'rgba(30,107,214,.16)' },
  teal: { bg: 'var(--teal-50)', fg: 'var(--teal-700)', border: 'rgba(14,140,111,.18)' },
  gold: { bg: 'var(--gold-50)', fg: '#7A5206', border: 'rgba(239,165,27,.28)' },
  violet: { bg: 'var(--violet-50)', fg: 'var(--violet-700)', border: 'rgba(108,75,209,.18)' },
  onDark: { bg: 'rgba(246,249,252,.1)', fg: 'var(--text-on-dark)', border: 'var(--border-on-dark)' },
};

export function Chip({ label, children, tone = 'neutral', icon, selectable = false, selected = false, onChange, size = 'md', ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  const pad = size === 'sm' ? '6px 12px' : '10px 16px';
  const style = {
    display: 'inline-flex', alignItems: 'center', gap: 6, padding: pad,
    minHeight: selectable ? 'var(--tap-min)' : 'auto',
    borderRadius: 'var(--radius-chip)', fontFamily: 'var(--font-core)',
    fontSize: size === 'sm' ? 13 : 15, fontWeight: 'var(--weight-semibold)', lineHeight: 1.2,
    background: selected ? 'var(--blue-primary)' : t.bg,
    color: selected ? 'var(--text-on-brand)' : t.fg,
    border: `1px solid ${selected ? 'transparent' : t.border}`,
    cursor: selectable ? 'pointer' : 'default',
    transition: 'background-color var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
  };
  const content = <>{icon && <Icon name={icon} size={15} />}<span>{label ?? children}</span></>;
  if (!selectable) return <span style={style} {...rest}>{content}</span>;
  return (
    <button type="button" role="checkbox" aria-checked={selected} onClick={() => onChange && onChange(!selected)} style={style} {...rest}>
      {content}
    </button>
  );
}

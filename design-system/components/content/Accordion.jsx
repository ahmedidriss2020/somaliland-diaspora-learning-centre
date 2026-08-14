import React from 'react';
import { Icon } from '../core/Icon.jsx';

export function Accordion({ items = [], defaultOpen = -1, singleOpen = true, ...rest }) {
  const [open, setOpen] = React.useState(() => (defaultOpen >= 0 ? [defaultOpen] : []));
  const toggle = (i) => setOpen((prev) => {
    const isOpen = prev.includes(i);
    if (singleOpen) return isOpen ? [] : [i];
    return isOpen ? prev.filter((x) => x !== i) : [...prev, i];
  });
  return (
    <div style={{ maxWidth: 760, marginInline: 'auto', display: 'grid', gap: 8 }} {...rest}>
      {items.map((it, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={i} style={{
            background: 'var(--surface-card)', border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-card)', overflow: 'hidden',
          }}>
            <h3 style={{ margin: 0 }}>
              <button type="button" aria-expanded={isOpen} aria-controls={`g-acc-panel-${i}`} id={`g-acc-btn-${i}`}
                onClick={() => toggle(i)} style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  padding: '18px 20px', minHeight: 'var(--tap-min)', background: 'transparent', border: 'none',
                  cursor: 'pointer', textAlign: 'start', fontFamily: 'var(--font-core)', fontSize: 18,
                  fontWeight: 'var(--weight-semibold)', color: 'var(--text-heading)', lineHeight: 1.4,
                }}>
                <span>{it.q}</span>
                <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform var(--dur-slow) var(--ease-out)', display: 'inline-flex' }}>
                  <Icon name="chevron-down" size={20} color="var(--blue-primary)" />
                </span>
              </button>
            </h3>
            <div id={`g-acc-panel-${i}`} role="region" aria-labelledby={`g-acc-btn-${i}`} hidden={!isOpen}
              style={{ padding: '0 20px 20px', fontSize: 16, lineHeight: 1.65, color: 'var(--ink-700)' }}>
              {it.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React from 'react';
import { Icon } from './Icon.jsx';

const S = { sm: { box: 18, icon: 12, font: 12 }, md: { box: 22, icon: 14, font: 13 }, lg: { box: 28, icon: 18, font: 14 } };

export function VerifiedBadge({ size = 'md', label = 'Verified', state = 'verified', showLabel = true, ...rest }) {
  const s = S[size] || S.md;
  const isNew = state === 'new';
  const fill = isNew ? 'var(--gold-star)' : 'var(--teal-teacher)';
  const text = isNew ? 'Fully vetted, newly joined' : label;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }} {...rest}>
      <span style={{
        width: s.box, height: s.box, borderRadius: '50%', background: fill,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto',
      }}>
        <Icon name={isNew ? 'star' : 'check'} size={s.icon} color="#fff" strokeWidth={2.5} />
      </span>
      {showLabel && (
        <span className="g-label" style={{ color: isNew ? 'var(--gold-700)' : 'var(--teal-700)', fontSize: s.font, letterSpacing: 'var(--tracking-label)' }}>
          {text}
        </span>
      )}
      <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
        {isNew ? 'Newly joined, fully vetted teacher' : 'Verified teacher'}
      </span>
    </span>
  );
}

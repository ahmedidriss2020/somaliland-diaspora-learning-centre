import React from 'react';
import { Chip } from '../core/Chip.jsx';
import { VerifiedBadge } from '../core/VerifiedBadge.jsx';
import { Button } from '../core/Button.jsx';

export function TeacherCard({
  name, tracks = [], years, languages, timezone, quote, photoLabel = 'Placeholder — teacher photograph',
  state = 'verified', onBook, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const first = (name || '').split(' ').slice(-1)[0].replace('.', '');
  return (
    <article onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      display: 'flex', flexDirection: 'column', background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)', border: '1px solid var(--border-hairline)',
      boxShadow: hover ? 'var(--shadow-hover)' : 'var(--shadow-rest)',
      transform: hover ? 'var(--lift-hover)' : 'none', overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    }} {...rest}>
      <div style={{
        aspectRatio: '4 / 5', background: 'linear-gradient(150deg,#0C3A72 0%,#082A55 55%,#7A5206 100%)',
        display: 'flex', alignItems: 'flex-end', padding: 12,
      }}>
        <span style={{ fontSize: 11, letterSpacing: '.04em', textTransform: 'uppercase', color: 'rgba(246,249,252,.72)', background: 'rgba(6,29,59,.5)', borderRadius: 6, padding: '4px 8px' }}>{photoLabel}</span>
      </div>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <VerifiedBadge size="sm" state={state} />
        <h3 style={{ fontSize: 20 }}>{name}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {tracks.map((t) => <Chip key={t} size="sm" tone={t.toLowerCase().startsWith('qur') ? 'gold' : 'blue'} label={t} />)}
        </div>
        <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>
          {[years && `${years} teaching`, languages, timezone].filter(Boolean).join(' · ')}
        </div>
        {quote && (
          <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-700)', borderInlineStart: '2px solid var(--teal-100)', paddingInlineStart: 12 }}>
            “{quote}”
          </p>
        )}
        <div style={{ marginBlockStart: 4 }}>
          <Button variant="text" label={`Book a free lesson with ${first}`} onClick={onBook} />
        </div>
      </div>
    </article>
  );
}

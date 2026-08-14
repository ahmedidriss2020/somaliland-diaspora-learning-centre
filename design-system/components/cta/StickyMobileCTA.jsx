import React from 'react';
import { FreeLessonCTA } from './FreeLessonCTA.jsx';

export function StickyMobileCTA({ visible = true, label = 'Book your free first lesson', note = 'No card needed to book', onClick, ...rest }) {
  return (
    <div role="region" aria-label="Book a free lesson" style={{
      position: 'fixed', insetInline: 0, insetBlockEnd: 0, zIndex: 60,
      padding: `12px var(--gutter) calc(12px + env(safe-area-inset-bottom))`,
      background: 'rgba(246,249,252,.94)', backdropFilter: 'blur(12px)',
      borderBlockStart: '1px solid var(--border-hairline)',
      transform: visible ? 'none' : 'translateY(120%)',
      transition: 'transform var(--dur-slow) var(--ease-out)',
    }} {...rest}>
      <FreeLessonCTA variant="sticky" fullWidth label={label} onClick={onClick} />
      {note && <div style={{ textAlign: 'center', marginBlockStart: 8, fontSize: 13, color: 'var(--text-muted)' }}>{note}</div>}
    </div>
  );
}

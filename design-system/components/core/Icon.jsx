import React from 'react';

// Lucide-derived 24×24 outline paths (stroke 2, round caps) — see readme ICONOGRAPHY.
const PATHS = {
  check: ['M20 6 9 17l-5-5'],
  'arrow-right': ['M5 12h14', 'm12 5 7 7-7 7'],
  'chevron-down': ['m6 9 6 6 6-6'],
  x: ['M18 6 6 18', 'm6 6 12 12'],
  menu: ['M4 6h16', 'M4 12h16', 'M4 18h16'],
  clock: ['M12 6v6l4 2'],
  globe: ['M12 2a15 15 0 0 1 0 20', 'M12 2a15 15 0 0 0 0 20', 'M2 12h20'],
  'user-check': ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'm16 11 2 2 4-4'],
  users: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
  'file-check': ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z', 'M14 2v5h5', 'm9 15 2 2 4-4'],
  eye: ['M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z'],
  heart: ['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'],
  'book-open': ['M12 7v14', 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'],
  'message-circle': ['M7.9 20A9 9 0 1 0 4 16.1L2 22Z'],
  calendar: ['M8 2v4', 'M16 2v4', 'M3 10h18'],
  sparkles: ['m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z'],
  star: ['m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z'],
  'file-text': ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z', 'M14 2v5h5', 'M9 13h6', 'M9 17h4'],
};
const CIRCLES = { clock: [12, 12, 10], globe: [12, 12, 10], eye: [12, 12, 3], 'user-check': [9, 7, 4], users: [9, 7, 4] };
const RECTS = { calendar: [3, 4, 18, 18, 2] };

export function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 2, mirrorRtl = false, style, ...rest }) {
  const paths = PATHS[name] || [];
  const c = CIRCLES[name];
  const r = RECTS[name];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"
      className={mirrorRtl ? 'g-mirror' : undefined} style={{ flex: '0 0 auto', display: 'block', ...style }} {...rest}>
      {r && <rect x={r[0]} y={r[1]} width={r[2]} height={r[3]} rx={r[4]} />}
      {c && <circle cx={c[0]} cy={c[1]} r={c[2]} />}
      {paths.map((d, i) => <path key={i} d={d} />)}
    </svg>
  );
}

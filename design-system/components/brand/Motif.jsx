import React from 'react';

// Somali cultural motifs. Flat single-colour silhouettes, deliberately graphic
// rather than illustrative — they sit behind or beside content at low opacity,
// never as the subject of a section. See readme MOTIFS.

const CAMEL = [
  'M42 44h50c9 0 15 5 15 12s-6 12-15 12H42c-9 0-15-5-15-12s6-12 15-12Z',
  'M46 48C44 24 58 12 70 13s20 15 20 35Z',
  'M32 66 48 50 30 19 17 28Z',
  'M30 17C22 12 9 16 2 24l6 8c9-1 19-5 24-11Z',
  'M28 16c1-6 4-9 8-10-1 5-2 8-4 11Z',
  'M42 64h7l-4 42h-5z',
  'M53 64h6l-2 42h-5z',
  'M82 64h6l2 42h-5z',
  'M92 64h7l4 42h-5z',
  'M104 52c7 4 9 10 7 17l-4-2c2-5 0-9-5-11z',
];
const CAMEL_BOX = [124, 110];

const AQAL_DOME = 'M4 88C4 26 116 26 116 88Z';
const AQAL_RIBS = [
  'M22 88C24 52 38 30 60 28',
  'M40 88C42 58 50 34 60 28',
  'M98 88C96 52 82 30 60 28',
  'M80 88C78 58 70 34 60 28',
  'M9 66C28 55 92 55 111 66',
  'M14 48C32 39 88 39 106 48',
];
const AQAL_DOOR = 'M47 88V71c0-8 6-13 13-13s13 5 13 13v17Z';
const AQAL_BOX = [120, 96];

function Camel() {
  return <g>{CAMEL.map((d, i) => <path key={i} d={d} />)}</g>;
}

export function Motif({ name = 'camel', height = 72, color = 'currentColor', lineColor = 'rgba(255,255,255,.34)', opacity = 1, flip = false, style, ...rest }) {
  const common = { fill: color, 'aria-hidden': 'true', focusable: 'false', style: { display: 'block', opacity, transform: flip ? 'scaleX(-1)' : undefined, ...style }, ...rest };

  if (name === 'aqal') {
    const [w, h] = AQAL_BOX;
    return (
      <svg viewBox={`0 0 ${w} ${h}`} height={height} width={(height * w) / h} {...common}>
        <path d={AQAL_DOME} />
        <path d={AQAL_DOOR} fill={lineColor} />
        <g fill="none" stroke={lineColor} strokeWidth="2.4" strokeLinecap="round">
          {AQAL_RIBS.map((d, i) => <path key={i} d={d} />)}
        </g>
      </svg>
    );
  }

  if (name === 'caravan') {
    // Three camels walking, front to back, on one baseline.
    const [w, h] = CAMEL_BOX;
    const scales = [1, 0.76, 0.58];
    const gaps = [0, 126, 226];
    const totalW = 306;
    return (
      <svg viewBox={`0 0 ${totalW} ${h}`} height={height} width={(height * totalW) / h} {...common}>
        {scales.map((s, i) => (
          <g key={i} transform={`translate(${gaps[i]} ${h - h * s}) scale(${s})`} opacity={1 - i * 0.22}>
            <Camel />
          </g>
        ))}
      </svg>
    );
  }

  if (name === 'weave') {
    // Tileable alool-mat band: chevron pairs with a diamond between them.
    const id = React.useId().replace(/[^a-zA-Z0-9]/g, '');
    return (
      <svg width="100%" height={height} preserveAspectRatio="none" viewBox="0 0 48 16" {...common}>
        <defs>
          <pattern id={`w${id}`} width="48" height="16" patternUnits="userSpaceOnUse">
            <path d="M0 13 8 3l8 10-2.6 0L8 7.4 2.6 13Z" />
            <path d="M32 13 40 3l8 10-2.6 0L40 7.4 34.6 13Z" />
            <path d="M24 3l6 6-6 6-6-6Z" opacity=".55" />
          </pattern>
        </defs>
        <rect width="48" height="16" fill={`url(#w${id})`} />
      </svg>
    );
  }

  const [w, h] = CAMEL_BOX;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} height={height} width={(height * w) / h} {...common}>
      <Camel />
    </svg>
  );
}

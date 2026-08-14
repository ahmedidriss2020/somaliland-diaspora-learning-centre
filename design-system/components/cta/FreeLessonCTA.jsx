import React from 'react';
import { Icon } from '../core/Icon.jsx';

const SIZE = {
  hero: { font: 18, padding: '18px 36px', minHeight: 'var(--cta-min-height)', radius: 'var(--radius-cta)' },
  dark: { font: 18, padding: '18px 36px', minHeight: 'var(--cta-min-height)', radius: 'var(--radius-cta)' },
  header: { font: 15, padding: '0 18px', minHeight: 40, radius: 10 },
  sticky: { font: 17, padding: '16px 28px', minHeight: 'var(--cta-min-height)', radius: 'var(--radius-cta)' },
};

export function FreeLessonCTA({
  variant = 'hero', label = 'Book your free first lesson',
  pillText = 'FIRST LESSON FREE',
  caption = '1 full hour · With a verified teacher · No card needed to book',
  loading = false, success = false, fullWidth = false, onClick, href, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const [focus, setFocus] = React.useState(false);

  if (variant === 'inline') {
    const Tag = href ? 'a' : 'button';
    return (
      <Tag href={href} type={href ? undefined : 'button'} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
        style={{
          background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer',
          color: 'var(--text-body)', fontWeight: 'var(--weight-semibold)',
          textDecoration: 'underline', textDecorationColor: 'var(--gold-star)',
          textDecorationThickness: hover ? '3px' : '2px', textUnderlineOffset: '4px',
          transition: 'text-decoration-thickness var(--dur-base) var(--ease-out)',
        }} {...rest}>{label}</Tag>
    );
  }

  const s = SIZE[variant] || SIZE.hero;
  const isDark = variant === 'dark';
  const compact = variant === 'header';
  const showPill = variant === 'hero';
  const showCaption = variant === 'hero' || variant === 'dark';
  const bloomOpacity = isDark ? 'var(--cta-aurora-opacity-dark)' : 'var(--cta-aurora-opacity)';
  const shimmer = !compact && !loading && !success;

  const face = {
    position: 'relative', zIndex: 2, display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : 'auto',
    alignItems: 'center', justifyContent: 'center', gap: 10, overflow: 'hidden',
    fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-semibold)', fontSize: s.font, lineHeight: 1.2,
    color: '#fff', padding: s.padding, minHeight: s.minHeight, minWidth: compact ? 0 : 220,
    border: 'none', borderRadius: s.radius, cursor: loading ? 'progress' : 'pointer',
    background: success ? 'var(--teal-teacher)' : 'var(--cta-face)',
    boxShadow: `var(--cta-inner-highlight),${compact ? '0 2px 10px rgba(30,107,214,.3)' : 'var(--cta-bloom)'}`,
    transform: press ? 'translateY(0) scale(.99)' : hover && !loading ? 'translateY(-2px)' : 'none',
    transition: 'transform var(--dur-base) var(--ease-out), background-color var(--dur-slower) var(--ease-out)',
    willChange: 'transform',
  };

  const inner = (
    <>
      {shimmer && (
        <span aria-hidden="true" className="g-cta-shimmer" style={{
          position: 'absolute', insetBlock: 0, insetInlineStart: 0, width: '20%',
          background: 'var(--cta-shimmer)', pointerEvents: 'none',
          animation: `g-cta-shimmer var(--shimmer-every) var(--ease-out) infinite`,
        }} />
      )}
      <span style={{ position: 'relative' }}>{loading ? 'Finding a time…' : success ? 'Lesson booked' : label}</span>
      <span style={{ position: 'relative', display: 'inline-flex', transform: hover && !loading ? 'translateX(3px)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }}>
        {loading ? (
          <span aria-hidden="true" style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid rgba(255,255,255,.9)', borderTopColor: 'transparent', animation: 'g-spin 700ms linear infinite' }} />
        ) : success ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" strokeDasharray="32" style={{ animation: 'g-check-draw var(--dur-check) var(--ease-out) both' }} />
          </svg>
        ) : (
          <Icon name="arrow-right" size={compact ? 16 : 18} mirrorRtl />
        )}
      </span>
    </>
  );

  const Tag = href && !loading ? 'a' : 'button';
  const button = (
    <span style={{ position: 'relative', display: fullWidth ? 'block' : 'inline-block', padding: 2, borderRadius: `calc(${typeof s.radius === 'number' ? s.radius + 'px' : s.radius} + 2px)`, isolation: 'isolate' }}>
      {/* 2. rotating conic ring — jewellery, not a lightshow. Pauses on focus. */}
      {!compact && (
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', overflow: 'hidden', opacity: isDark ? 1 : .9 }}>
          <span className="g-cta-ring" style={{
            position: 'absolute', insetInlineStart: '-100%', insetBlockStart: '-150%', width: '300%', height: '400%',
            background: 'var(--cta-ring)', animation: 'g-spin var(--dur-ring) linear infinite',
            animationPlayState: focus ? 'paused' : 'running', willChange: 'transform',
          }} />
        </span>
      )}
      {/* 1. aurora bloom */}
      <span aria-hidden="true" style={{
        position: 'absolute', insetInlineStart: '-30%', insetBlockStart: '-60%', width: '160%', height: '220%',
        background: 'var(--cta-aurora)', filter: 'blur(var(--cta-aurora-blur))',
        opacity: hover ? `calc(${bloomOpacity} * 1.25)` : loading ? `calc(${bloomOpacity} * .4)` : press ? `calc(${bloomOpacity} * .7)` : bloomOpacity,
        transition: 'opacity var(--dur-base) var(--ease-out)', pointerEvents: 'none', zIndex: 0,
      }} />
      {/* 4. idle pulse ring (scaled shadow on its own layer) */}
      {!compact && !loading && !success && (
        <span aria-hidden="true" className="g-cta-pulse" style={{
          position: 'absolute', inset: 2, borderRadius: 'inherit', zIndex: 1,
          animation: `g-cta-pulse calc(var(--dur-pulse) + var(--pulse-gap)) var(--ease-out) infinite`,
        }} />
      )}
      <Tag href={href} type={href ? undefined : 'button'} disabled={Tag === 'button' ? loading : undefined}
        aria-busy={loading || undefined} onClick={onClick}
        onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
        onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={face} {...rest}>{inner}</Tag>
    </span>
  );

  if (compact) return button;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: fullWidth ? 'stretch' : 'flex-start', gap: 10, textAlign: fullWidth ? 'center' : 'start' }}>
      {showPill && (
        <span style={{
          alignSelf: fullWidth ? 'center' : 'flex-start', display: 'inline-block',
          background: isDark ? 'rgba(239,165,27,.18)' : 'var(--gold-50)',
          color: isDark ? 'var(--gold-star)' : '#7A5206',
          border: `1px solid ${isDark ? 'rgba(239,165,27,.35)' : 'rgba(239,165,27,.3)'}`,
          borderRadius: 'var(--radius-pill)', padding: '5px 12px',
          fontSize: 12, fontWeight: 'var(--weight-bold)', letterSpacing: 'var(--tracking-pill)', textTransform: 'uppercase',
        }}>{pillText}</span>
      )}
      {button}
      {showCaption && caption && (
        <span style={{ fontSize: 13.5, color: isDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)' }}>{caption}</span>
      )}
    </div>
  );
}

import React from 'react';
import { Icon } from './Icon.jsx';

const SIZES = {
  sm: { padding: '8px 14px', fontSize: 14, minHeight: 40, gap: 6 },
  md: { padding: '12px 20px', fontSize: 16, minHeight: 48, gap: 8 },
  lg: { padding: '16px 28px', fontSize: 17, minHeight: 56, gap: 10 },
};

function faceFor(variant, onDark) {
  switch (variant) {
    case 'primary':
      return { background: 'var(--action-primary)', color: 'var(--text-on-brand)', border: '1px solid transparent', boxShadow: 'var(--cta-inner-highlight)' };
    case 'secondary':
      return onDark
        ? { background: 'rgba(246,249,252,.1)', color: 'var(--text-on-dark)', border: '1px solid var(--border-on-dark)' }
        : { background: 'var(--action-secondary-bg)', color: 'var(--text-heading)', border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-rest)' };
    case 'outline':
      return { background: 'transparent', color: onDark ? 'var(--text-on-dark)' : 'var(--text-link)', border: `1.5px solid ${onDark ? 'var(--border-on-dark)' : 'var(--blue-200)'}` };
    case 'ghost':
      return { background: 'transparent', color: onDark ? 'var(--text-on-dark)' : 'var(--text-link)', border: '1px solid transparent' };
    case 'text':
      return { background: 'transparent', color: onDark ? 'var(--text-on-dark)' : 'var(--text-link)', border: 'none', padding: 0, minHeight: 0, textDecoration: 'underline', textDecorationColor: 'var(--gold-star)', textDecorationThickness: '2px', textUnderlineOffset: '4px' };
    default:
      return {};
  }
}

export function Button({
  variant = 'primary', size = 'md', label, children, iconStart, iconEnd, href,
  onDark = false, fullWidth = false, loading = false, disabled = false, onClick, type = 'button', ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const face = faceFor(variant, onDark);
  const isText = variant === 'text';
  const style = {
    display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : 'auto',
    alignItems: 'center', justifyContent: 'center', gap: s.gap,
    fontFamily: 'var(--font-core)', fontWeight: 'var(--weight-semibold)', fontSize: s.fontSize,
    lineHeight: 1.2, padding: s.padding, minHeight: s.minHeight,
    borderRadius: isText ? 0 : 'var(--radius-button)', cursor: disabled || loading ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.55 : 1,
    transition: `transform var(--dur-base) var(--ease-out), background-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)`,
    transform: hover && !disabled && !loading && !isText ? 'var(--lift-hover)' : 'none',
    ...face,
  };
  if (hover && !disabled && !loading) {
    if (variant === 'primary') style.background = 'var(--action-primary-hover)';
    if (variant === 'secondary' && !onDark) style.boxShadow = 'var(--shadow-hover)';
    if (variant === 'ghost' || variant === 'outline') style.background = onDark ? 'rgba(246,249,252,.08)' : 'var(--action-ghost-hover)';
    if (isText) style.textDecorationThickness = '3px';
  }
  const content = (
    <>
      {loading ? <Spinner /> : iconStart ? <Icon name={iconStart} size={size === 'sm' ? 16 : 18} /> : null}
      <span>{loading ? 'One moment…' : (label ?? children)}</span>
      {!loading && iconEnd ? <Icon name={iconEnd} size={size === 'sm' ? 16 : 18} mirrorRtl /> : null}
    </>
  );
  const handlers = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) };
  if (href && !disabled) return <a href={href} style={style} {...handlers} {...rest}>{content}</a>;
  return (
    <button type={type} style={style} disabled={disabled || loading} aria-busy={loading || undefined} onClick={onClick} {...handlers} {...rest}>
      {content}
    </button>
  );
}

function Spinner() {
  return (
    <span aria-hidden="true" style={{
      width: 16, height: 16, borderRadius: '50%', border: '2px solid currentColor',
      borderTopColor: 'transparent', animation: 'g-spin 700ms linear infinite', display: 'inline-block',
    }} />
  );
}

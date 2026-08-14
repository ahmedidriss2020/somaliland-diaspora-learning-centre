import React from 'react';

export function FormField({
  label, name, type = 'text', value, onChange, hint, error, optional = false,
  placeholder, autoComplete, inputMode, maxLength, rows, children, ...rest
}) {
  const id = `g-f-${name}`;
  const describedBy = [hint && `${id}-hint`, error && `${id}-err`].filter(Boolean).join(' ') || undefined;
  const fieldStyle = {
    width: '100%', minHeight: 'var(--tap-min)', padding: '12px 14px',
    fontFamily: 'var(--font-core)', fontSize: 16, color: 'var(--text-body)',
    background: 'var(--surface-card)', borderRadius: 'var(--radius-input)',
    border: `1px solid ${error ? 'var(--status-error)' : 'var(--border-strong)'}`,
    outlineOffset: 3,
  };
  return (
    <div style={{ display: 'grid', gap: 6 }} {...rest}>
      <label htmlFor={id} style={{ fontSize: 14, fontWeight: 'var(--weight-semibold)', color: 'var(--text-heading)' }}>
        {label}
        {optional && <span style={{ fontWeight: 'var(--weight-regular)', color: 'var(--text-muted)' }}> — optional</span>}
      </label>
      {hint && <div id={`${id}-hint`} className="g-caption">{hint}</div>}
      {children ? children : type === 'textarea' ? (
        <textarea id={id} name={name} value={value} onChange={onChange} rows={rows || 3} maxLength={maxLength}
          placeholder={placeholder} aria-describedby={describedBy} aria-invalid={!!error || undefined} style={{ ...fieldStyle, resize: 'vertical', lineHeight: 1.5 }} />
      ) : (
        <input id={id} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder}
          autoComplete={autoComplete} inputMode={inputMode} maxLength={maxLength}
          aria-describedby={describedBy} aria-invalid={!!error || undefined} style={fieldStyle} />
      )}
      {error && (
        <div id={`${id}-err`} role="alert" style={{ display: 'flex', gap: 6, alignItems: 'flex-start', fontSize: 14, color: 'var(--status-error)' }}>
          <span aria-hidden="true" style={{ fontWeight: 'var(--weight-bold)' }}>!</span>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

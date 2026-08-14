import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Chip } from '../core/Chip.jsx';
import { Button } from '../core/Button.jsx';
import { FormField } from '../forms/FormField.jsx';

const AGES = ['5–7', '8–10', '11–13', '14–15'];
const TRACKS = ['Somali', 'Arabic', "Qur'aan"];
const LEVELS = ['Complete beginner', 'Understands some', 'Speaks a little', 'Confident'];
const BLOCKS = ['Weekday mornings', 'Weekday afternoons', 'Weekday evenings', 'Weekend mornings', 'Weekend afternoons', 'Weekend evenings'];
const STORE_KEY = 'garaad.booking.draft';

const emptyDraft = { child: '', age: '', tracks: [], level: '', notes: '', tz: 'Europe/London', blocks: [], parent: '', email: '', whatsapp: '', consent: false };

export function BookingModal({ open = false, onClose, initialTrack, initialStep = 1, persist = true, onSubmit }) {
  const [step, setStep] = React.useState(initialStep);
  const [draft, setDraft] = React.useState(() => {
    let base = { ...emptyDraft };
    if (persist && typeof localStorage !== 'undefined') {
      try { const s = localStorage.getItem(STORE_KEY); if (s) base = { ...base, ...JSON.parse(s) }; } catch (e) { /* ignore */ }
    }
    if (initialTrack && !base.tracks.includes(initialTrack)) base.tracks = [...base.tracks, initialTrack];
    return base;
  });
  const panelRef = React.useRef(null);
  const set = (k, v) => setDraft((d) => {
    const next = { ...d, [k]: v };
    if (persist && typeof localStorage !== 'undefined') { try { localStorage.setItem(STORE_KEY, JSON.stringify(next)); } catch (e) { /* ignore */ } }
    return next;
  });
  const multi = (k, v) => set(k, draft[k].includes(v) ? draft[k].filter((x) => x !== v) : [...draft[k], v]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose && onClose(); };
    document.addEventListener('keydown', onKey);
    if (panelRef.current) panelRef.current.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;
  const total = 4;

  return (
    <div role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose && onClose(); }} style={{
      position: 'fixed', inset: 0, zIndex: 90, background: 'var(--overlay-scrim)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
      backdropFilter: 'blur(3px)',
    }}>
      <div ref={panelRef} role="dialog" aria-modal="true" aria-label="Book your free first lesson" tabIndex={-1} style={{
        width: 'min(560px, 100%)', maxHeight: '92vh', overflowY: 'auto', background: 'var(--surface-card)',
        borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-modal)', padding: 26,
        animation: 'g-reveal var(--dur-slower) var(--ease-out)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <span className="g-label" style={{ color: 'var(--text-muted)' }}>Step {step} of {total}</span>
          <button type="button" aria-label="Close" onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 8, borderRadius: 8, color: 'var(--text-muted)' }}>
            <Icon name="x" size={20} />
          </button>
        </div>
        <div aria-hidden="true" style={{ height: 4, borderRadius: 999, background: 'var(--paper-200)', margin: '12px 0 22px', overflow: 'hidden' }}>
          <div style={{ width: `${(step / total) * 100}%`, height: '100%', background: 'var(--blue-primary)', borderRadius: 999, transition: 'width var(--dur-slow) var(--ease-out)' }} />
        </div>

        <div aria-live="polite">
          {step === 1 && (
            <div style={{ display: 'grid', gap: 18 }}>
              <h2 style={{ fontSize: 26 }}>About your child</h2>
              <FormField label="Child's first name" name="child" hint="First name is all we need." value={draft.child} onChange={(e) => set('child', e.target.value)} autoComplete="off" />
              <FormField label="Age" name="age">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {AGES.map((a) => <Chip key={a} selectable selected={draft.age === a} onChange={() => set('age', a)} label={a} />)}
                </div>
              </FormField>
              <FormField label="What would they like to learn?" name="tracks" hint="Choose as many as you like.">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {TRACKS.map((t) => <Chip key={t} selectable selected={draft.tracks.includes(t)} onChange={() => multi('tracks', t)} label={t} />)}
                </div>
              </FormField>
              <FormField label="Where are they now?" name="level">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {LEVELS.map((l) => <Chip key={l} selectable selected={draft.level === l} onChange={() => set('level', l)} label={l} />)}
                </div>
              </FormField>
              <FormField label="Anything the teacher should know?" name="notes" type="textarea" optional maxLength={200} value={draft.notes} onChange={(e) => set('notes', e.target.value)} />
              <Button variant="text" label="Add another child" />
              <p className="g-caption">Siblings are priced lower — you'll see that later, not now.</p>
            </div>
          )}

          {step === 2 && (
            <div style={{ display: 'grid', gap: 18 }}>
              <h2 style={{ fontSize: 26 }}>When suits you</h2>
              <FormField label="Time zone" name="tz" hint="Detected from your device — change it if that's wrong." value={draft.tz} onChange={(e) => set('tz', e.target.value)} />
              <FormField label="Pick any times that work" name="blocks">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 8 }}>
                  {BLOCKS.map((b) => <Chip key={b} selectable selected={draft.blocks.includes(b)} onChange={() => multi('blocks', b)} label={b} />)}
                </div>
              </FormField>
              <p className="g-caption">Lessons are 1 hour. Packages are 2 lessons a week — but today you're just booking the free one.</p>
            </div>
          )}

          {step === 3 && (
            <div style={{ display: 'grid', gap: 18 }}>
              <h2 style={{ fontSize: 26 }}>Your details</h2>
              <FormField label="Your first name" name="parent" value={draft.parent} onChange={(e) => set('parent', e.target.value)} autoComplete="given-name" />
              <FormField label="Email" name="email" type="email" value={draft.email} onChange={(e) => set('email', e.target.value)} autoComplete="email" hint="We'll send the lesson link here." />
              <FormField label="WhatsApp number" name="whatsapp" type="tel" optional inputMode="tel" autoComplete="tel" hint="Most families prefer WhatsApp." value={draft.whatsapp} onChange={(e) => set('whatsapp', e.target.value)} />
              <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 15, lineHeight: 1.5 }}>
                <input type="checkbox" checked={draft.consent} onChange={(e) => set('consent', e.target.checked)} style={{ width: 20, height: 20, marginBlockStart: 2, accentColor: 'var(--blue-primary)' }} />
                <span>I'm this child's parent or guardian and I agree to the terms and privacy notice.</span>
              </label>
              <div style={{ background: 'var(--teal-50)', border: '1px solid rgba(14,140,111,.18)', borderRadius: 'var(--radius-tile)', padding: '14px 16px', fontSize: 15, color: 'var(--teal-700)' }}>
                No payment now. Nothing is charged until after your free lesson, and only if you choose a package.
              </div>
            </div>
          )}

          {step === 4 && (
            <div style={{ display: 'grid', gap: 16, justifyItems: 'start' }}>
              <span style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--teal-50)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--teal-teacher)" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" strokeDasharray="32" style={{ animation: 'g-check-draw 240ms var(--ease-out) both' }} />
                </svg>
              </span>
              <h2 style={{ fontSize: 26 }}>Waan ku faraxsanahay! Your free lesson request is in.</h2>
              <ol style={{ margin: 0, paddingInlineStart: 22, display: 'grid', gap: 8, fontSize: 16, lineHeight: 1.6, color: 'var(--ink-700)' }}>
                <li>We match your child with a verified teacher, within 24 hours.</li>
                <li>We message you two or three times that work.</li>
                <li>Your child has a free 1-hour lesson.</li>
                <li>Only then do you choose a package — or not.</li>
              </ol>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                <Button variant="primary" iconStart="message-circle" label="Message us on WhatsApp" />
                <Button variant="ghost" label="See packages while you wait" />
              </div>
              <p className="g-caption">Need to change or cancel? Reply to our message and we'll sort it.</p>
            </div>
          )}
        </div>

        {step < 4 && (
          <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between', marginBlockStart: 24 }}>
            <Button variant="ghost" label="Back" onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1} />
            <Button variant="primary" iconEnd="arrow-right" label={step === 3 ? 'Request my free lesson' : 'Continue'}
              onClick={() => { if (step === 3 && onSubmit) onSubmit(draft); setStep((s) => s + 1); }} />
          </div>
        )}
      </div>
    </div>
  );
}

const { StatTile, Accordion, Button, FreeLessonCTA, Icon, VerifiedBadge, LocaleSwitcher, CurrencySwitcher, Motif } = window.GaraadDesignSystem_b60642;
const SDx = window.GaraadSite;

function AiBuddy() {
  const chat = [
    { who: 'buddy', text: 'Shall we practise this week’s 10 words?' },
    { who: 'child', text: 'Haa. Ready.' },
    { who: 'buddy', text: 'Good. “Qurux” — now use it in a sentence for me.' },
  ];
  return (
    <window.Section tone="white" id="ai">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 56, alignItems: 'center' }}>
        <div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--violet-50)', border: '1px solid rgba(108,75,209,.18)', color: 'var(--violet-700)', borderRadius: 'var(--radius-pill)', padding: '6px 13px', fontSize: 13, fontWeight: 600 }}>
            <Icon name="sparkles" size={15} /> Between lessons
          </span>
          <h2 style={{ marginBlock: '18px 16px' }}>A practice partner between lessons — with the teacher still in charge.</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            {['It only practises what your child’s teacher has already taught.',
              'It never gives religious rulings, and never assesses recitation.',
              'Every conversation is logged and visible to you and the teacher.',
              'There’s a daily time limit, so it stays practice — not a screen habit.'].map((t) => (
              <li key={t} style={{ display: 'flex', gap: 10, fontSize: 16, lineHeight: 1.55, color: 'var(--ink-700)' }}>
                <span style={{ marginBlockStart: 3 }}><Icon name="check" size={17} color="var(--violet-ai)" strokeWidth={2.5} /></span>{t}
              </li>
            ))}
          </ul>
          <p style={{ marginBlockStart: 22, fontSize: 17, fontWeight: 600, color: 'var(--text-heading)' }}>The AI helps your child remember. The teacher does the teaching.</p>
        </div>
        <div style={{ background: 'var(--surface-card)', border: '1px solid rgba(108,75,209,.2)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-rest)', overflow: 'hidden' }}>
          <div style={{ background: 'var(--violet-50)', color: 'var(--violet-700)', padding: '10px 14px', fontSize: 13, fontWeight: 600, borderBlockEnd: '1px solid rgba(108,75,209,.16)' }}>
            Your teacher and hooyo can see this chat.
          </div>
          <div style={{ padding: 16, display: 'grid', gap: 10 }}>
            {chat.map((m, i) => (
              <div key={i} style={{
                justifySelf: m.who === 'child' ? 'end' : 'start', maxWidth: '82%',
                background: m.who === 'child' ? 'var(--paper-200)' : 'var(--violet-ai)',
                color: m.who === 'child' ? 'var(--ink-900)' : '#fff',
                padding: '10px 14px', borderRadius: 14,
                borderEndStartRadius: m.who === 'child' ? 14 : 4, borderEndEndRadius: m.who === 'child' ? 4 : 14,
                fontSize: 15, lineHeight: 1.5,
              }}>{m.text}</div>
            ))}
          </div>
        </div>
      </div>
    </window.Section>
  );
}

function MonthlyReport() {
  return (
    <window.Section id="report">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: 56, alignItems: 'center' }}>
        <div>
          <h2>Every month, a report you'll actually want to forward.</h2>
          <p style={{ marginBlockStart: 16, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body-lg)', color: 'var(--ink-700)' }}>
            Attendance, new words learned, Qur'aan progress, and one honest note from your child's teacher. It takes a minute to read and it tells you exactly what you're paying for.
          </p>
        </div>
        <div style={{ transform: 'rotate(-2deg)', background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-hover)', padding: 22 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            <div>
              <div style={{ fontSize: 19, fontWeight: 700, color: 'var(--text-heading)' }}>Ayaan · April</div>
              <div style={{ marginBlockStart: 6 }}><VerifiedBadge size="sm" label="Ustaad Yusuf A." /></div>
            </div>
            <Icon name="file-text" size={22} color="var(--ink-400)" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBlock: '18px' }}>
            <StatTile label="Lessons attended" value="4/4" />
            <StatTile label="New words" value="42" />
            <StatTile label="Homework done" value="3/4" />
            <StatTile label="Qur'aan · Juz Amma" value="60%" progress={60} tone="gold" />
          </div>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-700)', borderInlineStart: '2px solid var(--teal-100)', paddingInlineStart: 12 }}>
            “Beautiful recitation this week. Slow down on the long vowels.”
          </p>
          <span style={{ display: 'inline-block', marginBlockStart: 16, background: 'var(--paper-200)', borderRadius: 'var(--radius-pill)', padding: '6px 12px', fontSize: 13, color: 'var(--text-muted)' }}>
            Sent to you on the 1st of every month
          </span>
        </div>
      </div>
    </window.Section>
  );
}

function Parents() {
  return (
    <window.Section tone="white" id="parents">
      <window.Heading align="center" title="Parents' words" sub="Placeholder testimonials — we publish nothing until a family agrees to be quoted." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 20 }}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ background: 'var(--surface-page)', border: '1px dashed var(--border-strong)', borderRadius: 'var(--radius-card)', padding: 22 }}>
            <span className="g-label" style={{ color: 'var(--text-quiet)' }}>Placeholder</span>
            <p style={{ marginBlockStart: 12, fontSize: 16.5, lineHeight: 1.6, color: 'var(--ink-500)' }}>
              A parent's own words go here, once a real family has agreed to be quoted by name.
            </p>
            <div style={{ marginBlockStart: 14, fontSize: 14, color: 'var(--text-quiet)' }}>Parent, city — awaiting consent</div>
          </div>
        ))}
      </div>
    </window.Section>
  );
}

function Faq() {
  return (
    <window.Section id="faq">
      <window.Heading align="center" title="Questions parents ask" />
      <Accordion defaultOpen={0} items={SDx.faq} />
    </window.Section>
  );
}

function ClosingCta({ onBook }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-dark)', paddingBlock: 72 }}>
      <div style={{ position: 'absolute', insetBlockEnd: -10, insetInlineStart: -30, lineHeight: 0 }}><Motif name="caravan" height={158} color="#ffffff" opacity={0.07} /></div>
      <div className="g-container" style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 8 }}>
        <h2 style={{ color: 'var(--text-on-dark)', fontSize: 'var(--text-h1)' }}>Your child's first lesson is free.</h2>
        <p style={{ color: 'var(--text-on-dark-muted)', fontSize: 'var(--text-body-lg)', marginBlockEnd: 22 }}>Bal aan bilowno — let's begin. Find out what they can do in an hour.</p>
        <FreeLessonCTA variant="dark" caption="No card needed · 1 full hour · With a verified teacher" onClick={onBook} />
      </div>
    </section>
  );
}

function Footer({ currency, setCurrency, locale, setLocale }) {
  return (
    <footer style={{ background: 'var(--surface-page)', borderBlockStart: '1px solid var(--border-hairline)', paddingBlock: '56px 28px' }}>
      <div className="g-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(4,1fr)', gap: 32 }}>
          <div>
            <div style={{ font: '700 24px/1 var(--font-core)', letterSpacing: '-.02em', color: 'var(--navy-deep)' }}>{SDx.brand}<span style={{ color: 'var(--gold-star)' }}>.</span></div>
            <p style={{ marginBlockStart: 12, fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)' }}>
              Live Somali, Arabic and Qur'aan lessons for diaspora families, with verified Somali teachers. Taariikh, gabay and maahmaah included. For shanta Soomaaliyeed.
            </p>
            <div style={{ marginBlockStart: 16, lineHeight: 0 }}><Motif name="camel" height={44} color="var(--navy-deep)" opacity={0.28} /></div>
          </div>
          {SDx.footer.map((col) => (
            <div key={col.h}>
              <div className="g-label" style={{ color: 'var(--text-quiet)', marginBlockEnd: 12 }}>{col.h}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 9 }}>
                {col.items.map((it) => <li key={it}><a href="#" style={{ fontSize: 14.5, color: 'var(--ink-700)', textDecoration: 'none' }}>{it}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginBlockStart: 40, paddingBlockStart: 20, borderBlockStart: '1px solid var(--border-hairline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span className="g-caption">© 2026 {SDx.brand}. Registered in [country], no. [X].</span>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <LocaleSwitcher value={locale} onChange={setLocale} />
            <CurrencySwitcher size="sm" value={currency} onChange={setCurrency} />
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { AiBuddy, MonthlyReport, Parents, Faq, ClosingCta, Footer });

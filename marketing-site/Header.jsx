const { Button, FreeLessonCTA, CurrencySwitcher, LocaleSwitcher, Icon, Chip, VerifiedBadge, Motif } = window.GaraadDesignSystem_b60642;
const S = window.GaraadSite;

function Header({ scrolled, currency, setCurrency, locale, setLocale, onBook }) {
  return (
    <header style={{
      position: 'sticky', insetBlockStart: 0, zIndex: 50,
      height: scrolled ? 64 : 80, display: 'flex', alignItems: 'center',
      background: scrolled ? 'rgba(246,249,252,.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBlockEnd: `1px solid ${scrolled ? 'var(--border-hairline)' : 'transparent'}`,
      transition: 'height var(--dur-slow) var(--ease-out), background-color var(--dur-slow) var(--ease-out)',
    }}>
      <div className="g-container" style={{ display: 'flex', alignItems: 'center', gap: 24, width: '100%' }}>
        <a href="#top" style={{ font: '700 24px/1 var(--font-core)', letterSpacing: '-.02em', color: 'var(--navy-deep)', textDecoration: 'none' }}>
          {S.brand}<span style={{ color: 'var(--gold-star)' }}>.</span>
        </a>
        <nav aria-label="Main" style={{ display: 'flex', gap: 4, marginInline: 'auto' }}>
          {S.nav.map((n) => (
            <a key={n} href="#" style={{ padding: '10px 12px', borderRadius: 8, fontSize: 15, fontWeight: 500, color: 'var(--ink-700)', textDecoration: 'none' }}>{n}</a>
          ))}
        </nav>
        <LocaleSwitcher value={locale} onChange={setLocale} />
        <CurrencySwitcher size="sm" value={currency} onChange={setCurrency} />
        {scrolled
          ? <FreeLessonCTA variant="header" label="Book free lesson" onClick={onBook} />
          : <Button variant="ghost" size="sm" label="Sign in" />}
      </div>
    </header>
  );
}

function Hero({ onBook }) {
  return (
    <section id="top" style={{
      paddingBlock: '56px 0',
      background: 'radial-gradient(60% 55% at 8% 0%, rgba(239,165,27,.12), transparent 70%), radial-gradient(60% 60% at 95% 90%, rgba(30,107,214,.12), transparent 70%), var(--surface-page)',
    }}>
      <div className="g-container" style={{ display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 48, alignItems: 'center', paddingBlockEnd: 'var(--section-y)' }}>
        <div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--white)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-pill)', padding: '7px 14px', fontSize: 13.5, fontWeight: 600, color: 'var(--ink-700)', boxShadow: 'var(--shadow-rest)' }}>
            <Icon name="clock" size={15} color="var(--blue-primary)" /> Soo dhawoow · Live lessons in Somali, Arabic and Qur'aan
          </span>
          <h1 style={{ fontSize: 'var(--text-display)', lineHeight: 'var(--lh-display)', fontWeight: 800, marginBlock: '20px 18px', maxWidth: '18ch' }}>
            Your child, speaking Somali with confidence.
          </h1>
          <p style={{ fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body-lg)', color: 'var(--ink-700)', marginBlockEnd: 28 }}>
            Verified Somali teachers, live one-to-one lessons, and taariikh, gabay and maahmaah alongside the reading — so they grow up knowing the language and the dhaqan behind it.
          </p>
          <div style={{ display: 'flex', gap: 26, alignItems: 'center', flexWrap: 'wrap' }}>
            <FreeLessonCTA variant="hero" onClick={onBook} />
            <Button variant="text" label="See packages and pricing" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBlockStart: 28 }}>
            <div style={{ display: 'flex' }}>
              {[0, 1, 2, 3].map((i) => (
                <span key={i} style={{ width: 34, height: 34, borderRadius: '50%', background: `linear-gradient(150deg,#0C3A72,#${i % 2 ? '7A5206' : '082A55'})`, border: '2px solid var(--surface-page)', marginInlineStart: i ? -10 : 0 }} />
              ))}
            </div>
            <span className="g-caption">Verified Somali teachers across the UK, Europe and North America — for shanta Soomaaliyeed, wherever the family landed</span>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4 / 5', borderRadius: 'var(--radius-card)', background: 'linear-gradient(135deg,#082A55 0%,#0C3A72 52%,#C4820D 100%)', display: 'flex', alignItems: 'flex-end', padding: 14, boxShadow: 'var(--shadow-rest)' }}>
            <div style={{ position: 'absolute', insetBlockEnd: 8, insetInlineEnd: -20, lineHeight: 0 }}>
              <Motif name="caravan" height={190} color="#ffffff" opacity={0.13} />
            </div>
            <span style={{ fontSize: 11, letterSpacing: '.04em', textTransform: 'uppercase', color: 'rgba(246,249,252,.78)', background: 'rgba(6,29,59,.5)', borderRadius: 6, padding: '5px 9px' }}>
              Placeholder — child at a laptop mid-lesson
            </span>
          </div>
          <div style={{ position: 'absolute', insetBlockEnd: 34, insetInlineStart: -34, background: 'var(--surface-card)', borderRadius: 'var(--radius-card)', border: '1px solid var(--border-hairline)', boxShadow: 'var(--shadow-hover)', padding: '14px 16px', width: 250 }}>
            <VerifiedBadge size="sm" label="Verified teacher" />
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-heading)', marginBlockStart: 8 }}>Next lesson today, 18:00</div>
            <div className="g-caption">Somali reading with Ustaad Yusuf</div>
          </div>
        </div>
      </div>
      <TrustBar />
    </section>
  );
}

function TrustBar() {
  const items = [
    ['user-check', 'Every teacher ID-checked'], ['file-check', 'References taken'],
    ['globe', 'Background checked'], ['heart', 'Safeguarding trained'], ['eye', 'Observed trial lesson'],
  ];
  return (
    <div style={{ background: 'var(--white)', borderBlockEnd: '1px solid var(--border-hairline)' }}>
      <div style={{ lineHeight: 0 }}><Motif name="weave" height={10} color="var(--gold-star)" opacity={0.5} /></div>
      <div className="g-container" style={{ display: 'flex', flexWrap: 'wrap', gap: 28, justifyContent: 'space-between', paddingBlock: 18 }}>
        {items.map(([icon, label]) => (
          <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14.5, color: 'var(--ink-700)', fontWeight: 500 }}>
            <Icon name={icon} size={18} color="var(--teal-teacher)" /> {label}
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Header, Hero, TrustBar });

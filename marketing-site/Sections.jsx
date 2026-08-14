const { TrackCard, PricingCard, TeacherCard, StepTimeline, CurrencySwitcher, Button, FreeLessonCTA, Motif } = window.GaraadDesignSystem_b60642;
const SD = window.GaraadSite;

function Section({ children, tone = 'paper', id, style }) {
  const bg = tone === 'white' ? 'var(--surface-page-alt)' : tone === 'navy' ? 'var(--surface-dark)' : 'var(--surface-page)';
  return (
    <section id={id} style={{ background: bg, paddingBlock: 'var(--section-y)', ...style }}>
      <div className="g-container">{children}</div>
    </section>
  );
}

function Heading({ title, sub, tone = 'light', align = 'start' }) {
  return (
    <div style={{ marginBlockEnd: 40, textAlign: align, maxWidth: align === 'center' ? 720 : 'none', marginInline: align === 'center' ? 'auto' : 0 }}>
      <h2 style={{ color: tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-heading)' }}>{title}</h2>
      {sub && <p style={{ marginBlockStart: 12, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body-lg)', color: tone === 'dark' ? 'var(--text-on-dark-muted)' : 'var(--ink-700)', marginInline: align === 'center' ? 'auto' : 0 }}>{sub}</p>}
    </div>
  );
}

function Teach({ onBook }) {
  return (
    <Section tone="white" id="teach">
      <Heading title="What we teach" sub="Three tracks, equal weight — and dhaqan running through all of them. The free first lesson doubles as a friendly assessment." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24 }}>
        {SD.tracks.map((t) => (
          <TrackCard key={t.title} {...t} ctaLabel={`Book a free lesson in ${t.title.split(' ')[0]}`} onCta={() => onBook(t.title)} />
        ))}
      </div>
      <p style={{ marginBlockStart: 28, fontSize: 16, color: 'var(--ink-700)' }}>
        Not sure where to start? The free first lesson doubles as a friendly assessment — the teacher will tell you honestly where your child is.
      </p>
    </Section>
  );
}

function Dhaqan() {
  const m = SD.maahmaah;
  return (
    <section id="dhaqan" style={{ position: 'relative', background: 'radial-gradient(70% 90% at 18% 0%, rgba(239,165,27,.13), transparent 70%), var(--surface-page)', paddingBlock: 'var(--section-y)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', insetBlockStart: 0, insetInline: 0, lineHeight: 0 }}>
        <Motif name="weave" height={11} color="var(--gold-star)" opacity={0.42} />
      </div>
      <div style={{ position: 'absolute', insetBlockEnd: -6, insetInlineEnd: -40, lineHeight: 0, pointerEvents: 'none' }}>
        <Motif name="caravan" height={168} color="var(--navy-deep)" opacity={0.07} flip />
      </div>
      <div className="g-container" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 24, marginBlockEnd: 20 }}>
          <Motif name="aqal" height={78} color="var(--navy-deep)" lineColor="var(--surface-page)" />
          <div>
            <span className="g-label" style={{ color: 'var(--gold-700)' }}>{SD.somali.culture} · Culture</span>
            <h2 style={{ marginBlockStart: 10, maxWidth: '26ch' }}>Not only the language. The whole inheritance.</h2>
          </div>
        </div>
        <p style={{ fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body-lg)', color: 'var(--ink-700)', maxWidth: '62ch', marginBlockEnd: 40 }}>
          Every child on every track also learns where they come from. Not as an extra module — it is woven through the reading, the writing and the conversation, because that is how Somali has always been taught.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24 }}>
          {SD.dhaqan.map((c) => (
            <div key={c.so} style={{ background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-rest)', padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontSize: 21, fontWeight: 700, color: 'var(--text-heading)' }}>{c.so}</span>
                <span style={{ fontSize: 14, color: 'var(--text-quiet)' }}>{c.en}</span>
              </div>
              <div style={{ width: 34, height: 3, borderRadius: 2, background: 'var(--gold-star)', marginBlock: '14px 14px' }} />
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-700)' }}>{c.body}</p>
            </div>
          ))}
        </div>
        <figure style={{ margin: '40px 0 0', display: 'flex', alignItems: 'center', gap: 22, borderInlineStart: '3px solid var(--gold-star)', paddingInlineStart: 22 }}>
          <Motif name="camel" height={62} color="var(--gold-700)" opacity={0.9} />
          <div>
            <blockquote style={{ margin: 0, fontSize: 27, lineHeight: 1.3, fontWeight: 700, color: 'var(--text-heading)' }}>{m.so}</blockquote>
            <figcaption style={{ marginBlockStart: 8, fontSize: 16, color: 'var(--ink-700)' }}>{m.en} <span style={{ color: 'var(--text-quiet)' }}>— maahmaah</span></figcaption>
          </div>
        </figure>
        <div style={{ position: 'relative', overflow: 'hidden', marginBlockStart: 44, background: 'var(--surface-dark)', borderRadius: 'var(--radius-card)', padding: '38px 32px', textAlign: 'center' }}>
          <div style={{ position: 'absolute', insetBlockEnd: -12, insetInline: 0, display: 'flex', justifyContent: 'center', lineHeight: 0 }}>
            <Motif name="caravan" height={150} color="#ffffff" opacity={0.08} />
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.01em', color: 'var(--text-on-dark)' }}>Waxaan u nahay Shanta Soomaaliyeed.</div>
            <p style={{ marginBlockStart: 12, marginInline: 'auto', maxWidth: '58ch', fontSize: 17, lineHeight: 1.6, color: 'var(--text-on-dark-muted)' }}>
              We are for shanta Soomaaliyeed — all five Somali lands, and every family that left them. Same language, same dhaqan, same teaching, wherever you landed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <Section id="how">
      <Heading title="How it works" />
      <StepTimeline steps={SD.howItWorks} emphasisIndex={2} />
    </Section>
  );
}

function Pricing({ currency, setCurrency, onBook }) {
  const p = SD.prices;
  return (
    <Section tone="white" id="pricing">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBlockEnd: 36 }}>
        <div>
          <h2>Simple packages. The first lesson is always free.</h2>
          <p style={{ marginBlockStart: 12, fontSize: 'var(--text-body-lg)', lineHeight: 'var(--lh-body-lg)', color: 'var(--ink-700)' }}>
            Every package is 2 one-hour live sessions a week — about 8 hours of one-to-one teaching a month. Cancel any time.
          </p>
        </div>
        <CurrencySwitcher value={currency} onChange={setCurrency} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 24, alignItems: 'start' }}>
        <PricingCard name="One child" price={p.one[currency]} unit="per month"
          priceNote="2 × 1-hour sessions every week, for one child."
          features={SD.includes} onCta={() => onBook()} />
        <PricingCard featured name="Two children" price={p.two[currency]} unit="per child, per month"
          priceNote={`${p.twoTotal[currency]} a month for two children — each child gets their own 2 × 1-hour sessions a week.`}
          savings={p.saving[currency]}
          features={['Everything in One child', 'Siblings taught by the same teacher or different specialists', 'One invoice for the family', 'One monthly report per child']}
          onCta={() => onBook()} />
        <PricingCard custom name="Three or more children"
          customLine="A genuinely generous discount — tell us about your family and we'll price it."
          features={['Everything above', 'A dedicated family schedule', 'Flexible sibling timetabling', 'One point of contact']}
          ctaLabel="Get your family price" onCta={() => onBook()} />
      </div>
      <div style={{ marginBlockStart: 32, display: 'grid', gap: 14 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, fontSize: 14.5, color: 'var(--text-muted)' }}>
          <span>First lesson free</span><span>·</span><span>No card charged until after your free session</span><span>·</span><span>Cancel any time</span><span>·</span><span>Prices shown in your currency</span>
        </div>
        <p style={{ fontSize: 16, color: 'var(--ink-700)' }}>
          We publish what teachers earn. A fair share of every payment goes directly to your child's teacher. <Button variant="text" label="How we pay teachers" />
        </p>
        <p className="g-caption">Not sure which to pick? Message us on WhatsApp and we'll talk it through.</p>
      </div>
    </Section>
  );
}

function Teachers({ onBook }) {
  return (
    <Section id="teachers">
      <Heading title="Meet the teachers" sub="Photographs and names are placeholders until each teacher consents to being shown." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 20 }}>
        {SD.teachers.map((t) => <TeacherCard key={t.name} {...t} onBook={() => onBook()} />)}
      </div>
      <p style={{ marginBlockStart: 28, fontSize: 16, color: 'var(--ink-700)' }}>
        We match your child to a teacher, and if it isn't right we re-match within 48 hours — at no cost, and your progress moves with you.
      </p>
    </Section>
  );
}

function Safeguarding() {
  return (
    <Section tone="navy" id="safeguarding">
      <Heading tone="dark" title="Parents are buying safety before they are buying Somali."
        sub="Here is exactly how we verify every teacher — published, not promised." />
      <StepTimeline tone="dark" numbered={false} steps={SD.vetting} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 20, marginBlock: '44px 32px' }}>
        {['Your child never sees a price, a payment screen or an advert.',
          'Report anything, one tap. A human reviews it within 24 hours.',
          'The AI study buddy is supervised — you and the teacher see every message.'].map((c) => (
          <div key={c} style={{ background: 'var(--surface-dark-raised)', border: '1px solid var(--border-on-dark)', borderRadius: 'var(--radius-card)', padding: 20, fontSize: 15.5, lineHeight: 1.55, color: 'var(--text-on-dark)' }}>{c}</div>
        ))}
      </div>
      <Button variant="outline" onDark label="Read our full safeguarding standard" />
    </Section>
  );
}

Object.assign(window, { Section, Heading, Teach, Dhaqan, HowItWorks, Pricing, Teachers, Safeguarding });

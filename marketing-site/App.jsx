const { BookingModal } = window.GaraadDesignSystem_b60642;

function App() {
  const [currency, setCurrency] = React.useState(() => localStorage.getItem('garaad.currency') || 'GBP');
  const [locale, setLocale] = React.useState('en');
  const [scrolled, setScrolled] = React.useState(false);
  const [booking, setBooking] = React.useState(null);

  const pickCurrency = (c) => { setCurrency(c); localStorage.setItem('garaad.currency', c); };
  React.useEffect(() => {
    const el = document.scrollingElement || document.documentElement;
    const onScroll = () => setScrolled(el.scrollTop > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openBooking = (track) => setBooking({ track });

  return (
    <>
      <window.Header scrolled={scrolled} currency={currency} setCurrency={pickCurrency} locale={locale} setLocale={setLocale} onBook={() => openBooking()} />
      <main>
        <window.Hero onBook={() => openBooking()} />
        <window.Teach onBook={openBooking} />
        <window.Dhaqan />
        <window.HowItWorks />
        <window.Pricing currency={currency} setCurrency={pickCurrency} onBook={openBooking} />
        <window.Teachers onBook={openBooking} />
        <window.Safeguarding />
        <window.AiBuddy />
        <window.MonthlyReport />
        <window.Parents />
        <window.Faq />
        <window.ClosingCta onBook={() => openBooking()} />
      </main>
      <window.Footer currency={currency} setCurrency={pickCurrency} locale={locale} setLocale={setLocale} />
      <BookingModal open={!!booking} initialTrack={booking && booking.track} onClose={() => setBooking(null)} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

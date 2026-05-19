/* global React, I18N */
// Shared layout pieces: Masthead, Footer, reveal scroll-trigger.

const t = window.t;

function PaperLabel({ children, color }) {
  return (
    <span style={{
      fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: color || 'var(--accent)',
    }}>{children}</span>
  );
}

function Rule({ thick, color }) {
  return <div style={{ height: thick ? 3 : 1, background: color || 'var(--fg)' }}/>;
}

function useLang() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => {
    const h = () => force();
    window.addEventListener('langchange', h);
    return () => window.removeEventListener('langchange', h);
  }, []);
  return window.LANG;
}

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}

function LangToggle() {
  const lang = useLang();
  return (
    <div style={{ display: 'inline-flex', border: '1px solid var(--fg)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em' }}>
      {['en', 'it'].map(l => (
        <button key={l} onClick={() => window.setLang(l)} style={{
          background: lang === l ? 'var(--fg)' : 'transparent',
          color: lang === l ? 'var(--bg)' : 'var(--fg)',
          border: 'none', padding: '6px 12px', cursor: 'pointer',
          fontFamily: 'inherit', fontSize: 'inherit', letterSpacing: 'inherit',
          textTransform: 'uppercase', fontWeight: 500,
        }}>{l}</button>
      ))}
    </div>
  );
}

function Masthead({ page }) {
  useLang();
  const items = [
    ['home',      'index.html'],
    ['portfolio', 'portfolio.html'],
    ['studies',   'studies.html'],
    ['work',      'work.html'],
    ['cv',        'cv.html'],
  ];
  return (
    <header style={{ background: 'var(--bg)', borderBottom: '3px double var(--fg)', padding: '20px 56px 16px' }} className="pad-56">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: 16, gap: 16, flexWrap: 'wrap' }}>
        <span>{t(I18N.masthead.vol)}</span>
        <span style={{ color: 'var(--accent)' }}>● {t(I18N.masthead.title)}</span>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span>{t(I18N.masthead.location)}</span>
          <LangToggle/>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--fg)', borderBottom: '1px solid var(--fg)', padding: '8px 0' }}>
        <a href="index.html" style={{ textDecoration: 'none', display: 'block' }}>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(48px, 8vw, 120px)',
            fontWeight: 700, lineHeight: 0.9,
            letterSpacing: '-0.04em', textAlign: 'center',
            fontVariationSettings: '"opsz" 144',
          }}>
            Alessandro <span style={{ fontStyle: 'italic', fontFamily: 'var(--serif-italic)', fontWeight: 400, color: 'var(--accent)' }}>Rossi</span>
          </h1>
        </a>
      </div>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: 36, padding: '14px 0 4px', fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.15em', textTransform: 'uppercase', flexWrap: 'wrap' }}>
        {items.map(([k, href]) => (
          <a key={k} href={href} style={{
            color: page === k ? 'var(--accent)' : 'var(--fg)',
            borderBottom: page === k ? '2px solid var(--accent)' : '2px solid transparent',
            paddingBottom: 4,
            textDecoration: 'none',
            transition: 'color .15s, border-color .15s',
          }}>{t(I18N.nav[k])}</a>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  useLang();
  return (
    <footer style={{ background: 'var(--bg)', padding: '56px 56px 32px', borderTop: '3px double var(--fg)' }} className="pad-56">
      <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(48px, 7vw, 100px)', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.04em', textAlign: 'center' }}>
        {t(I18N.footer.cta1)} <span style={{ fontStyle: 'italic', fontFamily: 'var(--serif-italic)', color: 'var(--accent)' }}>{t(I18N.footer.cta2)}</span>
      </h2>
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <a href={`mailto:${SITE.email}`} style={{
          fontFamily: 'var(--serif)', fontSize: 26, color: 'var(--fg)',
          borderBottom: '2px solid var(--accent)', paddingBottom: 4, textDecoration: 'none',
        }}>{SITE.email}</a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48, paddingTop: 16, borderTop: '1px solid var(--fg)', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--dim)', letterSpacing: '0.12em', textTransform: 'uppercase', flexWrap: 'wrap', gap: 16 }}>
        <span>{t(I18N.footer.rights)}</span>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href={SITE.links.github} style={{ color: 'var(--fg)' }}>github ↗</a>
          <a href={SITE.links.linkedin} style={{ color: 'var(--fg)' }}>linkedin ↗</a>
          <a href={SITE.links.docker} style={{ color: 'var(--fg)' }}>docker ↗</a>
        </div>
      </div>
    </footer>
  );
}

// Site-wide config — edit here
window.SITE = {
  email: "alessandro0024@gmail.com",
  links: {
    github:   "https://github.com/alesrossi",
    linkedin: "https://linkedin.com/in/alessandro-rossi-448294205",
    docker:   "https://hub.docker.com/u/alesrossi",
  },
};

window.PaperLabel = PaperLabel;
window.Rule = Rule;
window.Masthead = Masthead;
window.Footer = Footer;
window.useLang = useLang;
window.useReveal = useReveal;

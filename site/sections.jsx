/* global React, I18N, PaperLabel, Rule */
// Reusable section components — Hero, About, Skinet, Infra, Studies, Work.

const tt = window.t;

function HeroSection() {
  window.useLang();
  const head = I18N.hero.headline[window.LANG];
  // headline pattern: [base], [italic], [on], [italic], [italic], [and], [italic+italic]
  return (
    <section style={{ padding: '64px 56px 48px', background: 'var(--bg)', borderBottom: '1px solid var(--fg)' }} className="pad-56 reveal">
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'end' }}>
        <div>
          <PaperLabel>
            {tt(I18N.hero.lede)} · {new Date().toLocaleDateString(window.LANG === 'it' ? 'it-IT' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </PaperLabel>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(40px, 6vw, 92px)',
            fontWeight: 500, lineHeight: 0.95, marginTop: 20,
            letterSpacing: '-0.03em',
            textWrap: 'pretty',
            fontVariationSettings: '"opsz" 144',
          }}>
            {head[0]}{' '}
            <span style={{ fontStyle: 'italic', fontFamily: 'var(--serif-italic)', color: 'var(--accent)' }}>{head[1]}</span>{' '}
            {head[2]}{' '}
            <span style={{ fontStyle: 'italic', fontFamily: 'var(--serif-italic)' }}>{head[3]}</span>,{' '}
            <span style={{ fontStyle: 'italic', fontFamily: 'var(--serif-italic)' }}>{head[4]}</span>,{' '}
            {head[5]}{' '}
            <span style={{ fontStyle: 'italic', fontFamily: 'var(--serif-italic)' }}>{head[6]}</span>
          </h2>
          <Rule color="var(--fg)" thick/>
          <p style={{ marginTop: 16, fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.45, fontVariationSettings: '"opsz" 14', maxWidth: '52ch' }}>
            <span style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 28 }}>“</span>
            {tt(I18N.hero.quote)}
            <span style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 28 }}>”</span>
          </p>
        </div>
        <div>
          <div style={{ background: 'var(--paper)', border: '1px solid var(--fg)', boxShadow: '8px 8px 0 var(--fg)' }}>
            <div style={{ borderBottom: '1px solid var(--fg)', padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <PaperLabel color="var(--fg)">{tt(I18N.hero.dossier)} · 2026 / 04 / Q2</PaperLabel>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--dim)' }}>{tt(I18N.hero.file)} 0024</span>
            </div>
            <div style={{ padding: '24px 24px' }}>
              <table style={{ width: '100%', fontFamily: 'var(--mono)', fontSize: 13, borderCollapse: 'collapse' }}>
                <tbody>
                  {[
                    [tt(I18N.hero.rows.role),      tt(I18N.hero.rolev)],
                    [tt(I18N.hero.rows.location),  tt(I18N.hero.locationv)],
                    [tt(I18N.hero.rows.specialty), tt(I18N.hero.specialtyv)],
                    [tt(I18N.hero.rows.stacks),    '.NET · Rust · Node · React · Angular'],
                    [tt(I18N.hero.rows.status),    tt(I18N.hero.statusv)],
                    [tt(I18N.hero.rows.years),     tt(I18N.hero.yearsv)],
                  ].map(([k, v]) => (
                    <tr key={k} style={{ borderBottom: '1px dashed var(--dim)' }}>
                      <td style={{ padding: '10px 0', textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.12em', color: 'var(--dim)', verticalAlign: 'top', width: '40%' }}>{k}</td>
                      <td style={{ padding: '10px 0', color: 'var(--fg)', textAlign: 'right' }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ borderTop: '1px solid var(--fg)', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim)' }}>
              <span>{tt(I18N.hero.signed)}</span>
              <span style={{ color: 'var(--accent)' }}>{tt(I18N.hero.stamped)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STACK = {
  backend:  ["Rust", "C# / .NET", "ASP.NET Core", "Actix-web", "Node.js", "Apex"],
  frontend: ["Angular", "React", "Remix", "TypeScript", "HTML/CSS"],
  data:     ["PostgreSQL", "Redis", "Oracle", "MS SQL", "Entity Framework"],
  devops:   ["Docker", "Kubernetes", "Linux", "Nginx", "Stripe", "Azure"],
};

function AboutSection() {
  window.useLang();
  return (
    <section style={{ padding: '64px 56px', background: 'var(--paper)', borderBottom: '1px solid var(--fg)' }} className="pad-56 reveal">
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr', gap: 48 }}>
        <div>
          <PaperLabel>{tt(I18N.about.section)}</PaperLabel>
          <div style={{ marginTop: 14, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--dim)', lineHeight: 1.7 }}>
            <div style={{ borderTop: '1px solid var(--fg)', paddingTop: 8 }}>
              {tt(I18N.about.readtime)}<br/>
              <span style={{ color: 'var(--fg)' }}>{tt(I18N.about.mins)}</span>
            </div>
            <div style={{ borderTop: '1px dashed var(--dim)', marginTop: 12, paddingTop: 8 }}>
              {tt(I18N.about.filed)}<br/>
              <span style={{ color: 'var(--fg)' }}>{tt(I18N.about.biography)}</span>
            </div>
          </div>
        </div>
        <div>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.55, fontVariationSettings: '"opsz" 14' }}>
            <span style={{
              float: 'left', fontFamily: 'var(--serif)', fontSize: 88, lineHeight: 0.85,
              padding: '6px 10px 0 0', color: 'var(--accent)', fontWeight: 700,
              fontVariationSettings: '"opsz" 144',
            }}>{tt(I18N.about.long)[0]}</span>
            {tt(I18N.about.long).slice(1)}
          </p>
        </div>
        <div>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.55, fontVariationSettings: '"opsz" 14' }}>
            {tt(I18N.about.philosophy)}
          </p>
          <div style={{ marginTop: 32, padding: '20px 24px', background: 'var(--bg)', border: '1px solid var(--fg)', position: 'relative' }}>
            <span style={{ position: 'absolute', top: -8, left: 16, background: 'var(--paper)', padding: '0 8px', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em', color: 'var(--accent)' }}>{tt(I18N.about.note)}</span>
            <p style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 17, lineHeight: 1.5 }}>
              {tt(I18N.about.pullquote)}
            </p>
          </div>
        </div>
      </div>
      <Rule color="var(--fg)" thick/>
      <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 28, marginTop: 32 }}>
        {Object.entries(STACK).map(([cat, items]) => (
          <div key={cat}>
            <PaperLabel color="var(--accent2)">/{tt(I18N.stack[cat])}</PaperLabel>
            <div style={{ marginTop: 12, fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.5, fontVariationSettings: '"opsz" 14' }}>
              {items.join(' · ')}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SurveylSection() {
  window.useLang();
  const pillars = I18N.surveyl.pillars[window.LANG];
  const stack = I18N.surveyl.stack[window.LANG];
  return (
    <section style={{ padding: '72px 56px', background: 'var(--bg)', borderBottom: '1px solid var(--fg)' }} className="pad-56 reveal">
      <div style={{ marginBottom: 40, textAlign: 'center' }}>
        <PaperLabel>{tt(I18N.surveyl.section)}</PaperLabel>
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(56px, 11vw, 180px)',
          fontWeight: 700, lineHeight: 0.9, marginTop: 12,
          letterSpacing: '-0.05em', fontVariationSettings: '"opsz" 144',
        }}>
          <span style={{ fontStyle: 'italic', fontFamily: 'var(--serif-italic)', fontWeight: 400, color: 'var(--accent)' }}>{tt(I18N.surveyl.h1)}</span>{tt(I18N.surveyl.h2)}
        </h2>
        <p style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--dim)', marginTop: 14 }}>
          {tt(I18N.surveyl.sub)}
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 24, justifyContent: 'center' }}>
          <a href="https://surveyl.top/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 18px', border: '1px solid var(--fg)', background: 'var(--fg)', color: 'var(--bg)', textDecoration: 'none' }}>{tt(I18N.surveyl.links.live)}</a>
          <a href="https://info.surveyl.top/" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '8px 18px', border: '1px solid var(--fg)', background: 'transparent', color: 'var(--fg)', textDecoration: 'none' }}>{tt(I18N.surveyl.links.info)}</a>
        </div>
      </div>

      {/* pillars */}
      <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid var(--fg)', background: 'var(--paper)', marginBottom: 0 }}>
        {pillars.map((p, i) => (
          <div key={i} style={{ padding: '20px 20px', borderRight: i < 3 ? '1px solid var(--fg)' : 'none' }}>
            <PaperLabel color="var(--accent2)">0{i+1} / 04</PaperLabel>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 20, marginTop: 6, fontWeight: 500 }}>{p.k}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--dim)', lineHeight: 1.5, marginTop: 6 }}>{p.v}</div>
          </div>
        ))}
      </div>

      {/* body + diagram */}
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', borderLeft: '1px solid var(--fg)', borderRight: '1px solid var(--fg)', borderBottom: '1px solid var(--fg)' }}>
        <div style={{ padding: '40px 36px' }}>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 20, lineHeight: 1.55, fontVariationSettings: '"opsz" 14' }}>
            {tt(I18N.surveyl.body)}
          </p>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.55, marginTop: 20, fontVariationSettings: '"opsz" 14', color: 'var(--dim)' }}>
            {tt(I18N.surveyl.body2)}
          </p>
          <div style={{ marginTop: 32 }}>
            <PaperLabel color="var(--accent2)">{tt(I18N.surveyl.sidebar)}</PaperLabel>
            <table style={{ width: '100%', marginTop: 16, fontFamily: 'var(--mono)', fontSize: 12, borderCollapse: 'collapse' }}>
              <tbody>
                {Object.entries(stack).map(([k, val]) => (
                  <tr key={k} style={{ borderBottom: '1px dashed var(--dim)' }}>
                    <td style={{ padding: '8px 0', color: 'var(--dim)', textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.12em' }}>{k}</td>
                    <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 600 }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ borderLeft: '1px solid var(--fg)', padding: '32px 28px', background: 'var(--paper)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
            <PaperLabel color="var(--fg)">{tt(I18N.surveyl.diagram)}</PaperLabel>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--dim)' }}>{tt(I18N.surveyl.fig)}</span>
          </div>
          <pre style={{ fontFamily: 'var(--mono)', fontSize: 11, lineHeight: 1.9, color: 'var(--fg)', whiteSpace: 'pre', overflow: 'auto' }}>
{`          Internet
              │
  ┌───────────▼───────────┐
  │     Nginx Ingress      │  TLS
  └──────────┬────────────┘
             │
   ┌─────────┴──────────┐
   │                    │
┌──▼───────┐     ┌──────▼────┐
│   API    │     │ Frontend  │
│(ASP.NET) │     │  (SPA)    │
└──┬───────┘     └───────────┘
   │
┌──┴──────────────────┐
│                     │
┌─▼──────┐    ┌───────▼────┐
│ Redis  │    │ PostgreSQL │
│ Cache  │    │StatefulSet │
│ Tokens │    │    PVC     │
└────────┘    └────────────┘

┌────────────────────────────┐
│       Observability        │
│  Filebeat → Elasticsearch  │
│              → Kibana      │
└────────────────────────────┘`}
          </pre>
          <div style={{ marginTop: 16, paddingTop: 12, borderTop: '1px dashed var(--dim)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            CI/CD: GitHub Actions → Docker Hub → helm upgrade
          </div>
        </div>
      </div>
    </section>
  );
}

function SkinetSection() {
  window.useLang();
  const [tab, setTab] = React.useState(0);
  const versions = I18N.skinet.versions[window.LANG];
  const pillars = I18N.skinet.pillars[window.LANG];
  const v = versions[tab];
  return (
    <section style={{ padding: '72px 56px', background: 'var(--bg)', borderBottom: '1px solid var(--fg)' }} className="pad-56 reveal">
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <PaperLabel>{tt(I18N.skinet.section)}</PaperLabel>
        <h2 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(56px, 11vw, 180px)',
          fontWeight: 700, lineHeight: 0.9, marginTop: 12,
          letterSpacing: '-0.05em', fontVariationSettings: '"opsz" 144',
        }}>
          {tt(I18N.skinet.h1)}<br/>
          <span style={{ fontStyle: 'italic', fontFamily: 'var(--serif-italic)', fontWeight: 400, color: 'var(--accent)' }}>{tt(I18N.skinet.h2)}</span> {tt(I18N.skinet.h3)}
        </h2>
        <p style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.5, marginTop: 24, maxWidth: '60ch', marginLeft: 'auto', marginRight: 'auto', color: 'var(--dim)' }}>
          {tt(I18N.skinet.blurb)}
        </p>
      </div>

      {/* pillars */}
      <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid var(--fg)', background: 'var(--paper)', marginBottom: 0 }}>
        {pillars.map((p, i) => (
          <div key={i} style={{ padding: '20px 20px', borderRight: i < 3 ? '1px solid var(--fg)' : 'none' }}>
            <PaperLabel color="var(--accent2)">0{i+1} / 04</PaperLabel>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 20, marginTop: 6, fontWeight: 500 }}>{p.k}</div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--dim)', lineHeight: 1.5, marginTop: 6 }}>{p.v}</div>
          </div>
        ))}
      </div>

      {/* tabs */}
      <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderLeft: '1px solid var(--fg)', borderRight: '1px solid var(--fg)', borderBottom: '1px solid var(--fg)', background: 'var(--paper)' }}>
        {versions.map((ver, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            background: tab === i ? 'var(--fg)' : 'transparent',
            color: tab === i ? 'var(--bg)' : 'var(--fg)',
            border: 'none',
            borderRight: i < 2 ? '1px solid var(--fg)' : 'none',
            padding: '24px 28px',
            cursor: 'pointer',
            textAlign: 'left',
            fontFamily: 'var(--serif)',
          }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: tab === i ? 'rgba(244,241,234,0.6)' : 'var(--dim)' }}>
              {tt(I18N.skinet.chapter)} 0{i+1} · {ver.status === 'shipped' ? tt(I18N.skinet.shipped) : tt(I18N.skinet.wip)}
            </div>
            <div style={{ fontSize: 28, fontWeight: 500, marginTop: 6, letterSpacing: '-0.02em' }}>{ver.name}</div>
            <div style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 15, marginTop: 4, color: tab === i ? 'rgba(244,241,234,0.7)' : 'var(--dim)' }}>"{ver.tagline}"</div>
          </button>
        ))}
      </div>

      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', borderLeft: '1px solid var(--fg)', borderRight: '1px solid var(--fg)', borderBottom: '1px solid var(--fg)' }}>
        <div style={{ padding: '40px 36px' }}>
          <PaperLabel>{v.name} / {tt(I18N.skinet.story)}</PaperLabel>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 21, lineHeight: 1.55, marginTop: 16, fontVariationSettings: '"opsz" 14' }}>
            {v.body}
          </p>
        </div>
        <div style={{ borderLeft: '1px solid var(--fg)', padding: '32px 28px', background: 'var(--paper)' }}>
          <PaperLabel color="var(--accent2)">{tt(I18N.skinet.sidebar)}</PaperLabel>
          <table style={{ width: '100%', marginTop: 16, fontFamily: 'var(--mono)', fontSize: 12, borderCollapse: 'collapse' }}>
            <tbody>
              {Object.entries(v.stack).map(([k, val]) => (
                <tr key={k} style={{ borderBottom: '1px dashed var(--dim)' }}>
                  <td style={{ padding: '8px 0', color: 'var(--dim)', textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.12em' }}>{k}</td>
                  <td style={{ padding: '8px 0', textAlign: 'right', fontWeight: 600 }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function InfraSection() {
  window.useLang();
  return (
    <section style={{ padding: '64px 56px', background: 'var(--paper)', borderBottom: '1px solid var(--fg)' }} className="pad-56 reveal">
      <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48 }}>
        <div>
          <PaperLabel>{tt(I18N.infra.section)}</PaperLabel>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(48px, 7vw, 100px)',
            fontWeight: 500, lineHeight: 0.95, marginTop: 12,
            letterSpacing: '-0.03em', fontVariationSettings: '"opsz" 144',
          }}>
            {tt(I18N.infra.h1)} <span style={{ fontStyle: 'italic', fontFamily: 'var(--serif-italic)', color: 'var(--accent)' }}>{tt(I18N.infra.h2)}</span> {tt(I18N.infra.h3)}
          </h2>
          <p style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.55, marginTop: 24, fontVariationSettings: '"opsz" 14' }}>
            {tt(I18N.infra.blurb)}
          </p>
        </div>
        <div style={{ background: 'var(--bg)', border: '1px solid var(--fg)', padding: '28px 28px', boxShadow: '8px 8px 0 var(--fg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20, flexWrap: 'wrap', gap: 8 }}>
            <PaperLabel color="var(--fg)">{tt(I18N.infra.topology)}</PaperLabel>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--dim)' }}>{tt(I18N.infra.fig)}</span>
          </div>
          <pre style={{ fontFamily: 'var(--mono)', fontSize: 12, lineHeight: 1.9, color: 'var(--fg)', whiteSpace: 'pre', overflow: 'auto' }}>
{`  ┌──────────────────────────┐
  │  ⊙  Hetzner Cloud       │   ← Ubuntu LTS
  └────────────┬─────────────┘
               │
  ┌────────────▼─────────────┐
  │  NGINX  reverse proxy    │   ← TLS
  └────────────┬─────────────┘
               │
  ┌────────────▼─────────────┐
  │  Docker Engine           │
  └─┬────┬────┬────┬────┬────┘
    │    │    │    │    │
   [P]  [SH] [RU] [PG] [RD]
    │    │    │    │    │
 portfolio
       skinet-sharp
            skinet-rusty
                 postgres
                      redis`}
          </pre>
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px dashed var(--dim)', fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 14, color: 'var(--dim)' }}>
            {tt(I18N.infra.caveat)}
          </div>
        </div>
      </div>
    </section>
  );
}

function StudiesSection() {
  window.useLang();
  const items = I18N.studies.items[window.LANG];
  return (
    <section style={{ padding: '64px 56px', background: 'var(--bg)', borderBottom: '1px solid var(--fg)' }} className="pad-56 reveal">
      {items.map((s, i) => (
        <article key={i}>
          <PaperLabel>{tt(I18N.studies.section)}</PaperLabel>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, marginTop: 24, alignItems: 'start' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 72px)', fontWeight: 500, lineHeight: 0.95, letterSpacing: '-0.03em' }}>{s.title}</h2>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 12, marginTop: 14, color: 'var(--accent)', letterSpacing: '0.08em' }}>{s.year}</div>
              <div style={{ fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 18, marginTop: 4, color: 'var(--dim)' }}>{s.sub}</div>
            </div>
            <div className="columns-2" style={{ columns: 2, columnGap: 32 }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.6, fontVariationSettings: '"opsz" 14', breakInside: 'avoid', marginBottom: 16 }}>{s.body}</p>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.6, fontVariationSettings: '"opsz" 14', color: 'var(--dim)' }}>{s.body2}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 28 }}>
            {s.tags.map(t => (
              <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 12px', border: '1px solid var(--fg)', background: 'var(--paper)' }}>{t}</span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

function WorkSection() {
  window.useLang();
  const items = I18N.work.items[window.LANG];
  return (
    <section style={{ background: 'var(--paper)', borderBottom: '1px solid var(--fg)' }}>
      {items.map((w, i) => (
        <div key={i} className="pad-56 reveal" style={{ padding: '56px 56px', borderBottom: i < items.length - 1 ? '1px solid var(--fg)' : 'none' }}>
          {i === 0 && <PaperLabel>{tt(I18N.work.section)}</PaperLabel>}
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 48, marginTop: 24, alignItems: 'start' }}>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: 8 }}>{w.year}</div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5.5vw, 84px)', fontWeight: 500, lineHeight: 0.9, letterSpacing: '-0.03em' }}>
                {w.company}
              </h2>
              <div style={{ marginTop: 12, fontFamily: 'var(--serif-italic)', fontStyle: 'italic', fontSize: 19 }}>
                {tt(I18N.work.asRole)} {w.role}<br/>{tt(I18N.work.forCli)} <span style={{ color: 'var(--accent)' }}>{w.client}</span>
              </div>
            </div>
            <div className="columns-2" style={{ columns: 2, columnGap: 32 }}>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.55, fontVariationSettings: '"opsz" 14', breakInside: 'avoid', marginBottom: 16 }}>
                <span style={{ float: 'left', fontFamily: 'var(--serif)', fontSize: 64, lineHeight: 0.85, padding: '4px 8px 0 0', color: 'var(--accent)', fontWeight: 700 }}>
                  {w.body[0]}
                </span>
                {w.body.slice(1)}
              </p>
              <p style={{ fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.55, fontVariationSettings: '"opsz" 14', color: 'var(--dim)' }}>{w.body2}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
            {w.tags.map(t => (
              <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 12px', border: '1px solid var(--fg)', background: 'var(--bg)' }}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

window.HeroSection = HeroSection;
window.AboutSection = AboutSection;
window.SurveylSection = SurveylSection;
window.SkinetSection = SkinetSection;
window.InfraSection = InfraSection;
window.StudiesSection = StudiesSection;
window.WorkSection = WorkSection;

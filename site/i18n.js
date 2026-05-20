// ─── i18n strings ───────────────────────────────────
// All site copy lives here. Add a language by adding a key
// to each string; switch by setting localStorage.lang.

window.I18N = {
  meta: {
    title: { en: "Alessandro Rossi — Fullstack Developer and DEVOPS", it: "Alessandro Rossi — Sviluppatore Fullstack e DEVOPS" },
    description: {
      en: "Fullstack developer building robust web apps with Rust, C#, and TypeScript.",
      it: "Sviluppatore fullstack che costruisce applicazioni web robuste con Rust, C# e TypeScript.",
    },
  },
  nav: {
    home:      { en: "Home",      it: "Home" },
    portfolio: { en: "Portfolio", it: "Portfolio" },
    studies:   { en: "Studies",   it: "Studi" },
    work:      { en: "Work",      it: "Lavoro" },
    cv:        { en: "CV",        it: "CV" },
  },
  masthead: {
    vol:      { en: "Vol. IV · No. 2026",         it: "Vol. IV · No. 2026" },
    title:    { en: "The Developer's Log",        it: "Il Diario dello Sviluppatore" },
    location: { en: "Rome, IT · €0.00",         it: "Roma, IT · €0,00" },
  },
  hero: {
    lede:    { en: "The lede",    it: "L'apertura" },
    headline: {
      en: ["A fullstack developer with", "opinions", "on", "quality", "products", "and", "niche solutions."],
      it: ["Uno sviluppatore fullstack con", "focus", "su", "qualità del codice", "e soluzioni scalabili"],
    },
    quote: {
      en: "Fullstack developer building robust web apps with Rust, C#, and TypeScript. Lately: DevOps and self-hosting.",
      it: "Sviluppatore fullstack che costruisce applicazioni web robuste con Rust, C# e TypeScript. Ultimamente: DevOps e self-hosting.",
    },
    dossier: { en: "Dossier",     it: "Dossier" },
    file:    { en: "FILE NO.",    it: "PRATICA N." },
    rows: {
      role:     { en: "Role",            it: "Ruolo" },
      location: { en: "Location",        it: "Località" },
      specialty:{ en: "Specialty",       it: "Specializzazione" },
      stacks:   { en: "Stacks",          it: "Stack" },
      status:   { en: "Status",          it: "Stato" },
      years:    { en: "Years shipping",  it: "Anni di lavoro" },
    },
    rolev:      { en: "Fullstack Developer", it: "Sviluppatore Fullstack" },
    locationv:  { en: "Italy · CET",         it: "Italia · CET" },
    specialtyv: { en: "Backend · APIs · DevOps · AI", it: "Backend · API · DevOps · AI" },
    statusv:    { en: "● Open to interesting things", it: "● Disponibile per nuove frontiere" },
    yearsv:     { en: "4",                   it: "4" },
    signed:     { en: "Signed · A.R.",       it: "Firmato · A.R." },
    stamped:    { en: "STAMPED · APPROVED",  it: "TIMBRATO · APPROVATO" },
  },
  about: {
    section:   { en: "§ I. About",         it: "§ I. Chi sono" },
    readtime:  { en: "read time",          it: "tempo di lettura" },
    mins:      { en: "3 minutes",          it: "3 minuti" },
    filed:     { en: "filed under",        it: "categoria" },
    biography: { en: "biography",          it: "biografia" },
    note:      { en: "EDITOR'S NOTE",      it: "NOTA DELL'EDITOR" },
    long: {
      en: "I am a fullstack developer with a strong background in Rust and C# for backend solutions, as well as Angular and React on the frontend. In addition to building robust web applications, I specialize in creating efficient APIs that bridge databases and application layers. Over the two past years I've also ventured into DevOps, applied complex Azure solutions in productions and experimanted with Kubernetes, including this very website, which I host myself.",
      it: "Sono uno sviluppatore fullstack con una solida esperienza in Rust e C# per le soluzioni backend, oltre ad Angular e React sul frontend. Oltre a costruire applicazioni web robuste, mi specializzo nella creazione di API efficienti che collegano database e livelli applicativi. Negli ultimi anni mi sono avventurato anche nel DevOps — applicato in Interlogica e su progetti personali, incluso questo stesso sito che self-hosto.",
    },
    philosophy: {
      en: "My approach is grounded in the pursuit of high-quality code. I tackle tickets, fix issues, and continuously improve existing codebases and the infrastructure around them. I'm passionate about new tech and keeping up with the latest developments and always experimenting with new technologies in my free time.",
      it: "Il mio approccio si fonda sulla ricerca di codice di alta qualità. Affronto ticket, risolvo problemi e miglioro continuamente le codebase esistenti e l'infrastruttura attorno. Sono appassionato di nuove tecnologie e dello stare aggiornato, mi aiuta ad adattarmi a nuove sfide e a risolvere problemi complessi con esperienze user-friendly.",
    },
    pullquote: {
      en: "\"I strive for excellence and take pride in every aspect of my work.— Whether building something new or optimizing the old, the rigour stays the same. \"",
      it: "\"Punto all'eccellenza e sono orgoglioso di ogni aspetto del mio lavoro.\" — Sia che si costruisca qualcosa di nuovo o si ottimizzi il vecchio, il rigore resta lo stesso.",
    },
  },
  stack: {
    backend:  { en: "backend",  it: "backend" },
    frontend: { en: "frontend", it: "frontend" },
    data:     { en: "data",     it: "dati" },
    devops:   { en: "devops",   it: "devops" },
  },
  surveyl: {
    section: { en: "§ II. The Deep Dive", it: "§ II. L'Approfondimento" },
    h1:      { en: "Surveyl.",  it: "Surveyl." },
    h2:      { en: "Top",       it: "Top" },
    sub:     { en: "Production backend · REST API · Kubernetes", it: "Backend in produzione · REST API · Kubernetes" },
    blurb: {
      en: "A production-grade REST API backend for Surveyl.Top. Built with ASP.NET Core Minimal APIs following Clean Architecture principles, deployed on a Kubernetes cluster on Hetzner.",
      it: "Un backend REST API production-grade per Surveyl.Top. Costruito con ASP.NET Core Minimal APIs seguendo la Clean Architecture, deployato su un cluster Kubernetes su Hetzner.",
    },
    pillars: {
      en: [
        { k: "Clean Architecture", v: "Domain logic isolated from infra. Unit of Work + Repository patterns." },
        { k: "Auth & Caching",     v: "JWT tokens (1h access / 30d refresh). Redis for cache and token blacklist." },
        { k: "Observability",      v: "Serilog → Elasticsearch + Kibana. Correlation ID on every request." },
        { k: "Real Integration Tests", v: "Testcontainers: real Postgres + Redis per run. No mocked layers." },
      ],
      it: [
        { k: "Clean Architecture",    v: "Logica di dominio isolata dall'infra. Unit of Work + Repository." },
        { k: "Auth & Cache",          v: "JWT token (1h access / 30d refresh). Redis per cache e blacklist token." },
        { k: "Observabilità",         v: "Serilog → Elasticsearch + Kibana. Correlation ID su ogni richiesta." },
        { k: "Test di integrazione reali", v: "Testcontainers: Postgres + Redis reali per ogni run. Niente mock." },
      ],
    },
    body: {
      en: "The Surveyl.Top backend is a REST API built with ASP.NET Core Minimal APIs — no controller overhead, endpoints organised by domain feature and registered explicitly, keeping routing transparent and testable. Persistence goes through PostgreSQL via Entity Framework Core with a code-first migration workflow. The Unit of Work and Repository patterns abstract all data access so business logic carries no framework dependencies.",
      it: "Il backend di Surveyl.Top è una REST API costruita con ASP.NET Core Minimal APIs — nessun overhead da controller, endpoint organizzati per feature di dominio e registrati esplicitamente, mantenendo il routing trasparente e testabile. La persistenza passa per PostgreSQL via Entity Framework Core con un workflow code-first. Unit of Work e Repository astraggono tutti gli accessi ai dati, così la logica di business non ha dipendenze dal framework.",
    },
    body2: {
      en: "Redis does double duty: distributed cache for expensive external lookups, and token store for JWT refresh and blacklist logic. Auth stays stateless at the verification layer while retaining immediate revocation. The Hetzner Kubernetes cluster distributes workloads with affinity rules; stateful services use cloud block storage PVCs. TLS managed by cert-manager with Let's Encrypt.",
      it: "Redis svolge un doppio ruolo: cache distribuita per lookup costosi, e token store per la logica JWT di refresh e blacklist. L'auth rimane stateless al livello di verifica pur mantenendo la revoca immediata. Il cluster Kubernetes su Hetzner distribuisce i workload con regole di affinità; i servizi stateful usano PVC su block storage cloud. TLS gestito da cert-manager con Let's Encrypt.",
    },
    stack: {
      en: { runtime: "ASP.NET Core 9", db: "PostgreSQL + EF Core", cache: "Redis", auth: "JWT + ASP.NET Identity", logging: "Serilog → ELK", tests: "xUnit + Testcontainers", deploy: "Docker + Helm + K8s" },
      it: { runtime: "ASP.NET Core 9", db: "PostgreSQL + EF Core", cache: "Redis", auth: "JWT + ASP.NET Identity", logging: "Serilog → ELK", tests: "xUnit + Testcontainers", deploy: "Docker + Helm + K8s" },
    },
    links: {
      info: { en: "Info page ↗", it: "Pagina info ↗" },
      live: { en: "Live site ↗", it: "Sito live ↗" },
    },
    diagram: { en: "Cluster · diagram",   it: "Cluster · diagramma" },
    fig:     { en: "FIG. II · Kubernetes", it: "FIG. II · Kubernetes" },
    sidebar: { en: "specs · sidebar",      it: "specifiche · barra laterale" },
  },
  skinet: {
    section: { en: "§ III. The Cover Story", it: "§ III. La Storia di Copertina" },
    h1:      { en: "One spec.",              it: "Una specifica." },
    h2:      { en: "Three",                  it: "Tre" },
    h3:      { en: "stacks.",                it: "stack." },
    blurb: {
      en: "A mock e-commerce platform for winter sports gear. One spec, three stacks. Built to compare languages and runtimes head-to-head while staying production-grade — auth, payments, caching, the lot.",
      it: "Una piattaforma e-commerce dimostrativa per attrezzatura da sport invernali. Una specifica, tre stack. Costruita per confrontare linguaggi e runtime fianco a fianco rimanendo production-grade — auth, pagamenti, caching, tutto.",
    },
    pillars: {
      en: [
        { k: "REST API", v: "Business logic, auth, Stripe payments." },
        { k: "Two databases", v: "Persistent store + in-memory cache." },
        { k: "Frontend", v: "SSR or SPA depending on the stack." },
        { k: "Production-ready", v: "Real auth, real payments, deployed." },
      ],
      it: [
        { k: "API REST", v: "Logica di business, auth, pagamenti Stripe." },
        { k: "Due database", v: "Store persistente + cache in-memory." },
        { k: "Frontend", v: "SSR o SPA a seconda dello stack." },
        { k: "Production-ready", v: "Auth vera, pagamenti veri, in deploy." },
      ],
    },
    chapter: { en: "Chapter",      it: "Capitolo" },
    shipped: { en: "shipped",      it: "rilasciato" },
    wip:     { en: "in progress",  it: "in corso" },
    story:   { en: "story",        it: "storia" },
    read:    { en: "Read the article →", it: "Leggi l'articolo →" },
    live:    { en: "See it live ↗",      it: "Vedi dal vivo ↗" },
    sidebar: { en: "specs · sidebar",    it: "specifiche · barra laterale" },
    versions: {
      en: [
        {
          name: "Skinet Sharp", tagline: "The original", status: "shipped",
          stack: { lang: "C#", backend: "ASP.NET", frontend: "Angular 12", db: "PostgreSQL", cache: "Redis", orm: "EF Core" },
          body: "Built using Angular 12 for the frontend and ASP.NET with C# on the backend. PostgreSQL through Entity Framework Core handles persistent data. Redis manages caching and short-term storage to keep things fast.",
        },
        {
          name: "Skinet Rusty", tagline: "Pushing it harder", status: "shipped",
          stack: { lang: "Rust", backend: "Actix-web", frontend: "Remix", db: "PostgreSQL", cache: "Redis", orm: "Diesel" },
          body: "A version that explores some niche tech to challenge myself. Backend powered by Rust and Actix-web for high performance. Remix on the frontend delivers a modern UX and a much better DX. PostgreSQL + Redis as before.",
        },
        {
          name: "Skinet Node", tagline: "Coming soon", status: "wip",
          stack: { lang: "TypeScript", backend: "Node.js", frontend: "TBD", db: "PostgreSQL", cache: "Redis", orm: "TBD" },
          body: "Still WIP — I plan to remake Skinet using Node. Same spec, third runtime.",
        },
      ],
      it: [
        {
          name: "Skinet Sharp", tagline: "L'originale", status: "shipped",
          stack: { lang: "C#", backend: "ASP.NET", frontend: "Angular 12", db: "PostgreSQL", cache: "Redis", orm: "EF Core" },
          body: "Costruito con Angular 12 per il frontend e ASP.NET con C# sul backend. PostgreSQL attraverso Entity Framework Core gestisce i dati persistenti. Redis gestisce caching e archiviazione a breve termine per mantenere tutto veloce.",
        },
        {
          name: "Skinet Rusty", tagline: "Spingere più forte", status: "shipped",
          stack: { lang: "Rust", backend: "Actix-web", frontend: "Remix", db: "PostgreSQL", cache: "Redis", orm: "Diesel" },
          body: "Una versione che esplora tecnologie di nicchia per mettermi alla prova. Backend alimentato da Rust e Actix-web per alte prestazioni. Remix sul frontend offre una UX moderna e una DX molto migliore. PostgreSQL + Redis come prima.",
        },
        {
          name: "Skinet Node", tagline: "In arrivo", status: "wip",
          stack: { lang: "TypeScript", backend: "Node.js", frontend: "TBD", db: "PostgreSQL", cache: "Redis", orm: "TBD" },
          body: "Ancora in sviluppo — ho intenzione di rifare Skinet usando Node. Stessa specifica, terzo runtime.",
        },
      ],
    },
  },
  infra: {
    section: { en: "§ IV. The Workshop", it: "§ IV. L'Officina" },
    h1:      { en: "A single server,",   it: "Un singolo droplet," },
    h2:      { en: "everything",           it: "tutto" },
    h3:      { en: "on it.",               it: "sopra." },
    blurb: {
      en: "I host the entire site and every project on a single Hetzner cloud instance. Each project is containerized with Docker and deployed to a remote Linux VM. Organized, resource-efficient, and easy to scale.",
      it: "Ospito l'intero sito e ogni progetto su un singolo server di Hetzner Cloud. Ogni progetto è containerizzato con Docker e deployato su una VM Linux remota. Organizzato, efficiente nelle risorse e facile da scalare.",
    },
    topology: { en: "Topology · self-hosted", it: "Topologia · self-hosted" },
    fig:      { en: "FIG. III · diagram",       it: "FIG. III · diagramma" },
    caveat: {
      en: "\"Maximum versatility\"",
      it: "\"Ci sono molte sfumature — config Docker, ambiente server, routing del reverse-proxy — ma la forma generale è questa.\"",
    },
  },
  studies: {
    section: { en: "§ V. Education", it: "§ V. Formazione" },
    items: {
      en: [{
        year: "2018 — 2022",
        title: "Bachelor's degree in Computer Science",
        sub: "Università degli studi di Genova",
        body: "Started in 2018 with C and C++ — implementing and optimizing common algorithms and data structures, working in Linux, exploring linear algebra. Year two shifted to Java with deeper OOP (inheritance, polymorphism), randomized algorithms, multithreading, and refined SQL skills (queries, functions, triggers).",
        body2: "In the final year I picked up C#, Python, and Android development did some more practical experience with .NET and Entity Framework, plus an introduction to web dev with PHP, JavaScript, HTML, CSS. To prepare for the industry I took a software engineering coursework: agile methodologies, design patterns, data modeling, refactoring, unit testing. Graduated in 2022 with a thesis on software testing in Salesforce.",
        tags: ["C", "C++", "Java", "C#", "Python", "SQL", "Software Testing"],
      }],
      it: [{
        year: "2018 — 2022",
        title: "Laurea Triennale in Informatica",
        sub: "Università",
        body: "Iniziato nel 2018 con C e C++ — implementando e ottimizzando algoritmi e strutture dati comuni, lavorando in Linux, esplorando algebra lineare. Il secondo anno si è spostato su Java con OOP più approfondita (ereditarietà, polimorfismo), algoritmi randomizzati, multithreading e competenze SQL raffinate (query, funzioni, trigger).",
        body2: "Nell'ultimo anno ho imparato C#, Python e sviluppo Android — esperienza pratica con .NET ed Entity Framework, oltre a un'introduzione al web dev con PHP, JavaScript, HTML, CSS. Per prepararmi all'industria ho seguito corsi di ingegneria del software: metodologie agili, design pattern, modellazione dati, refactoring, unit testing. Laureato nel 2022 con una tesi in software testing.",
        tags: ["C", "C++", "Java", "C#", "Python", "SQL", "Software Testing"],
      }],
    },
  },
  work: {
    section: { en: "§ VI. Work history", it: "§ VI. Esperienza lavorativa" },
    asRole:  { en: "as",   it: "come" },
    forCli:  { en: "for",  it: "per" },
    items: {
      en: [
        {
          year: "03/2022 — Present", company: "Interlogica",
          role: "Fullstack Developer", client: "Ayvens (formerly ALD)",
          body: "Working directly with Ayvens, a prominent car-rental company. My team and I maintain the Ayvens API and its associated services. We manage legacy APIs built using BizTalk while developing the next generation with ASP.NET 10",
          body2: "Alongside business logic we maintain multiple databases for the client — Oracle and SQL instances. Classic Agile workflow: Jira tickets submitted by the client, estimated, organized through the sprint. In 2024 Ayvens updated its internal security policy and tasked us with building a new Azure API Manager for secure connections to the outside world.",
          tags: ["C#", ".NET Core", "BizTalk", "Oracle", "MS SQL", "Azure"],
        },
        {
          year: "07/2021 — 03/2022", company: "Deloitte",
          role: "Salesforce Developer", client: "TIM Sparkle",
          body: "Began my programming journey as a fullstack Salesforce Developer at Deloitte Italia. Worked on the TIM Sparkle Project while studying for Salesforce certifications. Backend-focused with Apex (Java-like) — features, DB interactions, client comms, and testing — plus hands-on with the Salesforce frontend framework (React-like).",
          body2: "Collaborated with a team of ~25 across Waterfall and Agile environments. With a colleague I built the admin section of the customer portal (user/permission management) integrated with C-IAM. Also wrote my thesis here on software testing — implemented the project's first performance tests.",
          tags: ["Apex", "Salesforce", "Lightning", "Performance Testing"],
        },
      ],
      it: [
        {
          year: "03/2022 — Presente", company: "Interlogica",
          role: "Sviluppatore Fullstack", client: "Ayvens (ex ALD)",
          body: "Lavoro direttamente con Ayvens, un'importante azienda di noleggio auto. Il mio team e io manteniamo l'API Ayvens e i servizi associati. Gestiamo API legacy costruite con BizTalk mentre sviluppiamo la prossima generazione con ASP.NET 10",
          body2: "Oltre alla logica di business, manteniamo diversi database per il cliente — istanze Oracle e SQL. Workflow Agile classico: ticket Jira inviati dal cliente, stimati, organizzati nello sprint. Nel 2024 Ayvens ha aggiornato la sua policy di sicurezza interna e ci ha incaricato di costruire un nuovo Azure API Manager per connessioni sicure verso l'esterno.",
          tags: ["C#", ".NET Core", "BizTalk", "Oracle", "MS SQL", "Azure"],
        },
        {
          year: "07/2021 — 03/2022", company: "Deloitte",
          role: "Sviluppatore Salesforce", client: "TIM Sparkle",
          body: "Ho iniziato il mio percorso di programmazione come Sviluppatore Salesforce fullstack in Deloitte Italia. Ho lavorato al progetto TIM Sparkle mentre studiavo per le certificazioni Salesforce. Focalizzato sul backend con Apex (simile a Java) — feature, interazioni con DB, comunicazioni client e testing — oltre a lavoro pratico con il framework frontend di Salesforce (simile a React).",
          body2: "Ho collaborato con un team di ~25 persone tra ambienti Waterfall e Agile. Con un collega ho costruito la sezione admin del portale cliente (gestione utenti/permessi) integrata con C-IAM. Qui ho anche scritto la mia tesi sul software testing — implementati i primi performance test del progetto.",
          tags: ["Apex", "Salesforce", "Lightning", "Performance Testing"],
        },
      ],
    },
  },
  footer: {
    cta1:    { en: "Get in",   it: "Mettiamoci in" },
    cta2:    { en: "touch.",   it: "contatto." },
    rights:  { en: "© 2026 · A. Rossi · self-printed", it: "© 2026 · A. Rossi · auto-stampato" },
  },
};

// ── runtime helpers ──
window.LANG = (function() {
  const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || 'it';
  return saved === 'it' ? 'it' : 'en';
})();

window.setLang = function(l) {
  window.LANG = l;
  try { localStorage.setItem('lang', l); } catch (e) {}
  document.documentElement.lang = l;
  // notify React
  window.dispatchEvent(new Event('langchange'));
};

// translate helper: t(I18N.nav.home) → "Home" / "Home"
window.t = function(node) {
  if (!node) return '';
  if (typeof node === 'string') return node;
  return node[window.LANG] !== undefined ? node[window.LANG] : node.en;
};

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
    sub:     { en: "Collector & player platform · REST API · Kubernetes", it: "Piattaforma per collezionisti e giocatori · REST API · Kubernetes" },
    blurb: {
      en: "A platform for Magic: The Gathering collectors and players — catalogue your collection and track its value, build and branch decks the way you'd branch a Git repo, trade with other players in real time, and connect through friends and leagues. Underneath, a production-grade REST API on ASP.NET Core, deployed on a Kubernetes cluster on Hetzner.",
      it: "Una piattaforma per collezionisti e giocatori di Magic: The Gathering — cataloga la tua collezione e segui il suo valore, costruisci e fai branch dei tuoi mazzi come faresti con un repository Git, scambia con altri giocatori in tempo reale e connettiti tramite amici e leghe. Sotto il cofano, una REST API production-grade su ASP.NET Core, deployata su un cluster Kubernetes su Hetzner.",
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
      info: { en: "Read the deep dive →", it: "Leggi l'approfondimento →" },
      live: { en: "Live site ↗", it: "Sito live ↗" },
    },
    diagram: { en: "Cluster · diagram",   it: "Cluster · diagramma" },
    fig:     { en: "FIG. II · Kubernetes", it: "FIG. II · Kubernetes" },
    sidebar: { en: "specs · sidebar",      it: "specifiche · barra laterale" },
  },
  surveylArticle: {
    meta: {
      title: { en: "Surveyl.Top — Building a Production-Grade Platform | Alessandro Rossi", it: "Surveyl.Top — Costruire una piattaforma production-grade | Alessandro Rossi" },
    },
    back: { en: "← Back to portfolio", it: "← Torna al portfolio" },
    kicker: { en: "§ II.I · Field Report", it: "§ II.I · Cronaca" },
    title: {
      en: ["Building a production-grade platform", "from scratch"],
      it: ["Costruire una piattaforma production-grade", "da zero"],
    },
    subtitle: {
      en: "Lessons from a .NET 10 + Kubernetes side project",
      it: "Cosa ho imparato da un side project con .NET 10 e Kubernetes",
    },
    lede: {
      en: `Most side projects stop at "it runs on my laptop". I wanted to find out what it actually takes to ship one the way a real company would, with a clean backend, a proper Kubernetes cluster, observability, and CI/CD. So I built one from end to end. Here is a tour of the engineering.`,
      it: `La maggior parte dei side project si ferma a "funziona sul mio portatile". Volevo capire cosa serve davvero per portarne uno in produzione come farebbe un'azienda vera, con un backend pulito, un cluster Kubernetes come si deve, observability e CI/CD. Così ne ho costruito uno dall'inizio alla fine. Ecco un giro tra le scelte che ho fatto.`,
    },
    whatItIs: {
      heading: { en: "What it is, in plain terms", it: "Di cosa si tratta, in parole semplici" },
      body1: {
        en: `It is a platform for collectors and players of a trading card game. You can catalogue your collection and see what it is worth, build and share decks from those cards, trade with other players, and take part in social features like friends and leagues. The domain happens to be Magic: The Gathering, but the problems underneath are the same ones any inventory, marketplace, or content platform has to solve: large catalogues, complex filtering, pricing, real-time interaction, and a social graph.`,
        it: `È una piattaforma per i collezionisti e i giocatori di un gioco di carte collezionabili. Puoi catalogare la tua collezione e vedere quanto vale, costruire e condividere mazzi a partire da quelle carte, scambiare con altri giocatori e usare funzionalità sociali come amici e leghe. Il dominio è Magic: The Gathering, ma i problemi che ci sono sotto sono gli stessi che deve risolvere qualunque piattaforma di inventory, marketplace o contenuti: cataloghi enormi, filtri complessi, pricing, interazione in tempo reale e un grafo sociale.`,
      },
      body2: {
        en: `It is a .NET 10 backend, deployed and running on a Hetzner Kubernetes cluster, currently in pre-launch hardening.`,
        it: `È un backend in .NET 10, già deployato e in esecuzione su un cluster Kubernetes su Hetzner, al momento in fase di pre-launch hardening.`,
      },
    },
    versionControl: {
      heading: { en: "The feature I am proudest of: version control for decks", it: "La funzionalità di cui sono più orgoglioso: il version control per i mazzi" },
      body1: {
        en: `A deck is a living document. Players tweak it constantly, try variants for different tournaments, and want to roll back when an experiment flops. Most apps model this as "edit and overwrite". I modelled it the way Git models source code.`,
        it: `Un mazzo è un documento vivo. I giocatori lo modificano di continuo, provano varianti per i diversi tornei e vogliono tornare indietro quando un esperimento va male. La maggior parte delle app modella tutto questo come "modifica e sovrascrivi". Io l'ho modellato nel modo in cui Git modella il codice sorgente.`,
      },
      body2: {
        en: `Under the hood there are branches, commits, and a parent-pointer graph, using the same primitives version control does. You can branch a deck to try an idea, commit changes as you iterate, compare two versions to see exactly which cards moved, and walk the full history. The history view runs a breadth-first traversal back through commit parents to reconstruct and order the timeline.`,
        it: `Sotto il cofano ci sono branch, commit e un grafo a puntatori verso il parent, usando le stesse primitive del version control. Puoi creare un branch di un mazzo per provare un'idea, fare commit delle modifiche man mano che iteri, confrontare due versioni per vedere esattamente quali carte sono cambiate e ripercorrere tutta la history. La vista della history esegue una breadth-first traversal a ritroso lungo i parent dei commit per ricostruire e ordinare la timeline.`,
      },
      body3: {
        en: `This matters from an engineering point of view because it is a properly non-trivial domain model rather than CRUD with extra steps. Getting the commit-graph traversal, the branch heads, and the diffing right was the most interesting modelling work in the project.`,
        it: `Dal punto di vista ingegneristico questo conta perché è un domain model davvero non banale, non un semplice CRUD con qualche aggiunta. Far funzionare bene la traversal del commit-graph, i branch head e il diffing è stato il lavoro di modellazione più interessante del progetto.`,
      },
    },
    backend: {
      heading: { en: "The backend craft", it: "L'ingegneria del backend" },
      intro: { en: "The backend follows Clean Architecture, split into clear layers:", it: "Il backend segue la Clean Architecture, suddivisa in layer ben distinti:" },
      layers: {
        en: [
          { k: "API", v: "Minimal API endpoints, DTOs, auth, middleware, and OpenAPI docs (Scalar and Swagger)." },
          { k: "Core", v: "Domain models, business rules, and interfaces, with no framework dependencies." },
          { k: "Infrastructure", v: "EF Core, PostgreSQL, repositories, and migrations." },
        ],
        it: [
          { k: "API", v: "Minimal API endpoint, DTO, auth, middleware e documentazione OpenAPI (Scalar e Swagger)." },
          { k: "Core", v: "Domain model, regole di business e interfacce, senza dipendenze dal framework." },
          { k: "Infrastructure", v: "EF Core, PostgreSQL, repository e migration." },
        ],
      },
      patternsHeading: { en: "Patterns I leaned on", it: "Pattern su cui mi sono appoggiato" },
      patterns: {
        en: [
          { k: "Specification pattern", v: "Collection and deck filtering (by name, set, rarity, condition, language, price range, and more) is expressed as composable specifications instead of sprawling LINQ scattered across services." },
          { k: "Unit of Work", v: "Services depend on a single abstraction rather than reaching into the database context directly. That keeps them testable and the transaction boundaries explicit." },
          { k: "Real-time trade sessions", v: "Two players can match their wishlists against each other's tradeable cards and negotiate live, with session state held in Redis so it survives across stateless API replicas." },
          { k: "Pragmatic import engine", v: "Collectors already have their data spread across six different tools (Manabox, Moxfield, Goldfish, Archidekt, Dragonshield, Delver Lens). The importer reads all of them, tolerates bad rows instead of aborting the whole file, and reports exactly which lines it skipped." },
          { k: "Careful auth", v: "Short-lived JWT access tokens (one hour) with rotating refresh tokens (thirty days) stored in Redis, a token blacklist on logout, Google OAuth, and refresh delivered via an HttpOnly cookie for web or a header for mobile." },
        ],
        it: [
          { k: "Lo specification pattern", v: "Il filtraggio di collezioni e mazzi (per nome, set, rarità, condizione, lingua, fascia di prezzo e altro) è espresso come specification componibili, invece di LINQ sparso e ingestibile tra i vari service." },
          { k: "Lo Unit of Work", v: "I service dipendono da un'unica astrazione invece di accedere direttamente al database context. Questo li rende testabili e mantiene espliciti i confini delle transazioni." },
          { k: "Gli scambi in tempo reale", v: "Due giocatori possono mettere a confronto le proprie wishlist con le carte scambiabili dell'altro e negoziare in tempo reale, con lo stato della sessione tenuto in Redis così da sopravvivere tra le diverse repliche stateless dell'API." },
          { k: "Un motore di import pragmatico", v: "I collezionisti hanno già i loro dati sparsi su sei strumenti diversi (Manabox, Moxfield, Goldfish, Archidekt, Dragonshield, Delver Lens). L'importer li legge tutti, tollera le righe sbagliate invece di interrompere l'intero file e riporta esattamente quali righe ha saltato." },
          { k: "Un'auth curata", v: "Access token JWT a vita breve (un'ora) con refresh token a rotazione (trenta giorni) salvati in Redis, una blacklist dei token al logout, Google OAuth e il refresh consegnato tramite un cookie HttpOnly per il web o un header per il mobile." },
        ],
      },
      catalogue: {
        en: `The card catalogue itself comes from Scryfall's bulk data, hundreds of thousands of cards, loaded through a caching layer (Redis-backed in production) so lookups during imports, deck validation, and pricing stay fast.`,
        it: `Il catalogo delle carte arriva dai bulk data di Scryfall, centinaia di migliaia di carte, caricate attraverso un caching layer (basato su Redis in produzione) così che le lookup durante import, validazione dei mazzi e pricing restino veloci.`,
      },
      testing: {
        en: `All of it is covered by xUnit unit and integration tests. The integration suite spins up real PostgreSQL and Redis through Testcontainers, so tests run against the actual engines rather than mocks.`,
        it: `Il tutto è coperto da test unitari e di integrazione con xUnit. La suite di integrazione avvia istanze reali di PostgreSQL e Redis tramite Testcontainers, così i test girano contro i motori veri e non contro dei mock.`,
      },
    },
    deployment: {
      heading: { en: "How it is deployed", it: "Come viene deployata" },
      intro: {
        en: `The whole system runs on a Kubernetes cluster on Hetzner, packaged as a single Helm umbrella chart of roughly 35 templates, so the entire environment is reproducible from version-controlled config.`,
        it: `L'intero sistema gira su un cluster Kubernetes su Hetzner, impacchettato in un singolo Helm umbrella chart di circa 35 template, così che l'intero ambiente sia riproducibile a partire da configurazione versionata.`,
      },
      diagram: {
        en: `                          Internet
                             |
                      +------v------+
                      |  Nginx /    |   TLS via cert-manager
                      |  Ingress    |   (Let's Encrypt)
                      +--+-------+--+
                  +------v--+ +--v---------+
                  | Frontend| |  API (.NET 10)   |  stateless,
                  +---------+ |  N replicas      |  anti-affinity
                              +--+--------+---+--+  across nodes
                                 |        |   |
                       +---------v+ +-----v+ +v--------------+
                       |PostgreSQL| |Redis | | Elasticsearch |
                       |(Stateful)| |cache+| |   + Kibana    |
                       | main DB  | |tokens| |   (logs)      |
                       +----------+ +------+ +---------------+
                       hcloud-volumes persistent storage`,
        it: `                          Internet
                             |
                      +------v------+
                      |  Nginx /    |   TLS via cert-manager
                      |  Ingress    |   (Let's Encrypt)
                      +--+-------+--+
                  +------v--+ +--v---------+
                  | Frontend| |  API (.NET 10)   |  stateless,
                  +---------+ |  N repliche      |  anti-affinity
                              +--+--------+---+--+  tra i nodi
                                 |        |   |
                       +---------v+ +-----v+ +v--------------+
                       |PostgreSQL| |Redis | | Elasticsearch |
                       |(Stateful)| |cache+| |   + Kibana    |
                       | main DB  | |token | |   (log)       |
                       +----------+ +------+ +---------------+
                       storage persistente su hcloud-volumes`,
      },
      diagramLabel: { en: "Deployment · diagram", it: "Deploy · diagramma" },
      fig: { en: "FIG. III · Kubernetes", it: "FIG. III · Kubernetes" },
      notes: {
        en: [
          "Nginx fronts the traffic, and cert-manager issues Let's Encrypt TLS for the public domains.",
          "The API runs as several stateless replicas, kept on separate nodes through anti-affinity so a single node failure does not take the service down.",
          "PostgreSQL and Redis run as StatefulSets backed by Hetzner persistent volumes.",
          "Observability: Serilog ships structured logs (with correlation IDs) to Elasticsearch, explorable in Kibana, with an ILM job managing retention. Adminer is available for database inspection.",
          "CI/CD runs on GitHub Actions. Every push runs the full test suite against throwaway Postgres and Redis containers, builds and pushes a Docker image, then performs a helm upgrade and waits on the rollout, with an automated health check against the live API before the deploy is considered finished.",
        ],
        it: [
          "Nginx sta davanti al traffico e cert-manager emette i certificati TLS Let's Encrypt per i domini pubblici.",
          "L'API gira come diverse repliche stateless, tenute su nodi separati tramite anti-affinity così che il guasto di un singolo nodo non metta giù il servizio.",
          "PostgreSQL e Redis girano come StatefulSet, appoggiati a volumi persistenti Hetzner.",
          "Observability: Serilog spedisce log strutturati (con correlation ID) a Elasticsearch, esplorabili in Kibana, con un job ILM che gestisce la retention. Adminer è disponibile per l'ispezione del database.",
          "CI/CD gira su GitHub Actions. Ogni push lancia l'intera suite di test contro container usa e getta di Postgres e Redis, builda e pusha un'immagine Docker, poi esegue un helm upgrade e attende il rollout, con un health check automatico contro l'API live prima di considerare il deploy concluso.",
        ],
      },
    },
    scaling: {
      heading: { en: "Designed to scale, with an honest roadmap", it: "Progettata per scalare, con una roadmap onesta" },
      intro: {
        en: `Before launch I will not pretend there is production traffic to brag about. What I can speak to is that the system is built so that scaling is a configuration change rather than a rewrite:`,
        it: `Prima del lancio non farò finta di avere traffico di produzione di cui vantarmi. Quello che posso dire è che il sistema è costruito in modo che scalare sia un cambio di configurazione e non una riscrittura:`,
      },
      readyHeading: { en: "Already production-ready", it: "Già pronto per la produzione" },
      ready: {
        en: [
          { k: "Stateless API", v: "All shared state (sessions, refresh tokens, cache) lives in Redis, so adding replicas is safe." },
          { k: "Database-side filtering", v: "Filtering and pagination push work into the database through specifications, instead of pulling rows into memory." },
          { k: "Resilience baked in", v: "Anti-affinity and persistent volumes are already in place for resilience." },
        ],
        it: [
          { k: "API stateless", v: "Tutto lo stato condiviso (sessioni, refresh token, cache) vive in Redis, quindi aggiungere repliche è sicuro." },
          { k: "Filtraggio nel database", v: "Filtraggio e paginazione spingono il lavoro nel database tramite le specification, invece di tirare le righe in memoria." },
          { k: "Resilienza di base", v: "Anti-affinity e volumi persistenti sono già in atto per la resilienza." },
        ],
      },
      roadmapHeading: { en: "The honest next steps, once traffic justifies them", it: "I prossimi passi onesti, quando il traffico li giustificherà" },
      roadmap: {
        en: [
          { k: "Horizontal Pod Autoscaling", v: "The API is ready for it; the autoscaler simply is not wired up yet." },
          { k: "PostgreSQL read replicas", v: "To take the read-heavy catalogue and collection queries off the primary." },
          { k: "Sharding or CDN-fronting", v: "The bulk card data is the largest and most cacheable asset." },
        ],
        it: [
          { k: "Horizontal Pod Autoscaling", v: "L'API è pronta; semplicemente l'autoscaler non è ancora collegato." },
          { k: "Read replica di PostgreSQL", v: "Per togliere dal primario le query, pesanti in lettura, su catalogo e collezioni." },
          { k: "Sharding o CDN-fronting", v: "I bulk card data sono l'asset più grande e più facilmente cacheabile." },
        ],
      },
      outro: {
        en: `Knowing where a system will bend under load, and having already made the architectural choices that keep those options open, has been more valuable to me than any single benchmark.`,
        it: `Sapere dove un sistema cederà sotto carico, e aver già preso le scelte architetturali che tengono aperte quelle opzioni, è stato per me più utile di qualunque singolo benchmark.`,
      },
    },
    takeaway: {
      heading: { en: "What I took away", it: "Cosa mi sono portato a casa" },
      body1: {
        en: `Building this on my own meant wearing every hat: domain modeller, backend engineer, database administrator, and DevOps. The version control for decks taught me the most about modelling a hard domain. The Kubernetes and Helm work taught me that "production-ready" is mostly a checklist of unfashionable things, like TLS, health checks, log retention, and reproducible deploys, done consistently.`,
        it: `Costruire tutto questo da solo ha significato indossare ogni cappello: domain modeller, backend engineer, database administrator e DevOps. Il version control per i mazzi è ciò che mi ha insegnato di più sul modellare un dominio difficile. Il lavoro con Kubernetes e Helm mi ha insegnato che "production-ready" è soprattutto una checklist di cose poco affascinanti, come TLS, health check, retention dei log e deploy riproducibili, fatte con costanza.`,
      },
      body2: {
        en: `It is live in a pre-launch integration environment now but it is a fully working site and app. If you would like to poke at it:`,
        it: `Al momento è live in un ambiente di integrazione pre-launch ma è pronto a tutti gli effetti. Se vuoi metterci le mani:`,
      },
      links: {
        website: { en: "Website ↗", it: "Sito ↗" },
        app:     { en: "App ↗",     it: "App ↗" },
        store:   { en: "Surveyl on Play Store", it: "Surveyl sul Play Store" },
      },
      closing: {
        en: `I am always happy to talk architecture, whether about this project or the problems your team is working on.`,
        it: `Sono sempre felice di parlare di architettura, che sia di questo progetto o dei problemi su cui sta lavorando il tuo team.`,
      },
    },
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

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running Locally

There is no build step. Serve the `site/` directory with any static file server:

```bash
docker compose up          # nginx on port 8080
python3 -m http.server -d site 8080  # quick local alternative
```

## Architecture

This is a **multi-page static site** using React 18 and Babel loaded via CDN — no bundler, no npm. All source files live in `site/`.

**Key files:**
- `site/shared.jsx` — Masthead, Footer, `PaperLabel`, `LangToggle`, and the `useReveal` hook (Intersection Observer scroll animations)
- `site/sections.jsx` — The six reusable page sections: Hero, About, Skinet, Infra, Studies, Work
- `site/i18n.js` — All copy, in both English and Italian, as a nested object on `window.I18N`
- `site/styles.css` — All styles (CSS variables, no CSS-in-JS)
- `*.html` files — Each page independently loads the scripts and calls `ReactDOM.render()` on a local `Page` function

**No SPA router.** Navigation is plain `<a href="*.html">` links. Nginx strips `.html` extensions via `try_files`.

## Globals Pattern

Components and state are attached to `window` instead of using a module system:

- `window.LANG` / `window.setLang(l)` — current locale (`en` or `it`), persisted to `localStorage`
- `window.t(node)` — returns `node[LANG]` with `en` fallback
- `window.I18N` — full i18n dictionary
- `window.SITE` — contact info (email, links)
- Components exported: `HeroSection`, `Masthead`, `Footer`, etc.

React components subscribe to language changes via the custom `langchange` DOM event using the `useLang()` hook.

## Adding Content

All visible text lives in `i18n.js`. Every string needs both `en` and `it` keys. Section components read from `window.I18N` and are re-rendered automatically when the language changes.

## Deployment

Docker builds a static nginx Alpine image. The `nginx.conf` sets 7-day cache for assets and 5-minute cache for HTML, plus security headers (CSP, X-Frame-Options, Referrer-Policy).
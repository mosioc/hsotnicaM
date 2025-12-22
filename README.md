# hsotnicaM

Chill, it's Macintosh… but reversed!  :D

A collection of small, standalone front-end demos and templates (HTML/CSS/JavaScript). Each example lives under `src/` and is intended as a self-contained static page you can open in a browser or serve from a simple static server, based on freeCodeCamp projects.

- **Examples (in `src/`)**:
  - `src/bank-account-managment/` — Bank account management UI (scripts inside `script.js`).
  - `src/drum-machine/` — Small drum pad demo (`index.html`, `script.js`, `styles.css`).
  - `src/markdown-to-html/` — Markdown preview/convert demo.
  - `src/personal-portfolio-webpage/` — Personal portfolio demo.
  - `src/product-landing-page/` — Product landing page demo.
  - `src/survey-form/` — Survey form example.
  - `src/technical-document-page/` — Technical documentation layout demo.
  - `src/tribute-page/` — Tribute page with small interactions.
  - `src/voting-system/` — Voting system demo (scripts under `script.js`).
  - `src/weather-app/` — Weather app demo.

## Quick Start

No build tools required; these are static pages. Two easy ways to preview:

- Direct open (quick):
  - In File Explorer or your editor, open `src/<example>/index.html` (some examples may only include a single `script.js` file — check the folder).

- Recommended: run a local static server (ensures relative asset paths and CORS behave like a web host).

PowerShell examples:

```powershell
# Serve repository root on port 8000 with Python (if installed)
python -m http.server 8000
# then open e.g. http://localhost:8000/src/personal-portfolio-webpage/

# Or, if you have VS Code, install and run the Live Server extension and open any example folder.

# Using npx http-server (Node.js required):
npx http-server . -p 8000
# then browse to http://localhost:8000/src/<example>/
```

## Project notes

- Languages: HTML5, CSS3, vanilla JavaScript (ES6+).
- Each example keeps markup, styles and scripts local to its folder for easy reuse.
- Intended for learning, demos, or quick prototyping.

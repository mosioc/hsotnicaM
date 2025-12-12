# hsotnicaM

Chill, it's Macintosh… but reversed!  :D

A collection of static, handcrafted frontend example pages and templates styled with the Solarized Light palette. The repository contains several standalone HTML/CSS/JavaScript pages (personal portfolio, product landing, tribute, survey form, technical documentation) intended as small demonstrations or templates for front-end work.

## Project Overview

This repository contains several self-contained front-end templates and demo pages built using HTML5, CSS3 (with CSS variables for the Solarized palette) and vanilla JavaScript (ES6+). Each page is a standalone static site that demonstrates responsive layout, accessibility-minded markup, and common UI behaviors (smooth scrolling, scroll reveal, sliders, counters, simple mobile menus).

Open any page in your browser directly or serve the repository over a local static server (recommended for correct loading of relative assets and performance). Example pages live in `src/` and the placeholder main entry is `public/index.html`.

## Installation

No build system or package manager is required to view and use these pages. To run locally:

- Direct file open (quick preview)
  - Open `src/<page>/index.html` in your browser (double-click or use your editor).

- Recommended: run a local static server (PowerShell examples)
  - Using Python (if installed):

    ```powershell
    # serve repository root on port 8000
    python -m http.server 8000
    # then browse to http://localhost:8000/src/personal-portfolio-webpage/index.html
    ```

  - Using npx http-server:

    ```powershell
    npx http-server .\public -p 8000
    # OR serve repo root
    npx http-server . -p 8000
    ```

  - Using a minimal Node static server (if you prefer):

    ```powershell
    npm install -g serve
    serve .\public -p 8000
    ```

## Usage

The repository provides the following pages (each folder under `src/` is independent):

- `src/personal-portfolio-webpage`; Personal portfolio demo
- `src/product-landing-page`; Product landing (Macintosh-themed)
- `src/tribute-page`; Tribute page with quote slider and counters
- `src/survey-form`; Accessible survey form with validations (HTML required attributes)
- `src/technical-document-page`; Technical documentation layout with active nav

To view a page, open:

- `file:///.../hsotnicaM/src/personal-portfolio-webpage/index.html`
or serve and visit:
- `http://localhost:8000/src/personal-portfolio-webpage/`

Examples of interactive behaviors (implemented in page `script.js` files):

- Smooth scrolling for anchor links.
- Mobile menu toggle that adds/removes `.active` class.
- Scroll reveal using `IntersectionObserver`.
- Quote slider with dot controls and autoplay (tribute page).
- Animated counters (tribute page).
- Responsive image sizing and lazy fade-in (product page).

## Architecture Overview

All pages are static and client-side. The general runtime flow:

- Browser requests `index.html`.
- HTML loads CSS files (design tokens, layout, responsive rules).
- HTML loads page's `script.js` which wires up UI behaviors (event listeners, observers).
- User interactions (clicks, scroll) invoke JS handlers that update the DOM/CSS classes.

## Key Scripts & Commands

- Start a local server (Python):

  ```powershell
  python -m http.server 8000
  # Visit http://localhost:8000/src/personal-portfolio-webpage/
  ```

- Start a local server (http-server via npx):

  ```powershell
  npx http-server . -p 8000
  ```

- Linting/Formatting (recommended commands to add after configuring dev tools):

  ```powershell
  npx eslint "src/**/*.js"
  npx prettier --check "src/**/*.{css,html,js}"
  ```

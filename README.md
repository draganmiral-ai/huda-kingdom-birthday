# 👑 The Kingdom of Huda

A luxurious, mobile-first, one-page birthday tribute website — a gift from four friends to **Huda, the Queen of Arabia**, on her 41st birthday.

*One Queen. Four friends. A thousand memories.*

Built with **React + Vite** as a static site. No database, no backend, no authentication, no paid APIs, no environment variables.

---

## ✨ Features

- **Royal Opening** — full-screen sunset hero with a smooth "Enter the Kingdom" scroll and light gold sparkle particles.
- **Meet the Queen** — portrait, tribute copy, and four royal fact cards.
- **The Royal Archives** — responsive masonry gallery with gold framing, captions, and an accessible lightbox (keyboard + focus-trapped).
- **The Royal Council** — four distinct tributes: a letter from Naz, native HTML5 video messages from Sumie and Mr D, and an "AI Ghost of Mitch" transmission with a *Reveal the Truth* button.
- **The Royal Family Tree** — a light-hearted section with an *I Understand* reveal.
- **Final Tribute** — a group photo anchor and the closing *Long live the Queen.*

### Craft & accessibility
- Fully responsive across mobile, tablet, and desktop.
- All photographs optimised for the web; videos are H.264 MP4 with native controls and **no autoplay** (`preload="none"`).
- Descriptive `alt` text throughout, visible keyboard focus states, a skip link, and an accessible modal lightbox.
- Respects `prefers-reduced-motion` — animations and the sparkle canvas switch off entirely.
- Custom gold-crown SVG favicon, document title, and Open Graph / Twitter metadata.

---

## 🛠️ Local development

**Requirements:** [Node.js](https://nodejs.org/) 18+ (built and tested on Node 24) and npm.

```bash
npm install      # install dependencies
npm run dev      # start the Vite dev server (http://localhost:5173)
```

Build and preview the production bundle:

```bash
npm run build    # outputs static files to dist/
npm run preview  # serve the built site locally (http://localhost:4173)
```

---

## 📁 Project structure

```
├── index.html              # HTML shell, meta tags, fonts, favicon
├── public/
│   ├── favicon.svg         # gold crown
│   └── assets/
│       ├── photos/         # optimised images
│       ├── video/          # H.264 messages + posters
│       └── og-image.jpg    # social share image
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── data/content.js     # all written content in one place
│   ├── hooks/
│   ├── components/
│   └── styles/global.css
├── render.yaml             # Render static-site blueprint
└── vite.config.js
```

> **Note:** The original, full-resolution photos and videos are kept locally in `_source_assets/` (git-ignored) and are never modified. Only optimised, web-ready copies are committed under `public/assets/`.

---

## 🚀 Deployment (Render Static Site)

This repo includes a [`render.yaml`](./render.yaml) blueprint. To deploy:

1. Push the repository to GitHub.
2. In the [Render dashboard](https://dashboard.render.com/), choose **New → Static Site** (or **New → Blueprint** to use `render.yaml`) and connect this repository.
3. Confirm the settings:
   - **Build command:** `npm install && npm run build`
   - **Publish directory:** `dist`
   - **Auto-deploy:** enabled
4. Create the service and wait for the first deploy to finish.

Every push to the `main` branch then redeploys automatically.

---

Made with love by the Royal Council — Naz, Sumie, Mr D & Mitch. 👑

## NON-FASTING QUEENS master archive

The homepage is the permanent five-person friendship archive. `/huda` preserves the original birthday experience; `/sumie` is the complete House of Futteisha birthday experience. Naz, Mitch and Mr D are locked entries with accessible native dialogs. Member configuration lives in `src/data/queens.js`; landing styles are scoped in `src/styles/queens.css`. The supplied group photograph is copied unchanged to `public/assets/queens-group.png`. No seasonal name switching is implemented. Original root section bookmarks continue to open Huda.

Validated at 375, 430, 768 and 1440 pixels, including uncropped image geometry, no horizontal overflow, active navigation and locked dialogs with Escape dismissal.

## House of Futteisha

`src/Sumie.jsx` implements the 17-section birthday narrative. `src/data/sumie.js` holds repeated copy, and `src/data/sumie-assets.json` maps each optimized photograph to its exact original filename. Styles are scoped to `.sf-site` in `src/styles/sumie.css`. The route is lazy loaded, with no new runtime dependencies. Original photos remain untouched in the supplied local folder. WebP derivatives (up to 480, 960 and 1440 pixels, without enlargement) live in `public/assets/sumie/`. Explicit dimensions prevent image layout shifts; only the hero loads eagerly. HEIC sources are decoded for web compatibility. The excluded MOV is not copied or referenced.

The Instagram gallery supports horizontal touch scrolling, scroll snapping, keyboard focus and previous/next buttons. The Tinder button opens a native modal with focus containment, Escape dismissal and focus return. Stamp and rule reveals occur once per page visit and respect reduced motion. Arabic spans specify `lang="ar"` and `dir="rtl"`.

QA: production build, responsive bounds at 375/390/430/768/1440 pixels, all image placements loaded, Instagram navigation, Tinder denial and Escape dismissal, Arabic rendering and Baby EID spelling. Master landing and Huda source files remain unchanged. No hosting configuration changes.

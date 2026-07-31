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

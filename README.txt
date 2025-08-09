eBay‑styled PWA (Version 1.0.0)
================================

Files included:
- index.html        → eBay color palette, stamped footer (Version 1.0.0), SW registration
- manifest.json     → PWA metadata + icons
- sw.js             → Simple offline‑first caching
- offline.html      → Shown when offline and route not cached
- /icons/*.png      → App icons (192, 512)

How to use (GitHub web UI — drag & drop):
1) Upload ALL files at the repo root (keep the icons folder structure).
2) Commit changes.
3) Enable GitHub Pages (if you want live hosting): Settings → Pages → Deploy from branch (main) → /root.
4) Visit your Pages URL. Install prompt should work on supported browsers.

Tip: If your site is served from a subpath (e.g., /username/repo), change these to relative paths:
- In index.html: navigator.serviceWorker.register('sw.js');
- In manifest.json: "start_url": "index.html"
- In sw.js APP_SHELL: remove leading slashes ('index.html', 'manifest.json', etc.).

Enjoy.

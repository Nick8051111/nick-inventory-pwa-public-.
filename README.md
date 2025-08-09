# Nick Inventory PWA

Local-first eBay inventory tracker. Offline-ready PWA. CSV import/export. Optional cloud sync.

## Live
After you enable GitHub Pages, the site will be at:
https://Nick8051111.github.io/nick-inventory-pwa/

## Files
- `index.html`
- `manifest.webmanifest`
- `sw.js`
- `icons/icon-192.png`, `icons/icon-512.png`

## Deploy (GitHub Pages)
1. Create a public repo named `nick-inventory-pwa`.
2. Upload all files/folders from this zip.
3. Settings → Pages → Build and deployment: **Deploy from a branch**.
4. Branch: `main` — Folder: `/ (root)` → Save.
5. Wait 1–2 minutes, then open the live URL above.

## Install
Open the site in Chrome → click **Install App** (or "Add to Home screen" on Android).

## Cloud Sync (optional)
Leave `SUPABASE_URL` and `SUPABASE_KEY` blank unless you set up Supabase with RLS/Auth.

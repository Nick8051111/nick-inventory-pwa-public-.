eBay-styled PWA (Version 1.0.1) — Listings wired
====================================================

What changed
- NEW: listings.html (search + sort demo, grid cards)
- Get Started button sends to listings.html
- Nav links added
- Service worker uses relative paths (works under GitHub Pages subpath)
- SW caches listings.html too

Upload steps (GitHub web UI)
1) Drag & drop ALL files at repo root (keep /icons folder).
2) Commit changes.
3) If you used an older SW, hard-refresh twice (Ctrl/Cmd+Shift+R) to activate the new cache.
4) Optional: Settings → Pages → make sure it deploys from main / root.

Next upgrades (say the word)
- Hook items to a JSON file (easy).
- Item detail page template + image gallery.
- Install banner + add-to-home prompt helper.
- Simple cart (localStorage).

— Alfred

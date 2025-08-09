const CACHE_NAME = 'ebay-pwa-v1-1-cache';
const APP_SHELL = [
  'index.html',
  'listings.html',
  'manifest.json',
  'offline.html',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(APP_SHELL);
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE_NAME ? caches.delete(k) : null)));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  event.respondWith((async () => {
    try {
      const network = await fetch(request);
      const cache = await caches.open(CACHE_NAME);
      if (request.method === 'GET') {
        cache.put(request, network.clone()).catch(() => {});
      }
      return network;
    } catch (err) {
      const cached = await caches.match(request);
      return cached || caches.match('offline.html');
    }
  })());
});

// Offline support for the iPhone checklist (Home Screen app). Caches only this page and its icons.
const CACHE = 'arauza-iphone-checklist-v1';
const FILES = ['/iphone-checklist.html', '/icons/apple-touch-icon.png', '/icons/icon-192.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
// Network first, so updates show right away; fall back to the cached copy when offline.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin || !url.pathname.startsWith('/iphone-checklist')) return;
  e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put('/iphone-checklist.html', copy)); return r; })
    .catch(() => caches.match('/iphone-checklist.html')));
});

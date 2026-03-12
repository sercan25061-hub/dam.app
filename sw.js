const CACHE_NAME = 'dsm-cache-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => clients.claim());
self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});